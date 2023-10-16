class Storage {
  constructor(key, item) {
    this.item = item;
    this.key = key;
  }
  setStorage() {
    sessionStorage.setItem(this.key, this.item);
  }
  getStorage() {
    return sessionStorage.getItem(this.key);
  }
  removeStorage() {
    sessionStorage.removeItem(this.key);
  }
}

export default Storage;
