import restaurantImage from "./restaurant-image.jpg";

export default function initLoad() {
  const content = document.getElementById("content");
  const img = document.createElement("img");
  img.src = restaurantImage;
  img.alt = "Cozy restaurant interior";
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Hikari!";
  const paragraph = document.createElement("p");
  paragraph.textContent =
    "At Hikari, we believe every meal should brighten your day. Enjoy delicious dishes in a warm and welcoming atmosphere, where great food meets good vibes.";
  content.append(img, heading, paragraph);
}
