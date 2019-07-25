window.console = window.console || function (t) { };
    if (document.location.search.match(/type=embed/gi)) {
      window.parent.postMessage("resize", "*");
    }

var chracter = "";
function select(){
  var animal = document.getElementsByName("animal")[0].id;
  alert(animal);

  switch(animal) {
    case "seal": character = "seal";
    break;
    case "turtle": character = "turtle";
    break;
    case "shrimp": character = "shrimp";
    break;
    default: break;
  }
}
