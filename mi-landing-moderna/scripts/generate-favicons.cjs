const pngToIco = require('png-to-ico');
const fs = require('fs');
const path = require('path');

(async () => {
  try {
    // Jimp v1+ exports as ES module default — import dynamically
    const jimpModule = await import('jimp');
    const { Jimp } = jimpModule;
    const root = path.join(__dirname, '..');
    const src = path.join(root, 'public', 'imagenes', 'logo.jpg');
    if (!fs.existsSync(src)) throw new Error('Logo no encontrado: ' + src);

    const outDir = path.join(root, 'public');
    const sizes = [16, 32, 48, 64, 180];
    const pngPaths = [];

    for (const size of sizes) {
      const img = await Jimp.read(src);
      img.resize(size, size); // scale to square (may stretch if not square)
      const out = path.join(outDir, `favicon-${size}.png`);
      await img.writeAsync(out);
      pngPaths.push(out);
      console.log('Generado', out);
    }

    // Crear favicon.ico con 16,32,48
    const icoBuffer = await pngToIco([pngPaths[0], pngPaths[1], pngPaths[2]]);
    const icoPath = path.join(outDir, 'favicon.ico');
    fs.writeFileSync(icoPath, icoBuffer);
    console.log('Generado', icoPath);

    // Also copy 180 to apple-touch-icon.png
    fs.copyFileSync(path.join(outDir, 'favicon-180.png'), path.join(outDir, 'apple-touch-icon.png'));
    console.log('Generado apple-touch-icon.png');

    console.log('Favicons generados correctamente.');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();