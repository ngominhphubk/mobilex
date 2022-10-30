var domain = "";
var loadElement = {
  init() {
    this.loadHeader();
    this.loadFooter();
    console.log('load xong')
  },
  loadHeader() {
    var header = $("#header");
    fetch(`${domain}/loadElement/header.html`)
      .then((response) => response.text())
      .then((html) => (header.innerHTML = html))
      .catch((_) => console.log("header cant load"));
  },
  loadFooter() {
    var footer = $("#footer");
    fetch(`${domain}/loadElement/footer.html`)
      .then((response) => response.text())
      .then((html) => (footer.innerHTML = html))
      .catch((_) => console.log("footer cant load"));
  },
};
loadElement.init()
// window.onscroll = function() {
//     if (window.scrollY > 300) {
//       header.classList.add('show');
//       console.log('da them')
//     } else {
//       header.classList.remove('show');
//       console.log('da go')
//     }
//   }