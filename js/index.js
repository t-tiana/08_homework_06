const STYLE = {
    color1: `#a90b33;`,
    color2: `#810ba9;`,
    color3: `#0ba932;`,
    center: `<style> body{text-align: center;} </style>`,
    bold: `font-weight: bold;`,
    verticalSpace: '</br>',
    verticalSpaceAmount: 3
}
//навчилася новій фічі - деструктурізації :)
const {color1, color2, color3, center, verticalSpace, verticalSpaceAmount} = STYLE;

function newLine() {
    document.write(`${verticalSpace}`);
}

function space() {
    for (let i = 0; i <= verticalSpaceAmount; i++) {
        newLine()
    }
}


document.write(`${center}`);

space()


// 1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:
//     Функція яка виведе всю інформацію про тварину.
//     Функція яка виведе за скільки тварина зможе подолати 1000 км (врахуйте що тварина може рухатись не більше 12 годин у день).
//     Функція яка зможе змінити назву тварини на більш детальну.

const DISTANCE = 1000;

const ANIMAL = {
    name: 'Anna\'s hummingbird',
    weight: 0.004,
    age: 2,
    speedAverage: 98.28,
    latin: 'Calypte anna',

    getInformation() {
        document.write(`animal: <span style = 'color:${color2}'>${this.name}</span>
                       ${verticalSpace}
                       age: <span style = 'color:${color2}'>${this.age}</span>
                       ${verticalSpace}
                       weight: <span style = 'color:${color2}'>${this.weight}</span>
                       ${verticalSpace}
                       average speed: <span style = 'color:${color2}'>${this.speedAverage}</span> km/h
                     `);
        newLine()
    },

    getTimeforDistance(val) {
        const MAXHOURSPERDAY = 12;
        const MINTIME = val / this.speedAverage;
        const ROUNDONEDAY = Math.floor(MINTIME / MAXHOURSPERDAY);
        const MESSAGE = 'This animal is able to cut through 1000 km in';
        if (MINTIME > MAXHOURSPERDAY) {
            const POSSIBLETIME = `${ROUNDONEDAY} day(s)`;
            document.write(`${MESSAGE} <span style = 'color:${color2}'>${POSSIBLETIME}</span>`);
        } else {
            const HOURSTIME = Math.floor(MINTIME);
            const POSSIBLETIME = `${HOURSTIME} h`
            document.write(`${MESSAGE} <span style = 'color:${color2}'>${POSSIBLETIME}</span>`);
        }
    },
    changeName() {
        this.name = this.latin;
    },
};


ANIMAL.getInformation();

newLine()

ANIMAL.getTimeforDistance(DISTANCE);

newLine()

ANIMAL.changeName();

newLine()

ANIMAL.getInformation();

space()

// 2. Створіть обєкт який має у собі 2 довжини сторін фігури.
//    Додайте методи які будуть робити наступне:
//    рахувати площу фігури, периметр фігури,
//    зроблять фігуру 3-д,
//    зададуть назву фігури,
//    переведуть значення з сантиметрів у метри.

const FIGURE = {
    width: 12,
    height: 17,

    getArea() {
        const AREA = this.width * this.height;
        document.write(`The area of the figure: <span style = 'color:${color2}'>${AREA}</span>cm`);

    },

    getPerimeter() {
        const PERIMETER = this.width + this.height;
        document.write(`The perimeter of the figure: <span style = 'color:${color2}'>${PERIMETER}</span>cm`);
    },

    transformTo3d(depth) {
        this.depth = depth;
        document.write(`Now your figure is 3-dimensional: x:  <span style = 'color:${color2}'>${this.width}</span>cm, 
                       y: <span style = 'color:${color2}'>${this.height}</span>cm,
                       z: <span style = 'color:${color2}'> ${this.depth}</span>cm`);
    },

    setName(name) {
        this.name = name;
        document.write(`The figure is called: <span style = 'color:${color2}'>${this.name}</span>`);
    },

    convertCmToM() {
        this.height /= 100;
        this.width /= 100;
        this.depth /= 100;
        document.write(`In meters: x:  <span style = 'color:${color2}'>${this.width}</span>m, 
                       y: <span style = 'color:${color2}'>${this.height}</span>m,
                       z: <span style = 'color:${color2}'> ${this.depth}</span>m`);
    },
};


