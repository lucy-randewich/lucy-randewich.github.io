create table if not exists public.shrimp_scores (
  id bigint generated always as identity primary key,
  player_name text not null check (
    char_length(btrim(player_name)) between 1 and 16
  ),
  score integer not null check (score between 1 and 10000),
  created_at timestamptz not null default now()
);

create index if not exists shrimp_scores_rank_idx
on public.shrimp_scores (score desc, created_at asc);

insert into public.shrimp_scores (player_name, score)
select 'Anonymous', score
from public.shrimp_high_score
where score > 0
  and not exists (select 1 from public.shrimp_scores);

alter table public.shrimp_scores enable row level security;

create policy "Anyone can read the shrimp leaderboard"
on public.shrimp_scores
for select
to anon, authenticated
using (true);

grant select on public.shrimp_scores to anon, authenticated;
revoke insert, update, delete on public.shrimp_scores from anon, authenticated;

create or replace function public.submit_shrimp_leaderboard_score(
  player_name text,
  candidate_score integer
)
returns bigint
language plpgsql
security definer
set search_path = ''
as $$
declare
  inserted_id bigint;
begin
  if char_length(btrim(player_name)) not between 1 and 16 then
    raise exception 'Name must be between 1 and 16 characters';
  end if;

  if candidate_score < 1 or candidate_score > 10000 then
    raise exception 'Score must be between 1 and 10000';
  end if;

  insert into public.shrimp_scores (player_name, score)
  values (btrim(player_name), candidate_score)
  returning id into inserted_id;

  return inserted_id;
end;
$$;

revoke all on function public.submit_shrimp_leaderboard_score(text, integer)
from public;
grant execute on function public.submit_shrimp_leaderboard_score(text, integer)
to anon, authenticated;
