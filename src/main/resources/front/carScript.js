var queryString = window.location.search;
var searchParams = new URLSearchParams(queryString);
var paramValue = searchParams.get('id');

// Получение значения id из куки
var id;
let isLoggedIn
var cookies = document.cookie;
var cookieArray = cookies.split(";");

for(var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    var parts = cookie.split("=");
    var name = parts[0].trim();
    var value = parts[1];
    if(name === "id") {
        id = value;
        break;
    }
    if(name === "isLoggedIn") {
        isLoggedIn = value;
        break;
    }
}

var url = 'http://localhost:8080/car/' + paramValue;
fetch(url)
    .then(res=>res.json())
    .then(data=>{
        if(data.carCharacteristics.abs == true){
            data.carCharacteristics.abs = 'есть';
        }
        if(data.carCharacteristics.cruiseControl == true){
            data.carCharacteristics.cruiseControl = 'есть';
        }
        document.body.insertAdjacentHTML(
            'afterbegin',
            `
                <div class="container">
                    <div class="car-grid">
                        <div class="car-card">
                            <img src="images/${data.photo}.png" alt="Car 1" class="car-img">
                            <h3>${data.mark} ${data.model}</h3>
                            <h4>${data.cost} Рублей</h4>                        
                            <button type="submit" id="button" onclick="goToNewOrder(${data.id})">Заказать</button>
                        </div>
                        <div class="car-card">
                            <h5>Год выпуска: ${data.carCharacteristics.releaseYear}</h5>                   
                            <h5>Цвет: ${data.carCharacteristics.color}</h5>
                            <h5>Максимальная скорость: ${data.carCharacteristics.topSpeed}</h5>
                            <h5>Тип КПП: ${data.carCharacteristics.transmission}</h5>
                            <h5>Привод: ${data.carCharacteristics.drive}</h5>
                            <h5>Круиз-контроль: ${data.carCharacteristics.cruiseControl}</h5>
                            <h5>ABS: ${data.carCharacteristics.abs}</h5>
                            <h5>Вес: ${data.carCharacteristics.weight} кг</h5>
                        </div>
                    </div>
                </div>
            `
        );

        console.log(data)
        if(document.cookie.includes("isLoggedIn=true")){
            console.log('в true')
            document.body.insertAdjacentHTML(
                'afterbegin',
                `
                    <nav id="navBar">
                        <a href="main.html">Главная</a>
                        <a href="javascript:void(0)" onclick="goToOrder(${id})">Заказы</a>
                    </nav>
                `
            )
        } else {
            console.log('в false')
            document.body.insertAdjacentHTML(
                'afterbegin',
                `
                    <nav id="navBar">
                        <a href="main.html">Главная</a>
                        <a href="login.html">Вход</a>
                        <a href="registration.html">Регистрация</a>
                    </nav>
                `
            );
        }
    })
    .catch(error => {
        console.error(error.message);
    });

function goToNewOrder(id){
    console.log(isLoggedIn)
    if (document.cookie.includes("isLoggedIn=true")) {
        let str = 'http://localhost:63342/CarsForSell/src/main/resources/front/newOrder.html?id=' + id;
        let url = new URL(str);
        window.location.href = url.href;
    }else{
        let str = 'http://localhost:63342/CarsForSell/src/main/resources/front/login.html';
        let url = new URL(str);
        window.location.href = url.href;
    }
}

function goToOrder(id){
    let str = 'http://localhost:63342/CarsForSell/src/main/resources/front/order.html?id='+id
    let url=new URL(str);
    console.log(str)
    window.location.href=url.href;
}
