const itineraryList = document.getElementById("itinerary-list");
const itinerary = JSON.parse(localStorage.getItem("itinerary")) || [];

if (itinerary.length === 0) {
  itineraryList.innerHTML = "<p>Itinerarul tău este gol.</p>";
} else {
  itinerary.forEach(dest => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = dest.color;

    card.innerHTML = `
      <h4>${dest.name}</h4>
      <p>${dest.description}</p>
      <button onclick="removeFromItinerary(${dest.id})">Șterge din itinerar</button>
    `;
    itineraryList.appendChild(card);
  });
}

function removeFromItinerary(id) {
  let itinerary = JSON.parse(localStorage.getItem("itinerary")) || [];
  itinerary = itinerary.filter(item => item.id !== id);
  localStorage.setItem("itinerary", JSON.stringify(itinerary));
  location.reload();
}
