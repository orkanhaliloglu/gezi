-- Italy trip app: one private state document per authenticated user.
-- Run this in Supabase Dashboard > SQL Editor.

create table if not exists public.trip_state (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  constraint trip_state_data_is_object check (jsonb_typeof(data) = 'object')
);

alter table public.trip_state enable row level security;

create policy "Users can read their own trip state"
  on public.trip_state for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can create their own trip state"
  on public.trip_state for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Users can update their own trip state"
  on public.trip_state for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

-- No anonymous access and no delete policy. Users can only select/insert/update
-- the row whose user_id matches their authenticated account.
revoke all on public.trip_state from anon;
grant select, insert, update on public.trip_state to authenticated;

-- Keep updated_at current for every change.
create or replace function public.set_trip_state_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger trip_state_set_updated_at
  before update on public.trip_state
  for each row execute function public.set_trip_state_updated_at();
