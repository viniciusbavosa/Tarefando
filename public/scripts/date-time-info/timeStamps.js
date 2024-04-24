export default function setTimeStamps() {
  const date = new Date();
  const localDate = new Intl.DateTimeFormat('pt-BR', { 
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Sao_Paulo' 
  }).format(date)
  return localDate;
}