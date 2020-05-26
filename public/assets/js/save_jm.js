
let gen_btn = document.getElementById('btn_next');
let inp = document.getElementsByTagName('input');

let listaa = []

    gen_btn.addEventListener('click', () =>{
        for (let i = 0; i < inp.length; i++) {
            inp[i].setAttribute("name", inp[i].value);
            listaa.push(inp[i].name);
        };
        store.set('jm', listaa)
    });
