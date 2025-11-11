// Generează secțiunile de destinații
for (const [category, items] of Object.entries(destinations)) {
  const section = document.getElementById(category);
  section.innerHTML = `<h3>${category.charAt(0).toUpperCase() + category.slice(1)}</h3>`;
  const container = document.createElement("div");
  container.classList.add("card-container");

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

  section.appendChild(container);
}

// Adaugă o destinație în itinerar
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
