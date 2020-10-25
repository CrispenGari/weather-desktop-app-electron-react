/*
    * INSTALLING ALL REQUIRED DEPENDECIES
    * $ npm i --save-dev cross-env electron-is-dev
    * $ npm i concurrently wait-on electron-builder 
    * $ npm i electron --save-dev --save-exact
    * 
    * SCRIPTS 
        "scripts": {
            "react-start": "react-scripts start",
            "react-build": "react-scripts build",
            "react-test": "react-scripts test --env=jsdom",
            "react-eject": "react-scripts eject",
            "electron-build": "electron-builder",
            "release": "yarn react-build && electron-builder --publish=always",
            "build": "yarn react-build && yarn electron-build",
            "start": "concurrently \"cross-env BROWSER=none yarn react-start\" \"wait-on http://localhost:3000 && electron .\""
        },   
        "main": "public/main.js"
*/

const electron = require("electron")
const path = require("path")
const isDev = require("electron-is-dev")
const url = require('url')
const ipc = electron.ipc

let window;

const createWindow =()=>{
    window = new electron.BrowserWindow({
        width: 800,
        height: 500,
        frame: false,
        resizable: false,
       webPreferences:{
           nodeIntegration: true,
           enableRemoteModule: true
       }
    })
    window.loadURL(isDev?"http://localhost:3000":`file://${path.join(__dirname, '../build/index.html')}`)
    window.on("closed", ()=>{
        window=null
    })
    // window.webContents.openDevTools({mode: "bottom"})
}
electron.app.on("ready", createWindow)
electron.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      electron.app.quit();
    }
  });
  electron.app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });