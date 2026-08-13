const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');
code = code.replace(/aria-valuemax="(\d+)"/g, 'aria-valuemax={$1}');
code = code.replace(/aria-valuemin="(\d+)"/g, 'aria-valuemin={$1}');
code = code.replace(/aria-valuenow="(\d+)"/g, 'aria-valuenow={$1}');
code = code.replace(/tabindex="([^"]+)"/g, 'tabIndex={$1}');
fs.writeFileSync('app/page.tsx', code);
console.log('Fixed page.tsx React props');
