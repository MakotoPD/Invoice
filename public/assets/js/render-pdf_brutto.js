const os = require('os');
const fs = require('fs');

const win = remote.getCurrentWindow()

const print_btn = document.getElementById('print-pdf')


console.log(os.homedir());


print_btn.addEventListener('click', e => {
    let al = document.getElementById('btn_cont')
    
        al.textContent = ''; 

    win.webContents.printToPDF({
        marginsType: 0,
        printBackground: false,
        printSelectionOnly: false,
        landscape: false
    }).then(data => {
        fs.writeFile(os.homedir()+'/Wycena_brutto.pdf', data, (error) => {
          if (error) throw error
          console.log('Write PDF successfully.')
          alert('Plik został zapisany w katalogu domowych.')
          alert('Pamiętaj aby zmienić nazwę pliku, ponieważ każda wycena będzie zapisywała się pod tą nazwą!')
        })
      }).catch(error => {
        console.log(error)
      })
})