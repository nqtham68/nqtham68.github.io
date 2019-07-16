// utils function
function insertScript(d, s, id, url) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s);
    js.id = id;
    js.src = url;
    fjs.parentNode.insertBefore(js, fjs);
}

function loadOrderScript(url1, url2){
    var script1 = document.createElement('script');
    script1.setAttribute('src', url1);
    script1.onload = function() {
        // console.log('url2: ' + url2);
        if (typeof(url2) != 'undefined')
        {
            var script2 = document.createElement('script');
            script2.setAttribute('src', url2);                    
            document.body.appendChild(script2);
        }
    }
    document.body.appendChild(script1);
}

// Ignore event for browser
window.addEventListener("touchstart", preventTouch, false);
window.addEventListener("touchmove", preventTouch, false);
window.addEventListener("touchend", preventTouch, false);
function preventTouch(evt) {
    evt.preventDefault();
}

// ads and gtm config
var enableAds = false;    
var productKey = "";
var gtmID = "";
if(enableAds) {
    gtmID = 'GTM-W4F73N';
    productKey = "template";
} else {
    gtmID = 'GTM-K74X66';
    productKey = "template";
}
dataLayer = [];
dataLayer.push({
    'event': 'pageLoad',
    'publisher': 'GAMELOFT',
    'productKey': '' + productKey
});
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',gtmID);

// int ads
if (enableAds)
{
    loadOrderScript('//imasdk.googleapis.com/js/sdkloader/ima3.js', 'adsSDK.259ad.js?v=0.0.9');
    // loadOrderScript('//imasdk.googleapis.com/js/sdkloader/ima3_debug.js', 'adsSDK.259ad.js');			
}

// ludi sdk for save load database -> not need now
// should load ludi before fb
// ludiSDKAsyncInit = function() {
    // console.log("ludiSDKAsyncInit ");  
    // myLudiSDK.phpTest = 1;
// };
// add ludisdk to document
// insertScript(document,'script', 'ludisdk', '//play.ludigames.com/js/games_lib/ludiSDK.js');