const UTMIFY_PIXEL = `
window.pixelId = "6a5bfa6ac0b9acc2454e343d";
var a = document.createElement("script");
a.setAttribute("async", "");
a.setAttribute("defer", "");
a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
document.head.appendChild(a);
`;

/** Pixel UTMify — apenas na LP V2 (rota /). */
export function V2Tracking() {
  return <script dangerouslySetInnerHTML={{ __html: UTMIFY_PIXEL }} />;
}
