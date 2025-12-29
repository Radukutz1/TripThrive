/* ---------- Initializarea paginii si randarea categoriilor ---------- */
window.onload = () => {
  // La incarcarea paginii, se populeaza grid-urile pentru fiecare tip de destinatie
  renderDestinations("mare", "mareGrid");
  renderDestinations("oras", "orasGrid");
  renderDestinations("munte", "munteGrid");
};

/* ---------- Functie pentru generarea cardurilor de destinatie ---------- */
function renderDestinations(type, containerId) {
  // Selectarea containerului HTML corespunzator ID-ului primit
  const container = document.getElementById(containerId);
  // Preluarea elementelor din obiectul global "destinations" in functie de categorie
  const items = destinations[type];

  // Parcurgerea fiecarui obiect destinatie pentru a crea interfata vizuala
  items.forEach(dest => {
    const card = document.createElement("div");
    card.classList.add("card");
    
    // Setarea culorii de fundal definita in obiectul destinatiei
    card.style.backgroundColor = dest.color;

    // Construirea structurii interne a cardului si transformarea obiectului in string pentru functia de adaugare
    card.innerHTML = `
      <h4>${dest.name}</h4>
      <p>${dest.description}</p>
      <button onclick='addToItinerary(${JSON.stringify(dest)})'>Adauga in itinerar</button>
    `;
    
    // Introducerea cardului in containerul corespunzator din DOM
    container.appendChild(card);
  });
}

/* ---------- Functie pentru salvarea unei destinatii in lista ---------- */
function addToItinerary(destination) {
  // Preluarea itinerarului existent din localStorage sau crearea unui tablou nou
  let itinerary = JSON.parse(localStorage.getItem("itinerary")) || [];
  
  // Verificarea daca destinatia a fost deja adaugata anterior (dupa ID)
  if (itinerary.some(item => item.id === destination.id)) {
    alert("Aceasta destinatie este deja in itinerar!");
    return;
  }
  
  // Adaugarea noii destinatii in lista si actualizarea stocarii locale
  itinerary.push(destination);
  localStorage.setItem("itinerary", JSON.stringify(itinerary));
  
  // Notificarea utilizatorului ca operatiunea a reusit
  alert(`${destination.name} a fost adaugata in itinerar!`);
}