function openDB(nameDB, version) {
  const indexedDB = 
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

    if (!version) {
      version = 1;
    };
    
  const request = indexedDB.open(nameDB, version);
  return request;
}

export {
  openDB,
}