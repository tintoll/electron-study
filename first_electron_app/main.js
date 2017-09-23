
// package.json 의 main에 지정된 파일이 최초의 Main 프로세스 파일이다
const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({width:800, height:600});
    win.loadURL(`file://${__dirname}/index.html`); // Renderer 프로세스 실행
    win.on("closed", () => { win = null; });
}

// Electron App이 실행되고 초기화가 완료되었을때 실행
app.on("ready",createWindow);
// 모든 윈도우가 닫혔을때
app.on("window-all-closed", () => {
    if( process.platform !== 'darwin'){
        app.quit();
    }
});
// Electron App이 비활성화 상태에서 활성화되었을때(MacOs에서만 지원하는 생명주기임)
app.on("activate", () => {
    if(win === null) {
        createWindow();
    }
})