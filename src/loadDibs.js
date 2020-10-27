const loadDibs = (callback) => {
  const existingScript = document.getElementById('googleMaps');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'https://test.checkout.dibspayment.eu/v1/checkout.js?v=1';
    script.id = 'dibs';
    document.body.appendChild(script);
    script.onload = () => {
      console.log('DIBS LOADED');
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};
export default loadDibs;
