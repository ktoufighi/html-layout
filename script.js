const nav = document.querySelector("#button");
const topOfbutton = nav.offsetTop;

function fixNav() {
  console.log(topOfbutton);
}

window.addEventListener('scroll', fixNav);
