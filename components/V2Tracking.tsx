const UTMIFY_PIXEL = `
window.pixelId = "6a5bfa6ac0b9acc2454e343d";
var a = document.createElement("script");
a.setAttribute("async", "");
a.setAttribute("defer", "");
a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
document.head.appendChild(a);
`;

const GTM_HEAD = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MVTWN5T5');`;

/** Pixel UTMify + GTM — apenas na LP V2 (rota /). */
export function V2Tracking() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: UTMIFY_PIXEL }} />
      <script dangerouslySetInnerHTML={{ __html: GTM_HEAD }} />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MVTWN5T5"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
}
