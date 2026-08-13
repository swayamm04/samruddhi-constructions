const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');
code = code.replace(/<a href="\/cdn-cgi\/l\/email-protection[^>]+>([\s\S]*?)<\/a>/g, '<a href="mailto:info@website.com"><i className="fa fa-envelope-o me-2" aria-hidden="true"></i>info@website.com</a>');
code = code.replace(/<a href="\/cdn-cgi\/l\/email-protection"[^>]*>([\s\S]*?)<\/a>/g, '<a href="mailto:info@website.com">info@website.com</a>');
fs.writeFileSync('app/page.tsx', code);
console.log('Fixed email');
