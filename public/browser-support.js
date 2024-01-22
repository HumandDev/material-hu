function getBrowser() {
  var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return { name: 'IE', version: (tem[1] || '') };
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\bOPR\/(\d+)/)
    if (tem != null) { return { name: 'Opera', version: tem[1] }; }
  }
  if (window.navigator.userAgent.indexOf("Edge") > -1) {
    tem = ua.match(/\Edge\/(\d+)/)
    if (tem != null) { return { name: 'Edge', version: tem[1] }; }      
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) { M.splice(1, 1, tem[1]); }
  return {
    name: M[0],
    version: +M[1]
  };
}

var browser = getBrowser();

function isSupported(browser) {
  return (browser.name === "Chrome" && browser.version >= 73) ||
    ((browser.name === "MSIE" || browser.name === "IE") && browser.version >= 11) ||
    (browser.name === "Edge");
}

if (!isSupported(browser)) {
  console.info('Deberias actualizar tu navegador');
} else {
  console.info('Es un navegador soportado');

  alert('oops! 😵‍💫 It seems that your browser is too old to use Humand. We ask that you refresh your browser and try again.');
    // Definir el mensaje
var message = '<h1>Deberías actualizar tu navegador</h1>';

// Verificar si el documento está completamente cargado
if (document.readyState === 'complete') {
  // Abrir el documento y escribir el mensaje
  document.open();
  document.write(message);
  document.write('<h1 style="text-align: center; color: #ff0000; font-family: Arial, sans-serif; margin-top: 50px;">oops! 😵‍💫 It seems that your browser is too old to use Humand. We ask that you refresh your browser and try again.</h1>');
  document.close();
} else {
  // Esperar a que el documento esté completamente cargado
  window.onload = function() {
    // Abrir el documento y escribir el mensaje
    document.open();
    document.write(message);
    document.write('<h1 style="text-align: center; color: #ff0000; font-family: Arial, sans-serif; margin-top: 50px;">oops! 😵‍💫 It seems that your browser is too old to use Humand. We ask that you refresh your browser and try again.</h1>');
    document.close();
  };
}
}
