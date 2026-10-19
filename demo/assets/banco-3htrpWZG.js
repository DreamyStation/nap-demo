const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dist-B6FANgyq.js","./index-MDGrIVsw.js","./index-buGv_iNp.css"])))=>i.map(i=>d[i]);
import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./index-MDGrIVsw.js";var c=e=>({id:e.id,name:e.name,createdAt:e.created_at,deletedAt:e.deleted_at,purgeOn:e.purge_on,openingBalance:e.opening_balance_cents===null||e.opening_balance_on===null?null:{cents:Number(e.opening_balance_cents),on:e.opening_balance_on}}),l=e=>({id:e.id,name:e.name,email:e.email,phone:e.phone,notes:e.notes,status:e.status,createdAt:e.created_at,updatedAt:e.updated_at}),u=e=>({...l(e),quoteCount:Number(e.quote_count)}),d=e=>({id:e.id,name:e.name,unit:e.unit,basePriceCents:e.base_price_cents,estCostCents:e.est_cost_cents,status:e.status,createdAt:e.created_at,updatedAt:e.updated_at}),f=e=>({id:e.id,kind:e.kind,amountCents:e.amount_cents,paidOn:e.paid_on,method:e.method,note:e.note,reversesId:e.reverses_id,createdAt:e.created_at}),p=e=>({id:e.id,orderId:e.order_id,quoteId:e.quote_id,quoteNumber:e.quote_number,clientId:e.client_id,clientName:e.client_name,number:e.number,kind:e.kind,kindIndex:e.kind_index,kindTotal:e.kind_total,dueDate:e.due_date,amountCents:e.amount_cents,paidCents:Number(e.paid_cents),canceled:e.canceled,payments:e.payments.map(f)}),m=e=>({id:e.id,description:e.description,category:e.category,amountCents:e.amount_cents,dueDate:e.due_date,notes:e.notes,canceled:e.canceled,paidCents:Number(e.paid_cents),createdAt:e.created_at,payments:e.payments.map(f)}),h=e=>({id:e.id,direction:e.direction,source:e.source,kind:e.kind,amountCents:e.amount_cents,occurredOn:e.occurred_on,quoteId:e.quote_id,quoteNumber:e.quote_number,clientName:e.client_name,receivableKind:e.receivable_kind,receivableIndex:e.receivable_index,receivableTotal:e.receivable_total,expenseId:e.expense_id,expenseDescription:e.expense_description,category:e.category,incomeId:e.income_id,incomeDescription:e.income_description,incomeCategory:e.income_category}),g=e=>({id:e.id,description:e.description,category:e.category,amountCents:Number(e.amount_cents),receivedOn:e.received_on,clientId:e.client_id,clientName:e.client_name,note:e.note,createdAt:e.created_at,reversed:e.reversed,reversal:e.reversal?{id:e.reversal.id,receivedOn:e.reversal.received_on,note:e.reversal.note,createdAt:e.reversal.created_at}:null}),_=e=>({kind:e.kind,on:e.on,amountCents:Number(e.amount_cents),clientName:e.client_name,quoteId:e.quote_id??null,quoteNumber:e.quote_number??null,description:e.description??null}),v=e=>({id:e.id,number:e.number,clientId:e.client_id,clientName:e.client_name,status:e.status,validUntil:e.valid_until,totalCents:e.total_cents,sentAt:e.sent_at,createdAt:e.created_at,updatedAt:e.updated_at});function ee(e){return e.kind===`percent`?{tipo:`percent`,valor:e.bps}:e.kind===`fixed`?{tipo:`fixed`,valor:e.cents}:{tipo:`none`,valor:0}}function y(e,t){return e===`percent`?{kind:`percent`,bps:t}:e===`fixed`?{kind:`fixed`,cents:t}:{kind:`none`}}function te(e){let t=e.order?{id:e.order.id,status:e.order.status,approvedAt:e.order.approved_at,receivables:e.order.receivables.map(p)}:null;return{...v(e),client:{id:e.client_id,name:e.client_name,email:e.client_email,phone:e.client_phone,status:e.client_status},terms:e.terms,notes:e.notes,discount:y(e.discount_kind,Number(e.discount_value)),subtotalCents:e.subtotal_cents,discountCents:e.discount_cents,items:e.items.map(e=>({position:e.position,description:e.description,quantityMilli:e.quantity_milli,unitPriceCents:e.unit_price_cents,lineTotalCents:e.line_total_cents})),events:e.events.map(e=>({fromStatus:e.from_status,toStatus:e.to_status,at:e.at,confirmed:e.confirmed,system:e.system})),order:t}}var b=e=>({id:e.id,receivableId:e.receivable_id,state:e.state,scheduledFor:e.scheduled_for,note:e.note,createdAt:e.created_at}),ne=e=>({id:e.id,title:e.title,dueDate:e.due_date,clientId:e.client_id,clientName:e.client_name,notes:e.notes,doneAt:e.done_at,createdAt:e.created_at}),re=e=>({id:e.id,question:e.question,answer:e.answer,sourceKind:e.source_kind,sourceLabel:e.source_label,verifiedOn:e.verified_on,reviewOn:e.review_on,createdAt:e.created_at,updatedAt:e.updated_at}),x=e=>({id:e.id,title:e.title,onDate:e.on_date,startTime:e.start_time,endTime:e.end_time,clientId:e.client_id,clientName:e.client_name,place:e.place,notes:e.notes,status:e.status,createdAt:e.created_at,updatedAt:e.updated_at}),S=e=>({id:e.id,kind:e.period_kind,periodStart:e.period_start,targetCents:Number(e.target_cents),createdAt:e.created_at,updatedAt:e.updated_at}),C=e=>({key:e.alert_key,state:e.state,until:e.until,reason:e.reason,updatedAt:e.updated_at}),w=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,T=e=>e&&w.test(e)?e:null;function E({chamar:t,aoGravar:n=()=>{},origem:r,migracoes:a,aposImportar:s}){async function f(e,n){try{return await t(e,n)}catch(e){throw o(e)}}async function y(e){let t=await e();return n(),t}async function E(){let e=await f(`current_company`);return e?c(e):null}async function D(){let e=await E();if(!e)throw new i(`nao_encontrado`,`Crie a sua empresa primeiro.`);return e.id}let O=e=>new i(`nao_encontrado`,e);return{company:{current:()=>E(),create:e=>y(async()=>{await f(`create_company`,{p_name:e});let t=await E();if(!t)throw new i(`desconhecido`,`Não foi possível criar a empresa.`);return t}),rename:e=>y(async()=>c(await f(`rename_company`,{p_name:e}))),setOpeningBalance:e=>y(async()=>{await f(`set_opening_balance`,{p_company:await D(),p_cents:e?.cents??null,p_on:e?.on??null});let t=await E();if(!t)throw O(`Empresa não encontrada.`);return t}),hasBusinessData:async()=>!!await f(`has_business_data`),importAll:e=>y(async()=>{let t=await f(`import_company_data`,{p_company:await D(),p_data:e});return await s?.().catch(()=>void 0),t}),exportAll:()=>y(async()=>f(`export_company_data`,{p_company:await D()})),requestDeletion:()=>y(async()=>{let t=await f(`request_company_deletion`,{p_company:await D()});return e(new Date(t))}),cancelDeletion:()=>y(async()=>{await f(`cancel_company_deletion`,{p_company:await D()})})},clients:{list:async(e={})=>(await f(`list_clients`,{p_status:e.status??`ativo`,p_search:e.search??null})).map(e=>u(e)),get:async e=>{if(!w.test(e))return null;let t=await f(`get_client`,{p_id:e});return t?l(t):null},create:e=>y(async()=>l(await f(`save_client`,{p_id:null,p_name:e.name,p_email:e.email??null,p_phone:e.phone??null,p_notes:e.notes??null}))),update:(e,t)=>y(async()=>{if(!w.test(e))throw O(`Cliente não encontrado.`);return l(await f(`save_client`,{p_id:e,p_name:t.name,p_email:t.email??null,p_phone:t.phone??null,p_notes:t.notes??null}))}),setStatus:(e,t)=>y(async()=>{if(!w.test(e))throw O(`Cliente não encontrado.`);return l(await f(`set_client_status`,{p_id:e,p_status:t}))})},services:{list:async(e={})=>(await f(`list_services`,{p_status:e.status??`ativo`,p_search:e.search??null})).map(d),get:async e=>{if(!w.test(e))return null;let t=await f(`get_service`,{p_id:e});return t?d(t):null},create:e=>y(async()=>d(await f(`save_service`,{p_id:null,p_name:e.name,p_unit:e.unit??``,p_base_price_cents:e.basePriceCents??null,p_est_cost_cents:e.estCostCents??null}))),update:(e,t)=>y(async()=>{if(!w.test(e))throw O(`Serviço não encontrado.`);return d(await f(`save_service`,{p_id:e,p_name:t.name,p_unit:t.unit??``,p_base_price_cents:t.basePriceCents??null,p_est_cost_cents:t.estCostCents??null}))}),setStatus:(e,t)=>y(async()=>{if(!w.test(e))throw O(`Serviço não encontrado.`);return d(await f(`set_service_status`,{p_id:e,p_status:t}))})},quotes:{list:async(e={})=>(await f(`list_quotes`,{p_status:e.status??`todos`,p_client:T(e.clientId),p_search:e.search??null})).map(v),get:async e=>{if(!w.test(e))return null;let t=await f(`get_quote`,{p_id:e});return t?te(t):null},save:e=>y(async()=>{let t=ee(e.discount);return f(`save_quote`,{p_quote_id:e.id??null,p_client_id:e.clientId,p_valid_until:e.validUntil,p_terms:e.terms??null,p_notes:e.notes??null,p_discount_kind:t.tipo,p_discount_value:t.valor,p_items:e.items.map(e=>({description:e.description,quantity_milli:e.quantityMilli,unit_price_cents:e.unitPriceCents}))})}),transition:(e,t,n=!1)=>y(async()=>{if(!w.test(e))throw O(`Este orçamento não foi encontrado.`);return f(`transition_quote`,{p_quote_id:e,p_to:t,p_confirmed:n})}),approve:(e,t,n=!1)=>y(async()=>{if(!w.test(e))throw O(`Este orçamento não foi encontrado.`);return f(`approve_quote`,{p_quote_id:e,p_down_payment_cents:t.downPaymentCents,p_down_payment_due_date:t.downPaymentCents>0?t.downPaymentDueDate??null:null,p_installment_count:t.installmentCount,p_first_due_date:t.installmentCount>0?t.firstDueDate??null:null,p_confirmed:n})}),duplicate:e=>y(async()=>{if(!w.test(e))throw O(`Este orçamento não foi encontrado.`);return f(`duplicate_quote`,{p_quote_id:e})}),expireOverdue:async()=>{let e=Number(await f(`expire_overdue_quotes`,{p_company:await D()}));return e>0&&n(),e}},receivables:{list:async(e={})=>(await f(`list_receivables`,{p_quote:T(e.quoteId),p_client:T(e.clientId),p_order:null,p_include_canceled:e.includeCanceled??!1})).map(p),registerPayment:e=>y(async()=>{if(!w.test(e.receivableId))throw O(`Esta parcela não foi encontrada.`);return f(`register_payment`,{p_receivable_id:e.receivableId,p_amount_cents:e.amountCents,p_paid_on:e.paidOn??null,p_method:e.method??null,p_note:e.note??null})}),reversePayment:(e,t={})=>y(async()=>{if(!w.test(e))throw O(`Este pagamento não foi encontrado.`);return f(`reverse_payment`,{p_payment_id:e,p_paid_on:t.paidOn??null,p_note:t.note??null})})},collection:{states:async()=>(await f(`list_collection_states`)).map(b),history:async e=>w.test(e)?(await f(`list_collection_events`,{p_receivable_id:e})).map(b):[],setState:e=>y(async()=>{if(!w.test(e.receivableId))throw O(`Esta parcela não foi encontrada.`);let t=await f(`set_collection_state`,{p_receivable_id:e.receivableId,p_state:e.state,p_scheduled_for:e.scheduledFor??null,p_note:e.note??null});return t?b(t):null})},expenses:{list:async(e={})=>(await f(`list_expenses`,{p_include_canceled:e.includeCanceled??!1})).map(m),save:(e,t)=>y(async()=>{if(e!==void 0&&!w.test(e))throw O(`Esta despesa não foi encontrada.`);return f(`save_expense`,{p_expense_id:e??null,p_description:t.description,p_category:t.category,p_amount_cents:t.amountCents,p_due_date:t.dueDate,p_notes:t.notes??null})}),saveSeries:(e,t)=>y(async()=>{let n=await f(`create_expense_series`,{p_description:e.description,p_category:e.category,p_amount_cents:e.amountCents,p_first_due:e.dueDate,p_count:t,p_notes:e.notes??null});return Array.isArray(n)?n:n.replace(/^\{|\}$/g,``).split(`,`).filter(Boolean)}),pay:(e,t={})=>y(async()=>{if(!w.test(e))throw O(`Esta despesa não foi encontrada.`);return f(`pay_expense`,{p_expense_id:e,p_paid_on:t.paidOn??null,p_method:t.method??null,p_note:t.note??null})}),reversePayment:(e,t={})=>y(async()=>{if(!w.test(e))throw O(`Este pagamento não foi encontrado.`);return f(`reverse_expense_payment`,{p_payment_id:e,p_paid_on:t.paidOn??null,p_note:t.note??null})}),cancel:e=>y(async()=>{if(!w.test(e))throw O(`Esta despesa não foi encontrada.`);await f(`cancel_expense`,{p_expense_id:e})})},tasks:{list:async(e={})=>(await f(`list_tasks`,{p_include_done:e.includeDone??!1,p_client:T(e.clientId)})).map(ne),save:(e,t)=>y(async()=>{if(e!==void 0&&!w.test(e))throw O(`Este lembrete não foi encontrado.`);return f(`save_task`,{p_id:e??null,p_title:t.title,p_due:t.dueDate,p_client:t.clientId??null,p_notes:t.notes??null})}),setDone:(e,t)=>y(async()=>{if(!w.test(e))throw O(`Este lembrete não foi encontrado.`);await f(`set_task_done`,{p_id:e,p_done:t})}),remove:e=>y(async()=>{if(!w.test(e))throw O(`Este lembrete não foi encontrado.`);await f(`delete_task`,{p_id:e})})},answers:{list:async e=>(await f(`list_saved_answers`,{p_search:e??null})).map(re),save:(e,t)=>y(async()=>{if(e!==void 0&&!w.test(e))throw O(`Esta resposta guardada não foi encontrada.`);return f(`save_saved_answer`,{p_id:e??null,p_question:t.question,p_answer:t.answer,p_source_kind:t.sourceKind,p_source_label:t.sourceLabel??null,p_verified:t.verified,p_review_on:t.reviewOn})}),remove:e=>y(async()=>{if(!w.test(e))throw O(`Esta resposta guardada não foi encontrada.`);await f(`delete_saved_answer`,{p_id:e})})},agenda:{list:async(e={})=>(await f(`list_appointments`,{p_from:e.from??null,p_to:e.to??null})).map(x),save:(e,t)=>y(async()=>{if(e!==void 0&&!w.test(e))throw O(`Este compromisso não foi encontrado.`);if(t.clientId&&!w.test(t.clientId))throw O(`Este cliente não foi encontrado.`);return f(`save_appointment`,{p_id:e??null,p_title:t.title,p_on:t.onDate,p_start:t.startTime||null,p_end:t.endTime||null,p_client:t.clientId??null,p_place:t.place??null,p_notes:t.notes??null})}),setStatus:(e,t)=>y(async()=>{if(!w.test(e))throw O(`Este compromisso não foi encontrado.`);await f(`set_appointment_status`,{p_id:e,p_status:t})}),remove:e=>y(async()=>{if(!w.test(e))throw O(`Este compromisso não foi encontrado.`);await f(`delete_appointment`,{p_id:e})})},goals:{list:async()=>(await f(`list_revenue_goals`)).map(S),save:e=>y(async()=>f(`save_revenue_goal`,{p_kind:e.kind,p_period_on:e.periodOn,p_target_cents:e.targetCents})),remove:e=>y(async()=>{if(!w.test(e))throw O(`Esta meta não foi encontrada.`);await f(`delete_revenue_goal`,{p_id:e})})},system:{info:async()=>{let e=await f(`table_counts`);return{origem:r,migracoes:a?await a():[],contagens:e.map(e=>({tabela:e.tabela,n:Number(e.n)}))}}},alerts:{states:async()=>(await f(`list_alert_states`)).map(C),snooze:(e,t,n)=>y(async()=>{await f(`snooze_alert`,{p_key:e,p_until:t,p_reason:n??null})}),dismiss:(e,t)=>y(async()=>{await f(`dismiss_alert`,{p_key:e,p_reason:t??null})}),restore:e=>y(async()=>{await f(`restore_alert`,{p_key:e})})},incomes:{list:async()=>(await f(`list_incomes`)).map(g),conflicts:async e=>(await f(`list_income_conflicts`,{p_amount_cents:e.amountCents,p_received_on:e.receivedOn??null,p_client_id:T(e.clientId)})).map(_),save:e=>y(async()=>{if(e.clientId&&!w.test(e.clientId))throw O(`Este cliente não foi encontrado.`);return f(`save_income`,{p_description:e.description,p_category:e.category,p_amount_cents:e.amountCents,p_received_on:e.receivedOn??null,p_client_id:e.clientId??null,p_note:e.note??null,p_confirmed:e.confirmed??!1})}),reverse:(e,t={})=>y(async()=>{if(!w.test(e))throw O(`Esta receita não foi encontrada.`);return f(`reverse_income`,{p_income_id:e,p_received_on:t.paidOn??null,p_note:t.note??null})})},ledger:{list:async()=>(await f(`list_ledger`)).map(h)}}}async function D(e){await e.exec(`analyze`)}var O=/^[a-z][a-z0-9_]*$/;function k(e){return e===void 0?null:typeof e==`object`&&e&&!(e instanceof Date)?JSON.stringify(e):e}function A(e){return e instanceof Date?e.toISOString():typeof e==`bigint`?Number(e):Array.isArray(e)?e.map(A):e}function j(e){let t=e??{};throw{code:t.code,message:t.message??String(e),details:t.detail??null,hint:t.hint??null}}var M=e=>typeof e==`function`?e():e;function N(){let e=new Map;return async(t,n)=>{let r=e.get(n);return r===void 0&&(r=!!(await t.query(`select bool_or(prorettype = 'void'::regtype) as v from pg_catalog.pg_proc where proname = $1`,[n])).rows[0]?.v,e.set(n,r)),r}}function P(e,t){if(!O.test(e))throw Error(`Nome de função inválido: ${e}`);let n=Object.keys(t);for(let e of n)if(!O.test(e))throw Error(`Nome de argumento inválido: ${e}`);return{lista:n.map((e,t)=>`${e} => $${t+1}`).join(`, `),valores:n.map(e=>k(t[e]))}}function F(e,t){let n=N();return async(r,i={})=>{let{lista:a,valores:o}=P(r,i),s=M(t);try{return await e.transaction(async e=>{await e.exec(`set local role authenticated`),await e.query(`select set_config('request.jwt.claim.sub', $1, true)`,[s]);let t=await n(e,r),i=await e.query(`select public.${r}(${a}) as r`,o);return t?null:A(i.rows[0]?.r)})}catch(e){j(e)}}}function I(e,t,n=()=>{}){return E({chamar:F(e,t),aoGravar:n,origem:`local`,aposImportar:()=>D(e),migracoes:async()=>{try{return(await e.query(`select name from nap.migrations order by name`)).rows.map(e=>e.name)}catch{return[]}}})}var L=`-- NAP · 0001 · Núcleo: empresas, membros e o molde de isolamento por empresa.
-- Convenções (valem para TODAS as migrações):
--   * toda tabela de negócio tem company_id e passa por public.apply_company_rls();
--   * funções security definer sempre com "set search_path = ''" e checagem de empresa própria
--     (o dono da tabela ignora a RLS, então a função precisa conferir quem está chamando);
--   * função nova nasce executável por PUBLIC no Postgres: sempre revogar e conceder explicitamente.
-- Volta atrás (down): supabase/down/0001_nucleo.down.sql (testado em supabase/tests/migracoes.test.ts)

create table public.companies (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 1 and 120),
  created_at timestamptz not null default now(),
  -- Preenchido quando o dono pede a exclusão; a exclusão definitiva vem após a carência (0003).
  deleted_at timestamptz
);

create table public.company_members (
  company_id uuid not null references public.companies (id) on delete cascade,
  user_id uuid not null references auth.users (id) on delete cascade,
  role text not null default 'owner' check (role in ('owner')),
  created_at timestamptz not null default now(),
  primary key (company_id, user_id),
  -- D11 (MVP): uma empresa por usuário. O modelo já permite várias; para liberar, basta remover esta linha.
  constraint company_members_one_company_per_user unique (user_id)
);

-- O usuário logado é membro desta empresa?
create function public.is_member(p_company uuid) returns boolean
language sql stable security definer set search_path = ''
as $$
  select exists (
    select 1
    from public.company_members m
    where m.company_id = p_company
      and m.user_id = (select auth.uid())
  )
$$;

-- O usuário logado é DONO desta empresa?
create function public.is_owner(p_company uuid) returns boolean
language sql stable security definer set search_path = ''
as $$
  select exists (
    select 1
    from public.company_members m
    where m.company_id = p_company
      and m.user_id = (select auth.uid())
      and m.role = 'owner'
  )
$$;

revoke all on function public.is_member(uuid), public.is_owner(uuid) from public, anon;
grant execute on function public.is_member(uuid), public.is_owner(uuid) to authenticated;

-- Molde de isolamento: liga a RLS (forçada), tira todos os acessos e devolve só o necessário.
-- p_writable = false deixa a tabela somente leitura para o navegador (escrita só por funções do servidor).
create function public.apply_company_rls(p_table regclass, p_writable boolean default true) returns void
language plpgsql set search_path = ''
as $$
declare
  v_seq regclass;
begin
  if not exists (
    select 1 from pg_catalog.pg_attribute
    where attrelid = p_table and attname = 'company_id' and not attisdropped
  ) then
    raise exception 'A tabela % precisa ter a coluna company_id', p_table;
  end if;

  execute format('alter table %s enable row level security', p_table);
  execute format('alter table %s force row level security', p_table);
  execute format('revoke all on %s from public, anon, authenticated', p_table);

  -- O Supabase também abre as SEQUÊNCIAS (contadores) por padrão. Fecha as da tabela; só a tabela
  -- gravável devolve o uso ao navegador (necessário para colunas serial).
  for v_seq in
    select d.objid::regclass
      from pg_catalog.pg_depend d
      join pg_catalog.pg_class c on c.oid = d.objid and c.relkind = 'S'
     where d.refobjid = p_table and d.deptype in ('a', 'i')
  loop
    execute format('revoke all on sequence %s from public, anon, authenticated', v_seq);
    if p_writable then
      execute format('grant usage on sequence %s to authenticated', v_seq);
    end if;
  end loop;

  execute format('grant select on %s to authenticated', p_table);
  execute format(
    'create policy company_select on %s for select to authenticated using (public.is_member(company_id))',
    p_table
  );

  if p_writable then
    execute format('grant insert, update, delete on %s to authenticated', p_table);
    execute format(
      'create policy company_insert on %s for insert to authenticated with check (public.is_member(company_id))',
      p_table
    );
    execute format(
      'create policy company_update on %s for update to authenticated using (public.is_member(company_id)) with check (public.is_member(company_id))',
      p_table
    );
    execute format(
      'create policy company_delete on %s for delete to authenticated using (public.is_member(company_id))',
      p_table
    );
  end if;
end
$$;

revoke all on function public.apply_company_rls(regclass, boolean) from public, anon, authenticated;

-- companies: o navegador só LÊ e só troca o NOME. Criar e excluir empresa: somente por funções (0003).
alter table public.companies enable row level security;
alter table public.companies force row level security;
revoke all on public.companies from public, anon, authenticated;
grant select on public.companies to authenticated;
grant update (name) on public.companies to authenticated;

create policy companies_select on public.companies for select to authenticated
  using (public.is_member(id));
create policy companies_update on public.companies for update to authenticated
  using (public.is_owner(id)) with check (public.is_owner(id));

-- company_members: o navegador só LÊ. Convites e mudanças de papel virão por funções.
alter table public.company_members enable row level security;
alter table public.company_members force row level security;
revoke all on public.company_members from public, anon, authenticated;
grant select on public.company_members to authenticated;

create policy members_select on public.company_members for select to authenticated
  using (public.is_member(company_id));
`,R=`-- NAP · 0002 · Trilha de auditoria: só inserção, sem segredos, retenção de 12 meses (D14).
-- Guarda quem fez o quê e quando, com metadados mínimos. NÃO grave aqui senhas, tokens,
-- nem dados pessoais desnecessários (nome de cliente, contato, valores).

create table public.audit_events (
  id bigint generated always as identity primary key,
  company_id uuid not null references public.companies (id) on delete cascade,
  -- Sem chave estrangeira de propósito: excluir um usuário não pode reescrever (UPDATE) a trilha.
  actor_user_id uuid,
  action text not null check (char_length(action) between 1 and 80),
  entity text not null check (char_length(entity) between 1 and 80),
  entity_id uuid,
  at timestamptz not null default now(),
  meta jsonb not null default '{}'::jsonb check (pg_column_size(meta) <= 2048)
);

create index audit_events_company_at on public.audit_events (company_id, at desc);

-- Membros só LEEM. Quem grava é a função interna audit_log (abaixo).
select public.apply_company_rls('public.audit_events', false);

-- Imutável: nunca se altera; só se apaga na retenção (run_retention liga nap.purging só dentro dela).
create function public.audit_events_guard() returns trigger
language plpgsql set search_path = ''
as $$
begin
  if tg_op = 'UPDATE' then
    raise exception 'audit_events_immutable' using errcode = '42501';
  end if;
  if coalesce(current_setting('nap.purging', true), '') <> 'on' then
    raise exception 'audit_events_immutable' using errcode = '42501';
  end if;
  return old;
end
$$;

create trigger audit_events_no_change
before update or delete on public.audit_events
for each row execute function public.audit_events_guard();

-- Função de gatilho: não é chamável à mão, mas fica sem execução para ninguém (menor privilégio).
revoke all on function public.audit_events_guard() from public, anon, authenticated;

-- Função interna. Só outras funções do servidor a chamam; o navegador não pode.
create function public.audit_log(
  p_company uuid,
  p_action text,
  p_entity text,
  p_entity_id uuid default null,
  p_meta jsonb default '{}'::jsonb
) returns void
language sql security definer set search_path = ''
as $$
  insert into public.audit_events (company_id, actor_user_id, action, entity, entity_id, meta)
  values (p_company, (select auth.uid()), p_action, p_entity, p_entity_id, coalesce(p_meta, '{}'::jsonb))
$$;

revoke all on function public.audit_log(uuid, text, text, uuid, jsonb) from public, anon, authenticated;
`,z=`-- NAP · 0003 · Empresa: criar, exportar, pedir/cancelar exclusão e retenção.
-- Prazos (D13, D14): carência de 30 dias para exclusão; auditoria guardada por 12 meses.
-- Os prazos são PROPOSTAS a validar com orientação jurídica.

-- Cria a empresa do usuário logado e o torna dono. Uma empresa por usuário (D11).
create function public.create_company(p_name text) returns uuid
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  insert into public.companies (name) values (btrim(p_name)) returning id into v_company;
  insert into public.company_members (company_id, user_id, role) values (v_company, v_user, 'owner');
  perform public.audit_log(v_company, 'company.create', 'company', v_company);
  return v_company;
end
$$;

-- Exporta tudo da empresa em um JSON. Só membros; confere por conta própria (a função ignora a RLS).
-- As tabelas de negócio (clientes, orçamentos...) entram aqui conforme as etapas 3a a 3c.
create function public.export_company_data(p_company uuid) returns jsonb
language plpgsql security definer set search_path = ''
as $$
declare
  v_result jsonb;
begin
  if not public.is_member(p_company) then
    raise exception 'not_member' using errcode = '42501';
  end if;

  perform public.audit_log(p_company, 'company.export', 'company', p_company);

  v_result := jsonb_build_object(
    'format', 1,
    'exported_at', now(),
    'company', (select to_jsonb(c) from public.companies c where c.id = p_company),
    'members', coalesce(
      (select jsonb_agg(to_jsonb(m) order by m.created_at)
         from public.company_members m where m.company_id = p_company),
      '[]'::jsonb),
    'audit_events', coalesce(
      (select jsonb_agg(to_jsonb(a) order by a.at)
         from (select e.* from public.audit_events e
                where e.company_id = p_company order by e.at desc limit 5000) a),
      '[]'::jsonb)
  );
  return v_result;
end
$$;

-- Pede a exclusão: marca a data; a exclusão definitiva só ocorre após a carência. Idempotente.
-- Devolve a data em que a exclusão definitiva acontecerá.
create function public.request_company_deletion(p_company uuid) returns timestamptz
language plpgsql security definer set search_path = ''
as $$
declare
  v_deleted timestamptz;
begin
  if not public.is_owner(p_company) then
    raise exception 'not_owner' using errcode = '42501';
  end if;

  update public.companies
     set deleted_at = coalesce(deleted_at, now())
   where id = p_company
   returning deleted_at into v_deleted;

  perform public.audit_log(p_company, 'company.deletion_requested', 'company', p_company);
  return v_deleted + interval '30 days';
end
$$;

-- Desiste da exclusão enquanto a carência não acabou.
create function public.cancel_company_deletion(p_company uuid) returns void
language plpgsql security definer set search_path = ''
as $$
declare
  v_deleted timestamptz;
begin
  if not public.is_owner(p_company) then
    raise exception 'not_owner' using errcode = '42501';
  end if;

  select deleted_at into v_deleted from public.companies where id = p_company for update;
  if v_deleted is null then
    return;
  end if;
  if now() > v_deleted + interval '30 days' then
    raise exception 'grace_expired' using errcode = 'P0001';
  end if;

  update public.companies set deleted_at = null where id = p_company;
  perform public.audit_log(p_company, 'company.deletion_cancelled', 'company', p_company);
end
$$;

-- Retenção: apaga de vez as empresas cuja carência acabou (com os usuários que ficaram sem empresa)
-- e a auditoria antiga. NÃO é chamável pelo navegador: roda por agendador (pg_cron) ou administrador.
create function public.run_retention(
  p_grace interval default interval '30 days',
  p_audit_keep interval default interval '12 months'
) returns jsonb
language plpgsql security definer set search_path = ''
as $$
declare
  v_companies int;
  v_users int;
  v_audit int;
  v_user_ids uuid[];
begin
  perform set_config('nap.purging', 'on', true);

  select coalesce(array_agg(distinct m.user_id), '{}')
    into v_user_ids
    from public.company_members m
    join public.companies c on c.id = m.company_id
   where c.deleted_at is not null and c.deleted_at < now() - p_grace;

  delete from public.companies where deleted_at is not null and deleted_at < now() - p_grace;
  get diagnostics v_companies = row_count;

  -- Usuário sem nenhuma empresa restante perde também o login (LGPD: não sobra conta órfã).
  delete from auth.users u
   where u.id = any (v_user_ids)
     and not exists (select 1 from public.company_members m where m.user_id = u.id);
  get diagnostics v_users = row_count;

  delete from public.audit_events where at < now() - p_audit_keep;
  get diagnostics v_audit = row_count;

  perform set_config('nap.purging', 'off', true);
  return jsonb_build_object('companies_purged', v_companies, 'users_purged', v_users, 'audit_purged', v_audit);
end
$$;

-- Permissões: criar, exportar e pedir/cancelar exclusão = usuário logado. run_retention = ninguém do navegador.
revoke all on function public.create_company(text) from public, anon;
revoke all on function public.export_company_data(uuid) from public, anon;
revoke all on function public.request_company_deletion(uuid) from public, anon;
revoke all on function public.cancel_company_deletion(uuid) from public, anon;
revoke all on function public.run_retention(interval, interval) from public, anon, authenticated;

grant execute on function public.create_company(text) to authenticated;
grant execute on function public.export_company_data(uuid) to authenticated;
grant execute on function public.request_company_deletion(uuid) to authenticated;
grant execute on function public.cancel_company_deletion(uuid) to authenticated;
`,B=`-- NAP · 0004 · Regras de dinheiro no servidor (D12, opção A): funções PURAS e idênticas às de src/domain.
-- Centavos inteiros, arredondamento meio para cima, só valores não negativos.
-- O teste supabase/tests/regras-dinheiro.test.ts roda os mesmos casos em TypeScript e em SQL e exige
-- resultado idêntico. Se mudar uma regra, mude as duas e o teste.
-- (numeric evita estouro de bigint nos produtos intermediários; o resultado final volta a bigint.)

-- Total de uma linha: preço unitário x quantidade (em milésimos), meio para cima.
create function public.money_mul_qty(p_unit_cents bigint, p_qty_milli bigint) returns bigint
language plpgsql immutable parallel safe set search_path = ''
as $$
begin
  if p_unit_cents is null or p_qty_milli is null or p_unit_cents < 0 or p_qty_milli < 0 then
    raise exception 'money_invalid_input' using errcode = '22023';
  end if;
  return div(p_unit_cents::numeric * p_qty_milli::numeric + 500, 1000)::bigint;
end
$$;

-- Porcentagem de um valor, com a taxa em pontos-base (1% = 100), meio para cima.
create function public.money_percent(p_cents bigint, p_bps integer) returns bigint
language plpgsql immutable parallel safe set search_path = ''
as $$
begin
  if p_cents is null or p_bps is null or p_cents < 0 or p_bps < 0 then
    raise exception 'money_invalid_input' using errcode = '22023';
  end if;
  return div(p_cents::numeric * p_bps::numeric + 5000, 10000)::bigint;
end
$$;

-- Divide um total em N partes de centavos inteiros; o resto vai 1 a 1 para as primeiras partes.
create function public.money_split_evenly(p_total_cents bigint, p_parts integer) returns bigint[]
language plpgsql immutable parallel safe set search_path = ''
as $$
declare
  v_base bigint;
  v_rest bigint;
begin
  if p_total_cents is null or p_parts is null or p_total_cents < 0 or p_parts < 1 then
    raise exception 'money_invalid_input' using errcode = '22023';
  end if;
  v_base := p_total_cents / p_parts;
  v_rest := p_total_cents - v_base * p_parts;
  return array(
    select v_base + case when i <= v_rest then 1 else 0 end
    from generate_series(1, p_parts) as i
    order by i
  );
end
$$;

-- Menor privilégio: só usuário logado (as funções são puras e inofensivas, mas anon não precisa delas).
revoke all on function public.money_mul_qty(bigint, bigint) from public, anon;
revoke all on function public.money_percent(bigint, integer) from public, anon;
revoke all on function public.money_split_evenly(bigint, integer) from public, anon;
grant execute on function public.money_mul_qty(bigint, bigint) to authenticated;
grant execute on function public.money_percent(bigint, integer) to authenticated;
grant execute on function public.money_split_evenly(bigint, integer) to authenticated;
`,V=`-- NAP · 0005 · Clientes e catálogo de serviços (etapa 3a).
-- Cadastros simples: o navegador grava direto (regras de acesso por empresa + regras de tabela).
-- Nada é apagado de verdade: o cliente/serviço é ARQUIVADO e pode ser restaurado.
-- Sem CPF nem dados bancários (minimização de dados, LGPD).

-- Gatilho genérico: atualiza updated_at.
create function public.touch_updated_at() returns trigger
language plpgsql set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end
$$;
revoke all on function public.touch_updated_at() from public, anon, authenticated;

-- Busca sem acento e sem diferença de maiúsculas ("joao" acha "João"). Pura e imutável.
create function public.unaccent_br(p_text text) returns text
language sql immutable parallel safe set search_path = ''
as $$
  select translate(lower(p_text), 'áàâãäéèêëíìîïóòôõöúùûüçñ', 'aaaaaeeeeiiiiooooouuuucn')
$$;
revoke all on function public.unaccent_br(text) from public, anon;
grant execute on function public.unaccent_br(text) to authenticated;

-- ---------- Clientes ----------

create table public.clients (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies (id) on delete cascade,
  name text not null constraint clients_name_check check (char_length(btrim(name)) between 1 and 160),
  email text constraint clients_email_check
    check (email is null or (char_length(email) <= 254 and email ~ '^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$')),
  phone text constraint clients_phone_check check (phone is null or phone ~ '^[0-9+()\\-\\s.]{3,40}$'),
  notes text constraint clients_notes_check check (notes is null or char_length(notes) <= 2000),
  status text not null default 'ativo' constraint clients_status_check check (status in ('ativo', 'arquivado')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  -- Permite chaves estrangeiras compostas: outro registro nunca aponta para cliente de outra empresa.
  unique (company_id, id)
);

create index clients_company_name_idx on public.clients (company_id, lower(name));

-- Limpa espaços e transforma texto vazio em "não informado".
create function public.clients_normalize() returns trigger
language plpgsql set search_path = ''
as $$
begin
  new.name := btrim(new.name);
  new.email := nullif(lower(btrim(new.email)), '');
  new.phone := nullif(btrim(new.phone), '');
  new.notes := nullif(btrim(new.notes), '');
  return new;
end
$$;
revoke all on function public.clients_normalize() from public, anon, authenticated;

create trigger clients_normalize before insert or update on public.clients
for each row execute function public.clients_normalize();
create trigger clients_touch before update on public.clients
for each row execute function public.touch_updated_at();

select public.apply_company_rls('public.clients');

-- ---------- Catálogo de serviços ----------

create table public.service_items (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies (id) on delete cascade,
  name text not null constraint service_items_name_check check (char_length(btrim(name)) between 1 and 160),
  unit text not null default 'un' constraint service_items_unit_check check (char_length(btrim(unit)) between 1 and 20),
  -- Preço e custo são opcionais (o usuário informa o que souber). Em centavos.
  base_price_cents bigint constraint service_items_price_check
    check (base_price_cents is null or (base_price_cents >= 0 and base_price_cents <= 1000000000000)),
  est_cost_cents bigint constraint service_items_cost_check
    check (est_cost_cents is null or (est_cost_cents >= 0 and est_cost_cents <= 1000000000000)),
  status text not null default 'ativo' constraint service_items_status_check check (status in ('ativo', 'arquivado')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (company_id, id)
);

create index service_items_company_name_idx on public.service_items (company_id, lower(name));

create function public.service_items_normalize() returns trigger
language plpgsql set search_path = ''
as $$
begin
  new.name := btrim(new.name);
  new.unit := btrim(new.unit);
  return new;
end
$$;
revoke all on function public.service_items_normalize() from public, anon, authenticated;

create trigger service_items_normalize before insert or update on public.service_items
for each row execute function public.service_items_normalize();
create trigger service_items_touch before update on public.service_items
for each row execute function public.touch_updated_at();

select public.apply_company_rls('public.service_items');
`,H=`-- NAP · 0006 · Orçamentos (etapa 3a).
-- O navegador só LÊ estas tabelas. Quem grava são as funções abaixo, que validam tudo, recalculam os totais
-- com as regras de dinheiro (0004) e registram o histórico. Assim ninguém forja total, estado ou número.
-- Aprovar NÃO está aqui: aprovação cria serviço e recebimentos e é exclusiva da função da etapa 3b.

-- Numeração sequencial por empresa (o número é a identidade que o usuário vê: "Orçamento nº 12").
alter table public.companies add column quote_seq integer not null default 0;

-- Gatilho genérico de registros imutáveis: nunca se altera; só se apaga na retenção (run_retention).
create function public.immutable_row_guard() returns trigger
language plpgsql set search_path = ''
as $$
begin
  if tg_op = 'UPDATE' then
    raise exception 'immutable_row' using errcode = '42501';
  end if;
  if coalesce(current_setting('nap.purging', true), '') <> 'on' then
    raise exception 'immutable_row' using errcode = '42501';
  end if;
  return old;
end
$$;
revoke all on function public.immutable_row_guard() from public, anon, authenticated;

-- ---------- Tabelas ----------

create table public.quotes (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies (id) on delete cascade,
  client_id uuid not null,
  number integer not null check (number >= 1),
  status text not null default 'rascunho'
    constraint quotes_status_check
    check (status in ('rascunho', 'enviado', 'aprovado', 'recusado', 'expirado', 'cancelado')),
  valid_until date not null,
  terms text constraint quotes_terms_check check (terms is null or char_length(terms) <= 4000),
  notes text constraint quotes_notes_check check (notes is null or char_length(notes) <= 2000),
  discount_kind text not null default 'none' check (discount_kind in ('none', 'percent', 'fixed')),
  -- percent: pontos-base (1% = 100); fixed: centavos.
  discount_value bigint not null default 0 check (discount_value >= 0 and discount_value <= 1000000000000),
  -- Totais gravados pela função (nunca pelo navegador). Em centavos.
  subtotal_cents bigint not null default 0 check (subtotal_cents >= 0),
  discount_cents bigint not null default 0 check (discount_cents >= 0),
  total_cents bigint not null default 0 check (total_cents >= 0),
  sent_at timestamptz,
  decided_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint quotes_discount_check check (
    (discount_kind = 'none' and discount_value = 0)
    or (discount_kind = 'percent' and discount_value <= 10000)
    or discount_kind = 'fixed'
  ),
  unique (company_id, id),
  unique (company_id, number),
  -- O cliente precisa ser da MESMA empresa (chave composta). Cliente com orçamento não pode ser apagado.
  foreign key (company_id, client_id) references public.clients (company_id, id)
);

create index quotes_company_status_idx on public.quotes (company_id, status);
create index quotes_company_client_idx on public.quotes (company_id, client_id);

create trigger quotes_touch before update on public.quotes
for each row execute function public.touch_updated_at();

create table public.quote_items (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies (id) on delete cascade,
  quote_id uuid not null,
  position integer not null check (position >= 1),
  description text not null constraint quote_items_description_check
    check (char_length(btrim(description)) between 1 and 300),
  -- Quantidade em milésimos (1,5 = 1500). Preço unitário em centavos.
  quantity_milli bigint not null check (quantity_milli >= 1 and quantity_milli <= 1000000000),
  unit_price_cents bigint not null check (unit_price_cents >= 0 and unit_price_cents <= 1000000000000),
  -- Mesma regra de src/domain (meio para cima), calculada pelo banco: não dá para gravar valor diferente.
  line_total_cents bigint generated always as (public.money_mul_qty(unit_price_cents, quantity_milli)) stored,
  unique (quote_id, position),
  foreign key (company_id, quote_id) references public.quotes (company_id, id) on delete cascade
);

create table public.quote_events (
  id bigint generated always as identity primary key,
  company_id uuid not null references public.companies (id) on delete cascade,
  quote_id uuid not null,
  from_status text,
  to_status text not null,
  actor_user_id uuid,
  at timestamptz not null default now(),
  -- A mudança era incoerente e o usuário confirmou explicitamente.
  confirmed boolean not null default false,
  -- Mudança feita pelo sistema (ex.: expiração automática).
  system boolean not null default false,
  foreign key (company_id, quote_id) references public.quotes (company_id, id) on delete cascade
);

create index quote_events_quote_idx on public.quote_events (quote_id, id);

create trigger quote_events_no_change before update or delete on public.quote_events
for each row execute function public.immutable_row_guard();

-- Somente leitura para o navegador.
select public.apply_company_rls('public.quotes', false);
select public.apply_company_rls('public.quote_items', false);
select public.apply_company_rls('public.quote_events', false);

-- ---------- Regras ----------

-- Data de hoje em São Paulo (vencimentos e validades são datas de calendário, sem fuso).
create function public.today_br() returns date
language sql stable set search_path = ''
as $$ select (now() at time zone 'America/Sao_Paulo')::date $$;

-- Quais mudanças de estado do orçamento existem. Idêntica a src/domain/status.ts (testado nas duas).
create function public.quote_transition_kind(p_from text, p_to text) returns text
language sql immutable parallel safe set search_path = ''
as $$
  select case p_from
    when 'rascunho' then case p_to
      when 'enviado' then 'allowed' when 'cancelado' then 'allowed'
      when 'aprovado' then 'needs_confirmation' when 'recusado' then 'needs_confirmation'
      else 'forbidden' end
    when 'enviado' then case p_to
      when 'aprovado' then 'allowed' when 'recusado' then 'allowed' when 'expirado' then 'allowed'
      when 'cancelado' then 'allowed' when 'rascunho' then 'needs_confirmation'
      else 'forbidden' end
    when 'aprovado' then case p_to when 'cancelado' then 'needs_confirmation' else 'forbidden' end
    when 'recusado' then case p_to
      when 'enviado' then 'needs_confirmation' when 'aprovado' then 'needs_confirmation'
      when 'cancelado' then 'allowed'
      else 'forbidden' end
    when 'expirado' then case p_to
      when 'enviado' then 'needs_confirmation' when 'aprovado' then 'needs_confirmation'
      when 'cancelado' then 'allowed'
      else 'forbidden' end
    else 'forbidden'
  end
$$;

-- Cria ou atualiza um RASCUNHO de orçamento por inteiro (cabeçalho + itens), em uma transação.
-- p_items: lista de {description, quantity_milli, unit_price_cents}. Erros: code + detail (campo).
create function public.save_quote(
  p_quote_id uuid,
  p_client_id uuid,
  p_valid_until date,
  p_terms text,
  p_notes text,
  p_discount_kind text,
  p_discount_value bigint,
  p_items jsonb
) returns uuid
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_status text;
  v_old_client uuid;
  v_client_status text;
  v_quote uuid;
  v_number integer;
  v_item jsonb;
  v_i integer;
  v_desc text;
  v_qty bigint;
  v_price bigint;
  v_subtotal bigint := 0;
  v_discount bigint := 0;
  v_kind text := coalesce(p_discount_kind, 'none');
  v_value bigint := coalesce(p_discount_value, 0);
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  -- Descobre a empresa e confere que o usuário é membro. A mensagem é a mesma para "não existe" e
  -- "é de outra empresa": nada vaza sobre registros alheios.
  if p_quote_id is not null then
    select q.company_id, q.status, q.client_id
      into v_company, v_status, v_old_client
      from public.quotes q where q.id = p_quote_id for update;
    if v_company is null or not public.is_member(v_company) then
      raise exception 'quote_not_found' using errcode = 'P0002';
    end if;
    if v_status <> 'rascunho' then
      raise exception 'quote_not_editable' using errcode = 'P0001';
    end if;
  else
    select c.company_id into v_company from public.clients c where c.id = p_client_id;
    if v_company is null or not public.is_member(v_company) then
      raise exception 'client_not_found' using errcode = 'P0002';
    end if;
  end if;

  -- O cliente tem de ser desta empresa e não pode estar arquivado (a menos que já fosse o do rascunho).
  select c.status into v_client_status
    from public.clients c where c.id = p_client_id and c.company_id = v_company;
  if v_client_status is null then
    raise exception 'client_not_found' using errcode = 'P0002';
  end if;
  if v_client_status = 'arquivado' and (p_quote_id is null or v_old_client is distinct from p_client_id) then
    raise exception 'client_archived' using errcode = 'P0001';
  end if;

  if p_valid_until is null then
    raise exception 'invalid_input' using errcode = '22023', detail = 'valid_until';
  end if;
  if v_kind not in ('none', 'percent', 'fixed') then
    raise exception 'invalid_input' using errcode = '22023', detail = 'discount';
  end if;
  if v_kind = 'none' then
    v_value := 0;
  end if;
  if v_value < 0 or v_value > 1000000000000 or (v_kind = 'percent' and v_value > 10000) then
    raise exception 'invalid_input' using errcode = '22023', detail = 'discount';
  end if;
  if p_terms is not null and char_length(p_terms) > 4000 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'terms';
  end if;
  if p_notes is not null and char_length(p_notes) > 2000 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'notes';
  end if;
  if p_items is null or jsonb_typeof(p_items) <> 'array' or jsonb_array_length(p_items) > 100 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'items';
  end if;

  -- Valida item por item (índice começando em 0, igual ao da tela) e soma as linhas já arredondadas.
  v_i := 0;
  for v_item in select value from jsonb_array_elements(p_items) loop
    v_desc := btrim(v_item ->> 'description');
    if jsonb_typeof(v_item -> 'description') is distinct from 'string' or char_length(v_desc) not between 1 and 300 then
      raise exception 'invalid_input' using errcode = '22023', detail = format('items[%s].description', v_i);
    end if;
    if jsonb_typeof(v_item -> 'quantity_milli') is distinct from 'number'
       or (v_item ->> 'quantity_milli') !~ '^[0-9]{1,10}$' then
      raise exception 'invalid_input' using errcode = '22023', detail = format('items[%s].quantity_milli', v_i);
    end if;
    v_qty := (v_item ->> 'quantity_milli')::bigint;
    if v_qty < 1 or v_qty > 1000000000 then
      raise exception 'invalid_input' using errcode = '22023', detail = format('items[%s].quantity_milli', v_i);
    end if;
    if jsonb_typeof(v_item -> 'unit_price_cents') is distinct from 'number'
       or (v_item ->> 'unit_price_cents') !~ '^[0-9]{1,13}$' then
      raise exception 'invalid_input' using errcode = '22023', detail = format('items[%s].unit_price_cents', v_i);
    end if;
    v_price := (v_item ->> 'unit_price_cents')::bigint;
    if v_price > 1000000000000 then
      raise exception 'invalid_input' using errcode = '22023', detail = format('items[%s].unit_price_cents', v_i);
    end if;
    v_subtotal := v_subtotal + public.money_mul_qty(v_price, v_qty);
    v_i := v_i + 1;
  end loop;

  if v_kind = 'percent' then
    v_discount := public.money_percent(v_subtotal, v_value::integer);
  elsif v_kind = 'fixed' then
    if v_value > v_subtotal then
      raise exception 'discount_exceeds_subtotal' using errcode = '22023', detail = 'discount';
    end if;
    v_discount := v_value;
  end if;

  if p_quote_id is null then
    update public.companies set quote_seq = quote_seq + 1
     where id = v_company returning quote_seq into v_number;
    insert into public.quotes (
      company_id, client_id, number, valid_until, terms, notes,
      discount_kind, discount_value, subtotal_cents, discount_cents, total_cents
    ) values (
      v_company, p_client_id, v_number, p_valid_until, nullif(btrim(p_terms), ''), nullif(btrim(p_notes), ''),
      v_kind, v_value, v_subtotal, v_discount, v_subtotal - v_discount
    ) returning id into v_quote;
    insert into public.quote_events (company_id, quote_id, from_status, to_status, actor_user_id)
      values (v_company, v_quote, null, 'rascunho', v_user);
  else
    v_quote := p_quote_id;
    update public.quotes set
      client_id = p_client_id,
      valid_until = p_valid_until,
      terms = nullif(btrim(p_terms), ''),
      notes = nullif(btrim(p_notes), ''),
      discount_kind = v_kind,
      discount_value = v_value,
      subtotal_cents = v_subtotal,
      discount_cents = v_discount,
      total_cents = v_subtotal - v_discount
    where id = v_quote
    returning number into v_number;
    delete from public.quote_items where quote_id = v_quote;
  end if;

  insert into public.quote_items (company_id, quote_id, position, description, quantity_milli, unit_price_cents)
  select v_company, v_quote, t.n::integer, btrim(t.value ->> 'description'),
         (t.value ->> 'quantity_milli')::bigint, (t.value ->> 'unit_price_cents')::bigint
    from jsonb_array_elements(p_items) with ordinality as t(value, n);

  perform public.audit_log(
    v_company,
    case when p_quote_id is null then 'quote.create' else 'quote.update' end,
    'quote', v_quote, jsonb_build_object('number', v_number)
  );
  return v_quote;
end
$$;

-- Muda o estado do orçamento. "Aprovado" é feito só por approve_quote (etapa 3b).
-- Mudança incoerente exige p_confirmed = true (o usuário viu a explicação e confirmou).
create function public.transition_quote(p_quote_id uuid, p_to text, p_confirmed boolean default false)
returns text
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_from text;
  v_valid date;
  v_total bigint;
  v_number integer;
  v_kind text;
  v_items integer;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  select q.company_id, q.status, q.valid_until, q.total_cents, q.number
    into v_company, v_from, v_valid, v_total, v_number
    from public.quotes q where q.id = p_quote_id for update;
  if v_company is null or not public.is_member(v_company) then
    raise exception 'quote_not_found' using errcode = 'P0002';
  end if;

  v_kind := public.quote_transition_kind(v_from, p_to);
  if v_kind = 'forbidden' then
    raise exception 'transition_forbidden' using errcode = 'P0001';
  end if;
  if p_to = 'aprovado' then
    raise exception 'use_approve_quote' using errcode = 'P0001';
  end if;
  if v_kind = 'needs_confirmation' and not coalesce(p_confirmed, false) then
    raise exception 'confirmation_required' using errcode = 'P0001';
  end if;

  if p_to = 'enviado' then
    select count(*) into v_items from public.quote_items where quote_id = p_quote_id;
    if v_items < 1 or v_total <= 0 then
      raise exception 'quote_empty' using errcode = 'P0001';
    end if;
    if v_valid < public.today_br() then
      raise exception 'quote_validity_past' using errcode = 'P0001';
    end if;
  end if;

  update public.quotes set
    status = p_to,
    sent_at = case when p_to = 'enviado' then now() when p_to = 'rascunho' then null else sent_at end,
    decided_at = case when p_to in ('recusado', 'cancelado') then now() else decided_at end
  where id = p_quote_id;

  insert into public.quote_events (company_id, quote_id, from_status, to_status, actor_user_id, confirmed)
    values (v_company, p_quote_id, v_from, p_to, v_user, v_kind = 'needs_confirmation');
  perform public.audit_log(v_company, 'quote.' || p_to, 'quote', p_quote_id,
    jsonb_build_object('number', v_number, 'from', v_from));
  return p_to;
end
$$;

-- Copia um orçamento para um NOVO rascunho (mesmos itens, validade de hoje + 15 dias). O original não muda.
create function public.duplicate_quote(p_quote_id uuid) returns uuid
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_client uuid;
  v_client_status text;
  v_number integer;
  v_new uuid;
  q public.quotes%rowtype;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  select * into q from public.quotes where id = p_quote_id;
  if q.id is null or not public.is_member(q.company_id) then
    raise exception 'quote_not_found' using errcode = 'P0002';
  end if;
  v_company := q.company_id;
  v_client := q.client_id;

  select c.status into v_client_status from public.clients c where c.id = v_client and c.company_id = v_company;
  if v_client_status = 'arquivado' then
    raise exception 'client_archived' using errcode = 'P0001';
  end if;

  update public.companies set quote_seq = quote_seq + 1 where id = v_company returning quote_seq into v_number;
  insert into public.quotes (
    company_id, client_id, number, valid_until, terms, notes, discount_kind, discount_value,
    subtotal_cents, discount_cents, total_cents
  ) values (
    v_company, v_client, v_number, public.today_br() + 15, q.terms, q.notes, q.discount_kind, q.discount_value,
    q.subtotal_cents, q.discount_cents, q.total_cents
  ) returning id into v_new;

  insert into public.quote_items (company_id, quote_id, position, description, quantity_milli, unit_price_cents)
  select v_company, v_new, i.position, i.description, i.quantity_milli, i.unit_price_cents
    from public.quote_items i where i.quote_id = p_quote_id;

  insert into public.quote_events (company_id, quote_id, from_status, to_status, actor_user_id)
    values (v_company, v_new, null, 'rascunho', v_user);
  perform public.audit_log(v_company, 'quote.duplicate', 'quote', v_new,
    jsonb_build_object('number', v_number, 'from_number', q.number));
  return v_new;
end
$$;

-- Marca como EXPIRADOS os orçamentos enviados cuja validade passou. Idempotente; devolve quantos mudaram.
create function public.expire_overdue_quotes(p_company uuid) returns integer
language plpgsql security definer set search_path = ''
as $$
declare
  v_count integer;
begin
  if not public.is_member(p_company) then
    raise exception 'not_member' using errcode = '42501';
  end if;

  with vencidos as (
    update public.quotes set status = 'expirado'
     where company_id = p_company and status = 'enviado' and valid_until < public.today_br()
     returning id
  )
  insert into public.quote_events (company_id, quote_id, from_status, to_status, system)
  select p_company, id, 'enviado', 'expirado', true from vencidos;
  get diagnostics v_count = row_count;
  return v_count;
end
$$;

-- Permissões: só usuário logado (nunca visitante).
revoke all on function public.today_br() from public, anon;
revoke all on function public.quote_transition_kind(text, text) from public, anon;
revoke all on function public.save_quote(uuid, uuid, date, text, text, text, bigint, jsonb) from public, anon;
revoke all on function public.transition_quote(uuid, text, boolean) from public, anon;
revoke all on function public.duplicate_quote(uuid) from public, anon;
revoke all on function public.expire_overdue_quotes(uuid) from public, anon;
grant execute on function public.today_br() to authenticated;
grant execute on function public.quote_transition_kind(text, text) to authenticated;
grant execute on function public.save_quote(uuid, uuid, date, text, text, text, bigint, jsonb) to authenticated;
grant execute on function public.transition_quote(uuid, text, boolean) to authenticated;
grant execute on function public.duplicate_quote(uuid) to authenticated;
grant execute on function public.expire_overdue_quotes(uuid) to authenticated;
`,U=`-- NAP · 0007 · Aprovação, recebimentos e pagamentos (etapa 3b) + exportação completa.
-- Regras que o banco garante sozinho (o navegador só LÊ estas tabelas):
--   * aprovar um orçamento cria UM serviço (orders) e o plano de recebimentos PREVISTOS (receivables);
--     aprovar de novo devolve o mesmo serviço, nunca duplica;
--   * pagamento é registro imutável; corrigir = ESTORNO (novo registro que aponta para o original,
--     mesma parcela e mesmo valor, no máximo um por pagamento);
--   * cada pagamento e cada estorno gera exatamente UM lançamento financeiro que o espelha;
--   * não se paga mais que o saldo da parcela; previsto nunca vira receita sem um pagamento.
-- As contas de parcelas (plan_installments) são idênticas às de src/domain/installments.ts (testado).

-- ---------- Plano de parcelas (função pura) ----------

-- Sinal (opcional, é a parcela nº 1) + parcelas mensais do restante. O resto de centavos vai 1 a 1 para as
-- primeiras parcelas. As datas mensais partem SEMPRE da 1ª data (31/01, 28/02, 31/03), nunca da anterior.
create function public.plan_installments(
  p_total_cents bigint,
  p_down_cents bigint,
  p_down_due date,
  p_count integer,
  p_first_due date
) returns table (seq integer, kind text, due_date date, amount_cents bigint)
language plpgsql immutable parallel safe set search_path = ''
as $$
declare
  v_rest bigint;
  v_amounts bigint[];
  v_n integer := 0;
  i integer;
  v_min constant date := date '2000-01-01';
  v_max constant date := date '2100-12-31';
begin
  if p_total_cents is null or p_total_cents <= 0 or p_total_cents > 1000000000000 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'total_cents';
  end if;
  if p_down_cents is null or p_down_cents < 0 or p_down_cents > p_total_cents then
    raise exception 'invalid_input' using errcode = '22023', detail = 'down_payment_cents';
  end if;
  if p_count is null or p_count < 0 or p_count > 60 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'installment_count';
  end if;

  v_rest := p_total_cents - p_down_cents;
  if v_rest > 0 and p_count < 1 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'installment_count';
  end if;
  if v_rest = 0 and p_count > 0 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'installment_count';
  end if;

  if p_down_cents > 0 then
    if p_down_due is null or p_down_due < v_min or p_down_due > v_max then
      raise exception 'invalid_input' using errcode = '22023', detail = 'down_payment_due_date';
    end if;
    v_n := v_n + 1;
    seq := v_n; kind := 'sinal'; due_date := p_down_due; amount_cents := p_down_cents;
    return next;
  end if;

  if v_rest > 0 then
    if p_first_due is null or p_first_due < v_min or p_first_due > v_max then
      raise exception 'invalid_input' using errcode = '22023', detail = 'first_due_date';
    end if;
    if p_down_cents > 0 and p_down_due > p_first_due then
      raise exception 'invalid_input' using errcode = '22023', detail = 'down_payment_due_date';
    end if;
    -- A última data (1ª + 59 meses) também precisa caber no intervalo permitido.
    if (p_first_due + make_interval(months => p_count - 1))::date > v_max then
      raise exception 'invalid_input' using errcode = '22023', detail = 'first_due_date';
    end if;
    v_amounts := public.money_split_evenly(v_rest, p_count);
    for i in 1 .. p_count loop
      v_n := v_n + 1;
      seq := v_n;
      kind := 'parcela';
      due_date := (p_first_due + make_interval(months => i - 1))::date;
      amount_cents := v_amounts[i];
      return next;
    end loop;
  end if;
end
$$;

-- ---------- Tabelas ----------

-- O serviço fechado: nasce quando o orçamento é aprovado. Um por orçamento, para sempre.
create table public.orders (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies (id) on delete cascade,
  quote_id uuid not null,
  client_id uuid not null,
  status text not null default 'ativo' constraint orders_status_check check (status in ('ativo', 'cancelado')),
  total_cents bigint not null check (total_cents > 0 and total_cents <= 1000000000000),
  approved_at timestamptz not null default now(),
  canceled_at timestamptz,
  constraint orders_canceled_check check ((status = 'cancelado') = (canceled_at is not null)),
  unique (company_id, id),
  -- Aprovar duas vezes nunca cria dois serviços.
  constraint orders_one_per_quote unique (company_id, quote_id),
  foreign key (company_id, quote_id) references public.quotes (company_id, id),
  foreign key (company_id, client_id) references public.clients (company_id, id)
);

create index orders_company_client_idx on public.orders (company_id, client_id);

-- Parcelas PREVISTAS (sinal e parcelas). Valor e vencimento não mudam; só se cancela (com o serviço).
create table public.receivables (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies (id) on delete cascade,
  order_id uuid not null,
  number integer not null check (number >= 1),
  kind text not null check (kind in ('sinal', 'parcela')),
  due_date date not null check (due_date >= date '2000-01-01' and due_date <= date '2100-12-31'),
  amount_cents bigint not null check (amount_cents > 0 and amount_cents <= 1000000000000),
  canceled_at timestamptz,
  created_at timestamptz not null default now(),
  unique (company_id, id),
  constraint receivables_number_unique unique (order_id, number),
  foreign key (company_id, order_id) references public.orders (company_id, id) on delete cascade
);

create index receivables_company_due_idx on public.receivables (company_id, due_date);

-- Pagamentos e estornos: imutáveis. O estorno aponta para o pagamento original e, pela chave estrangeira,
-- só pode ser da MESMA parcela, do MESMO valor e de um registro que seja de fato um pagamento.
create table public.payments (
  id uuid primary key default gen_random_uuid(),
  seq bigint generated always as identity,
  company_id uuid not null references public.companies (id) on delete cascade,
  receivable_id uuid not null,
  kind text not null check (kind in ('pagamento', 'estorno')),
  amount_cents bigint not null check (amount_cents > 0 and amount_cents <= 1000000000000),
  paid_on date not null check (paid_on >= date '2000-01-01'),
  method text constraint payments_method_check
    check (method is null or method in ('pix', 'dinheiro', 'transferencia', 'cartao', 'boleto', 'outro')),
  note text constraint payments_note_check check (note is null or char_length(note) <= 500),
  reverses_payment_id uuid,
  reverses_kind text generated always as (case when reverses_payment_id is not null then 'pagamento' end) stored,
  created_by uuid,
  created_at timestamptz not null default now(),
  constraint payments_reversal_check check ((kind = 'estorno') = (reverses_payment_id is not null)),
  unique (company_id, id),
  unique (id, receivable_id, amount_cents, kind),
  unique (id, kind, amount_cents, paid_on),
  -- Um pagamento só é estornado uma vez.
  constraint payments_one_reversal unique (reverses_payment_id),
  foreign key (company_id, receivable_id) references public.receivables (company_id, id),
  foreign key (reverses_payment_id, receivable_id, amount_cents, reverses_kind)
    references public.payments (id, receivable_id, amount_cents, kind)
);

create index payments_receivable_idx on public.payments (receivable_id, seq);
create index payments_company_date_idx on public.payments (company_id, paid_on);

-- Lançamento financeiro: o dinheiro que de fato entrou ou saiu. Espelha EXATAMENTE o pagamento
-- (mesmo tipo, valor e data, por chave estrangeira) e é único por pagamento.
create table public.ledger_entries (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies (id) on delete cascade,
  payment_id uuid not null,
  direction text not null check (direction in ('entrada', 'saida')),
  payment_kind text generated always as (case direction when 'entrada' then 'pagamento' else 'estorno' end) stored,
  amount_cents bigint not null check (amount_cents > 0),
  occurred_on date not null,
  created_at timestamptz not null default now(),
  constraint ledger_entries_one_per_payment unique (payment_id),
  foreign key (company_id, payment_id) references public.payments (company_id, id),
  foreign key (payment_id, payment_kind, amount_cents, occurred_on)
    references public.payments (id, kind, amount_cents, paid_on)
);

create index ledger_company_date_idx on public.ledger_entries (company_id, occurred_on);

-- ---------- Guardas (defesa em profundidade: o navegador nem escreve aqui) ----------

-- Serviço: só muda de "ativo" para "cancelado".
create function public.orders_guard() returns trigger
language plpgsql set search_path = ''
as $$
begin
  if tg_op = 'DELETE' then
    if coalesce(current_setting('nap.purging', true), '') <> 'on' then
      raise exception 'immutable_row' using errcode = '42501';
    end if;
    return old;
  end if;
  if old.status = 'ativo' and new.status = 'cancelado'
     and (new.id, new.company_id, new.quote_id, new.client_id, new.total_cents, new.approved_at)
         is not distinct from (old.id, old.company_id, old.quote_id, old.client_id, old.total_cents, old.approved_at) then
    return new;
  end if;
  raise exception 'immutable_row' using errcode = '42501';
end
$$;
revoke all on function public.orders_guard() from public, anon, authenticated;
create trigger orders_guard before update or delete on public.orders
for each row execute function public.orders_guard();

-- Parcela: só ganha a data de cancelamento (uma vez); o resto nunca muda.
create function public.receivables_guard() returns trigger
language plpgsql set search_path = ''
as $$
begin
  if tg_op = 'DELETE' then
    if coalesce(current_setting('nap.purging', true), '') <> 'on' then
      raise exception 'immutable_row' using errcode = '42501';
    end if;
    return old;
  end if;
  if old.canceled_at is null and new.canceled_at is not null
     and (new.id, new.company_id, new.order_id, new.number, new.kind, new.due_date, new.amount_cents, new.created_at)
         is not distinct from (old.id, old.company_id, old.order_id, old.number, old.kind, old.due_date, old.amount_cents, old.created_at) then
    return new;
  end if;
  raise exception 'immutable_row' using errcode = '42501';
end
$$;
revoke all on function public.receivables_guard() from public, anon, authenticated;
create trigger receivables_guard before update or delete on public.receivables
for each row execute function public.receivables_guard();

create trigger payments_no_change before update or delete on public.payments
for each row execute function public.immutable_row_guard();

create trigger ledger_entries_no_change before update or delete on public.ledger_entries
for each row execute function public.immutable_row_guard();

-- Somente leitura para o navegador.
select public.apply_company_rls('public.orders', false);
select public.apply_company_rls('public.receivables', false);
select public.apply_company_rls('public.payments', false);
select public.apply_company_rls('public.ledger_entries', false);

-- ---------- Aprovar ----------

-- Aprova o orçamento e cria o serviço com o plano de recebimentos PREVISTOS, numa transação só.
-- Idempotente: se o orçamento já foi aprovado, devolve o serviço que existe, sem criar nada.
-- "Aprovar" a partir de rascunho, recusado ou expirado é incoerente e exige p_confirmed = true.
create function public.approve_quote(
  p_quote_id uuid,
  p_down_payment_cents bigint,
  p_down_payment_due_date date,
  p_installment_count integer,
  p_first_due_date date,
  p_confirmed boolean default false
) returns uuid
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_from text;
  v_total bigint;
  v_number integer;
  v_client uuid;
  v_kind text;
  v_items integer;
  v_order uuid;
  v_sum bigint;
  v_parts integer;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  select q.company_id, q.status, q.total_cents, q.number, q.client_id
    into v_company, v_from, v_total, v_number, v_client
    from public.quotes q where q.id = p_quote_id for update;
  if v_company is null or not public.is_member(v_company) then
    raise exception 'quote_not_found' using errcode = 'P0002';
  end if;

  -- Aprovar de novo não duplica nada.
  select o.id into v_order from public.orders o where o.company_id = v_company and o.quote_id = p_quote_id;
  if v_order is not null and v_from = 'aprovado' then
    return v_order;
  end if;

  v_kind := public.quote_transition_kind(v_from, 'aprovado');
  if v_kind = 'forbidden' then
    raise exception 'transition_forbidden' using errcode = 'P0001';
  end if;
  if v_kind = 'needs_confirmation' and not coalesce(p_confirmed, false) then
    raise exception 'confirmation_required' using errcode = 'P0001';
  end if;

  select count(*) into v_items from public.quote_items where quote_id = p_quote_id;
  if v_items < 1 or v_total <= 0 then
    raise exception 'quote_empty' using errcode = 'P0001';
  end if;

  insert into public.orders (company_id, quote_id, client_id, total_cents)
    values (v_company, p_quote_id, v_client, v_total)
    returning id into v_order;

  -- plan_installments valida o plano inteiro e levanta invalid_input com o campo em "detail".
  insert into public.receivables (company_id, order_id, number, kind, due_date, amount_cents)
  select v_company, v_order, p.seq, p.kind, p.due_date, p.amount_cents
    from public.plan_installments(
      v_total,
      coalesce(p_down_payment_cents, 0),
      p_down_payment_due_date,
      coalesce(p_installment_count, 0),
      p_first_due_date
    ) p;

  select coalesce(sum(r.amount_cents), 0), count(*) into v_sum, v_parts
    from public.receivables r where r.order_id = v_order;
  if v_sum <> v_total then
    raise exception 'plan_mismatch' using errcode = 'XX000';
  end if;

  update public.quotes set status = 'aprovado', decided_at = now() where id = p_quote_id;
  insert into public.quote_events (company_id, quote_id, from_status, to_status, actor_user_id, confirmed)
    values (v_company, p_quote_id, v_from, 'aprovado', v_user, v_kind = 'needs_confirmation');
  perform public.audit_log(v_company, 'quote.aprovado', 'quote', p_quote_id,
    jsonb_build_object('number', v_number, 'from', v_from, 'order_id', v_order, 'receivables', v_parts));
  return v_order;
end
$$;

-- ---------- Pagar e estornar ----------

-- Registra um pagamento (dinheiro que entrou) em uma parcela. Não deixa pagar mais que o saldo.
create function public.register_payment(
  p_receivable_id uuid,
  p_amount_cents bigint,
  p_paid_on date default null,
  p_method text default null,
  p_note text default null
) returns uuid
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_amount bigint;
  v_canceled timestamptz;
  v_paid bigint;
  v_date date;
  v_note text := nullif(btrim(p_note), '');
  v_payment uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  -- Trava a parcela: dois pagamentos ao mesmo tempo não passam do saldo.
  select r.company_id, r.amount_cents, r.canceled_at
    into v_company, v_amount, v_canceled
    from public.receivables r where r.id = p_receivable_id for update;
  if v_company is null or not public.is_member(v_company) then
    raise exception 'receivable_not_found' using errcode = 'P0002';
  end if;
  if v_canceled is not null then
    raise exception 'receivable_canceled' using errcode = 'P0001';
  end if;

  if p_amount_cents is null or p_amount_cents <= 0 or p_amount_cents > 1000000000000 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'amount_cents';
  end if;
  v_date := coalesce(p_paid_on, public.today_br());
  if v_date > public.today_br() or v_date < date '2000-01-01' then
    raise exception 'invalid_input' using errcode = '22023', detail = 'paid_on';
  end if;
  if p_method is not null and p_method not in ('pix', 'dinheiro', 'transferencia', 'cartao', 'boleto', 'outro') then
    raise exception 'invalid_input' using errcode = '22023', detail = 'method';
  end if;
  if v_note is not null and char_length(v_note) > 500 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'note';
  end if;

  select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
    into v_paid from public.payments p where p.receivable_id = p_receivable_id;
  if p_amount_cents > v_amount - v_paid then
    raise exception 'payment_exceeds_balance' using errcode = '22023', detail = 'amount_cents';
  end if;

  insert into public.payments (company_id, receivable_id, kind, amount_cents, paid_on, method, note, created_by)
    values (v_company, p_receivable_id, 'pagamento', p_amount_cents, v_date, p_method, v_note, v_user)
    returning id into v_payment;
  insert into public.ledger_entries (company_id, payment_id, direction, amount_cents, occurred_on)
    values (v_company, v_payment, 'entrada', p_amount_cents, v_date);
  perform public.audit_log(v_company, 'payment.register', 'payment', v_payment,
    jsonb_build_object('receivable_id', p_receivable_id, 'amount_cents', p_amount_cents));
  return v_payment;
end
$$;

-- Estorna um pagamento por inteiro: cria um registro novo que o desfaz (o original continua lá).
-- Um pagamento só pode ser estornado uma vez; um estorno não se estorna.
create function public.reverse_payment(
  p_payment_id uuid,
  p_paid_on date default null,
  p_note text default null
) returns uuid
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_receivable uuid;
  v_kind text;
  v_amount bigint;
  v_orig_date date;
  v_date date;
  v_note text := nullif(btrim(p_note), '');
  v_reversal uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  select p.company_id, p.receivable_id, p.kind, p.amount_cents, p.paid_on
    into v_company, v_receivable, v_kind, v_amount, v_orig_date
    from public.payments p where p.id = p_payment_id;
  if v_company is null or not public.is_member(v_company) then
    raise exception 'payment_not_found' using errcode = 'P0002';
  end if;

  -- Mesma trava dos pagamentos: estornos e pagamentos da parcela acontecem um de cada vez.
  perform 1 from public.receivables r where r.id = v_receivable for update;

  if v_kind <> 'pagamento' then
    raise exception 'not_a_payment' using errcode = 'P0001';
  end if;
  if exists (select 1 from public.payments x where x.reverses_payment_id = p_payment_id) then
    raise exception 'already_reversed' using errcode = 'P0001';
  end if;

  v_date := coalesce(p_paid_on, public.today_br());
  if v_date > public.today_br() or v_date < v_orig_date then
    raise exception 'invalid_input' using errcode = '22023', detail = 'paid_on';
  end if;
  if v_note is not null and char_length(v_note) > 500 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'note';
  end if;

  insert into public.payments (
    company_id, receivable_id, kind, amount_cents, paid_on, note, reverses_payment_id, created_by
  ) values (v_company, v_receivable, 'estorno', v_amount, v_date, v_note, p_payment_id, v_user)
  returning id into v_reversal;
  insert into public.ledger_entries (company_id, payment_id, direction, amount_cents, occurred_on)
    values (v_company, v_reversal, 'saida', v_amount, v_date);
  perform public.audit_log(v_company, 'payment.reverse', 'payment', v_reversal,
    jsonb_build_object('reverses', p_payment_id, 'amount_cents', v_amount));
  return v_reversal;
end
$$;

-- ---------- Mudar o estado: agora cancelar um orçamento aprovado cancela o serviço e as parcelas ----------

create or replace function public.transition_quote(p_quote_id uuid, p_to text, p_confirmed boolean default false)
returns text
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_from text;
  v_valid date;
  v_total bigint;
  v_number integer;
  v_kind text;
  v_items integer;
  v_order uuid;
  v_paid bigint;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  select q.company_id, q.status, q.valid_until, q.total_cents, q.number
    into v_company, v_from, v_valid, v_total, v_number
    from public.quotes q where q.id = p_quote_id for update;
  if v_company is null or not public.is_member(v_company) then
    raise exception 'quote_not_found' using errcode = 'P0002';
  end if;

  v_kind := public.quote_transition_kind(v_from, p_to);
  if v_kind = 'forbidden' then
    raise exception 'transition_forbidden' using errcode = 'P0001';
  end if;
  if p_to = 'aprovado' then
    raise exception 'use_approve_quote' using errcode = 'P0001';
  end if;
  if v_kind = 'needs_confirmation' and not coalesce(p_confirmed, false) then
    raise exception 'confirmation_required' using errcode = 'P0001';
  end if;

  if p_to = 'enviado' then
    select count(*) into v_items from public.quote_items where quote_id = p_quote_id;
    if v_items < 1 or v_total <= 0 then
      raise exception 'quote_empty' using errcode = 'P0001';
    end if;
    if v_valid < public.today_br() then
      raise exception 'quote_validity_past' using errcode = 'P0001';
    end if;
  end if;

  -- Cancelar um orçamento aprovado cancela o serviço e as parcelas, mas só se não sobrou dinheiro
  -- recebido: pagamentos precisam ser estornados antes (o histórico fica inteiro).
  if v_from = 'aprovado' and p_to = 'cancelado' then
    select o.id into v_order from public.orders o where o.company_id = v_company and o.quote_id = p_quote_id for update;
    if v_order is not null then
      perform 1 from public.receivables r where r.order_id = v_order for update;
      select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
        into v_paid
        from public.payments p join public.receivables r on r.id = p.receivable_id
       where r.order_id = v_order;
      if v_paid <> 0 then
        raise exception 'has_payments' using errcode = 'P0001';
      end if;
      update public.receivables set canceled_at = now() where order_id = v_order and canceled_at is null;
      update public.orders set status = 'cancelado', canceled_at = now() where id = v_order;
    end if;
  end if;

  update public.quotes set
    status = p_to,
    sent_at = case when p_to = 'enviado' then now() when p_to = 'rascunho' then null else sent_at end,
    decided_at = case when p_to in ('recusado', 'cancelado') then now() else decided_at end
  where id = p_quote_id;

  insert into public.quote_events (company_id, quote_id, from_status, to_status, actor_user_id, confirmed)
    values (v_company, p_quote_id, v_from, p_to, v_user, v_kind = 'needs_confirmation');
  perform public.audit_log(v_company, 'quote.' || p_to, 'quote', p_quote_id,
    jsonb_build_object('number', v_number, 'from', v_from));
  return p_to;
end
$$;

-- ---------- Exportação: agora com TODAS as tabelas de negócio ----------
-- Antes (0003) só saíam empresa, membros e auditoria. Toda tabela nova com company_id precisa entrar aqui:
-- o teste de exportação confere isso pelo catálogo do banco e falha se alguma faltar.

create or replace function public.export_company_data(p_company uuid) returns jsonb
language plpgsql security definer set search_path = ''
as $$
begin
  if not public.is_member(p_company) then
    raise exception 'not_member' using errcode = '42501';
  end if;

  perform public.audit_log(p_company, 'company.export', 'company', p_company);

  return jsonb_build_object(
    'format', 2,
    'exported_at', now(),
    'company', (select to_jsonb(c) from public.companies c where c.id = p_company),
    'members', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.user_id)
         from public.company_members t where t.company_id = p_company), '[]'::jsonb),
    'clients', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.clients t where t.company_id = p_company), '[]'::jsonb),
    'service_items', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.service_items t where t.company_id = p_company), '[]'::jsonb),
    'quotes', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.number)
         from public.quotes t where t.company_id = p_company), '[]'::jsonb),
    'quote_items', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.quote_id, t.position)
         from public.quote_items t where t.company_id = p_company), '[]'::jsonb),
    'quote_events', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.id)
         from public.quote_events t where t.company_id = p_company), '[]'::jsonb),
    'orders', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.approved_at, t.id)
         from public.orders t where t.company_id = p_company), '[]'::jsonb),
    'receivables', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.order_id, t.number)
         from public.receivables t where t.company_id = p_company), '[]'::jsonb),
    'payments', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.payments t where t.company_id = p_company), '[]'::jsonb),
    'ledger_entries', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.occurred_on, t.created_at, t.id)
         from public.ledger_entries t where t.company_id = p_company), '[]'::jsonb),
    'audit_events', coalesce(
      (select jsonb_agg(to_jsonb(a) order by a.at)
         from (select e.* from public.audit_events e
                where e.company_id = p_company order by e.at desc limit 5000) a), '[]'::jsonb)
  );
end
$$;

-- ---------- Permissões ----------
-- (transition_quote e export_company_data mantêm as permissões que já tinham: create or replace)

revoke all on function public.plan_installments(bigint, bigint, date, integer, date) from public, anon;
revoke all on function public.approve_quote(uuid, bigint, date, integer, date, boolean) from public, anon;
revoke all on function public.register_payment(uuid, bigint, date, text, text) from public, anon;
revoke all on function public.reverse_payment(uuid, date, text) from public, anon;
grant execute on function public.plan_installments(bigint, bigint, date, integer, date) to authenticated;
grant execute on function public.approve_quote(uuid, bigint, date, integer, date, boolean) to authenticated;
grant execute on function public.register_payment(uuid, bigint, date, text, text) to authenticated;
grant execute on function public.reverse_payment(uuid, date, text) to authenticated;
`,W=`-- NAP · 0008 · Despesas e caixa (etapa 3c) + exportação com as tabelas novas.
-- Mesmo molde dos recebimentos (0007), do lado de quem PAGA:
--   * despesa = uma conta a pagar (descrição, categoria, valor, vencimento);
--   * pagar uma despesa registra um pagamento IMUTÁVEL e um lançamento de SAÍDA que o espelha;
--   * corrigir = ESTORNO (novo registro que aponta para o original; gera um lançamento de entrada);
--   * só se edita ou cancela uma despesa que não tem dinheiro pago (líquido de estornos).
-- O navegador só LÊ estas tabelas; quem grava são as funções abaixo.

-- ---------- Tabelas ----------

create table public.expenses (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies (id) on delete cascade,
  description text not null constraint expenses_description_check
    check (char_length(btrim(description)) between 1 and 200),
  category text not null default 'outros' constraint expenses_category_check
    check (category in ('materiais', 'ferramentas', 'transporte', 'marketing', 'impostos', 'pessoal', 'aluguel', 'servicos', 'outros')),
  amount_cents bigint not null constraint expenses_amount_check
    check (amount_cents > 0 and amount_cents <= 1000000000000),
  due_date date not null constraint expenses_due_check
    check (due_date >= date '2000-01-01' and due_date <= date '2100-12-31'),
  notes text constraint expenses_notes_check check (notes is null or char_length(notes) <= 1000),
  canceled_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (company_id, id)
);

create index expenses_company_due_idx on public.expenses (company_id, due_date);

create trigger expenses_touch before update on public.expenses
for each row execute function public.touch_updated_at();

-- Pagamentos e estornos de despesa: imutáveis; o estorno é da mesma despesa, do mesmo valor e de um pagamento.
create table public.expense_payments (
  id uuid primary key default gen_random_uuid(),
  seq bigint generated always as identity,
  company_id uuid not null references public.companies (id) on delete cascade,
  expense_id uuid not null,
  kind text not null check (kind in ('pagamento', 'estorno')),
  amount_cents bigint not null check (amount_cents > 0 and amount_cents <= 1000000000000),
  paid_on date not null check (paid_on >= date '2000-01-01'),
  method text constraint expense_payments_method_check
    check (method is null or method in ('pix', 'dinheiro', 'transferencia', 'cartao', 'boleto', 'outro')),
  note text constraint expense_payments_note_check check (note is null or char_length(note) <= 500),
  reverses_payment_id uuid,
  reverses_kind text generated always as (case when reverses_payment_id is not null then 'pagamento' end) stored,
  created_by uuid,
  created_at timestamptz not null default now(),
  constraint expense_payments_reversal_check check ((kind = 'estorno') = (reverses_payment_id is not null)),
  unique (company_id, id),
  unique (id, expense_id, amount_cents, kind),
  unique (id, kind, amount_cents, paid_on),
  constraint expense_payments_one_reversal unique (reverses_payment_id),
  foreign key (company_id, expense_id) references public.expenses (company_id, id),
  foreign key (reverses_payment_id, expense_id, amount_cents, reverses_kind)
    references public.expense_payments (id, expense_id, amount_cents, kind)
);

create index expense_payments_expense_idx on public.expense_payments (expense_id, seq);
create index expense_payments_company_date_idx on public.expense_payments (company_id, paid_on);

create trigger expense_payments_no_change before update or delete on public.expense_payments
for each row execute function public.immutable_row_guard();

-- Lançamento financeiro: agora pode nascer de um pagamento de despesa (saída) ou do estorno dele (entrada).
-- Cada lançamento tem UMA origem (recebimento ou despesa) e espelha exatamente o registro de origem.
alter table public.ledger_entries alter column payment_id drop not null;
alter table public.ledger_entries add column expense_payment_id uuid;
alter table public.ledger_entries add column expense_payment_kind text
  generated always as (case direction when 'saida' then 'pagamento' else 'estorno' end) stored;
alter table public.ledger_entries add constraint ledger_entries_one_per_expense_payment unique (expense_payment_id);
alter table public.ledger_entries add constraint ledger_entries_source_check
  check ((payment_id is null) <> (expense_payment_id is null));
alter table public.ledger_entries add constraint ledger_entries_expense_company_fkey
  foreign key (company_id, expense_payment_id) references public.expense_payments (company_id, id);
alter table public.ledger_entries add constraint ledger_entries_expense_mirror_fkey
  foreign key (expense_payment_id, expense_payment_kind, amount_cents, occurred_on)
  references public.expense_payments (id, kind, amount_cents, paid_on);

-- ---------- Guarda da despesa ----------

-- Despesa cancelada nunca mais muda. Valor, data e descrição só mudam sem dinheiro pago (líquido de estornos).
-- O cancelamento só acontece sem dinheiro pago. Apagar: só na retenção.
create function public.expenses_guard() returns trigger
language plpgsql set search_path = ''
as $$
declare
  v_net bigint;
begin
  if tg_op = 'DELETE' then
    if coalesce(current_setting('nap.purging', true), '') <> 'on' then
      raise exception 'immutable_row' using errcode = '42501';
    end if;
    return old;
  end if;

  if old.canceled_at is not null then
    raise exception 'immutable_row' using errcode = '42501';
  end if;
  if (new.id, new.company_id, new.created_at) is distinct from (old.id, old.company_id, old.created_at) then
    raise exception 'immutable_row' using errcode = '42501';
  end if;

  select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
    into v_net from public.expense_payments p where p.expense_id = old.id;
  if v_net <> 0 and (
       (new.description, new.category, new.amount_cents, new.due_date, new.notes, new.canceled_at)
       is distinct from
       (old.description, old.category, old.amount_cents, old.due_date, old.notes, old.canceled_at)
     ) then
    raise exception 'immutable_row' using errcode = '42501';
  end if;
  return new;
end
$$;
revoke all on function public.expenses_guard() from public, anon, authenticated;
create trigger expenses_guard before update or delete on public.expenses
for each row execute function public.expenses_guard();

-- Somente leitura para o navegador.
select public.apply_company_rls('public.expenses', false);
select public.apply_company_rls('public.expense_payments', false);

-- ---------- Funções ----------

-- Cria ou edita uma despesa. Sem id = cria (na empresa do usuário). Editar só sem pagamento e sem cancelamento.
create function public.save_expense(
  p_expense_id uuid,
  p_description text,
  p_category text,
  p_amount_cents bigint,
  p_due_date date,
  p_notes text default null
) returns uuid
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_canceled timestamptz;
  v_net bigint;
  v_desc text := btrim(p_description);
  v_notes text := nullif(btrim(p_notes), '');
  v_category text := coalesce(p_category, 'outros');
  v_id uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  if p_expense_id is null then
    select m.company_id into v_company from public.company_members m where m.user_id = v_user limit 1;
    if v_company is null then
      raise exception 'not_member' using errcode = '42501';
    end if;
  else
    select e.company_id, e.canceled_at into v_company, v_canceled
      from public.expenses e where e.id = p_expense_id for update;
    if v_company is null or not public.is_member(v_company) then
      raise exception 'expense_not_found' using errcode = 'P0002';
    end if;
    if v_canceled is not null then
      raise exception 'expense_canceled' using errcode = 'P0001';
    end if;
    select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
      into v_net from public.expense_payments p where p.expense_id = p_expense_id;
    if v_net <> 0 then
      raise exception 'expense_locked' using errcode = 'P0001';
    end if;
  end if;

  if v_desc is null or char_length(v_desc) not between 1 and 200 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'description';
  end if;
  if v_category not in ('materiais', 'ferramentas', 'transporte', 'marketing', 'impostos', 'pessoal', 'aluguel', 'servicos', 'outros') then
    raise exception 'invalid_input' using errcode = '22023', detail = 'category';
  end if;
  if p_amount_cents is null or p_amount_cents <= 0 or p_amount_cents > 1000000000000 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'amount_cents';
  end if;
  if p_due_date is null or p_due_date < date '2000-01-01' or p_due_date > date '2100-12-31' then
    raise exception 'invalid_input' using errcode = '22023', detail = 'due_date';
  end if;
  if v_notes is not null and char_length(v_notes) > 1000 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'notes';
  end if;

  if p_expense_id is null then
    insert into public.expenses (company_id, description, category, amount_cents, due_date, notes)
      values (v_company, v_desc, v_category, p_amount_cents, p_due_date, v_notes)
      returning id into v_id;
  else
    update public.expenses set
      description = v_desc, category = v_category, amount_cents = p_amount_cents,
      due_date = p_due_date, notes = v_notes
    where id = p_expense_id;
    v_id := p_expense_id;
  end if;

  perform public.audit_log(v_company,
    case when p_expense_id is null then 'expense.create' else 'expense.update' end,
    'expense', v_id, jsonb_build_object('amount_cents', p_amount_cents));
  return v_id;
end
$$;

-- Paga a despesa (por inteiro): registra o pagamento e o lançamento de saída. Só uma vez, a menos que seja estornada.
create function public.pay_expense(
  p_expense_id uuid,
  p_paid_on date default null,
  p_method text default null,
  p_note text default null
) returns uuid
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_amount bigint;
  v_canceled timestamptz;
  v_net bigint;
  v_date date;
  v_note text := nullif(btrim(p_note), '');
  v_payment uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  select e.company_id, e.amount_cents, e.canceled_at into v_company, v_amount, v_canceled
    from public.expenses e where e.id = p_expense_id for update;
  if v_company is null or not public.is_member(v_company) then
    raise exception 'expense_not_found' using errcode = 'P0002';
  end if;
  if v_canceled is not null then
    raise exception 'expense_canceled' using errcode = 'P0001';
  end if;

  v_date := coalesce(p_paid_on, public.today_br());
  if v_date > public.today_br() or v_date < date '2000-01-01' then
    raise exception 'invalid_input' using errcode = '22023', detail = 'paid_on';
  end if;
  if p_method is not null and p_method not in ('pix', 'dinheiro', 'transferencia', 'cartao', 'boleto', 'outro') then
    raise exception 'invalid_input' using errcode = '22023', detail = 'method';
  end if;
  if v_note is not null and char_length(v_note) > 500 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'note';
  end if;

  select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
    into v_net from public.expense_payments p where p.expense_id = p_expense_id;
  if v_net <> 0 then
    raise exception 'expense_already_paid' using errcode = 'P0001';
  end if;

  insert into public.expense_payments (company_id, expense_id, kind, amount_cents, paid_on, method, note, created_by)
    values (v_company, p_expense_id, 'pagamento', v_amount, v_date, p_method, v_note, v_user)
    returning id into v_payment;
  insert into public.ledger_entries (company_id, expense_payment_id, direction, amount_cents, occurred_on)
    values (v_company, v_payment, 'saida', v_amount, v_date);
  perform public.audit_log(v_company, 'expense.pay', 'expense', p_expense_id,
    jsonb_build_object('payment_id', v_payment, 'amount_cents', v_amount));
  return v_payment;
end
$$;

-- Estorna o pagamento de uma despesa: novo registro que o desfaz e um lançamento de entrada. Uma vez só.
create function public.reverse_expense_payment(
  p_payment_id uuid,
  p_paid_on date default null,
  p_note text default null
) returns uuid
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_expense uuid;
  v_kind text;
  v_amount bigint;
  v_orig_date date;
  v_date date;
  v_note text := nullif(btrim(p_note), '');
  v_reversal uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  select p.company_id, p.expense_id, p.kind, p.amount_cents, p.paid_on
    into v_company, v_expense, v_kind, v_amount, v_orig_date
    from public.expense_payments p where p.id = p_payment_id;
  if v_company is null or not public.is_member(v_company) then
    raise exception 'payment_not_found' using errcode = 'P0002';
  end if;

  perform 1 from public.expenses e where e.id = v_expense for update;

  if v_kind <> 'pagamento' then
    raise exception 'not_a_payment' using errcode = 'P0001';
  end if;
  if exists (select 1 from public.expense_payments x where x.reverses_payment_id = p_payment_id) then
    raise exception 'already_reversed' using errcode = 'P0001';
  end if;

  v_date := coalesce(p_paid_on, public.today_br());
  if v_date > public.today_br() or v_date < v_orig_date then
    raise exception 'invalid_input' using errcode = '22023', detail = 'paid_on';
  end if;
  if v_note is not null and char_length(v_note) > 500 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'note';
  end if;

  insert into public.expense_payments (
    company_id, expense_id, kind, amount_cents, paid_on, note, reverses_payment_id, created_by
  ) values (v_company, v_expense, 'estorno', v_amount, v_date, v_note, p_payment_id, v_user)
  returning id into v_reversal;
  insert into public.ledger_entries (company_id, expense_payment_id, direction, amount_cents, occurred_on)
    values (v_company, v_reversal, 'entrada', v_amount, v_date);
  perform public.audit_log(v_company, 'expense.reverse', 'expense', v_expense,
    jsonb_build_object('reverses', p_payment_id, 'amount_cents', v_amount));
  return v_reversal;
end
$$;

-- Cancela a despesa (some das contas a pagar; o histórico fica). Só sem dinheiro pago. Idempotente.
create function public.cancel_expense(p_expense_id uuid) returns void
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_canceled timestamptz;
  v_net bigint;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  select e.company_id, e.canceled_at into v_company, v_canceled
    from public.expenses e where e.id = p_expense_id for update;
  if v_company is null or not public.is_member(v_company) then
    raise exception 'expense_not_found' using errcode = 'P0002';
  end if;
  if v_canceled is not null then
    return;
  end if;

  select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
    into v_net from public.expense_payments p where p.expense_id = p_expense_id;
  if v_net <> 0 then
    raise exception 'has_payments' using errcode = 'P0001';
  end if;

  update public.expenses set canceled_at = now() where id = p_expense_id;
  perform public.audit_log(v_company, 'expense.cancel', 'expense', p_expense_id);
end
$$;

-- ---------- Exportação: agora com despesas e seus pagamentos ----------

create or replace function public.export_company_data(p_company uuid) returns jsonb
language plpgsql security definer set search_path = ''
as $$
begin
  if not public.is_member(p_company) then
    raise exception 'not_member' using errcode = '42501';
  end if;

  perform public.audit_log(p_company, 'company.export', 'company', p_company);

  return jsonb_build_object(
    'format', 3,
    'exported_at', now(),
    'company', (select to_jsonb(c) from public.companies c where c.id = p_company),
    'members', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.user_id)
         from public.company_members t where t.company_id = p_company), '[]'::jsonb),
    'clients', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.clients t where t.company_id = p_company), '[]'::jsonb),
    'service_items', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.service_items t where t.company_id = p_company), '[]'::jsonb),
    'quotes', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.number)
         from public.quotes t where t.company_id = p_company), '[]'::jsonb),
    'quote_items', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.quote_id, t.position)
         from public.quote_items t where t.company_id = p_company), '[]'::jsonb),
    'quote_events', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.id)
         from public.quote_events t where t.company_id = p_company), '[]'::jsonb),
    'orders', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.approved_at, t.id)
         from public.orders t where t.company_id = p_company), '[]'::jsonb),
    'receivables', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.order_id, t.number)
         from public.receivables t where t.company_id = p_company), '[]'::jsonb),
    'payments', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.payments t where t.company_id = p_company), '[]'::jsonb),
    'expenses', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.created_at, t.id)
         from public.expenses t where t.company_id = p_company), '[]'::jsonb),
    'expense_payments', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.expense_payments t where t.company_id = p_company), '[]'::jsonb),
    'ledger_entries', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.occurred_on, t.created_at, t.id)
         from public.ledger_entries t where t.company_id = p_company), '[]'::jsonb),
    'audit_events', coalesce(
      (select jsonb_agg(to_jsonb(a) order by a.at)
         from (select e.* from public.audit_events e
                where e.company_id = p_company order by e.at desc limit 5000) a), '[]'::jsonb)
  );
end
$$;

-- ---------- Permissões ----------

revoke all on function public.save_expense(uuid, text, text, bigint, date, text) from public, anon;
revoke all on function public.pay_expense(uuid, date, text, text) from public, anon;
revoke all on function public.reverse_expense_payment(uuid, date, text) from public, anon;
revoke all on function public.cancel_expense(uuid) from public, anon;
grant execute on function public.save_expense(uuid, text, text, bigint, date, text) to authenticated;
grant execute on function public.pay_expense(uuid, date, text, text) to authenticated;
grant execute on function public.reverse_expense_payment(uuid, date, text) to authenticated;
grant execute on function public.cancel_expense(uuid) to authenticated;
`,G=`-- NAP · 0009 · Ajustes do caixa depois da revisão da 3c:
--   * saldo de partida: o "saldo estimado" só faz sentido se partir do que o usuário realmente tem em caixa;
--   * despesas recorrentes: custos fixos do mês (DAS, aluguel, internet) criados de uma vez, uma despesa por mês;
--   * categoria "retirada do dono": separa o dinheiro pessoal do dinheiro do negócio.

-- ---------- Saldo de partida ----------

-- "Saldo no começo do dia X": os lançamentos a partir de X somam a ele. Os anteriores já estão dentro dele.
alter table public.companies add column opening_balance_cents bigint
  constraint companies_opening_cents_check check (opening_balance_cents is null or abs(opening_balance_cents) <= 1000000000000);
alter table public.companies add column opening_balance_on date
  constraint companies_opening_on_check check (opening_balance_on is null or (opening_balance_on >= date '2000-01-01' and opening_balance_on <= date '2100-12-31'));
alter table public.companies add constraint companies_opening_pair_check
  check ((opening_balance_cents is null) = (opening_balance_on is null));

-- Informa (ou, com nulos, remove) o saldo de partida. A data não pode ser no futuro.
create function public.set_opening_balance(p_company uuid, p_cents bigint, p_on date) returns void
language plpgsql security definer set search_path = ''
as $$
begin
  if not public.is_member(p_company) then
    raise exception 'not_member' using errcode = '42501';
  end if;
  if (p_cents is null) <> (p_on is null) then
    raise exception 'invalid_input' using errcode = '22023', detail = case when p_cents is null then 'opening_balance_cents' else 'opening_balance_on' end;
  end if;
  if p_cents is not null then
    if abs(p_cents) > 1000000000000 then
      raise exception 'invalid_input' using errcode = '22023', detail = 'opening_balance_cents';
    end if;
    if p_on < date '2000-01-01' or p_on > public.today_br() then
      raise exception 'invalid_input' using errcode = '22023', detail = 'opening_balance_on';
    end if;
  end if;

  update public.companies set opening_balance_cents = p_cents, opening_balance_on = p_on where id = p_company;
  perform public.audit_log(p_company, 'company.opening_balance', 'company', p_company,
    jsonb_build_object('cleared', p_cents is null));
end
$$;

-- ---------- Categoria "retirada" ----------

alter table public.expenses drop constraint expenses_category_check;
alter table public.expenses add constraint expenses_category_check
  check (category in ('materiais', 'ferramentas', 'transporte', 'marketing', 'impostos', 'pessoal', 'aluguel', 'servicos', 'retirada', 'outros'));

-- save_expense com a lista nova de categorias (mesma assinatura: create or replace mantém as permissões).
create or replace function public.save_expense(
  p_expense_id uuid,
  p_description text,
  p_category text,
  p_amount_cents bigint,
  p_due_date date,
  p_notes text default null
) returns uuid
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_canceled timestamptz;
  v_net bigint;
  v_desc text := btrim(p_description);
  v_notes text := nullif(btrim(p_notes), '');
  v_category text := coalesce(p_category, 'outros');
  v_id uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  if p_expense_id is null then
    select m.company_id into v_company from public.company_members m where m.user_id = v_user limit 1;
    if v_company is null then
      raise exception 'not_member' using errcode = '42501';
    end if;
  else
    select e.company_id, e.canceled_at into v_company, v_canceled
      from public.expenses e where e.id = p_expense_id for update;
    if v_company is null or not public.is_member(v_company) then
      raise exception 'expense_not_found' using errcode = 'P0002';
    end if;
    if v_canceled is not null then
      raise exception 'expense_canceled' using errcode = 'P0001';
    end if;
    select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
      into v_net from public.expense_payments p where p.expense_id = p_expense_id;
    if v_net <> 0 then
      raise exception 'expense_locked' using errcode = 'P0001';
    end if;
  end if;

  if v_desc is null or char_length(v_desc) not between 1 and 200 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'description';
  end if;
  if v_category not in ('materiais', 'ferramentas', 'transporte', 'marketing', 'impostos', 'pessoal', 'aluguel', 'servicos', 'retirada', 'outros') then
    raise exception 'invalid_input' using errcode = '22023', detail = 'category';
  end if;
  if p_amount_cents is null or p_amount_cents <= 0 or p_amount_cents > 1000000000000 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'amount_cents';
  end if;
  if p_due_date is null or p_due_date < date '2000-01-01' or p_due_date > date '2100-12-31' then
    raise exception 'invalid_input' using errcode = '22023', detail = 'due_date';
  end if;
  if v_notes is not null and char_length(v_notes) > 1000 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'notes';
  end if;

  if p_expense_id is null then
    insert into public.expenses (company_id, description, category, amount_cents, due_date, notes)
      values (v_company, v_desc, v_category, p_amount_cents, p_due_date, v_notes)
      returning id into v_id;
  else
    update public.expenses set
      description = v_desc, category = v_category, amount_cents = p_amount_cents,
      due_date = p_due_date, notes = v_notes
    where id = p_expense_id;
    v_id := p_expense_id;
  end if;

  perform public.audit_log(v_company,
    case when p_expense_id is null then 'expense.create' else 'expense.update' end,
    'expense', v_id, jsonb_build_object('amount_cents', p_amount_cents));
  return v_id;
end
$$;

-- ---------- Despesas recorrentes ----------

-- Cria a mesma despesa uma vez por mês (a 1ª no vencimento informado; as outras mantêm o dia e encostam no fim do
-- mês, sempre a partir da data original, como nas parcelas). Cada uma é uma despesa independente: pode ser editada,
-- paga ou cancelada sozinha. Tudo ou nada: se uma data for inválida, nenhuma é criada.
create function public.create_expense_series(
  p_description text,
  p_category text,
  p_amount_cents bigint,
  p_first_due date,
  p_count integer,
  p_notes text default null
) returns uuid[]
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_ids uuid[] := '{}';
  i integer;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  select m.company_id into v_company from public.company_members m where m.user_id = v_user limit 1;
  if v_company is null then
    raise exception 'not_member' using errcode = '42501';
  end if;
  if p_count is null or p_count < 1 or p_count > 60 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'count';
  end if;
  if p_first_due is null then
    raise exception 'invalid_input' using errcode = '22023', detail = 'due_date';
  end if;

  for i in 0 .. p_count - 1 loop
    v_ids := v_ids || public.save_expense(
      null, p_description, p_category, p_amount_cents, (p_first_due + make_interval(months => i))::date, p_notes
    );
  end loop;

  perform public.audit_log(v_company, 'expense.series', 'expense', v_ids[1],
    jsonb_build_object('count', p_count, 'amount_cents', p_amount_cents));
  return v_ids;
end
$$;

-- ---------- Permissões ----------

revoke all on function public.set_opening_balance(uuid, bigint, date) from public, anon;
revoke all on function public.create_expense_series(text, text, bigint, date, integer, text) from public, anon;
grant execute on function public.set_opening_balance(uuid, bigint, date) to authenticated;
grant execute on function public.create_expense_series(text, text, bigint, date, integer, text) to authenticated;
`,K=`-- NAP · 0010 · Tarefas e próximas ações (etapa 4).
--   * tasks: lembretes que o próprio usuário cria ("ligar para a Maria na sexta"), com data e cliente opcional;
--   * alert_states: o que o usuário fez com uma sugestão do NAP (dispensou ou adiou), para ela não se repetir.
-- As sugestões em si NÃO ficam no banco: são calculadas das regras a cada abertura (src/features/tarefas/regras.ts).
-- O navegador só LÊ estas tabelas; quem grava são as funções abaixo.

create table public.tasks (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies (id) on delete cascade,
  title text not null constraint tasks_title_check check (char_length(btrim(title)) between 1 and 200),
  due_date date not null constraint tasks_due_check
    check (due_date >= date '2000-01-01' and due_date <= date '2100-12-31'),
  client_id uuid,
  notes text constraint tasks_notes_check check (notes is null or char_length(notes) <= 1000),
  done_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (company_id, id),
  -- O cliente tem de ser da MESMA empresa (chave composta; sem cliente, a chave não se aplica).
  foreign key (company_id, client_id) references public.clients (company_id, id)
);

create index tasks_company_open_idx on public.tasks (company_id, done_at, due_date);

create trigger tasks_touch before update on public.tasks
for each row execute function public.touch_updated_at();

create table public.alert_states (
  company_id uuid not null references public.companies (id) on delete cascade,
  -- Chave estável da sugestão: "regra:id-do-registro" (ex.: parcela-vencida:3f2a...).
  alert_key text not null constraint alert_states_key_check
    check (char_length(alert_key) between 3 and 120 and alert_key ~ '^[a-z0-9-]+(:[A-Za-z0-9-]+)?$'),
  state text not null constraint alert_states_state_check check (state in ('dispensado', 'adiado')),
  -- Só quando adiado: a sugestão volta a aparecer neste dia.
  until date,
  reason text constraint alert_states_reason_check check (reason is null or reason in ('contato_feito', 'resolvido', 'nao_se_aplica')),
  updated_at timestamptz not null default now(),
  primary key (company_id, alert_key),
  constraint alert_states_until_check check ((state = 'adiado') = (until is not null))
);

select public.apply_company_rls('public.tasks', false);
select public.apply_company_rls('public.alert_states', false);

-- ---------- Tarefas ----------

-- Cria ou edita um lembrete. Sem id = cria (na empresa do usuário). Lembrete concluído não se edita: reabra antes.
create function public.save_task(
  p_id uuid,
  p_title text,
  p_due date,
  p_client uuid default null,
  p_notes text default null
) returns uuid
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_done timestamptz;
  v_title text := btrim(p_title);
  v_notes text := nullif(btrim(p_notes), '');
  v_id uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  if p_id is null then
    select m.company_id into v_company from public.company_members m where m.user_id = v_user limit 1;
    if v_company is null then
      raise exception 'not_member' using errcode = '42501';
    end if;
  else
    select t.company_id, t.done_at into v_company, v_done from public.tasks t where t.id = p_id for update;
    if v_company is null or not public.is_member(v_company) then
      raise exception 'task_not_found' using errcode = 'P0002';
    end if;
    if v_done is not null then
      raise exception 'task_done' using errcode = 'P0001';
    end if;
  end if;

  if v_title is null or char_length(v_title) not between 1 and 200 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'title';
  end if;
  if p_due is null or p_due < date '2000-01-01' or p_due > date '2100-12-31' then
    raise exception 'invalid_input' using errcode = '22023', detail = 'due_date';
  end if;
  if v_notes is not null and char_length(v_notes) > 1000 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'notes';
  end if;
  if p_client is not null and not exists (
    select 1 from public.clients c where c.id = p_client and c.company_id = v_company
  ) then
    raise exception 'client_not_found' using errcode = 'P0002', detail = 'client_id';
  end if;

  if p_id is null then
    insert into public.tasks (company_id, title, due_date, client_id, notes)
      values (v_company, v_title, p_due, p_client, v_notes) returning id into v_id;
  else
    update public.tasks set title = v_title, due_date = p_due, client_id = p_client, notes = v_notes
     where id = p_id;
    v_id := p_id;
  end if;

  perform public.audit_log(v_company, case when p_id is null then 'task.create' else 'task.update' end, 'task', v_id);
  return v_id;
end
$$;

-- Conclui (p_done = true) ou reabre (false) um lembrete. Idempotente.
create function public.set_task_done(p_id uuid, p_done boolean) returns void
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  select t.company_id into v_company from public.tasks t where t.id = p_id for update;
  if v_company is null or not public.is_member(v_company) then
    raise exception 'task_not_found' using errcode = 'P0002';
  end if;
  update public.tasks
     set done_at = case when coalesce(p_done, false) then coalesce(done_at, now()) else null end
   where id = p_id;
  perform public.audit_log(v_company, case when coalesce(p_done, false) then 'task.done' else 'task.reopen' end, 'task', p_id);
end
$$;

-- Apaga um lembrete (não é registro financeiro). Fica na auditoria.
create function public.delete_task(p_id uuid) returns void
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  select t.company_id into v_company from public.tasks t where t.id = p_id for update;
  if v_company is null or not public.is_member(v_company) then
    raise exception 'task_not_found' using errcode = 'P0002';
  end if;
  delete from public.tasks where id = p_id;
  perform public.audit_log(v_company, 'task.delete', 'task', p_id);
end
$$;

-- ---------- Sugestões: dispensar, adiar, voltar a mostrar ----------

create function public.snooze_alert(p_key text, p_until date, p_reason text default null) returns void
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  select m.company_id into v_company from public.company_members m where m.user_id = v_user limit 1;
  if v_company is null then
    raise exception 'not_member' using errcode = '42501';
  end if;
  if p_key is null or char_length(p_key) not between 3 and 120 or p_key !~ '^[a-z0-9-]+(:[A-Za-z0-9-]+)?$' then
    raise exception 'invalid_input' using errcode = '22023', detail = 'alert_key';
  end if;
  if p_until is null or p_until <= public.today_br() or p_until > public.today_br() + 365 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'until';
  end if;
  if p_reason is not null and p_reason not in ('contato_feito', 'resolvido', 'nao_se_aplica') then
    raise exception 'invalid_input' using errcode = '22023', detail = 'reason';
  end if;

  insert into public.alert_states (company_id, alert_key, state, until, reason)
    values (v_company, p_key, 'adiado', p_until, p_reason)
  on conflict (company_id, alert_key)
    do update set state = 'adiado', until = excluded.until, reason = excluded.reason, updated_at = now();
end
$$;

create function public.dismiss_alert(p_key text, p_reason text default null) returns void
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  select m.company_id into v_company from public.company_members m where m.user_id = v_user limit 1;
  if v_company is null then
    raise exception 'not_member' using errcode = '42501';
  end if;
  if p_key is null or char_length(p_key) not between 3 and 120 or p_key !~ '^[a-z0-9-]+(:[A-Za-z0-9-]+)?$' then
    raise exception 'invalid_input' using errcode = '22023', detail = 'alert_key';
  end if;
  if p_reason is not null and p_reason not in ('contato_feito', 'resolvido', 'nao_se_aplica') then
    raise exception 'invalid_input' using errcode = '22023', detail = 'reason';
  end if;

  insert into public.alert_states (company_id, alert_key, state, until, reason)
    values (v_company, p_key, 'dispensado', null, p_reason)
  on conflict (company_id, alert_key)
    do update set state = 'dispensado', until = null, reason = excluded.reason, updated_at = now();
end
$$;

create function public.restore_alert(p_key text) returns void
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  select m.company_id into v_company from public.company_members m where m.user_id = v_user limit 1;
  if v_company is null then
    raise exception 'not_member' using errcode = '42501';
  end if;
  delete from public.alert_states where company_id = v_company and alert_key = p_key;
end
$$;

-- ---------- Exportação: com tarefas e o que foi dispensado ----------

create or replace function public.export_company_data(p_company uuid) returns jsonb
language plpgsql security definer set search_path = ''
as $$
begin
  if not public.is_member(p_company) then
    raise exception 'not_member' using errcode = '42501';
  end if;

  perform public.audit_log(p_company, 'company.export', 'company', p_company);

  return jsonb_build_object(
    'format', 4,
    'exported_at', now(),
    'company', (select to_jsonb(c) from public.companies c where c.id = p_company),
    'members', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.user_id)
         from public.company_members t where t.company_id = p_company), '[]'::jsonb),
    'clients', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.clients t where t.company_id = p_company), '[]'::jsonb),
    'service_items', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.service_items t where t.company_id = p_company), '[]'::jsonb),
    'quotes', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.number)
         from public.quotes t where t.company_id = p_company), '[]'::jsonb),
    'quote_items', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.quote_id, t.position)
         from public.quote_items t where t.company_id = p_company), '[]'::jsonb),
    'quote_events', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.id)
         from public.quote_events t where t.company_id = p_company), '[]'::jsonb),
    'orders', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.approved_at, t.id)
         from public.orders t where t.company_id = p_company), '[]'::jsonb),
    'receivables', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.order_id, t.number)
         from public.receivables t where t.company_id = p_company), '[]'::jsonb),
    'payments', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.payments t where t.company_id = p_company), '[]'::jsonb),
    'expenses', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.created_at, t.id)
         from public.expenses t where t.company_id = p_company), '[]'::jsonb),
    'expense_payments', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.expense_payments t where t.company_id = p_company), '[]'::jsonb),
    'ledger_entries', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.occurred_on, t.created_at, t.id)
         from public.ledger_entries t where t.company_id = p_company), '[]'::jsonb),
    'tasks', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.created_at, t.id)
         from public.tasks t where t.company_id = p_company), '[]'::jsonb),
    'alert_states', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.alert_key)
         from public.alert_states t where t.company_id = p_company), '[]'::jsonb),
    'audit_events', coalesce(
      (select jsonb_agg(to_jsonb(a) order by a.at)
         from (select e.* from public.audit_events e
                where e.company_id = p_company order by e.at desc limit 5000) a), '[]'::jsonb)
  );
end
$$;

-- ---------- Permissões ----------

revoke all on function public.save_task(uuid, text, date, uuid, text) from public, anon;
revoke all on function public.set_task_done(uuid, boolean) from public, anon;
revoke all on function public.delete_task(uuid) from public, anon;
revoke all on function public.snooze_alert(text, date, text) from public, anon;
revoke all on function public.dismiss_alert(text, text) from public, anon;
revoke all on function public.restore_alert(text) from public, anon;
grant execute on function public.save_task(uuid, text, date, uuid, text) to authenticated;
grant execute on function public.set_task_done(uuid, boolean) to authenticated;
grant execute on function public.delete_task(uuid) to authenticated;
grant execute on function public.snooze_alert(text, date, text) to authenticated;
grant execute on function public.dismiss_alert(text, text) to authenticated;
grant execute on function public.restore_alert(text) to authenticated;
`,q=`-- NAP · 0011 · Restaurar uma cópia (etapa 4).
-- A cópia é o arquivo que \`export_company_data\` gera. Restaurar serve para recuperar os dados (limpou o navegador,
-- trocou de aparelho) e, no futuro, para levar os dados do modo local para o servidor.
-- Regras:
--   * só o dono, e só em empresa VAZIA (nunca mistura nem sobrescreve);
--   * tudo ou nada: se qualquer linha for inválida, nada é gravado;
--   * toda linha vai para a empresa de destino, seja qual for o company_id escrito no arquivo (o arquivo não
--     consegue gravar em outra empresa);
--   * os ids originais são mantidos (as referências entre registros continuam valendo);
--   * depois de gravar, o banco REFAZ as contas e recusa a cópia se o dinheiro não fecha (totais do orçamento,
--     parcelas x total, pagamentos x parcelas, lançamentos x pagamentos).

create function public.import_company_data(p_company uuid, p_data jsonb) returns jsonb
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_format integer;
  v_chave text;
  v_counts jsonb := '{}'::jsonb;
  v_n bigint;
  v_empresa jsonb;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  if not public.is_owner(p_company) then
    raise exception 'not_owner' using errcode = '42501';
  end if;

  -- Formato do arquivo: um objeto de uma versão que sabemos ler (2 a 4); as listas, quando existem, são listas.
  if p_data is null or jsonb_typeof(p_data) <> 'object' then
    raise exception 'import_format' using errcode = 'P0001';
  end if;
  if (p_data ->> 'format') is null or (p_data ->> 'format') !~ '^[0-9]{1,3}$' then
    raise exception 'import_format' using errcode = 'P0001';
  end if;
  v_format := (p_data ->> 'format')::integer;
  if v_format < 2 or v_format > 4 then
    raise exception 'import_format' using errcode = 'P0001';
  end if;
  foreach v_chave in array array[
    'clients', 'service_items', 'quotes', 'quote_items', 'quote_events', 'orders', 'receivables', 'payments',
    'expenses', 'expense_payments', 'ledger_entries', 'tasks', 'alert_states'
  ] loop
    if p_data ? v_chave and jsonb_typeof(p_data -> v_chave) <> 'array' then
      raise exception 'import_format' using errcode = 'P0001';
    end if;
  end loop;
  v_empresa := coalesce(p_data -> 'company', '{}'::jsonb);
  if jsonb_typeof(v_empresa) <> 'object' then
    raise exception 'import_format' using errcode = 'P0001';
  end if;

  -- Só em empresa vazia.
  if exists (select 1 from public.clients where company_id = p_company)
     or exists (select 1 from public.service_items where company_id = p_company)
     or exists (select 1 from public.quotes where company_id = p_company)
     or exists (select 1 from public.expenses where company_id = p_company)
     or exists (select 1 from public.tasks where company_id = p_company)
     or exists (select 1 from public.alert_states where company_id = p_company)
     or exists (select 1 from public.ledger_entries where company_id = p_company) then
    raise exception 'company_not_empty' using errcode = 'P0001';
  end if;

  begin
    insert into public.clients (id, company_id, name, email, phone, notes, status, created_at, updated_at)
    select r.id, p_company, r.name, r.email, r.phone, r.notes, r.status, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.clients, coalesce(p_data -> 'clients', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('clients', v_n);

    insert into public.service_items (id, company_id, name, unit, base_price_cents, est_cost_cents, status, created_at, updated_at)
    select r.id, p_company, r.name, r.unit, r.base_price_cents, r.est_cost_cents, r.status, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.service_items, coalesce(p_data -> 'service_items', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('service_items', v_n);

    insert into public.quotes (
      id, company_id, client_id, number, status, valid_until, terms, notes, discount_kind, discount_value,
      subtotal_cents, discount_cents, total_cents, sent_at, decided_at, created_at, updated_at
    )
    select r.id, p_company, r.client_id, r.number, r.status, r.valid_until, r.terms, r.notes, r.discount_kind,
           r.discount_value, r.subtotal_cents, r.discount_cents, r.total_cents, r.sent_at, r.decided_at,
           r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.quotes, coalesce(p_data -> 'quotes', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('quotes', v_n);

    insert into public.quote_items (id, company_id, quote_id, position, description, quantity_milli, unit_price_cents)
    select r.id, p_company, r.quote_id, r.position, r.description, r.quantity_milli, r.unit_price_cents
      from jsonb_populate_recordset(null::public.quote_items, coalesce(p_data -> 'quote_items', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('quote_items', v_n);

    insert into public.quote_events (id, company_id, quote_id, from_status, to_status, actor_user_id, at, confirmed, system)
    overriding system value
    select r.id, p_company, r.quote_id, r.from_status, r.to_status, r.actor_user_id, r.at, r.confirmed, r.system
      from jsonb_populate_recordset(null::public.quote_events, coalesce(p_data -> 'quote_events', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('quote_events', v_n);

    insert into public.orders (id, company_id, quote_id, client_id, status, total_cents, approved_at, canceled_at)
    select r.id, p_company, r.quote_id, r.client_id, r.status, r.total_cents, r.approved_at, r.canceled_at
      from jsonb_populate_recordset(null::public.orders, coalesce(p_data -> 'orders', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('orders', v_n);

    insert into public.receivables (id, company_id, order_id, number, kind, due_date, amount_cents, canceled_at, created_at)
    select r.id, p_company, r.order_id, r.number, r.kind, r.due_date, r.amount_cents, r.canceled_at, r.created_at
      from jsonb_populate_recordset(null::public.receivables, coalesce(p_data -> 'receivables', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('receivables', v_n);

    insert into public.payments (
      id, seq, company_id, receivable_id, kind, amount_cents, paid_on, method, note, reverses_payment_id, created_by, created_at
    )
    overriding system value
    select r.id, r.seq, p_company, r.receivable_id, r.kind, r.amount_cents, r.paid_on, r.method, r.note,
           r.reverses_payment_id, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.payments, coalesce(p_data -> 'payments', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('payments', v_n);

    insert into public.expenses (id, company_id, description, category, amount_cents, due_date, notes, canceled_at, created_at, updated_at)
    select r.id, p_company, r.description, r.category, r.amount_cents, r.due_date, r.notes, r.canceled_at, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.expenses, coalesce(p_data -> 'expenses', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('expenses', v_n);

    insert into public.expense_payments (
      id, seq, company_id, expense_id, kind, amount_cents, paid_on, method, note, reverses_payment_id, created_by, created_at
    )
    overriding system value
    select r.id, r.seq, p_company, r.expense_id, r.kind, r.amount_cents, r.paid_on, r.method, r.note,
           r.reverses_payment_id, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.expense_payments, coalesce(p_data -> 'expense_payments', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('expense_payments', v_n);

    insert into public.ledger_entries (id, company_id, payment_id, expense_payment_id, direction, amount_cents, occurred_on, created_at)
    select r.id, p_company, r.payment_id, r.expense_payment_id, r.direction, r.amount_cents, r.occurred_on, r.created_at
      from jsonb_populate_recordset(null::public.ledger_entries, coalesce(p_data -> 'ledger_entries', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('ledger_entries', v_n);

    insert into public.tasks (id, company_id, title, due_date, client_id, notes, done_at, created_at, updated_at)
    select r.id, p_company, r.title, r.due_date, r.client_id, r.notes, r.done_at, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.tasks, coalesce(p_data -> 'tasks', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('tasks', v_n);

    insert into public.alert_states (company_id, alert_key, state, until, reason, updated_at)
    select p_company, r.alert_key, r.state, r.until, r.reason, r.updated_at
      from jsonb_populate_recordset(null::public.alert_states, coalesce(p_data -> 'alert_states', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('alert_states', v_n);

    -- Os contadores seguem de onde a cópia parou (próximo número de orçamento, próximos ids das tabelas com sequência).
    update public.companies set
      quote_seq = greatest(
        quote_seq,
        coalesce((select max(q.number) from public.quotes q where q.company_id = p_company), 0),
        case when (v_empresa ->> 'quote_seq') ~ '^[0-9]{1,9}$' then (v_empresa ->> 'quote_seq')::integer else 0 end
      ),
      opening_balance_cents = case when (v_empresa ->> 'opening_balance_cents') ~ '^-?[0-9]{1,13}$'
                                   then (v_empresa ->> 'opening_balance_cents')::bigint end,
      opening_balance_on = case when (v_empresa ->> 'opening_balance_cents') ~ '^-?[0-9]{1,13}$'
                                then (v_empresa ->> 'opening_balance_on')::date end
    where id = p_company;
    perform setval(pg_get_serial_sequence('public.quote_events', 'id'), greatest((select coalesce(max(id), 0) from public.quote_events), 1),
                   (select count(*) > 0 from public.quote_events));
    perform setval(pg_get_serial_sequence('public.payments', 'seq'), greatest((select coalesce(max(seq), 0) from public.payments), 1),
                   (select count(*) > 0 from public.payments));
    perform setval(pg_get_serial_sequence('public.expense_payments', 'seq'), greatest((select coalesce(max(seq), 0) from public.expense_payments), 1),
                   (select count(*) > 0 from public.expense_payments));
  exception
    when unique_violation then
      -- Mesmo id já existe (neste aparelho ou em outra empresa): a cópia não pode entrar. Sem detalhes do que existe.
      raise exception 'import_conflict' using errcode = 'P0001';
    when foreign_key_violation then
      raise exception 'import_invalid' using errcode = 'P0001', detail = 'references';
    when check_violation or not_null_violation or invalid_text_representation or datetime_field_overflow
         or invalid_datetime_format or numeric_value_out_of_range or invalid_parameter_value or string_data_right_truncation then
      raise exception 'import_invalid' using errcode = 'P0001', detail = 'values';
  end;

  -- ---------- O dinheiro tem de fechar (as mesmas regras que as funções do servidor garantem ao gravar) ----------

  -- Orçamento: subtotal = soma das linhas; desconto e total conforme o tipo de desconto.
  if exists (
    select 1
      from public.quotes q
      left join lateral (select coalesce(sum(i.line_total_cents), 0) as soma from public.quote_items i where i.quote_id = q.id) s on true
     where q.company_id = p_company
       and (q.subtotal_cents <> s.soma
            or q.total_cents <> q.subtotal_cents - q.discount_cents
            or q.discount_cents <> case q.discount_kind
                                     when 'none' then 0
                                     when 'percent' then public.money_percent(q.subtotal_cents, q.discount_value::integer)
                                     else q.discount_value end)
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'quotes';
  end if;

  -- Orçamento aprovado tem serviço; serviço só existe para orçamento aprovado ou cancelado depois de aprovado.
  if exists (select 1 from public.quotes q where q.company_id = p_company and q.status = 'aprovado'
              and not exists (select 1 from public.orders o where o.quote_id = q.id))
     or exists (select 1 from public.orders o join public.quotes q on q.id = o.quote_id
                 where o.company_id = p_company and q.status not in ('aprovado', 'cancelado')) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'orders';
  end if;

  -- Serviço: as parcelas somam o total.
  if exists (
    select 1 from public.orders o
     where o.company_id = p_company
       and o.total_cents <> (select coalesce(sum(r.amount_cents), 0) from public.receivables r where r.order_id = o.id)
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'receivables';
  end if;

  -- Parcela: o pago líquido nunca passa do valor nem fica negativo; e o estorno tem a mesma data ou depois do pagamento.
  if exists (
    select 1 from public.receivables r
     where r.company_id = p_company
       and (select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
              from public.payments p where p.receivable_id = r.id) not between 0 and r.amount_cents
  ) or exists (
    select 1 from public.payments e join public.payments o on o.id = e.reverses_payment_id
     where e.company_id = p_company and e.paid_on < o.paid_on
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'payments';
  end if;

  -- Despesa: paga por inteiro ou não paga (líquido de estornos).
  if exists (
    select 1 from public.expenses e
     where e.company_id = p_company
       and (select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
              from public.expense_payments p where p.expense_id = e.id) not in (0, e.amount_cents)
  ) or exists (
    select 1 from public.expense_payments e join public.expense_payments o on o.id = e.reverses_payment_id
     where e.company_id = p_company and e.paid_on < o.paid_on
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'expense_payments';
  end if;

  -- Caixa: cada pagamento (de cliente ou de despesa) tem exatamente um lançamento.
  if exists (select 1 from public.payments p where p.company_id = p_company
              and not exists (select 1 from public.ledger_entries l where l.payment_id = p.id))
     or exists (select 1 from public.expense_payments p where p.company_id = p_company
                 and not exists (select 1 from public.ledger_entries l where l.expense_payment_id = p.id)) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'ledger_entries';
  end if;

  perform public.audit_log(p_company, 'company.import', 'company', p_company, v_counts);
  return v_counts;
end
$$;

revoke all on function public.import_company_data(uuid, jsonb) from public, anon;
grant execute on function public.import_company_data(uuid, jsonb) to authenticated;
`,ie=`-- NAP · 0012 · Isolamento mais rápido (etapa 4, desempenho).
-- NÃO muda quem enxerga o quê: continua valendo "só as linhas das empresas das quais o usuário é membro".
-- Muda a FORMA da regra. Antes, cada linha lida chamava \`is_member(company_id)\` (uma consulta por linha, por tabela).
-- Numa lista de 3.600 parcelas, com as junções, eram dezenas de milhares de chamadas (2 s no navegador).
-- Agora a regra é \`company_id in (select my_company_ids())\`: o conjunto de empresas do usuário é calculado UMA vez
-- por consulta e cada linha só confere se o seu company_id está nele (mesma lista, 8x mais rápido nas listas grandes).
--
-- \`is_member\` e \`is_owner\` continuam existindo: as funções de escrita (SECURITY DEFINER) e \`companies_update\` os usam.
-- As tabelas futuras recebem a forma nova automaticamente (apply_company_rls é substituída).

create function public.my_company_ids() returns setof uuid
language sql stable security definer set search_path = ''
as $$
  select m.company_id
    from public.company_members m
   where m.user_id = (select auth.uid())
$$;

revoke all on function public.my_company_ids() from public, anon;
grant execute on function public.my_company_ids() to authenticated;

-- Molde de isolamento (mesmo comportamento de antes, com a regra na forma rápida).
create or replace function public.apply_company_rls(p_table regclass, p_writable boolean default true) returns void
language plpgsql set search_path = ''
as $$
declare
  v_seq regclass;
begin
  if not exists (
    select 1 from pg_catalog.pg_attribute
    where attrelid = p_table and attname = 'company_id' and not attisdropped
  ) then
    raise exception 'A tabela % precisa ter a coluna company_id', p_table;
  end if;

  execute format('alter table %s enable row level security', p_table);
  execute format('alter table %s force row level security', p_table);
  execute format('revoke all on %s from public, anon, authenticated', p_table);

  for v_seq in
    select d.objid::regclass
      from pg_catalog.pg_depend d
      join pg_catalog.pg_class c on c.oid = d.objid and c.relkind = 'S'
     where d.refobjid = p_table and d.deptype in ('a', 'i')
  loop
    execute format('revoke all on sequence %s from public, anon, authenticated', v_seq);
    if p_writable then
      execute format('grant usage on sequence %s to authenticated', v_seq);
    end if;
  end loop;

  execute format('grant select on %s to authenticated', p_table);
  execute format(
    'create policy company_select on %s for select to authenticated using (company_id in (select public.my_company_ids()))',
    p_table
  );

  if p_writable then
    execute format('grant insert, update, delete on %s to authenticated', p_table);
    execute format(
      'create policy company_insert on %s for insert to authenticated with check (company_id in (select public.my_company_ids()))',
      p_table
    );
    execute format(
      'create policy company_update on %s for update to authenticated using (company_id in (select public.my_company_ids())) with check (company_id in (select public.my_company_ids()))',
      p_table
    );
    execute format(
      'create policy company_delete on %s for delete to authenticated using (company_id in (select public.my_company_ids()))',
      p_table
    );
  end if;
end
$$;

revoke all on function public.apply_company_rls(regclass, boolean) from public, anon, authenticated;

-- Tabelas que já existem: troca a regra das políticas pelo mesmo critério, na forma rápida.
do $$
declare
  r record;
  v_regra constant text := 'company_id in (select public.my_company_ids())';
begin
  for r in
    select schemaname, tablename, policyname, cmd
      from pg_catalog.pg_policies
     where schemaname = 'public'
       and policyname in ('company_select', 'company_insert', 'company_update', 'company_delete')
  loop
    if r.cmd = 'INSERT' then
      execute format('alter policy %I on %I.%I with check (' || v_regra || ')', r.policyname, r.schemaname, r.tablename);
    elsif r.cmd = 'UPDATE' then
      execute format('alter policy %I on %I.%I using (' || v_regra || ') with check (' || v_regra || ')',
                     r.policyname, r.schemaname, r.tablename);
    else
      execute format('alter policy %I on %I.%I using (' || v_regra || ')', r.policyname, r.schemaname, r.tablename);
    end if;
  end loop;
end
$$;

-- As duas políticas escritas à mão em 0001 (empresa e membros).
alter policy companies_select on public.companies using (id in (select public.my_company_ids()));
alter policy members_select on public.company_members using (company_id in (select public.my_company_ids()));
`,J=`-- NAP · 0013 · Leituras e cadastros simples como funções do banco (preparação para o servidor).
-- Até aqui as listas e os detalhes eram consultas SQL escritas dentro do navegador (modo local). Com o Supabase
-- o navegador não escreve SQL: chama funções (\`rpc\`). Mover as consultas para o banco faz com que o MESMO SQL
-- sirva aos dois modos e seja testado uma vez só. Nada muda para quem usa o app.
--
-- Regras:
--   * todas são SECURITY INVOKER (o padrão): rodam com as permissões de quem chama, então a RLS continua
--     decidindo quais linhas existem. NENHUMA é security definer (um teste confere isso);
--   * \`anon\` (visitante) não executa nenhuma; só \`authenticated\`;
--   * devolvem jsonb com as mesmas colunas (nomes em snake_case) que a camada de dados já lia;
--   * texto de busca: o escape de % _ \\ passa a ser feito aqui (o navegador só manda o texto digitado);
--   * erros usam os mesmos códigos curtos das outras funções (ex.: client_not_found).

-- Instante em ISO UTC, sempre como texto (o mesmo formato que a camada de dados sempre usou).
create function public.iso_utc(p_instante timestamptz) returns text
language sql immutable set search_path = ''
as $$ select to_char(p_instante at time zone 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"') $$;

-- Prepara um texto de busca para LIKE: tira os espaços das pontas e escapa % _ \\ (vazio vira nulo).
create function public.like_escape(p_texto text) returns text
language sql immutable set search_path = ''
as $$
  select nullif(replace(replace(replace(btrim(p_texto), '\\', '\\\\'), '%', '\\%'), '_', '\\_'), '')
$$;

-- ---------------------------------------------------------------------------------------------- empresa

create function public.current_company() returns jsonb
language sql stable set search_path = ''
as $$
  select to_jsonb(t) from (
    select c.id, c.name,
           public.iso_utc(c.created_at) as created_at,
           public.iso_utc(c.deleted_at) as deleted_at,
           ((c.deleted_at + interval '30 days') at time zone 'America/Sao_Paulo')::date::text as purge_on,
           c.opening_balance_cents,
           c.opening_balance_on::text as opening_balance_on
      from public.companies c
     limit 1
  ) t
$$;

create function public.rename_company(p_name text) returns jsonb
language plpgsql set search_path = ''
as $$
declare
  v_id uuid;
begin
  update public.companies set name = btrim(p_name)
   where id = (select c.id from public.companies c limit 1)
   returning id into v_id;
  if v_id is null then
    raise exception 'company_not_found' using errcode = 'P0002';
  end if;
  return public.current_company();
end
$$;

create function public.has_business_data() returns boolean
language sql stable set search_path = ''
as $$
  select exists (select 1 from public.clients) or exists (select 1 from public.service_items)
      or exists (select 1 from public.quotes) or exists (select 1 from public.expenses)
      or exists (select 1 from public.tasks) or exists (select 1 from public.alert_states)
      or exists (select 1 from public.ledger_entries)
$$;

-- Quantos registros há em cada tabela de negócio (para o diagnóstico: só números, nunca conteúdo).
create function public.table_counts() returns jsonb
language sql stable set search_path = ''
as $$
  select jsonb_build_array(
    jsonb_build_object('tabela', 'clients', 'n', (select count(*)::int from public.clients)),
    jsonb_build_object('tabela', 'service_items', 'n', (select count(*)::int from public.service_items)),
    jsonb_build_object('tabela', 'quotes', 'n', (select count(*)::int from public.quotes)),
    jsonb_build_object('tabela', 'receivables', 'n', (select count(*)::int from public.receivables)),
    jsonb_build_object('tabela', 'payments', 'n', (select count(*)::int from public.payments)),
    jsonb_build_object('tabela', 'expenses', 'n', (select count(*)::int from public.expenses)),
    jsonb_build_object('tabela', 'expense_payments', 'n', (select count(*)::int from public.expense_payments)),
    jsonb_build_object('tabela', 'ledger_entries', 'n', (select count(*)::int from public.ledger_entries)),
    jsonb_build_object('tabela', 'tasks', 'n', (select count(*)::int from public.tasks)),
    jsonb_build_object('tabela', 'alert_states', 'n', (select count(*)::int from public.alert_states))
  )
$$;

-- ---------------------------------------------------------------------------------------------- clientes

create function public.list_clients(p_status text default 'ativo', p_search text default null) returns jsonb
language sql stable set search_path = ''
as $$
  select coalesce(jsonb_agg(to_jsonb(t) order by lower(t.name), t.id), '[]'::jsonb)
    from (
      select c.id, c.name, c.email, c.phone, c.notes, c.status,
             public.iso_utc(c.created_at) as created_at, public.iso_utc(c.updated_at) as updated_at,
             (select count(*)::int from public.quotes q where q.company_id = c.company_id and q.client_id = c.id) as quote_count
        from public.clients c
       where (coalesce(p_status, 'ativo') = 'todos' or c.status = coalesce(p_status, 'ativo'))
         and (public.like_escape(p_search) is null
              or public.unaccent_br(c.name || ' ' || coalesce(c.email, '') || ' ' || coalesce(c.phone, ''))
                 like '%' || public.unaccent_br(public.like_escape(p_search)) || '%' escape '\\')
    ) t
$$;

create function public.get_client(p_id uuid) returns jsonb
language sql stable set search_path = ''
as $$
  select to_jsonb(t) from (
    select c.id, c.name, c.email, c.phone, c.notes, c.status,
           public.iso_utc(c.created_at) as created_at, public.iso_utc(c.updated_at) as updated_at
      from public.clients c where c.id = p_id
  ) t
$$;

-- Cria (p_id nulo) ou altera um cliente e devolve a linha. Valida pelas mesmas restrições da tabela.
create function public.save_client(p_id uuid, p_name text, p_email text, p_phone text, p_notes text) returns jsonb
language plpgsql set search_path = ''
as $$
declare
  v_id uuid;
  v_company uuid := (select c.id from public.companies c limit 1);
begin
  if p_id is null then
    if v_company is null then
      raise exception 'company_not_found' using errcode = 'P0002';
    end if;
    insert into public.clients (company_id, name, email, phone, notes)
    values (v_company, p_name, p_email, p_phone, p_notes)
    returning id into v_id;
  else
    update public.clients set name = p_name, email = p_email, phone = p_phone, notes = p_notes
     where id = p_id
     returning id into v_id;
    if v_id is null then
      raise exception 'client_not_found' using errcode = 'P0002';
    end if;
  end if;
  return public.get_client(v_id);
end
$$;

create function public.set_client_status(p_id uuid, p_status text) returns jsonb
language plpgsql set search_path = ''
as $$
declare
  v_id uuid;
begin
  update public.clients set status = p_status where id = p_id returning id into v_id;
  if v_id is null then
    raise exception 'client_not_found' using errcode = 'P0002';
  end if;
  return public.get_client(v_id);
end
$$;

-- ---------------------------------------------------------------------------------------------- serviços

create function public.list_services(p_status text default 'ativo', p_search text default null) returns jsonb
language sql stable set search_path = ''
as $$
  select coalesce(jsonb_agg(to_jsonb(t) order by lower(t.name), t.id), '[]'::jsonb)
    from (
      select s.id, s.name, s.unit, s.base_price_cents, s.est_cost_cents, s.status,
             public.iso_utc(s.created_at) as created_at, public.iso_utc(s.updated_at) as updated_at
        from public.service_items s
       where (coalesce(p_status, 'ativo') = 'todos' or s.status = coalesce(p_status, 'ativo'))
         and (public.like_escape(p_search) is null
              or public.unaccent_br(s.name) like '%' || public.unaccent_br(public.like_escape(p_search)) || '%' escape '\\')
    ) t
$$;

create function public.get_service(p_id uuid) returns jsonb
language sql stable set search_path = ''
as $$
  select to_jsonb(t) from (
    select s.id, s.name, s.unit, s.base_price_cents, s.est_cost_cents, s.status,
           public.iso_utc(s.created_at) as created_at, public.iso_utc(s.updated_at) as updated_at
      from public.service_items s where s.id = p_id
  ) t
$$;

create function public.save_service(p_id uuid, p_name text, p_unit text, p_base_price_cents bigint, p_est_cost_cents bigint)
returns jsonb
language plpgsql set search_path = ''
as $$
declare
  v_id uuid;
  v_company uuid := (select c.id from public.companies c limit 1);
begin
  if p_id is null then
    if v_company is null then
      raise exception 'company_not_found' using errcode = 'P0002';
    end if;
    insert into public.service_items (company_id, name, unit, base_price_cents, est_cost_cents)
    values (v_company, p_name, coalesce(nullif(btrim(p_unit), ''), 'un'), p_base_price_cents, p_est_cost_cents)
    returning id into v_id;
  else
    update public.service_items
       set name = p_name, unit = coalesce(nullif(btrim(p_unit), ''), 'un'),
           base_price_cents = p_base_price_cents, est_cost_cents = p_est_cost_cents
     where id = p_id
     returning id into v_id;
    if v_id is null then
      raise exception 'service_not_found' using errcode = 'P0002';
    end if;
  end if;
  return public.get_service(v_id);
end
$$;

create function public.set_service_status(p_id uuid, p_status text) returns jsonb
language plpgsql set search_path = ''
as $$
declare
  v_id uuid;
begin
  update public.service_items set status = p_status where id = p_id returning id into v_id;
  if v_id is null then
    raise exception 'service_not_found' using errcode = 'P0002';
  end if;
  return public.get_service(v_id);
end
$$;

-- ---------------------------------------------------------------------------------------------- parcelas

create function public.list_receivables(
  p_quote uuid default null,
  p_client uuid default null,
  p_order uuid default null,
  p_include_canceled boolean default false
) returns jsonb
language sql stable set search_path = ''
as $$
  select coalesce(jsonb_agg(to_jsonb(t) order by t.due_date, t.quote_number, t.number), '[]'::jsonb)
    from (
      select r.id, r.order_id, o.quote_id, qu.number as quote_number, o.client_id, c.name as client_name,
             r.number, r.kind,
             (select count(*)::int from public.receivables x
               where x.order_id = r.order_id and x.kind = r.kind and x.number <= r.number) as kind_index,
             (select count(*)::int from public.receivables x
               where x.order_id = r.order_id and x.kind = r.kind) as kind_total,
             r.due_date::text as due_date, r.amount_cents, (r.canceled_at is not null) as canceled,
             coalesce((select sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end)
                         from public.payments p where p.receivable_id = r.id), 0)::bigint as paid_cents,
             coalesce((select jsonb_agg(jsonb_build_object(
                         'id', p.id, 'kind', p.kind, 'amount_cents', p.amount_cents, 'paid_on', p.paid_on::text,
                         'method', p.method, 'note', p.note, 'reverses_id', p.reverses_payment_id,
                         'created_at', public.iso_utc(p.created_at)) order by p.seq)
                         from public.payments p where p.receivable_id = r.id), '[]'::jsonb) as payments
        from public.receivables r
        join public.orders o on o.id = r.order_id and o.company_id = r.company_id
        join public.quotes qu on qu.id = o.quote_id and qu.company_id = o.company_id
        join public.clients c on c.id = o.client_id and c.company_id = o.company_id
       where (p_quote is null or o.quote_id = p_quote)
         and (p_client is null or o.client_id = p_client)
         and (p_order is null or r.order_id = p_order)
         and (coalesce(p_include_canceled, false) or r.canceled_at is null)
    ) t
$$;

-- ---------------------------------------------------------------------------------------------- orçamentos

create function public.list_quotes(p_status text default 'todos', p_client uuid default null, p_search text default null)
returns jsonb
language sql stable set search_path = ''
as $$
  select coalesce(jsonb_agg(to_jsonb(t) order by t.number desc), '[]'::jsonb)
    from (
      select q.id, q.number, q.client_id, c.name as client_name, q.status, q.valid_until::text as valid_until,
             q.total_cents, public.iso_utc(q.sent_at) as sent_at,
             public.iso_utc(q.created_at) as created_at, public.iso_utc(q.updated_at) as updated_at
        from public.quotes q
        join public.clients c on c.id = q.client_id and c.company_id = q.company_id
       where (coalesce(p_status, 'todos') = 'todos' or q.status = p_status)
         and (p_client is null or q.client_id = p_client)
         and (public.like_escape(p_search) is null
              or q.number::text = btrim(btrim(p_search), '#')
              or public.unaccent_br(c.name) like '%' || public.unaccent_br(public.like_escape(p_search)) || '%' escape '\\')
    ) t
$$;

-- O orçamento inteiro: cabeçalho, cliente, itens, histórico e, se aprovado, o serviço com as parcelas.
create function public.get_quote(p_id uuid) returns jsonb
language sql stable set search_path = ''
as $$
  select to_jsonb(h)
         || jsonb_build_object(
              'items', coalesce((
                select jsonb_agg(jsonb_build_object(
                         'position', i.position, 'description', i.description, 'quantity_milli', i.quantity_milli,
                         'unit_price_cents', i.unit_price_cents, 'line_total_cents', i.line_total_cents) order by i.position)
                  from public.quote_items i where i.quote_id = h.id), '[]'::jsonb),
              'events', coalesce((
                select jsonb_agg(jsonb_build_object(
                         'from_status', e.from_status, 'to_status', e.to_status, 'at', public.iso_utc(e.at),
                         'confirmed', e.confirmed, 'system', e.system) order by e.id)
                  from public.quote_events e where e.quote_id = h.id), '[]'::jsonb),
              'order', (
                select jsonb_build_object(
                         'id', o.id, 'status', o.status, 'approved_at', public.iso_utc(o.approved_at),
                         'receivables', public.list_receivables(null, null, o.id, true))
                  from public.orders o where o.quote_id = h.id)
            )
    from (
      select q.id, q.number, q.client_id, c.name as client_name, q.status, q.valid_until::text as valid_until,
             q.total_cents, public.iso_utc(q.sent_at) as sent_at,
             public.iso_utc(q.created_at) as created_at, public.iso_utc(q.updated_at) as updated_at,
             c.email as client_email, c.phone as client_phone, c.status as client_status,
             q.terms, q.notes, q.subtotal_cents, q.discount_cents, q.discount_kind, q.discount_value
        from public.quotes q
        join public.clients c on c.id = q.client_id and c.company_id = q.company_id
       where q.id = p_id
    ) h
$$;

-- ---------------------------------------------------------------------------------------------- despesas e caixa

create function public.list_expenses(p_include_canceled boolean default false) returns jsonb
language sql stable set search_path = ''
as $$
  select coalesce(jsonb_agg(to_jsonb(t) - '_criada' order by t.due_date, t._criada, t.id), '[]'::jsonb)
    from (
      select e.id, e.description, e.category, e.amount_cents, e.due_date::text as due_date, e.notes,
             (e.canceled_at is not null) as canceled, public.iso_utc(e.created_at) as created_at,
             e.created_at as _criada,
             coalesce((select sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end)
                         from public.expense_payments p where p.expense_id = e.id), 0)::bigint as paid_cents,
             coalesce((select jsonb_agg(jsonb_build_object(
                         'id', p.id, 'kind', p.kind, 'amount_cents', p.amount_cents, 'paid_on', p.paid_on::text,
                         'method', p.method, 'note', p.note, 'reverses_id', p.reverses_payment_id,
                         'created_at', public.iso_utc(p.created_at)) order by p.seq)
                         from public.expense_payments p where p.expense_id = e.id), '[]'::jsonb) as payments
        from public.expenses e
       where coalesce(p_include_canceled, false) or e.canceled_at is null
    ) t
$$;

create function public.list_ledger() returns jsonb
language sql stable set search_path = ''
as $$
  select coalesce(jsonb_agg(to_jsonb(t) - '_criado' order by t.occurred_on desc, t._criado desc, t.id desc), '[]'::jsonb)
    from (
      select l.id, l.direction,
             case when l.payment_id is not null then 'recebimento' else 'despesa' end as source,
             coalesce(pay.kind, ep.kind) as kind,
             l.amount_cents, l.occurred_on::text as occurred_on, l.created_at as _criado,
             qu.id as quote_id, qu.number as quote_number, c.name as client_name,
             r.kind as receivable_kind,
             (select count(*)::int from public.receivables x
               where x.order_id = r.order_id and x.kind = r.kind and x.number <= r.number) as receivable_index,
             (select count(*)::int from public.receivables x
               where x.order_id = r.order_id and x.kind = r.kind) as receivable_total,
             e.id as expense_id, e.description as expense_description, e.category
        from public.ledger_entries l
        left join public.payments pay on pay.id = l.payment_id
        left join public.receivables r on r.id = pay.receivable_id
        left join public.orders o on o.id = r.order_id
        left join public.quotes qu on qu.id = o.quote_id
        left join public.clients c on c.id = o.client_id
        left join public.expense_payments ep on ep.id = l.expense_payment_id
        left join public.expenses e on e.id = ep.expense_id
    ) t
$$;

-- ---------------------------------------------------------------------------------------------- tarefas e alertas

create function public.list_tasks(p_include_done boolean default false, p_client uuid default null) returns jsonb
language sql stable set search_path = ''
as $$
  select coalesce(jsonb_agg(to_jsonb(t) - '_criada' order by (t.done_at is not null), t.due_date, t._criada, t.id), '[]'::jsonb)
    from (
      select k.id, k.title, k.due_date::text as due_date, k.client_id, c.name as client_name, k.notes,
             public.iso_utc(k.done_at) as done_at, public.iso_utc(k.created_at) as created_at, k.created_at as _criada
        from public.tasks k
        left join public.clients c on c.id = k.client_id and c.company_id = k.company_id
       where (coalesce(p_include_done, false) or k.done_at is null)
         and (p_client is null or k.client_id = p_client)
    ) t
$$;

create function public.list_alert_states() returns jsonb
language sql stable set search_path = ''
as $$
  select coalesce(jsonb_agg(to_jsonb(t) order by t.alert_key), '[]'::jsonb)
    from (
      select a.alert_key, a.state, a.until::text as until, a.reason, public.iso_utc(a.updated_at) as updated_at
        from public.alert_states a
    ) t
$$;

-- ---------------------------------------------------------------------------------------------- permissões

-- Visitante nunca executa; quem está logado, sim (e a RLS decide o que enxerga).
do $$
declare
  f regprocedure;
begin
  for f in
    select p.oid::regprocedure
      from pg_catalog.pg_proc p
      join pg_catalog.pg_namespace n on n.oid = p.pronamespace
     where n.nspname = 'public'
       and p.proname in (
         'iso_utc', 'like_escape', 'current_company', 'rename_company', 'has_business_data', 'table_counts',
         'list_clients', 'get_client', 'save_client', 'set_client_status',
         'list_services', 'get_service', 'save_service', 'set_service_status',
         'list_receivables', 'list_quotes', 'get_quote', 'list_expenses', 'list_ledger', 'list_tasks', 'list_alert_states'
       )
  loop
    execute format('revoke all on function %s from public, anon', f);
    execute format('grant execute on function %s to authenticated', f);
  end loop;
end
$$;
`,Y=`-- NAP · 0014 · Respostas guardadas ("Perguntar ao NAP", etapa seguinte).
-- Quando o NAP não sabe responder (imposto, lei, "o que é..."), a pessoa leva a PERGUNTA para uma IA ou para o
-- contador. Esta tabela guarda, só para consulta, a resposta que ela trouxe de volta, com a origem e o prazo para rever.
--
-- Regras de desenho:
--   * o NAP não aprende nem confere nada: guarda o texto que a pessoa escreveu e o mostra quando ela pergunta de novo;
--   * "conferida" é uma marcação da própria pessoa (com a data); sem ela, a resposta é "não verificada";
--   * toda resposta tem prazo para rever (de hoje até 2 anos); depois dele a tela avisa;
--   * NENHUMA função de dinheiro lê esta tabela: respostas guardadas nunca entram em cálculo (um teste confere);
--   * a auditoria registra que houve criação, edição ou exclusão, nunca o texto da pergunta nem da resposta;
--   * o navegador só LÊ a tabela; quem grava são as funções abaixo, como nas outras.

create table public.saved_answers (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies (id) on delete cascade,
  question text not null constraint saved_answers_question_check check (char_length(btrim(question)) between 1 and 300),
  answer text not null constraint saved_answers_answer_check check (char_length(btrim(answer)) between 1 and 4000),
  -- De onde veio: uma IA, o contador, uma fonte oficial (site de órgão público) ou outra.
  source_kind text not null constraint saved_answers_source_check check (source_kind in ('ia', 'contador', 'oficial', 'outra')),
  -- Nome da IA ou endereço da fonte (opcional).
  source_label text constraint saved_answers_label_check check (source_label is null or char_length(source_label) <= 120),
  -- Dia em que a PESSOA marcou que conferiu a resposta com o contador ou com uma fonte oficial. Nulo = não verificada.
  verified_on date constraint saved_answers_verified_check
    check (verified_on is null or (verified_on >= date '2000-01-01' and verified_on <= date '2100-12-31')),
  -- A partir deste dia a resposta deve ser revista (leis e prazos mudam).
  review_on date not null constraint saved_answers_review_check
    check (review_on >= date '2000-01-01' and review_on <= date '2100-12-31'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (company_id, id)
);

create index saved_answers_company_idx on public.saved_answers (company_id, created_at desc);

create trigger saved_answers_touch before update on public.saved_answers
for each row execute function public.touch_updated_at();

select public.apply_company_rls('public.saved_answers', false);

-- ---------- Gravar ----------

-- Cria (sem id) ou edita uma resposta guardada. Sem p_review_on, o prazo é de 90 dias.
-- p_verified: "conferi com o contador ou com uma fonte oficial". A data é a de hoje; se a resposta foi editada,
-- a marcação anterior não vale mais e a pessoa precisa marcar de novo.
create function public.save_saved_answer(
  p_id uuid,
  p_question text,
  p_answer text,
  p_source_kind text,
  p_source_label text default null,
  p_verified boolean default false,
  p_review_on date default null
) returns uuid
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_hoje date := public.today_br();
  v_question text := btrim(p_question);
  v_answer text := btrim(p_answer);
  v_label text := nullif(btrim(p_source_label), '');
  v_review date := coalesce(p_review_on, public.today_br() + 90);
  v_old_answer text;
  v_old_verified date;
  v_verified date;
  v_id uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  if p_id is null then
    select m.company_id into v_company from public.company_members m where m.user_id = v_user limit 1;
    if v_company is null then
      raise exception 'not_member' using errcode = '42501';
    end if;
  else
    select a.company_id, a.answer, a.verified_on into v_company, v_old_answer, v_old_verified
      from public.saved_answers a where a.id = p_id for update;
    if v_company is null or not public.is_member(v_company) then
      raise exception 'saved_answer_not_found' using errcode = 'P0002';
    end if;
  end if;

  if v_question is null or char_length(v_question) not between 1 and 300 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'question';
  end if;
  if v_answer is null or char_length(v_answer) not between 1 and 4000 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'answer';
  end if;
  if p_source_kind is null or p_source_kind not in ('ia', 'contador', 'oficial', 'outra') then
    raise exception 'invalid_input' using errcode = '22023', detail = 'source_kind';
  end if;
  if v_label is not null and char_length(v_label) > 120 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'source_label';
  end if;
  if v_review < v_hoje or v_review > v_hoje + 730 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'review_on';
  end if;

  v_verified := case
    when not coalesce(p_verified, false) then null
    when p_id is not null and v_old_verified is not null and v_old_answer = v_answer then v_old_verified
    else v_hoje
  end;

  if p_id is null then
    insert into public.saved_answers (company_id, question, answer, source_kind, source_label, verified_on, review_on)
      values (v_company, v_question, v_answer, p_source_kind, v_label, v_verified, v_review)
      returning id into v_id;
  else
    update public.saved_answers
       set question = v_question, answer = v_answer, source_kind = p_source_kind, source_label = v_label,
           verified_on = v_verified, review_on = v_review
     where id = p_id;
    v_id := p_id;
  end if;

  -- Só o fato: nunca o texto.
  perform public.audit_log(v_company, case when p_id is null then 'saved_answer.create' else 'saved_answer.update' end, 'saved_answer', v_id);
  return v_id;
end
$$;

-- Apaga uma resposta guardada (não é registro financeiro). Fica na auditoria, sem o texto.
create function public.delete_saved_answer(p_id uuid) returns void
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  select a.company_id into v_company from public.saved_answers a where a.id = p_id for update;
  if v_company is null or not public.is_member(v_company) then
    raise exception 'saved_answer_not_found' using errcode = 'P0002';
  end if;
  delete from public.saved_answers where id = p_id;
  perform public.audit_log(v_company, 'saved_answer.delete', 'saved_answer', p_id);
end
$$;

-- ---------- Ler (SECURITY INVOKER: a RLS decide o que existe, como nas outras leituras) ----------

create function public.list_saved_answers(p_search text default null) returns jsonb
language sql stable set search_path = ''
as $$
  select coalesce(jsonb_agg(to_jsonb(t) - '_criada' order by t._criada desc, t.id), '[]'::jsonb)
    from (
      select a.id, a.question, a.answer, a.source_kind, a.source_label,
             a.verified_on::text as verified_on, a.review_on::text as review_on,
             public.iso_utc(a.created_at) as created_at, public.iso_utc(a.updated_at) as updated_at,
             a.created_at as _criada
        from public.saved_answers a
       where public.like_escape(p_search) is null
          or public.unaccent_br(a.question || ' ' || a.answer || ' ' || coalesce(a.source_label, ''))
             like '%' || public.unaccent_br(public.like_escape(p_search)) || '%' escape '\\'
    ) t
$$;

-- ---------- Exportação (formato 5, com as respostas guardadas) ----------

create or replace function public.export_company_data(p_company uuid) returns jsonb
language plpgsql security definer set search_path = ''
as $$
begin
  if not public.is_member(p_company) then
    raise exception 'not_member' using errcode = '42501';
  end if;

  perform public.audit_log(p_company, 'company.export', 'company', p_company);

  return jsonb_build_object(
    'format', 5,
    'exported_at', now(),
    'company', (select to_jsonb(c) from public.companies c where c.id = p_company),
    'members', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.user_id)
         from public.company_members t where t.company_id = p_company), '[]'::jsonb),
    'clients', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.clients t where t.company_id = p_company), '[]'::jsonb),
    'service_items', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.service_items t where t.company_id = p_company), '[]'::jsonb),
    'quotes', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.number)
         from public.quotes t where t.company_id = p_company), '[]'::jsonb),
    'quote_items', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.quote_id, t.position)
         from public.quote_items t where t.company_id = p_company), '[]'::jsonb),
    'quote_events', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.id)
         from public.quote_events t where t.company_id = p_company), '[]'::jsonb),
    'orders', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.approved_at, t.id)
         from public.orders t where t.company_id = p_company), '[]'::jsonb),
    'receivables', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.order_id, t.number)
         from public.receivables t where t.company_id = p_company), '[]'::jsonb),
    'payments', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.payments t where t.company_id = p_company), '[]'::jsonb),
    'expenses', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.created_at, t.id)
         from public.expenses t where t.company_id = p_company), '[]'::jsonb),
    'expense_payments', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.expense_payments t where t.company_id = p_company), '[]'::jsonb),
    'ledger_entries', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.occurred_on, t.created_at, t.id)
         from public.ledger_entries t where t.company_id = p_company), '[]'::jsonb),
    'tasks', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.created_at, t.id)
         from public.tasks t where t.company_id = p_company), '[]'::jsonb),
    'alert_states', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.alert_key)
         from public.alert_states t where t.company_id = p_company), '[]'::jsonb),
    'saved_answers', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.saved_answers t where t.company_id = p_company), '[]'::jsonb),
    'audit_events', coalesce(
      (select jsonb_agg(to_jsonb(a) order by a.at)
         from (select e.* from public.audit_events e
                where e.company_id = p_company order by e.at desc limit 5000) a), '[]'::jsonb)
  );
end
$$;

-- ---------- Restauração (aceita cópias dos formatos 2 a 5) ----------

create or replace function public.import_company_data(p_company uuid, p_data jsonb) returns jsonb
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_format integer;
  v_chave text;
  v_counts jsonb := '{}'::jsonb;
  v_n bigint;
  v_empresa jsonb;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  if not public.is_owner(p_company) then
    raise exception 'not_owner' using errcode = '42501';
  end if;

  -- Formato do arquivo: um objeto de uma versão que sabemos ler (2 a 5); as listas, quando existem, são listas.
  if p_data is null or jsonb_typeof(p_data) <> 'object' then
    raise exception 'import_format' using errcode = 'P0001';
  end if;
  if (p_data ->> 'format') is null or (p_data ->> 'format') !~ '^[0-9]{1,3}$' then
    raise exception 'import_format' using errcode = 'P0001';
  end if;
  v_format := (p_data ->> 'format')::integer;
  if v_format < 2 or v_format > 5 then
    raise exception 'import_format' using errcode = 'P0001';
  end if;
  foreach v_chave in array array[
    'clients', 'service_items', 'quotes', 'quote_items', 'quote_events', 'orders', 'receivables', 'payments',
    'expenses', 'expense_payments', 'ledger_entries', 'tasks', 'alert_states', 'saved_answers'
  ] loop
    if p_data ? v_chave and jsonb_typeof(p_data -> v_chave) <> 'array' then
      raise exception 'import_format' using errcode = 'P0001';
    end if;
  end loop;
  v_empresa := coalesce(p_data -> 'company', '{}'::jsonb);
  if jsonb_typeof(v_empresa) <> 'object' then
    raise exception 'import_format' using errcode = 'P0001';
  end if;

  -- Só em empresa vazia.
  if exists (select 1 from public.clients where company_id = p_company)
     or exists (select 1 from public.service_items where company_id = p_company)
     or exists (select 1 from public.quotes where company_id = p_company)
     or exists (select 1 from public.expenses where company_id = p_company)
     or exists (select 1 from public.tasks where company_id = p_company)
     or exists (select 1 from public.alert_states where company_id = p_company)
     or exists (select 1 from public.saved_answers where company_id = p_company)
     or exists (select 1 from public.ledger_entries where company_id = p_company) then
    raise exception 'company_not_empty' using errcode = 'P0001';
  end if;

  begin
    insert into public.clients (id, company_id, name, email, phone, notes, status, created_at, updated_at)
    select r.id, p_company, r.name, r.email, r.phone, r.notes, r.status, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.clients, coalesce(p_data -> 'clients', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('clients', v_n);

    insert into public.service_items (id, company_id, name, unit, base_price_cents, est_cost_cents, status, created_at, updated_at)
    select r.id, p_company, r.name, r.unit, r.base_price_cents, r.est_cost_cents, r.status, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.service_items, coalesce(p_data -> 'service_items', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('service_items', v_n);

    insert into public.quotes (
      id, company_id, client_id, number, status, valid_until, terms, notes, discount_kind, discount_value,
      subtotal_cents, discount_cents, total_cents, sent_at, decided_at, created_at, updated_at
    )
    select r.id, p_company, r.client_id, r.number, r.status, r.valid_until, r.terms, r.notes, r.discount_kind,
           r.discount_value, r.subtotal_cents, r.discount_cents, r.total_cents, r.sent_at, r.decided_at,
           r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.quotes, coalesce(p_data -> 'quotes', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('quotes', v_n);

    insert into public.quote_items (id, company_id, quote_id, position, description, quantity_milli, unit_price_cents)
    select r.id, p_company, r.quote_id, r.position, r.description, r.quantity_milli, r.unit_price_cents
      from jsonb_populate_recordset(null::public.quote_items, coalesce(p_data -> 'quote_items', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('quote_items', v_n);

    insert into public.quote_events (id, company_id, quote_id, from_status, to_status, actor_user_id, at, confirmed, system)
    overriding system value
    select r.id, p_company, r.quote_id, r.from_status, r.to_status, r.actor_user_id, r.at, r.confirmed, r.system
      from jsonb_populate_recordset(null::public.quote_events, coalesce(p_data -> 'quote_events', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('quote_events', v_n);

    insert into public.orders (id, company_id, quote_id, client_id, status, total_cents, approved_at, canceled_at)
    select r.id, p_company, r.quote_id, r.client_id, r.status, r.total_cents, r.approved_at, r.canceled_at
      from jsonb_populate_recordset(null::public.orders, coalesce(p_data -> 'orders', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('orders', v_n);

    insert into public.receivables (id, company_id, order_id, number, kind, due_date, amount_cents, canceled_at, created_at)
    select r.id, p_company, r.order_id, r.number, r.kind, r.due_date, r.amount_cents, r.canceled_at, r.created_at
      from jsonb_populate_recordset(null::public.receivables, coalesce(p_data -> 'receivables', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('receivables', v_n);

    insert into public.payments (
      id, seq, company_id, receivable_id, kind, amount_cents, paid_on, method, note, reverses_payment_id, created_by, created_at
    )
    overriding system value
    select r.id, r.seq, p_company, r.receivable_id, r.kind, r.amount_cents, r.paid_on, r.method, r.note,
           r.reverses_payment_id, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.payments, coalesce(p_data -> 'payments', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('payments', v_n);

    insert into public.expenses (id, company_id, description, category, amount_cents, due_date, notes, canceled_at, created_at, updated_at)
    select r.id, p_company, r.description, r.category, r.amount_cents, r.due_date, r.notes, r.canceled_at, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.expenses, coalesce(p_data -> 'expenses', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('expenses', v_n);

    insert into public.expense_payments (
      id, seq, company_id, expense_id, kind, amount_cents, paid_on, method, note, reverses_payment_id, created_by, created_at
    )
    overriding system value
    select r.id, r.seq, p_company, r.expense_id, r.kind, r.amount_cents, r.paid_on, r.method, r.note,
           r.reverses_payment_id, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.expense_payments, coalesce(p_data -> 'expense_payments', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('expense_payments', v_n);

    insert into public.ledger_entries (id, company_id, payment_id, expense_payment_id, direction, amount_cents, occurred_on, created_at)
    select r.id, p_company, r.payment_id, r.expense_payment_id, r.direction, r.amount_cents, r.occurred_on, r.created_at
      from jsonb_populate_recordset(null::public.ledger_entries, coalesce(p_data -> 'ledger_entries', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('ledger_entries', v_n);

    insert into public.tasks (id, company_id, title, due_date, client_id, notes, done_at, created_at, updated_at)
    select r.id, p_company, r.title, r.due_date, r.client_id, r.notes, r.done_at, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.tasks, coalesce(p_data -> 'tasks', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('tasks', v_n);

    insert into public.alert_states (company_id, alert_key, state, until, reason, updated_at)
    select p_company, r.alert_key, r.state, r.until, r.reason, r.updated_at
      from jsonb_populate_recordset(null::public.alert_states, coalesce(p_data -> 'alert_states', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('alert_states', v_n);

    insert into public.saved_answers (id, company_id, question, answer, source_kind, source_label, verified_on, review_on, created_at, updated_at)
    select r.id, p_company, r.question, r.answer, r.source_kind, r.source_label, r.verified_on, r.review_on, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.saved_answers, coalesce(p_data -> 'saved_answers', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('saved_answers', v_n);

    -- Os contadores seguem de onde a cópia parou (próximo número de orçamento, próximos ids das tabelas com sequência).
    update public.companies set
      quote_seq = greatest(
        quote_seq,
        coalesce((select max(q.number) from public.quotes q where q.company_id = p_company), 0),
        case when (v_empresa ->> 'quote_seq') ~ '^[0-9]{1,9}$' then (v_empresa ->> 'quote_seq')::integer else 0 end
      ),
      opening_balance_cents = case when (v_empresa ->> 'opening_balance_cents') ~ '^-?[0-9]{1,13}$'
                                   then (v_empresa ->> 'opening_balance_cents')::bigint end,
      opening_balance_on = case when (v_empresa ->> 'opening_balance_cents') ~ '^-?[0-9]{1,13}$'
                                then (v_empresa ->> 'opening_balance_on')::date end
    where id = p_company;
    perform setval(pg_get_serial_sequence('public.quote_events', 'id'), greatest((select coalesce(max(id), 0) from public.quote_events), 1),
                   (select count(*) > 0 from public.quote_events));
    perform setval(pg_get_serial_sequence('public.payments', 'seq'), greatest((select coalesce(max(seq), 0) from public.payments), 1),
                   (select count(*) > 0 from public.payments));
    perform setval(pg_get_serial_sequence('public.expense_payments', 'seq'), greatest((select coalesce(max(seq), 0) from public.expense_payments), 1),
                   (select count(*) > 0 from public.expense_payments));
  exception
    when unique_violation then
      -- Mesmo id já existe (neste aparelho ou em outra empresa): a cópia não pode entrar. Sem detalhes do que existe.
      raise exception 'import_conflict' using errcode = 'P0001';
    when foreign_key_violation then
      raise exception 'import_invalid' using errcode = 'P0001', detail = 'references';
    when check_violation or not_null_violation or invalid_text_representation or datetime_field_overflow
         or invalid_datetime_format or numeric_value_out_of_range or invalid_parameter_value or string_data_right_truncation then
      raise exception 'import_invalid' using errcode = 'P0001', detail = 'values';
  end;

  -- ---------- O dinheiro tem de fechar (as mesmas regras que as funções do servidor garantem ao gravar) ----------

  -- Orçamento: subtotal = soma das linhas; desconto e total conforme o tipo de desconto.
  if exists (
    select 1
      from public.quotes q
      left join lateral (select coalesce(sum(i.line_total_cents), 0) as soma from public.quote_items i where i.quote_id = q.id) s on true
     where q.company_id = p_company
       and (q.subtotal_cents <> s.soma
            or q.total_cents <> q.subtotal_cents - q.discount_cents
            or q.discount_cents <> case q.discount_kind
                                     when 'none' then 0
                                     when 'percent' then public.money_percent(q.subtotal_cents, q.discount_value::integer)
                                     else q.discount_value end)
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'quotes';
  end if;

  -- Orçamento aprovado tem serviço; serviço só existe para orçamento aprovado ou cancelado depois de aprovado.
  if exists (select 1 from public.quotes q where q.company_id = p_company and q.status = 'aprovado'
              and not exists (select 1 from public.orders o where o.quote_id = q.id))
     or exists (select 1 from public.orders o join public.quotes q on q.id = o.quote_id
                 where o.company_id = p_company and q.status not in ('aprovado', 'cancelado')) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'orders';
  end if;

  -- Serviço: as parcelas somam o total.
  if exists (
    select 1 from public.orders o
     where o.company_id = p_company
       and o.total_cents <> (select coalesce(sum(r.amount_cents), 0) from public.receivables r where r.order_id = o.id)
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'receivables';
  end if;

  -- Parcela: o pago líquido nunca passa do valor nem fica negativo; e o estorno tem a mesma data ou depois do pagamento.
  if exists (
    select 1 from public.receivables r
     where r.company_id = p_company
       and (select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
              from public.payments p where p.receivable_id = r.id) not between 0 and r.amount_cents
  ) or exists (
    select 1 from public.payments e join public.payments o on o.id = e.reverses_payment_id
     where e.company_id = p_company and e.paid_on < o.paid_on
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'payments';
  end if;

  -- Despesa: paga por inteiro ou não paga (líquido de estornos).
  if exists (
    select 1 from public.expenses e
     where e.company_id = p_company
       and (select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
              from public.expense_payments p where p.expense_id = e.id) not in (0, e.amount_cents)
  ) or exists (
    select 1 from public.expense_payments e join public.expense_payments o on o.id = e.reverses_payment_id
     where e.company_id = p_company and e.paid_on < o.paid_on
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'expense_payments';
  end if;

  -- Caixa: cada pagamento (de cliente ou de despesa) tem exatamente um lançamento.
  if exists (select 1 from public.payments p where p.company_id = p_company
              and not exists (select 1 from public.ledger_entries l where l.payment_id = p.id))
     or exists (select 1 from public.expense_payments p where p.company_id = p_company
                 and not exists (select 1 from public.ledger_entries l where l.expense_payment_id = p.id)) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'ledger_entries';
  end if;

  perform public.audit_log(p_company, 'company.import', 'company', p_company, v_counts);
  return v_counts;
end
$$;

-- ---------- "Tem dados?" e contagem para o diagnóstico (agora com as respostas guardadas) ----------

create or replace function public.has_business_data() returns boolean
language sql stable set search_path = ''
as $$
  select exists (select 1 from public.clients) or exists (select 1 from public.service_items)
      or exists (select 1 from public.quotes) or exists (select 1 from public.expenses)
      or exists (select 1 from public.tasks) or exists (select 1 from public.alert_states)
      or exists (select 1 from public.ledger_entries) or exists (select 1 from public.saved_answers)
$$;

-- Quantos registros há em cada tabela de negócio (para o diagnóstico: só números, nunca conteúdo).
create or replace function public.table_counts() returns jsonb
language sql stable set search_path = ''
as $$
  select jsonb_build_array(
    jsonb_build_object('tabela', 'clients', 'n', (select count(*)::int from public.clients)),
    jsonb_build_object('tabela', 'service_items', 'n', (select count(*)::int from public.service_items)),
    jsonb_build_object('tabela', 'quotes', 'n', (select count(*)::int from public.quotes)),
    jsonb_build_object('tabela', 'receivables', 'n', (select count(*)::int from public.receivables)),
    jsonb_build_object('tabela', 'payments', 'n', (select count(*)::int from public.payments)),
    jsonb_build_object('tabela', 'expenses', 'n', (select count(*)::int from public.expenses)),
    jsonb_build_object('tabela', 'expense_payments', 'n', (select count(*)::int from public.expense_payments)),
    jsonb_build_object('tabela', 'ledger_entries', 'n', (select count(*)::int from public.ledger_entries)),
    jsonb_build_object('tabela', 'tasks', 'n', (select count(*)::int from public.tasks)),
    jsonb_build_object('tabela', 'alert_states', 'n', (select count(*)::int from public.alert_states)),
    jsonb_build_object('tabela', 'saved_answers', 'n', (select count(*)::int from public.saved_answers))
  )
$$;

-- ---------- Permissões ----------

revoke all on function public.save_saved_answer(uuid, text, text, text, text, boolean, date) from public, anon;
revoke all on function public.delete_saved_answer(uuid) from public, anon;
revoke all on function public.list_saved_answers(text) from public, anon;
grant execute on function public.save_saved_answer(uuid, text, text, text, text, boolean, date) to authenticated;
grant execute on function public.delete_saved_answer(uuid) to authenticated;
grant execute on function public.list_saved_answers(text) to authenticated;
`,ae=`-- NAP · 0015 · Estados de cobrança (Fase U3.2, Atualização 1.1).
-- Cada parcela a receber ganha um HISTÓRICO de cobrança, separado do pagamento:
--   pendente (ainda sem ação), agendada (data para cobrar), mensagem preparada, enviada, pagamento informado,
--   pausada, contestada e cancelada.
--
-- Regras de desenho (as do PDF "Atualização Final 1.1", seção 7):
--   * PREPARAR não é ENVIAR: o NAP nunca envia nada; "enviada" é a PESSOA que marca, depois de mandar pelo WhatsApp;
--   * INFORMAR não é CONFIRMAR: "pagamento informado" é só o que o cliente disse e NÃO muda saldo, caixa nem relatório;
--     só um pagamento registrado (register_payment) confirma, e parcela paga por inteiro não recebe mais estado;
--   * o histórico é imutável (uma linha por mudança, nunca editada nem apagada, fora da retenção);
--   * pausada, contestada e cancelada exigem o MOTIVO (para preservar o histórico);
--   * a auditoria registra o estado e a parcela, nunca o texto da observação;
--   * nenhuma função de dinheiro lê esta tabela: cobrança nunca entra em cálculo (um teste confere).

create table public.collection_events (
  id uuid primary key default gen_random_uuid(),
  seq bigint generated always as identity,
  company_id uuid not null references public.companies (id) on delete cascade,
  receivable_id uuid not null,
  state text not null constraint collection_events_state_check
    check (state in ('pendente', 'agendada', 'mensagem_preparada', 'enviada', 'pagamento_informado', 'pausada', 'contestada', 'cancelada')),
  -- Só a cobrança "agendada" tem data (e toda "agendada" tem).
  scheduled_for date constraint collection_events_date_check
    check (scheduled_for is null or (scheduled_for >= date '2000-01-01' and scheduled_for <= date '2100-12-31')),
  note text constraint collection_events_note_check check (note is null or char_length(note) <= 500),
  created_by uuid,
  created_at timestamptz not null default now(),
  constraint collection_events_schedule_check check ((state = 'agendada') = (scheduled_for is not null)),
  constraint collection_events_reason_check
    check (state not in ('pausada', 'contestada', 'cancelada') or (note is not null and char_length(btrim(note)) >= 3)),
  unique (company_id, id),
  foreign key (company_id, receivable_id) references public.receivables (company_id, id)
);

create index collection_events_receivable_idx on public.collection_events (receivable_id, seq);
create index collection_events_company_idx on public.collection_events (company_id, created_at);

create trigger collection_events_no_change before update or delete on public.collection_events
for each row execute function public.immutable_row_guard();

select public.apply_company_rls('public.collection_events', false);

-- ---------- Gravar ----------

-- Registra uma mudança de estado da cobrança de uma parcela. Repetir o mesmo estado (mesma data e mesma observação)
-- não cria linha nova e devolve nulo. Voltar a "pendente" reabre a cobrança.
create function public.set_collection_state(
  p_receivable_id uuid,
  p_state text,
  p_scheduled_for date default null,
  p_note text default null
) returns jsonb
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_amount bigint;
  v_canceled timestamptz;
  v_paid bigint;
  v_hoje date := public.today_br();
  v_note text := nullif(btrim(p_note), '');
  v_last_state text;
  v_last_date date;
  v_last_note text;
  v_id uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  -- Trava a parcela: duas mudanças ao mesmo tempo ficam em ordem.
  select r.company_id, r.amount_cents, r.canceled_at
    into v_company, v_amount, v_canceled
    from public.receivables r where r.id = p_receivable_id for update;
  if v_company is null or not public.is_member(v_company) then
    raise exception 'receivable_not_found' using errcode = 'P0002';
  end if;
  if v_canceled is not null then
    raise exception 'receivable_canceled' using errcode = 'P0001';
  end if;

  if p_state is null or p_state not in ('pendente', 'agendada', 'mensagem_preparada', 'enviada', 'pagamento_informado', 'pausada', 'contestada', 'cancelada') then
    raise exception 'invalid_input' using errcode = '22023', detail = 'state';
  end if;
  if p_state = 'agendada' then
    if p_scheduled_for is null or p_scheduled_for < v_hoje or p_scheduled_for > v_hoje + 365 then
      raise exception 'invalid_input' using errcode = '22023', detail = 'scheduled_for';
    end if;
  elsif p_scheduled_for is not null then
    raise exception 'invalid_input' using errcode = '22023', detail = 'scheduled_for';
  end if;
  if v_note is not null and char_length(v_note) > 500 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'note';
  end if;
  if p_state in ('pausada', 'contestada', 'cancelada') and (v_note is null or char_length(v_note) < 3) then
    raise exception 'invalid_input' using errcode = '22023', detail = 'note';
  end if;

  -- Parcela paga por inteiro (pelo dinheiro registrado, líquido de estornos) não tem mais o que cobrar.
  select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
    into v_paid from public.payments p where p.receivable_id = p_receivable_id;
  if v_paid >= v_amount then
    raise exception 'receivable_paid' using errcode = 'P0001';
  end if;

  select e.state, e.scheduled_for, e.note into v_last_state, v_last_date, v_last_note
    from public.collection_events e where e.receivable_id = p_receivable_id order by e.seq desc limit 1;
  if v_last_state is null and p_state = 'pendente' then
    return null; -- sem histórico a parcela já é "pendente"
  end if;
  if v_last_state = p_state and v_last_date is not distinct from p_scheduled_for and v_last_note is not distinct from v_note then
    return null; -- o mesmo de agora: nada a registrar
  end if;

  insert into public.collection_events (company_id, receivable_id, state, scheduled_for, note, created_by)
    values (v_company, p_receivable_id, p_state, p_scheduled_for, v_note, v_user)
    returning id into v_id;
  -- Só o fato: nunca o texto da observação.
  perform public.audit_log(v_company, 'collection.state', 'receivable', p_receivable_id, jsonb_build_object('state', p_state));

  return (
    select jsonb_build_object('id', e.id, 'receivable_id', e.receivable_id, 'state', e.state,
                              'scheduled_for', e.scheduled_for::text, 'note', e.note, 'created_at', public.iso_utc(e.created_at))
      from public.collection_events e where e.id = v_id
  );
end
$$;

-- ---------- Ler (SECURITY INVOKER: a RLS decide o que existe) ----------

-- O histórico de UMA parcela, do mais novo para o mais antigo.
create function public.list_collection_events(p_receivable_id uuid) returns jsonb
language sql stable set search_path = ''
as $$
  select coalesce(jsonb_agg(jsonb_build_object(
           'id', e.id, 'receivable_id', e.receivable_id, 'state', e.state,
           'scheduled_for', e.scheduled_for::text, 'note', e.note, 'created_at', public.iso_utc(e.created_at)
         ) order by e.seq desc), '[]'::jsonb)
    from public.collection_events e
   where e.receivable_id = p_receivable_id
$$;

-- O estado ATUAL (o último evento) de cada parcela que já teve alguma ação de cobrança.
create function public.list_collection_states() returns jsonb
language sql stable set search_path = ''
as $$
  select coalesce(jsonb_agg(jsonb_build_object(
           'id', t.id, 'receivable_id', t.receivable_id, 'state', t.state,
           'scheduled_for', t.scheduled_for::text, 'note', t.note, 'created_at', public.iso_utc(t.created_at)
         ) order by t.receivable_id), '[]'::jsonb)
    from (
      select distinct on (e.receivable_id) e.*
        from public.collection_events e
       order by e.receivable_id, e.seq desc
    ) t
$$;

-- ---------- Exportação (formato 6, com o histórico de cobrança) ----------

create or replace function public.export_company_data(p_company uuid) returns jsonb
language plpgsql security definer set search_path = ''
as $$
begin
  if not public.is_member(p_company) then
    raise exception 'not_member' using errcode = '42501';
  end if;

  perform public.audit_log(p_company, 'company.export', 'company', p_company);

  return jsonb_build_object(
    'format', 6,
    'exported_at', now(),
    'company', (select to_jsonb(c) from public.companies c where c.id = p_company),
    'members', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.user_id)
         from public.company_members t where t.company_id = p_company), '[]'::jsonb),
    'clients', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.clients t where t.company_id = p_company), '[]'::jsonb),
    'service_items', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.service_items t where t.company_id = p_company), '[]'::jsonb),
    'quotes', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.number)
         from public.quotes t where t.company_id = p_company), '[]'::jsonb),
    'quote_items', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.quote_id, t.position)
         from public.quote_items t where t.company_id = p_company), '[]'::jsonb),
    'quote_events', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.id)
         from public.quote_events t where t.company_id = p_company), '[]'::jsonb),
    'orders', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.approved_at, t.id)
         from public.orders t where t.company_id = p_company), '[]'::jsonb),
    'receivables', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.order_id, t.number)
         from public.receivables t where t.company_id = p_company), '[]'::jsonb),
    'payments', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.payments t where t.company_id = p_company), '[]'::jsonb),
    'collection_events', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.collection_events t where t.company_id = p_company), '[]'::jsonb),
    'expenses', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.created_at, t.id)
         from public.expenses t where t.company_id = p_company), '[]'::jsonb),
    'expense_payments', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.expense_payments t where t.company_id = p_company), '[]'::jsonb),
    'ledger_entries', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.occurred_on, t.created_at, t.id)
         from public.ledger_entries t where t.company_id = p_company), '[]'::jsonb),
    'tasks', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.created_at, t.id)
         from public.tasks t where t.company_id = p_company), '[]'::jsonb),
    'alert_states', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.alert_key)
         from public.alert_states t where t.company_id = p_company), '[]'::jsonb),
    'saved_answers', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.saved_answers t where t.company_id = p_company), '[]'::jsonb),
    'audit_events', coalesce(
      (select jsonb_agg(to_jsonb(a) order by a.at)
         from (select e.* from public.audit_events e
                where e.company_id = p_company order by e.at desc limit 5000) a), '[]'::jsonb)
  );
end
$$;

-- ---------- Restauração (aceita cópias dos formatos 2 a 6) ----------

create or replace function public.import_company_data(p_company uuid, p_data jsonb) returns jsonb
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_format integer;
  v_chave text;
  v_counts jsonb := '{}'::jsonb;
  v_n bigint;
  v_empresa jsonb;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  if not public.is_owner(p_company) then
    raise exception 'not_owner' using errcode = '42501';
  end if;

  -- Formato do arquivo: um objeto de uma versão que sabemos ler (2 a 6); as listas, quando existem, são listas.
  if p_data is null or jsonb_typeof(p_data) <> 'object' then
    raise exception 'import_format' using errcode = 'P0001';
  end if;
  if (p_data ->> 'format') is null or (p_data ->> 'format') !~ '^[0-9]{1,3}$' then
    raise exception 'import_format' using errcode = 'P0001';
  end if;
  v_format := (p_data ->> 'format')::integer;
  if v_format < 2 or v_format > 6 then
    raise exception 'import_format' using errcode = 'P0001';
  end if;
  foreach v_chave in array array[
    'clients', 'service_items', 'quotes', 'quote_items', 'quote_events', 'orders', 'receivables', 'payments',
    'collection_events', 'expenses', 'expense_payments', 'ledger_entries', 'tasks', 'alert_states', 'saved_answers'
  ] loop
    if p_data ? v_chave and jsonb_typeof(p_data -> v_chave) <> 'array' then
      raise exception 'import_format' using errcode = 'P0001';
    end if;
  end loop;
  v_empresa := coalesce(p_data -> 'company', '{}'::jsonb);
  if jsonb_typeof(v_empresa) <> 'object' then
    raise exception 'import_format' using errcode = 'P0001';
  end if;

  -- Só em empresa vazia.
  if exists (select 1 from public.clients where company_id = p_company)
     or exists (select 1 from public.service_items where company_id = p_company)
     or exists (select 1 from public.quotes where company_id = p_company)
     or exists (select 1 from public.expenses where company_id = p_company)
     or exists (select 1 from public.tasks where company_id = p_company)
     or exists (select 1 from public.alert_states where company_id = p_company)
     or exists (select 1 from public.saved_answers where company_id = p_company)
     or exists (select 1 from public.ledger_entries where company_id = p_company) then
    raise exception 'company_not_empty' using errcode = 'P0001';
  end if;

  begin
    insert into public.clients (id, company_id, name, email, phone, notes, status, created_at, updated_at)
    select r.id, p_company, r.name, r.email, r.phone, r.notes, r.status, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.clients, coalesce(p_data -> 'clients', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('clients', v_n);

    insert into public.service_items (id, company_id, name, unit, base_price_cents, est_cost_cents, status, created_at, updated_at)
    select r.id, p_company, r.name, r.unit, r.base_price_cents, r.est_cost_cents, r.status, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.service_items, coalesce(p_data -> 'service_items', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('service_items', v_n);

    insert into public.quotes (
      id, company_id, client_id, number, status, valid_until, terms, notes, discount_kind, discount_value,
      subtotal_cents, discount_cents, total_cents, sent_at, decided_at, created_at, updated_at
    )
    select r.id, p_company, r.client_id, r.number, r.status, r.valid_until, r.terms, r.notes, r.discount_kind,
           r.discount_value, r.subtotal_cents, r.discount_cents, r.total_cents, r.sent_at, r.decided_at,
           r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.quotes, coalesce(p_data -> 'quotes', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('quotes', v_n);

    insert into public.quote_items (id, company_id, quote_id, position, description, quantity_milli, unit_price_cents)
    select r.id, p_company, r.quote_id, r.position, r.description, r.quantity_milli, r.unit_price_cents
      from jsonb_populate_recordset(null::public.quote_items, coalesce(p_data -> 'quote_items', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('quote_items', v_n);

    insert into public.quote_events (id, company_id, quote_id, from_status, to_status, actor_user_id, at, confirmed, system)
    overriding system value
    select r.id, p_company, r.quote_id, r.from_status, r.to_status, r.actor_user_id, r.at, r.confirmed, r.system
      from jsonb_populate_recordset(null::public.quote_events, coalesce(p_data -> 'quote_events', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('quote_events', v_n);

    insert into public.orders (id, company_id, quote_id, client_id, status, total_cents, approved_at, canceled_at)
    select r.id, p_company, r.quote_id, r.client_id, r.status, r.total_cents, r.approved_at, r.canceled_at
      from jsonb_populate_recordset(null::public.orders, coalesce(p_data -> 'orders', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('orders', v_n);

    insert into public.receivables (id, company_id, order_id, number, kind, due_date, amount_cents, canceled_at, created_at)
    select r.id, p_company, r.order_id, r.number, r.kind, r.due_date, r.amount_cents, r.canceled_at, r.created_at
      from jsonb_populate_recordset(null::public.receivables, coalesce(p_data -> 'receivables', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('receivables', v_n);

    insert into public.payments (
      id, seq, company_id, receivable_id, kind, amount_cents, paid_on, method, note, reverses_payment_id, created_by, created_at
    )
    overriding system value
    select r.id, r.seq, p_company, r.receivable_id, r.kind, r.amount_cents, r.paid_on, r.method, r.note,
           r.reverses_payment_id, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.payments, coalesce(p_data -> 'payments', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('payments', v_n);

    insert into public.collection_events (id, seq, company_id, receivable_id, state, scheduled_for, note, created_by, created_at)
    overriding system value
    select r.id, r.seq, p_company, r.receivable_id, r.state, r.scheduled_for, r.note, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.collection_events, coalesce(p_data -> 'collection_events', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('collection_events', v_n);

    insert into public.expenses (id, company_id, description, category, amount_cents, due_date, notes, canceled_at, created_at, updated_at)
    select r.id, p_company, r.description, r.category, r.amount_cents, r.due_date, r.notes, r.canceled_at, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.expenses, coalesce(p_data -> 'expenses', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('expenses', v_n);

    insert into public.expense_payments (
      id, seq, company_id, expense_id, kind, amount_cents, paid_on, method, note, reverses_payment_id, created_by, created_at
    )
    overriding system value
    select r.id, r.seq, p_company, r.expense_id, r.kind, r.amount_cents, r.paid_on, r.method, r.note,
           r.reverses_payment_id, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.expense_payments, coalesce(p_data -> 'expense_payments', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('expense_payments', v_n);

    insert into public.ledger_entries (id, company_id, payment_id, expense_payment_id, direction, amount_cents, occurred_on, created_at)
    select r.id, p_company, r.payment_id, r.expense_payment_id, r.direction, r.amount_cents, r.occurred_on, r.created_at
      from jsonb_populate_recordset(null::public.ledger_entries, coalesce(p_data -> 'ledger_entries', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('ledger_entries', v_n);

    insert into public.tasks (id, company_id, title, due_date, client_id, notes, done_at, created_at, updated_at)
    select r.id, p_company, r.title, r.due_date, r.client_id, r.notes, r.done_at, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.tasks, coalesce(p_data -> 'tasks', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('tasks', v_n);

    insert into public.alert_states (company_id, alert_key, state, until, reason, updated_at)
    select p_company, r.alert_key, r.state, r.until, r.reason, r.updated_at
      from jsonb_populate_recordset(null::public.alert_states, coalesce(p_data -> 'alert_states', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('alert_states', v_n);

    insert into public.saved_answers (id, company_id, question, answer, source_kind, source_label, verified_on, review_on, created_at, updated_at)
    select r.id, p_company, r.question, r.answer, r.source_kind, r.source_label, r.verified_on, r.review_on, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.saved_answers, coalesce(p_data -> 'saved_answers', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('saved_answers', v_n);

    -- Os contadores seguem de onde a cópia parou (próximo número de orçamento, próximos ids das tabelas com sequência).
    update public.companies set
      quote_seq = greatest(
        quote_seq,
        coalesce((select max(q.number) from public.quotes q where q.company_id = p_company), 0),
        case when (v_empresa ->> 'quote_seq') ~ '^[0-9]{1,9}$' then (v_empresa ->> 'quote_seq')::integer else 0 end
      ),
      opening_balance_cents = case when (v_empresa ->> 'opening_balance_cents') ~ '^-?[0-9]{1,13}$'
                                   then (v_empresa ->> 'opening_balance_cents')::bigint end,
      opening_balance_on = case when (v_empresa ->> 'opening_balance_cents') ~ '^-?[0-9]{1,13}$'
                                then (v_empresa ->> 'opening_balance_on')::date end
    where id = p_company;
    perform setval(pg_get_serial_sequence('public.quote_events', 'id'), greatest((select coalesce(max(id), 0) from public.quote_events), 1),
                   (select count(*) > 0 from public.quote_events));
    perform setval(pg_get_serial_sequence('public.payments', 'seq'), greatest((select coalesce(max(seq), 0) from public.payments), 1),
                   (select count(*) > 0 from public.payments));
    perform setval(pg_get_serial_sequence('public.expense_payments', 'seq'), greatest((select coalesce(max(seq), 0) from public.expense_payments), 1),
                   (select count(*) > 0 from public.expense_payments));
    perform setval(pg_get_serial_sequence('public.collection_events', 'seq'), greatest((select coalesce(max(seq), 0) from public.collection_events), 1),
                   (select count(*) > 0 from public.collection_events));
  exception
    when unique_violation then
      -- Mesmo id já existe (neste aparelho ou em outra empresa): a cópia não pode entrar. Sem detalhes do que existe.
      raise exception 'import_conflict' using errcode = 'P0001';
    when foreign_key_violation then
      raise exception 'import_invalid' using errcode = 'P0001', detail = 'references';
    when check_violation or not_null_violation or invalid_text_representation or datetime_field_overflow
         or invalid_datetime_format or numeric_value_out_of_range or invalid_parameter_value or string_data_right_truncation then
      raise exception 'import_invalid' using errcode = 'P0001', detail = 'values';
  end;

  -- ---------- O dinheiro tem de fechar (as mesmas regras que as funções do servidor garantem ao gravar) ----------

  -- Orçamento: subtotal = soma das linhas; desconto e total conforme o tipo de desconto.
  if exists (
    select 1
      from public.quotes q
      left join lateral (select coalesce(sum(i.line_total_cents), 0) as soma from public.quote_items i where i.quote_id = q.id) s on true
     where q.company_id = p_company
       and (q.subtotal_cents <> s.soma
            or q.total_cents <> q.subtotal_cents - q.discount_cents
            or q.discount_cents <> case q.discount_kind
                                     when 'none' then 0
                                     when 'percent' then public.money_percent(q.subtotal_cents, q.discount_value::integer)
                                     else q.discount_value end)
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'quotes';
  end if;

  -- Orçamento aprovado tem serviço; serviço só existe para orçamento aprovado ou cancelado depois de aprovado.
  if exists (select 1 from public.quotes q where q.company_id = p_company and q.status = 'aprovado'
              and not exists (select 1 from public.orders o where o.quote_id = q.id))
     or exists (select 1 from public.orders o join public.quotes q on q.id = o.quote_id
                 where o.company_id = p_company and q.status not in ('aprovado', 'cancelado')) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'orders';
  end if;

  -- Serviço: as parcelas somam o total.
  if exists (
    select 1 from public.orders o
     where o.company_id = p_company
       and o.total_cents <> (select coalesce(sum(r.amount_cents), 0) from public.receivables r where r.order_id = o.id)
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'receivables';
  end if;

  -- Parcela: o pago líquido nunca passa do valor nem fica negativo; e o estorno tem a mesma data ou depois do pagamento.
  if exists (
    select 1 from public.receivables r
     where r.company_id = p_company
       and (select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
              from public.payments p where p.receivable_id = r.id) not between 0 and r.amount_cents
  ) or exists (
    select 1 from public.payments e join public.payments o on o.id = e.reverses_payment_id
     where e.company_id = p_company and e.paid_on < o.paid_on
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'payments';
  end if;

  -- Despesa: paga por inteiro ou não paga (líquido de estornos).
  if exists (
    select 1 from public.expenses e
     where e.company_id = p_company
       and (select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
              from public.expense_payments p where p.expense_id = e.id) not in (0, e.amount_cents)
  ) or exists (
    select 1 from public.expense_payments e join public.expense_payments o on o.id = e.reverses_payment_id
     where e.company_id = p_company and e.paid_on < o.paid_on
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'expense_payments';
  end if;

  -- Caixa: cada pagamento (de cliente ou de despesa) tem exatamente um lançamento.
  if exists (select 1 from public.payments p where p.company_id = p_company
              and not exists (select 1 from public.ledger_entries l where l.payment_id = p.id))
     or exists (select 1 from public.expense_payments p where p.company_id = p_company
                 and not exists (select 1 from public.ledger_entries l where l.expense_payment_id = p.id)) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'ledger_entries';
  end if;

  perform public.audit_log(p_company, 'company.import', 'company', p_company, v_counts);
  return v_counts;
end
$$;

-- ---------- "Tem dados?" e contagem para o diagnóstico (agora com o histórico de cobrança) ----------

create or replace function public.has_business_data() returns boolean
language sql stable set search_path = ''
as $$
  select exists (select 1 from public.clients) or exists (select 1 from public.service_items)
      or exists (select 1 from public.quotes) or exists (select 1 from public.expenses)
      or exists (select 1 from public.tasks) or exists (select 1 from public.alert_states)
      or exists (select 1 from public.ledger_entries) or exists (select 1 from public.saved_answers)
$$;

-- Quantos registros há em cada tabela de negócio (para o diagnóstico: só números, nunca conteúdo).
create or replace function public.table_counts() returns jsonb
language sql stable set search_path = ''
as $$
  select jsonb_build_array(
    jsonb_build_object('tabela', 'clients', 'n', (select count(*)::int from public.clients)),
    jsonb_build_object('tabela', 'service_items', 'n', (select count(*)::int from public.service_items)),
    jsonb_build_object('tabela', 'quotes', 'n', (select count(*)::int from public.quotes)),
    jsonb_build_object('tabela', 'receivables', 'n', (select count(*)::int from public.receivables)),
    jsonb_build_object('tabela', 'payments', 'n', (select count(*)::int from public.payments)),
    jsonb_build_object('tabela', 'collection_events', 'n', (select count(*)::int from public.collection_events)),
    jsonb_build_object('tabela', 'expenses', 'n', (select count(*)::int from public.expenses)),
    jsonb_build_object('tabela', 'expense_payments', 'n', (select count(*)::int from public.expense_payments)),
    jsonb_build_object('tabela', 'ledger_entries', 'n', (select count(*)::int from public.ledger_entries)),
    jsonb_build_object('tabela', 'tasks', 'n', (select count(*)::int from public.tasks)),
    jsonb_build_object('tabela', 'alert_states', 'n', (select count(*)::int from public.alert_states)),
    jsonb_build_object('tabela', 'saved_answers', 'n', (select count(*)::int from public.saved_answers))
  )
$$;

-- ---------- Permissões ----------

revoke all on function public.set_collection_state(uuid, text, date, text) from public, anon;
revoke all on function public.list_collection_events(uuid) from public, anon;
revoke all on function public.list_collection_states() from public, anon;
grant execute on function public.set_collection_state(uuid, text, date, text) to authenticated;
grant execute on function public.list_collection_events(uuid) to authenticated;
grant execute on function public.list_collection_states() to authenticated;
`,oe=`-- NAP · 0016 · Receita avulsa (Fase U3.3, Atualização 1.1).
-- Entrada de dinheiro SEM orçamento (venda no balcão, serviço rápido), com categoria e data, que entra no caixa e nos
-- relatórios. Regras de desenho:
--   * é um LANÇAMENTO PRÓPRIO: uma terceira origem do caixa (ao lado do pagamento de cliente e do pagamento de despesa),
--     com a categoria venda, serviço avulso ou outros e o cliente opcional;
--   * imutável como os pagamentos: errou, estorna (um registro novo, do mesmo valor e da mesma categoria, uma vez só);
--   * ANTI DUPLA CONTAGEM: o dinheiro que já veio de uma parcela não pode ser lançado de novo à mão sem alerta.
--     \`list_income_conflicts\` acha pagamentos recebidos, parcelas em aberto e receitas iguais que PARECEM ser a mesma
--     entrada; \`save_income\` recusa ('possible_duplicate') até a pessoa confirmar que é outra entrada;
--   * a auditoria guarda a categoria e o valor, nunca a descrição nem a observação;
--   * exportação formato 7 e restauração dos formatos 2 a 7.

create table public.income_entries (
  id uuid primary key default gen_random_uuid(),
  seq bigint generated always as identity,
  company_id uuid not null references public.companies (id) on delete cascade,
  kind text not null constraint income_entries_kind_check check (kind in ('receita', 'estorno')),
  category text not null constraint income_entries_category_check check (category in ('venda', 'servico_avulso', 'outros')),
  description text not null constraint income_entries_description_check check (char_length(btrim(description)) between 1 and 200),
  amount_cents bigint not null constraint income_entries_amount_check check (amount_cents > 0 and amount_cents <= 1000000000000),
  received_on date not null constraint income_entries_date_check check (received_on between date '2000-01-01' and date '2100-12-31'),
  client_id uuid,
  note text constraint income_entries_note_check check (note is null or char_length(note) <= 500),
  reverses_id uuid,
  reverses_kind text generated always as (case when reverses_id is not null then 'receita' end) stored,
  created_by uuid,
  created_at timestamptz not null default now(),
  constraint income_entries_reversal_check check ((kind = 'estorno') = (reverses_id is not null)),
  constraint income_entries_one_reversal unique (reverses_id),
  unique (company_id, id),
  unique (id, kind, amount_cents, received_on),
  unique (id, amount_cents, kind, category),
  foreign key (company_id, client_id) references public.clients (company_id, id),
  -- O estorno é do mesmo valor e da mesma categoria da receita que ele desfaz.
  foreign key (reverses_id, amount_cents, reverses_kind, category)
    references public.income_entries (id, amount_cents, kind, category)
);

create index income_entries_company_date_idx on public.income_entries (company_id, received_on);

create trigger income_entries_no_change before update or delete on public.income_entries
for each row execute function public.immutable_row_guard();

select public.apply_company_rls('public.income_entries', false);

-- ---------- O caixa ganha a terceira origem ----------

alter table public.ledger_entries add column income_entry_id uuid;
alter table public.ledger_entries add column income_entry_kind text
  generated always as (case direction when 'entrada' then 'receita' else 'estorno' end) stored;
alter table public.ledger_entries add constraint ledger_entries_one_per_income unique (income_entry_id);
alter table public.ledger_entries drop constraint ledger_entries_source_check;
-- Cada lançamento tem UMA origem: pagamento de cliente, pagamento de despesa ou receita avulsa.
alter table public.ledger_entries add constraint ledger_entries_source_check
  check (((payment_id is not null)::int + (expense_payment_id is not null)::int + (income_entry_id is not null)::int) = 1);
alter table public.ledger_entries add constraint ledger_entries_income_company_fkey
  foreign key (company_id, income_entry_id) references public.income_entries (company_id, id);
alter table public.ledger_entries add constraint ledger_entries_income_mirror_fkey
  foreign key (income_entry_id, income_entry_kind, amount_cents, occurred_on)
  references public.income_entries (id, kind, amount_cents, received_on);

-- ---------- Anti dupla contagem ----------

-- O que PARECE ser a mesma entrada que a pessoa vai lançar (no máximo 5, para a tela mostrar):
--   * 'recebimento': pagamento de cliente, não estornado, do mesmo valor, em até 3 dias da data;
--   * 'parcela': parcela em aberto cujo saldo é igual ao valor e que vence até 30 dias depois da data (ou já venceu);
--   * 'receita': outra receita avulsa, não estornada, do mesmo valor, na mesma data e do mesmo cliente (ou sem cliente).
-- Com cliente informado, só conta o que é do mesmo cliente. É um AVISO: quem decide é a pessoa.
-- SECURITY INVOKER; a empresa vem do usuário logado, então vale tanto para a tela quanto para \`save_income\`.
create function public.list_income_conflicts(
  p_amount_cents bigint,
  p_received_on date default null,
  p_client_id uuid default null
) returns jsonb
language sql stable set search_path = ''
as $$
  with eu as (
    select m.company_id from public.company_members m where m.user_id = (select auth.uid()) limit 1
  ), dia as (
    select coalesce(p_received_on, public.today_br()) as d
  ), achados as (
    select 1 as ordem, jsonb_build_object(
             'kind', 'recebimento', 'on', p.paid_on::text, 'amount_cents', p.amount_cents,
             'client_name', c.name, 'quote_id', q.id, 'quote_number', q.number) as item, p.paid_on as quando
      from public.payments p
      join public.receivables r on r.id = p.receivable_id
      join public.orders o on o.id = r.order_id
      join public.quotes q on q.id = o.quote_id
      join public.clients c on c.id = o.client_id
     where p.company_id = (select company_id from eu)
       and p.kind = 'pagamento'
       and p.amount_cents = p_amount_cents
       and p.paid_on between (select d from dia) - 3 and (select d from dia) + 3
       and not exists (select 1 from public.payments x where x.reverses_payment_id = p.id)
       and (p_client_id is null or o.client_id = p_client_id)
    union all
    select 2, jsonb_build_object(
             'kind', 'parcela', 'on', r.due_date::text, 'amount_cents', p_amount_cents,
             'client_name', c.name, 'quote_id', q.id, 'quote_number', q.number), r.due_date
      from public.receivables r
      join public.orders o on o.id = r.order_id
      join public.quotes q on q.id = o.quote_id
      join public.clients c on c.id = o.client_id
     where r.company_id = (select company_id from eu)
       and r.canceled_at is null
       and r.due_date <= (select d from dia) + 30
       and r.amount_cents - coalesce((select sum(case x.kind when 'pagamento' then x.amount_cents else -x.amount_cents end)
                                        from public.payments x where x.receivable_id = r.id), 0) = p_amount_cents
       and (p_client_id is null or o.client_id = p_client_id)
    union all
    select 3, jsonb_build_object(
             'kind', 'receita', 'on', i.received_on::text, 'amount_cents', i.amount_cents,
             'description', i.description, 'client_name', c.name), i.received_on
      from public.income_entries i
      left join public.clients c on c.id = i.client_id and c.company_id = i.company_id
     where i.company_id = (select company_id from eu)
       and i.kind = 'receita'
       and i.amount_cents = p_amount_cents
       and i.received_on = (select d from dia)
       and i.client_id is not distinct from p_client_id
       and not exists (select 1 from public.income_entries x where x.reverses_id = i.id)
  )
  select coalesce(jsonb_agg(a.item order by a.ordem, a.quando desc), '[]'::jsonb)
    from (select * from achados order by ordem, quando desc limit 5) a
$$;

-- ---------- Gravar ----------

-- Registra uma receita avulsa e o lançamento de entrada no caixa. Se o valor PARECE já estar registrado (ver acima),
-- recusa com 'possible_duplicate' até que a pessoa confirme (p_confirmed = true) que é outra entrada.
create function public.save_income(
  p_description text,
  p_category text,
  p_amount_cents bigint,
  p_received_on date default null,
  p_client_id uuid default null,
  p_note text default null,
  p_confirmed boolean default false
) returns uuid
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_desc text := btrim(p_description);
  v_note text := nullif(btrim(p_note), '');
  v_date date;
  v_status text;
  v_id uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  select m.company_id into v_company from public.company_members m where m.user_id = v_user limit 1;
  if v_company is null then
    raise exception 'not_member' using errcode = '42501';
  end if;

  if v_desc is null or char_length(v_desc) not between 1 and 200 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'description';
  end if;
  if p_category is null or p_category not in ('venda', 'servico_avulso', 'outros') then
    raise exception 'invalid_input' using errcode = '22023', detail = 'category';
  end if;
  if p_amount_cents is null or p_amount_cents <= 0 or p_amount_cents > 1000000000000 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'amount_cents';
  end if;
  v_date := coalesce(p_received_on, public.today_br());
  if v_date > public.today_br() or v_date < date '2000-01-01' then
    raise exception 'invalid_input' using errcode = '22023', detail = 'received_on';
  end if;
  if v_note is not null and char_length(v_note) > 500 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'note';
  end if;

  if p_client_id is not null then
    select c.status into v_status from public.clients c where c.id = p_client_id and c.company_id = v_company;
    if v_status is null then
      raise exception 'client_not_found' using errcode = 'P0002';
    end if;
    if v_status <> 'ativo' then
      raise exception 'client_archived' using errcode = 'P0001';
    end if;
  end if;

  -- Anti dupla contagem: só segue se não parece repetido, ou se a pessoa confirmou.
  if not coalesce(p_confirmed, false)
     and jsonb_array_length(public.list_income_conflicts(p_amount_cents, v_date, p_client_id)) > 0 then
    raise exception 'possible_duplicate' using errcode = 'P0001';
  end if;

  insert into public.income_entries (company_id, kind, category, description, amount_cents, received_on, client_id, note, created_by)
    values (v_company, 'receita', p_category, v_desc, p_amount_cents, v_date, p_client_id, v_note, v_user)
    returning id into v_id;
  insert into public.ledger_entries (company_id, income_entry_id, direction, amount_cents, occurred_on)
    values (v_company, v_id, 'entrada', p_amount_cents, v_date);
  -- Só o fato: a categoria e o valor, nunca a descrição nem a observação.
  perform public.audit_log(v_company, 'income.create', 'income', v_id,
    jsonb_build_object('category', p_category, 'amount_cents', p_amount_cents));
  return v_id;
end
$$;

-- Estorna uma receita avulsa: novo registro que a desfaz e um lançamento de saída. Uma vez só.
create function public.reverse_income(
  p_income_id uuid,
  p_received_on date default null,
  p_note text default null
) returns uuid
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_kind text;
  v_category text;
  v_desc text;
  v_amount bigint;
  v_client uuid;
  v_orig_date date;
  v_date date;
  v_note text := nullif(btrim(p_note), '');
  v_reversal uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  select i.company_id, i.kind, i.category, i.description, i.amount_cents, i.client_id, i.received_on
    into v_company, v_kind, v_category, v_desc, v_amount, v_client, v_orig_date
    from public.income_entries i where i.id = p_income_id for update;
  if v_company is null or not public.is_member(v_company) then
    raise exception 'income_not_found' using errcode = 'P0002';
  end if;
  if v_kind <> 'receita' then
    raise exception 'not_an_income' using errcode = 'P0001';
  end if;
  if exists (select 1 from public.income_entries x where x.reverses_id = p_income_id) then
    raise exception 'income_already_reversed' using errcode = 'P0001';
  end if;

  v_date := coalesce(p_received_on, public.today_br());
  if v_date > public.today_br() or v_date < v_orig_date then
    raise exception 'invalid_input' using errcode = '22023', detail = 'received_on';
  end if;
  if v_note is not null and char_length(v_note) > 500 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'note';
  end if;

  insert into public.income_entries (
    company_id, kind, category, description, amount_cents, received_on, client_id, note, reverses_id, created_by
  ) values (v_company, 'estorno', v_category, v_desc, v_amount, v_date, v_client, v_note, p_income_id, v_user)
  returning id into v_reversal;
  insert into public.ledger_entries (company_id, income_entry_id, direction, amount_cents, occurred_on)
    values (v_company, v_reversal, 'saida', v_amount, v_date);
  perform public.audit_log(v_company, 'income.reverse', 'income', p_income_id,
    jsonb_build_object('reversal_id', v_reversal, 'amount_cents', v_amount));
  return v_reversal;
end
$$;

-- ---------- Ler (SECURITY INVOKER: a RLS decide o que existe) ----------

-- As receitas avulsas (sem os estornos como linhas à parte): da mais nova para a mais antiga, cada uma com o estorno,
-- se houver.
create function public.list_incomes() returns jsonb
language sql stable set search_path = ''
as $$
  select coalesce(jsonb_agg(to_jsonb(t) - '_seq' order by t.received_on desc, t._seq desc), '[]'::jsonb)
    from (
      select i.id, i.description, i.category, i.amount_cents, i.received_on::text as received_on, i.client_id,
             c.name as client_name, i.note, public.iso_utc(i.created_at) as created_at, i.seq as _seq,
             (rv.id is not null) as reversed,
             case when rv.id is not null then jsonb_build_object(
               'id', rv.id, 'received_on', rv.received_on::text, 'note', rv.note, 'created_at', public.iso_utc(rv.created_at)) end as reversal
        from public.income_entries i
        left join public.clients c on c.id = i.client_id and c.company_id = i.company_id
        left join public.income_entries rv on rv.reverses_id = i.id
       where i.kind = 'receita'
    ) t
$$;

-- ---------- O caixa com a terceira origem ----------

create or replace function public.list_ledger() returns jsonb
language sql stable set search_path = ''
as $$
  select coalesce(jsonb_agg(to_jsonb(t) - '_criado' order by t.occurred_on desc, t._criado desc, t.id desc), '[]'::jsonb)
    from (
      select l.id, l.direction,
             case when l.payment_id is not null then 'recebimento'
                  when l.expense_payment_id is not null then 'despesa'
                  else 'receita' end as source,
             -- O registro de origem é o pagamento (ou a receita avulsa) ou o estorno dele.
             coalesce(pay.kind, ep.kind, case inc.kind when 'receita' then 'pagamento' else inc.kind end) as kind,
             l.amount_cents, l.occurred_on::text as occurred_on, l.created_at as _criado,
             qu.id as quote_id, qu.number as quote_number, coalesce(c.name, ic.name) as client_name,
             r.kind as receivable_kind,
             (select count(*)::int from public.receivables x
               where x.order_id = r.order_id and x.kind = r.kind and x.number <= r.number) as receivable_index,
             (select count(*)::int from public.receivables x
               where x.order_id = r.order_id and x.kind = r.kind) as receivable_total,
             e.id as expense_id, e.description as expense_description, e.category,
             inc.id as income_id, inc.description as income_description, inc.category as income_category
        from public.ledger_entries l
        left join public.payments pay on pay.id = l.payment_id
        left join public.receivables r on r.id = pay.receivable_id
        left join public.orders o on o.id = r.order_id
        left join public.quotes qu on qu.id = o.quote_id
        left join public.clients c on c.id = o.client_id
        left join public.expense_payments ep on ep.id = l.expense_payment_id
        left join public.expenses e on e.id = ep.expense_id
        left join public.income_entries inc on inc.id = l.income_entry_id
        left join public.clients ic on ic.id = inc.client_id and ic.company_id = inc.company_id
    ) t
$$;

-- ---------- Exportação (formato 7, com as receitas avulsas) ----------

create or replace function public.export_company_data(p_company uuid) returns jsonb
language plpgsql security definer set search_path = ''
as $$
begin
  if not public.is_member(p_company) then
    raise exception 'not_member' using errcode = '42501';
  end if;

  perform public.audit_log(p_company, 'company.export', 'company', p_company);

  return jsonb_build_object(
    'format', 7,
    'exported_at', now(),
    'company', (select to_jsonb(c) from public.companies c where c.id = p_company),
    'members', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.user_id)
         from public.company_members t where t.company_id = p_company), '[]'::jsonb),
    'clients', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.clients t where t.company_id = p_company), '[]'::jsonb),
    'service_items', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.service_items t where t.company_id = p_company), '[]'::jsonb),
    'quotes', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.number)
         from public.quotes t where t.company_id = p_company), '[]'::jsonb),
    'quote_items', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.quote_id, t.position)
         from public.quote_items t where t.company_id = p_company), '[]'::jsonb),
    'quote_events', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.id)
         from public.quote_events t where t.company_id = p_company), '[]'::jsonb),
    'orders', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.approved_at, t.id)
         from public.orders t where t.company_id = p_company), '[]'::jsonb),
    'receivables', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.order_id, t.number)
         from public.receivables t where t.company_id = p_company), '[]'::jsonb),
    'payments', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.payments t where t.company_id = p_company), '[]'::jsonb),
    'collection_events', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.collection_events t where t.company_id = p_company), '[]'::jsonb),
    'expenses', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.created_at, t.id)
         from public.expenses t where t.company_id = p_company), '[]'::jsonb),
    'expense_payments', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.expense_payments t where t.company_id = p_company), '[]'::jsonb),
    'income_entries', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.income_entries t where t.company_id = p_company), '[]'::jsonb),
    'ledger_entries', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.occurred_on, t.created_at, t.id)
         from public.ledger_entries t where t.company_id = p_company), '[]'::jsonb),
    'tasks', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.created_at, t.id)
         from public.tasks t where t.company_id = p_company), '[]'::jsonb),
    'alert_states', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.alert_key)
         from public.alert_states t where t.company_id = p_company), '[]'::jsonb),
    'saved_answers', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.saved_answers t where t.company_id = p_company), '[]'::jsonb),
    'audit_events', coalesce(
      (select jsonb_agg(to_jsonb(a) order by a.at)
         from (select e.* from public.audit_events e
                where e.company_id = p_company order by e.at desc limit 5000) a), '[]'::jsonb)
  );
end
$$;

-- ---------- Restauração (aceita cópias dos formatos 2 a 7) ----------

create or replace function public.import_company_data(p_company uuid, p_data jsonb) returns jsonb
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_format integer;
  v_chave text;
  v_counts jsonb := '{}'::jsonb;
  v_n bigint;
  v_empresa jsonb;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  if not public.is_owner(p_company) then
    raise exception 'not_owner' using errcode = '42501';
  end if;

  -- Formato do arquivo: um objeto de uma versão que sabemos ler (2 a 7); as listas, quando existem, são listas.
  if p_data is null or jsonb_typeof(p_data) <> 'object' then
    raise exception 'import_format' using errcode = 'P0001';
  end if;
  if (p_data ->> 'format') is null or (p_data ->> 'format') !~ '^[0-9]{1,3}$' then
    raise exception 'import_format' using errcode = 'P0001';
  end if;
  v_format := (p_data ->> 'format')::integer;
  if v_format < 2 or v_format > 7 then
    raise exception 'import_format' using errcode = 'P0001';
  end if;
  foreach v_chave in array array[
    'clients', 'service_items', 'quotes', 'quote_items', 'quote_events', 'orders', 'receivables', 'payments',
    'collection_events', 'expenses', 'expense_payments', 'income_entries', 'ledger_entries', 'tasks', 'alert_states',
    'saved_answers'
  ] loop
    if p_data ? v_chave and jsonb_typeof(p_data -> v_chave) <> 'array' then
      raise exception 'import_format' using errcode = 'P0001';
    end if;
  end loop;
  v_empresa := coalesce(p_data -> 'company', '{}'::jsonb);
  if jsonb_typeof(v_empresa) <> 'object' then
    raise exception 'import_format' using errcode = 'P0001';
  end if;

  -- Só em empresa vazia.
  if exists (select 1 from public.clients where company_id = p_company)
     or exists (select 1 from public.service_items where company_id = p_company)
     or exists (select 1 from public.quotes where company_id = p_company)
     or exists (select 1 from public.expenses where company_id = p_company)
     or exists (select 1 from public.tasks where company_id = p_company)
     or exists (select 1 from public.alert_states where company_id = p_company)
     or exists (select 1 from public.saved_answers where company_id = p_company)
     or exists (select 1 from public.income_entries where company_id = p_company)
     or exists (select 1 from public.ledger_entries where company_id = p_company) then
    raise exception 'company_not_empty' using errcode = 'P0001';
  end if;

  begin
    insert into public.clients (id, company_id, name, email, phone, notes, status, created_at, updated_at)
    select r.id, p_company, r.name, r.email, r.phone, r.notes, r.status, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.clients, coalesce(p_data -> 'clients', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('clients', v_n);

    insert into public.service_items (id, company_id, name, unit, base_price_cents, est_cost_cents, status, created_at, updated_at)
    select r.id, p_company, r.name, r.unit, r.base_price_cents, r.est_cost_cents, r.status, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.service_items, coalesce(p_data -> 'service_items', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('service_items', v_n);

    insert into public.quotes (
      id, company_id, client_id, number, status, valid_until, terms, notes, discount_kind, discount_value,
      subtotal_cents, discount_cents, total_cents, sent_at, decided_at, created_at, updated_at
    )
    select r.id, p_company, r.client_id, r.number, r.status, r.valid_until, r.terms, r.notes, r.discount_kind,
           r.discount_value, r.subtotal_cents, r.discount_cents, r.total_cents, r.sent_at, r.decided_at,
           r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.quotes, coalesce(p_data -> 'quotes', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('quotes', v_n);

    insert into public.quote_items (id, company_id, quote_id, position, description, quantity_milli, unit_price_cents)
    select r.id, p_company, r.quote_id, r.position, r.description, r.quantity_milli, r.unit_price_cents
      from jsonb_populate_recordset(null::public.quote_items, coalesce(p_data -> 'quote_items', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('quote_items', v_n);

    insert into public.quote_events (id, company_id, quote_id, from_status, to_status, actor_user_id, at, confirmed, system)
    overriding system value
    select r.id, p_company, r.quote_id, r.from_status, r.to_status, r.actor_user_id, r.at, r.confirmed, r.system
      from jsonb_populate_recordset(null::public.quote_events, coalesce(p_data -> 'quote_events', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('quote_events', v_n);

    insert into public.orders (id, company_id, quote_id, client_id, status, total_cents, approved_at, canceled_at)
    select r.id, p_company, r.quote_id, r.client_id, r.status, r.total_cents, r.approved_at, r.canceled_at
      from jsonb_populate_recordset(null::public.orders, coalesce(p_data -> 'orders', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('orders', v_n);

    insert into public.receivables (id, company_id, order_id, number, kind, due_date, amount_cents, canceled_at, created_at)
    select r.id, p_company, r.order_id, r.number, r.kind, r.due_date, r.amount_cents, r.canceled_at, r.created_at
      from jsonb_populate_recordset(null::public.receivables, coalesce(p_data -> 'receivables', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('receivables', v_n);

    insert into public.payments (
      id, seq, company_id, receivable_id, kind, amount_cents, paid_on, method, note, reverses_payment_id, created_by, created_at
    )
    overriding system value
    select r.id, r.seq, p_company, r.receivable_id, r.kind, r.amount_cents, r.paid_on, r.method, r.note,
           r.reverses_payment_id, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.payments, coalesce(p_data -> 'payments', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('payments', v_n);

    insert into public.collection_events (id, seq, company_id, receivable_id, state, scheduled_for, note, created_by, created_at)
    overriding system value
    select r.id, r.seq, p_company, r.receivable_id, r.state, r.scheduled_for, r.note, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.collection_events, coalesce(p_data -> 'collection_events', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('collection_events', v_n);

    insert into public.expenses (id, company_id, description, category, amount_cents, due_date, notes, canceled_at, created_at, updated_at)
    select r.id, p_company, r.description, r.category, r.amount_cents, r.due_date, r.notes, r.canceled_at, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.expenses, coalesce(p_data -> 'expenses', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('expenses', v_n);

    insert into public.expense_payments (
      id, seq, company_id, expense_id, kind, amount_cents, paid_on, method, note, reverses_payment_id, created_by, created_at
    )
    overriding system value
    select r.id, r.seq, p_company, r.expense_id, r.kind, r.amount_cents, r.paid_on, r.method, r.note,
           r.reverses_payment_id, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.expense_payments, coalesce(p_data -> 'expense_payments', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('expense_payments', v_n);

    insert into public.income_entries (
      id, seq, company_id, kind, category, description, amount_cents, received_on, client_id, note, reverses_id,
      created_by, created_at
    )
    overriding system value
    select r.id, r.seq, p_company, r.kind, r.category, r.description, r.amount_cents, r.received_on, r.client_id, r.note,
           r.reverses_id, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.income_entries, coalesce(p_data -> 'income_entries', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('income_entries', v_n);

    insert into public.ledger_entries (id, company_id, payment_id, expense_payment_id, income_entry_id, direction, amount_cents, occurred_on, created_at)
    select r.id, p_company, r.payment_id, r.expense_payment_id, r.income_entry_id, r.direction, r.amount_cents, r.occurred_on, r.created_at
      from jsonb_populate_recordset(null::public.ledger_entries, coalesce(p_data -> 'ledger_entries', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('ledger_entries', v_n);

    insert into public.tasks (id, company_id, title, due_date, client_id, notes, done_at, created_at, updated_at)
    select r.id, p_company, r.title, r.due_date, r.client_id, r.notes, r.done_at, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.tasks, coalesce(p_data -> 'tasks', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('tasks', v_n);

    insert into public.alert_states (company_id, alert_key, state, until, reason, updated_at)
    select p_company, r.alert_key, r.state, r.until, r.reason, r.updated_at
      from jsonb_populate_recordset(null::public.alert_states, coalesce(p_data -> 'alert_states', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('alert_states', v_n);

    insert into public.saved_answers (id, company_id, question, answer, source_kind, source_label, verified_on, review_on, created_at, updated_at)
    select r.id, p_company, r.question, r.answer, r.source_kind, r.source_label, r.verified_on, r.review_on, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.saved_answers, coalesce(p_data -> 'saved_answers', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('saved_answers', v_n);

    -- Os contadores seguem de onde a cópia parou (próximo número de orçamento, próximos ids das tabelas com sequência).
    update public.companies set
      quote_seq = greatest(
        quote_seq,
        coalesce((select max(q.number) from public.quotes q where q.company_id = p_company), 0),
        case when (v_empresa ->> 'quote_seq') ~ '^[0-9]{1,9}$' then (v_empresa ->> 'quote_seq')::integer else 0 end
      ),
      opening_balance_cents = case when (v_empresa ->> 'opening_balance_cents') ~ '^-?[0-9]{1,13}$'
                                   then (v_empresa ->> 'opening_balance_cents')::bigint end,
      opening_balance_on = case when (v_empresa ->> 'opening_balance_cents') ~ '^-?[0-9]{1,13}$'
                                then (v_empresa ->> 'opening_balance_on')::date end
    where id = p_company;
    perform setval(pg_get_serial_sequence('public.quote_events', 'id'), greatest((select coalesce(max(id), 0) from public.quote_events), 1),
                   (select count(*) > 0 from public.quote_events));
    perform setval(pg_get_serial_sequence('public.payments', 'seq'), greatest((select coalesce(max(seq), 0) from public.payments), 1),
                   (select count(*) > 0 from public.payments));
    perform setval(pg_get_serial_sequence('public.expense_payments', 'seq'), greatest((select coalesce(max(seq), 0) from public.expense_payments), 1),
                   (select count(*) > 0 from public.expense_payments));
    perform setval(pg_get_serial_sequence('public.collection_events', 'seq'), greatest((select coalesce(max(seq), 0) from public.collection_events), 1),
                   (select count(*) > 0 from public.collection_events));
    perform setval(pg_get_serial_sequence('public.income_entries', 'seq'), greatest((select coalesce(max(seq), 0) from public.income_entries), 1),
                   (select count(*) > 0 from public.income_entries));
  exception
    when unique_violation then
      -- Mesmo id já existe (neste aparelho ou em outra empresa): a cópia não pode entrar. Sem detalhes do que existe.
      raise exception 'import_conflict' using errcode = 'P0001';
    when foreign_key_violation then
      raise exception 'import_invalid' using errcode = 'P0001', detail = 'references';
    when check_violation or not_null_violation or invalid_text_representation or datetime_field_overflow
         or invalid_datetime_format or numeric_value_out_of_range or invalid_parameter_value or string_data_right_truncation then
      raise exception 'import_invalid' using errcode = 'P0001', detail = 'values';
  end;

  -- ---------- O dinheiro tem de fechar (as mesmas regras que as funções do servidor garantem ao gravar) ----------

  -- Orçamento: subtotal = soma das linhas; desconto e total conforme o tipo de desconto.
  if exists (
    select 1
      from public.quotes q
      left join lateral (select coalesce(sum(i.line_total_cents), 0) as soma from public.quote_items i where i.quote_id = q.id) s on true
     where q.company_id = p_company
       and (q.subtotal_cents <> s.soma
            or q.total_cents <> q.subtotal_cents - q.discount_cents
            or q.discount_cents <> case q.discount_kind
                                     when 'none' then 0
                                     when 'percent' then public.money_percent(q.subtotal_cents, q.discount_value::integer)
                                     else q.discount_value end)
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'quotes';
  end if;

  -- Orçamento aprovado tem serviço; serviço só existe para orçamento aprovado ou cancelado depois de aprovado.
  if exists (select 1 from public.quotes q where q.company_id = p_company and q.status = 'aprovado'
              and not exists (select 1 from public.orders o where o.quote_id = q.id))
     or exists (select 1 from public.orders o join public.quotes q on q.id = o.quote_id
                 where o.company_id = p_company and q.status not in ('aprovado', 'cancelado')) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'orders';
  end if;

  -- Serviço: as parcelas somam o total.
  if exists (
    select 1 from public.orders o
     where o.company_id = p_company
       and o.total_cents <> (select coalesce(sum(r.amount_cents), 0) from public.receivables r where r.order_id = o.id)
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'receivables';
  end if;

  -- Parcela: o pago líquido nunca passa do valor nem fica negativo; e o estorno tem a mesma data ou depois do pagamento.
  if exists (
    select 1 from public.receivables r
     where r.company_id = p_company
       and (select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
              from public.payments p where p.receivable_id = r.id) not between 0 and r.amount_cents
  ) or exists (
    select 1 from public.payments e join public.payments o on o.id = e.reverses_payment_id
     where e.company_id = p_company and e.paid_on < o.paid_on
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'payments';
  end if;

  -- Despesa: paga por inteiro ou não paga (líquido de estornos).
  if exists (
    select 1 from public.expenses e
     where e.company_id = p_company
       and (select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
              from public.expense_payments p where p.expense_id = e.id) not in (0, e.amount_cents)
  ) or exists (
    select 1 from public.expense_payments e join public.expense_payments o on o.id = e.reverses_payment_id
     where e.company_id = p_company and e.paid_on < o.paid_on
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'expense_payments';
  end if;

  -- Receita avulsa: o estorno tem a mesma data ou depois da receita (o valor e a categoria já são conferidos pela chave).
  if exists (
    select 1 from public.income_entries e join public.income_entries o on o.id = e.reverses_id
     where e.company_id = p_company and e.received_on < o.received_on
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'income_entries';
  end if;

  -- Caixa: cada pagamento (de cliente ou de despesa) e cada receita avulsa tem exatamente um lançamento.
  if exists (select 1 from public.payments p where p.company_id = p_company
              and not exists (select 1 from public.ledger_entries l where l.payment_id = p.id))
     or exists (select 1 from public.expense_payments p where p.company_id = p_company
                 and not exists (select 1 from public.ledger_entries l where l.expense_payment_id = p.id))
     or exists (select 1 from public.income_entries i where i.company_id = p_company
                 and not exists (select 1 from public.ledger_entries l where l.income_entry_id = i.id)) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'ledger_entries';
  end if;

  perform public.audit_log(p_company, 'company.import', 'company', p_company, v_counts);
  return v_counts;
end
$$;

-- ---------- "Tem dados?" e contagem para o diagnóstico (agora com as receitas avulsas) ----------

create or replace function public.has_business_data() returns boolean
language sql stable set search_path = ''
as $$
  select exists (select 1 from public.clients) or exists (select 1 from public.service_items)
      or exists (select 1 from public.quotes) or exists (select 1 from public.expenses)
      or exists (select 1 from public.tasks) or exists (select 1 from public.alert_states)
      or exists (select 1 from public.ledger_entries) or exists (select 1 from public.income_entries)
      or exists (select 1 from public.saved_answers)
$$;

-- Quantos registros há em cada tabela de negócio (para o diagnóstico: só números, nunca conteúdo).
create or replace function public.table_counts() returns jsonb
language sql stable set search_path = ''
as $$
  select jsonb_build_array(
    jsonb_build_object('tabela', 'clients', 'n', (select count(*)::int from public.clients)),
    jsonb_build_object('tabela', 'service_items', 'n', (select count(*)::int from public.service_items)),
    jsonb_build_object('tabela', 'quotes', 'n', (select count(*)::int from public.quotes)),
    jsonb_build_object('tabela', 'receivables', 'n', (select count(*)::int from public.receivables)),
    jsonb_build_object('tabela', 'payments', 'n', (select count(*)::int from public.payments)),
    jsonb_build_object('tabela', 'collection_events', 'n', (select count(*)::int from public.collection_events)),
    jsonb_build_object('tabela', 'expenses', 'n', (select count(*)::int from public.expenses)),
    jsonb_build_object('tabela', 'expense_payments', 'n', (select count(*)::int from public.expense_payments)),
    jsonb_build_object('tabela', 'income_entries', 'n', (select count(*)::int from public.income_entries)),
    jsonb_build_object('tabela', 'ledger_entries', 'n', (select count(*)::int from public.ledger_entries)),
    jsonb_build_object('tabela', 'tasks', 'n', (select count(*)::int from public.tasks)),
    jsonb_build_object('tabela', 'alert_states', 'n', (select count(*)::int from public.alert_states)),
    jsonb_build_object('tabela', 'saved_answers', 'n', (select count(*)::int from public.saved_answers))
  )
$$;

-- ---------- Permissões ----------

revoke all on function public.list_income_conflicts(bigint, date, uuid) from public, anon;
revoke all on function public.save_income(text, text, bigint, date, uuid, text, boolean) from public, anon;
revoke all on function public.reverse_income(uuid, date, text) from public, anon;
revoke all on function public.list_incomes() from public, anon;
grant execute on function public.list_income_conflicts(bigint, date, uuid) to authenticated;
grant execute on function public.save_income(text, text, bigint, date, uuid, text, boolean) to authenticated;
grant execute on function public.reverse_income(uuid, date, text) to authenticated;
grant execute on function public.list_incomes() to authenticated;
`,se=`-- NAP · 0017 · Metas de faturamento (ferramenta de empreendedor, plano NAP Empreendedor).
-- A pessoa define quanto quer RECEBER num mês ou num ano; a tela compara com o que o caixa já registrou. Regras de desenho:
--   * a meta é um número que a PESSOA escolhe: nenhuma função de dinheiro lê esta tabela (como as respostas guardadas),
--     então uma meta nunca muda saldo, relatório, previsão nem cobrança (um teste varre as funções para garantir);
--   * uma meta por empresa, tipo e período: gravar de novo o mesmo período ATUALIZA o valor (não cria outra);
--   * o período é guardado pelo primeiro dia (dia 1 do mês; 1º de janeiro no ano); a função aceita qualquer dia do
--     período e normaliza;
--   * a meta pode ser editada e apagada (não é registro financeiro); a auditoria guarda o fato, o tipo, o período e o
--     valor da meta, nunca texto livre (não há texto livre);
--   * o navegador só LÊ a tabela; quem grava são as funções abaixo, como nas outras;
--   * exportação formato 8 e restauração dos formatos 2 a 8.

create table public.revenue_goals (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies (id) on delete cascade,
  period_kind text not null constraint revenue_goals_kind_check check (period_kind in ('mes', 'ano')),
  -- Dia 1 do mês (mensal) ou 1º de janeiro (anual).
  period_start date not null constraint revenue_goals_period_check check (
    period_start between date '2000-01-01' and date '2100-12-01'
    and extract(day from period_start) = 1
    and (period_kind = 'mes' or extract(month from period_start) = 1)
  ),
  target_cents bigint not null constraint revenue_goals_target_check check (target_cents > 0 and target_cents <= 1000000000000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint revenue_goals_one_per_period unique (company_id, period_kind, period_start),
  unique (company_id, id)
);

create trigger revenue_goals_touch before update on public.revenue_goals
for each row execute function public.touch_updated_at();

select public.apply_company_rls('public.revenue_goals', false);

-- ---------- Gravar ----------

-- Define a meta de um mês ('mes') ou de um ano ('ano'). p_period_on é qualquer dia do período (a função usa o primeiro).
-- Se já existe meta para aquele período, troca o valor.
create function public.save_revenue_goal(
  p_kind text,
  p_period_on date,
  p_target_cents bigint
) returns uuid
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_start date;
  v_id uuid;
  v_novo boolean;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  select m.company_id into v_company from public.company_members m where m.user_id = v_user limit 1;
  if v_company is null then
    raise exception 'not_member' using errcode = '42501';
  end if;

  if p_kind is null or p_kind not in ('mes', 'ano') then
    raise exception 'invalid_input' using errcode = '22023', detail = 'period_kind';
  end if;
  if p_period_on is null or p_period_on < date '2000-01-01' or p_period_on > date '2100-12-31' then
    raise exception 'invalid_input' using errcode = '22023', detail = 'period_start';
  end if;
  if p_target_cents is null or p_target_cents <= 0 or p_target_cents > 1000000000000 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'target_cents';
  end if;
  v_start := case p_kind when 'mes' then date_trunc('month', p_period_on)::date else date_trunc('year', p_period_on)::date end;

  select g.id into v_id from public.revenue_goals g
   where g.company_id = v_company and g.period_kind = p_kind and g.period_start = v_start for update;
  v_novo := v_id is null;
  if v_novo then
    insert into public.revenue_goals (company_id, period_kind, period_start, target_cents)
      values (v_company, p_kind, v_start, p_target_cents)
      returning id into v_id;
  else
    update public.revenue_goals set target_cents = p_target_cents where id = v_id;
  end if;

  perform public.audit_log(v_company, case when v_novo then 'revenue_goal.create' else 'revenue_goal.update' end, 'revenue_goal', v_id,
    jsonb_build_object('kind', p_kind, 'period_start', v_start::text, 'target_cents', p_target_cents));
  return v_id;
end
$$;

-- Apaga uma meta (não é registro financeiro). Fica na auditoria.
create function public.delete_revenue_goal(p_id uuid) returns void
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_kind text;
  v_start date;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  select g.company_id, g.period_kind, g.period_start into v_company, v_kind, v_start
    from public.revenue_goals g where g.id = p_id for update;
  if v_company is null or not public.is_member(v_company) then
    raise exception 'revenue_goal_not_found' using errcode = 'P0002';
  end if;
  delete from public.revenue_goals where id = p_id;
  perform public.audit_log(v_company, 'revenue_goal.delete', 'revenue_goal', p_id,
    jsonb_build_object('kind', v_kind, 'period_start', v_start::text));
end
$$;

-- ---------- Ler (SECURITY INVOKER: a RLS decide o que existe, como nas outras leituras) ----------

-- As metas, da mais recente para a mais antiga (o ano antes dos meses dele).
create function public.list_revenue_goals() returns jsonb
language sql stable set search_path = ''
as $$
  select coalesce(jsonb_agg(to_jsonb(t) - '_inicio' - '_ordem' order by t._inicio desc, t._ordem, t.id), '[]'::jsonb)
    from (
      select g.id, g.period_kind, g.period_start::text as period_start, g.target_cents,
             public.iso_utc(g.created_at) as created_at, public.iso_utc(g.updated_at) as updated_at,
             g.period_start as _inicio, case g.period_kind when 'ano' then 0 else 1 end as _ordem
        from public.revenue_goals g
    ) t
$$;

-- ---------- Exportação (formato 8, com as metas) ----------

create or replace function public.export_company_data(p_company uuid) returns jsonb
language plpgsql security definer set search_path = ''
as $$
begin
  if not public.is_member(p_company) then
    raise exception 'not_member' using errcode = '42501';
  end if;

  perform public.audit_log(p_company, 'company.export', 'company', p_company);

  return jsonb_build_object(
    'format', 8,
    'exported_at', now(),
    'company', (select to_jsonb(c) from public.companies c where c.id = p_company),
    'members', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.user_id)
         from public.company_members t where t.company_id = p_company), '[]'::jsonb),
    'clients', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.clients t where t.company_id = p_company), '[]'::jsonb),
    'service_items', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.service_items t where t.company_id = p_company), '[]'::jsonb),
    'quotes', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.number)
         from public.quotes t where t.company_id = p_company), '[]'::jsonb),
    'quote_items', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.quote_id, t.position)
         from public.quote_items t where t.company_id = p_company), '[]'::jsonb),
    'quote_events', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.id)
         from public.quote_events t where t.company_id = p_company), '[]'::jsonb),
    'orders', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.approved_at, t.id)
         from public.orders t where t.company_id = p_company), '[]'::jsonb),
    'receivables', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.order_id, t.number)
         from public.receivables t where t.company_id = p_company), '[]'::jsonb),
    'payments', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.payments t where t.company_id = p_company), '[]'::jsonb),
    'collection_events', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.collection_events t where t.company_id = p_company), '[]'::jsonb),
    'expenses', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.created_at, t.id)
         from public.expenses t where t.company_id = p_company), '[]'::jsonb),
    'expense_payments', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.expense_payments t where t.company_id = p_company), '[]'::jsonb),
    'income_entries', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.income_entries t where t.company_id = p_company), '[]'::jsonb),
    'ledger_entries', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.occurred_on, t.created_at, t.id)
         from public.ledger_entries t where t.company_id = p_company), '[]'::jsonb),
    'tasks', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.created_at, t.id)
         from public.tasks t where t.company_id = p_company), '[]'::jsonb),
    'alert_states', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.alert_key)
         from public.alert_states t where t.company_id = p_company), '[]'::jsonb),
    'saved_answers', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.saved_answers t where t.company_id = p_company), '[]'::jsonb),
    'revenue_goals', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.period_start, t.period_kind desc, t.id)
         from public.revenue_goals t where t.company_id = p_company), '[]'::jsonb),
    'audit_events', coalesce(
      (select jsonb_agg(to_jsonb(a) order by a.at)
         from (select e.* from public.audit_events e
                where e.company_id = p_company order by e.at desc limit 5000) a), '[]'::jsonb)
  );
end
$$;

-- ---------- Restauração (aceita cópias dos formatos 2 a 8) ----------

create or replace function public.import_company_data(p_company uuid, p_data jsonb) returns jsonb
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_format integer;
  v_chave text;
  v_counts jsonb := '{}'::jsonb;
  v_n bigint;
  v_empresa jsonb;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  if not public.is_owner(p_company) then
    raise exception 'not_owner' using errcode = '42501';
  end if;

  -- Formato do arquivo: um objeto de uma versão que sabemos ler (2 a 8); as listas, quando existem, são listas.
  if p_data is null or jsonb_typeof(p_data) <> 'object' then
    raise exception 'import_format' using errcode = 'P0001';
  end if;
  if (p_data ->> 'format') is null or (p_data ->> 'format') !~ '^[0-9]{1,3}$' then
    raise exception 'import_format' using errcode = 'P0001';
  end if;
  v_format := (p_data ->> 'format')::integer;
  if v_format < 2 or v_format > 8 then
    raise exception 'import_format' using errcode = 'P0001';
  end if;
  foreach v_chave in array array[
    'clients', 'service_items', 'quotes', 'quote_items', 'quote_events', 'orders', 'receivables', 'payments',
    'collection_events', 'expenses', 'expense_payments', 'income_entries', 'ledger_entries', 'tasks', 'alert_states',
    'saved_answers', 'revenue_goals'
  ] loop
    if p_data ? v_chave and jsonb_typeof(p_data -> v_chave) <> 'array' then
      raise exception 'import_format' using errcode = 'P0001';
    end if;
  end loop;
  v_empresa := coalesce(p_data -> 'company', '{}'::jsonb);
  if jsonb_typeof(v_empresa) <> 'object' then
    raise exception 'import_format' using errcode = 'P0001';
  end if;

  -- Só em empresa vazia.
  if exists (select 1 from public.clients where company_id = p_company)
     or exists (select 1 from public.service_items where company_id = p_company)
     or exists (select 1 from public.quotes where company_id = p_company)
     or exists (select 1 from public.expenses where company_id = p_company)
     or exists (select 1 from public.tasks where company_id = p_company)
     or exists (select 1 from public.alert_states where company_id = p_company)
     or exists (select 1 from public.saved_answers where company_id = p_company)
     or exists (select 1 from public.revenue_goals where company_id = p_company)
     or exists (select 1 from public.income_entries where company_id = p_company)
     or exists (select 1 from public.ledger_entries where company_id = p_company) then
    raise exception 'company_not_empty' using errcode = 'P0001';
  end if;

  begin
    insert into public.clients (id, company_id, name, email, phone, notes, status, created_at, updated_at)
    select r.id, p_company, r.name, r.email, r.phone, r.notes, r.status, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.clients, coalesce(p_data -> 'clients', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('clients', v_n);

    insert into public.service_items (id, company_id, name, unit, base_price_cents, est_cost_cents, status, created_at, updated_at)
    select r.id, p_company, r.name, r.unit, r.base_price_cents, r.est_cost_cents, r.status, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.service_items, coalesce(p_data -> 'service_items', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('service_items', v_n);

    insert into public.quotes (
      id, company_id, client_id, number, status, valid_until, terms, notes, discount_kind, discount_value,
      subtotal_cents, discount_cents, total_cents, sent_at, decided_at, created_at, updated_at
    )
    select r.id, p_company, r.client_id, r.number, r.status, r.valid_until, r.terms, r.notes, r.discount_kind,
           r.discount_value, r.subtotal_cents, r.discount_cents, r.total_cents, r.sent_at, r.decided_at,
           r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.quotes, coalesce(p_data -> 'quotes', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('quotes', v_n);

    insert into public.quote_items (id, company_id, quote_id, position, description, quantity_milli, unit_price_cents)
    select r.id, p_company, r.quote_id, r.position, r.description, r.quantity_milli, r.unit_price_cents
      from jsonb_populate_recordset(null::public.quote_items, coalesce(p_data -> 'quote_items', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('quote_items', v_n);

    insert into public.quote_events (id, company_id, quote_id, from_status, to_status, actor_user_id, at, confirmed, system)
    overriding system value
    select r.id, p_company, r.quote_id, r.from_status, r.to_status, r.actor_user_id, r.at, r.confirmed, r.system
      from jsonb_populate_recordset(null::public.quote_events, coalesce(p_data -> 'quote_events', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('quote_events', v_n);

    insert into public.orders (id, company_id, quote_id, client_id, status, total_cents, approved_at, canceled_at)
    select r.id, p_company, r.quote_id, r.client_id, r.status, r.total_cents, r.approved_at, r.canceled_at
      from jsonb_populate_recordset(null::public.orders, coalesce(p_data -> 'orders', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('orders', v_n);

    insert into public.receivables (id, company_id, order_id, number, kind, due_date, amount_cents, canceled_at, created_at)
    select r.id, p_company, r.order_id, r.number, r.kind, r.due_date, r.amount_cents, r.canceled_at, r.created_at
      from jsonb_populate_recordset(null::public.receivables, coalesce(p_data -> 'receivables', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('receivables', v_n);

    insert into public.payments (
      id, seq, company_id, receivable_id, kind, amount_cents, paid_on, method, note, reverses_payment_id, created_by, created_at
    )
    overriding system value
    select r.id, r.seq, p_company, r.receivable_id, r.kind, r.amount_cents, r.paid_on, r.method, r.note,
           r.reverses_payment_id, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.payments, coalesce(p_data -> 'payments', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('payments', v_n);

    insert into public.collection_events (id, seq, company_id, receivable_id, state, scheduled_for, note, created_by, created_at)
    overriding system value
    select r.id, r.seq, p_company, r.receivable_id, r.state, r.scheduled_for, r.note, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.collection_events, coalesce(p_data -> 'collection_events', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('collection_events', v_n);

    insert into public.expenses (id, company_id, description, category, amount_cents, due_date, notes, canceled_at, created_at, updated_at)
    select r.id, p_company, r.description, r.category, r.amount_cents, r.due_date, r.notes, r.canceled_at, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.expenses, coalesce(p_data -> 'expenses', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('expenses', v_n);

    insert into public.expense_payments (
      id, seq, company_id, expense_id, kind, amount_cents, paid_on, method, note, reverses_payment_id, created_by, created_at
    )
    overriding system value
    select r.id, r.seq, p_company, r.expense_id, r.kind, r.amount_cents, r.paid_on, r.method, r.note,
           r.reverses_payment_id, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.expense_payments, coalesce(p_data -> 'expense_payments', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('expense_payments', v_n);

    insert into public.income_entries (
      id, seq, company_id, kind, category, description, amount_cents, received_on, client_id, note, reverses_id,
      created_by, created_at
    )
    overriding system value
    select r.id, r.seq, p_company, r.kind, r.category, r.description, r.amount_cents, r.received_on, r.client_id, r.note,
           r.reverses_id, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.income_entries, coalesce(p_data -> 'income_entries', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('income_entries', v_n);

    insert into public.ledger_entries (id, company_id, payment_id, expense_payment_id, income_entry_id, direction, amount_cents, occurred_on, created_at)
    select r.id, p_company, r.payment_id, r.expense_payment_id, r.income_entry_id, r.direction, r.amount_cents, r.occurred_on, r.created_at
      from jsonb_populate_recordset(null::public.ledger_entries, coalesce(p_data -> 'ledger_entries', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('ledger_entries', v_n);

    insert into public.tasks (id, company_id, title, due_date, client_id, notes, done_at, created_at, updated_at)
    select r.id, p_company, r.title, r.due_date, r.client_id, r.notes, r.done_at, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.tasks, coalesce(p_data -> 'tasks', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('tasks', v_n);

    insert into public.alert_states (company_id, alert_key, state, until, reason, updated_at)
    select p_company, r.alert_key, r.state, r.until, r.reason, r.updated_at
      from jsonb_populate_recordset(null::public.alert_states, coalesce(p_data -> 'alert_states', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('alert_states', v_n);

    insert into public.saved_answers (id, company_id, question, answer, source_kind, source_label, verified_on, review_on, created_at, updated_at)
    select r.id, p_company, r.question, r.answer, r.source_kind, r.source_label, r.verified_on, r.review_on, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.saved_answers, coalesce(p_data -> 'saved_answers', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('saved_answers', v_n);

    insert into public.revenue_goals (id, company_id, period_kind, period_start, target_cents, created_at, updated_at)
    select r.id, p_company, r.period_kind, r.period_start, r.target_cents, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.revenue_goals, coalesce(p_data -> 'revenue_goals', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('revenue_goals', v_n);

    -- Os contadores seguem de onde a cópia parou (próximo número de orçamento, próximos ids das tabelas com sequência).
    update public.companies set
      quote_seq = greatest(
        quote_seq,
        coalesce((select max(q.number) from public.quotes q where q.company_id = p_company), 0),
        case when (v_empresa ->> 'quote_seq') ~ '^[0-9]{1,9}$' then (v_empresa ->> 'quote_seq')::integer else 0 end
      ),
      opening_balance_cents = case when (v_empresa ->> 'opening_balance_cents') ~ '^-?[0-9]{1,13}$'
                                   then (v_empresa ->> 'opening_balance_cents')::bigint end,
      opening_balance_on = case when (v_empresa ->> 'opening_balance_cents') ~ '^-?[0-9]{1,13}$'
                                then (v_empresa ->> 'opening_balance_on')::date end
    where id = p_company;
    perform setval(pg_get_serial_sequence('public.quote_events', 'id'), greatest((select coalesce(max(id), 0) from public.quote_events), 1),
                   (select count(*) > 0 from public.quote_events));
    perform setval(pg_get_serial_sequence('public.payments', 'seq'), greatest((select coalesce(max(seq), 0) from public.payments), 1),
                   (select count(*) > 0 from public.payments));
    perform setval(pg_get_serial_sequence('public.expense_payments', 'seq'), greatest((select coalesce(max(seq), 0) from public.expense_payments), 1),
                   (select count(*) > 0 from public.expense_payments));
    perform setval(pg_get_serial_sequence('public.collection_events', 'seq'), greatest((select coalesce(max(seq), 0) from public.collection_events), 1),
                   (select count(*) > 0 from public.collection_events));
    perform setval(pg_get_serial_sequence('public.income_entries', 'seq'), greatest((select coalesce(max(seq), 0) from public.income_entries), 1),
                   (select count(*) > 0 from public.income_entries));
  exception
    when unique_violation then
      -- Mesmo id já existe (neste aparelho ou em outra empresa): a cópia não pode entrar. Sem detalhes do que existe.
      raise exception 'import_conflict' using errcode = 'P0001';
    when foreign_key_violation then
      raise exception 'import_invalid' using errcode = 'P0001', detail = 'references';
    when check_violation or not_null_violation or invalid_text_representation or datetime_field_overflow
         or invalid_datetime_format or numeric_value_out_of_range or invalid_parameter_value or string_data_right_truncation then
      raise exception 'import_invalid' using errcode = 'P0001', detail = 'values';
  end;

  -- ---------- O dinheiro tem de fechar (as mesmas regras que as funções do servidor garantem ao gravar) ----------

  -- Orçamento: subtotal = soma das linhas; desconto e total conforme o tipo de desconto.
  if exists (
    select 1
      from public.quotes q
      left join lateral (select coalesce(sum(i.line_total_cents), 0) as soma from public.quote_items i where i.quote_id = q.id) s on true
     where q.company_id = p_company
       and (q.subtotal_cents <> s.soma
            or q.total_cents <> q.subtotal_cents - q.discount_cents
            or q.discount_cents <> case q.discount_kind
                                     when 'none' then 0
                                     when 'percent' then public.money_percent(q.subtotal_cents, q.discount_value::integer)
                                     else q.discount_value end)
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'quotes';
  end if;

  -- Orçamento aprovado tem serviço; serviço só existe para orçamento aprovado ou cancelado depois de aprovado.
  if exists (select 1 from public.quotes q where q.company_id = p_company and q.status = 'aprovado'
              and not exists (select 1 from public.orders o where o.quote_id = q.id))
     or exists (select 1 from public.orders o join public.quotes q on q.id = o.quote_id
                 where o.company_id = p_company and q.status not in ('aprovado', 'cancelado')) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'orders';
  end if;

  -- Serviço: as parcelas somam o total.
  if exists (
    select 1 from public.orders o
     where o.company_id = p_company
       and o.total_cents <> (select coalesce(sum(r.amount_cents), 0) from public.receivables r where r.order_id = o.id)
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'receivables';
  end if;

  -- Parcela: o pago líquido nunca passa do valor nem fica negativo; e o estorno tem a mesma data ou depois do pagamento.
  if exists (
    select 1 from public.receivables r
     where r.company_id = p_company
       and (select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
              from public.payments p where p.receivable_id = r.id) not between 0 and r.amount_cents
  ) or exists (
    select 1 from public.payments e join public.payments o on o.id = e.reverses_payment_id
     where e.company_id = p_company and e.paid_on < o.paid_on
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'payments';
  end if;

  -- Despesa: paga por inteiro ou não paga (líquido de estornos).
  if exists (
    select 1 from public.expenses e
     where e.company_id = p_company
       and (select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
              from public.expense_payments p where p.expense_id = e.id) not in (0, e.amount_cents)
  ) or exists (
    select 1 from public.expense_payments e join public.expense_payments o on o.id = e.reverses_payment_id
     where e.company_id = p_company and e.paid_on < o.paid_on
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'expense_payments';
  end if;

  -- Receita avulsa: o estorno tem a mesma data ou depois da receita (o valor e a categoria já são conferidos pela chave).
  if exists (
    select 1 from public.income_entries e join public.income_entries o on o.id = e.reverses_id
     where e.company_id = p_company and e.received_on < o.received_on
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'income_entries';
  end if;

  -- Caixa: cada pagamento (de cliente ou de despesa) e cada receita avulsa tem exatamente um lançamento.
  if exists (select 1 from public.payments p where p.company_id = p_company
              and not exists (select 1 from public.ledger_entries l where l.payment_id = p.id))
     or exists (select 1 from public.expense_payments p where p.company_id = p_company
                 and not exists (select 1 from public.ledger_entries l where l.expense_payment_id = p.id))
     or exists (select 1 from public.income_entries i where i.company_id = p_company
                 and not exists (select 1 from public.ledger_entries l where l.income_entry_id = i.id)) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'ledger_entries';
  end if;

  perform public.audit_log(p_company, 'company.import', 'company', p_company, v_counts);
  return v_counts;
end
$$;

-- ---------- "Tem dados?" e contagem para o diagnóstico (agora com as metas) ----------

create or replace function public.has_business_data() returns boolean
language sql stable set search_path = ''
as $$
  select exists (select 1 from public.clients) or exists (select 1 from public.service_items)
      or exists (select 1 from public.quotes) or exists (select 1 from public.expenses)
      or exists (select 1 from public.tasks) or exists (select 1 from public.alert_states)
      or exists (select 1 from public.ledger_entries) or exists (select 1 from public.income_entries)
      or exists (select 1 from public.saved_answers) or exists (select 1 from public.revenue_goals)
$$;

-- Quantos registros há em cada tabela de negócio (para o diagnóstico: só números, nunca conteúdo).
create or replace function public.table_counts() returns jsonb
language sql stable set search_path = ''
as $$
  select jsonb_build_array(
    jsonb_build_object('tabela', 'clients', 'n', (select count(*)::int from public.clients)),
    jsonb_build_object('tabela', 'service_items', 'n', (select count(*)::int from public.service_items)),
    jsonb_build_object('tabela', 'quotes', 'n', (select count(*)::int from public.quotes)),
    jsonb_build_object('tabela', 'receivables', 'n', (select count(*)::int from public.receivables)),
    jsonb_build_object('tabela', 'payments', 'n', (select count(*)::int from public.payments)),
    jsonb_build_object('tabela', 'collection_events', 'n', (select count(*)::int from public.collection_events)),
    jsonb_build_object('tabela', 'expenses', 'n', (select count(*)::int from public.expenses)),
    jsonb_build_object('tabela', 'expense_payments', 'n', (select count(*)::int from public.expense_payments)),
    jsonb_build_object('tabela', 'income_entries', 'n', (select count(*)::int from public.income_entries)),
    jsonb_build_object('tabela', 'ledger_entries', 'n', (select count(*)::int from public.ledger_entries)),
    jsonb_build_object('tabela', 'tasks', 'n', (select count(*)::int from public.tasks)),
    jsonb_build_object('tabela', 'alert_states', 'n', (select count(*)::int from public.alert_states)),
    jsonb_build_object('tabela', 'saved_answers', 'n', (select count(*)::int from public.saved_answers)),
    jsonb_build_object('tabela', 'revenue_goals', 'n', (select count(*)::int from public.revenue_goals))
  )
$$;

-- ---------- Permissões ----------

revoke all on function public.save_revenue_goal(text, date, bigint) from public, anon;
revoke all on function public.delete_revenue_goal(uuid) from public, anon;
revoke all on function public.list_revenue_goals() from public, anon;
grant execute on function public.save_revenue_goal(text, date, bigint) to authenticated;
grant execute on function public.delete_revenue_goal(uuid) to authenticated;
grant execute on function public.list_revenue_goals() to authenticated;
`,ce=`-- NAP · 0018 · Agenda de serviços (ferramenta de empreendedor, plano NAP Empreendedor).
-- Os compromissos de trabalho da pessoa: um serviço marcado para um dia (e, se quiser, horário), com cliente, local e
-- observações. Regras de desenho:
--   * um compromisso é um registro da AGENDA: nenhuma função de dinheiro lê esta tabela (como as metas e as respostas
--     guardadas), então marcar, concluir ou cancelar um compromisso nunca muda saldo, relatório, parcela nem cobrança;
--   * o estado é \`agendado\`, \`concluido\` ou \`cancelado\` e a pessoa troca à vontade (a agenda não é registro financeiro);
--   * o horário é opcional; se houver fim, tem de haver início e o fim é depois do início;
--   * o cliente é opcional, precisa ser da mesma empresa e, ao marcar, estar ativo;
--   * apagar um compromisso é permitido; a auditoria guarda o fato, o dia e o estado, nunca o título, o local nem as
--     observações;
--   * o navegador só LÊ a tabela; quem grava são as funções abaixo, como nas outras;
--   * exportação formato 9 e restauração dos formatos 2 a 9.

create table public.appointments (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies (id) on delete cascade,
  title text not null constraint appointments_title_check check (char_length(btrim(title)) between 1 and 120),
  on_date date not null constraint appointments_date_check check (on_date between date '2000-01-01' and date '2100-12-31'),
  start_time time,
  end_time time,
  client_id uuid,
  place text constraint appointments_place_check check (place is null or char_length(place) <= 200),
  notes text constraint appointments_notes_check check (notes is null or char_length(notes) <= 1000),
  status text not null default 'agendado' constraint appointments_status_check check (status in ('agendado', 'concluido', 'cancelado')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint appointments_time_check check (end_time is null or (start_time is not null and end_time > start_time)),
  unique (company_id, id),
  foreign key (company_id, client_id) references public.clients (company_id, id)
);

create index appointments_company_date_idx on public.appointments (company_id, on_date);

create trigger appointments_touch before update on public.appointments
for each row execute function public.touch_updated_at();

select public.apply_company_rls('public.appointments', false);

-- ---------- Gravar ----------

-- Cria (sem id) ou edita (com id) um compromisso. O estado de um compromisso novo é "agendado"; para mudar o estado use
-- \`set_appointment_status\`. Ao editar, o cliente que já estava ligado pode ter sido arquivado depois: só um cliente NOVO
-- precisa estar ativo.
create function public.save_appointment(
  p_id uuid,
  p_title text,
  p_on date,
  p_start time default null,
  p_end time default null,
  p_client uuid default null,
  p_place text default null,
  p_notes text default null
) returns uuid
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_old_client uuid;
  v_title text := btrim(p_title);
  v_place text := nullif(btrim(p_place), '');
  v_notes text := nullif(btrim(p_notes), '');
  v_status text;
  v_id uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  if p_id is null then
    select m.company_id into v_company from public.company_members m where m.user_id = v_user limit 1;
    if v_company is null then
      raise exception 'not_member' using errcode = '42501';
    end if;
  else
    select a.company_id, a.client_id into v_company, v_old_client from public.appointments a where a.id = p_id for update;
    if v_company is null or not public.is_member(v_company) then
      raise exception 'appointment_not_found' using errcode = 'P0002';
    end if;
  end if;

  if v_title is null or char_length(v_title) not between 1 and 120 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'title';
  end if;
  if p_on is null or p_on < date '2000-01-01' or p_on > date '2100-12-31' then
    raise exception 'invalid_input' using errcode = '22023', detail = 'on_date';
  end if;
  if p_end is not null and (p_start is null or p_end <= p_start) then
    raise exception 'invalid_input' using errcode = '22023', detail = 'end_time';
  end if;
  if v_place is not null and char_length(v_place) > 200 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'place';
  end if;
  if v_notes is not null and char_length(v_notes) > 1000 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'notes';
  end if;

  if p_client is not null then
    select c.status into v_status from public.clients c where c.id = p_client and c.company_id = v_company;
    if v_status is null then
      raise exception 'client_not_found' using errcode = 'P0002';
    end if;
    if v_status <> 'ativo' and p_client is distinct from v_old_client then
      raise exception 'client_archived' using errcode = 'P0001';
    end if;
  end if;

  if p_id is null then
    insert into public.appointments (company_id, title, on_date, start_time, end_time, client_id, place, notes)
      values (v_company, v_title, p_on, p_start, p_end, p_client, v_place, v_notes)
      returning id, status into v_id, v_status;
  else
    update public.appointments
       set title = v_title, on_date = p_on, start_time = p_start, end_time = p_end, client_id = p_client, place = v_place, notes = v_notes
     where id = p_id
     returning id, status into v_id, v_status;
  end if;

  -- Só o fato: o dia e o estado, nunca o título, o local nem as observações.
  perform public.audit_log(v_company, case when p_id is null then 'appointment.create' else 'appointment.update' end, 'appointment', v_id,
    jsonb_build_object('on_date', p_on::text, 'status', v_status));
  return v_id;
end
$$;

-- Troca o estado de um compromisso (agendado, concluido ou cancelado).
create function public.set_appointment_status(p_id uuid, p_status text) returns void
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  if p_status is null or p_status not in ('agendado', 'concluido', 'cancelado') then
    raise exception 'invalid_input' using errcode = '22023', detail = 'status';
  end if;
  select a.company_id into v_company from public.appointments a where a.id = p_id for update;
  if v_company is null or not public.is_member(v_company) then
    raise exception 'appointment_not_found' using errcode = 'P0002';
  end if;
  update public.appointments set status = p_status where id = p_id;
  perform public.audit_log(v_company, 'appointment.status', 'appointment', p_id, jsonb_build_object('status', p_status));
end
$$;

-- Apaga um compromisso (a agenda não é registro financeiro). Fica na auditoria, sem o texto.
create function public.delete_appointment(p_id uuid) returns void
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_date date;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  select a.company_id, a.on_date into v_company, v_date from public.appointments a where a.id = p_id for update;
  if v_company is null or not public.is_member(v_company) then
    raise exception 'appointment_not_found' using errcode = 'P0002';
  end if;
  delete from public.appointments where id = p_id;
  perform public.audit_log(v_company, 'appointment.delete', 'appointment', p_id, jsonb_build_object('on_date', v_date::text));
end
$$;

-- ---------- Ler (SECURITY INVOKER: a RLS decide o que existe, como nas outras leituras) ----------

-- Os compromissos entre duas datas (inclusive; nulo = sem limite daquele lado), por dia e horário (os sem horário depois dos
-- que têm). Cada um com o nome do cliente, se houver.
create function public.list_appointments(p_from date default null, p_to date default null) returns jsonb
language sql stable set search_path = ''
as $$
  select coalesce(jsonb_agg(to_jsonb(t) - '_inicio' - '_criado' order by t.on_date, t._inicio nulls last, t._criado, t.id), '[]'::jsonb)
    from (
      select a.id, a.title, a.on_date::text as on_date,
             to_char(a.start_time, 'HH24:MI') as start_time, to_char(a.end_time, 'HH24:MI') as end_time,
             a.client_id, c.name as client_name, a.place, a.notes, a.status,
             public.iso_utc(a.created_at) as created_at, public.iso_utc(a.updated_at) as updated_at,
             a.start_time as _inicio, a.created_at as _criado
        from public.appointments a
        left join public.clients c on c.id = a.client_id and c.company_id = a.company_id
       where (p_from is null or a.on_date >= p_from)
         and (p_to is null or a.on_date <= p_to)
    ) t
$$;

-- ---------- Exportação (formato 9, com a agenda) ----------

create or replace function public.export_company_data(p_company uuid) returns jsonb
language plpgsql security definer set search_path = ''
as $$
begin
  if not public.is_member(p_company) then
    raise exception 'not_member' using errcode = '42501';
  end if;

  perform public.audit_log(p_company, 'company.export', 'company', p_company);

  return jsonb_build_object(
    'format', 9,
    'exported_at', now(),
    'company', (select to_jsonb(c) from public.companies c where c.id = p_company),
    'members', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.user_id)
         from public.company_members t where t.company_id = p_company), '[]'::jsonb),
    'clients', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.clients t where t.company_id = p_company), '[]'::jsonb),
    'service_items', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.service_items t where t.company_id = p_company), '[]'::jsonb),
    'quotes', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.number)
         from public.quotes t where t.company_id = p_company), '[]'::jsonb),
    'quote_items', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.quote_id, t.position)
         from public.quote_items t where t.company_id = p_company), '[]'::jsonb),
    'quote_events', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.id)
         from public.quote_events t where t.company_id = p_company), '[]'::jsonb),
    'orders', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.approved_at, t.id)
         from public.orders t where t.company_id = p_company), '[]'::jsonb),
    'receivables', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.order_id, t.number)
         from public.receivables t where t.company_id = p_company), '[]'::jsonb),
    'payments', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.payments t where t.company_id = p_company), '[]'::jsonb),
    'collection_events', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.collection_events t where t.company_id = p_company), '[]'::jsonb),
    'expenses', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.created_at, t.id)
         from public.expenses t where t.company_id = p_company), '[]'::jsonb),
    'expense_payments', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.expense_payments t where t.company_id = p_company), '[]'::jsonb),
    'income_entries', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.income_entries t where t.company_id = p_company), '[]'::jsonb),
    'ledger_entries', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.occurred_on, t.created_at, t.id)
         from public.ledger_entries t where t.company_id = p_company), '[]'::jsonb),
    'tasks', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.created_at, t.id)
         from public.tasks t where t.company_id = p_company), '[]'::jsonb),
    'alert_states', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.alert_key)
         from public.alert_states t where t.company_id = p_company), '[]'::jsonb),
    'saved_answers', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.saved_answers t where t.company_id = p_company), '[]'::jsonb),
    'revenue_goals', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.period_start, t.period_kind desc, t.id)
         from public.revenue_goals t where t.company_id = p_company), '[]'::jsonb),
    'appointments', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.on_date, t.start_time nulls last, t.created_at, t.id)
         from public.appointments t where t.company_id = p_company), '[]'::jsonb),
    'audit_events', coalesce(
      (select jsonb_agg(to_jsonb(a) order by a.at)
         from (select e.* from public.audit_events e
                where e.company_id = p_company order by e.at desc limit 5000) a), '[]'::jsonb)
  );
end
$$;

-- ---------- Restauração (aceita cópias dos formatos 2 a 9) ----------

create or replace function public.import_company_data(p_company uuid, p_data jsonb) returns jsonb
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_format integer;
  v_chave text;
  v_counts jsonb := '{}'::jsonb;
  v_n bigint;
  v_empresa jsonb;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  if not public.is_owner(p_company) then
    raise exception 'not_owner' using errcode = '42501';
  end if;

  -- Formato do arquivo: um objeto de uma versão que sabemos ler (2 a 9); as listas, quando existem, são listas.
  if p_data is null or jsonb_typeof(p_data) <> 'object' then
    raise exception 'import_format' using errcode = 'P0001';
  end if;
  if (p_data ->> 'format') is null or (p_data ->> 'format') !~ '^[0-9]{1,3}$' then
    raise exception 'import_format' using errcode = 'P0001';
  end if;
  v_format := (p_data ->> 'format')::integer;
  if v_format < 2 or v_format > 9 then
    raise exception 'import_format' using errcode = 'P0001';
  end if;
  foreach v_chave in array array[
    'clients', 'service_items', 'quotes', 'quote_items', 'quote_events', 'orders', 'receivables', 'payments',
    'collection_events', 'expenses', 'expense_payments', 'income_entries', 'ledger_entries', 'tasks', 'alert_states',
    'saved_answers', 'revenue_goals', 'appointments'
  ] loop
    if p_data ? v_chave and jsonb_typeof(p_data -> v_chave) <> 'array' then
      raise exception 'import_format' using errcode = 'P0001';
    end if;
  end loop;
  v_empresa := coalesce(p_data -> 'company', '{}'::jsonb);
  if jsonb_typeof(v_empresa) <> 'object' then
    raise exception 'import_format' using errcode = 'P0001';
  end if;

  -- Só em empresa vazia.
  if exists (select 1 from public.clients where company_id = p_company)
     or exists (select 1 from public.service_items where company_id = p_company)
     or exists (select 1 from public.quotes where company_id = p_company)
     or exists (select 1 from public.expenses where company_id = p_company)
     or exists (select 1 from public.tasks where company_id = p_company)
     or exists (select 1 from public.alert_states where company_id = p_company)
     or exists (select 1 from public.saved_answers where company_id = p_company)
     or exists (select 1 from public.revenue_goals where company_id = p_company)
     or exists (select 1 from public.appointments where company_id = p_company)
     or exists (select 1 from public.income_entries where company_id = p_company)
     or exists (select 1 from public.ledger_entries where company_id = p_company) then
    raise exception 'company_not_empty' using errcode = 'P0001';
  end if;

  begin
    insert into public.clients (id, company_id, name, email, phone, notes, status, created_at, updated_at)
    select r.id, p_company, r.name, r.email, r.phone, r.notes, r.status, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.clients, coalesce(p_data -> 'clients', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('clients', v_n);

    insert into public.service_items (id, company_id, name, unit, base_price_cents, est_cost_cents, status, created_at, updated_at)
    select r.id, p_company, r.name, r.unit, r.base_price_cents, r.est_cost_cents, r.status, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.service_items, coalesce(p_data -> 'service_items', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('service_items', v_n);

    insert into public.quotes (
      id, company_id, client_id, number, status, valid_until, terms, notes, discount_kind, discount_value,
      subtotal_cents, discount_cents, total_cents, sent_at, decided_at, created_at, updated_at
    )
    select r.id, p_company, r.client_id, r.number, r.status, r.valid_until, r.terms, r.notes, r.discount_kind,
           r.discount_value, r.subtotal_cents, r.discount_cents, r.total_cents, r.sent_at, r.decided_at,
           r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.quotes, coalesce(p_data -> 'quotes', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('quotes', v_n);

    insert into public.quote_items (id, company_id, quote_id, position, description, quantity_milli, unit_price_cents)
    select r.id, p_company, r.quote_id, r.position, r.description, r.quantity_milli, r.unit_price_cents
      from jsonb_populate_recordset(null::public.quote_items, coalesce(p_data -> 'quote_items', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('quote_items', v_n);

    insert into public.quote_events (id, company_id, quote_id, from_status, to_status, actor_user_id, at, confirmed, system)
    overriding system value
    select r.id, p_company, r.quote_id, r.from_status, r.to_status, r.actor_user_id, r.at, r.confirmed, r.system
      from jsonb_populate_recordset(null::public.quote_events, coalesce(p_data -> 'quote_events', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('quote_events', v_n);

    insert into public.orders (id, company_id, quote_id, client_id, status, total_cents, approved_at, canceled_at)
    select r.id, p_company, r.quote_id, r.client_id, r.status, r.total_cents, r.approved_at, r.canceled_at
      from jsonb_populate_recordset(null::public.orders, coalesce(p_data -> 'orders', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('orders', v_n);

    insert into public.receivables (id, company_id, order_id, number, kind, due_date, amount_cents, canceled_at, created_at)
    select r.id, p_company, r.order_id, r.number, r.kind, r.due_date, r.amount_cents, r.canceled_at, r.created_at
      from jsonb_populate_recordset(null::public.receivables, coalesce(p_data -> 'receivables', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('receivables', v_n);

    insert into public.payments (
      id, seq, company_id, receivable_id, kind, amount_cents, paid_on, method, note, reverses_payment_id, created_by, created_at
    )
    overriding system value
    select r.id, r.seq, p_company, r.receivable_id, r.kind, r.amount_cents, r.paid_on, r.method, r.note,
           r.reverses_payment_id, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.payments, coalesce(p_data -> 'payments', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('payments', v_n);

    insert into public.collection_events (id, seq, company_id, receivable_id, state, scheduled_for, note, created_by, created_at)
    overriding system value
    select r.id, r.seq, p_company, r.receivable_id, r.state, r.scheduled_for, r.note, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.collection_events, coalesce(p_data -> 'collection_events', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('collection_events', v_n);

    insert into public.expenses (id, company_id, description, category, amount_cents, due_date, notes, canceled_at, created_at, updated_at)
    select r.id, p_company, r.description, r.category, r.amount_cents, r.due_date, r.notes, r.canceled_at, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.expenses, coalesce(p_data -> 'expenses', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('expenses', v_n);

    insert into public.expense_payments (
      id, seq, company_id, expense_id, kind, amount_cents, paid_on, method, note, reverses_payment_id, created_by, created_at
    )
    overriding system value
    select r.id, r.seq, p_company, r.expense_id, r.kind, r.amount_cents, r.paid_on, r.method, r.note,
           r.reverses_payment_id, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.expense_payments, coalesce(p_data -> 'expense_payments', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('expense_payments', v_n);

    insert into public.income_entries (
      id, seq, company_id, kind, category, description, amount_cents, received_on, client_id, note, reverses_id,
      created_by, created_at
    )
    overriding system value
    select r.id, r.seq, p_company, r.kind, r.category, r.description, r.amount_cents, r.received_on, r.client_id, r.note,
           r.reverses_id, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.income_entries, coalesce(p_data -> 'income_entries', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('income_entries', v_n);

    insert into public.ledger_entries (id, company_id, payment_id, expense_payment_id, income_entry_id, direction, amount_cents, occurred_on, created_at)
    select r.id, p_company, r.payment_id, r.expense_payment_id, r.income_entry_id, r.direction, r.amount_cents, r.occurred_on, r.created_at
      from jsonb_populate_recordset(null::public.ledger_entries, coalesce(p_data -> 'ledger_entries', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('ledger_entries', v_n);

    insert into public.tasks (id, company_id, title, due_date, client_id, notes, done_at, created_at, updated_at)
    select r.id, p_company, r.title, r.due_date, r.client_id, r.notes, r.done_at, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.tasks, coalesce(p_data -> 'tasks', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('tasks', v_n);

    insert into public.alert_states (company_id, alert_key, state, until, reason, updated_at)
    select p_company, r.alert_key, r.state, r.until, r.reason, r.updated_at
      from jsonb_populate_recordset(null::public.alert_states, coalesce(p_data -> 'alert_states', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('alert_states', v_n);

    insert into public.saved_answers (id, company_id, question, answer, source_kind, source_label, verified_on, review_on, created_at, updated_at)
    select r.id, p_company, r.question, r.answer, r.source_kind, r.source_label, r.verified_on, r.review_on, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.saved_answers, coalesce(p_data -> 'saved_answers', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('saved_answers', v_n);

    insert into public.revenue_goals (id, company_id, period_kind, period_start, target_cents, created_at, updated_at)
    select r.id, p_company, r.period_kind, r.period_start, r.target_cents, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.revenue_goals, coalesce(p_data -> 'revenue_goals', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('revenue_goals', v_n);

    insert into public.appointments (id, company_id, title, on_date, start_time, end_time, client_id, place, notes, status, created_at, updated_at)
    select r.id, p_company, r.title, r.on_date, r.start_time, r.end_time, r.client_id, r.place, r.notes, r.status, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.appointments, coalesce(p_data -> 'appointments', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('appointments', v_n);

    -- Os contadores seguem de onde a cópia parou (próximo número de orçamento, próximos ids das tabelas com sequência).
    update public.companies set
      quote_seq = greatest(
        quote_seq,
        coalesce((select max(q.number) from public.quotes q where q.company_id = p_company), 0),
        case when (v_empresa ->> 'quote_seq') ~ '^[0-9]{1,9}$' then (v_empresa ->> 'quote_seq')::integer else 0 end
      ),
      opening_balance_cents = case when (v_empresa ->> 'opening_balance_cents') ~ '^-?[0-9]{1,13}$'
                                   then (v_empresa ->> 'opening_balance_cents')::bigint end,
      opening_balance_on = case when (v_empresa ->> 'opening_balance_cents') ~ '^-?[0-9]{1,13}$'
                                then (v_empresa ->> 'opening_balance_on')::date end
    where id = p_company;
    perform setval(pg_get_serial_sequence('public.quote_events', 'id'), greatest((select coalesce(max(id), 0) from public.quote_events), 1),
                   (select count(*) > 0 from public.quote_events));
    perform setval(pg_get_serial_sequence('public.payments', 'seq'), greatest((select coalesce(max(seq), 0) from public.payments), 1),
                   (select count(*) > 0 from public.payments));
    perform setval(pg_get_serial_sequence('public.expense_payments', 'seq'), greatest((select coalesce(max(seq), 0) from public.expense_payments), 1),
                   (select count(*) > 0 from public.expense_payments));
    perform setval(pg_get_serial_sequence('public.collection_events', 'seq'), greatest((select coalesce(max(seq), 0) from public.collection_events), 1),
                   (select count(*) > 0 from public.collection_events));
    perform setval(pg_get_serial_sequence('public.income_entries', 'seq'), greatest((select coalesce(max(seq), 0) from public.income_entries), 1),
                   (select count(*) > 0 from public.income_entries));
  exception
    when unique_violation then
      -- Mesmo id já existe (neste aparelho ou em outra empresa): a cópia não pode entrar. Sem detalhes do que existe.
      raise exception 'import_conflict' using errcode = 'P0001';
    when foreign_key_violation then
      raise exception 'import_invalid' using errcode = 'P0001', detail = 'references';
    when check_violation or not_null_violation or invalid_text_representation or datetime_field_overflow
         or invalid_datetime_format or numeric_value_out_of_range or invalid_parameter_value or string_data_right_truncation then
      raise exception 'import_invalid' using errcode = 'P0001', detail = 'values';
  end;

  -- ---------- O dinheiro tem de fechar (as mesmas regras que as funções do servidor garantem ao gravar) ----------

  -- Orçamento: subtotal = soma das linhas; desconto e total conforme o tipo de desconto.
  if exists (
    select 1
      from public.quotes q
      left join lateral (select coalesce(sum(i.line_total_cents), 0) as soma from public.quote_items i where i.quote_id = q.id) s on true
     where q.company_id = p_company
       and (q.subtotal_cents <> s.soma
            or q.total_cents <> q.subtotal_cents - q.discount_cents
            or q.discount_cents <> case q.discount_kind
                                     when 'none' then 0
                                     when 'percent' then public.money_percent(q.subtotal_cents, q.discount_value::integer)
                                     else q.discount_value end)
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'quotes';
  end if;

  -- Orçamento aprovado tem serviço; serviço só existe para orçamento aprovado ou cancelado depois de aprovado.
  if exists (select 1 from public.quotes q where q.company_id = p_company and q.status = 'aprovado'
              and not exists (select 1 from public.orders o where o.quote_id = q.id))
     or exists (select 1 from public.orders o join public.quotes q on q.id = o.quote_id
                 where o.company_id = p_company and q.status not in ('aprovado', 'cancelado')) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'orders';
  end if;

  -- Serviço: as parcelas somam o total.
  if exists (
    select 1 from public.orders o
     where o.company_id = p_company
       and o.total_cents <> (select coalesce(sum(r.amount_cents), 0) from public.receivables r where r.order_id = o.id)
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'receivables';
  end if;

  -- Parcela: o pago líquido nunca passa do valor nem fica negativo; e o estorno tem a mesma data ou depois do pagamento.
  if exists (
    select 1 from public.receivables r
     where r.company_id = p_company
       and (select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
              from public.payments p where p.receivable_id = r.id) not between 0 and r.amount_cents
  ) or exists (
    select 1 from public.payments e join public.payments o on o.id = e.reverses_payment_id
     where e.company_id = p_company and e.paid_on < o.paid_on
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'payments';
  end if;

  -- Despesa: paga por inteiro ou não paga (líquido de estornos).
  if exists (
    select 1 from public.expenses e
     where e.company_id = p_company
       and (select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
              from public.expense_payments p where p.expense_id = e.id) not in (0, e.amount_cents)
  ) or exists (
    select 1 from public.expense_payments e join public.expense_payments o on o.id = e.reverses_payment_id
     where e.company_id = p_company and e.paid_on < o.paid_on
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'expense_payments';
  end if;

  -- Receita avulsa: o estorno tem a mesma data ou depois da receita (o valor e a categoria já são conferidos pela chave).
  if exists (
    select 1 from public.income_entries e join public.income_entries o on o.id = e.reverses_id
     where e.company_id = p_company and e.received_on < o.received_on
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'income_entries';
  end if;

  -- Caixa: cada pagamento (de cliente ou de despesa) e cada receita avulsa tem exatamente um lançamento.
  if exists (select 1 from public.payments p where p.company_id = p_company
              and not exists (select 1 from public.ledger_entries l where l.payment_id = p.id))
     or exists (select 1 from public.expense_payments p where p.company_id = p_company
                 and not exists (select 1 from public.ledger_entries l where l.expense_payment_id = p.id))
     or exists (select 1 from public.income_entries i where i.company_id = p_company
                 and not exists (select 1 from public.ledger_entries l where l.income_entry_id = i.id)) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'ledger_entries';
  end if;

  perform public.audit_log(p_company, 'company.import', 'company', p_company, v_counts);
  return v_counts;
end
$$;

-- ---------- "Tem dados?" e contagem para o diagnóstico (agora com a agenda) ----------

create or replace function public.has_business_data() returns boolean
language sql stable set search_path = ''
as $$
  select exists (select 1 from public.clients) or exists (select 1 from public.service_items)
      or exists (select 1 from public.quotes) or exists (select 1 from public.expenses)
      or exists (select 1 from public.tasks) or exists (select 1 from public.alert_states)
      or exists (select 1 from public.ledger_entries) or exists (select 1 from public.income_entries)
      or exists (select 1 from public.saved_answers) or exists (select 1 from public.revenue_goals)
      or exists (select 1 from public.appointments)
$$;

-- Quantos registros há em cada tabela de negócio (para o diagnóstico: só números, nunca conteúdo).
create or replace function public.table_counts() returns jsonb
language sql stable set search_path = ''
as $$
  select jsonb_build_array(
    jsonb_build_object('tabela', 'clients', 'n', (select count(*)::int from public.clients)),
    jsonb_build_object('tabela', 'service_items', 'n', (select count(*)::int from public.service_items)),
    jsonb_build_object('tabela', 'quotes', 'n', (select count(*)::int from public.quotes)),
    jsonb_build_object('tabela', 'receivables', 'n', (select count(*)::int from public.receivables)),
    jsonb_build_object('tabela', 'payments', 'n', (select count(*)::int from public.payments)),
    jsonb_build_object('tabela', 'collection_events', 'n', (select count(*)::int from public.collection_events)),
    jsonb_build_object('tabela', 'expenses', 'n', (select count(*)::int from public.expenses)),
    jsonb_build_object('tabela', 'expense_payments', 'n', (select count(*)::int from public.expense_payments)),
    jsonb_build_object('tabela', 'income_entries', 'n', (select count(*)::int from public.income_entries)),
    jsonb_build_object('tabela', 'ledger_entries', 'n', (select count(*)::int from public.ledger_entries)),
    jsonb_build_object('tabela', 'tasks', 'n', (select count(*)::int from public.tasks)),
    jsonb_build_object('tabela', 'alert_states', 'n', (select count(*)::int from public.alert_states)),
    jsonb_build_object('tabela', 'saved_answers', 'n', (select count(*)::int from public.saved_answers)),
    jsonb_build_object('tabela', 'revenue_goals', 'n', (select count(*)::int from public.revenue_goals)),
    jsonb_build_object('tabela', 'appointments', 'n', (select count(*)::int from public.appointments))
  )
$$;

-- ---------- Permissões ----------

revoke all on function public.save_appointment(uuid, text, date, time, time, uuid, text, text) from public, anon;
revoke all on function public.set_appointment_status(uuid, text) from public, anon;
revoke all on function public.delete_appointment(uuid) from public, anon;
revoke all on function public.list_appointments(date, date) from public, anon;
grant execute on function public.save_appointment(uuid, text, date, time, time, uuid, text, text) to authenticated;
grant execute on function public.set_appointment_status(uuid, text) to authenticated;
grant execute on function public.delete_appointment(uuid) to authenticated;
grant execute on function public.list_appointments(date, date) to authenticated;
`,le=`-- NAP · 0019 · Filiais neste computador (ferramenta do plano NAP Empreendedor, só no aplicativo do computador).
-- Uma filial é uma EMPRESA COMPLETA dentro do mesmo NAP: tem os próprios clientes, orçamentos, despesas e caixa. Quem a
-- separa da matriz é o usuário dono dela (cada filial é de um "espaço": um usuário local próprio), então a RLS que já isola
-- uma empresa da outra continua valendo sem mudar nenhuma tabela de negócio. Esta tabela é só o CADASTRO das filiais da
-- matriz. Regras de desenho:
--   * a tabela é da MATRIZ (company_id = a empresa de quem cadastra) e guarda qual usuário local é dono da filial
--     (branch_user_id); a empresa da filial é a que esse usuário tem (\`current_company()\` nele);
--   * uma filial nunca é apagada: ela fica \`ativa\`, \`pausada\` ou \`encerrada\` (com o dia do encerramento), e o histórico
--     continua. Pausada e encerrada viram só consulta no aplicativo;
--   * o apelido (nome curto para o menu) é único dentro da matriz, sem diferenciar maiúsculas de minúsculas;
--   * nenhuma função de dinheiro lê esta tabela: criar, editar ou encerrar uma filial nunca muda saldo, relatório, parcela
--     nem cobrança de ninguém;
--   * o navegador só LÊ a tabela; quem grava são as funções abaixo (e quem as chama é o processo principal do aplicativo);
--   * a auditoria guarda o fato e a situação, nunca o nome, o responsável, o contato nem as observações;
--   * no máximo 20 filiais por matriz (um limite de sanidade; o limite do plano é do aplicativo);
--   * exportação formato 10 (leva o cadastro das filiais) e restauração dos formatos 2 a 10.

create table public.branches (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies (id) on delete cascade,
  branch_user_id uuid not null,
  name text not null constraint branches_name_check check (char_length(btrim(name)) between 1 and 80),
  nickname text not null constraint branches_nickname_check check (char_length(btrim(nickname)) between 1 and 24),
  manager_name text constraint branches_manager_check check (manager_name is null or char_length(manager_name) <= 80),
  contact text constraint branches_contact_check check (contact is null or char_length(contact) <= 120),
  notes text constraint branches_notes_check check (notes is null or char_length(notes) <= 300),
  status text not null default 'ativa' constraint branches_status_check check (status in ('ativa', 'pausada', 'encerrada')),
  closed_on date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint branches_closed_check check ((status = 'encerrada') = (closed_on is not null)),
  constraint branches_user_unique unique (branch_user_id),
  unique (company_id, id)
);

create unique index branches_company_nickname_idx on public.branches (company_id, lower(btrim(nickname)));

create trigger branches_touch before update on public.branches
for each row execute function public.touch_updated_at();

select public.apply_company_rls('public.branches', false);

-- ---------- Gravar ----------

-- Cadastra (sem id) ou edita (com id) uma filial da matriz de quem chama. Ao cadastrar, \`p_branch_user\` é o usuário local que
-- será dono da empresa da filial (o aplicativo cria esse usuário e a empresa dele antes); ao editar, ele é ignorado.
-- A situação de uma filial nova é "ativa"; para mudar use \`set_branch_status\`.
create function public.save_branch(
  p_id uuid,
  p_branch_user uuid,
  p_name text,
  p_nickname text,
  p_manager text default null,
  p_contact text default null,
  p_notes text default null
) returns uuid
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
  v_name text := btrim(p_name);
  v_nickname text := btrim(p_nickname);
  v_manager text := nullif(btrim(p_manager), '');
  v_contact text := nullif(btrim(p_contact), '');
  v_notes text := nullif(btrim(p_notes), '');
  v_status text;
  v_id uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;

  if p_id is null then
    select m.company_id into v_company from public.company_members m where m.user_id = v_user limit 1;
    if v_company is null then
      raise exception 'not_member' using errcode = '42501';
    end if;
  else
    select b.company_id into v_company from public.branches b where b.id = p_id for update;
    if v_company is null or not public.is_member(v_company) then
      raise exception 'branch_not_found' using errcode = 'P0002';
    end if;
  end if;

  if v_name is null or char_length(v_name) not between 1 and 80 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'name';
  end if;
  if v_nickname is null or char_length(v_nickname) not between 1 and 24 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'nickname';
  end if;
  if v_manager is not null and char_length(v_manager) > 80 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'manager_name';
  end if;
  if v_contact is not null and char_length(v_contact) > 120 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'contact';
  end if;
  if v_notes is not null and char_length(v_notes) > 300 then
    raise exception 'invalid_input' using errcode = '22023', detail = 'notes';
  end if;

  -- O apelido é único na matriz (sem diferenciar maiúsculas); a própria filial pode manter o seu.
  if exists (
    select 1 from public.branches b
     where b.company_id = v_company and lower(btrim(b.nickname)) = lower(v_nickname) and b.id is distinct from p_id
  ) then
    raise exception 'branch_nickname_taken' using errcode = 'P0001';
  end if;

  if p_id is null then
    if p_branch_user is null or p_branch_user = v_user then
      raise exception 'invalid_input' using errcode = '22023', detail = 'branch_user';
    end if;
    if exists (select 1 from public.branches b where b.branch_user_id = p_branch_user) then
      raise exception 'invalid_input' using errcode = '22023', detail = 'branch_user';
    end if;
    -- O dono da filial precisa ter a empresa dela. (Cada usuário só pode pertencer a UMA empresa: o índice
    -- \`company_members_one_company_per_user\` garante que ele não é também da matriz nem de outra filial.)
    if not exists (select 1 from public.company_members m where m.user_id = p_branch_user and m.role = 'owner') then
      raise exception 'invalid_input' using errcode = '22023', detail = 'branch_user';
    end if;
    if (select count(*) from public.branches b where b.company_id = v_company) >= 20 then
      raise exception 'branch_limit' using errcode = 'P0001';
    end if;
    insert into public.branches (company_id, branch_user_id, name, nickname, manager_name, contact, notes)
      values (v_company, p_branch_user, v_name, v_nickname, v_manager, v_contact, v_notes)
      returning id, status into v_id, v_status;
  else
    update public.branches
       set name = v_name, nickname = v_nickname, manager_name = v_manager, contact = v_contact, notes = v_notes
     where id = p_id
     returning id, status into v_id, v_status;
  end if;

  -- Só o fato e a situação: nunca o nome, o responsável, o contato nem as observações.
  perform public.audit_log(v_company, case when p_id is null then 'branch.create' else 'branch.update' end, 'branch', v_id,
    jsonb_build_object('status', v_status));
  return v_id;
end
$$;

-- Troca a situação de uma filial: ativa, pausada ou encerrada. Encerrar pede o dia do encerramento; as outras situações
-- limpam esse dia. Nada é apagado.
create function public.set_branch_status(p_id uuid, p_status text, p_on date default null) returns void
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_company uuid;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  if p_status is null or p_status not in ('ativa', 'pausada', 'encerrada') then
    raise exception 'invalid_input' using errcode = '22023', detail = 'status';
  end if;
  if p_status = 'encerrada' and (p_on is null or p_on < date '2000-01-01' or p_on > date '2100-12-31') then
    raise exception 'invalid_input' using errcode = '22023', detail = 'closed_on';
  end if;
  select b.company_id into v_company from public.branches b where b.id = p_id for update;
  if v_company is null or not public.is_member(v_company) then
    raise exception 'branch_not_found' using errcode = 'P0002';
  end if;
  update public.branches
     set status = p_status, closed_on = case when p_status = 'encerrada' then p_on end
   where id = p_id;
  perform public.audit_log(v_company, 'branch.status', 'branch', p_id, jsonb_build_object('status', p_status));
end
$$;

-- ---------- Ler (SECURITY INVOKER: a RLS decide o que existe, como nas outras leituras) ----------

-- As filiais da matriz de quem chama, da mais antiga para a mais nova.
create function public.list_branches() returns jsonb
language sql stable set search_path = ''
as $$
  select coalesce(jsonb_agg(to_jsonb(t) - '_criado' order by t._criado, t.id), '[]'::jsonb)
    from (
      select b.id, b.branch_user_id, b.name, b.nickname, b.manager_name, b.contact, b.notes, b.status,
             b.closed_on::text as closed_on,
             public.iso_utc(b.created_at) as created_at, public.iso_utc(b.updated_at) as updated_at,
             b.created_at as _criado
        from public.branches b
    ) t
$$;

-- ---------- Exportação (formato 10, com o cadastro das filiais) ----------

create or replace function public.export_company_data(p_company uuid) returns jsonb
language plpgsql security definer set search_path = ''
as $$
begin
  if not public.is_member(p_company) then
    raise exception 'not_member' using errcode = '42501';
  end if;

  perform public.audit_log(p_company, 'company.export', 'company', p_company);

  return jsonb_build_object(
    'format', 10,
    'exported_at', now(),
    'company', (select to_jsonb(c) from public.companies c where c.id = p_company),
    'members', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.user_id)
         from public.company_members t where t.company_id = p_company), '[]'::jsonb),
    'clients', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.clients t where t.company_id = p_company), '[]'::jsonb),
    'service_items', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.service_items t where t.company_id = p_company), '[]'::jsonb),
    'quotes', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.number)
         from public.quotes t where t.company_id = p_company), '[]'::jsonb),
    'quote_items', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.quote_id, t.position)
         from public.quote_items t where t.company_id = p_company), '[]'::jsonb),
    'quote_events', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.id)
         from public.quote_events t where t.company_id = p_company), '[]'::jsonb),
    'orders', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.approved_at, t.id)
         from public.orders t where t.company_id = p_company), '[]'::jsonb),
    'receivables', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.order_id, t.number)
         from public.receivables t where t.company_id = p_company), '[]'::jsonb),
    'payments', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.payments t where t.company_id = p_company), '[]'::jsonb),
    'collection_events', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.collection_events t where t.company_id = p_company), '[]'::jsonb),
    'expenses', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.created_at, t.id)
         from public.expenses t where t.company_id = p_company), '[]'::jsonb),
    'expense_payments', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.expense_payments t where t.company_id = p_company), '[]'::jsonb),
    'income_entries', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.seq)
         from public.income_entries t where t.company_id = p_company), '[]'::jsonb),
    'ledger_entries', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.occurred_on, t.created_at, t.id)
         from public.ledger_entries t where t.company_id = p_company), '[]'::jsonb),
    'tasks', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.due_date, t.created_at, t.id)
         from public.tasks t where t.company_id = p_company), '[]'::jsonb),
    'alert_states', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.alert_key)
         from public.alert_states t where t.company_id = p_company), '[]'::jsonb),
    'saved_answers', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.saved_answers t where t.company_id = p_company), '[]'::jsonb),
    'revenue_goals', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.period_start, t.period_kind desc, t.id)
         from public.revenue_goals t where t.company_id = p_company), '[]'::jsonb),
    'appointments', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.on_date, t.start_time nulls last, t.created_at, t.id)
         from public.appointments t where t.company_id = p_company), '[]'::jsonb),
    'branches', coalesce(
      (select jsonb_agg(to_jsonb(t) order by t.created_at, t.id)
         from public.branches t where t.company_id = p_company), '[]'::jsonb),
    'audit_events', coalesce(
      (select jsonb_agg(to_jsonb(a) order by a.at)
         from (select e.* from public.audit_events e
                where e.company_id = p_company order by e.at desc limit 5000) a), '[]'::jsonb)
  );
end
$$;

-- ---------- Restauração (aceita cópias dos formatos 2 a 10) ----------

create or replace function public.import_company_data(p_company uuid, p_data jsonb) returns jsonb
language plpgsql security definer set search_path = ''
as $$
declare
  v_user uuid := (select auth.uid());
  v_format integer;
  v_chave text;
  v_counts jsonb := '{}'::jsonb;
  v_n bigint;
  v_empresa jsonb;
begin
  if v_user is null then
    raise exception 'not_authenticated' using errcode = '28000';
  end if;
  if not public.is_owner(p_company) then
    raise exception 'not_owner' using errcode = '42501';
  end if;

  -- Formato do arquivo: um objeto de uma versão que sabemos ler (2 a 10); as listas, quando existem, são listas.
  if p_data is null or jsonb_typeof(p_data) <> 'object' then
    raise exception 'import_format' using errcode = 'P0001';
  end if;
  if (p_data ->> 'format') is null or (p_data ->> 'format') !~ '^[0-9]{1,3}$' then
    raise exception 'import_format' using errcode = 'P0001';
  end if;
  v_format := (p_data ->> 'format')::integer;
  if v_format < 2 or v_format > 10 then
    raise exception 'import_format' using errcode = 'P0001';
  end if;
  foreach v_chave in array array[
    'clients', 'service_items', 'quotes', 'quote_items', 'quote_events', 'orders', 'receivables', 'payments',
    'collection_events', 'expenses', 'expense_payments', 'income_entries', 'ledger_entries', 'tasks', 'alert_states',
    'saved_answers', 'revenue_goals', 'appointments', 'branches'
  ] loop
    if p_data ? v_chave and jsonb_typeof(p_data -> v_chave) <> 'array' then
      raise exception 'import_format' using errcode = 'P0001';
    end if;
  end loop;
  v_empresa := coalesce(p_data -> 'company', '{}'::jsonb);
  if jsonb_typeof(v_empresa) <> 'object' then
    raise exception 'import_format' using errcode = 'P0001';
  end if;

  -- Só em empresa vazia.
  if exists (select 1 from public.clients where company_id = p_company)
     or exists (select 1 from public.service_items where company_id = p_company)
     or exists (select 1 from public.quotes where company_id = p_company)
     or exists (select 1 from public.expenses where company_id = p_company)
     or exists (select 1 from public.tasks where company_id = p_company)
     or exists (select 1 from public.alert_states where company_id = p_company)
     or exists (select 1 from public.saved_answers where company_id = p_company)
     or exists (select 1 from public.revenue_goals where company_id = p_company)
     or exists (select 1 from public.appointments where company_id = p_company)
     or exists (select 1 from public.branches where company_id = p_company)
     or exists (select 1 from public.income_entries where company_id = p_company)
     or exists (select 1 from public.ledger_entries where company_id = p_company) then
    raise exception 'company_not_empty' using errcode = 'P0001';
  end if;

  begin
    insert into public.clients (id, company_id, name, email, phone, notes, status, created_at, updated_at)
    select r.id, p_company, r.name, r.email, r.phone, r.notes, r.status, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.clients, coalesce(p_data -> 'clients', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('clients', v_n);

    insert into public.service_items (id, company_id, name, unit, base_price_cents, est_cost_cents, status, created_at, updated_at)
    select r.id, p_company, r.name, r.unit, r.base_price_cents, r.est_cost_cents, r.status, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.service_items, coalesce(p_data -> 'service_items', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('service_items', v_n);

    insert into public.quotes (
      id, company_id, client_id, number, status, valid_until, terms, notes, discount_kind, discount_value,
      subtotal_cents, discount_cents, total_cents, sent_at, decided_at, created_at, updated_at
    )
    select r.id, p_company, r.client_id, r.number, r.status, r.valid_until, r.terms, r.notes, r.discount_kind,
           r.discount_value, r.subtotal_cents, r.discount_cents, r.total_cents, r.sent_at, r.decided_at,
           r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.quotes, coalesce(p_data -> 'quotes', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('quotes', v_n);

    insert into public.quote_items (id, company_id, quote_id, position, description, quantity_milli, unit_price_cents)
    select r.id, p_company, r.quote_id, r.position, r.description, r.quantity_milli, r.unit_price_cents
      from jsonb_populate_recordset(null::public.quote_items, coalesce(p_data -> 'quote_items', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('quote_items', v_n);

    insert into public.quote_events (id, company_id, quote_id, from_status, to_status, actor_user_id, at, confirmed, system)
    overriding system value
    select r.id, p_company, r.quote_id, r.from_status, r.to_status, r.actor_user_id, r.at, r.confirmed, r.system
      from jsonb_populate_recordset(null::public.quote_events, coalesce(p_data -> 'quote_events', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('quote_events', v_n);

    insert into public.orders (id, company_id, quote_id, client_id, status, total_cents, approved_at, canceled_at)
    select r.id, p_company, r.quote_id, r.client_id, r.status, r.total_cents, r.approved_at, r.canceled_at
      from jsonb_populate_recordset(null::public.orders, coalesce(p_data -> 'orders', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('orders', v_n);

    insert into public.receivables (id, company_id, order_id, number, kind, due_date, amount_cents, canceled_at, created_at)
    select r.id, p_company, r.order_id, r.number, r.kind, r.due_date, r.amount_cents, r.canceled_at, r.created_at
      from jsonb_populate_recordset(null::public.receivables, coalesce(p_data -> 'receivables', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('receivables', v_n);

    insert into public.payments (
      id, seq, company_id, receivable_id, kind, amount_cents, paid_on, method, note, reverses_payment_id, created_by, created_at
    )
    overriding system value
    select r.id, r.seq, p_company, r.receivable_id, r.kind, r.amount_cents, r.paid_on, r.method, r.note,
           r.reverses_payment_id, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.payments, coalesce(p_data -> 'payments', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('payments', v_n);

    insert into public.collection_events (id, seq, company_id, receivable_id, state, scheduled_for, note, created_by, created_at)
    overriding system value
    select r.id, r.seq, p_company, r.receivable_id, r.state, r.scheduled_for, r.note, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.collection_events, coalesce(p_data -> 'collection_events', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('collection_events', v_n);

    insert into public.expenses (id, company_id, description, category, amount_cents, due_date, notes, canceled_at, created_at, updated_at)
    select r.id, p_company, r.description, r.category, r.amount_cents, r.due_date, r.notes, r.canceled_at, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.expenses, coalesce(p_data -> 'expenses', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('expenses', v_n);

    insert into public.expense_payments (
      id, seq, company_id, expense_id, kind, amount_cents, paid_on, method, note, reverses_payment_id, created_by, created_at
    )
    overriding system value
    select r.id, r.seq, p_company, r.expense_id, r.kind, r.amount_cents, r.paid_on, r.method, r.note,
           r.reverses_payment_id, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.expense_payments, coalesce(p_data -> 'expense_payments', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('expense_payments', v_n);

    insert into public.income_entries (
      id, seq, company_id, kind, category, description, amount_cents, received_on, client_id, note, reverses_id,
      created_by, created_at
    )
    overriding system value
    select r.id, r.seq, p_company, r.kind, r.category, r.description, r.amount_cents, r.received_on, r.client_id, r.note,
           r.reverses_id, r.created_by, r.created_at
      from jsonb_populate_recordset(null::public.income_entries, coalesce(p_data -> 'income_entries', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('income_entries', v_n);

    insert into public.ledger_entries (id, company_id, payment_id, expense_payment_id, income_entry_id, direction, amount_cents, occurred_on, created_at)
    select r.id, p_company, r.payment_id, r.expense_payment_id, r.income_entry_id, r.direction, r.amount_cents, r.occurred_on, r.created_at
      from jsonb_populate_recordset(null::public.ledger_entries, coalesce(p_data -> 'ledger_entries', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('ledger_entries', v_n);

    insert into public.tasks (id, company_id, title, due_date, client_id, notes, done_at, created_at, updated_at)
    select r.id, p_company, r.title, r.due_date, r.client_id, r.notes, r.done_at, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.tasks, coalesce(p_data -> 'tasks', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('tasks', v_n);

    insert into public.alert_states (company_id, alert_key, state, until, reason, updated_at)
    select p_company, r.alert_key, r.state, r.until, r.reason, r.updated_at
      from jsonb_populate_recordset(null::public.alert_states, coalesce(p_data -> 'alert_states', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('alert_states', v_n);

    insert into public.saved_answers (id, company_id, question, answer, source_kind, source_label, verified_on, review_on, created_at, updated_at)
    select r.id, p_company, r.question, r.answer, r.source_kind, r.source_label, r.verified_on, r.review_on, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.saved_answers, coalesce(p_data -> 'saved_answers', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('saved_answers', v_n);

    insert into public.revenue_goals (id, company_id, period_kind, period_start, target_cents, created_at, updated_at)
    select r.id, p_company, r.period_kind, r.period_start, r.target_cents, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.revenue_goals, coalesce(p_data -> 'revenue_goals', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('revenue_goals', v_n);

    insert into public.appointments (id, company_id, title, on_date, start_time, end_time, client_id, place, notes, status, created_at, updated_at)
    select r.id, p_company, r.title, r.on_date, r.start_time, r.end_time, r.client_id, r.place, r.notes, r.status, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.appointments, coalesce(p_data -> 'appointments', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('appointments', v_n);

    insert into public.branches (id, company_id, branch_user_id, name, nickname, manager_name, contact, notes, status, closed_on, created_at, updated_at)
    select r.id, p_company, r.branch_user_id, r.name, r.nickname, r.manager_name, r.contact, r.notes, r.status, r.closed_on, r.created_at, r.updated_at
      from jsonb_populate_recordset(null::public.branches, coalesce(p_data -> 'branches', '[]'::jsonb)) r;
    get diagnostics v_n = row_count;
    v_counts := v_counts || jsonb_build_object('branches', v_n);

    -- Os contadores seguem de onde a cópia parou (próximo número de orçamento, próximos ids das tabelas com sequência).
    update public.companies set
      quote_seq = greatest(
        quote_seq,
        coalesce((select max(q.number) from public.quotes q where q.company_id = p_company), 0),
        case when (v_empresa ->> 'quote_seq') ~ '^[0-9]{1,9}$' then (v_empresa ->> 'quote_seq')::integer else 0 end
      ),
      opening_balance_cents = case when (v_empresa ->> 'opening_balance_cents') ~ '^-?[0-9]{1,13}$'
                                   then (v_empresa ->> 'opening_balance_cents')::bigint end,
      opening_balance_on = case when (v_empresa ->> 'opening_balance_cents') ~ '^-?[0-9]{1,13}$'
                                then (v_empresa ->> 'opening_balance_on')::date end
    where id = p_company;
    perform setval(pg_get_serial_sequence('public.quote_events', 'id'), greatest((select coalesce(max(id), 0) from public.quote_events), 1),
                   (select count(*) > 0 from public.quote_events));
    perform setval(pg_get_serial_sequence('public.payments', 'seq'), greatest((select coalesce(max(seq), 0) from public.payments), 1),
                   (select count(*) > 0 from public.payments));
    perform setval(pg_get_serial_sequence('public.expense_payments', 'seq'), greatest((select coalesce(max(seq), 0) from public.expense_payments), 1),
                   (select count(*) > 0 from public.expense_payments));
    perform setval(pg_get_serial_sequence('public.collection_events', 'seq'), greatest((select coalesce(max(seq), 0) from public.collection_events), 1),
                   (select count(*) > 0 from public.collection_events));
    perform setval(pg_get_serial_sequence('public.income_entries', 'seq'), greatest((select coalesce(max(seq), 0) from public.income_entries), 1),
                   (select count(*) > 0 from public.income_entries));
  exception
    when unique_violation then
      -- Mesmo id já existe (neste aparelho ou em outra empresa): a cópia não pode entrar. Sem detalhes do que existe.
      raise exception 'import_conflict' using errcode = 'P0001';
    when foreign_key_violation then
      raise exception 'import_invalid' using errcode = 'P0001', detail = 'references';
    when check_violation or not_null_violation or invalid_text_representation or datetime_field_overflow
         or invalid_datetime_format or numeric_value_out_of_range or invalid_parameter_value or string_data_right_truncation then
      raise exception 'import_invalid' using errcode = 'P0001', detail = 'values';
  end;

  -- ---------- O dinheiro tem de fechar (as mesmas regras que as funções do servidor garantem ao gravar) ----------

  -- Orçamento: subtotal = soma das linhas; desconto e total conforme o tipo de desconto.
  if exists (
    select 1
      from public.quotes q
      left join lateral (select coalesce(sum(i.line_total_cents), 0) as soma from public.quote_items i where i.quote_id = q.id) s on true
     where q.company_id = p_company
       and (q.subtotal_cents <> s.soma
            or q.total_cents <> q.subtotal_cents - q.discount_cents
            or q.discount_cents <> case q.discount_kind
                                     when 'none' then 0
                                     when 'percent' then public.money_percent(q.subtotal_cents, q.discount_value::integer)
                                     else q.discount_value end)
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'quotes';
  end if;

  -- Orçamento aprovado tem serviço; serviço só existe para orçamento aprovado ou cancelado depois de aprovado.
  if exists (select 1 from public.quotes q where q.company_id = p_company and q.status = 'aprovado'
              and not exists (select 1 from public.orders o where o.quote_id = q.id))
     or exists (select 1 from public.orders o join public.quotes q on q.id = o.quote_id
                 where o.company_id = p_company and q.status not in ('aprovado', 'cancelado')) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'orders';
  end if;

  -- Serviço: as parcelas somam o total.
  if exists (
    select 1 from public.orders o
     where o.company_id = p_company
       and o.total_cents <> (select coalesce(sum(r.amount_cents), 0) from public.receivables r where r.order_id = o.id)
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'receivables';
  end if;

  -- Parcela: o pago líquido nunca passa do valor nem fica negativo; e o estorno tem a mesma data ou depois do pagamento.
  if exists (
    select 1 from public.receivables r
     where r.company_id = p_company
       and (select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
              from public.payments p where p.receivable_id = r.id) not between 0 and r.amount_cents
  ) or exists (
    select 1 from public.payments e join public.payments o on o.id = e.reverses_payment_id
     where e.company_id = p_company and e.paid_on < o.paid_on
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'payments';
  end if;

  -- Despesa: paga por inteiro ou não paga (líquido de estornos).
  if exists (
    select 1 from public.expenses e
     where e.company_id = p_company
       and (select coalesce(sum(case p.kind when 'pagamento' then p.amount_cents else -p.amount_cents end), 0)
              from public.expense_payments p where p.expense_id = e.id) not in (0, e.amount_cents)
  ) or exists (
    select 1 from public.expense_payments e join public.expense_payments o on o.id = e.reverses_payment_id
     where e.company_id = p_company and e.paid_on < o.paid_on
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'expense_payments';
  end if;

  -- Receita avulsa: o estorno tem a mesma data ou depois da receita (o valor e a categoria já são conferidos pela chave).
  if exists (
    select 1 from public.income_entries e join public.income_entries o on o.id = e.reverses_id
     where e.company_id = p_company and e.received_on < o.received_on
  ) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'income_entries';
  end if;

  -- Caixa: cada pagamento (de cliente ou de despesa) e cada receita avulsa tem exatamente um lançamento.
  if exists (select 1 from public.payments p where p.company_id = p_company
              and not exists (select 1 from public.ledger_entries l where l.payment_id = p.id))
     or exists (select 1 from public.expense_payments p where p.company_id = p_company
                 and not exists (select 1 from public.ledger_entries l where l.expense_payment_id = p.id))
     or exists (select 1 from public.income_entries i where i.company_id = p_company
                 and not exists (select 1 from public.ledger_entries l where l.income_entry_id = i.id)) then
    raise exception 'import_inconsistent' using errcode = 'P0001', detail = 'ledger_entries';
  end if;

  perform public.audit_log(p_company, 'company.import', 'company', p_company, v_counts);
  return v_counts;
end
$$;

-- ---------- "Tem dados?" e contagem para o diagnóstico (agora com as filiais) ----------

create or replace function public.has_business_data() returns boolean
language sql stable set search_path = ''
as $$
  select exists (select 1 from public.clients) or exists (select 1 from public.service_items)
      or exists (select 1 from public.quotes) or exists (select 1 from public.expenses)
      or exists (select 1 from public.tasks) or exists (select 1 from public.alert_states)
      or exists (select 1 from public.ledger_entries) or exists (select 1 from public.income_entries)
      or exists (select 1 from public.saved_answers) or exists (select 1 from public.revenue_goals)
      or exists (select 1 from public.appointments)
      or exists (select 1 from public.branches)
$$;

-- Quantos registros há em cada tabela de negócio (para o diagnóstico: só números, nunca conteúdo).
create or replace function public.table_counts() returns jsonb
language sql stable set search_path = ''
as $$
  select jsonb_build_array(
    jsonb_build_object('tabela', 'clients', 'n', (select count(*)::int from public.clients)),
    jsonb_build_object('tabela', 'service_items', 'n', (select count(*)::int from public.service_items)),
    jsonb_build_object('tabela', 'quotes', 'n', (select count(*)::int from public.quotes)),
    jsonb_build_object('tabela', 'receivables', 'n', (select count(*)::int from public.receivables)),
    jsonb_build_object('tabela', 'payments', 'n', (select count(*)::int from public.payments)),
    jsonb_build_object('tabela', 'collection_events', 'n', (select count(*)::int from public.collection_events)),
    jsonb_build_object('tabela', 'expenses', 'n', (select count(*)::int from public.expenses)),
    jsonb_build_object('tabela', 'expense_payments', 'n', (select count(*)::int from public.expense_payments)),
    jsonb_build_object('tabela', 'income_entries', 'n', (select count(*)::int from public.income_entries)),
    jsonb_build_object('tabela', 'ledger_entries', 'n', (select count(*)::int from public.ledger_entries)),
    jsonb_build_object('tabela', 'tasks', 'n', (select count(*)::int from public.tasks)),
    jsonb_build_object('tabela', 'alert_states', 'n', (select count(*)::int from public.alert_states)),
    jsonb_build_object('tabela', 'saved_answers', 'n', (select count(*)::int from public.saved_answers)),
    jsonb_build_object('tabela', 'revenue_goals', 'n', (select count(*)::int from public.revenue_goals)),
    jsonb_build_object('tabela', 'appointments', 'n', (select count(*)::int from public.appointments)),
    jsonb_build_object('tabela', 'branches', 'n', (select count(*)::int from public.branches))
  )
$$;

-- ---------- Permissões ----------

revoke all on function public.save_branch(uuid, uuid, text, text, text, text, text) from public, anon;
revoke all on function public.set_branch_status(uuid, text, date) from public, anon;
revoke all on function public.list_branches() from public, anon;
grant execute on function public.save_branch(uuid, uuid, text, text, text, text, text) to authenticated;
grant execute on function public.set_branch_status(uuid, text, date) to authenticated;
grant execute on function public.list_branches() to authenticated;
`,ue=`-- AMBIENTE DE COMPATIBILIDADE COM O SUPABASE. Imita o que o Supabase já fornece (esquema auth, papéis,
-- auth.uid() e os privilégios padrão), para as migrações rodarem no PGlite sem Docker e sem conta.
-- Usado pelos testes (supabase/tests) e pelo modo local do app (src/data, banco dentro do navegador).
-- NUNCA entra em supabase/migrations e NUNCA deve ser aplicado num projeto Supabase de verdade.

create role anon nologin;
create role authenticated nologin;
create role service_role nologin bypassrls;

create schema auth;

create table auth.users (
  id uuid primary key default gen_random_uuid(),
  email text unique
);

-- Igual ao do Supabase: lê o usuário do token (aqui, definido pelos testes).
create function auth.uid() returns uuid
language sql stable
as $$
  select nullif(
    coalesce(
      current_setting('request.jwt.claim.sub', true),
      (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub')
    ),
    ''
  )::uuid
$$;

grant usage on schema public to anon, authenticated, service_role;
grant usage on schema auth to anon, authenticated, service_role;
grant execute on function auth.uid() to anon, authenticated, service_role;

-- O Supabase concede TUDO nos objetos novos do schema public aos papéis da API por padrão.
-- Imitar isso é essencial: sem os "revoke" explícitos das migrações, o banco real ficaria aberto,
-- e os testes precisam enxergar esse risco.
alter default privileges for role postgres in schema public grant all on tables to anon, authenticated, service_role;
alter default privileges for role postgres in schema public grant all on functions to anon, authenticated, service_role;
alter default privileges for role postgres in schema public grant all on sequences to anon, authenticated, service_role;
`,de=Object.assign({"../../supabase/migrations/0001_nucleo.sql":L,"../../supabase/migrations/0002_auditoria.sql":R,"../../supabase/migrations/0003_empresa.sql":z,"../../supabase/migrations/0004_regras_dinheiro.sql":B,"../../supabase/migrations/0005_clientes_servicos.sql":V,"../../supabase/migrations/0006_orcamentos.sql":H,"../../supabase/migrations/0007_recebimentos.sql":U,"../../supabase/migrations/0008_despesas.sql":W,"../../supabase/migrations/0009_saldo_e_recorrencia.sql":G,"../../supabase/migrations/0010_tarefas.sql":K,"../../supabase/migrations/0011_restaurar.sql":q,"../../supabase/migrations/0012_rls_rapida.sql":ie,"../../supabase/migrations/0013_leituras_como_funcoes.sql":J,"../../supabase/migrations/0014_respostas_guardadas.sql":Y,"../../supabase/migrations/0015_cobranca.sql":ae,"../../supabase/migrations/0016_receita_avulsa.sql":oe,"../../supabase/migrations/0017_metas.sql":se,"../../supabase/migrations/0018_agenda.sql":ce,"../../supabase/migrations/0019_filiais.sql":le}),fe=ue,pe=Object.entries(de).map(([e,t])=>({nome:e.split(`/`).pop(),sql:t})).sort((e,t)=>e.nome.localeCompare(t.nome)),me=`0000_compat.sql`;async function he(e,t,n){await e.exec(`
    create schema if not exists nap;
    create table if not exists nap.migrations (
      name text primary key,
      applied_at timestamptz not null default now()
    );
  `);let r=new Set((await e.query(`select name from nap.migrations`)).rows.map(e=>e.name)),i=[],a=[{nome:me,sql:t},...[...n].sort((e,t)=>e.nome.localeCompare(t.nome))];for(let t of a)r.has(t.nome)||(await e.transaction(async e=>{await e.exec(t.sql),await e.query(`insert into nap.migrations (name) values ($1)`,[t.nome])}),i.push(t.nome));return i}async function ge(e,t){await he(e,fe,pe),await e.query(`insert into auth.users (id, email) values ($1, $2) on conflict do nothing`,[t,`local@dispositivo`]),await e.query(`select public.run_retention()`),await D(e)}var X=`00000000-0000-4000-8000-00000000a001`;async function _e(e=`nap-banco-local`){typeof navigator<`u`&&`locks`in navigator&&await new Promise((t,n)=>{navigator.locks.request(e,{ifAvailable:!0},e=>{if(!e)n(new i(`banco_em_uso`,`O NAP já está aberto em outra aba ou janela deste navegador. Feche a outra e recarregue esta página.`));else return t(),new Promise(()=>{})})})}var ve=`Estúdio Exemplo (demonstração)`,Z=`example.com`,Q=(e,t=0)=>e*100+t;async function $(e,t,r,i){return await e.quotes.transition(t,`enviado`),await e.quotes.approve(t,{downPaymentCents:r.sinal?.cents??0,downPaymentDueDate:r.sinal?n(i,r.sinal.venceEmDias):void 0,installmentCount:r.parcelas,firstDueDate:r.parcelas>0?n(i,r.primeiraEmDias):void 0}),[...await e.receivables.list({quoteId:t})].sort((e,t)=>e.number-t.number)}async function ye(e,t){await e.company.create(ve),await e.company.setOpeningBalance({cents:Q(3e3),on:n(t,-150)});let r=[`Ana`,`Bruno`,`Carla`,`Diego`,`Elisa`,`Fábio`,`Gabriela`,`Henrique`],i={};for(let[t,n]of r.entries())i[n]=(await e.clients.create({name:`${n} Exemplo`,email:`${n.toLowerCase().replace(`á`,`a`)}@${Z}`,phone:`(00) 90000-000${t+1}`,notes:t===0?`Cliente de exemplo: prefere receber a proposta por e-mail.`:void 0})).id;await e.clients.setStatus(i.Henrique,`arquivado`);let a=[[`Logotipo`,`un`,Q(950),Q(320)],[`Identidade visual completa`,`un`,Q(3200),Q(1100)],[`Site institucional`,`un`,Q(5400),Q(1900)],[`Manutenção mensal do site`,`mês`,Q(300),Q(80)],[`Consultoria de marca`,`hora`,Q(180),Q(40)],[`Cartões de visita (milheiro)`,`un`,Q(260),Q(150)]];for(let[t,n,r,i]of a)await e.services.create({name:t,unit:n,basePriceCents:r,estCostCents:i});let o=(r,a,o,s)=>e.quotes.save({clientId:i[r],validUntil:n(t,o),terms:`Pagamento conforme o plano combinado. Valores sujeitos a alteração se o escopo mudar.`,discount:s?{kind:`percent`,bps:s.bps}:{kind:`none`},items:a.map(([e,t,n])=>({description:e,quantityMilli:t,unitPriceCents:n}))}),s=async(r,i)=>e.receivables.registerPayment({receivableId:r.id,amountCents:i.cents??r.amountCents-r.paidCents,paidOn:n(t,-i.diasAtras),method:i.forma??`pix`}),c=await $(e,await o(`Ana`,[[`Identidade visual completa`,1e3,Q(3200)]],15),{sinal:{cents:Q(1200),venceEmDias:-80},parcelas:2,primeiraEmDias:-50},t);await s(c[0],{diasAtras:80}),await s(c[1],{diasAtras:50});let l=await e.receivables.registerPayment({receivableId:c[2].id,amountCents:Q(900),paidOn:n(t,-21),method:`pix`});await e.receivables.reversePayment(l,{paidOn:n(t,-20),note:`Valor lançado errado`}),await s(c[2],{diasAtras:19});let u=await $(e,await o(`Bruno`,[[`Site institucional`,1e3,Q(5400)],[`Cartões de visita (milheiro)`,2e3,Q(260)]],20,{bps:500}),{sinal:{cents:Q(1800),venceEmDias:-45},parcelas:3,primeiraEmDias:-15},t);await s(u[0],{diasAtras:45}),await s(u[1],{diasAtras:14,cents:Q(600)});let d=await $(e,await o(`Carla`,[[`Manutenção mensal do site`,6e3,Q(300)]],10),{parcelas:1,primeiraEmDias:-6},t);await e.collection.setState({receivableId:d[0].id,state:`mensagem_preparada`}),await e.collection.setState({receivableId:d[0].id,state:`enviada`,note:`Mandei a cobrança no WhatsApp (exemplo).`});let f=await $(e,await o(`Diego`,[[`Logotipo`,1e3,Q(950)]],12),{parcelas:1,primeiraEmDias:10},t);await e.collection.setState({receivableId:f[0].id,state:`agendada`,scheduledFor:n(t,8)}),await e.quotes.transition(await o(`Elisa`,[[`Site institucional`,1e3,Q(2400)]],12),`enviado`),await e.quotes.transition(await o(`Fábio`,[[`Consultoria de marca`,4e3,Q(180)],[`Logotipo`,1e3,Q(60)]],9),`enviado`),await o(`Gabriela`,[[`Cartões de visita (milheiro)`,3e3,Q(260)]],15);let p=await o(`Bruno`,[[`Consultoria de marca`,2e3,Q(180)]],15);await e.quotes.transition(p,`enviado`),await e.quotes.transition(p,`recusado`);let m=[[`Aluguel da sala`,`aluguel`,Q(1200)],[`Programa de design`,`servicos`,Q(89,90)],[`DAS (imposto do MEI)`,`impostos`,Q(71)]];for(let[r,i,a]of m)await e.expenses.saveSeries({description:r,category:i,amountCents:a,dueDate:n(t,-150)},6);await e.expenses.pay(await e.expenses.save(void 0,{description:`Papelaria e materiais`,category:`materiais`,amountCents:Q(142,30),dueDate:n(t,-40)}),{paidOn:n(t,-40),method:`cartao`}),await e.expenses.pay(await e.expenses.save(void 0,{description:`Retirada do mês`,category:`retirada`,amountCents:Q(1500),dueDate:n(t,-25)}),{paidOn:n(t,-25),method:`pix`}),await e.expenses.save(void 0,{description:`Renovação do domínio do site`,category:`servicos`,amountCents:Q(40),dueDate:n(t,20)});for(let r of await e.expenses.list())r.dueDate<n(t,-3)&&r.paidCents===0&&await e.expenses.pay(r.id,{paidOn:r.dueDate,method:`transferencia`});let h=[[`Venda de 10 cartões avulsos`,`venda`,Q(240),-70],[`Ajuste rápido em arquivo de impressão`,`servico_avulso`,Q(180),-42],[`Venda de adesivos`,`venda`,Q(95),-21],[`Aula particular de design`,`outros`,Q(60),-9]];for(let[r,i,a,o]of h)await e.incomes.save({description:r,category:i,amountCents:a,receivedOn:n(t,o),confirmed:!0});let g=await e.incomes.save({description:`Venda lançada em duplicidade`,category:`venda`,amountCents:Q(150),receivedOn:n(t,-30),confirmed:!0});await e.incomes.reverse(g,{paidOn:n(t,-29),note:`Lancei duas vezes`}),await e.tasks.save(void 0,{title:`Ligar para a Carla sobre a parcela atrasada`,dueDate:n(t,1),clientId:i.Carla,notes:`Exemplo de lembrete ligado a um cliente.`}),await e.tasks.save(void 0,{title:`Enviar o orçamento revisado para a Elisa`,dueDate:n(t,3),clientId:i.Elisa});let _=await e.tasks.save(void 0,{title:`Conferir as despesas do mês passado`,dueDate:n(t,-5)});await e.tasks.setDone(_,!0)}var be=`nap-banco-demo`;async function xe(n){let o;try{await _e(be);let{PGlite:i}=await t(async()=>{let{PGlite:e}=await import(`./dist-B6FANgyq.js`);return{PGlite:e}},__vite__mapDeps([0,1,2]),import.meta.url);o=new i(`idb://${s}`),await o.waitReady,await ge(o,X);let c=I(o,X,()=>{});if(!await c.company.current())try{await ye(c,e(new Date))}catch(e){throw await o.close().catch(()=>void 0),o=void 0,await r(),e}let l=o;return a(()=>l.close()),I(o,X,n)}catch(e){throw e instanceof i?e:new i(`indisponivel`,`Não foi possível preparar a demonstração neste navegador. Ele pode estar em modo privado ou sem espaço. Recarregue a página para tentar de novo.`,void 0,e)}}export{xe as abrirDadosDaDemonstracao};