const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'app/PageContent.tsx',
  'app/projects/page.tsx',
  'app/contact/page.tsx',
  'index.html',
  'components/Footer.tsx'
];

const replacements = [
  {
    regex: /\+33 877 554 332/g,
    replace: '9483106164 / 9481936167'
  },
  {
    regex: /tel:\+33877554332/g,
    replace: 'tel:+919483106164'
  },
  {
    regex: /\+569 2316 2156/g,
    replace: '9483106164 / 9481936167'
  },
  {
    regex: /“Building trust through quality craftsmanship and innovative design, creating spaces that inspire and endure.”/g,
    replace: '“DESIGNING SPACES. BUILDING TRUST. YOUR VISION. OUR EXPERTISE. BUILT TO PERFECTION.”'
  },
  {
    regex: /Samruddhi Constructions is a premier architecture and interior design firm./g,
    replace: 'Samruddhi provides comprehensive solutions across Design, Build, Interiors, and Consultancy.'
  },
  {
    regex: /<h4 className="mb-0 fw-bold text-uppercase text-nowrap" style={{ color: "#c19a5b" }}>Samruddhi Constructions<\/h4>/g,
    replace: `<h4 className="mb-0 fw-bold text-uppercase text-nowrap" style={{ color: "#c19a5b", lineHeight: "1.2" }}>Samruddhi <br /><span style={{ fontSize: "0.5em", letterSpacing: "1px", color: "#f8f9fa", fontWeight: "normal" }}>Architects | Construction | Interiors</span></h4>`
  },
  {
    regex: /<h4 className="mb-0 fw-bold text-uppercase text-nowrap" style={{ color: "#c19a5b" }}>\s*Samruddhi Constructions\s*<\/h4>/g,
    replace: `<h4 className="mb-0 fw-bold text-uppercase text-nowrap" style={{ color: "#c19a5b", lineHeight: "1.2" }}>Samruddhi <br /><span style={{ fontSize: "0.5em", letterSpacing: "1px", color: "#f8f9fa", fontWeight: "normal" }}>Architects | Construction | Interiors</span></h4>`
  }
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    replacements.forEach(r => {
      content = content.replace(r.regex, r.replace);
    });
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${file}`);
    } else {
      console.log(`No changes needed for ${file}`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});
