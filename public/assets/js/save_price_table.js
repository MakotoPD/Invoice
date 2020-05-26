let btn_next = document.getElementById('btn_next');
let inp2_elem = document.getElementsByClassName('inp2');
let inp3_elem = document.getElementsByClassName('inp3');

const Meters_List = []

const Price_List = []

btn_next.addEventListener('click', () =>{
    for (let i = 0; i < inp2_elem.length; i++) {

        Meters_List.push(inp2_elem[i].value);

    };

    store.set('meters', Meters_List)

    console.log('Meters: ', Meters_List);


    for (let i = 0; i < inp3_elem.length; i++) {

        Price_List.push(inp3_elem[i].value);

    };

    store.set('price', Price_List)

    console.log('Price: ', Price_List);
});