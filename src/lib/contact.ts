export function contactHref(interest?: string, plan?: string) {
  const params = new URLSearchParams();
  if (interest) params.set("servico", interest);
  if (plan) params.set("plano", plan);
  const query = params.toString();
  return query ? `/?${query}#contato` : "/#contato";
}
