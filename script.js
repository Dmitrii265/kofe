"use strict"

let balance = document.querySelector(".balance");
let displayText = document.querySelector(".display-text");/*недстаточно средств в окошке*/

let progressBar = document.querySelector(".progress-bar");//
let coffeeCup = document.querySelector(".coffee-cup img");//
let coffeeStatus = "waiting"; /*
"cooking", "reddy"*/
coffeeCup.onclick = takeCoffee;// повесить событие как свойсво, -забрать кофе первый вариант, ниже добавление

/*coffeeCup.addEventListener("click", takeCoffee, par1, par2)//-второй вариант
coffeeCup.addEventListener("click", takeCoffee, par1, par2)
coffeeCup.addEventListener("click", takeCoffee, par1, par2)
coffeeCup.addEventListener("click", takeCoffee, par1, par2)

coffeeCup.addEventListener("click", buyCoffee, "Американо", 21)*/


/*coffeeCup.onclick = function() {
  takeCoffee();
}*/ // 
/*coffeeCup.onclick = function() {
  takeCoffee(this);
}*/ // 2 вариант забрать кофе

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

function takeCoffee() {
  if (coffeeStatus != "ready") {
    return;
  }// что б не бралось кофе, когда готовится  
  coffeeStatus = "waiting";
  coffeeCup.classList.add("d-none");//забрать кофе--- добавление к верхнему
  coffeeCup.style.cursor = "auto";
  progressBar.style.width = "0%";
  changeDisplayText("Выберите кофе");// когда взял кофе появится выберите кофе
}

  
  
function changeDisplayText(text) {//
  displayText.innerHTML = "<span>"+text+"</span>";//
}//


//-------------------------Drag` n Drop тащи и клади----------//перемещение купюр
let bills = document.querySelectorAll(".wallet img");

for(let i = 0; i < bills.length; i++) {
  bills[i].onmousedown = takeMoney;
  
}
function takeMoney() {
  event.preventDefault();// убираем призраки перетаскивания, изначально заложенные в браузере
  let bill = this;
  let billCost = bill.getAttribute("cost");
 
  
  bill.style.position = "absolute";
  bill.style.transform = "rotate(90deg)";// поворот купюр
  
  let billCoords = bill.getBoundingClientRect();
  let billWidth = billCoords.width;
  let billHeight = billCoords.height;//длинна и высота
  
  /*console.log(billWidth, billHeight);
  console.log(event.clientX, event.clientY);*///-----ДЛЯ ПРОСМОТРА В КОНСОЛИ------//X Y координаты
  
  bill.style.top = event.clientY - billWidth/2 + "px";// купюра встает по центру курсора 
  bill.style.left = event.clientX - billHeight/2 + "px";// купюра встает по центру курсора 
  
  window.onmousemove = (evtnt) => {
   bill.style.top = event.clientY - billWidth/2 + "px";
   bill.style.left = event.clientX - billHeight/2 + "px";
  };
  
  bill. onmouseup = dropMoney;
}

function dropMoney() {
  window.onmousemove = null;
  
}



 