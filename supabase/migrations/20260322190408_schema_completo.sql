-- Departamentos
create table public.departamentos (
  id uuid default gen_random_uuid() primary key,
  nome text not null,
  descricao text,
  departamento_pai_id uuid references public.departamentos(id) on delete set null,
  created_at timestamp with time zone default timezone('utc', now())
);

alter table public.departamentos enable row level security;

create policy "Todos podem ver departamentos"
  on public.departamentos for select
  using (true);

-- Atualizar tabela perfis com novos campos
alter table public.perfis
  add column if not exists departamento_id uuid references public.departamentos(id) on delete set null,
  add column if not exists tags text[] default '{}',
  add column if not exists role text not null default 'membro';

-- Fichas de membros
create table public.fichas_membros (
  id uuid default gen_random_uuid() primary key,
  perfil_id uuid references public.perfis(id) on delete cascade not null,
  data_nascimento date,
  cpf text,
  telefone text,
  cep text,
  endereco text,
  numero text,
  bairro text,
  cidade text,
  estado text,
  estado_civil text,
  conjuge_id uuid references public.perfis(id) on delete set null,
  data_conversao date,
  data_batismo date,
  igreja_origem text,
  funcao text,
  validado boolean default false,
  validado_por uuid references public.perfis(id) on delete set null,
  validado_em timestamp with time zone,
  created_at timestamp with time zone default timezone('utc', now())
);

alter table public.fichas_membros enable row level security;

create policy "Membro ve sua propria ficha"
  on public.fichas_membros for select
  using (auth.uid() = perfil_id);

create policy "Membro edita sua propria ficha"
  on public.fichas_membros for update
  using (auth.uid() = perfil_id);

create policy "Membro cria sua propria ficha"
  on public.fichas_membros for insert
  with check (auth.uid() = perfil_id);

-- Vinculos familiares
create table public.familias (
  id uuid default gen_random_uuid() primary key,
  perfil_id uuid references public.perfis(id) on delete cascade not null,
  familiar_id uuid references public.perfis(id) on delete cascade not null,
  parentesco text not null,
  created_at timestamp with time zone default timezone('utc', now()),
  unique(perfil_id, familiar_id)
);

alter table public.familias enable row level security;

create policy "Membros veem seus vinculos familiares"
  on public.familias for select
  using (auth.uid() = perfil_id or auth.uid() = familiar_id);

-- Pedidos de cartao fisico
create table public.pedidos_cartao (
  id uuid default gen_random_uuid() primary key,
  perfil_id uuid references public.perfis(id) on delete cascade not null,
  status text not null default 'pendente',
  created_at timestamp with time zone default timezone('utc', now())
);

alter table public.pedidos_cartao enable row level security;

create policy "Membro ve seu proprio pedido"
  on public.pedidos_cartao for select
  using (auth.uid() = perfil_id);

create policy "Membro cria pedido"
  on public.pedidos_cartao for insert
  with check (auth.uid() = perfil_id);

-- Kits
create table public.kits (
  id uuid default gen_random_uuid() primary key,
  nome text not null,
  descricao text,
  ativo boolean default true,
  created_at timestamp with time zone default timezone('utc', now())
);

alter table public.kits enable row level security;

create policy "Todos podem ver kits ativos"
  on public.kits for select
  using (ativo = true);

-- Itens dos kits
create table public.kit_itens (
  id uuid default gen_random_uuid() primary key,
  kit_id uuid references public.kits(id) on delete cascade not null,
  nome text not null,
  descricao text,
  created_at timestamp with time zone default timezone('utc', now())
);

alter table public.kit_itens enable row level security;

create policy "Todos podem ver itens dos kits"
  on public.kit_itens for select
  using (true);

-- Pedidos de kit
create table public.pedidos_kit (
  id uuid default gen_random_uuid() primary key,
  perfil_id uuid references public.perfis(id) on delete cascade not null,
  kit_id uuid references public.kits(id) on delete cascade not null,
  status text not null default 'pendente',
  created_at timestamp with time zone default timezone('utc', now())
);

alter table public.pedidos_kit enable row level security;

create policy "Voluntario ve seu proprio pedido de kit"
  on public.pedidos_kit for select
  using (auth.uid() = perfil_id);

create policy "Voluntario cria pedido de kit"
  on public.pedidos_kit for insert
  with check (auth.uid() = perfil_id);

-- Escalas de culto
create table public.escalas (
  id uuid default gen_random_uuid() primary key,
  evento_id uuid,
  departamento_id uuid references public.departamentos(id) on delete cascade not null,
  perfil_id uuid references public.perfis(id) on delete cascade not null,
  confirmado boolean default false,
  created_at timestamp with time zone default timezone('utc', now())
);

alter table public.escalas enable row level security;

create policy "Voluntario ve suas escalas"
  on public.escalas for select
  using (auth.uid() = perfil_id);

create policy "Voluntario confirma sua escala"
  on public.escalas for update
  using (auth.uid() = perfil_id);

-- Eventos e cultos
create table public.eventos (
  id uuid default gen_random_uuid() primary key,
  nome text not null,
  tipo text not null default 'culto',
  departamento_id uuid references public.departamentos(id) on delete set null,
  data date not null,
  horario time not null,
  local text,
  descricao text,
  banner_feed_url text,
  banner_stories_url text,
  banner_telao_url text,
  criado_por uuid references public.perfis(id) on delete set null,
  created_at timestamp with time zone default timezone('utc', now())
);

alter table public.eventos enable row level security;

create policy "Todos podem ver eventos"
  on public.eventos for select
  using (true);