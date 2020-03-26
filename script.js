"use strict"

let balance = document.querySelector(".balance");
let displayText = document.querySelector(".display-text");/*недстаточно средств в окошке*/

let progressBar = document.querySelector(".progress-bar");//
let coffeeCup = document.querySelector(".coffee-cup img");//
let coffeeStatus = "waiting"; /*
"cooking", "reddy"*/


function buyCoffee(name, cost, elem) {//
   if (coffeeStatus != "waiting") {//
    return;//
  } //
  
  let afterBuyValue = +balance.value - cost;//
  if ( (balance.value - cost) < 0 || Number.isNaN( afterBuyValue)) {/*недостаточно средств...*/
    balance.style.border = "2px solid red";/*красный рамку в красный при недостатке средств*/
    balance.style.backgroundColor = "pink";/*красит в розовый фон при недостатке средств*/
    changeDisplayText("Недостаточно средств");//
    return;//
  }//
  balance.style.border = "none";//
  balance.style.backgroundColor = "white";/* при достатке назад в белый*/
  balance.value = (+balance.value - cost).toFixed(2);/*обрезка 2 цифр после точки*/
  cookCoffee(name, elem);//
}
function cookCoffee(name, elem) {//
  coffeeStatus = "cooking";//
  changeDisplayText(" Ваш " + name + " готовится ");// 
  
  let cupImg = elem.querySelector("img");//
  let cupSrc = cupImg.getAttribute("src");//
  coffeeCup.setAttribute("src", cupSrc);
  coffeeCup.style.opacity = "0%";//
  coffeeCup.classList.remove("d-none");//
  //coffeeCup.classList.add ("")//добавить класс//
  //coffeeCup.classList.remove("d-none");//убрать класс//
  //coffeeCup.classList.toggle("")//вкл/выкл класс//
  //coffeeCup.classList.contains ("d-none")//содержит ли// 
  
  let readyPercent = 0;//
  let cookingInterval = setInterval(() => {//
    readyPercent++//
    progressBar.style.width = readyPercent + "%";//
    coffeeCup.style.opacity = readyPercent + "%";//
    if (readyPercent == 100) {//
      coffeeStatus = "ready";//
      changeDisplayText(" Ваш " + name + " готов ! ");//
      coffeeCup.style.cursor = "pointer";//
      clearInterval(cookingInterval);//
    }//
  }, 100);//
}//


function changeDisplayText(text) {//
  displayText.innerHTML = "<span>"+text+"</span>";//
}//
 