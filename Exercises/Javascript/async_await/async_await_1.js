function caricamentoDati() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Questi sono i dati ottenuti dalla fonte asincrona.");
    }, 2000);
  });
};

async function ottieniDati() {
    try {
        const data = await caricamentoDati();
        console.log(data);
    } catch {
        console.log(`Errore caricamento dati!`);
    }
};

ottieniDati();