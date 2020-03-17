const { remote } = require('electron');

    let win = remote.getCurrentWindow();

    let close_btn = document.getElementById('close-btn');
    let min_btn = document.getElementById('min-btn'); 

    min_btn.addEventListener('click', function () {
        win.minimize();
    });

    close_btn.addEventListener('click', function () {
        win.close();
    });