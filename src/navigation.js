export default function Navigation() {
  let htmlContainer = document.getElementById("content");

  let navul = document.createElement("ul");
  let navli = document.createElement("li");

  navli.textContent = "Home";
  navli.textContent = "About";

  navul.appendChild(navli);
  htmlContainer.appendChild(navul);
}
