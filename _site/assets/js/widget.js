const widgetCards = document.querySelectorAll(".site-card");
const widget = document.querySelector(".widget");

widgetCards[0].classList.add("active");
const currentSiteId = widgetCards[0].dataset.siteId;

widgetCards.forEach((card) => {
  card.onclick = () => {
    widgetCards.forEach((c) => c.classList.remove("active"));
    card.classList.add("active");
    widget.children[0].src = `https://como-berlin.de/embed/${card.dataset.siteId}/`;
  };
});
