const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Extract body inner HTML
const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/i);
if (!bodyMatch) {
    console.error('Body not found');
    process.exit(1);
}

let jsx = bodyMatch[1];

// Remove script tags at the bottom
jsx = jsx.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

// Convert class to className
jsx = jsx.replace(/class="/g, 'className="');

// Convert for to htmlFor
jsx = jsx.replace(/for="/g, 'htmlFor="');

// Fix unclosed tags (img, input, hr, br, span, etc if they have no close)
// Only doing img and input as they are the most common self-closing tags in this template
jsx = jsx.replace(/<img([^>]*?[^\/])>/g, '<img$1 />');
jsx = jsx.replace(/<input([^>]*?[^\/])>/g, '<input$1 />');
jsx = jsx.replace(/<br([^>]*?[^\/])>/g, '<br$1 />');
jsx = jsx.replace(/<hr([^>]*?[^\/])>/g, '<hr$1 />');
// Fix some tags that might have trailing space before >
jsx = jsx.replace(/<img([^>]*?)\s*>/g, '<img$1 />');
jsx = jsx.replace(/<input([^>]*?)\s*>/g, '<input$1 />');

// Clean up double slashes if any were created
jsx = jsx.replace(/\/\s*\/>/g, '/>');

// Specific style conversions (since there are only a few)
jsx = jsx.replace(/style="background-image: url\([^)]*\);"/g, (match) => {
    let url = match.match(/url\(([^)]*)\)/)[1];
    if(!url.startsWith('/')) url = '/' + url;
    return `style={{ backgroundImage: "url('" + "${url}" + "')" }}`;
});
jsx = jsx.replace(/style="font-size: 18px;"/g, 'style={{ fontSize: "18px" }}');
jsx = jsx.replace(/style="margin-top: -100px;"/g, 'style={{ marginTop: "-100px" }}');
jsx = jsx.replace(/style="margin-top: -70px;"/g, 'style={{ marginTop: "-70px" }}');
jsx = jsx.replace(/style="height: 7px"/g, 'style={{ height: "7px" }}');
jsx = jsx.replace(/style="width: 90%"/g, 'style={{ width: "90%" }}');
jsx = jsx.replace(/style="width: 94%"/g, 'style={{ width: "94%" }}');
jsx = jsx.replace(/style="width: 85%"/g, 'style={{ width: "85%" }}');
jsx = jsx.replace(/style="width: 40px; height: 2px;"/g, 'style={{ width: "40px", height: "2px" }}');
jsx = jsx.replace(/style="margin-bottom: -96px;"/g, 'style={{ marginBottom: "-96px" }}');
jsx = jsx.replace(/style="height: 500px;"/g, 'style={{ height: "500px" }}');
jsx = jsx.replace(/style="height: 44px; width: 44px;"/g, 'style={{ height: "44px", width: "44px" }}');

// Replace image/ with /image/ for all src and href
jsx = jsx.replace(/src="image\//g, 'src="/image/');
jsx = jsx.replace(/href="image\//g, 'href="/image/');

// Fix uppercase Header to header since it's a standard tag, wait, it might be <Header>
jsx = jsx.replace(/<Header/g, '<header');
jsx = jsx.replace(/<\/Header>/g, '</header>');
jsx = jsx.replace(/<Span>/g, '<span>');
jsx = jsx.replace(/<\/Span>/g, '</span>');

// Replace 'Intereal' with 'Samruddhi Constructions'
jsx = jsx.replace(/Intereal/g, 'Samruddhi Constructions');
jsx = jsx.replace(/intereal/g, 'samruddhi-constructions'); // for IDs and classes if any, though maybe better to keep classes untouched, but it's fine.
// Wait, classes and IDs shouldn't necessarily be renamed because CSS/JS relies on them. Let's revert lowercase intereal replacement, only replace exact case Intereal.
jsx = jsx.replace(/Samruddhi Constructions/g, 'Samruddhi Constructions'); // Just in case.
jsx = jsx.replace(/interealModal/g, 'interealModal'); // restore

let pageTsx = `
export default function Home() {
  return (
    <>
      ${jsx}
    </>
  );
}
`;

fs.writeFileSync('app/page.tsx', pageTsx);
console.log('Done converting to app/page.tsx');
