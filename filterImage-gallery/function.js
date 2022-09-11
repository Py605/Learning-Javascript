var logoImage = [
  {
    id: 1,
    src: "images/image2.webp"
  },
  {
    id: 2,
    src: "images/image2.webp"
  },
  {
    id: 3,
    src: "images/image2.webp"
  }
];

var webImage = [
  {
    id: 1,
    src: "images/image4.webp"
  },
  {
    id: 2,
    src: "images/image4.webp"
  },
  {
    id: 3,
    src: "images/image4.webp"
  }
];

var mobileImage = [
  {
    id: 1,
    src: "images/table.webp"
  },
  {
    id: 2,
    src: "images/table.webp"
  },
  {
    id: 3,
    src: "images/table.webp"
  }
];

var allImage = [
  {
    id: 1,
    src: "images/image2.webp"
  },
  {
    id: 2,
    src: "images/image3.webp"
  },
  {
    id: 3,
    src: "images/image4.webp"
  },
  {
    id: 4,
    src: "images/table.webp"
  }
];


var buttons = document.getElementsByClassName('btn');
// var allBtn = document.getElementById('all');

for(let i = 0; i < buttons.length; i++){
  buttons[0].addEventListener('click',function(){
    document.getElementsByTagName('img')[0].src = "images/table.png";
  });
}

function filterSelection(string){
  if(string === "logo"){
    // Show logo images....
  }
  else if(string === "web"){
    // Show web images....
  }
  else if(string === "mobile"){
    // Show mobile images....
  }
  else{
    // show all images...
  }
}

