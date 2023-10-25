class Storage {
  item: string;
  key: string;
  constructor(key: string, item: string) {
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
