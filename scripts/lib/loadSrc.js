// Lets Node scripts require the app's ES-module data files under src/ (Babel, CommonJS output).
// Only data and plain JS can be loaded this way; files that import React Native fail.
const path = require('path');
const Module = require('module');
const babel = require('@babel/core');

const root = path.join(__dirname, '..', '..');
const srcDir = path.join(root, 'src') + path.sep;

if (!Module._extensions['.js'].__mathhelperSrc) {
  const originalLoader = Module._extensions['.js'];
  const loader = function load(m, file) {
    if (file.startsWith(srcDir)) {
      const { code } = babel.transformFileSync(file, {
        plugins: ['@babel/plugin-transform-modules-commonjs'],
        babelrc: false, configFile: false, browserslistConfigFile: false,
      });
      return m._compile(code, file);
    }
    return originalLoader(m, file);
  };
  loader.__mathhelperSrc = true;
  Module._extensions['.js'] = loader;
}

/** require a file relative to src/, returning its default export (or the module) */
const loadSrc = (rel) => {
  const mod = require(path.join(root, 'src', rel));
  return mod.default !== undefined ? mod.default : mod;
};

module.exports = { root, loadSrc, requireSrc: (rel) => require(path.join(root, 'src', rel)) };
