/*
  This script is included to detect browsers and their versions for ensuring compatibility
  with browsers that support ECMAScript 2017 (ES8) features, specifically the spread operator.
  This is implemented to prevent errors and to display a styled message instructing users to update their browser.

  Note: While this script doesn't definitively handle all edge cases, it adapts to the evolving
  list of browsers supported by Babel over time.
  If bugs are found in libraries or incompatibilities arise between the Humand stack and browsers,
  modify these conditions, using the following link as a reference:
  https://caniuse.com/mdn-javascript_builtins_string_matchall,mdn-javascript_operators_spread_spread_in_object_literals,pad-start-end
*/

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
  return !(
    (browser.name === "Chrome" && browser.version < 73) ||
    ((browser.name === "MSIE" || browser.name === "IE") && browser.version < 11) ||
    (browser.name === "Edge"  && browser.version < 79) ||
    (browser.name === "Opera"  && browser.version < 60) ||
    (browser.name === "Firefox"  && browser.version < 67)
  );
}

if (!isSupported(browser)) {
  console.info('Browser unsupported.');
  alert('Ups! 😵‍💫 Parece que tu navegador es algo viejo para usar Humand. Te pedimos que actualices tu navegador y vuelvas a intentar.');
  var message = '<h1 style="text-align: center; color: #164C63; border-radius: 18px; background-color: #CFF9FE; font-family: Roboto, sans-serif; margin-top: 50px;">oops! 😵‍💫 It seems that your browser is too old to use Humand. We ask that you update your browser and try again.</h1>';
  window.onload = function() {
    document.open();
    document.write(message);
    document.close();
  };
}
