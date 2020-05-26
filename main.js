const { app, BrowserWindow, Menu, electron } = require('electron')
const shell = require('electron').shell
let path = require('path')


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
    "mac": {
      icon: path.join(__dirname, '/public/assets/img/icons/icon128.png'),
      category: 'public.app-category.utilities'
    },
    icon: path.join(__dirname, '/public/assets/img/icons/icon64.png')
  })
  
  win.loadFile('public/index.html') 
  win.webContents.openDevTools()

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
      "mac": {
        icon: path.join(__dirname, '/public/assets/img/icons/icon128.png'),
        category: 'public.app-category.utilities'
      },
      icon: path.join(__dirname, '/public/assets/img/icons/icon64.png')
    })


    about_win.loadFile('public/about_program.html')

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
                  shell.openExternal('https://www.makotopl.pl')
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
