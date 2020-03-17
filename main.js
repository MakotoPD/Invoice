const { app, BrowserWindow, Menu } = require('electron')
const shell = require('electron').shell


function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    minWidth: 799,
    height: 600,
    minHeight: 500,
    hasShadow: true,
    webPreferences: {
      nodeIntegration: true,
      nativeWindowOpen: true,
    },
    icon: __dirname +'/assets/img/icons/icon64.png'
  })
  
  win.webContents.openDevTools()
  win.loadFile('index.html') 

  function createAboutWindow () {
    const about_win = new BrowserWindow({
      width: 400,
      height: 200,
      alwaysOnTop: true,
      frame: false,
      transparent: false,
      maximizable: false,
      hasShadow: true,
      webPreferences: {
        nodeIntegration: true
      },
      icon: __dirname +'/assets/img/icons/icon64.png'
    })


    about_win.loadFile('about_program.html')

}

 


  let menu = Menu.buildFromTemplate([
    {
        label: 'Menu',
        submenu: [
            {
              label: 'About program',
              click() {
                createAboutWindow()
              }
            },
            {
              label: 'Author',
              click() {
                  shell.openExternal('https://makotopl.github.io')
              }
            },
            {type: 'separator'},
            {
              role: "reload",
            },
            {
              label: 'Exit',
              click() {
                  app.quit()
              }
            },
        ],
    }
  ])

  Menu.setApplicationMenu(menu);

}


app.allowRendererProcessReuse = true;
app.whenReady().then(createWindow)


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})