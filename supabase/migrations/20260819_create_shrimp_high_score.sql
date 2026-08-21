create table if not exists public.shrimp_high_score (
  id smallint primary key default 1 check (id = 1),
  score integer not null default 0 check (score between 0 and 10000),
  updated_at timestamptz not null default now()
);

insert into public.shrimp_high_score (id, score)
values (1, 0)
on conflict (id) do nothing;

alter table public.shrimp_high_score enable row level security;

create policy "Anyone can read the shrimp high score"
on public.shrimp_high_score
for select
to anon, authenticated
using (true);

grant select on public.shrimp_high_score to anon, authenticated;
revoke insert, update, delete on public.shrimp_high_score from anon, authenticated;

create or replace function public.submit_shrimp_score(candidate_score integer)
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare
  current_score integer;
begin
  if candidate_score < 0 or candidate_score > 10000 then
    raise exception 'Score must be between 0 and 10000';
  end if;

  update public.shrimp_high_score
  set score = candidate_score, updated_at = now()
  where id = 1 and candidate_score > score;

  select score
  into current_score
  from public.shrimp_high_score
  where id = 1;

  return current_score;
end;
$$;

revoke all on function public.submit_shrimp_score(integer) from public;
grant execute on function public.submit_shrimp_score(integer) to anon, authenticated;
