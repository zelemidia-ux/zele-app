create table public.perfis (
  id uuid references auth.users(id) on delete cascade primary key,
  nome text not null,
  email text not null,
  role text not null default 'membro',
  avatar_url text,
  created_at timestamp with time zone default timezone('utc', now())
);

alter table public.perfis enable row level security;

create policy "Usuarios podem ver seu proprio perfil"
  on public.perfis for select
  using (auth.uid() = id);

create policy "Usuarios podem atualizar seu proprio perfil"
  on public.perfis for update
  using (auth.uid() = id);

create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.perfis (id, nome, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'nome', 'Novo Membro'),
    new.email
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
