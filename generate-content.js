const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/i);
let jsx = bodyMatch[1];
jsx = jsx.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

jsx = jsx.replace(/class="/g, 'className="');
jsx = jsx.replace(/for="/g, 'htmlFor="');
jsx = jsx.replace(/<img([^>]*?[^\/])>/g, '<img$1 />');
jsx = jsx.replace(/<input([^>]*?[^\/])>/g, '<input$1 />');
jsx = jsx.replace(/<br([^>]*?[^\/])>/g, '<br$1 />');
jsx = jsx.replace(/<hr([^>]*?[^\/])>/g, '<hr$1 />');
jsx = jsx.replace(/<img([^>]*?)\s*>/g, '<img$1 />');
jsx = jsx.replace(/<input([^>]*?)\s*>/g, '<input$1 />');
jsx = jsx.replace(/\/\s*\/>/g, '/>');

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

jsx = jsx.replace(/src="image\//g, 'src="/image/');
jsx = jsx.replace(/href="image\//g, 'href="/image/');
jsx = jsx.replace(/<Header/g, '<header');
jsx = jsx.replace(/<\/Header>/g, '</header>');
jsx = jsx.replace(/<Span>/g, '<span>');
jsx = jsx.replace(/<\/Span>/g, '</span>');

jsx = jsx.replace(/Intereal/g, 'Samruddhi Constructions');
jsx = jsx.replace(/interealModal/g, 'interealModal');
jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

jsx = jsx.replace(/aria-valuemax="(\d+)"/g, 'aria-valuemax={$1}');
jsx = jsx.replace(/aria-valuemin="(\d+)"/g, 'aria-valuemin={$1}');
jsx = jsx.replace(/aria-valuenow="(\d+)"/g, 'aria-valuenow={$1}');
jsx = jsx.replace(/tabindex="([^"]+)"/g, 'tabIndex={$1}');

jsx = jsx.replace(/<a href="\/cdn-cgi\/l\/email-protection[^>]+>([\s\S]*?)<\/a>/g, '<a href="mailto:info@website.com"><i className="fa fa-envelope-o me-2" aria-hidden="true"></i>info@website.com</a>');
jsx = jsx.replace(/<a href="\/cdn-cgi\/l\/email-protection"[^>]*>([\s\S]*?)<\/a>/g, '<a href="mailto:info@website.com">info@website.com</a>');


let pageTsx = `
"use client";
import { useEffect } from 'react';

export default function PageContent() {
  useEffect(() => {
    // Dynamically load scripts so they execute AFTER React has mounted the DOM
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const initScripts = async () => {
      try {
        if (!window.jQuery) {
          await loadScript('/js/jquery-3.7.1.min.js');
        }
        await loadScript('/js/bootstrap.bundle.min.js');
        await loadScript('/js/plugin.js');
        await loadScript('/js/main.js');
      } catch (err) {
        console.error('Error loading scripts', err);
      }
    };

    initScripts();

    // Cleanup scripts if component unmounts (optional, but good practice)
    return () => {
      const scripts = document.querySelectorAll('script[src^="/js/"]');
      scripts.forEach(s => s.remove());
    };
  }, []);

  return (
    <>
      ${jsx}
    </>
  );
}
`;

fs.writeFileSync('app/PageContent.tsx', pageTsx);
console.log('Done generating app/PageContent.tsx');
