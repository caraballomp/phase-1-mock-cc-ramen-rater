// write your code here
const ramenAPI = "http://localhost:3000/ramens";
const ramenMenu = document.getElementById("ramen-menu");
const ramenDetail =document.getElementByName("ramen-detail")
const commentdisplay= document.getElementByName("comment-display")


fetch(ramenAPI)
.then((res) => res.json())
.then(displayRamenImages)
.catch(console.err);

document.getElementById('new-ramen').addEventListener('submit', addNewRamen);