export default function Navigation() {
  let htmlContainer = document.getElementById("content");

  let list = ["Home", "About", "Menu", "Contact"];

  function createNavlinks(array) {
    let navul = document.createElement("ul");
    for (let link of array) {
      let item = document.createElement("li");
      let aTag = document.createElement("a");
      aTag.setAttribute("href", "#");
      item.appendChild(aTag);
      aTag.appendChild(document.createTextNode(link));
      navul.appendChild(item);
    }
    return navul;
  }

  htmlContainer.appendChild(createNavlinks(list));
}
