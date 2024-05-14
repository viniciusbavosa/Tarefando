export default function setTimeStamps() {
  const date = new Date();
  const localDate = new Intl.DateTimeFormat('pt-BR', { 
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'America/Sao_Paulo' 
  }).format(date);
  return localDate;
}