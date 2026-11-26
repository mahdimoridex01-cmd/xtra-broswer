const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    title: 'Xtra Browser',
    autoHideMenuBar: true, // إخفاء شريط القوائم العلوي التقليدي لويندوز
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true // تفعيل محرك التصفح الحقيقي لفتح جميع المواقع بدون قيود
    }
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});