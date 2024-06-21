document.addEventListener("DOMContentLoaded", function() {
    var queryString = window.location.search;
    var searchParams = new URLSearchParams(queryString);
    var paramValue = searchParams.get('id');

    // Получение значения id из куки
    var cookies = document.cookie;
    var cookieArray = cookies.split(";");

    var id;
    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        var parts = cookie.split("=");
        var name = parts[0].trim();
        var value = parts[1];
        if(name === "id") { // Проверяем имя куки
            id = value;
            break; // Можно остановить цикл, если значение найдено
        }
    }

    document.body.insertAdjacentHTML(
        `afterbegin`,
        `
            <div class="container">
                <div class="car-grid">
                    <div class="car-card">
                        <input id="adress" type="text" class="textbox" placeholder="Введите адрес">
                        <button onclick="goToMain()" type="submit">Оформить заказ</button>
                    </div>
                </div>
            </div>
        `
    )

    if (document.cookie.includes("isLoggedIn=true")) {
        console.log('в true')
        document.body.insertAdjacentHTML(
            'afterbegin',
            `
                <nav id="navBar">
                    <a href="main.html">Главная</a>
                    <a href="order.html">Заказы</a>
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
});

function goToMain(){
    let adress = document.getElementById('adress').value; // Получаем значение адреса
    const paramValue = new URLSearchParams(window.location.search).get('id'); // Получаем параметр id из URL
    // Получение значения id из куки
    let id;
    const cookies = document.cookie;
    const cookieArray = cookies.split(";");

    for(let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i];
        const parts = cookie.split("=");
        const name = parts[0].trim();
        const value = parts[1];
        if(name === "id") { // Проверяем имя куки
            id = value;
            break; // Можно остановить цикл, если значение найдено
        }
    }

    const data = {
        adress: adress,
        status: "в доставке",
        cars: {
            id: paramValue
        },
        customers:{
            id: id
        }
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch("http://localhost:8080/orders/newOrder", requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data=>{
            // Обработка ответа сервера
        })
        .catch(error => {
            console.error(error.message);
        });

    alert('Заказ оформлен'); // Показываем сообщение после отправки данных

    let url = new URL('http://localhost:63342/CarsForSell/src/main/resources/front/main.html');
    window.location.href = url.href;
}
