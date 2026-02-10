(async () => {
  const mod = await import('jimp');
  console.log('keys:', Object.keys(mod));
  console.log('has default:', !!mod.default);
  console.log('default keys:', mod.default && Object.keys(mod.default));
})();