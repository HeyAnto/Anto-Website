function heure() {
  const date = new Date();

  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Europe/Paris",
  };

  const heureFr = new Intl.DateTimeFormat("fr-FR", options).format(date);

  document.getElementById("heure").innerHTML = heureFr;

  setTimeout(heure, 1000);
}

heure();
