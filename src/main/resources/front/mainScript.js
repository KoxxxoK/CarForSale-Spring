var id; // объявляем переменную id на уровне глобальной области видимости

fetch('http://localhost:8080/car')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // Создаем строку для хранения HTML-кода всех элементов автомобилей
        let carElementsHTML = '';

        // Добавляем HTML-код для каждого элемента автомобиля в строку
        data.forEach(car => {
            carElementsHTML += setElement(car);
        });

        // Вставляем все элементы автомобилей в div с классом "car-grid"
        document.body.insertAdjacentHTML(
            'afterbegin',
            `
                <div class="container">
                    <div class="car-grid">
                        ${carElementsHTML}
                    </div>
                </div>
            `
        );

        // Получение значения isLoggedIn из куки
        var isLoggedIn;
        var cookies = document.cookie;
        var cookieArray = cookies.split(";");

        for(var i = 0; i < cookieArray.length; i++) {
            var cookie = cookieArray[i];
            var parts = cookie.split("=");
            var name = parts[0].trim();
            var value = parts[1];
            if(name === "isLoggedIn") {
                isLoggedIn = value;
            }
            if(name === "id") {
                id = value;
            }
        }

        if(isLoggedIn === "true"){
            console.log('в true')
            document.body.insertAdjacentHTML(
                'afterbegin',
                `
                <nav id="navBar">
                    <a href="#" onclick="goToOrder(${id})">Заказы</a>
                    <a href="#" onclick="goToMain()">Выйти</a>
                </nav>
            `
            )
        } else {
            console.log('в false')
            document.body.insertAdjacentHTML(
                'afterbegin',
                `
                <nav id="navBar">
                    <a href="#">Главная</a>
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

function setElement(car){
    // Возвращаем HTML-код элемента автомобиля
    return `
        <div class="car-card">
            <img src="images/${car.photo}.png" alt="Car 1" class="car-img">
            <h3>${car.mark} ${car.model}</h3>
            <h4>${car.cost} Рублей</h4>
            <button type="submit" id="button" onclick="goToCar(${car.id})">Выбрать</button>
        </div>
    `;
}

function goToCar(id){
    let str='http://localhost:63342/CarsForSell/src/main/resources/front/car.html?id='
    str +=id
    let url=new URL(str);
    window.location.href=url.href;

}

function goToMain(){
    document.cookie = "isLoggedIn=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    document.cookie = "id=0; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

    let url=new URL('http://localhost:63342/CarsForSell/src/main/resources/front/main.html');
    window.location.href=url.href;

}

function goToOrder(id){
    let str = 'http://localhost:63342/CarsForSell/src/main/resources/front/order.html?id=' + id
    let url=new URL(str);
    window.location.href=url.href;

}
