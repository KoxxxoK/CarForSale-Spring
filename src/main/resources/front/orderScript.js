var queryString = window.location.search;
var searchParams = new URLSearchParams(queryString);
var paramValue = searchParams.get('id');

var url = 'http://localhost:8080/orders/' + paramValue;

fetch(url)
    .then(res => res.json())
    .then(data => {
        // Проверяем, что данные являются массивом и не пустыми
        if (Array.isArray(data) && data.length > 0) {
            // Итерируем по каждому элементу массива данных
            data.forEach(orderData => {
                console.log(orderData);
                document.body.insertAdjacentHTML(
                    'afterbegin',
                    `
                    
                        <div class="container">
                            <div class="car-grid">
                                <div class="car-card">
                                    <img src="images/${orderData.cars.photo}.png" alt="Car 1" class="car-img">
                                    <h3>${orderData.cars.mark} ${orderData.cars.model}</h3>                        
                                    <h4>${orderData.adress}</h4>
                                    <h4>${orderData.status}</h4>
                                    <h3>${orderData.cars.cost} Рублей</h3>                        
                                </div>               
                            </div>
                        </div>
                    `
                );
            });
        } else {
            console.log("Данные не являются массивом или массив пуст.");
        }
        document.body.insertAdjacentHTML(
            `afterbegin`,
            `<nav id="navBar">
            <a href="main.html">Главная</a>
                    </nav>`
        )

    })
    .catch(error => {
        console.error("Ошибка получения данных:", error);
    });
