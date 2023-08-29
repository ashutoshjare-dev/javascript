let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};

var num = ["Monday","Tuesday", "Wednesday"]

// added for in loop logic
for (i in num){
  console.log(i)
  console.log(num[i])
}

// Anynomus Function
// These functions have no name and are supposed to be used only once
// These functions have advantage of being defined directly in the parameter sets when calling other functions. Thus, we don't need a formal defination
// example for different ways functions can be passed as an argument

// 1st way -- passing normal function as a parameter
function add(n1,n2){
  return n1 + n2;
}
function doCalc(n1,n2,add){
  return add(n1,n2);
}

console.log(doCalc(3,4,add))


// 2nd way -- using passing anynomus funcion as a parameter
console.log(
  doCalc(2, 3, function (n1, n2) {
    return n1 + n2;
  })
);
