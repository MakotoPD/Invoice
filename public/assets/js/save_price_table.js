let btn_next = document.getElementById('btn_next');
let inp2_elem = document.getElementsByClassName('inp2');
let inp3_elem = document.getElementsByClassName('inp3');

const Meters_List = []

const Price_List = []

btn_next.addEventListener('click', () =>{
    for (let i = 0; i < inp2_elem.length; i++) {

        Meters_List.push(inp2_elem[i].value);

        let meters = path.join(__dirname, '/json_files/meters.json');
        let meters_data = JSON.stringify((Meters_List));

        fs.writeFileSync(meters, meters_data, 'utf-8');
    };

    console.log('Meters: ', Meters_List);


    for (let i = 0; i < inp3_elem.length; i++) {

        Price_List.push(inp3_elem[i].value);

        let price = path.join(__dirname, '/json_files/price.json');
        let price_data = JSON.stringify((Price_List));

        fs.writeFileSync(price, price_data, 'utf-8');
    };

    console.log('Price: ', Price_List);
});