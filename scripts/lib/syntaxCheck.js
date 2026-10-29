// node scripts/lib/syntaxCheck.js <file…>: parses JS/JSX files and reports syntax errors (no build needed).
const fs = require('fs');
const { parse } = require('@babel/parser');
let bad = 0;
process.argv.slice(2).forEach((f) => {
  try { parse(fs.readFileSync(f, 'utf8'), { sourceType: 'module', plugins: ['jsx'] }); console.log(`ok ${f}`); } catch (e) { bad++; console.log(`SYNTAX ${f}: ${e.message}`); }
});
process.exit(bad ? 1 : 0);
