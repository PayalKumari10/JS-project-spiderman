// selecting Element By Tag Name
//*************************************//

// let smallImages = document.getElementsByClassName("oldImg");

// for (let i = 0; i < smallImages.length; i++) {
//   smallImages[i].src = "Assets/img/Spiderman.png";
//   console.log(`value of image no. $(i) is changed`);
// }

//Query Seletors//
// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelectorAll("div a"));

//************************************************/
//Manipulating Style

// let links = document.querySelectorAll(".box a");

// for (links of links) {
//   links.style.color = "red"; // inline style
// }
// for (let i = 0; i < links.length; i++) {
//   links[i].style.color = "yellow";
// }

//Practice Qs
//Qs1

let para1 = document.createElement("p");
para1.innerText = "Hey I'm red!";
document.querySelector("body").append(para1);

para1.classList.add("red");

//*********************************************/
//Qs2
let h3 = document.createElement("h3");
h3.innerText = "Hey I'm blue h3!";
document.querySelector("body").append(h3);

h3.classList.add("blue");

//***************************************************/
//Qs3
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "i am in a div";
para2.innerText = "Me Too!";

div.append(h1);
div.append(para2);
div.classList.add("box");
document.querySelector("body").append(div);




//****************************************************************/

