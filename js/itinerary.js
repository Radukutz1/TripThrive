window.onload = () => {
  // Selectarea elementului HTML unde va fi afisata lista de destinatii
  const itineraryList = document.getElementById("itineraryList");
  
  // Preluarea datelor din localStorage sau initializarea cu un tablou gol daca nu exista date
  const itinerary = JSON.parse(localStorage.getItem("itinerary")) || [];

  // Verificare daca itinerarul este gol si afisarea unui mesaj corespunzator
  if (itinerary.length === 0) {
    itineraryList.innerHTML = "<p>Inca nu ai adaugat nicio destinatie.</p>";
    return;
  }

  // Iterarea prin fiecare destinatie si crearea elementelor vizuale (carduri)
  itinerary.forEach(dest => {
    const card = document.createElement("div");
    card.classList.add("card");
    
    // Aplicarea culorii de fundal specifice destinatiei
    card.style.backgroundColor = dest.color;

    // Inserarea continutului HTML pentru card, inclusiv butonul de stergere
    card.innerHTML = `
      <h4>${dest.name}</h4>
      <p>${dest.description}</p>
      <button onclick="removeFromItinerary(${dest.id})">Sterge din itinerar</button>
    `;
    
    // Adaugarea cardului creat in lista principala din pagina
    itineraryList.appendChild(card);
  });
};

/* ---------- Functie pentru eliminarea unei destinatii ---------- */
function removeFromItinerary(id) {
  // Preluarea listei actuale din stocarea locala
  let itinerary = JSON.parse(localStorage.getItem("itinerary")) || [];
  
  // Filtrarea listei pentru a elimina elementul care are ID-ul primit ca parametru
  itinerary = itinerary.filter(item => item.id !== id);
  
  // Salvarea noii liste actualizate inapoi in localStorage
  localStorage.setItem("itinerary", JSON.stringify(itinerary));
  
  // Reincarcarea paginii pentru a reflecta schimbarile in interfata
  location.reload();
}