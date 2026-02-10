const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

(async () => {
  try {
    const root = path.join(__dirname, '..');
    const src = path.join(root, 'public', 'imagenes', 'logo.jpg');
    if (!fs.existsSync(src)) throw new Error('Logo no encontrado: ' + src);

    const outDir = path.join(root, 'public');
    const sizes = [16, 32, 48, 64, 180];

    for (const size of sizes) {
      const buf = await sharp(src)
        .resize(size, size, { fit: 'cover' })
        .png()
        .toBuffer();
      const outPath = path.join(outDir, `favicon-${size}.png`);
      fs.writeFileSync(outPath, buf);
      console.log('Generado', outPath);
    }

    // Copy 32x32 as favicon.ico (browsers accept PNG as .ico)
    fs.copyFileSync(
      path.join(outDir, 'favicon-32.png'),
      path.join(outDir, 'favicon.ico')
    );
    console.log('Generado favicon.ico');

    // Copy 180 to apple-touch-icon.png for iOS
    fs.copyFileSync(
      path.join(outDir, 'favicon-180.png'),
      path.join(outDir, 'apple-touch-icon.png')
    );
    console.log('Generado apple-touch-icon.png');

    console.log('Favicons generados correctamente.');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();