FIGURE.getArea();

newLine()

FIGURE.getPerimeter();

newLine()

FIGURE.transformTo3d(15);

newLine()
;
FIGURE.setName('Default figure');

newLine()

FIGURE.convertCmToM();

space()

// 3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )
// {
//
//     tomato: {
//
//             count: 5,
//             price: 50,
//             buy: false,
//             outOfstore: true
//
//     } , ...
//
// }
//   Виводимо список покупок:
//     спочатку ті які є в магазині потім яких немає,
//     Виводимо список покупок які ми купили.
//     Додаємо функцію яка дозволить купити продукт.
//     Додаємо функцію яка просумує всі зроблені покупки і виведе результат (не забуваємо що є значення кількості та ціни за одиницю товару)
//     Додаємо можливість збільшувати кількість товару.
//     Додаємо можливість зменшувати кількість товару (менше 0 бути не може).

const PRODUCTSLIST = {
    tomato: {count: 6, pricePerOne: 5, buy: false, outOfStore: false},
    banana: {count: 7, pricePerOne: 4, buy: false, outOfStore: true},
    apple: {count: 10, pricePerOne: 2.4, buy: false, outOfStore: false},
    tangerine: {count: 8, pricePerOne: 3, buy: true, outOfStore: false},
    avocado: {count: 2, pricePerOne: 40.99, buy: true, outOfStore: false},
    coconut: {count: 1, pricePerOne: 21.99, buy: true, outOfStore: false},
    orange: {count: 5, pricePerOne: 5.8, buy: true, outOfStore: false}
};
const INSTOCK = [];
const OUTOFSTOCK = [];
const BOUGHTITEMS = [];

const AVAILABILITY = (list) => {
    for (key in list) {
        list[key].outOfStore ? OUTOFSTOCK.push(key) : INSTOCK.push(key);
    }
    const INSTOCKOUTOUT = INSTOCK.join(', ')
    const OUTOFSTOCKOUTPUT = OUTOFSTOCK.join(', ')
    document.write(`Items in stock: <span style = 'color:${color2}'>${INSTOCKOUTOUT}</span>`);
    newLine()
    document.write(`Items out of stock: <span style = 'color:${color1}'>${OUTOFSTOCKOUTPUT}</span>`);
}

const BOUGHT = (list) => {
    for (key in list) {
        list[key].buy ? BOUGHTITEMS.push(key) : null;
    }
    const BOUGHTITEMSOUTPUT = BOUGHTITEMS.join(', ')
    document.write(`Bought items: <span style = 'color:${color3}'>${BOUGHTITEMSOUTPUT}</span>`);

}

const BUYITEM = (item) => {
    !item.outOfStore ? item.buy = true : alert('Вибачте, бананів немає! :)'); //  alert('Sorry, this item is out of stock.')
};

const COUNTTOTAL = (list) => {
    let buyTotal = 0;
    let total = buyTotal.toFixed(2);
    for (key in list) {
       if (list[key].buy) {
           buyTotal += list[key].pricePerOne * list[key].count;
          total = buyTotal.toFixed(2);
       }
    }
    document.write(`Total: <span style = 'color:${color3}'>${total}</span> uah`);
};

const ADDCOUNT = (item) => {
    !item.outOfStore  ? item.count++ : item.count;
};

const REDUCECOUNT = (item) => {
    !item.outOfStore && item.count !== 1 ? item.count-- : item.count;
};

AVAILABILITY(PRODUCTSLIST);

newLine()

BUYITEM(PRODUCTSLIST.apple);

ADDCOUNT(PRODUCTSLIST.tangerine)

REDUCECOUNT(PRODUCTSLIST.orange);
REDUCECOUNT(PRODUCTSLIST.orange);


BOUGHT(PRODUCTSLIST);

