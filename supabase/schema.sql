-- Executada no Supabase em 2026-11-17. Tabelas protegidas por RLS.
create table if not exists public.pc_profiles (
 user_id uuid primary key references auth.users(id) on delete cascade,
 budget numeric(12,2) not null default 0 check (budget>=0),
 country text not null default 'Brasil',
 currency text not null default 'BRL',
 resolution text not null default '1080p',
 priority text not null default 'equilibrio',
 market text not null default 'ambos',
 games text not null default '',
 updated_at timestamptz not null default now()
);
create table if not exists public.pc_builds (
 id uuid primary key default gen_random_uuid(),
 user_id uuid not null references auth.users(id) on delete cascade,
 title text not null,
 parts jsonb not null default '[]'::jsonb,
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now()
);
create index if not exists pc_builds_user_id_idx on public.pc_builds(user_id);
alter table public.pc_profiles enable row level security;
alter table public.pc_builds enable row level security;
create policy "profiles_select_own" on public.pc_profiles for select to authenticated using ((select auth.uid())=user_id);
create policy "profiles_insert_own" on public.pc_profiles for insert to authenticated with check ((select auth.uid())=user_id);
create policy "profiles_update_own" on public.pc_profiles for update to authenticated using ((select auth.uid())=user_id) with check ((select auth.uid())=user_id);
create policy "profiles_delete_own" on public.pc_profiles for delete to authenticated using ((select auth.uid())=user_id);
create policy "builds_select_own" on public.pc_builds for select to authenticated using ((select auth.uid())=user_id);
create policy "builds_insert_own" on public.pc_builds for insert to authenticated with check ((select auth.uid())=user_id);
create policy "builds_update_own" on public.pc_builds for update to authenticated using ((select auth.uid())=user_id) with check ((select auth.uid())=user_id);
create policy "builds_delete_own" on public.pc_builds for delete to authenticated using ((select auth.uid())=user_id);
grant select,insert,update,delete on public.pc_profiles,public.pc_builds to authenticated;
