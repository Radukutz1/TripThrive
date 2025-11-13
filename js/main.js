window.onload = () => {
  renderDestinations("mare", "mareGrid");
  renderDestinations("oras", "orasGrid");
  renderDestinations("munte", "munteGrid");
};

function renderDestinations(type, containerId) {
  const container = document.getElementById(containerId);
  const items = destinations[type];

  items.forEach(dest => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = dest.color;

    card.innerHTML = `
      <h4>${dest.name}</h4>
      <p>${dest.description}</p>
      <button onclick='addToItinerary(${JSON.stringify(dest)})'>Adaugă în itinerar</button>
    `;
    container.appendChild(card);
  });
}

function addToItinerary(destination) {
  let itinerary = JSON.parse(localStorage.getItem("itinerary")) || [];
  if (itinerary.some(item => item.id === destination.id)) {
    alert("Această destinație este deja în itinerar!");
    return;
  }
  itinerary.push(destination);
  localStorage.setItem("itinerary", JSON.stringify(itinerary));
  alert(`${destination.name} a fost adăugată în itinerar!`);
}