newLine()

COUNTTOTAL(PRODUCTSLIST);
console.table(PRODUCTSLIST);

space()

// 4. Задана колекція [{name: 'Yura', age: 55, hobby: ['films', 'games', 'hiking'], type: 'Admin'}, {}, {},{}].
//    Вивести всіх адмінів.
//    Вивести середній вік усіх працівників.
//    Вивести тільки унікальні хоббі працівників.

const USERS = [
    {
        name: `Yura`,
        age: 55,
        hobby: [`films`, `games`, `serials`],
        type: `Admin`
    },

    {
        name: `Taras`,
        age: 19,
        hobby: [`football`, `hiking`],
        type: `User`
    },

    {
        name: `Oleg`,
        age: 25,
        hobby: [`pinpong`, `football`, `hiking`],
        type: `User`
    },

    {
        name: `Taras`,
        age: 21,
        hobby: [`films`, `games`],
        type: `Admin`
    }
];

getAdmins(USERS);
newLine()
getAverageAge(USERS);
newLine()
getHobbies(USERS);
space()

//    Вивести всіх адмінів.
function getAdmins(collection) {
    const ADMINSOBJECTS = collection.filter((element) => element.type === 'Admin');
    const ADMINSARRAY = ADMINSOBJECTS.map((element) => element.name);

    const ADMINSOUTPUT = ADMINSARRAY.join(', ');

    document.write(`Our Admins: <span style = 'color:${color1}'>${ADMINSOUTPUT}</span>`);
}

//    Вивести середній вік усіх працівників.
function getAverageAge(collection) {
    const SUM = collection
        .map((element) => element.age)
        .reduce((a, b) => a + b, 0);

    const AVERAGE = SUM / collection.length;

    document.write(`The average age of users is <span style = 'color:${color1}'>${AVERAGE}</span> yrs.`);
}

//    Вивести тільки унікальні хоббі працівників.
function getHobbies(collection) {
    const HOBBIESARRAYOFARRAYS = collection.map((collection) => collection.hobby);

    const HOBBIESARRAY = [].concat.apply([], HOBBIESARRAYOFARRAYS);

    const NOREPEATHOBBIES = Array.from(new Set(HOBBIESARRAY));

    const NOREPEATHOBBIESOUTPUT = NOREPEATHOBBIES.join(', ');

// Влaсне, рішення задачі:
    const GETUNIQUEVALUES = (someArray) =>
        someArray.filter((item, index) => {
            someArray.splice(index, 1);
            const UNIQUE = !someArray.includes(item);
            someArray.splice(index, 0, item);
            return UNIQUE;
        });

    const UNIQUEHOBBYVALUESARRAY = GETUNIQUEVALUES(HOBBIESARRAY);

    const UNIQUEHOBBYVALUESOUTPUT = UNIQUEHOBBYVALUESARRAY.join(', ');
// кінець рішення

    function getNamesOfUniqueHobbies(collection) {
        const ARRAYOFNAMES = [];
        collection.forEach((element, index) => {
            let arrayOfHobbies = collection[index].hobby;
            let checkNames = UNIQUEHOBBYVALUESARRAY.some(
                (val) => arrayOfHobbies.indexOf(val) !== -1
            );
            if (checkNames) {
                const NAMEOFUNIQUEHOBBIES = collection[index].name;
                ARRAYOFNAMES.push(NAMEOFUNIQUEHOBBIES);
            }
        });
        const NAMESOUTPUT = ARRAYOFNAMES.join(', ');

        document.write(`Names of users with unique hobbies: <span style = 'color:${color1}'>${NAMESOUTPUT}</span>.`);
    }

    document.write(`The list of all hobbies: <span style = 'color:${color1}'>${NOREPEATHOBBIESOUTPUT}</span>.`);

    newLine()

    document.write(`Unique hobbies of all users: <span style = 'color:${color3}'>${UNIQUEHOBBYVALUESOUTPUT}</span>.`);

    newLine()

    getNamesOfUniqueHobbies(USERS);
}






