-- 小兵贪吃蛇·共享排行榜（Supabase Free 项目）
-- 在 Supabase Dashboard → SQL Editor 中完整运行一次。

create table if not exists public.snake_scores (
  name_key text primary key check (char_length(name_key) between 1 and 12),
  name text not null check (char_length(name) between 1 and 12),
  score integer not null check (score >= 0 and score <= 100000),
  created_at timestamptz not null default now()
);

alter table public.snake_scores enable row level security;

grant select, insert, update on table public.snake_scores to anon, authenticated;

drop policy if exists "Anyone can read snake scores" on public.snake_scores;
create policy "Anyone can read snake scores"
  on public.snake_scores for select
  using (true);

drop policy if exists "Anyone can submit snake scores" on public.snake_scores;
create policy "Anyone can submit snake scores"
  on public.snake_scores for insert
  with check (true);

drop policy if exists "Anyone can improve snake scores" on public.snake_scores;
create policy "Anyone can improve snake scores"
  on public.snake_scores for update
  using (true)
  with check (score >= 0 and score <= 100000);