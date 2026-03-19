-- Create waitlist table
create table if not exists waitlist (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  name text,
  lang text default 'es',
  created_at timestamptz default now()
);

-- Enable RLS
alter table waitlist enable row level security;

-- Allow inserts from anon key
create policy "Allow anonymous inserts" on waitlist
  for insert with check (true);

-- Allow count queries from anon key
create policy "Allow anonymous select for count" on waitlist
  for select using (true);
