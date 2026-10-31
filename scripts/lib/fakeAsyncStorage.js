// In-memory AsyncStorage for Node tests (see testGradeFilter.js).
let impl = null;
const call = (name) => (...args) => impl[name](...args);
module.exports = {
  use: (storage) => { impl = storage; },
  getItem: call('getItem'), setItem: call('setItem'), getAllKeys: call('getAllKeys'), multiRemove: call('multiRemove'),
};
module.exports.default = module.exports;
