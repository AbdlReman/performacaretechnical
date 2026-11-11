import Script from "next/script";

/** Apply dir/lang from the URL before paint ( /ar = Arabic RTL ). */
export default function LanguageScript() {
  return (
    <Script id="locale-init" strategy="beforeInteractive">{`(function(){try{var p=location.pathname;var ar=p==='/ar'||p.indexOf('/ar/')===0;var r=document.documentElement;r.lang=ar?'ar':'en';r.dir=ar?'rtl':'ltr';r.setAttribute('data-locale',ar?'ar':'en');}catch(e){}})();`}</Script>
  );
}
