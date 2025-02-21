export function showTodayInfo(rezimas) {
  const today = new Date();
  const info = {
    savaites_diena: [
      "Sekmadienis",
      "Pirmadienis",
      "Antradienis",
      "Trečiadienis",
      "Ketvirtadienis",
      "Penktadienis",
      "Šeštadienis",
    ][today.getDay()],
    menuo: [
      "Sausis",
      "Vasaris",
      "Kovas",
      "Balandis",
      "Gegužė",
      "Birželis",
      "Liepa",
      "Rugpjūtis",
      "Rugsėjis",
      "Spalis",
      "Lapkritis",
      "Gruodis",
    ][today.getMonth()],
    menesio_diena: today.getDate(),
  };

  if (info[rezimas] !== undefined) {
    console.log(`Šiandien - ${info[rezimas]}`);
  } else {
    console.log(
      "Prašome pasirinkti vieną iš pateiktų rėžimų: savaites_diena, menuo, menesio_diena"
    );
  }
}
