const fs = require('fs');
const path = require('path');
const https = require('https');

const baseUrl = 'https://htmldesigntemplates.com/html/intereal/';
const baseDir = path.join(__dirname, 'public');

const filesToDownload = [
    'css/bootstrap.min.css',
    'css/plugin.css',
    'css/style.css',
    'js/jquery-3.7.1.min.js',
    'js/bootstrap.bundle.min.js',
    'js/plugin.js',
    'js/main.js',
    'image/01_intereal_thumbnail.png',
    'image/logo.png',
    'image/logo1.png',
    'image/pexels-jvdm-1457842.jpg',
    'image/apartment-with-pop-of-yellow-2021-08-26-15-43-11-utc.jpg',
    'image/bedroom-interior-design-3d-rendering-2021-08-26-18-15-32-utc1.jpg',
    'image/signatures-download-clipart-29-e1743574209464.png',
    'image/modern-composition-of-dining-room-interior-2022-12-07-04-28-22-utc.jpg',
    'image/3.jpg',
    'image/4.jpg',
    'image/5.jpg',
    'image/6.jpg',
    'image/luxury-interior-design-2021-10-21-02-43-57-utc.jpg',
    'image/vintage-wooden-home-interior-design-2022-12-16-00-19-04-utc.jpg',
    'image/modern-bathroom-interior-design-2022-12-16-11-57-19-utc.jpg',
    'image/interior-design-of-scandinavian-open-space-2022-12-07-04-19-53-utc.jpg',
    'image/interior-design-of-a-bedroom-2022-11-16-06-07-23-utc.jpg',
    'image/office-building-2022-12-15-19-40-07-utc.jpg',
    'image/interior-design-of-stylish-living-room-2022-12-07-04-16-53-utc.jpg',
    'image/female-entrepreneur-2021-08-29-03-28-29-utc.jpg',
    'image/photo-of-clever-male-lawyer-waits-for-client-outdo-2022-08-17-21-37-58-utc.jpg',
    'image/smart-asian-business-woman-smiling-at-office-space-2022-11-18-09-57-02-utc-e1743574185157.jpg',
    'image/happy-mature-businessman-pointing-at-blank-noteboo-2022-11-17-08-47-48-utc.jpg',
    'image/office-building-2022-12-15-19-37-04-utc1.jpg',
    'image/chat.png'
];

function downloadFile(fileUrl, outputPath) {
    return new Promise((resolve, reject) => {
        const dir = path.dirname(outputPath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const file = fs.createWriteStream(outputPath);
        https.get(fileUrl, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve();
                });
            } else {
                reject(`Failed to download ${fileUrl}: ${response.statusCode}`);
            }
        }).on('error', (err) => {
            fs.unlink(outputPath, () => reject(err));
        });
    });
}

async function main() {
    for (const file of filesToDownload) {
        const url = baseUrl + file;
        const out = path.join(baseDir, file);
        console.log(`Downloading ${url} -> ${out}`);
        try {
            await downloadFile(url, out);
        } catch (err) {
            console.error(err);
        }
    }
    console.log('Done downloading primary files. We may need to download fonts or other files referenced in CSS.');
}

main();
