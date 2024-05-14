export default function displayCurrentDate() {
  const todayDate = new Date();
  
  const day = todayDate.getDate();
  const month = todayDate.getMonth(); //getMonth() goes from 0 to 11
  let monthFormated = ""
  const year = todayDate.getFullYear();


  switch (month) {
    case 0:
      monthFormated = 'janeiro';
      break;
    case 1:
      monthFormated = 'fevereiro';
      break;
    case 2:
      monthFormated = 'março';
      break;
    case 3:
      monthFormated = 'abril';
      break;
    case 4:
      monthFormated = 'maio';
      break;
    case 5:
      monthFormated = 'junho';
      break;
    case 6:
      monthFormated = 'julho';
      break;
    case 7:
      monthFormated = 'agosto';
      break;
    case 8:
      monthFormated = 'setembro';
      break;
    case 9:
      monthFormated = 'outubro';
      break;
    case 10:
      monthFormated = 'novembro';
      break;
    case 11:
      monthFormated = 'dezembro';
      break;
    default:
      console.log('Erro ao buscar mês');
      break;
  }

  const dateFormated = `${day} de ${monthFormated} de ${year}`;

  return dateFormated;
}