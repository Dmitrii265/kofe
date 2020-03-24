<!doctype html>
<html lang="ru">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">

    <title>Кофе-машина</title>
  </head>
  <body>
    <div class="container">
      <div class="row coffee-machine">
        <div class="col-6 coffee-list">
          <div class="row flex-column p-3">
            <div class="coffee-item col">
              <img src="img/americano.png" alt="">
              <span>Американо - 50 руб.</span>
            </div>
            <div class="coffee-item col">
              <img src="img/cappuccino.png" alt="">
              <span>Капучино - 78 руб.</span>
            </div>
            <div class="coffee-item col">
              <img src="img/espresso.png" alt="">
              <span>Эспрессо - 21 руб.</span>
            </div>
            <div class="coffee-item col">
              <img src="img/latte.jpg" alt="">
              <span>Латтэ - 115 руб.</span>
            </div>
          </div>
        </div>
        <div class="col-6 coffee-oper">
          <div class="row p-3">
            <div class="col-6">
              <div class="display">
                <p class="diplay-text">Выберите кофе</p>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
                </div>
              </div>
            </div>
            <div class="col-6"></div>
          </div>
        </div>
      </div>
    </div>
