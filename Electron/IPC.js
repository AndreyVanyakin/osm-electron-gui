const IPC = {
  CONNECTWINDOW__CREATE: 'CONNECTWINDOW__CREATE', // USER WANTS TO CREATE CONNECT WINDOW
  CONNECTWINDOW__CLOSE: 'CONNECTWINDOW__CLOSE', // USER WANTS TO CLOSE CONNECT WINDOW
  CONNECTWINDOW__SETTINGS: 'CONNECTWINDOW__SETTINGS', // COMMUNCATE AVAILABLE CONNECT SETTINGS TO CONNECT WINDOW
  SOURCE__CONNECT: 'SOURCE__CONNECT', // USER INDUCED CONNECT
  SOURCE__DISCONNECT: 'SOURCE__DISCONNECT', // USER INDUCED DISCONNECT
  // SETTINGS WINDOW
  SWINDOW_CLOSE: 'SWINDOW_CLOSE', //USER WANTS TO CLOSE SETTINGS WINDOWM
  SWINDOW_RECEIVE: 'SWINDOW_RECEIVE', //ELECTRON => SETTINGS WINDOW SETTINGS TRANFER
  SWINDOW_DEF_REQ: 'SWINDOW_DEF_REQ', // SETTINGS WINDOW REQUESTS DEFAULTS
  SWINDOW_DEF_RES: 'SWINDOW_DEF_RES', // MAP DEFAULTS SENT TO MAP SETTINGS
  SWINDOW_SEND: 'SWINDOW_SEND', //ELECTRON <= SETTINGS WINDOW SETTINGS TRANFER
  // ADVANCED SETTINGS WINDOW
  ADVWINDOW_CLOSE: 'ADVWINDOW_CLOSE', //USER WANTS TO CLOSE ADVANCED SETTINGS WINDOWM
  ADVWINDOW_DEF_REQ: 'ADVWINDOW_DEF_REQ', // WINDOW REQUESTS DEFAULTS
  ADVWINDOW_RECEIVE: 'ADVWINDOW_RECEIVE', //ELECTRON => SETTINGS ADV WINDOW SETTINGS TRANFER
  ADVWINDOW_SEND: 'ADVWINDOW_SEND', //ELECTRON <= SETTINGS WINDOW ADV SETTINGS TRANFER
  //STATUS
  SOURCE__NOPING: 'SOURCE__NOPING', // SERVER IP:PORT PING FAILED'
  SOURCE__ISCONNECTING: 'SOURCE__ISCONNECTING', // ES.READY STATE 0
  SOURCE__ISCONNECTED: 'SOURCE__ISCONNECTED', // ES.READY STATE 1
  SOURCE__ISDISCONNECTED: 'SOURCE__ISDISCONNECTED', // ES.READY STATE 2
  SOURCE__ISERROR: 'SOURCE__ISERROR', // ERROR CONNECTING
  // DATA
  MAINWINDOW_MAPSETTINGS: 'MAINWINDOW_MAPSETTINGS', // ELECTRON => MAIN WINDOW MAP SETTINGS
  MAINWINDOW_ADVSETTINGS: 'MAINWINDOW_ADVSETTINGS', // ELECTRON => MAIN WINDOW ADVANCED SETTINGS
  MAINWINDOW__SCHEMA: 'MAINWINDOW__SCHEMA', // SEND NEW RFESH TO MAINWINDOW
  MAINWINDOW__FRESH: 'MAINWINDOW__FRESH', // SEND NEW RFESH TO MAINWINDOW
  // HISTORY
  ELECTRON_HISTORYREQ: 'ELECTRON_HISTORYREQ', // NEW HISTORY REQUEST FROM MAINWINDOW
  MAINWINDOW_CLEARIDB: 'MAINWINDOW_CLEARIDB', // USER WANTS TO CLEAR THE STORAGE
  ELECTRON__HISTORYCLEARED: 'ELECTRON__HISTORYCLEARED', // LETTING MAIN PROCESS KNOW THAT THE HISTORY HAS BEEN CLERARED
  ELECTRON__CLEARERR: 'ELECTRON__CLEARERR', // IF SMTH WENT WRONG
  MAINWINDOW__HISTORYRES: 'MAINWINDOW__HISTORYRES', // SEND HISTORY TO MAINWINDOW
  MAINWINDOW__HISTORYERR: 'MAINWINDOW__HISTORYERR', // INFORM MAINWINDOW ON HISTORY REQUEST ERR
  // Параметры отображения
  MAINWINDOW_SIGNALSETTINGS: 'MAINWINDOW_SIGNALSETTINGS', //ELECTOR=> MAIN
  ELECTRON_SIGNALSETTINGS: 'ELECTRON_SIGNALSETTINGS',
  // notification
  ELECTRON_NOTIFY: 'ELECTRON_NOTIFY'
};

module.exports = IPC;
