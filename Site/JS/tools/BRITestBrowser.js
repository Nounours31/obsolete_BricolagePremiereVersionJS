function isES6Compatible(iInfo) {
     var retour = false;
     var nom = iInfo.browser.toLowerCase();
     switch (nom) {
          case "trident": /* ie */ retour = false; break;
          case "firefox": if (iInfo.version > 45) retour = true; break;
          case "edge": if (iInfo.version > 13) retour = true; break;
          case "opera": if (iInfo.version > 36) retour = true; break;
          case "chrome": if (iInfo.version > 49) retour = true; break;
          default: retour = false;
     }
     return retour;
}

function browserInfo() {
     var retour = { "browser": navigator.appName, "version": 0 };
     var isFind = false;
     var ua = navigator.userAgent;
     /* chrome:  Mozilla/5.0 (Windows NT 6.1; Win64; x64)          AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36  */
     /* opera:   Mozilla/5.0 (Windows NT 6.1; Win64; x64)          AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36  OPR/60.0.3255.170 */
     /* edge:    Mozilla/5.0 (Windows NT 10.0; Win64; x64)         AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36  Edge/16.16299*/
     /* firefox: Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:60.0) Gecko/20100101                         Firefox/60.0 */
     /* ie:      Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E) */


     var regexp = /(opr|edge)\/([\d]+)/i;
     var M = ua.match(regexp);

     /* Je suis un edge ou un opera */
     if ((M != null) && (M.length > 0)) {
          retour.browser = M[1];
          retour.version = parseInt(M[2]);
          isFind = true;
     }


     if (!isFind) {
          regexp = /(firefox|chrome)\/([\d]+)/i;
          M = ua.match(regexp);
          /* Je suis un firefox ou un chrome */
          if ((M != null) && (M.length > 0)) {
               retour.browser = M[1];
               retour.version = parseInt(M[2]);
               isFind = true;
          }
     }


     if (!isFind) {
          regexp = /(trident)\/([\d]+)/i;
          M = ua.match(regexp);
          /* Je suis un ie */
          if ((M != null) && (M.length > 0)) {
               retour.browser = M[1];
               retour.version = parseInt(M[2]);
               isFind = true;
          }
     }
     return retour;
}

function BRITestBrowser_TestBrowser() {
     var iInfo = browserInfo();
     console.log(iInfo);
     if (!isES6Compatible(iInfo)) {
          var body = document.getElementById("StartBody");
          var msg = "Votre browser est incompatible avec cette version du site - merci de prendre une version plus recente.";
          msg = msg + "<br />Browser: " + iInfo.browser + "   Version: " + iInfo.version;
          msg = "<h1>" + msg + "</h1>";
          body.innerHTML = msg;
     }
     else {
          document.location = './html/site.html';
     }
}
