/**
 * Abstraction for working with local storage
 */

function setItem(key,value) {
  localStorage.setItem(key, value)
}

function getItem(key){
  const val = localStorage.getItem(key)
  if (val !== null && val.length > 0) {
    return val;
  }
  return null;

}

function removeItem(key) {
  localStorage.removeItem(key)
}

// eslint-disable-next-line 
export default {
  set: setItem,
  remove: removeItem,
  get: getItem
}
