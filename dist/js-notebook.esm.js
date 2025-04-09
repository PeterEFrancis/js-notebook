function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$3 = "@charset \"UTF-8\";\n/*!\n * Bootstrap  v5.3.5 (https://getbootstrap.com/)\n * Copyright 2011-2025 The Bootstrap Authors\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n:root,[data-bs-theme=light]{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-black:#000;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-primary-text-emphasis:#052c65;--bs-secondary-text-emphasis:#2b2f32;--bs-success-text-emphasis:#0a3622;--bs-info-text-emphasis:#055160;--bs-warning-text-emphasis:#664d03;--bs-danger-text-emphasis:#58151c;--bs-light-text-emphasis:#495057;--bs-dark-text-emphasis:#495057;--bs-primary-bg-subtle:#cfe2ff;--bs-secondary-bg-subtle:#e2e3e5;--bs-success-bg-subtle:#d1e7dd;--bs-info-bg-subtle:#cff4fc;--bs-warning-bg-subtle:#fff3cd;--bs-danger-bg-subtle:#f8d7da;--bs-light-bg-subtle:#fcfcfd;--bs-dark-bg-subtle:#ced4da;--bs-primary-border-subtle:#9ec5fe;--bs-secondary-border-subtle:#c4c8cb;--bs-success-border-subtle:#a3cfbb;--bs-info-border-subtle:#9eeaf9;--bs-warning-border-subtle:#ffe69c;--bs-danger-border-subtle:#f1aeb5;--bs-light-border-subtle:#e9ecef;--bs-dark-border-subtle:#adb5bd;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-font-sans-serif:system-ui,-apple-system,\"Segoe UI\",Roboto,\"Helvetica Neue\",\"Noto Sans\",\"Liberation Sans\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-color-rgb:33,37,41;--bs-body-bg:#fff;--bs-body-bg-rgb:255,255,255;--bs-emphasis-color:#000;--bs-emphasis-color-rgb:0,0,0;--bs-secondary-color:rgba(33, 37, 41, 0.75);--bs-secondary-color-rgb:33,37,41;--bs-secondary-bg:#e9ecef;--bs-secondary-bg-rgb:233,236,239;--bs-tertiary-color:rgba(33, 37, 41, 0.5);--bs-tertiary-color-rgb:33,37,41;--bs-tertiary-bg:#f8f9fa;--bs-tertiary-bg-rgb:248,249,250;--bs-heading-color:inherit;--bs-link-color:#0d6efd;--bs-link-color-rgb:13,110,253;--bs-link-decoration:underline;--bs-link-hover-color:#0a58ca;--bs-link-hover-color-rgb:10,88,202;--bs-code-color:#d63384;--bs-highlight-color:#212529;--bs-highlight-bg:#fff3cd;--bs-border-width:1px;--bs-border-style:solid;--bs-border-color:#dee2e6;--bs-border-color-translucent:rgba(0, 0, 0, 0.175);--bs-border-radius:0.375rem;--bs-border-radius-sm:0.25rem;--bs-border-radius-lg:0.5rem;--bs-border-radius-xl:1rem;--bs-border-radius-xxl:2rem;--bs-border-radius-2xl:var(--bs-border-radius-xxl);--bs-border-radius-pill:50rem;--bs-box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-box-shadow-sm:0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);--bs-box-shadow-lg:0 1rem 3rem rgba(0, 0, 0, 0.175);--bs-box-shadow-inset:inset 0 1px 2px rgba(0, 0, 0, 0.075);--bs-focus-ring-width:0.25rem;--bs-focus-ring-opacity:0.25;--bs-focus-ring-color:rgba(13, 110, 253, 0.25);--bs-form-valid-color:#198754;--bs-form-valid-border-color:#198754;--bs-form-invalid-color:#dc3545;--bs-form-invalid-border-color:#dc3545}\n[data-bs-theme=dark]{color-scheme:dark;--bs-body-color:#dee2e6;--bs-body-color-rgb:222,226,230;--bs-body-bg:#212529;--bs-body-bg-rgb:33,37,41;--bs-emphasis-color:#fff;--bs-emphasis-color-rgb:255,255,255;--bs-secondary-color:rgba(222, 226, 230, 0.75);--bs-secondary-color-rgb:222,226,230;--bs-secondary-bg:#343a40;--bs-secondary-bg-rgb:52,58,64;--bs-tertiary-color:rgba(222, 226, 230, 0.5);--bs-tertiary-color-rgb:222,226,230;--bs-tertiary-bg:#2b3035;--bs-tertiary-bg-rgb:43,48,53;--bs-primary-text-emphasis:#6ea8fe;--bs-secondary-text-emphasis:#a7acb1;--bs-success-text-emphasis:#75b798;--bs-info-text-emphasis:#6edff6;--bs-warning-text-emphasis:#ffda6a;--bs-danger-text-emphasis:#ea868f;--bs-light-text-emphasis:#f8f9fa;--bs-dark-text-emphasis:#dee2e6;--bs-primary-bg-subtle:#031633;--bs-secondary-bg-subtle:#161719;--bs-success-bg-subtle:#051b11;--bs-info-bg-subtle:#032830;--bs-warning-bg-subtle:#332701;--bs-danger-bg-subtle:#2c0b0e;--bs-light-bg-subtle:#343a40;--bs-dark-bg-subtle:#1a1d20;--bs-primary-border-subtle:#084298;--bs-secondary-border-subtle:#41464b;--bs-success-border-subtle:#0f5132;--bs-info-border-subtle:#087990;--bs-warning-border-subtle:#997404;--bs-danger-border-subtle:#842029;--bs-light-border-subtle:#495057;--bs-dark-border-subtle:#343a40;--bs-heading-color:inherit;--bs-link-color:#6ea8fe;--bs-link-hover-color:#8bb9fe;--bs-link-color-rgb:110,168,254;--bs-link-hover-color-rgb:139,185,254;--bs-code-color:#e685b5;--bs-highlight-color:#dee2e6;--bs-highlight-bg:#664d03;--bs-border-color:#495057;--bs-border-color-translucent:rgba(255, 255, 255, 0.15);--bs-form-valid-color:#75b798;--bs-form-valid-border-color:#75b798;--bs-form-invalid-color:#ea868f;--bs-form-invalid-border-color:#ea868f}\n*,::after,::before{box-sizing:border-box}\n@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}\nbody{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}\nhr{margin:1rem 0;color:inherit;border:0;border-top:var(--bs-border-width) solid;opacity:.25}\n.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2;color:var(--bs-heading-color)}\n.h1,h1{font-size:calc(1.375rem + 1.5vw)}\n@media (min-width:1200px){.h1,h1{font-size:2.5rem}}\n.h2,h2{font-size:calc(1.325rem + .9vw)}\n@media (min-width:1200px){.h2,h2{font-size:2rem}}\n.h3,h3{font-size:calc(1.3rem + .6vw)}\n@media (min-width:1200px){.h3,h3{font-size:1.75rem}}\n.h4,h4{font-size:calc(1.275rem + .3vw)}\n@media (min-width:1200px){.h4,h4{font-size:1.5rem}}\n.h5,h5{font-size:1.25rem}\n.h6,h6{font-size:1rem}\np{margin-top:0;margin-bottom:1rem}\nabbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}\naddress{margin-bottom:1rem;font-style:normal;line-height:inherit}\nol,ul{padding-left:2rem}\ndl,ol,ul{margin-top:0;margin-bottom:1rem}\nol ol,ol ul,ul ol,ul ul{margin-bottom:0}\ndt{font-weight:700}\ndd{margin-bottom:.5rem;margin-left:0}\nblockquote{margin:0 0 1rem}\nb,strong{font-weight:bolder}\n.small,small{font-size:.875em}\n.mark,mark{padding:.1875em;color:var(--bs-highlight-color);background-color:var(--bs-highlight-bg)}\nsub,sup{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}\nsub{bottom:-.25em}\nsup{top:-.5em}\na{color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1));text-decoration:underline}\na:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb)}\na:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}\ncode,kbd,pre,samp{font-family:var(--bs-font-monospace);font-size:1em}\npre{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:.875em}\npre code{font-size:inherit;color:inherit;word-break:normal}\ncode{font-size:.875em;color:var(--bs-code-color);word-wrap:break-word}\na>code{color:inherit}\nkbd{padding:.1875rem .375rem;font-size:.875em;color:var(--bs-body-bg);background-color:var(--bs-body-color);border-radius:.25rem}\nkbd kbd{padding:0;font-size:1em}\nfigure{margin:0 0 1rem}\nimg,svg{vertical-align:middle}\ntable{caption-side:bottom;border-collapse:collapse}\ncaption{padding-top:.5rem;padding-bottom:.5rem;color:var(--bs-secondary-color);text-align:left}\nth{text-align:inherit;text-align:-webkit-match-parent}\ntbody,td,tfoot,th,thead,tr{border-color:inherit;border-style:solid;border-width:0}\nlabel{display:inline-block}\nbutton{border-radius:0}\nbutton:focus:not(:focus-visible){outline:0}\nbutton,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}\nbutton,select{text-transform:none}\n[role=button]{cursor:pointer}\nselect{word-wrap:normal}\nselect:disabled{opacity:1}\n[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator{display:none!important}\n[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}\n[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}\n::-moz-focus-inner{padding:0;border-style:none}\ntextarea{resize:vertical}\nfieldset{min-width:0;padding:0;margin:0;border:0}\nlegend{float:left;width:100%;padding:0;margin-bottom:.5rem;line-height:inherit;font-size:calc(1.275rem + .3vw)}\n@media (min-width:1200px){legend{font-size:1.5rem}}\nlegend+*{clear:left}\n::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}\n::-webkit-inner-spin-button{height:auto}\n[type=search]{-webkit-appearance:textfield;outline-offset:-2px}\n::-webkit-search-decoration{-webkit-appearance:none}\n::-webkit-color-swatch-wrapper{padding:0}\n::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}\n::file-selector-button{font:inherit;-webkit-appearance:button}\noutput{display:inline-block}\niframe{border:0}\nsummary{display:list-item;cursor:pointer}\nprogress{vertical-align:baseline}\n[hidden]{display:none!important}\n.lead{font-size:1.25rem;font-weight:300}\n.display-1{font-weight:300;line-height:1.2;font-size:calc(1.625rem + 4.5vw)}\n@media (min-width:1200px){.display-1{font-size:5rem}}\n.display-2{font-weight:300;line-height:1.2;font-size:calc(1.575rem + 3.9vw)}\n@media (min-width:1200px){.display-2{font-size:4.5rem}}\n.display-3{font-weight:300;line-height:1.2;font-size:calc(1.525rem + 3.3vw)}\n@media (min-width:1200px){.display-3{font-size:4rem}}\n.display-4{font-weight:300;line-height:1.2;font-size:calc(1.475rem + 2.7vw)}\n@media (min-width:1200px){.display-4{font-size:3.5rem}}\n.display-5{font-weight:300;line-height:1.2;font-size:calc(1.425rem + 2.1vw)}\n@media (min-width:1200px){.display-5{font-size:3rem}}\n.display-6{font-weight:300;line-height:1.2;font-size:calc(1.375rem + 1.5vw)}\n@media (min-width:1200px){.display-6{font-size:2.5rem}}\n.list-unstyled{padding-left:0;list-style:none}\n.list-inline{padding-left:0;list-style:none}\n.list-inline-item{display:inline-block}\n.list-inline-item:not(:last-child){margin-right:.5rem}\n.initialism{font-size:.875em;text-transform:uppercase}\n.blockquote{margin-bottom:1rem;font-size:1.25rem}\n.blockquote>:last-child{margin-bottom:0}\n.blockquote-footer{margin-top:-1rem;margin-bottom:1rem;font-size:.875em;color:#6c757d}\n.blockquote-footer::before{content:\"— \"}\n.img-fluid{max-width:100%;height:auto}\n.img-thumbnail{padding:.25rem;background-color:var(--bs-body-bg);border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);max-width:100%;height:auto}\n.figure{display:inline-block}\n.figure-img{margin-bottom:.5rem;line-height:1}\n.figure-caption{font-size:.875em;color:var(--bs-secondary-color)}\n.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{--bs-gutter-x:1.5rem;--bs-gutter-y:0;width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-right:auto;margin-left:auto}\n@media (min-width:576px){.container,.container-sm{max-width:540px}}\n@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}\n@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}\n@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}\n@media (min-width:1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1320px}}\n:root{--bs-breakpoint-xs:0;--bs-breakpoint-sm:576px;--bs-breakpoint-md:768px;--bs-breakpoint-lg:992px;--bs-breakpoint-xl:1200px;--bs-breakpoint-xxl:1400px}\n.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(-1 * var(--bs-gutter-y));margin-right:calc(-.5 * var(--bs-gutter-x));margin-left:calc(-.5 * var(--bs-gutter-x))}\n.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-top:var(--bs-gutter-y)}\n.col{flex:1 0 0}\n.row-cols-auto>*{flex:0 0 auto;width:auto}\n.row-cols-1>*{flex:0 0 auto;width:100%}\n.row-cols-2>*{flex:0 0 auto;width:50%}\n.row-cols-3>*{flex:0 0 auto;width:33.33333333%}\n.row-cols-4>*{flex:0 0 auto;width:25%}\n.row-cols-5>*{flex:0 0 auto;width:20%}\n.row-cols-6>*{flex:0 0 auto;width:16.66666667%}\n.col-auto{flex:0 0 auto;width:auto}\n.col-1{flex:0 0 auto;width:8.33333333%}\n.col-2{flex:0 0 auto;width:16.66666667%}\n.col-3{flex:0 0 auto;width:25%}\n.col-4{flex:0 0 auto;width:33.33333333%}\n.col-5{flex:0 0 auto;width:41.66666667%}\n.col-6{flex:0 0 auto;width:50%}\n.col-7{flex:0 0 auto;width:58.33333333%}\n.col-8{flex:0 0 auto;width:66.66666667%}\n.col-9{flex:0 0 auto;width:75%}\n.col-10{flex:0 0 auto;width:83.33333333%}\n.col-11{flex:0 0 auto;width:91.66666667%}\n.col-12{flex:0 0 auto;width:100%}\n.offset-1{margin-left:8.33333333%}\n.offset-2{margin-left:16.66666667%}\n.offset-3{margin-left:25%}\n.offset-4{margin-left:33.33333333%}\n.offset-5{margin-left:41.66666667%}\n.offset-6{margin-left:50%}\n.offset-7{margin-left:58.33333333%}\n.offset-8{margin-left:66.66666667%}\n.offset-9{margin-left:75%}\n.offset-10{margin-left:83.33333333%}\n.offset-11{margin-left:91.66666667%}\n.g-0,.gx-0{--bs-gutter-x:0}\n.g-0,.gy-0{--bs-gutter-y:0}\n.g-1,.gx-1{--bs-gutter-x:0.25rem}\n.g-1,.gy-1{--bs-gutter-y:0.25rem}\n.g-2,.gx-2{--bs-gutter-x:0.5rem}\n.g-2,.gy-2{--bs-gutter-y:0.5rem}\n.g-3,.gx-3{--bs-gutter-x:1rem}\n.g-3,.gy-3{--bs-gutter-y:1rem}\n.g-4,.gx-4{--bs-gutter-x:1.5rem}\n.g-4,.gy-4{--bs-gutter-y:1.5rem}\n.g-5,.gx-5{--bs-gutter-x:3rem}\n.g-5,.gy-5{--bs-gutter-y:3rem}\n@media (min-width:576px){.col-sm{flex:1 0 0}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.33333333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.66666667%}.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.33333333%}.col-sm-2{flex:0 0 auto;width:16.66666667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.33333333%}.col-sm-5{flex:0 0 auto;width:41.66666667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.33333333%}.col-sm-8{flex:0 0 auto;width:66.66666667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.33333333%}.col-sm-11{flex:0 0 auto;width:91.66666667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333333%}.offset-sm-2{margin-left:16.66666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333333%}.offset-sm-5{margin-left:41.66666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333333%}.offset-sm-8{margin-left:66.66666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333333%}.offset-sm-11{margin-left:91.66666667%}.g-sm-0,.gx-sm-0{--bs-gutter-x:0}.g-sm-0,.gy-sm-0{--bs-gutter-y:0}.g-sm-1,.gx-sm-1{--bs-gutter-x:0.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y:0.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x:0.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y:0.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x:1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y:1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x:1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y:1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x:3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y:3rem}}\n@media (min-width:768px){.col-md{flex:1 0 0}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.33333333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.66666667%}.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.33333333%}.col-md-2{flex:0 0 auto;width:16.66666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.33333333%}.col-md-5{flex:0 0 auto;width:41.66666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.33333333%}.col-md-8{flex:0 0 auto;width:66.66666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.33333333%}.col-md-11{flex:0 0 auto;width:91.66666667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333333%}.offset-md-2{margin-left:16.66666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333333%}.offset-md-5{margin-left:41.66666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333333%}.offset-md-8{margin-left:66.66666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333333%}.offset-md-11{margin-left:91.66666667%}.g-md-0,.gx-md-0{--bs-gutter-x:0}.g-md-0,.gy-md-0{--bs-gutter-y:0}.g-md-1,.gx-md-1{--bs-gutter-x:0.25rem}.g-md-1,.gy-md-1{--bs-gutter-y:0.25rem}.g-md-2,.gx-md-2{--bs-gutter-x:0.5rem}.g-md-2,.gy-md-2{--bs-gutter-y:0.5rem}.g-md-3,.gx-md-3{--bs-gutter-x:1rem}.g-md-3,.gy-md-3{--bs-gutter-y:1rem}.g-md-4,.gx-md-4{--bs-gutter-x:1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y:1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x:3rem}.g-md-5,.gy-md-5{--bs-gutter-y:3rem}}\n@media (min-width:992px){.col-lg{flex:1 0 0}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.33333333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.66666667%}.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.33333333%}.col-lg-2{flex:0 0 auto;width:16.66666667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.33333333%}.col-lg-5{flex:0 0 auto;width:41.66666667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.33333333%}.col-lg-8{flex:0 0 auto;width:66.66666667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.33333333%}.col-lg-11{flex:0 0 auto;width:91.66666667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333333%}.offset-lg-2{margin-left:16.66666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333333%}.offset-lg-5{margin-left:41.66666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333333%}.offset-lg-8{margin-left:66.66666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333333%}.offset-lg-11{margin-left:91.66666667%}.g-lg-0,.gx-lg-0{--bs-gutter-x:0}.g-lg-0,.gy-lg-0{--bs-gutter-y:0}.g-lg-1,.gx-lg-1{--bs-gutter-x:0.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y:0.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x:0.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y:0.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x:1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y:1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x:1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y:1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x:3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y:3rem}}\n@media (min-width:1200px){.col-xl{flex:1 0 0}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.33333333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.66666667%}.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.33333333%}.col-xl-2{flex:0 0 auto;width:16.66666667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.33333333%}.col-xl-5{flex:0 0 auto;width:41.66666667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.33333333%}.col-xl-8{flex:0 0 auto;width:66.66666667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.33333333%}.col-xl-11{flex:0 0 auto;width:91.66666667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333333%}.offset-xl-2{margin-left:16.66666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333333%}.offset-xl-5{margin-left:41.66666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333333%}.offset-xl-8{margin-left:66.66666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333333%}.offset-xl-11{margin-left:91.66666667%}.g-xl-0,.gx-xl-0{--bs-gutter-x:0}.g-xl-0,.gy-xl-0{--bs-gutter-y:0}.g-xl-1,.gx-xl-1{--bs-gutter-x:0.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y:0.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x:0.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y:0.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x:1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y:1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x:1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y:1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x:3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y:3rem}}\n@media (min-width:1400px){.col-xxl{flex:1 0 0}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.33333333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.66666667%}.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.33333333%}.col-xxl-2{flex:0 0 auto;width:16.66666667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.33333333%}.col-xxl-5{flex:0 0 auto;width:41.66666667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.33333333%}.col-xxl-8{flex:0 0 auto;width:66.66666667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.33333333%}.col-xxl-11{flex:0 0 auto;width:91.66666667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333333%}.offset-xxl-2{margin-left:16.66666667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333333%}.offset-xxl-5{margin-left:41.66666667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333333%}.offset-xxl-8{margin-left:66.66666667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333333%}.offset-xxl-11{margin-left:91.66666667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x:0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y:0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x:0.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y:0.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x:0.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y:0.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x:1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y:1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x:1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y:1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x:3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y:3rem}}\n.table{--bs-table-color-type:initial;--bs-table-bg-type:initial;--bs-table-color-state:initial;--bs-table-bg-state:initial;--bs-table-color:var(--bs-emphasis-color);--bs-table-bg:var(--bs-body-bg);--bs-table-border-color:var(--bs-border-color);--bs-table-accent-bg:transparent;--bs-table-striped-color:var(--bs-emphasis-color);--bs-table-striped-bg:rgba(var(--bs-emphasis-color-rgb), 0.05);--bs-table-active-color:var(--bs-emphasis-color);--bs-table-active-bg:rgba(var(--bs-emphasis-color-rgb), 0.1);--bs-table-hover-color:var(--bs-emphasis-color);--bs-table-hover-bg:rgba(var(--bs-emphasis-color-rgb), 0.075);width:100%;margin-bottom:1rem;vertical-align:top;border-color:var(--bs-table-border-color)}\n.table>:not(caption)>*>*{padding:.5rem .5rem;color:var(--bs-table-color-state,var(--bs-table-color-type,var(--bs-table-color)));background-color:var(--bs-table-bg);border-bottom-width:var(--bs-border-width);box-shadow:inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,var(--bs-table-accent-bg)))}\n.table>tbody{vertical-align:inherit}\n.table>thead{vertical-align:bottom}\n.table-group-divider{border-top:calc(var(--bs-border-width) * 2) solid currentcolor}\n.caption-top{caption-side:top}\n.table-sm>:not(caption)>*>*{padding:.25rem .25rem}\n.table-bordered>:not(caption)>*{border-width:var(--bs-border-width) 0}\n.table-bordered>:not(caption)>*>*{border-width:0 var(--bs-border-width)}\n.table-borderless>:not(caption)>*>*{border-bottom-width:0}\n.table-borderless>:not(:first-child){border-top-width:0}\n.table-striped>tbody>tr:nth-of-type(odd)>*{--bs-table-color-type:var(--bs-table-striped-color);--bs-table-bg-type:var(--bs-table-striped-bg)}\n.table-striped-columns>:not(caption)>tr>:nth-child(2n){--bs-table-color-type:var(--bs-table-striped-color);--bs-table-bg-type:var(--bs-table-striped-bg)}\n.table-active{--bs-table-color-state:var(--bs-table-active-color);--bs-table-bg-state:var(--bs-table-active-bg)}\n.table-hover>tbody>tr:hover>*{--bs-table-color-state:var(--bs-table-hover-color);--bs-table-bg-state:var(--bs-table-hover-bg)}\n.table-primary{--bs-table-color:#000;--bs-table-bg:#cfe2ff;--bs-table-border-color:#a6b5cc;--bs-table-striped-bg:#c5d7f2;--bs-table-striped-color:#000;--bs-table-active-bg:#bacbe6;--bs-table-active-color:#000;--bs-table-hover-bg:#bfd1ec;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}\n.table-secondary{--bs-table-color:#000;--bs-table-bg:#e2e3e5;--bs-table-border-color:#b5b6b7;--bs-table-striped-bg:#d7d8da;--bs-table-striped-color:#000;--bs-table-active-bg:#cbccce;--bs-table-active-color:#000;--bs-table-hover-bg:#d1d2d4;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}\n.table-success{--bs-table-color:#000;--bs-table-bg:#d1e7dd;--bs-table-border-color:#a7b9b1;--bs-table-striped-bg:#c7dbd2;--bs-table-striped-color:#000;--bs-table-active-bg:#bcd0c7;--bs-table-active-color:#000;--bs-table-hover-bg:#c1d6cc;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}\n.table-info{--bs-table-color:#000;--bs-table-bg:#cff4fc;--bs-table-border-color:#a6c3ca;--bs-table-striped-bg:#c5e8ef;--bs-table-striped-color:#000;--bs-table-active-bg:#badce3;--bs-table-active-color:#000;--bs-table-hover-bg:#bfe2e9;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}\n.table-warning{--bs-table-color:#000;--bs-table-bg:#fff3cd;--bs-table-border-color:#ccc2a4;--bs-table-striped-bg:#f2e7c3;--bs-table-striped-color:#000;--bs-table-active-bg:#e6dbb9;--bs-table-active-color:#000;--bs-table-hover-bg:#ece1be;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}\n.table-danger{--bs-table-color:#000;--bs-table-bg:#f8d7da;--bs-table-border-color:#c6acae;--bs-table-striped-bg:#eccccf;--bs-table-striped-color:#000;--bs-table-active-bg:#dfc2c4;--bs-table-active-color:#000;--bs-table-hover-bg:#e5c7ca;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}\n.table-light{--bs-table-color:#000;--bs-table-bg:#f8f9fa;--bs-table-border-color:#c6c7c8;--bs-table-striped-bg:#ecedee;--bs-table-striped-color:#000;--bs-table-active-bg:#dfe0e1;--bs-table-active-color:#000;--bs-table-hover-bg:#e5e6e7;--bs-table-hover-color:#000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}\n.table-dark{--bs-table-color:#fff;--bs-table-bg:#212529;--bs-table-border-color:#4d5154;--bs-table-striped-bg:#2c3034;--bs-table-striped-color:#fff;--bs-table-active-bg:#373b3e;--bs-table-active-color:#fff;--bs-table-hover-bg:#323539;--bs-table-hover-color:#fff;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}\n.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}\n@media (max-width:575.98px){.table-responsive-sm{overflow-x:auto;-webkit-overflow-scrolling:touch}}\n@media (max-width:767.98px){.table-responsive-md{overflow-x:auto;-webkit-overflow-scrolling:touch}}\n@media (max-width:991.98px){.table-responsive-lg{overflow-x:auto;-webkit-overflow-scrolling:touch}}\n@media (max-width:1199.98px){.table-responsive-xl{overflow-x:auto;-webkit-overflow-scrolling:touch}}\n@media (max-width:1399.98px){.table-responsive-xxl{overflow-x:auto;-webkit-overflow-scrolling:touch}}\n.form-label{margin-bottom:.5rem}\n.col-form-label{padding-top:calc(.375rem + var(--bs-border-width));padding-bottom:calc(.375rem + var(--bs-border-width));margin-bottom:0;font-size:inherit;line-height:1.5}\n.col-form-label-lg{padding-top:calc(.5rem + var(--bs-border-width));padding-bottom:calc(.5rem + var(--bs-border-width));font-size:1.25rem}\n.col-form-label-sm{padding-top:calc(.25rem + var(--bs-border-width));padding-bottom:calc(.25rem + var(--bs-border-width));font-size:.875rem}\n.form-text{margin-top:.25rem;font-size:.875em;color:var(--bs-secondary-color)}\n.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:var(--bs-body-color);-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--bs-body-bg);background-clip:padding-box;border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}\n@media (prefers-reduced-motion:reduce){.form-control{transition:none}}\n.form-control[type=file]{overflow:hidden}\n.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}\n.form-control:focus{color:var(--bs-body-color);background-color:var(--bs-body-bg);border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}\n.form-control::-webkit-date-and-time-value{min-width:85px;height:1.5em;margin:0}\n.form-control::-webkit-datetime-edit{display:block;padding:0}\n.form-control::placeholder{color:var(--bs-secondary-color);opacity:1}\n.form-control:disabled{background-color:var(--bs-secondary-bg);opacity:1}\n.form-control::-webkit-file-upload-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:var(--bs-body-color);background-color:var(--bs-tertiary-bg);pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:var(--bs-border-width);border-radius:0;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}\n.form-control::file-selector-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:var(--bs-body-color);background-color:var(--bs-tertiary-bg);pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:var(--bs-border-width);border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}\n@media (prefers-reduced-motion:reduce){.form-control::-webkit-file-upload-button{-webkit-transition:none;transition:none}.form-control::file-selector-button{transition:none}}\n.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:var(--bs-secondary-bg)}\n.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:var(--bs-secondary-bg)}\n.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;line-height:1.5;color:var(--bs-body-color);background-color:transparent;border:solid transparent;border-width:var(--bs-border-width) 0}\n.form-control-plaintext:focus{outline:0}\n.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}\n.form-control-sm{min-height:calc(1.5em + .5rem + calc(var(--bs-border-width) * 2));padding:.25rem .5rem;font-size:.875rem;border-radius:var(--bs-border-radius-sm)}\n.form-control-sm::-webkit-file-upload-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem}\n.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem}\n.form-control-lg{min-height:calc(1.5em + 1rem + calc(var(--bs-border-width) * 2));padding:.5rem 1rem;font-size:1.25rem;border-radius:var(--bs-border-radius-lg)}\n.form-control-lg::-webkit-file-upload-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}\n.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}\ntextarea.form-control{min-height:calc(1.5em + .75rem + calc(var(--bs-border-width) * 2))}\ntextarea.form-control-sm{min-height:calc(1.5em + .5rem + calc(var(--bs-border-width) * 2))}\ntextarea.form-control-lg{min-height:calc(1.5em + 1rem + calc(var(--bs-border-width) * 2))}\n.form-control-color{width:3rem;height:calc(1.5em + .75rem + calc(var(--bs-border-width) * 2));padding:.375rem}\n.form-control-color:not(:disabled):not([readonly]){cursor:pointer}\n.form-control-color::-moz-color-swatch{border:0!important;border-radius:var(--bs-border-radius)}\n.form-control-color::-webkit-color-swatch{border:0!important;border-radius:var(--bs-border-radius)}\n.form-control-color.form-control-sm{height:calc(1.5em + .5rem + calc(var(--bs-border-width) * 2))}\n.form-control-color.form-control-lg{height:calc(1.5em + 1rem + calc(var(--bs-border-width) * 2))}\n.form-select{--bs-form-select-bg-img:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:var(--bs-body-color);-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--bs-body-bg);background-image:var(--bs-form-select-bg-img),var(--bs-form-select-bg-icon,none);background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}\n@media (prefers-reduced-motion:reduce){.form-select{transition:none}}\n.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}\n.form-select[multiple],.form-select[size]:not([size=\"1\"]){padding-right:.75rem;background-image:none}\n.form-select:disabled{background-color:var(--bs-secondary-bg)}\n.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 var(--bs-body-color)}\n.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem;border-radius:var(--bs-border-radius-sm)}\n.form-select-lg{padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem;border-radius:var(--bs-border-radius-lg)}\n[data-bs-theme=dark] .form-select{--bs-form-select-bg-img:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23dee2e6' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\")}\n.form-check{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:.125rem}\n.form-check .form-check-input{float:left;margin-left:-1.5em}\n.form-check-reverse{padding-right:1.5em;padding-left:0;text-align:right}\n.form-check-reverse .form-check-input{float:right;margin-right:-1.5em;margin-left:0}\n.form-check-input{--bs-form-check-bg:var(--bs-body-bg);flex-shrink:0;width:1em;height:1em;margin-top:.25em;vertical-align:top;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--bs-form-check-bg);background-image:var(--bs-form-check-bg-image);background-repeat:no-repeat;background-position:center;background-size:contain;border:var(--bs-border-width) solid var(--bs-border-color);-webkit-print-color-adjust:exact;color-adjust:exact;print-color-adjust:exact}\n.form-check-input[type=checkbox]{border-radius:.25em}\n.form-check-input[type=radio]{border-radius:50%}\n.form-check-input:active{filter:brightness(90%)}\n.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}\n.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}\n.form-check-input:checked[type=checkbox]{--bs-form-check-bg-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")}\n.form-check-input:checked[type=radio]{--bs-form-check-bg-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")}\n.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;--bs-form-check-bg-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\")}\n.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}\n.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{cursor:default;opacity:.5}\n.form-switch{padding-left:2.5em}\n.form-switch .form-check-input{--bs-form-switch-bg:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\");width:2em;margin-left:-2.5em;background-image:var(--bs-form-switch-bg);background-position:left center;border-radius:2em;transition:background-position .15s ease-in-out}\n@media (prefers-reduced-motion:reduce){.form-switch .form-check-input{transition:none}}\n.form-switch .form-check-input:focus{--bs-form-switch-bg:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\")}\n.form-switch .form-check-input:checked{background-position:right center;--bs-form-switch-bg:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}\n.form-switch.form-check-reverse{padding-right:2.5em;padding-left:0}\n.form-switch.form-check-reverse .form-check-input{margin-right:-2.5em;margin-left:0}\n.form-check-inline{display:inline-block;margin-right:1rem}\n.btn-check{position:absolute;clip:rect(0,0,0,0);pointer-events:none}\n.btn-check:disabled+.btn,.btn-check[disabled]+.btn{pointer-events:none;filter:none;opacity:.65}\n[data-bs-theme=dark] .form-switch .form-check-input:not(:checked):not(:focus){--bs-form-switch-bg:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%28255, 255, 255, 0.25%29'/%3e%3c/svg%3e\")}\n.form-range{width:100%;height:1.5rem;padding:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent}\n.form-range:focus{outline:0}\n.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}\n.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}\n.form-range::-moz-focus-outer{border:0}\n.form-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;-webkit-appearance:none;appearance:none;background-color:#0d6efd;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}\n@media (prefers-reduced-motion:reduce){.form-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}\n.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}\n.form-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:var(--bs-secondary-bg);border-color:transparent;border-radius:1rem}\n.form-range::-moz-range-thumb{width:1rem;height:1rem;-moz-appearance:none;appearance:none;background-color:#0d6efd;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}\n@media (prefers-reduced-motion:reduce){.form-range::-moz-range-thumb{-moz-transition:none;transition:none}}\n.form-range::-moz-range-thumb:active{background-color:#b6d4fe}\n.form-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:var(--bs-secondary-bg);border-color:transparent;border-radius:1rem}\n.form-range:disabled{pointer-events:none}\n.form-range:disabled::-webkit-slider-thumb{background-color:var(--bs-secondary-color)}\n.form-range:disabled::-moz-range-thumb{background-color:var(--bs-secondary-color)}\n.form-floating{position:relative}\n.form-floating>.form-control,.form-floating>.form-control-plaintext,.form-floating>.form-select{height:calc(3.5rem + calc(var(--bs-border-width) * 2));min-height:calc(3.5rem + calc(var(--bs-border-width) * 2));line-height:1.25}\n.form-floating>label{position:absolute;top:0;left:0;z-index:2;max-width:100%;height:100%;padding:1rem .75rem;overflow:hidden;color:rgba(var(--bs-body-color-rgb),.65);text-align:start;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;border:var(--bs-border-width) solid transparent;transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out}\n@media (prefers-reduced-motion:reduce){.form-floating>label{transition:none}}\n.form-floating>.form-control,.form-floating>.form-control-plaintext{padding:1rem .75rem}\n.form-floating>.form-control-plaintext::placeholder,.form-floating>.form-control::placeholder{color:transparent}\n.form-floating>.form-control-plaintext:focus,.form-floating>.form-control-plaintext:not(:placeholder-shown),.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}\n.form-floating>.form-control-plaintext:-webkit-autofill,.form-floating>.form-control:-webkit-autofill{padding-top:1.625rem;padding-bottom:.625rem}\n.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem;padding-left:.75rem}\n.form-floating>.form-control-plaintext~label,.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label{transform:scale(.85) translateY(-.5rem) translateX(.15rem)}\n.form-floating>.form-control:-webkit-autofill~label{transform:scale(.85) translateY(-.5rem) translateX(.15rem)}\n.form-floating>textarea:focus~label::after,.form-floating>textarea:not(:placeholder-shown)~label::after{position:absolute;inset:1rem 0.375rem;z-index:-1;height:1.5em;content:\"\";background-color:var(--bs-body-bg);border-radius:var(--bs-border-radius)}\n.form-floating>textarea:disabled~label::after{background-color:var(--bs-secondary-bg)}\n.form-floating>.form-control-plaintext~label{border-width:var(--bs-border-width) 0}\n.form-floating>.form-control:disabled~label,.form-floating>:disabled~label{color:#6c757d}\n.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}\n.input-group>.form-control,.input-group>.form-floating,.input-group>.form-select{position:relative;flex:1 1 auto;width:1%;min-width:0}\n.input-group>.form-control:focus,.input-group>.form-floating:focus-within,.input-group>.form-select:focus{z-index:5}\n.input-group .btn{position:relative;z-index:2}\n.input-group .btn:focus{z-index:5}\n.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:var(--bs-body-color);text-align:center;white-space:nowrap;background-color:var(--bs-tertiary-bg);border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius)}\n.input-group-lg>.btn,.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;border-radius:var(--bs-border-radius-lg)}\n.input-group-sm>.btn,.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text{padding:.25rem .5rem;font-size:.875rem;border-radius:var(--bs-border-radius-sm)}\n.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}\n.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control,.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select,.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating){border-top-right-radius:0;border-bottom-right-radius:0}\n.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-control,.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-select,.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating){border-top-right-radius:0;border-bottom-right-radius:0}\n.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){margin-left:calc(-1 * var(--bs-border-width));border-top-left-radius:0;border-bottom-left-radius:0}\n.input-group>.form-floating:not(:first-child)>.form-control,.input-group>.form-floating:not(:first-child)>.form-select{border-top-left-radius:0;border-bottom-left-radius:0}\n.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:var(--bs-form-valid-color)}\n.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:var(--bs-success);border-radius:var(--bs-border-radius)}\n.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}\n.form-control.is-valid,.was-validated .form-control:valid{border-color:var(--bs-form-valid-border-color);padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}\n.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:var(--bs-form-valid-border-color);box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)}\n.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}\n.form-select.is-valid,.was-validated .form-select:valid{border-color:var(--bs-form-valid-border-color)}\n.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size=\"1\"],.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size=\"1\"]{--bs-form-select-bg-icon:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1'/%3e%3c/svg%3e\");padding-right:4.125rem;background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}\n.form-select.is-valid:focus,.was-validated .form-select:valid:focus{border-color:var(--bs-form-valid-border-color);box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)}\n.form-control-color.is-valid,.was-validated .form-control-color:valid{width:calc(3rem + calc(1.5em + .75rem))}\n.form-check-input.is-valid,.was-validated .form-check-input:valid{border-color:var(--bs-form-valid-border-color)}\n.form-check-input.is-valid:checked,.was-validated .form-check-input:valid:checked{background-color:var(--bs-form-valid-color)}\n.form-check-input.is-valid:focus,.was-validated .form-check-input:valid:focus{box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)}\n.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:var(--bs-form-valid-color)}\n.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}\n.input-group>.form-control:not(:focus).is-valid,.input-group>.form-floating:not(:focus-within).is-valid,.input-group>.form-select:not(:focus).is-valid,.was-validated .input-group>.form-control:not(:focus):valid,.was-validated .input-group>.form-floating:not(:focus-within):valid,.was-validated .input-group>.form-select:not(:focus):valid{z-index:3}\n.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:var(--bs-form-invalid-color)}\n.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:var(--bs-danger);border-radius:var(--bs-border-radius)}\n.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}\n.form-control.is-invalid,.was-validated .form-control:invalid{border-color:var(--bs-form-invalid-border-color);padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}\n.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:var(--bs-form-invalid-border-color);box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)}\n.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}\n.form-select.is-invalid,.was-validated .form-select:invalid{border-color:var(--bs-form-invalid-border-color)}\n.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size=\"1\"],.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size=\"1\"]{--bs-form-select-bg-icon:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");padding-right:4.125rem;background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}\n.form-select.is-invalid:focus,.was-validated .form-select:invalid:focus{border-color:var(--bs-form-invalid-border-color);box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)}\n.form-control-color.is-invalid,.was-validated .form-control-color:invalid{width:calc(3rem + calc(1.5em + .75rem))}\n.form-check-input.is-invalid,.was-validated .form-check-input:invalid{border-color:var(--bs-form-invalid-border-color)}\n.form-check-input.is-invalid:checked,.was-validated .form-check-input:invalid:checked{background-color:var(--bs-form-invalid-color)}\n.form-check-input.is-invalid:focus,.was-validated .form-check-input:invalid:focus{box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)}\n.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:var(--bs-form-invalid-color)}\n.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}\n.input-group>.form-control:not(:focus).is-invalid,.input-group>.form-floating:not(:focus-within).is-invalid,.input-group>.form-select:not(:focus).is-invalid,.was-validated .input-group>.form-control:not(:focus):invalid,.was-validated .input-group>.form-floating:not(:focus-within):invalid,.was-validated .input-group>.form-select:not(:focus):invalid{z-index:4}\n.btn{--bs-btn-padding-x:0.75rem;--bs-btn-padding-y:0.375rem;--bs-btn-font-family: ;--bs-btn-font-size:1rem;--bs-btn-font-weight:400;--bs-btn-line-height:1.5;--bs-btn-color:var(--bs-body-color);--bs-btn-bg:transparent;--bs-btn-border-width:var(--bs-border-width);--bs-btn-border-color:transparent;--bs-btn-border-radius:var(--bs-border-radius);--bs-btn-hover-border-color:transparent;--bs-btn-box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.15),0 1px 1px rgba(0, 0, 0, 0.075);--bs-btn-disabled-opacity:0.65;--bs-btn-focus-box-shadow:0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);display:inline-block;padding:var(--bs-btn-padding-y) var(--bs-btn-padding-x);font-family:var(--bs-btn-font-family);font-size:var(--bs-btn-font-size);font-weight:var(--bs-btn-font-weight);line-height:var(--bs-btn-line-height);color:var(--bs-btn-color);text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;border:var(--bs-btn-border-width) solid var(--bs-btn-border-color);border-radius:var(--bs-btn-border-radius);background-color:var(--bs-btn-bg);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}\n@media (prefers-reduced-motion:reduce){.btn{transition:none}}\n.btn:hover{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color)}\n.btn-check+.btn:hover{color:var(--bs-btn-color);background-color:var(--bs-btn-bg);border-color:var(--bs-btn-border-color)}\n.btn:focus-visible{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color);outline:0;box-shadow:var(--bs-btn-focus-box-shadow)}\n.btn-check:focus-visible+.btn{border-color:var(--bs-btn-hover-border-color);outline:0;box-shadow:var(--bs-btn-focus-box-shadow)}\n.btn-check:checked+.btn,.btn.active,.btn.show,.btn:first-child:active,:not(.btn-check)+.btn:active{color:var(--bs-btn-active-color);background-color:var(--bs-btn-active-bg);border-color:var(--bs-btn-active-border-color)}\n.btn-check:checked+.btn:focus-visible,.btn.active:focus-visible,.btn.show:focus-visible,.btn:first-child:active:focus-visible,:not(.btn-check)+.btn:active:focus-visible{box-shadow:var(--bs-btn-focus-box-shadow)}\n.btn-check:checked:focus-visible+.btn{box-shadow:var(--bs-btn-focus-box-shadow)}\n.btn.disabled,.btn:disabled,fieldset:disabled .btn{color:var(--bs-btn-disabled-color);pointer-events:none;background-color:var(--bs-btn-disabled-bg);border-color:var(--bs-btn-disabled-border-color);opacity:var(--bs-btn-disabled-opacity)}\n.btn-primary{--bs-btn-color:#fff;--bs-btn-bg:#0d6efd;--bs-btn-border-color:#0d6efd;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#0b5ed7;--bs-btn-hover-border-color:#0a58ca;--bs-btn-focus-shadow-rgb:49,132,253;--bs-btn-active-color:#fff;--bs-btn-active-bg:#0a58ca;--bs-btn-active-border-color:#0a53be;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#0d6efd;--bs-btn-disabled-border-color:#0d6efd}\n.btn-secondary{--bs-btn-color:#fff;--bs-btn-bg:#6c757d;--bs-btn-border-color:#6c757d;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#5c636a;--bs-btn-hover-border-color:#565e64;--bs-btn-focus-shadow-rgb:130,138,145;--bs-btn-active-color:#fff;--bs-btn-active-bg:#565e64;--bs-btn-active-border-color:#51585e;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#6c757d;--bs-btn-disabled-border-color:#6c757d}\n.btn-success{--bs-btn-color:#fff;--bs-btn-bg:#198754;--bs-btn-border-color:#198754;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#157347;--bs-btn-hover-border-color:#146c43;--bs-btn-focus-shadow-rgb:60,153,110;--bs-btn-active-color:#fff;--bs-btn-active-bg:#146c43;--bs-btn-active-border-color:#13653f;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#198754;--bs-btn-disabled-border-color:#198754}\n.btn-info{--bs-btn-color:#000;--bs-btn-bg:#0dcaf0;--bs-btn-border-color:#0dcaf0;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#31d2f2;--bs-btn-hover-border-color:#25cff2;--bs-btn-focus-shadow-rgb:11,172,204;--bs-btn-active-color:#000;--bs-btn-active-bg:#3dd5f3;--bs-btn-active-border-color:#25cff2;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#0dcaf0;--bs-btn-disabled-border-color:#0dcaf0}\n.btn-warning{--bs-btn-color:#000;--bs-btn-bg:#ffc107;--bs-btn-border-color:#ffc107;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#ffca2c;--bs-btn-hover-border-color:#ffc720;--bs-btn-focus-shadow-rgb:217,164,6;--bs-btn-active-color:#000;--bs-btn-active-bg:#ffcd39;--bs-btn-active-border-color:#ffc720;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#ffc107;--bs-btn-disabled-border-color:#ffc107}\n.btn-danger{--bs-btn-color:#fff;--bs-btn-bg:#dc3545;--bs-btn-border-color:#dc3545;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#bb2d3b;--bs-btn-hover-border-color:#b02a37;--bs-btn-focus-shadow-rgb:225,83,97;--bs-btn-active-color:#fff;--bs-btn-active-bg:#b02a37;--bs-btn-active-border-color:#a52834;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#dc3545;--bs-btn-disabled-border-color:#dc3545}\n.btn-light{--bs-btn-color:#000;--bs-btn-bg:#f8f9fa;--bs-btn-border-color:#f8f9fa;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#d3d4d5;--bs-btn-hover-border-color:#c6c7c8;--bs-btn-focus-shadow-rgb:211,212,213;--bs-btn-active-color:#000;--bs-btn-active-bg:#c6c7c8;--bs-btn-active-border-color:#babbbc;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#f8f9fa;--bs-btn-disabled-border-color:#f8f9fa}\n.btn-dark{--bs-btn-color:#fff;--bs-btn-bg:#212529;--bs-btn-border-color:#212529;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#424649;--bs-btn-hover-border-color:#373b3e;--bs-btn-focus-shadow-rgb:66,70,73;--bs-btn-active-color:#fff;--bs-btn-active-bg:#4d5154;--bs-btn-active-border-color:#373b3e;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#212529;--bs-btn-disabled-border-color:#212529}\n.btn-outline-primary{--bs-btn-color:#0d6efd;--bs-btn-border-color:#0d6efd;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#0d6efd;--bs-btn-hover-border-color:#0d6efd;--bs-btn-focus-shadow-rgb:13,110,253;--bs-btn-active-color:#fff;--bs-btn-active-bg:#0d6efd;--bs-btn-active-border-color:#0d6efd;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#0d6efd;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#0d6efd;--bs-gradient:none}\n.btn-outline-secondary{--bs-btn-color:#6c757d;--bs-btn-border-color:#6c757d;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#6c757d;--bs-btn-hover-border-color:#6c757d;--bs-btn-focus-shadow-rgb:108,117,125;--bs-btn-active-color:#fff;--bs-btn-active-bg:#6c757d;--bs-btn-active-border-color:#6c757d;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#6c757d;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#6c757d;--bs-gradient:none}\n.btn-outline-success{--bs-btn-color:#198754;--bs-btn-border-color:#198754;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#198754;--bs-btn-hover-border-color:#198754;--bs-btn-focus-shadow-rgb:25,135,84;--bs-btn-active-color:#fff;--bs-btn-active-bg:#198754;--bs-btn-active-border-color:#198754;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#198754;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#198754;--bs-gradient:none}\n.btn-outline-info{--bs-btn-color:#0dcaf0;--bs-btn-border-color:#0dcaf0;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#0dcaf0;--bs-btn-hover-border-color:#0dcaf0;--bs-btn-focus-shadow-rgb:13,202,240;--bs-btn-active-color:#000;--bs-btn-active-bg:#0dcaf0;--bs-btn-active-border-color:#0dcaf0;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#0dcaf0;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#0dcaf0;--bs-gradient:none}\n.btn-outline-warning{--bs-btn-color:#ffc107;--bs-btn-border-color:#ffc107;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#ffc107;--bs-btn-hover-border-color:#ffc107;--bs-btn-focus-shadow-rgb:255,193,7;--bs-btn-active-color:#000;--bs-btn-active-bg:#ffc107;--bs-btn-active-border-color:#ffc107;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#ffc107;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#ffc107;--bs-gradient:none}\n.btn-outline-danger{--bs-btn-color:#dc3545;--bs-btn-border-color:#dc3545;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#dc3545;--bs-btn-hover-border-color:#dc3545;--bs-btn-focus-shadow-rgb:220,53,69;--bs-btn-active-color:#fff;--bs-btn-active-bg:#dc3545;--bs-btn-active-border-color:#dc3545;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#dc3545;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#dc3545;--bs-gradient:none}\n.btn-outline-light{--bs-btn-color:#f8f9fa;--bs-btn-border-color:#f8f9fa;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#f8f9fa;--bs-btn-hover-border-color:#f8f9fa;--bs-btn-focus-shadow-rgb:248,249,250;--bs-btn-active-color:#000;--bs-btn-active-bg:#f8f9fa;--bs-btn-active-border-color:#f8f9fa;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#f8f9fa;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#f8f9fa;--bs-gradient:none}\n.btn-outline-dark{--bs-btn-color:#212529;--bs-btn-border-color:#212529;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#212529;--bs-btn-hover-border-color:#212529;--bs-btn-focus-shadow-rgb:33,37,41;--bs-btn-active-color:#fff;--bs-btn-active-bg:#212529;--bs-btn-active-border-color:#212529;--bs-btn-active-shadow:inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color:#212529;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#212529;--bs-gradient:none}\n.btn-link{--bs-btn-font-weight:400;--bs-btn-color:var(--bs-link-color);--bs-btn-bg:transparent;--bs-btn-border-color:transparent;--bs-btn-hover-color:var(--bs-link-hover-color);--bs-btn-hover-border-color:transparent;--bs-btn-active-color:var(--bs-link-hover-color);--bs-btn-active-border-color:transparent;--bs-btn-disabled-color:#6c757d;--bs-btn-disabled-border-color:transparent;--bs-btn-box-shadow:0 0 0 #000;--bs-btn-focus-shadow-rgb:49,132,253;text-decoration:underline}\n.btn-link:focus-visible{color:var(--bs-btn-color)}\n.btn-link:hover{color:var(--bs-btn-hover-color)}\n.btn-group-lg>.btn,.btn-lg{--bs-btn-padding-y:0.5rem;--bs-btn-padding-x:1rem;--bs-btn-font-size:1.25rem;--bs-btn-border-radius:var(--bs-border-radius-lg)}\n.btn-group-sm>.btn,.btn-sm{--bs-btn-padding-y:0.25rem;--bs-btn-padding-x:0.5rem;--bs-btn-font-size:0.875rem;--bs-btn-border-radius:var(--bs-border-radius-sm)}\n.fade{transition:opacity .15s linear}\n@media (prefers-reduced-motion:reduce){.fade{transition:none}}\n.fade:not(.show){opacity:0}\n.collapse:not(.show){display:none}\n.collapsing{height:0;overflow:hidden;transition:height .35s ease}\n@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}\n.collapsing.collapse-horizontal{width:0;height:auto;transition:width .35s ease}\n@media (prefers-reduced-motion:reduce){.collapsing.collapse-horizontal{transition:none}}\n.dropdown,.dropdown-center,.dropend,.dropstart,.dropup,.dropup-center{position:relative}\n.dropdown-toggle{white-space:nowrap}\n.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}\n.dropdown-toggle:empty::after{margin-left:0}\n.dropdown-menu{--bs-dropdown-zindex:1000;--bs-dropdown-min-width:10rem;--bs-dropdown-padding-x:0;--bs-dropdown-padding-y:0.5rem;--bs-dropdown-spacer:0.125rem;--bs-dropdown-font-size:1rem;--bs-dropdown-color:var(--bs-body-color);--bs-dropdown-bg:var(--bs-body-bg);--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-border-radius:var(--bs-border-radius);--bs-dropdown-border-width:var(--bs-border-width);--bs-dropdown-inner-border-radius:calc(var(--bs-border-radius) - var(--bs-border-width));--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-divider-margin-y:0.5rem;--bs-dropdown-box-shadow:var(--bs-box-shadow);--bs-dropdown-link-color:var(--bs-body-color);--bs-dropdown-link-hover-color:var(--bs-body-color);--bs-dropdown-link-hover-bg:var(--bs-tertiary-bg);--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:var(--bs-tertiary-color);--bs-dropdown-item-padding-x:1rem;--bs-dropdown-item-padding-y:0.25rem;--bs-dropdown-header-color:#6c757d;--bs-dropdown-header-padding-x:1rem;--bs-dropdown-header-padding-y:0.5rem;position:absolute;z-index:var(--bs-dropdown-zindex);display:none;min-width:var(--bs-dropdown-min-width);padding:var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);margin:0;font-size:var(--bs-dropdown-font-size);color:var(--bs-dropdown-color);text-align:left;list-style:none;background-color:var(--bs-dropdown-bg);background-clip:padding-box;border:var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);border-radius:var(--bs-dropdown-border-radius)}\n.dropdown-menu[data-bs-popper]{top:100%;left:0;margin-top:var(--bs-dropdown-spacer)}\n.dropdown-menu-start{--bs-position:start}\n.dropdown-menu-start[data-bs-popper]{right:auto;left:0}\n.dropdown-menu-end{--bs-position:end}\n.dropdown-menu-end[data-bs-popper]{right:0;left:auto}\n@media (min-width:576px){.dropdown-menu-sm-start{--bs-position:start}.dropdown-menu-sm-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-sm-end{--bs-position:end}.dropdown-menu-sm-end[data-bs-popper]{right:0;left:auto}}\n@media (min-width:768px){.dropdown-menu-md-start{--bs-position:start}.dropdown-menu-md-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-md-end{--bs-position:end}.dropdown-menu-md-end[data-bs-popper]{right:0;left:auto}}\n@media (min-width:992px){.dropdown-menu-lg-start{--bs-position:start}.dropdown-menu-lg-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-lg-end{--bs-position:end}.dropdown-menu-lg-end[data-bs-popper]{right:0;left:auto}}\n@media (min-width:1200px){.dropdown-menu-xl-start{--bs-position:start}.dropdown-menu-xl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xl-end{--bs-position:end}.dropdown-menu-xl-end[data-bs-popper]{right:0;left:auto}}\n@media (min-width:1400px){.dropdown-menu-xxl-start{--bs-position:start}.dropdown-menu-xxl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xxl-end{--bs-position:end}.dropdown-menu-xxl-end[data-bs-popper]{right:0;left:auto}}\n.dropup .dropdown-menu[data-bs-popper]{top:auto;bottom:100%;margin-top:0;margin-bottom:var(--bs-dropdown-spacer)}\n.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}\n.dropup .dropdown-toggle:empty::after{margin-left:0}\n.dropend .dropdown-menu[data-bs-popper]{top:0;right:auto;left:100%;margin-top:0;margin-left:var(--bs-dropdown-spacer)}\n.dropend .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}\n.dropend .dropdown-toggle:empty::after{margin-left:0}\n.dropend .dropdown-toggle::after{vertical-align:0}\n.dropstart .dropdown-menu[data-bs-popper]{top:0;right:100%;left:auto;margin-top:0;margin-right:var(--bs-dropdown-spacer)}\n.dropstart .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}\n.dropstart .dropdown-toggle::after{display:none}\n.dropstart .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}\n.dropstart .dropdown-toggle:empty::after{margin-left:0}\n.dropstart .dropdown-toggle::before{vertical-align:0}\n.dropdown-divider{height:0;margin:var(--bs-dropdown-divider-margin-y) 0;overflow:hidden;border-top:1px solid var(--bs-dropdown-divider-bg);opacity:1}\n.dropdown-item{display:block;width:100%;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);clear:both;font-weight:400;color:var(--bs-dropdown-link-color);text-align:inherit;text-decoration:none;white-space:nowrap;background-color:transparent;border:0;border-radius:var(--bs-dropdown-item-border-radius,0)}\n.dropdown-item:focus,.dropdown-item:hover{color:var(--bs-dropdown-link-hover-color);background-color:var(--bs-dropdown-link-hover-bg)}\n.dropdown-item.active,.dropdown-item:active{color:var(--bs-dropdown-link-active-color);text-decoration:none;background-color:var(--bs-dropdown-link-active-bg)}\n.dropdown-item.disabled,.dropdown-item:disabled{color:var(--bs-dropdown-link-disabled-color);pointer-events:none;background-color:transparent}\n.dropdown-menu.show{display:block}\n.dropdown-header{display:block;padding:var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);margin-bottom:0;font-size:.875rem;color:var(--bs-dropdown-header-color);white-space:nowrap}\n.dropdown-item-text{display:block;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);color:var(--bs-dropdown-link-color)}\n.dropdown-menu-dark{--bs-dropdown-color:#dee2e6;--bs-dropdown-bg:#343a40;--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-box-shadow: ;--bs-dropdown-link-color:#dee2e6;--bs-dropdown-link-hover-color:#fff;--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-link-hover-bg:rgba(255, 255, 255, 0.15);--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:#adb5bd;--bs-dropdown-header-color:#adb5bd}\n.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}\n.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}\n.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}\n.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}\n.btn-toolbar .input-group{width:auto}\n.btn-group{border-radius:var(--bs-border-radius)}\n.btn-group>.btn-group:not(:first-child),.btn-group>:not(.btn-check:first-child)+.btn{margin-left:calc(-1 * var(--bs-border-width))}\n.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn.dropdown-toggle-split:first-child,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}\n.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn{border-top-left-radius:0;border-bottom-left-radius:0}\n.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}\n.dropdown-toggle-split::after,.dropend .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}\n.dropstart .dropdown-toggle-split::before{margin-right:0}\n.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}\n.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}\n.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}\n.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}\n.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:calc(-1 * var(--bs-border-width))}\n.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}\n.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:nth-child(n+3),.btn-group-vertical>:not(.btn-check)+.btn{border-top-left-radius:0;border-top-right-radius:0}\n.nav{--bs-nav-link-padding-x:1rem;--bs-nav-link-padding-y:0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-link-color);--bs-nav-link-hover-color:var(--bs-link-hover-color);--bs-nav-link-disabled-color:var(--bs-secondary-color);display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}\n.nav-link{display:block;padding:var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);font-size:var(--bs-nav-link-font-size);font-weight:var(--bs-nav-link-font-weight);color:var(--bs-nav-link-color);text-decoration:none;background:0 0;border:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}\n@media (prefers-reduced-motion:reduce){.nav-link{transition:none}}\n.nav-link:focus,.nav-link:hover{color:var(--bs-nav-link-hover-color)}\n.nav-link:focus-visible{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}\n.nav-link.disabled,.nav-link:disabled{color:var(--bs-nav-link-disabled-color);pointer-events:none;cursor:default}\n.nav-tabs{--bs-nav-tabs-border-width:var(--bs-border-width);--bs-nav-tabs-border-color:var(--bs-border-color);--bs-nav-tabs-border-radius:var(--bs-border-radius);--bs-nav-tabs-link-hover-border-color:var(--bs-secondary-bg) var(--bs-secondary-bg) var(--bs-border-color);--bs-nav-tabs-link-active-color:var(--bs-emphasis-color);--bs-nav-tabs-link-active-bg:var(--bs-body-bg);--bs-nav-tabs-link-active-border-color:var(--bs-border-color) var(--bs-border-color) var(--bs-body-bg);border-bottom:var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color)}\n.nav-tabs .nav-link{margin-bottom:calc(-1 * var(--bs-nav-tabs-border-width));border:var(--bs-nav-tabs-border-width) solid transparent;border-top-left-radius:var(--bs-nav-tabs-border-radius);border-top-right-radius:var(--bs-nav-tabs-border-radius)}\n.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{isolation:isolate;border-color:var(--bs-nav-tabs-link-hover-border-color)}\n.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:var(--bs-nav-tabs-link-active-color);background-color:var(--bs-nav-tabs-link-active-bg);border-color:var(--bs-nav-tabs-link-active-border-color)}\n.nav-tabs .dropdown-menu{margin-top:calc(-1 * var(--bs-nav-tabs-border-width));border-top-left-radius:0;border-top-right-radius:0}\n.nav-pills{--bs-nav-pills-border-radius:var(--bs-border-radius);--bs-nav-pills-link-active-color:#fff;--bs-nav-pills-link-active-bg:#0d6efd}\n.nav-pills .nav-link{border-radius:var(--bs-nav-pills-border-radius)}\n.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:var(--bs-nav-pills-link-active-color);background-color:var(--bs-nav-pills-link-active-bg)}\n.nav-underline{--bs-nav-underline-gap:1rem;--bs-nav-underline-border-width:0.125rem;--bs-nav-underline-link-active-color:var(--bs-emphasis-color);gap:var(--bs-nav-underline-gap)}\n.nav-underline .nav-link{padding-right:0;padding-left:0;border-bottom:var(--bs-nav-underline-border-width) solid transparent}\n.nav-underline .nav-link:focus,.nav-underline .nav-link:hover{border-bottom-color:currentcolor}\n.nav-underline .nav-link.active,.nav-underline .show>.nav-link{font-weight:700;color:var(--bs-nav-underline-link-active-color);border-bottom-color:currentcolor}\n.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}\n.nav-justified .nav-item,.nav-justified>.nav-link{flex-grow:1;flex-basis:0;text-align:center}\n.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link{width:100%}\n.tab-content>.tab-pane{display:none}\n.tab-content>.active{display:block}\n.navbar{--bs-navbar-padding-x:0;--bs-navbar-padding-y:0.5rem;--bs-navbar-color:rgba(var(--bs-emphasis-color-rgb), 0.65);--bs-navbar-hover-color:rgba(var(--bs-emphasis-color-rgb), 0.8);--bs-navbar-disabled-color:rgba(var(--bs-emphasis-color-rgb), 0.3);--bs-navbar-active-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-brand-padding-y:0.3125rem;--bs-navbar-brand-margin-end:1rem;--bs-navbar-brand-font-size:1.25rem;--bs-navbar-brand-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-brand-hover-color:rgba(var(--bs-emphasis-color-rgb), 1);--bs-navbar-nav-link-padding-x:0.5rem;--bs-navbar-toggler-padding-y:0.25rem;--bs-navbar-toggler-padding-x:0.75rem;--bs-navbar-toggler-font-size:1.25rem;--bs-navbar-toggler-icon-bg:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2833, 37, 41, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");--bs-navbar-toggler-border-color:rgba(var(--bs-emphasis-color-rgb), 0.15);--bs-navbar-toggler-border-radius:var(--bs-border-radius);--bs-navbar-toggler-focus-width:0.25rem;--bs-navbar-toggler-transition:box-shadow 0.15s ease-in-out;position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:var(--bs-navbar-padding-y) var(--bs-navbar-padding-x)}\n.navbar>.container,.navbar>.container-fluid,.navbar>.container-lg,.navbar>.container-md,.navbar>.container-sm,.navbar>.container-xl,.navbar>.container-xxl{display:flex;flex-wrap:inherit;align-items:center;justify-content:space-between}\n.navbar-brand{padding-top:var(--bs-navbar-brand-padding-y);padding-bottom:var(--bs-navbar-brand-padding-y);margin-right:var(--bs-navbar-brand-margin-end);font-size:var(--bs-navbar-brand-font-size);color:var(--bs-navbar-brand-color);text-decoration:none;white-space:nowrap}\n.navbar-brand:focus,.navbar-brand:hover{color:var(--bs-navbar-brand-hover-color)}\n.navbar-nav{--bs-nav-link-padding-x:0;--bs-nav-link-padding-y:0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-navbar-color);--bs-nav-link-hover-color:var(--bs-navbar-hover-color);--bs-nav-link-disabled-color:var(--bs-navbar-disabled-color);display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}\n.navbar-nav .nav-link.active,.navbar-nav .nav-link.show{color:var(--bs-navbar-active-color)}\n.navbar-nav .dropdown-menu{position:static}\n.navbar-text{padding-top:.5rem;padding-bottom:.5rem;color:var(--bs-navbar-color)}\n.navbar-text a,.navbar-text a:focus,.navbar-text a:hover{color:var(--bs-navbar-active-color)}\n.navbar-collapse{flex-grow:1;flex-basis:100%;align-items:center}\n.navbar-toggler{padding:var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);font-size:var(--bs-navbar-toggler-font-size);line-height:1;color:var(--bs-navbar-color);background-color:transparent;border:var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);border-radius:var(--bs-navbar-toggler-border-radius);transition:var(--bs-navbar-toggler-transition)}\n@media (prefers-reduced-motion:reduce){.navbar-toggler{transition:none}}\n.navbar-toggler:hover{text-decoration:none}\n.navbar-toggler:focus{text-decoration:none;outline:0;box-shadow:0 0 0 var(--bs-navbar-toggler-focus-width)}\n.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-image:var(--bs-navbar-toggler-icon-bg);background-repeat:no-repeat;background-position:center;background-size:100%}\n.navbar-nav-scroll{max-height:var(--bs-scroll-height,75vh);overflow-y:auto}\n@media (min-width:576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}.navbar-expand-sm .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-sm .offcanvas .offcanvas-header{display:none}.navbar-expand-sm .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}\n@media (min-width:768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}.navbar-expand-md .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-md .offcanvas .offcanvas-header{display:none}.navbar-expand-md .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}\n@media (min-width:992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}.navbar-expand-lg .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-lg .offcanvas .offcanvas-header{display:none}.navbar-expand-lg .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}\n@media (min-width:1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}.navbar-expand-xl .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-xl .offcanvas .offcanvas-header{display:none}.navbar-expand-xl .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}\n@media (min-width:1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}.navbar-expand-xxl .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}.navbar-expand-xxl .offcanvas .offcanvas-header{display:none}.navbar-expand-xxl .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}\n.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}\n.navbar-expand .navbar-nav{flex-direction:row}\n.navbar-expand .navbar-nav .dropdown-menu{position:absolute}\n.navbar-expand .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}\n.navbar-expand .navbar-nav-scroll{overflow:visible}\n.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}\n.navbar-expand .navbar-toggler{display:none}\n.navbar-expand .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto!important;height:auto!important;visibility:visible!important;background-color:transparent!important;border:0!important;transform:none!important;transition:none}\n.navbar-expand .offcanvas .offcanvas-header{display:none}\n.navbar-expand .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}\n.navbar-dark,.navbar[data-bs-theme=dark]{--bs-navbar-color:rgba(255, 255, 255, 0.55);--bs-navbar-hover-color:rgba(255, 255, 255, 0.75);--bs-navbar-disabled-color:rgba(255, 255, 255, 0.25);--bs-navbar-active-color:#fff;--bs-navbar-brand-color:#fff;--bs-navbar-brand-hover-color:#fff;--bs-navbar-toggler-border-color:rgba(255, 255, 255, 0.1);--bs-navbar-toggler-icon-bg:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}\n[data-bs-theme=dark] .navbar-toggler-icon{--bs-navbar-toggler-icon-bg:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}\n.card{--bs-card-spacer-y:1rem;--bs-card-spacer-x:1rem;--bs-card-title-spacer-y:0.5rem;--bs-card-title-color: ;--bs-card-subtitle-color: ;--bs-card-border-width:var(--bs-border-width);--bs-card-border-color:var(--bs-border-color-translucent);--bs-card-border-radius:var(--bs-border-radius);--bs-card-box-shadow: ;--bs-card-inner-border-radius:calc(var(--bs-border-radius) - (var(--bs-border-width)));--bs-card-cap-padding-y:0.5rem;--bs-card-cap-padding-x:1rem;--bs-card-cap-bg:rgba(var(--bs-body-color-rgb), 0.03);--bs-card-cap-color: ;--bs-card-height: ;--bs-card-color: ;--bs-card-bg:var(--bs-body-bg);--bs-card-img-overlay-padding:1rem;--bs-card-group-margin:0.75rem;position:relative;display:flex;flex-direction:column;min-width:0;height:var(--bs-card-height);color:var(--bs-body-color);word-wrap:break-word;background-color:var(--bs-card-bg);background-clip:border-box;border:var(--bs-card-border-width) solid var(--bs-card-border-color);border-radius:var(--bs-card-border-radius)}\n.card>hr{margin-right:0;margin-left:0}\n.card>.list-group{border-top:inherit;border-bottom:inherit}\n.card>.list-group:first-child{border-top-width:0;border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}\n.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius)}\n.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}\n.card-body{flex:1 1 auto;padding:var(--bs-card-spacer-y) var(--bs-card-spacer-x);color:var(--bs-card-color)}\n.card-title{margin-bottom:var(--bs-card-title-spacer-y);color:var(--bs-card-title-color)}\n.card-subtitle{margin-top:calc(-.5 * var(--bs-card-title-spacer-y));margin-bottom:0;color:var(--bs-card-subtitle-color)}\n.card-text:last-child{margin-bottom:0}\n.card-link+.card-link{margin-left:var(--bs-card-spacer-x)}\n.card-header{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);margin-bottom:0;color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-bottom:var(--bs-card-border-width) solid var(--bs-card-border-color)}\n.card-header:first-child{border-radius:var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0}\n.card-footer{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-top:var(--bs-card-border-width) solid var(--bs-card-border-color)}\n.card-footer:last-child{border-radius:0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius)}\n.card-header-tabs{margin-right:calc(-.5 * var(--bs-card-cap-padding-x));margin-bottom:calc(-1 * var(--bs-card-cap-padding-y));margin-left:calc(-.5 * var(--bs-card-cap-padding-x));border-bottom:0}\n.card-header-tabs .nav-link.active{background-color:var(--bs-card-bg);border-bottom-color:var(--bs-card-bg)}\n.card-header-pills{margin-right:calc(-.5 * var(--bs-card-cap-padding-x));margin-left:calc(-.5 * var(--bs-card-cap-padding-x))}\n.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:var(--bs-card-img-overlay-padding);border-radius:var(--bs-card-inner-border-radius)}\n.card-img,.card-img-bottom,.card-img-top{width:100%}\n.card-img,.card-img-top{border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}\n.card-img,.card-img-bottom{border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius)}\n.card-group>.card{margin-bottom:var(--bs-card-group-margin)}\n@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}\n.accordion{--bs-accordion-color:var(--bs-body-color);--bs-accordion-bg:var(--bs-body-bg);--bs-accordion-transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,border-radius 0.15s ease;--bs-accordion-border-color:var(--bs-border-color);--bs-accordion-border-width:var(--bs-border-width);--bs-accordion-border-radius:var(--bs-border-radius);--bs-accordion-inner-border-radius:calc(var(--bs-border-radius) - (var(--bs-border-width)));--bs-accordion-btn-padding-x:1.25rem;--bs-accordion-btn-padding-y:1rem;--bs-accordion-btn-color:var(--bs-body-color);--bs-accordion-btn-bg:var(--bs-accordion-bg);--bs-accordion-btn-icon:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23212529' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");--bs-accordion-btn-icon-width:1.25rem;--bs-accordion-btn-icon-transform:rotate(-180deg);--bs-accordion-btn-icon-transition:transform 0.2s ease-in-out;--bs-accordion-btn-active-icon:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%23052c65' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");--bs-accordion-btn-focus-box-shadow:0 0 0 0.25rem rgba(13, 110, 253, 0.25);--bs-accordion-body-padding-x:1.25rem;--bs-accordion-body-padding-y:1rem;--bs-accordion-active-color:var(--bs-primary-text-emphasis);--bs-accordion-active-bg:var(--bs-primary-bg-subtle)}\n.accordion-button{position:relative;display:flex;align-items:center;width:100%;padding:var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);font-size:1rem;color:var(--bs-accordion-btn-color);text-align:left;background-color:var(--bs-accordion-btn-bg);border:0;border-radius:0;overflow-anchor:none;transition:var(--bs-accordion-transition)}\n@media (prefers-reduced-motion:reduce){.accordion-button{transition:none}}\n.accordion-button:not(.collapsed){color:var(--bs-accordion-active-color);background-color:var(--bs-accordion-active-bg);box-shadow:inset 0 calc(-1 * var(--bs-accordion-border-width)) 0 var(--bs-accordion-border-color)}\n.accordion-button:not(.collapsed)::after{background-image:var(--bs-accordion-btn-active-icon);transform:var(--bs-accordion-btn-icon-transform)}\n.accordion-button::after{flex-shrink:0;width:var(--bs-accordion-btn-icon-width);height:var(--bs-accordion-btn-icon-width);margin-left:auto;content:\"\";background-image:var(--bs-accordion-btn-icon);background-repeat:no-repeat;background-size:var(--bs-accordion-btn-icon-width);transition:var(--bs-accordion-btn-icon-transition)}\n@media (prefers-reduced-motion:reduce){.accordion-button::after{transition:none}}\n.accordion-button:hover{z-index:2}\n.accordion-button:focus{z-index:3;outline:0;box-shadow:var(--bs-accordion-btn-focus-box-shadow)}\n.accordion-header{margin-bottom:0}\n.accordion-item{color:var(--bs-accordion-color);background-color:var(--bs-accordion-bg);border:var(--bs-accordion-border-width) solid var(--bs-accordion-border-color)}\n.accordion-item:first-of-type{border-top-left-radius:var(--bs-accordion-border-radius);border-top-right-radius:var(--bs-accordion-border-radius)}\n.accordion-item:first-of-type>.accordion-header .accordion-button{border-top-left-radius:var(--bs-accordion-inner-border-radius);border-top-right-radius:var(--bs-accordion-inner-border-radius)}\n.accordion-item:not(:first-of-type){border-top:0}\n.accordion-item:last-of-type{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}\n.accordion-item:last-of-type>.accordion-header .accordion-button.collapsed{border-bottom-right-radius:var(--bs-accordion-inner-border-radius);border-bottom-left-radius:var(--bs-accordion-inner-border-radius)}\n.accordion-item:last-of-type>.accordion-collapse{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}\n.accordion-body{padding:var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x)}\n.accordion-flush>.accordion-item{border-right:0;border-left:0;border-radius:0}\n.accordion-flush>.accordion-item:first-child{border-top:0}\n.accordion-flush>.accordion-item:last-child{border-bottom:0}\n.accordion-flush>.accordion-item>.accordion-collapse,.accordion-flush>.accordion-item>.accordion-header .accordion-button,.accordion-flush>.accordion-item>.accordion-header .accordion-button.collapsed{border-radius:0}\n[data-bs-theme=dark] .accordion-button::after{--bs-accordion-btn-icon:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236ea8fe'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'/%3e%3c/svg%3e\");--bs-accordion-btn-active-icon:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236ea8fe'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'/%3e%3c/svg%3e\")}\n.breadcrumb{--bs-breadcrumb-padding-x:0;--bs-breadcrumb-padding-y:0;--bs-breadcrumb-margin-bottom:1rem;--bs-breadcrumb-bg: ;--bs-breadcrumb-border-radius: ;--bs-breadcrumb-divider-color:var(--bs-secondary-color);--bs-breadcrumb-item-padding-x:0.5rem;--bs-breadcrumb-item-active-color:var(--bs-secondary-color);display:flex;flex-wrap:wrap;padding:var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);margin-bottom:var(--bs-breadcrumb-margin-bottom);font-size:var(--bs-breadcrumb-font-size);list-style:none;background-color:var(--bs-breadcrumb-bg);border-radius:var(--bs-breadcrumb-border-radius)}\n.breadcrumb-item+.breadcrumb-item{padding-left:var(--bs-breadcrumb-item-padding-x)}\n.breadcrumb-item+.breadcrumb-item::before{float:left;padding-right:var(--bs-breadcrumb-item-padding-x);color:var(--bs-breadcrumb-divider-color);content:var(--bs-breadcrumb-divider, \"/\")}\n.breadcrumb-item.active{color:var(--bs-breadcrumb-item-active-color)}\n.pagination{--bs-pagination-padding-x:0.75rem;--bs-pagination-padding-y:0.375rem;--bs-pagination-font-size:1rem;--bs-pagination-color:var(--bs-link-color);--bs-pagination-bg:var(--bs-body-bg);--bs-pagination-border-width:var(--bs-border-width);--bs-pagination-border-color:var(--bs-border-color);--bs-pagination-border-radius:var(--bs-border-radius);--bs-pagination-hover-color:var(--bs-link-hover-color);--bs-pagination-hover-bg:var(--bs-tertiary-bg);--bs-pagination-hover-border-color:var(--bs-border-color);--bs-pagination-focus-color:var(--bs-link-hover-color);--bs-pagination-focus-bg:var(--bs-secondary-bg);--bs-pagination-focus-box-shadow:0 0 0 0.25rem rgba(13, 110, 253, 0.25);--bs-pagination-active-color:#fff;--bs-pagination-active-bg:#0d6efd;--bs-pagination-active-border-color:#0d6efd;--bs-pagination-disabled-color:var(--bs-secondary-color);--bs-pagination-disabled-bg:var(--bs-secondary-bg);--bs-pagination-disabled-border-color:var(--bs-border-color);display:flex;padding-left:0;list-style:none}\n.page-link{position:relative;display:block;padding:var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);font-size:var(--bs-pagination-font-size);color:var(--bs-pagination-color);text-decoration:none;background-color:var(--bs-pagination-bg);border:var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}\n@media (prefers-reduced-motion:reduce){.page-link{transition:none}}\n.page-link:hover{z-index:2;color:var(--bs-pagination-hover-color);background-color:var(--bs-pagination-hover-bg);border-color:var(--bs-pagination-hover-border-color)}\n.page-link:focus{z-index:3;color:var(--bs-pagination-focus-color);background-color:var(--bs-pagination-focus-bg);outline:0;box-shadow:var(--bs-pagination-focus-box-shadow)}\n.active>.page-link,.page-link.active{z-index:3;color:var(--bs-pagination-active-color);background-color:var(--bs-pagination-active-bg);border-color:var(--bs-pagination-active-border-color)}\n.disabled>.page-link,.page-link.disabled{color:var(--bs-pagination-disabled-color);pointer-events:none;background-color:var(--bs-pagination-disabled-bg);border-color:var(--bs-pagination-disabled-border-color)}\n.page-item:not(:first-child) .page-link{margin-left:calc(-1 * var(--bs-border-width))}\n.page-item:first-child .page-link{border-top-left-radius:var(--bs-pagination-border-radius);border-bottom-left-radius:var(--bs-pagination-border-radius)}\n.page-item:last-child .page-link{border-top-right-radius:var(--bs-pagination-border-radius);border-bottom-right-radius:var(--bs-pagination-border-radius)}\n.pagination-lg{--bs-pagination-padding-x:1.5rem;--bs-pagination-padding-y:0.75rem;--bs-pagination-font-size:1.25rem;--bs-pagination-border-radius:var(--bs-border-radius-lg)}\n.pagination-sm{--bs-pagination-padding-x:0.5rem;--bs-pagination-padding-y:0.25rem;--bs-pagination-font-size:0.875rem;--bs-pagination-border-radius:var(--bs-border-radius-sm)}\n.badge{--bs-badge-padding-x:0.65em;--bs-badge-padding-y:0.35em;--bs-badge-font-size:0.75em;--bs-badge-font-weight:700;--bs-badge-color:#fff;--bs-badge-border-radius:var(--bs-border-radius);display:inline-block;padding:var(--bs-badge-padding-y) var(--bs-badge-padding-x);font-size:var(--bs-badge-font-size);font-weight:var(--bs-badge-font-weight);line-height:1;color:var(--bs-badge-color);text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:var(--bs-badge-border-radius)}\n.badge:empty{display:none}\n.btn .badge{position:relative;top:-1px}\n.alert{--bs-alert-bg:transparent;--bs-alert-padding-x:1rem;--bs-alert-padding-y:1rem;--bs-alert-margin-bottom:1rem;--bs-alert-color:inherit;--bs-alert-border-color:transparent;--bs-alert-border:var(--bs-border-width) solid var(--bs-alert-border-color);--bs-alert-border-radius:var(--bs-border-radius);--bs-alert-link-color:inherit;position:relative;padding:var(--bs-alert-padding-y) var(--bs-alert-padding-x);margin-bottom:var(--bs-alert-margin-bottom);color:var(--bs-alert-color);background-color:var(--bs-alert-bg);border:var(--bs-alert-border);border-radius:var(--bs-alert-border-radius)}\n.alert-heading{color:inherit}\n.alert-link{font-weight:700;color:var(--bs-alert-link-color)}\n.alert-dismissible{padding-right:3rem}\n.alert-dismissible .btn-close{position:absolute;top:0;right:0;z-index:2;padding:1.25rem 1rem}\n.alert-primary{--bs-alert-color:var(--bs-primary-text-emphasis);--bs-alert-bg:var(--bs-primary-bg-subtle);--bs-alert-border-color:var(--bs-primary-border-subtle);--bs-alert-link-color:var(--bs-primary-text-emphasis)}\n.alert-secondary{--bs-alert-color:var(--bs-secondary-text-emphasis);--bs-alert-bg:var(--bs-secondary-bg-subtle);--bs-alert-border-color:var(--bs-secondary-border-subtle);--bs-alert-link-color:var(--bs-secondary-text-emphasis)}\n.alert-success{--bs-alert-color:var(--bs-success-text-emphasis);--bs-alert-bg:var(--bs-success-bg-subtle);--bs-alert-border-color:var(--bs-success-border-subtle);--bs-alert-link-color:var(--bs-success-text-emphasis)}\n.alert-info{--bs-alert-color:var(--bs-info-text-emphasis);--bs-alert-bg:var(--bs-info-bg-subtle);--bs-alert-border-color:var(--bs-info-border-subtle);--bs-alert-link-color:var(--bs-info-text-emphasis)}\n.alert-warning{--bs-alert-color:var(--bs-warning-text-emphasis);--bs-alert-bg:var(--bs-warning-bg-subtle);--bs-alert-border-color:var(--bs-warning-border-subtle);--bs-alert-link-color:var(--bs-warning-text-emphasis)}\n.alert-danger{--bs-alert-color:var(--bs-danger-text-emphasis);--bs-alert-bg:var(--bs-danger-bg-subtle);--bs-alert-border-color:var(--bs-danger-border-subtle);--bs-alert-link-color:var(--bs-danger-text-emphasis)}\n.alert-light{--bs-alert-color:var(--bs-light-text-emphasis);--bs-alert-bg:var(--bs-light-bg-subtle);--bs-alert-border-color:var(--bs-light-border-subtle);--bs-alert-link-color:var(--bs-light-text-emphasis)}\n.alert-dark{--bs-alert-color:var(--bs-dark-text-emphasis);--bs-alert-bg:var(--bs-dark-bg-subtle);--bs-alert-border-color:var(--bs-dark-border-subtle);--bs-alert-link-color:var(--bs-dark-text-emphasis)}\n@keyframes progress-bar-stripes{0%{background-position-x:var(--bs-progress-height)}}\n.progress,.progress-stacked{--bs-progress-height:1rem;--bs-progress-font-size:0.75rem;--bs-progress-bg:var(--bs-secondary-bg);--bs-progress-border-radius:var(--bs-border-radius);--bs-progress-box-shadow:var(--bs-box-shadow-inset);--bs-progress-bar-color:#fff;--bs-progress-bar-bg:#0d6efd;--bs-progress-bar-transition:width 0.6s ease;display:flex;height:var(--bs-progress-height);overflow:hidden;font-size:var(--bs-progress-font-size);background-color:var(--bs-progress-bg);border-radius:var(--bs-progress-border-radius)}\n.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:var(--bs-progress-bar-color);text-align:center;white-space:nowrap;background-color:var(--bs-progress-bar-bg);transition:var(--bs-progress-bar-transition)}\n@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}\n.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:var(--bs-progress-height) var(--bs-progress-height)}\n.progress-stacked>.progress{overflow:visible}\n.progress-stacked>.progress>.progress-bar{width:100%}\n.progress-bar-animated{animation:1s linear infinite progress-bar-stripes}\n@media (prefers-reduced-motion:reduce){.progress-bar-animated{animation:none}}\n.list-group{--bs-list-group-color:var(--bs-body-color);--bs-list-group-bg:var(--bs-body-bg);--bs-list-group-border-color:var(--bs-border-color);--bs-list-group-border-width:var(--bs-border-width);--bs-list-group-border-radius:var(--bs-border-radius);--bs-list-group-item-padding-x:1rem;--bs-list-group-item-padding-y:0.5rem;--bs-list-group-action-color:var(--bs-secondary-color);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-tertiary-bg);--bs-list-group-action-active-color:var(--bs-body-color);--bs-list-group-action-active-bg:var(--bs-secondary-bg);--bs-list-group-disabled-color:var(--bs-secondary-color);--bs-list-group-disabled-bg:var(--bs-body-bg);--bs-list-group-active-color:#fff;--bs-list-group-active-bg:#0d6efd;--bs-list-group-active-border-color:#0d6efd;display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:var(--bs-list-group-border-radius)}\n.list-group-numbered{list-style-type:none;counter-reset:section}\n.list-group-numbered>.list-group-item::before{content:counters(section, \".\") \". \";counter-increment:section}\n.list-group-item{position:relative;display:block;padding:var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);color:var(--bs-list-group-color);text-decoration:none;background-color:var(--bs-list-group-bg);border:var(--bs-list-group-border-width) solid var(--bs-list-group-border-color)}\n.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}\n.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}\n.list-group-item.disabled,.list-group-item:disabled{color:var(--bs-list-group-disabled-color);pointer-events:none;background-color:var(--bs-list-group-disabled-bg)}\n.list-group-item.active{z-index:2;color:var(--bs-list-group-active-color);background-color:var(--bs-list-group-active-bg);border-color:var(--bs-list-group-active-border-color)}\n.list-group-item+.list-group-item{border-top-width:0}\n.list-group-item+.list-group-item.active{margin-top:calc(-1 * var(--bs-list-group-border-width));border-top-width:var(--bs-list-group-border-width)}\n.list-group-item-action{width:100%;color:var(--bs-list-group-action-color);text-align:inherit}\n.list-group-item-action:not(.active):focus,.list-group-item-action:not(.active):hover{z-index:1;color:var(--bs-list-group-action-hover-color);text-decoration:none;background-color:var(--bs-list-group-action-hover-bg)}\n.list-group-item-action:not(.active):active{color:var(--bs-list-group-action-active-color);background-color:var(--bs-list-group-action-active-bg)}\n.list-group-horizontal{flex-direction:row}\n.list-group-horizontal>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}\n.list-group-horizontal>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}\n.list-group-horizontal>.list-group-item.active{margin-top:0}\n.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}\n.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}\n@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}\n@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}\n@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}\n@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}\n@media (min-width:1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child:not(:first-child){border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{margin-left:calc(-1 * var(--bs-list-group-border-width));border-left-width:var(--bs-list-group-border-width)}}\n.list-group-flush{border-radius:0}\n.list-group-flush>.list-group-item{border-width:0 0 var(--bs-list-group-border-width)}\n.list-group-flush>.list-group-item:last-child{border-bottom-width:0}\n.list-group-item-primary{--bs-list-group-color:var(--bs-primary-text-emphasis);--bs-list-group-bg:var(--bs-primary-bg-subtle);--bs-list-group-border-color:var(--bs-primary-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-primary-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-primary-border-subtle);--bs-list-group-active-color:var(--bs-primary-bg-subtle);--bs-list-group-active-bg:var(--bs-primary-text-emphasis);--bs-list-group-active-border-color:var(--bs-primary-text-emphasis)}\n.list-group-item-secondary{--bs-list-group-color:var(--bs-secondary-text-emphasis);--bs-list-group-bg:var(--bs-secondary-bg-subtle);--bs-list-group-border-color:var(--bs-secondary-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-secondary-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-secondary-border-subtle);--bs-list-group-active-color:var(--bs-secondary-bg-subtle);--bs-list-group-active-bg:var(--bs-secondary-text-emphasis);--bs-list-group-active-border-color:var(--bs-secondary-text-emphasis)}\n.list-group-item-success{--bs-list-group-color:var(--bs-success-text-emphasis);--bs-list-group-bg:var(--bs-success-bg-subtle);--bs-list-group-border-color:var(--bs-success-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-success-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-success-border-subtle);--bs-list-group-active-color:var(--bs-success-bg-subtle);--bs-list-group-active-bg:var(--bs-success-text-emphasis);--bs-list-group-active-border-color:var(--bs-success-text-emphasis)}\n.list-group-item-info{--bs-list-group-color:var(--bs-info-text-emphasis);--bs-list-group-bg:var(--bs-info-bg-subtle);--bs-list-group-border-color:var(--bs-info-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-info-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-info-border-subtle);--bs-list-group-active-color:var(--bs-info-bg-subtle);--bs-list-group-active-bg:var(--bs-info-text-emphasis);--bs-list-group-active-border-color:var(--bs-info-text-emphasis)}\n.list-group-item-warning{--bs-list-group-color:var(--bs-warning-text-emphasis);--bs-list-group-bg:var(--bs-warning-bg-subtle);--bs-list-group-border-color:var(--bs-warning-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-warning-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-warning-border-subtle);--bs-list-group-active-color:var(--bs-warning-bg-subtle);--bs-list-group-active-bg:var(--bs-warning-text-emphasis);--bs-list-group-active-border-color:var(--bs-warning-text-emphasis)}\n.list-group-item-danger{--bs-list-group-color:var(--bs-danger-text-emphasis);--bs-list-group-bg:var(--bs-danger-bg-subtle);--bs-list-group-border-color:var(--bs-danger-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-danger-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-danger-border-subtle);--bs-list-group-active-color:var(--bs-danger-bg-subtle);--bs-list-group-active-bg:var(--bs-danger-text-emphasis);--bs-list-group-active-border-color:var(--bs-danger-text-emphasis)}\n.list-group-item-light{--bs-list-group-color:var(--bs-light-text-emphasis);--bs-list-group-bg:var(--bs-light-bg-subtle);--bs-list-group-border-color:var(--bs-light-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-light-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-light-border-subtle);--bs-list-group-active-color:var(--bs-light-bg-subtle);--bs-list-group-active-bg:var(--bs-light-text-emphasis);--bs-list-group-active-border-color:var(--bs-light-text-emphasis)}\n.list-group-item-dark{--bs-list-group-color:var(--bs-dark-text-emphasis);--bs-list-group-bg:var(--bs-dark-bg-subtle);--bs-list-group-border-color:var(--bs-dark-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-dark-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-dark-border-subtle);--bs-list-group-active-color:var(--bs-dark-bg-subtle);--bs-list-group-active-bg:var(--bs-dark-text-emphasis);--bs-list-group-active-border-color:var(--bs-dark-text-emphasis)}\n.btn-close{--bs-btn-close-color:#000;--bs-btn-close-bg:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414'/%3e%3c/svg%3e\");--bs-btn-close-opacity:0.5;--bs-btn-close-hover-opacity:0.75;--bs-btn-close-focus-shadow:0 0 0 0.25rem rgba(13, 110, 253, 0.25);--bs-btn-close-focus-opacity:1;--bs-btn-close-disabled-opacity:0.25;box-sizing:content-box;width:1em;height:1em;padding:.25em .25em;color:var(--bs-btn-close-color);background:transparent var(--bs-btn-close-bg) center/1em auto no-repeat;filter:var(--bs-btn-close-filter);border:0;border-radius:.375rem;opacity:var(--bs-btn-close-opacity)}\n.btn-close:hover{color:var(--bs-btn-close-color);text-decoration:none;opacity:var(--bs-btn-close-hover-opacity)}\n.btn-close:focus{outline:0;box-shadow:var(--bs-btn-close-focus-shadow);opacity:var(--bs-btn-close-focus-opacity)}\n.btn-close.disabled,.btn-close:disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--bs-btn-close-disabled-opacity)}\n.btn-close-white{--bs-btn-close-filter:invert(1) grayscale(100%) brightness(200%)}\n:root,[data-bs-theme=light]{--bs-btn-close-filter: }\n[data-bs-theme=dark]{--bs-btn-close-filter:invert(1) grayscale(100%) brightness(200%)}\n.toast{--bs-toast-zindex:1090;--bs-toast-padding-x:0.75rem;--bs-toast-padding-y:0.5rem;--bs-toast-spacing:1.5rem;--bs-toast-max-width:350px;--bs-toast-font-size:0.875rem;--bs-toast-color: ;--bs-toast-bg:rgba(var(--bs-body-bg-rgb), 0.85);--bs-toast-border-width:var(--bs-border-width);--bs-toast-border-color:var(--bs-border-color-translucent);--bs-toast-border-radius:var(--bs-border-radius);--bs-toast-box-shadow:var(--bs-box-shadow);--bs-toast-header-color:var(--bs-secondary-color);--bs-toast-header-bg:rgba(var(--bs-body-bg-rgb), 0.85);--bs-toast-header-border-color:var(--bs-border-color-translucent);width:var(--bs-toast-max-width);max-width:100%;font-size:var(--bs-toast-font-size);color:var(--bs-toast-color);pointer-events:auto;background-color:var(--bs-toast-bg);background-clip:padding-box;border:var(--bs-toast-border-width) solid var(--bs-toast-border-color);box-shadow:var(--bs-toast-box-shadow);border-radius:var(--bs-toast-border-radius)}\n.toast.showing{opacity:0}\n.toast:not(.show){display:none}\n.toast-container{--bs-toast-zindex:1090;position:absolute;z-index:var(--bs-toast-zindex);width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:100%;pointer-events:none}\n.toast-container>:not(:last-child){margin-bottom:var(--bs-toast-spacing)}\n.toast-header{display:flex;align-items:center;padding:var(--bs-toast-padding-y) var(--bs-toast-padding-x);color:var(--bs-toast-header-color);background-color:var(--bs-toast-header-bg);background-clip:padding-box;border-bottom:var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);border-top-left-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));border-top-right-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width))}\n.toast-header .btn-close{margin-right:calc(-.5 * var(--bs-toast-padding-x));margin-left:var(--bs-toast-padding-x)}\n.toast-body{padding:var(--bs-toast-padding-x);word-wrap:break-word}\n.modal{--bs-modal-zindex:1055;--bs-modal-width:500px;--bs-modal-padding:1rem;--bs-modal-margin:0.5rem;--bs-modal-color:var(--bs-body-color);--bs-modal-bg:var(--bs-body-bg);--bs-modal-border-color:var(--bs-border-color-translucent);--bs-modal-border-width:var(--bs-border-width);--bs-modal-border-radius:var(--bs-border-radius-lg);--bs-modal-box-shadow:var(--bs-box-shadow-sm);--bs-modal-inner-border-radius:calc(var(--bs-border-radius-lg) - (var(--bs-border-width)));--bs-modal-header-padding-x:1rem;--bs-modal-header-padding-y:1rem;--bs-modal-header-padding:1rem 1rem;--bs-modal-header-border-color:var(--bs-border-color);--bs-modal-header-border-width:var(--bs-border-width);--bs-modal-title-line-height:1.5;--bs-modal-footer-gap:0.5rem;--bs-modal-footer-bg: ;--bs-modal-footer-border-color:var(--bs-border-color);--bs-modal-footer-border-width:var(--bs-border-width);position:fixed;top:0;left:0;z-index:var(--bs-modal-zindex);display:none;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;outline:0}\n.modal-dialog{position:relative;width:auto;margin:var(--bs-modal-margin);pointer-events:none}\n.modal.fade .modal-dialog{transform:translate(0,-50px);transition:transform .3s ease-out}\n@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}\n.modal.show .modal-dialog{transform:none}\n.modal.modal-static .modal-dialog{transform:scale(1.02)}\n.modal-dialog-scrollable{height:calc(100% - var(--bs-modal-margin) * 2)}\n.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}\n.modal-dialog-scrollable .modal-body{overflow-y:auto}\n.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - var(--bs-modal-margin) * 2)}\n.modal-content{position:relative;display:flex;flex-direction:column;width:100%;color:var(--bs-modal-color);pointer-events:auto;background-color:var(--bs-modal-bg);background-clip:padding-box;border:var(--bs-modal-border-width) solid var(--bs-modal-border-color);border-radius:var(--bs-modal-border-radius);outline:0}\n.modal-backdrop{--bs-backdrop-zindex:1050;--bs-backdrop-bg:#000;--bs-backdrop-opacity:0.5;position:fixed;top:0;left:0;z-index:var(--bs-backdrop-zindex);width:100vw;height:100vh;background-color:var(--bs-backdrop-bg)}\n.modal-backdrop.fade{opacity:0}\n.modal-backdrop.show{opacity:var(--bs-backdrop-opacity)}\n.modal-header{display:flex;flex-shrink:0;align-items:center;padding:var(--bs-modal-header-padding);border-bottom:var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);border-top-left-radius:var(--bs-modal-inner-border-radius);border-top-right-radius:var(--bs-modal-inner-border-radius)}\n.modal-header .btn-close{padding:calc(var(--bs-modal-header-padding-y) * .5) calc(var(--bs-modal-header-padding-x) * .5);margin-top:calc(-.5 * var(--bs-modal-header-padding-y));margin-right:calc(-.5 * var(--bs-modal-header-padding-x));margin-bottom:calc(-.5 * var(--bs-modal-header-padding-y));margin-left:auto}\n.modal-title{margin-bottom:0;line-height:var(--bs-modal-title-line-height)}\n.modal-body{position:relative;flex:1 1 auto;padding:var(--bs-modal-padding)}\n.modal-footer{display:flex;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap) * .5);background-color:var(--bs-modal-footer-bg);border-top:var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);border-bottom-right-radius:var(--bs-modal-inner-border-radius);border-bottom-left-radius:var(--bs-modal-inner-border-radius)}\n.modal-footer>*{margin:calc(var(--bs-modal-footer-gap) * .5)}\n@media (min-width:576px){.modal{--bs-modal-margin:1.75rem;--bs-modal-box-shadow:var(--bs-box-shadow)}.modal-dialog{max-width:var(--bs-modal-width);margin-right:auto;margin-left:auto}.modal-sm{--bs-modal-width:300px}}\n@media (min-width:992px){.modal-lg,.modal-xl{--bs-modal-width:800px}}\n@media (min-width:1200px){.modal-xl{--bs-modal-width:1140px}}\n.modal-fullscreen{width:100vw;max-width:none;height:100%;margin:0}\n.modal-fullscreen .modal-content{height:100%;border:0;border-radius:0}\n.modal-fullscreen .modal-footer,.modal-fullscreen .modal-header{border-radius:0}\n.modal-fullscreen .modal-body{overflow-y:auto}\n@media (max-width:575.98px){.modal-fullscreen-sm-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-sm-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-sm-down .modal-footer,.modal-fullscreen-sm-down .modal-header{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}}\n@media (max-width:767.98px){.modal-fullscreen-md-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-md-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-md-down .modal-footer,.modal-fullscreen-md-down .modal-header{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}}\n@media (max-width:991.98px){.modal-fullscreen-lg-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-lg-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-lg-down .modal-footer,.modal-fullscreen-lg-down .modal-header{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}}\n@media (max-width:1199.98px){.modal-fullscreen-xl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xl-down .modal-footer,.modal-fullscreen-xl-down .modal-header{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}}\n@media (max-width:1399.98px){.modal-fullscreen-xxl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xxl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xxl-down .modal-footer,.modal-fullscreen-xxl-down .modal-header{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}}\n.tooltip{--bs-tooltip-zindex:1080;--bs-tooltip-max-width:200px;--bs-tooltip-padding-x:0.5rem;--bs-tooltip-padding-y:0.25rem;--bs-tooltip-margin: ;--bs-tooltip-font-size:0.875rem;--bs-tooltip-color:var(--bs-body-bg);--bs-tooltip-bg:var(--bs-emphasis-color);--bs-tooltip-border-radius:var(--bs-border-radius);--bs-tooltip-opacity:0.9;--bs-tooltip-arrow-width:0.8rem;--bs-tooltip-arrow-height:0.4rem;z-index:var(--bs-tooltip-zindex);display:block;margin:var(--bs-tooltip-margin);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-tooltip-font-size);word-wrap:break-word;opacity:0}\n.tooltip.show{opacity:var(--bs-tooltip-opacity)}\n.tooltip .tooltip-arrow{display:block;width:var(--bs-tooltip-arrow-width);height:var(--bs-tooltip-arrow-height)}\n.tooltip .tooltip-arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}\n.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow,.bs-tooltip-top .tooltip-arrow{bottom:calc(-1 * var(--bs-tooltip-arrow-height))}\n.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before,.bs-tooltip-top .tooltip-arrow::before{top:-1px;border-width:var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * .5) 0;border-top-color:var(--bs-tooltip-bg)}\n.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow,.bs-tooltip-end .tooltip-arrow{left:calc(-1 * var(--bs-tooltip-arrow-height));width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}\n.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before,.bs-tooltip-end .tooltip-arrow::before{right:-1px;border-width:calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width) * .5) 0;border-right-color:var(--bs-tooltip-bg)}\n.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow,.bs-tooltip-bottom .tooltip-arrow{top:calc(-1 * var(--bs-tooltip-arrow-height))}\n.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before,.bs-tooltip-bottom .tooltip-arrow::before{bottom:-1px;border-width:0 calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height);border-bottom-color:var(--bs-tooltip-bg)}\n.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow,.bs-tooltip-start .tooltip-arrow{right:calc(-1 * var(--bs-tooltip-arrow-height));width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}\n.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before,.bs-tooltip-start .tooltip-arrow::before{left:-1px;border-width:calc(var(--bs-tooltip-arrow-width) * .5) 0 calc(var(--bs-tooltip-arrow-width) * .5) var(--bs-tooltip-arrow-height);border-left-color:var(--bs-tooltip-bg)}\n.tooltip-inner{max-width:var(--bs-tooltip-max-width);padding:var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);color:var(--bs-tooltip-color);text-align:center;background-color:var(--bs-tooltip-bg);border-radius:var(--bs-tooltip-border-radius)}\n.popover{--bs-popover-zindex:1070;--bs-popover-max-width:276px;--bs-popover-font-size:0.875rem;--bs-popover-bg:var(--bs-body-bg);--bs-popover-border-width:var(--bs-border-width);--bs-popover-border-color:var(--bs-border-color-translucent);--bs-popover-border-radius:var(--bs-border-radius-lg);--bs-popover-inner-border-radius:calc(var(--bs-border-radius-lg) - var(--bs-border-width));--bs-popover-box-shadow:var(--bs-box-shadow);--bs-popover-header-padding-x:1rem;--bs-popover-header-padding-y:0.5rem;--bs-popover-header-font-size:1rem;--bs-popover-header-color:inherit;--bs-popover-header-bg:var(--bs-secondary-bg);--bs-popover-body-padding-x:1rem;--bs-popover-body-padding-y:1rem;--bs-popover-body-color:var(--bs-body-color);--bs-popover-arrow-width:1rem;--bs-popover-arrow-height:0.5rem;--bs-popover-arrow-border:var(--bs-popover-border-color);z-index:var(--bs-popover-zindex);display:block;max-width:var(--bs-popover-max-width);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-popover-font-size);word-wrap:break-word;background-color:var(--bs-popover-bg);background-clip:padding-box;border:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-radius:var(--bs-popover-border-radius)}\n.popover .popover-arrow{display:block;width:var(--bs-popover-arrow-width);height:var(--bs-popover-arrow-height)}\n.popover .popover-arrow::after,.popover .popover-arrow::before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid;border-width:0}\n.bs-popover-auto[data-popper-placement^=top]>.popover-arrow,.bs-popover-top>.popover-arrow{bottom:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))}\n.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::before,.bs-popover-top>.popover-arrow::after,.bs-popover-top>.popover-arrow::before{border-width:var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * .5) 0}\n.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::before,.bs-popover-top>.popover-arrow::before{bottom:0;border-top-color:var(--bs-popover-arrow-border)}\n.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::after,.bs-popover-top>.popover-arrow::after{bottom:var(--bs-popover-border-width);border-top-color:var(--bs-popover-bg)}\n.bs-popover-auto[data-popper-placement^=right]>.popover-arrow,.bs-popover-end>.popover-arrow{left:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}\n.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::before,.bs-popover-end>.popover-arrow::after,.bs-popover-end>.popover-arrow::before{border-width:calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width) * .5) 0}\n.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::before,.bs-popover-end>.popover-arrow::before{left:0;border-right-color:var(--bs-popover-arrow-border)}\n.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::after,.bs-popover-end>.popover-arrow::after{left:var(--bs-popover-border-width);border-right-color:var(--bs-popover-bg)}\n.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow,.bs-popover-bottom>.popover-arrow{top:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width))}\n.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::before,.bs-popover-bottom>.popover-arrow::after,.bs-popover-bottom>.popover-arrow::before{border-width:0 calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height)}\n.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::before,.bs-popover-bottom>.popover-arrow::before{top:0;border-bottom-color:var(--bs-popover-arrow-border)}\n.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::after,.bs-popover-bottom>.popover-arrow::after{top:var(--bs-popover-border-width);border-bottom-color:var(--bs-popover-bg)}\n.bs-popover-auto[data-popper-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:var(--bs-popover-arrow-width);margin-left:calc(-.5 * var(--bs-popover-arrow-width));content:\"\";border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-header-bg)}\n.bs-popover-auto[data-popper-placement^=left]>.popover-arrow,.bs-popover-start>.popover-arrow{right:calc(-1 * (var(--bs-popover-arrow-height)) - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}\n.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::before,.bs-popover-start>.popover-arrow::after,.bs-popover-start>.popover-arrow::before{border-width:calc(var(--bs-popover-arrow-width) * .5) 0 calc(var(--bs-popover-arrow-width) * .5) var(--bs-popover-arrow-height)}\n.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::before,.bs-popover-start>.popover-arrow::before{right:0;border-left-color:var(--bs-popover-arrow-border)}\n.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::after,.bs-popover-start>.popover-arrow::after{right:var(--bs-popover-border-width);border-left-color:var(--bs-popover-bg)}\n.popover-header{padding:var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x);margin-bottom:0;font-size:var(--bs-popover-header-font-size);color:var(--bs-popover-header-color);background-color:var(--bs-popover-header-bg);border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-top-left-radius:var(--bs-popover-inner-border-radius);border-top-right-radius:var(--bs-popover-inner-border-radius)}\n.popover-header:empty{display:none}\n.popover-body{padding:var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x);color:var(--bs-popover-body-color)}\n.carousel{position:relative}\n.carousel.pointer-event{touch-action:pan-y}\n.carousel-inner{position:relative;width:100%;overflow:hidden}\n.carousel-inner::after{display:block;clear:both;content:\"\"}\n.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}\n@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}\n.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}\n.active.carousel-item-end,.carousel-item-next:not(.carousel-item-start){transform:translateX(100%)}\n.active.carousel-item-start,.carousel-item-prev:not(.carousel-item-end){transform:translateX(-100%)}\n.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}\n.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end,.carousel-fade .carousel-item.active{z-index:1;opacity:1}\n.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{z-index:0;opacity:0;transition:opacity 0s .6s}\n@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{transition:none}}\n.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;padding:0;color:#fff;text-align:center;background:0 0;filter:var(--bs-carousel-control-icon-filter);border:0;opacity:.5;transition:opacity .15s ease}\n@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}\n.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}\n.carousel-control-prev{left:0}\n.carousel-control-next{right:0}\n.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:2rem;height:2rem;background-repeat:no-repeat;background-position:50%;background-size:100% 100%}\n.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0'/%3e%3c/svg%3e\")}\n.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'/%3e%3c/svg%3e\")}\n.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:2;display:flex;justify-content:center;padding:0;margin-right:15%;margin-bottom:1rem;margin-left:15%}\n.carousel-indicators [data-bs-target]{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;padding:0;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:var(--bs-carousel-indicator-active-bg);background-clip:padding-box;border:0;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}\n@media (prefers-reduced-motion:reduce){.carousel-indicators [data-bs-target]{transition:none}}\n.carousel-indicators .active{opacity:1}\n.carousel-caption{position:absolute;right:15%;bottom:1.25rem;left:15%;padding-top:1.25rem;padding-bottom:1.25rem;color:var(--bs-carousel-caption-color);text-align:center}\n.carousel-dark{--bs-carousel-indicator-active-bg:#000;--bs-carousel-caption-color:#000;--bs-carousel-control-icon-filter:invert(1) grayscale(100)}\n:root,[data-bs-theme=light]{--bs-carousel-indicator-active-bg:#fff;--bs-carousel-caption-color:#fff;--bs-carousel-control-icon-filter: }\n[data-bs-theme=dark]{--bs-carousel-indicator-active-bg:#000;--bs-carousel-caption-color:#000;--bs-carousel-control-icon-filter:invert(1) grayscale(100)}\n.spinner-border,.spinner-grow{display:inline-block;width:var(--bs-spinner-width);height:var(--bs-spinner-height);vertical-align:var(--bs-spinner-vertical-align);border-radius:50%;animation:var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name)}\n@keyframes spinner-border{to{transform:rotate(360deg)}}\n.spinner-border{--bs-spinner-width:2rem;--bs-spinner-height:2rem;--bs-spinner-vertical-align:-0.125em;--bs-spinner-border-width:0.25em;--bs-spinner-animation-speed:0.75s;--bs-spinner-animation-name:spinner-border;border:var(--bs-spinner-border-width) solid currentcolor;border-right-color:transparent}\n.spinner-border-sm{--bs-spinner-width:1rem;--bs-spinner-height:1rem;--bs-spinner-border-width:0.2em}\n@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}\n.spinner-grow{--bs-spinner-width:2rem;--bs-spinner-height:2rem;--bs-spinner-vertical-align:-0.125em;--bs-spinner-animation-speed:0.75s;--bs-spinner-animation-name:spinner-grow;background-color:currentcolor;opacity:0}\n.spinner-grow-sm{--bs-spinner-width:1rem;--bs-spinner-height:1rem}\n@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{--bs-spinner-animation-speed:1.5s}}\n.offcanvas,.offcanvas-lg,.offcanvas-md,.offcanvas-sm,.offcanvas-xl,.offcanvas-xxl{--bs-offcanvas-zindex:1045;--bs-offcanvas-width:400px;--bs-offcanvas-height:30vh;--bs-offcanvas-padding-x:1rem;--bs-offcanvas-padding-y:1rem;--bs-offcanvas-color:var(--bs-body-color);--bs-offcanvas-bg:var(--bs-body-bg);--bs-offcanvas-border-width:var(--bs-border-width);--bs-offcanvas-border-color:var(--bs-border-color-translucent);--bs-offcanvas-box-shadow:var(--bs-box-shadow-sm);--bs-offcanvas-transition:transform 0.3s ease-in-out;--bs-offcanvas-title-line-height:1.5}\n@media (max-width:575.98px){.offcanvas-sm{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:var(--bs-offcanvas-transition)}}\n@media (max-width:575.98px) and (prefers-reduced-motion:reduce){.offcanvas-sm{transition:none}}\n@media (max-width:575.98px){.offcanvas-sm.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas-sm.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas-sm.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas-sm.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-sm.show:not(.hiding),.offcanvas-sm.showing{transform:none}.offcanvas-sm.hiding,.offcanvas-sm.show,.offcanvas-sm.showing{visibility:visible}}\n@media (min-width:576px){.offcanvas-sm{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-sm .offcanvas-header{display:none}.offcanvas-sm .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}\n@media (max-width:767.98px){.offcanvas-md{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:var(--bs-offcanvas-transition)}}\n@media (max-width:767.98px) and (prefers-reduced-motion:reduce){.offcanvas-md{transition:none}}\n@media (max-width:767.98px){.offcanvas-md.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas-md.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas-md.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas-md.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-md.show:not(.hiding),.offcanvas-md.showing{transform:none}.offcanvas-md.hiding,.offcanvas-md.show,.offcanvas-md.showing{visibility:visible}}\n@media (min-width:768px){.offcanvas-md{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-md .offcanvas-header{display:none}.offcanvas-md .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}\n@media (max-width:991.98px){.offcanvas-lg{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:var(--bs-offcanvas-transition)}}\n@media (max-width:991.98px) and (prefers-reduced-motion:reduce){.offcanvas-lg{transition:none}}\n@media (max-width:991.98px){.offcanvas-lg.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas-lg.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas-lg.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas-lg.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-lg.show:not(.hiding),.offcanvas-lg.showing{transform:none}.offcanvas-lg.hiding,.offcanvas-lg.show,.offcanvas-lg.showing{visibility:visible}}\n@media (min-width:992px){.offcanvas-lg{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-lg .offcanvas-header{display:none}.offcanvas-lg .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}\n@media (max-width:1199.98px){.offcanvas-xl{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:var(--bs-offcanvas-transition)}}\n@media (max-width:1199.98px) and (prefers-reduced-motion:reduce){.offcanvas-xl{transition:none}}\n@media (max-width:1199.98px){.offcanvas-xl.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas-xl.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas-xl.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas-xl.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-xl.show:not(.hiding),.offcanvas-xl.showing{transform:none}.offcanvas-xl.hiding,.offcanvas-xl.show,.offcanvas-xl.showing{visibility:visible}}\n@media (min-width:1200px){.offcanvas-xl{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-xl .offcanvas-header{display:none}.offcanvas-xl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}\n@media (max-width:1399.98px){.offcanvas-xxl{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:var(--bs-offcanvas-transition)}}\n@media (max-width:1399.98px) and (prefers-reduced-motion:reduce){.offcanvas-xxl{transition:none}}\n@media (max-width:1399.98px){.offcanvas-xxl.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas-xxl.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas-xxl.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas-xxl.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-xxl.show:not(.hiding),.offcanvas-xxl.showing{transform:none}.offcanvas-xxl.hiding,.offcanvas-xxl.show,.offcanvas-xxl.showing{visibility:visible}}\n@media (min-width:1400px){.offcanvas-xxl{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-xxl .offcanvas-header{display:none}.offcanvas-xxl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:transparent!important}}\n.offcanvas{position:fixed;bottom:0;z-index:var(--bs-offcanvas-zindex);display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:var(--bs-offcanvas-transition)}\n@media (prefers-reduced-motion:reduce){.offcanvas{transition:none}}\n.offcanvas.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}\n.offcanvas.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}\n.offcanvas.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}\n.offcanvas.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}\n.offcanvas.show:not(.hiding),.offcanvas.showing{transform:none}\n.offcanvas.hiding,.offcanvas.show,.offcanvas.showing{visibility:visible}\n.offcanvas-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}\n.offcanvas-backdrop.fade{opacity:0}\n.offcanvas-backdrop.show{opacity:.5}\n.offcanvas-header{display:flex;align-items:center;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x)}\n.offcanvas-header .btn-close{padding:calc(var(--bs-offcanvas-padding-y) * .5) calc(var(--bs-offcanvas-padding-x) * .5);margin-top:calc(-.5 * var(--bs-offcanvas-padding-y));margin-right:calc(-.5 * var(--bs-offcanvas-padding-x));margin-bottom:calc(-.5 * var(--bs-offcanvas-padding-y));margin-left:auto}\n.offcanvas-title{margin-bottom:0;line-height:var(--bs-offcanvas-title-line-height)}\n.offcanvas-body{flex-grow:1;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);overflow-y:auto}\n.placeholder{display:inline-block;min-height:1em;vertical-align:middle;cursor:wait;background-color:currentcolor;opacity:.5}\n.placeholder.btn::before{display:inline-block;content:\"\"}\n.placeholder-xs{min-height:.6em}\n.placeholder-sm{min-height:.8em}\n.placeholder-lg{min-height:1.2em}\n.placeholder-glow .placeholder{animation:placeholder-glow 2s ease-in-out infinite}\n@keyframes placeholder-glow{50%{opacity:.2}}\n.placeholder-wave{-webkit-mask-image:linear-gradient(130deg,#000 55%,rgba(0,0,0,0.8) 75%,#000 95%);mask-image:linear-gradient(130deg,#000 55%,rgba(0,0,0,0.8) 75%,#000 95%);-webkit-mask-size:200% 100%;mask-size:200% 100%;animation:placeholder-wave 2s linear infinite}\n@keyframes placeholder-wave{100%{-webkit-mask-position:-200% 0%;mask-position:-200% 0%}}\n.clearfix::after{display:block;clear:both;content:\"\"}\n.text-bg-primary{color:#fff!important;background-color:RGBA(var(--bs-primary-rgb),var(--bs-bg-opacity,1))!important}\n.text-bg-secondary{color:#fff!important;background-color:RGBA(var(--bs-secondary-rgb),var(--bs-bg-opacity,1))!important}\n.text-bg-success{color:#fff!important;background-color:RGBA(var(--bs-success-rgb),var(--bs-bg-opacity,1))!important}\n.text-bg-info{color:#000!important;background-color:RGBA(var(--bs-info-rgb),var(--bs-bg-opacity,1))!important}\n.text-bg-warning{color:#000!important;background-color:RGBA(var(--bs-warning-rgb),var(--bs-bg-opacity,1))!important}\n.text-bg-danger{color:#fff!important;background-color:RGBA(var(--bs-danger-rgb),var(--bs-bg-opacity,1))!important}\n.text-bg-light{color:#000!important;background-color:RGBA(var(--bs-light-rgb),var(--bs-bg-opacity,1))!important}\n.text-bg-dark{color:#fff!important;background-color:RGBA(var(--bs-dark-rgb),var(--bs-bg-opacity,1))!important}\n.link-primary{color:RGBA(var(--bs-primary-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-primary-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-primary-rgb),var(--bs-link-underline-opacity,1))!important}\n.link-primary:focus,.link-primary:hover{color:RGBA(10,88,202,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(10,88,202,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(10,88,202,var(--bs-link-underline-opacity,1))!important}\n.link-secondary{color:RGBA(var(--bs-secondary-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-secondary-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-secondary-rgb),var(--bs-link-underline-opacity,1))!important}\n.link-secondary:focus,.link-secondary:hover{color:RGBA(86,94,100,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(86,94,100,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(86,94,100,var(--bs-link-underline-opacity,1))!important}\n.link-success{color:RGBA(var(--bs-success-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-success-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-success-rgb),var(--bs-link-underline-opacity,1))!important}\n.link-success:focus,.link-success:hover{color:RGBA(20,108,67,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(20,108,67,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(20,108,67,var(--bs-link-underline-opacity,1))!important}\n.link-info{color:RGBA(var(--bs-info-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-info-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-info-rgb),var(--bs-link-underline-opacity,1))!important}\n.link-info:focus,.link-info:hover{color:RGBA(61,213,243,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(61,213,243,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(61,213,243,var(--bs-link-underline-opacity,1))!important}\n.link-warning{color:RGBA(var(--bs-warning-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-warning-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-warning-rgb),var(--bs-link-underline-opacity,1))!important}\n.link-warning:focus,.link-warning:hover{color:RGBA(255,205,57,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(255,205,57,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(255,205,57,var(--bs-link-underline-opacity,1))!important}\n.link-danger{color:RGBA(var(--bs-danger-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-danger-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-danger-rgb),var(--bs-link-underline-opacity,1))!important}\n.link-danger:focus,.link-danger:hover{color:RGBA(176,42,55,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(176,42,55,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(176,42,55,var(--bs-link-underline-opacity,1))!important}\n.link-light{color:RGBA(var(--bs-light-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-light-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-light-rgb),var(--bs-link-underline-opacity,1))!important}\n.link-light:focus,.link-light:hover{color:RGBA(249,250,251,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(249,250,251,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(249,250,251,var(--bs-link-underline-opacity,1))!important}\n.link-dark{color:RGBA(var(--bs-dark-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-dark-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-dark-rgb),var(--bs-link-underline-opacity,1))!important}\n.link-dark:focus,.link-dark:hover{color:RGBA(26,30,33,var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(26,30,33,var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(26,30,33,var(--bs-link-underline-opacity,1))!important}\n.link-body-emphasis{color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-opacity,1))!important;-webkit-text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,1))!important}\n.link-body-emphasis:focus,.link-body-emphasis:hover{color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-opacity,.75))!important;-webkit-text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,0.75))!important;text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,0.75))!important}\n.focus-ring:focus{outline:0;box-shadow:var(--bs-focus-ring-x,0) var(--bs-focus-ring-y,0) var(--bs-focus-ring-blur,0) var(--bs-focus-ring-width) var(--bs-focus-ring-color)}\n.icon-link{display:inline-flex;gap:.375rem;align-items:center;-webkit-text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,0.5));text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,0.5));text-underline-offset:0.25em;-webkit-backface-visibility:hidden;backface-visibility:hidden}\n.icon-link>.bi{flex-shrink:0;width:1em;height:1em;fill:currentcolor;transition:.2s ease-in-out transform}\n@media (prefers-reduced-motion:reduce){.icon-link>.bi{transition:none}}\n.icon-link-hover:focus-visible>.bi,.icon-link-hover:hover>.bi{transform:var(--bs-icon-link-transform,translate3d(.25em,0,0))}\n.ratio{position:relative;width:100%}\n.ratio::before{display:block;padding-top:var(--bs-aspect-ratio);content:\"\"}\n.ratio>*{position:absolute;top:0;left:0;width:100%;height:100%}\n.ratio-1x1{--bs-aspect-ratio:100%}\n.ratio-4x3{--bs-aspect-ratio:75%}\n.ratio-16x9{--bs-aspect-ratio:56.25%}\n.ratio-21x9{--bs-aspect-ratio:42.8571428571%}\n.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}\n.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}\n.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}\n.sticky-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}\n@media (min-width:576px){.sticky-sm-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-sm-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}\n@media (min-width:768px){.sticky-md-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-md-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}\n@media (min-width:992px){.sticky-lg-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-lg-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}\n@media (min-width:1200px){.sticky-xl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-xl-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}\n@media (min-width:1400px){.sticky-xxl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}.sticky-xxl-bottom{position:-webkit-sticky;position:sticky;bottom:0;z-index:1020}}\n.hstack{display:flex;flex-direction:row;align-items:center;align-self:stretch}\n.vstack{display:flex;flex:1 1 auto;flex-direction:column;align-self:stretch}\n.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}\n.visually-hidden-focusable:not(:focus):not(:focus-within):not(caption),.visually-hidden:not(caption){position:absolute!important}\n.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:\"\"}\n.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.vr{display:inline-block;align-self:stretch;width:var(--bs-border-width);min-height:1em;background-color:currentcolor;opacity:.25}\n.align-baseline{vertical-align:baseline!important}\n.align-top{vertical-align:top!important}\n.align-middle{vertical-align:middle!important}\n.align-bottom{vertical-align:bottom!important}\n.align-text-bottom{vertical-align:text-bottom!important}\n.align-text-top{vertical-align:text-top!important}\n.float-start{float:left!important}\n.float-end{float:right!important}\n.float-none{float:none!important}\n.object-fit-contain{-o-object-fit:contain!important;object-fit:contain!important}\n.object-fit-cover{-o-object-fit:cover!important;object-fit:cover!important}\n.object-fit-fill{-o-object-fit:fill!important;object-fit:fill!important}\n.object-fit-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}\n.object-fit-none{-o-object-fit:none!important;object-fit:none!important}\n.opacity-0{opacity:0!important}\n.opacity-25{opacity:.25!important}\n.opacity-50{opacity:.5!important}\n.opacity-75{opacity:.75!important}\n.opacity-100{opacity:1!important}\n.overflow-auto{overflow:auto!important}\n.overflow-hidden{overflow:hidden!important}\n.overflow-visible{overflow:visible!important}\n.overflow-scroll{overflow:scroll!important}\n.overflow-x-auto{overflow-x:auto!important}\n.overflow-x-hidden{overflow-x:hidden!important}\n.overflow-x-visible{overflow-x:visible!important}\n.overflow-x-scroll{overflow-x:scroll!important}\n.overflow-y-auto{overflow-y:auto!important}\n.overflow-y-hidden{overflow-y:hidden!important}\n.overflow-y-visible{overflow-y:visible!important}\n.overflow-y-scroll{overflow-y:scroll!important}\n.d-inline{display:inline!important}\n.d-inline-block{display:inline-block!important}\n.d-block{display:block!important}\n.d-grid{display:grid!important}\n.d-inline-grid{display:inline-grid!important}\n.d-table{display:table!important}\n.d-table-row{display:table-row!important}\n.d-table-cell{display:table-cell!important}\n.d-flex{display:flex!important}\n.d-inline-flex{display:inline-flex!important}\n.d-none{display:none!important}\n.shadow{box-shadow:var(--bs-box-shadow)!important}\n.shadow-sm{box-shadow:var(--bs-box-shadow-sm)!important}\n.shadow-lg{box-shadow:var(--bs-box-shadow-lg)!important}\n.shadow-none{box-shadow:none!important}\n.focus-ring-primary{--bs-focus-ring-color:rgba(var(--bs-primary-rgb), var(--bs-focus-ring-opacity))}\n.focus-ring-secondary{--bs-focus-ring-color:rgba(var(--bs-secondary-rgb), var(--bs-focus-ring-opacity))}\n.focus-ring-success{--bs-focus-ring-color:rgba(var(--bs-success-rgb), var(--bs-focus-ring-opacity))}\n.focus-ring-info{--bs-focus-ring-color:rgba(var(--bs-info-rgb), var(--bs-focus-ring-opacity))}\n.focus-ring-warning{--bs-focus-ring-color:rgba(var(--bs-warning-rgb), var(--bs-focus-ring-opacity))}\n.focus-ring-danger{--bs-focus-ring-color:rgba(var(--bs-danger-rgb), var(--bs-focus-ring-opacity))}\n.focus-ring-light{--bs-focus-ring-color:rgba(var(--bs-light-rgb), var(--bs-focus-ring-opacity))}\n.focus-ring-dark{--bs-focus-ring-color:rgba(var(--bs-dark-rgb), var(--bs-focus-ring-opacity))}\n.position-static{position:static!important}\n.position-relative{position:relative!important}\n.position-absolute{position:absolute!important}\n.position-fixed{position:fixed!important}\n.position-sticky{position:-webkit-sticky!important;position:sticky!important}\n.top-0{top:0!important}\n.top-50{top:50%!important}\n.top-100{top:100%!important}\n.bottom-0{bottom:0!important}\n.bottom-50{bottom:50%!important}\n.bottom-100{bottom:100%!important}\n.start-0{left:0!important}\n.start-50{left:50%!important}\n.start-100{left:100%!important}\n.end-0{right:0!important}\n.end-50{right:50%!important}\n.end-100{right:100%!important}\n.translate-middle{transform:translate(-50%,-50%)!important}\n.translate-middle-x{transform:translateX(-50%)!important}\n.translate-middle-y{transform:translateY(-50%)!important}\n.border{border:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}\n.border-0{border:0!important}\n.border-top{border-top:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}\n.border-top-0{border-top:0!important}\n.border-end{border-right:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}\n.border-end-0{border-right:0!important}\n.border-bottom{border-bottom:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}\n.border-bottom-0{border-bottom:0!important}\n.border-start{border-left:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}\n.border-start-0{border-left:0!important}\n.border-primary{--bs-border-opacity:1;border-color:rgba(var(--bs-primary-rgb),var(--bs-border-opacity))!important}\n.border-secondary{--bs-border-opacity:1;border-color:rgba(var(--bs-secondary-rgb),var(--bs-border-opacity))!important}\n.border-success{--bs-border-opacity:1;border-color:rgba(var(--bs-success-rgb),var(--bs-border-opacity))!important}\n.border-info{--bs-border-opacity:1;border-color:rgba(var(--bs-info-rgb),var(--bs-border-opacity))!important}\n.border-warning{--bs-border-opacity:1;border-color:rgba(var(--bs-warning-rgb),var(--bs-border-opacity))!important}\n.border-danger{--bs-border-opacity:1;border-color:rgba(var(--bs-danger-rgb),var(--bs-border-opacity))!important}\n.border-light{--bs-border-opacity:1;border-color:rgba(var(--bs-light-rgb),var(--bs-border-opacity))!important}\n.border-dark{--bs-border-opacity:1;border-color:rgba(var(--bs-dark-rgb),var(--bs-border-opacity))!important}\n.border-black{--bs-border-opacity:1;border-color:rgba(var(--bs-black-rgb),var(--bs-border-opacity))!important}\n.border-white{--bs-border-opacity:1;border-color:rgba(var(--bs-white-rgb),var(--bs-border-opacity))!important}\n.border-primary-subtle{border-color:var(--bs-primary-border-subtle)!important}\n.border-secondary-subtle{border-color:var(--bs-secondary-border-subtle)!important}\n.border-success-subtle{border-color:var(--bs-success-border-subtle)!important}\n.border-info-subtle{border-color:var(--bs-info-border-subtle)!important}\n.border-warning-subtle{border-color:var(--bs-warning-border-subtle)!important}\n.border-danger-subtle{border-color:var(--bs-danger-border-subtle)!important}\n.border-light-subtle{border-color:var(--bs-light-border-subtle)!important}\n.border-dark-subtle{border-color:var(--bs-dark-border-subtle)!important}\n.border-1{border-width:1px!important}\n.border-2{border-width:2px!important}\n.border-3{border-width:3px!important}\n.border-4{border-width:4px!important}\n.border-5{border-width:5px!important}\n.border-opacity-10{--bs-border-opacity:0.1}\n.border-opacity-25{--bs-border-opacity:0.25}\n.border-opacity-50{--bs-border-opacity:0.5}\n.border-opacity-75{--bs-border-opacity:0.75}\n.border-opacity-100{--bs-border-opacity:1}\n.w-25{width:25%!important}\n.w-50{width:50%!important}\n.w-75{width:75%!important}\n.w-100{width:100%!important}\n.w-auto{width:auto!important}\n.mw-100{max-width:100%!important}\n.vw-100{width:100vw!important}\n.min-vw-100{min-width:100vw!important}\n.h-25{height:25%!important}\n.h-50{height:50%!important}\n.h-75{height:75%!important}\n.h-100{height:100%!important}\n.h-auto{height:auto!important}\n.mh-100{max-height:100%!important}\n.vh-100{height:100vh!important}\n.min-vh-100{min-height:100vh!important}\n.flex-fill{flex:1 1 auto!important}\n.flex-row{flex-direction:row!important}\n.flex-column{flex-direction:column!important}\n.flex-row-reverse{flex-direction:row-reverse!important}\n.flex-column-reverse{flex-direction:column-reverse!important}\n.flex-grow-0{flex-grow:0!important}\n.flex-grow-1{flex-grow:1!important}\n.flex-shrink-0{flex-shrink:0!important}\n.flex-shrink-1{flex-shrink:1!important}\n.flex-wrap{flex-wrap:wrap!important}\n.flex-nowrap{flex-wrap:nowrap!important}\n.flex-wrap-reverse{flex-wrap:wrap-reverse!important}\n.justify-content-start{justify-content:flex-start!important}\n.justify-content-end{justify-content:flex-end!important}\n.justify-content-center{justify-content:center!important}\n.justify-content-between{justify-content:space-between!important}\n.justify-content-around{justify-content:space-around!important}\n.justify-content-evenly{justify-content:space-evenly!important}\n.align-items-start{align-items:flex-start!important}\n.align-items-end{align-items:flex-end!important}\n.align-items-center{align-items:center!important}\n.align-items-baseline{align-items:baseline!important}\n.align-items-stretch{align-items:stretch!important}\n.align-content-start{align-content:flex-start!important}\n.align-content-end{align-content:flex-end!important}\n.align-content-center{align-content:center!important}\n.align-content-between{align-content:space-between!important}\n.align-content-around{align-content:space-around!important}\n.align-content-stretch{align-content:stretch!important}\n.align-self-auto{align-self:auto!important}\n.align-self-start{align-self:flex-start!important}\n.align-self-end{align-self:flex-end!important}\n.align-self-center{align-self:center!important}\n.align-self-baseline{align-self:baseline!important}\n.align-self-stretch{align-self:stretch!important}\n.order-first{order:-1!important}\n.order-0{order:0!important}\n.order-1{order:1!important}\n.order-2{order:2!important}\n.order-3{order:3!important}\n.order-4{order:4!important}\n.order-5{order:5!important}\n.order-last{order:6!important}\n.m-0{margin:0!important}\n.m-1{margin:.25rem!important}\n.m-2{margin:.5rem!important}\n.m-3{margin:1rem!important}\n.m-4{margin:1.5rem!important}\n.m-5{margin:3rem!important}\n.m-auto{margin:auto!important}\n.mx-0{margin-right:0!important;margin-left:0!important}\n.mx-1{margin-right:.25rem!important;margin-left:.25rem!important}\n.mx-2{margin-right:.5rem!important;margin-left:.5rem!important}\n.mx-3{margin-right:1rem!important;margin-left:1rem!important}\n.mx-4{margin-right:1.5rem!important;margin-left:1.5rem!important}\n.mx-5{margin-right:3rem!important;margin-left:3rem!important}\n.mx-auto{margin-right:auto!important;margin-left:auto!important}\n.my-0{margin-top:0!important;margin-bottom:0!important}\n.my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}\n.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}\n.my-3{margin-top:1rem!important;margin-bottom:1rem!important}\n.my-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}\n.my-5{margin-top:3rem!important;margin-bottom:3rem!important}\n.my-auto{margin-top:auto!important;margin-bottom:auto!important}\n.mt-0{margin-top:0!important}\n.mt-1{margin-top:.25rem!important}\n.mt-2{margin-top:.5rem!important}\n.mt-3{margin-top:1rem!important}\n.mt-4{margin-top:1.5rem!important}\n.mt-5{margin-top:3rem!important}\n.mt-auto{margin-top:auto!important}\n.me-0{margin-right:0!important}\n.me-1{margin-right:.25rem!important}\n.me-2{margin-right:.5rem!important}\n.me-3{margin-right:1rem!important}\n.me-4{margin-right:1.5rem!important}\n.me-5{margin-right:3rem!important}\n.me-auto{margin-right:auto!important}\n.mb-0{margin-bottom:0!important}\n.mb-1{margin-bottom:.25rem!important}\n.mb-2{margin-bottom:.5rem!important}\n.mb-3{margin-bottom:1rem!important}\n.mb-4{margin-bottom:1.5rem!important}\n.mb-5{margin-bottom:3rem!important}\n.mb-auto{margin-bottom:auto!important}\n.ms-0{margin-left:0!important}\n.ms-1{margin-left:.25rem!important}\n.ms-2{margin-left:.5rem!important}\n.ms-3{margin-left:1rem!important}\n.ms-4{margin-left:1.5rem!important}\n.ms-5{margin-left:3rem!important}\n.ms-auto{margin-left:auto!important}\n.p-0{padding:0!important}\n.p-1{padding:.25rem!important}\n.p-2{padding:.5rem!important}\n.p-3{padding:1rem!important}\n.p-4{padding:1.5rem!important}\n.p-5{padding:3rem!important}\n.px-0{padding-right:0!important;padding-left:0!important}\n.px-1{padding-right:.25rem!important;padding-left:.25rem!important}\n.px-2{padding-right:.5rem!important;padding-left:.5rem!important}\n.px-3{padding-right:1rem!important;padding-left:1rem!important}\n.px-4{padding-right:1.5rem!important;padding-left:1.5rem!important}\n.px-5{padding-right:3rem!important;padding-left:3rem!important}\n.py-0{padding-top:0!important;padding-bottom:0!important}\n.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}\n.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}\n.py-3{padding-top:1rem!important;padding-bottom:1rem!important}\n.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}\n.py-5{padding-top:3rem!important;padding-bottom:3rem!important}\n.pt-0{padding-top:0!important}\n.pt-1{padding-top:.25rem!important}\n.pt-2{padding-top:.5rem!important}\n.pt-3{padding-top:1rem!important}\n.pt-4{padding-top:1.5rem!important}\n.pt-5{padding-top:3rem!important}\n.pe-0{padding-right:0!important}\n.pe-1{padding-right:.25rem!important}\n.pe-2{padding-right:.5rem!important}\n.pe-3{padding-right:1rem!important}\n.pe-4{padding-right:1.5rem!important}\n.pe-5{padding-right:3rem!important}\n.pb-0{padding-bottom:0!important}\n.pb-1{padding-bottom:.25rem!important}\n.pb-2{padding-bottom:.5rem!important}\n.pb-3{padding-bottom:1rem!important}\n.pb-4{padding-bottom:1.5rem!important}\n.pb-5{padding-bottom:3rem!important}\n.ps-0{padding-left:0!important}\n.ps-1{padding-left:.25rem!important}\n.ps-2{padding-left:.5rem!important}\n.ps-3{padding-left:1rem!important}\n.ps-4{padding-left:1.5rem!important}\n.ps-5{padding-left:3rem!important}\n.gap-0{gap:0!important}\n.gap-1{gap:.25rem!important}\n.gap-2{gap:.5rem!important}\n.gap-3{gap:1rem!important}\n.gap-4{gap:1.5rem!important}\n.gap-5{gap:3rem!important}\n.row-gap-0{row-gap:0!important}\n.row-gap-1{row-gap:.25rem!important}\n.row-gap-2{row-gap:.5rem!important}\n.row-gap-3{row-gap:1rem!important}\n.row-gap-4{row-gap:1.5rem!important}\n.row-gap-5{row-gap:3rem!important}\n.column-gap-0{-moz-column-gap:0!important;column-gap:0!important}\n.column-gap-1{-moz-column-gap:0.25rem!important;column-gap:.25rem!important}\n.column-gap-2{-moz-column-gap:0.5rem!important;column-gap:.5rem!important}\n.column-gap-3{-moz-column-gap:1rem!important;column-gap:1rem!important}\n.column-gap-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}\n.column-gap-5{-moz-column-gap:3rem!important;column-gap:3rem!important}\n.font-monospace{font-family:var(--bs-font-monospace)!important}\n.fs-1{font-size:calc(1.375rem + 1.5vw)!important}\n.fs-2{font-size:calc(1.325rem + .9vw)!important}\n.fs-3{font-size:calc(1.3rem + .6vw)!important}\n.fs-4{font-size:calc(1.275rem + .3vw)!important}\n.fs-5{font-size:1.25rem!important}\n.fs-6{font-size:1rem!important}\n.fst-italic{font-style:italic!important}\n.fst-normal{font-style:normal!important}\n.fw-lighter{font-weight:lighter!important}\n.fw-light{font-weight:300!important}\n.fw-normal{font-weight:400!important}\n.fw-medium{font-weight:500!important}\n.fw-semibold{font-weight:600!important}\n.fw-bold{font-weight:700!important}\n.fw-bolder{font-weight:bolder!important}\n.lh-1{line-height:1!important}\n.lh-sm{line-height:1.25!important}\n.lh-base{line-height:1.5!important}\n.lh-lg{line-height:2!important}\n.text-start{text-align:left!important}\n.text-end{text-align:right!important}\n.text-center{text-align:center!important}\n.text-decoration-none{text-decoration:none!important}\n.text-decoration-underline{text-decoration:underline!important}\n.text-decoration-line-through{text-decoration:line-through!important}\n.text-lowercase{text-transform:lowercase!important}\n.text-uppercase{text-transform:uppercase!important}\n.text-capitalize{text-transform:capitalize!important}\n.text-wrap{white-space:normal!important}\n.text-nowrap{white-space:nowrap!important}\n.text-break{word-wrap:break-word!important;word-break:break-word!important}\n.text-primary{--bs-text-opacity:1;color:rgba(var(--bs-primary-rgb),var(--bs-text-opacity))!important}\n.text-secondary{--bs-text-opacity:1;color:rgba(var(--bs-secondary-rgb),var(--bs-text-opacity))!important}\n.text-success{--bs-text-opacity:1;color:rgba(var(--bs-success-rgb),var(--bs-text-opacity))!important}\n.text-info{--bs-text-opacity:1;color:rgba(var(--bs-info-rgb),var(--bs-text-opacity))!important}\n.text-warning{--bs-text-opacity:1;color:rgba(var(--bs-warning-rgb),var(--bs-text-opacity))!important}\n.text-danger{--bs-text-opacity:1;color:rgba(var(--bs-danger-rgb),var(--bs-text-opacity))!important}\n.text-light{--bs-text-opacity:1;color:rgba(var(--bs-light-rgb),var(--bs-text-opacity))!important}\n.text-dark{--bs-text-opacity:1;color:rgba(var(--bs-dark-rgb),var(--bs-text-opacity))!important}\n.text-black{--bs-text-opacity:1;color:rgba(var(--bs-black-rgb),var(--bs-text-opacity))!important}\n.text-white{--bs-text-opacity:1;color:rgba(var(--bs-white-rgb),var(--bs-text-opacity))!important}\n.text-body{--bs-text-opacity:1;color:rgba(var(--bs-body-color-rgb),var(--bs-text-opacity))!important}\n.text-muted{--bs-text-opacity:1;color:var(--bs-secondary-color)!important}\n.text-black-50{--bs-text-opacity:1;color:rgba(0,0,0,.5)!important}\n.text-white-50{--bs-text-opacity:1;color:rgba(255,255,255,.5)!important}\n.text-body-secondary{--bs-text-opacity:1;color:var(--bs-secondary-color)!important}\n.text-body-tertiary{--bs-text-opacity:1;color:var(--bs-tertiary-color)!important}\n.text-body-emphasis{--bs-text-opacity:1;color:var(--bs-emphasis-color)!important}\n.text-reset{--bs-text-opacity:1;color:inherit!important}\n.text-opacity-25{--bs-text-opacity:0.25}\n.text-opacity-50{--bs-text-opacity:0.5}\n.text-opacity-75{--bs-text-opacity:0.75}\n.text-opacity-100{--bs-text-opacity:1}\n.text-primary-emphasis{color:var(--bs-primary-text-emphasis)!important}\n.text-secondary-emphasis{color:var(--bs-secondary-text-emphasis)!important}\n.text-success-emphasis{color:var(--bs-success-text-emphasis)!important}\n.text-info-emphasis{color:var(--bs-info-text-emphasis)!important}\n.text-warning-emphasis{color:var(--bs-warning-text-emphasis)!important}\n.text-danger-emphasis{color:var(--bs-danger-text-emphasis)!important}\n.text-light-emphasis{color:var(--bs-light-text-emphasis)!important}\n.text-dark-emphasis{color:var(--bs-dark-text-emphasis)!important}\n.link-opacity-10{--bs-link-opacity:0.1}\n.link-opacity-10-hover:hover{--bs-link-opacity:0.1}\n.link-opacity-25{--bs-link-opacity:0.25}\n.link-opacity-25-hover:hover{--bs-link-opacity:0.25}\n.link-opacity-50{--bs-link-opacity:0.5}\n.link-opacity-50-hover:hover{--bs-link-opacity:0.5}\n.link-opacity-75{--bs-link-opacity:0.75}\n.link-opacity-75-hover:hover{--bs-link-opacity:0.75}\n.link-opacity-100{--bs-link-opacity:1}\n.link-opacity-100-hover:hover{--bs-link-opacity:1}\n.link-offset-1{text-underline-offset:0.125em!important}\n.link-offset-1-hover:hover{text-underline-offset:0.125em!important}\n.link-offset-2{text-underline-offset:0.25em!important}\n.link-offset-2-hover:hover{text-underline-offset:0.25em!important}\n.link-offset-3{text-underline-offset:0.375em!important}\n.link-offset-3-hover:hover{text-underline-offset:0.375em!important}\n.link-underline-primary{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-primary-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-primary-rgb),var(--bs-link-underline-opacity))!important}\n.link-underline-secondary{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-secondary-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-secondary-rgb),var(--bs-link-underline-opacity))!important}\n.link-underline-success{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-success-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-success-rgb),var(--bs-link-underline-opacity))!important}\n.link-underline-info{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-info-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-info-rgb),var(--bs-link-underline-opacity))!important}\n.link-underline-warning{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-warning-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-warning-rgb),var(--bs-link-underline-opacity))!important}\n.link-underline-danger{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-danger-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-danger-rgb),var(--bs-link-underline-opacity))!important}\n.link-underline-light{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-light-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-light-rgb),var(--bs-link-underline-opacity))!important}\n.link-underline-dark{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-dark-rgb),var(--bs-link-underline-opacity))!important;text-decoration-color:rgba(var(--bs-dark-rgb),var(--bs-link-underline-opacity))!important}\n.link-underline{--bs-link-underline-opacity:1;-webkit-text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-underline-opacity,1))!important;text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-underline-opacity,1))!important}\n.link-underline-opacity-0{--bs-link-underline-opacity:0}\n.link-underline-opacity-0-hover:hover{--bs-link-underline-opacity:0}\n.link-underline-opacity-10{--bs-link-underline-opacity:0.1}\n.link-underline-opacity-10-hover:hover{--bs-link-underline-opacity:0.1}\n.link-underline-opacity-25{--bs-link-underline-opacity:0.25}\n.link-underline-opacity-25-hover:hover{--bs-link-underline-opacity:0.25}\n.link-underline-opacity-50{--bs-link-underline-opacity:0.5}\n.link-underline-opacity-50-hover:hover{--bs-link-underline-opacity:0.5}\n.link-underline-opacity-75{--bs-link-underline-opacity:0.75}\n.link-underline-opacity-75-hover:hover{--bs-link-underline-opacity:0.75}\n.link-underline-opacity-100{--bs-link-underline-opacity:1}\n.link-underline-opacity-100-hover:hover{--bs-link-underline-opacity:1}\n.bg-primary{--bs-bg-opacity:1;background-color:rgba(var(--bs-primary-rgb),var(--bs-bg-opacity))!important}\n.bg-secondary{--bs-bg-opacity:1;background-color:rgba(var(--bs-secondary-rgb),var(--bs-bg-opacity))!important}\n.bg-success{--bs-bg-opacity:1;background-color:rgba(var(--bs-success-rgb),var(--bs-bg-opacity))!important}\n.bg-info{--bs-bg-opacity:1;background-color:rgba(var(--bs-info-rgb),var(--bs-bg-opacity))!important}\n.bg-warning{--bs-bg-opacity:1;background-color:rgba(var(--bs-warning-rgb),var(--bs-bg-opacity))!important}\n.bg-danger{--bs-bg-opacity:1;background-color:rgba(var(--bs-danger-rgb),var(--bs-bg-opacity))!important}\n.bg-light{--bs-bg-opacity:1;background-color:rgba(var(--bs-light-rgb),var(--bs-bg-opacity))!important}\n.bg-dark{--bs-bg-opacity:1;background-color:rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important}\n.bg-black{--bs-bg-opacity:1;background-color:rgba(var(--bs-black-rgb),var(--bs-bg-opacity))!important}\n.bg-white{--bs-bg-opacity:1;background-color:rgba(var(--bs-white-rgb),var(--bs-bg-opacity))!important}\n.bg-body{--bs-bg-opacity:1;background-color:rgba(var(--bs-body-bg-rgb),var(--bs-bg-opacity))!important}\n.bg-transparent{--bs-bg-opacity:1;background-color:transparent!important}\n.bg-body-secondary{--bs-bg-opacity:1;background-color:rgba(var(--bs-secondary-bg-rgb),var(--bs-bg-opacity))!important}\n.bg-body-tertiary{--bs-bg-opacity:1;background-color:rgba(var(--bs-tertiary-bg-rgb),var(--bs-bg-opacity))!important}\n.bg-opacity-10{--bs-bg-opacity:0.1}\n.bg-opacity-25{--bs-bg-opacity:0.25}\n.bg-opacity-50{--bs-bg-opacity:0.5}\n.bg-opacity-75{--bs-bg-opacity:0.75}\n.bg-opacity-100{--bs-bg-opacity:1}\n.bg-primary-subtle{background-color:var(--bs-primary-bg-subtle)!important}\n.bg-secondary-subtle{background-color:var(--bs-secondary-bg-subtle)!important}\n.bg-success-subtle{background-color:var(--bs-success-bg-subtle)!important}\n.bg-info-subtle{background-color:var(--bs-info-bg-subtle)!important}\n.bg-warning-subtle{background-color:var(--bs-warning-bg-subtle)!important}\n.bg-danger-subtle{background-color:var(--bs-danger-bg-subtle)!important}\n.bg-light-subtle{background-color:var(--bs-light-bg-subtle)!important}\n.bg-dark-subtle{background-color:var(--bs-dark-bg-subtle)!important}\n.bg-gradient{background-image:var(--bs-gradient)!important}\n.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;user-select:all!important}\n.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;user-select:auto!important}\n.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}\n.pe-none{pointer-events:none!important}\n.pe-auto{pointer-events:auto!important}\n.rounded{border-radius:var(--bs-border-radius)!important}\n.rounded-0{border-radius:0!important}\n.rounded-1{border-radius:var(--bs-border-radius-sm)!important}\n.rounded-2{border-radius:var(--bs-border-radius)!important}\n.rounded-3{border-radius:var(--bs-border-radius-lg)!important}\n.rounded-4{border-radius:var(--bs-border-radius-xl)!important}\n.rounded-5{border-radius:var(--bs-border-radius-xxl)!important}\n.rounded-circle{border-radius:50%!important}\n.rounded-pill{border-radius:var(--bs-border-radius-pill)!important}\n.rounded-top{border-top-left-radius:var(--bs-border-radius)!important;border-top-right-radius:var(--bs-border-radius)!important}\n.rounded-top-0{border-top-left-radius:0!important;border-top-right-radius:0!important}\n.rounded-top-1{border-top-left-radius:var(--bs-border-radius-sm)!important;border-top-right-radius:var(--bs-border-radius-sm)!important}\n.rounded-top-2{border-top-left-radius:var(--bs-border-radius)!important;border-top-right-radius:var(--bs-border-radius)!important}\n.rounded-top-3{border-top-left-radius:var(--bs-border-radius-lg)!important;border-top-right-radius:var(--bs-border-radius-lg)!important}\n.rounded-top-4{border-top-left-radius:var(--bs-border-radius-xl)!important;border-top-right-radius:var(--bs-border-radius-xl)!important}\n.rounded-top-5{border-top-left-radius:var(--bs-border-radius-xxl)!important;border-top-right-radius:var(--bs-border-radius-xxl)!important}\n.rounded-top-circle{border-top-left-radius:50%!important;border-top-right-radius:50%!important}\n.rounded-top-pill{border-top-left-radius:var(--bs-border-radius-pill)!important;border-top-right-radius:var(--bs-border-radius-pill)!important}\n.rounded-end{border-top-right-radius:var(--bs-border-radius)!important;border-bottom-right-radius:var(--bs-border-radius)!important}\n.rounded-end-0{border-top-right-radius:0!important;border-bottom-right-radius:0!important}\n.rounded-end-1{border-top-right-radius:var(--bs-border-radius-sm)!important;border-bottom-right-radius:var(--bs-border-radius-sm)!important}\n.rounded-end-2{border-top-right-radius:var(--bs-border-radius)!important;border-bottom-right-radius:var(--bs-border-radius)!important}\n.rounded-end-3{border-top-right-radius:var(--bs-border-radius-lg)!important;border-bottom-right-radius:var(--bs-border-radius-lg)!important}\n.rounded-end-4{border-top-right-radius:var(--bs-border-radius-xl)!important;border-bottom-right-radius:var(--bs-border-radius-xl)!important}\n.rounded-end-5{border-top-right-radius:var(--bs-border-radius-xxl)!important;border-bottom-right-radius:var(--bs-border-radius-xxl)!important}\n.rounded-end-circle{border-top-right-radius:50%!important;border-bottom-right-radius:50%!important}\n.rounded-end-pill{border-top-right-radius:var(--bs-border-radius-pill)!important;border-bottom-right-radius:var(--bs-border-radius-pill)!important}\n.rounded-bottom{border-bottom-right-radius:var(--bs-border-radius)!important;border-bottom-left-radius:var(--bs-border-radius)!important}\n.rounded-bottom-0{border-bottom-right-radius:0!important;border-bottom-left-radius:0!important}\n.rounded-bottom-1{border-bottom-right-radius:var(--bs-border-radius-sm)!important;border-bottom-left-radius:var(--bs-border-radius-sm)!important}\n.rounded-bottom-2{border-bottom-right-radius:var(--bs-border-radius)!important;border-bottom-left-radius:var(--bs-border-radius)!important}\n.rounded-bottom-3{border-bottom-right-radius:var(--bs-border-radius-lg)!important;border-bottom-left-radius:var(--bs-border-radius-lg)!important}\n.rounded-bottom-4{border-bottom-right-radius:var(--bs-border-radius-xl)!important;border-bottom-left-radius:var(--bs-border-radius-xl)!important}\n.rounded-bottom-5{border-bottom-right-radius:var(--bs-border-radius-xxl)!important;border-bottom-left-radius:var(--bs-border-radius-xxl)!important}\n.rounded-bottom-circle{border-bottom-right-radius:50%!important;border-bottom-left-radius:50%!important}\n.rounded-bottom-pill{border-bottom-right-radius:var(--bs-border-radius-pill)!important;border-bottom-left-radius:var(--bs-border-radius-pill)!important}\n.rounded-start{border-bottom-left-radius:var(--bs-border-radius)!important;border-top-left-radius:var(--bs-border-radius)!important}\n.rounded-start-0{border-bottom-left-radius:0!important;border-top-left-radius:0!important}\n.rounded-start-1{border-bottom-left-radius:var(--bs-border-radius-sm)!important;border-top-left-radius:var(--bs-border-radius-sm)!important}\n.rounded-start-2{border-bottom-left-radius:var(--bs-border-radius)!important;border-top-left-radius:var(--bs-border-radius)!important}\n.rounded-start-3{border-bottom-left-radius:var(--bs-border-radius-lg)!important;border-top-left-radius:var(--bs-border-radius-lg)!important}\n.rounded-start-4{border-bottom-left-radius:var(--bs-border-radius-xl)!important;border-top-left-radius:var(--bs-border-radius-xl)!important}\n.rounded-start-5{border-bottom-left-radius:var(--bs-border-radius-xxl)!important;border-top-left-radius:var(--bs-border-radius-xxl)!important}\n.rounded-start-circle{border-bottom-left-radius:50%!important;border-top-left-radius:50%!important}\n.rounded-start-pill{border-bottom-left-radius:var(--bs-border-radius-pill)!important;border-top-left-radius:var(--bs-border-radius-pill)!important}\n.visible{visibility:visible!important}\n.invisible{visibility:hidden!important}\n.z-n1{z-index:-1!important}\n.z-0{z-index:0!important}\n.z-1{z-index:1!important}\n.z-2{z-index:2!important}\n.z-3{z-index:3!important}\n@media (min-width:576px){.float-sm-start{float:left!important}.float-sm-end{float:right!important}.float-sm-none{float:none!important}.object-fit-sm-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-sm-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-sm-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-sm-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-sm-none{-o-object-fit:none!important;object-fit:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-grid{display:grid!important}.d-sm-inline-grid{display:inline-grid!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}.d-sm-none{display:none!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.justify-content-sm-evenly{justify-content:space-evenly!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}.order-sm-first{order:-1!important}.order-sm-0{order:0!important}.order-sm-1{order:1!important}.order-sm-2{order:2!important}.order-sm-3{order:3!important}.order-sm-4{order:4!important}.order-sm-5{order:5!important}.order-sm-last{order:6!important}.m-sm-0{margin:0!important}.m-sm-1{margin:.25rem!important}.m-sm-2{margin:.5rem!important}.m-sm-3{margin:1rem!important}.m-sm-4{margin:1.5rem!important}.m-sm-5{margin:3rem!important}.m-sm-auto{margin:auto!important}.mx-sm-0{margin-right:0!important;margin-left:0!important}.mx-sm-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-sm-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-sm-3{margin-right:1rem!important;margin-left:1rem!important}.mx-sm-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-sm-5{margin-right:3rem!important;margin-left:3rem!important}.mx-sm-auto{margin-right:auto!important;margin-left:auto!important}.my-sm-0{margin-top:0!important;margin-bottom:0!important}.my-sm-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-sm-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-sm-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-sm-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-sm-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-sm-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-sm-0{margin-top:0!important}.mt-sm-1{margin-top:.25rem!important}.mt-sm-2{margin-top:.5rem!important}.mt-sm-3{margin-top:1rem!important}.mt-sm-4{margin-top:1.5rem!important}.mt-sm-5{margin-top:3rem!important}.mt-sm-auto{margin-top:auto!important}.me-sm-0{margin-right:0!important}.me-sm-1{margin-right:.25rem!important}.me-sm-2{margin-right:.5rem!important}.me-sm-3{margin-right:1rem!important}.me-sm-4{margin-right:1.5rem!important}.me-sm-5{margin-right:3rem!important}.me-sm-auto{margin-right:auto!important}.mb-sm-0{margin-bottom:0!important}.mb-sm-1{margin-bottom:.25rem!important}.mb-sm-2{margin-bottom:.5rem!important}.mb-sm-3{margin-bottom:1rem!important}.mb-sm-4{margin-bottom:1.5rem!important}.mb-sm-5{margin-bottom:3rem!important}.mb-sm-auto{margin-bottom:auto!important}.ms-sm-0{margin-left:0!important}.ms-sm-1{margin-left:.25rem!important}.ms-sm-2{margin-left:.5rem!important}.ms-sm-3{margin-left:1rem!important}.ms-sm-4{margin-left:1.5rem!important}.ms-sm-5{margin-left:3rem!important}.ms-sm-auto{margin-left:auto!important}.p-sm-0{padding:0!important}.p-sm-1{padding:.25rem!important}.p-sm-2{padding:.5rem!important}.p-sm-3{padding:1rem!important}.p-sm-4{padding:1.5rem!important}.p-sm-5{padding:3rem!important}.px-sm-0{padding-right:0!important;padding-left:0!important}.px-sm-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-sm-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-sm-3{padding-right:1rem!important;padding-left:1rem!important}.px-sm-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-sm-5{padding-right:3rem!important;padding-left:3rem!important}.py-sm-0{padding-top:0!important;padding-bottom:0!important}.py-sm-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-sm-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-sm-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-sm-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-sm-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-sm-0{padding-top:0!important}.pt-sm-1{padding-top:.25rem!important}.pt-sm-2{padding-top:.5rem!important}.pt-sm-3{padding-top:1rem!important}.pt-sm-4{padding-top:1.5rem!important}.pt-sm-5{padding-top:3rem!important}.pe-sm-0{padding-right:0!important}.pe-sm-1{padding-right:.25rem!important}.pe-sm-2{padding-right:.5rem!important}.pe-sm-3{padding-right:1rem!important}.pe-sm-4{padding-right:1.5rem!important}.pe-sm-5{padding-right:3rem!important}.pb-sm-0{padding-bottom:0!important}.pb-sm-1{padding-bottom:.25rem!important}.pb-sm-2{padding-bottom:.5rem!important}.pb-sm-3{padding-bottom:1rem!important}.pb-sm-4{padding-bottom:1.5rem!important}.pb-sm-5{padding-bottom:3rem!important}.ps-sm-0{padding-left:0!important}.ps-sm-1{padding-left:.25rem!important}.ps-sm-2{padding-left:.5rem!important}.ps-sm-3{padding-left:1rem!important}.ps-sm-4{padding-left:1.5rem!important}.ps-sm-5{padding-left:3rem!important}.gap-sm-0{gap:0!important}.gap-sm-1{gap:.25rem!important}.gap-sm-2{gap:.5rem!important}.gap-sm-3{gap:1rem!important}.gap-sm-4{gap:1.5rem!important}.gap-sm-5{gap:3rem!important}.row-gap-sm-0{row-gap:0!important}.row-gap-sm-1{row-gap:.25rem!important}.row-gap-sm-2{row-gap:.5rem!important}.row-gap-sm-3{row-gap:1rem!important}.row-gap-sm-4{row-gap:1.5rem!important}.row-gap-sm-5{row-gap:3rem!important}.column-gap-sm-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-sm-1{-moz-column-gap:0.25rem!important;column-gap:.25rem!important}.column-gap-sm-2{-moz-column-gap:0.5rem!important;column-gap:.5rem!important}.column-gap-sm-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-sm-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-sm-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-sm-start{text-align:left!important}.text-sm-end{text-align:right!important}.text-sm-center{text-align:center!important}}\n@media (min-width:768px){.float-md-start{float:left!important}.float-md-end{float:right!important}.float-md-none{float:none!important}.object-fit-md-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-md-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-md-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-md-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-md-none{-o-object-fit:none!important;object-fit:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-grid{display:grid!important}.d-md-inline-grid{display:inline-grid!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}.d-md-none{display:none!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.justify-content-md-evenly{justify-content:space-evenly!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}.order-md-first{order:-1!important}.order-md-0{order:0!important}.order-md-1{order:1!important}.order-md-2{order:2!important}.order-md-3{order:3!important}.order-md-4{order:4!important}.order-md-5{order:5!important}.order-md-last{order:6!important}.m-md-0{margin:0!important}.m-md-1{margin:.25rem!important}.m-md-2{margin:.5rem!important}.m-md-3{margin:1rem!important}.m-md-4{margin:1.5rem!important}.m-md-5{margin:3rem!important}.m-md-auto{margin:auto!important}.mx-md-0{margin-right:0!important;margin-left:0!important}.mx-md-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-md-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-md-3{margin-right:1rem!important;margin-left:1rem!important}.mx-md-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-md-5{margin-right:3rem!important;margin-left:3rem!important}.mx-md-auto{margin-right:auto!important;margin-left:auto!important}.my-md-0{margin-top:0!important;margin-bottom:0!important}.my-md-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-md-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-md-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-md-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-md-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-md-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-md-0{margin-top:0!important}.mt-md-1{margin-top:.25rem!important}.mt-md-2{margin-top:.5rem!important}.mt-md-3{margin-top:1rem!important}.mt-md-4{margin-top:1.5rem!important}.mt-md-5{margin-top:3rem!important}.mt-md-auto{margin-top:auto!important}.me-md-0{margin-right:0!important}.me-md-1{margin-right:.25rem!important}.me-md-2{margin-right:.5rem!important}.me-md-3{margin-right:1rem!important}.me-md-4{margin-right:1.5rem!important}.me-md-5{margin-right:3rem!important}.me-md-auto{margin-right:auto!important}.mb-md-0{margin-bottom:0!important}.mb-md-1{margin-bottom:.25rem!important}.mb-md-2{margin-bottom:.5rem!important}.mb-md-3{margin-bottom:1rem!important}.mb-md-4{margin-bottom:1.5rem!important}.mb-md-5{margin-bottom:3rem!important}.mb-md-auto{margin-bottom:auto!important}.ms-md-0{margin-left:0!important}.ms-md-1{margin-left:.25rem!important}.ms-md-2{margin-left:.5rem!important}.ms-md-3{margin-left:1rem!important}.ms-md-4{margin-left:1.5rem!important}.ms-md-5{margin-left:3rem!important}.ms-md-auto{margin-left:auto!important}.p-md-0{padding:0!important}.p-md-1{padding:.25rem!important}.p-md-2{padding:.5rem!important}.p-md-3{padding:1rem!important}.p-md-4{padding:1.5rem!important}.p-md-5{padding:3rem!important}.px-md-0{padding-right:0!important;padding-left:0!important}.px-md-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-md-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-md-3{padding-right:1rem!important;padding-left:1rem!important}.px-md-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-md-5{padding-right:3rem!important;padding-left:3rem!important}.py-md-0{padding-top:0!important;padding-bottom:0!important}.py-md-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-md-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-md-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-md-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-md-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-md-0{padding-top:0!important}.pt-md-1{padding-top:.25rem!important}.pt-md-2{padding-top:.5rem!important}.pt-md-3{padding-top:1rem!important}.pt-md-4{padding-top:1.5rem!important}.pt-md-5{padding-top:3rem!important}.pe-md-0{padding-right:0!important}.pe-md-1{padding-right:.25rem!important}.pe-md-2{padding-right:.5rem!important}.pe-md-3{padding-right:1rem!important}.pe-md-4{padding-right:1.5rem!important}.pe-md-5{padding-right:3rem!important}.pb-md-0{padding-bottom:0!important}.pb-md-1{padding-bottom:.25rem!important}.pb-md-2{padding-bottom:.5rem!important}.pb-md-3{padding-bottom:1rem!important}.pb-md-4{padding-bottom:1.5rem!important}.pb-md-5{padding-bottom:3rem!important}.ps-md-0{padding-left:0!important}.ps-md-1{padding-left:.25rem!important}.ps-md-2{padding-left:.5rem!important}.ps-md-3{padding-left:1rem!important}.ps-md-4{padding-left:1.5rem!important}.ps-md-5{padding-left:3rem!important}.gap-md-0{gap:0!important}.gap-md-1{gap:.25rem!important}.gap-md-2{gap:.5rem!important}.gap-md-3{gap:1rem!important}.gap-md-4{gap:1.5rem!important}.gap-md-5{gap:3rem!important}.row-gap-md-0{row-gap:0!important}.row-gap-md-1{row-gap:.25rem!important}.row-gap-md-2{row-gap:.5rem!important}.row-gap-md-3{row-gap:1rem!important}.row-gap-md-4{row-gap:1.5rem!important}.row-gap-md-5{row-gap:3rem!important}.column-gap-md-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-md-1{-moz-column-gap:0.25rem!important;column-gap:.25rem!important}.column-gap-md-2{-moz-column-gap:0.5rem!important;column-gap:.5rem!important}.column-gap-md-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-md-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-md-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-md-start{text-align:left!important}.text-md-end{text-align:right!important}.text-md-center{text-align:center!important}}\n@media (min-width:992px){.float-lg-start{float:left!important}.float-lg-end{float:right!important}.float-lg-none{float:none!important}.object-fit-lg-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-lg-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-lg-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-lg-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-lg-none{-o-object-fit:none!important;object-fit:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-grid{display:grid!important}.d-lg-inline-grid{display:inline-grid!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}.d-lg-none{display:none!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.justify-content-lg-evenly{justify-content:space-evenly!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}.order-lg-first{order:-1!important}.order-lg-0{order:0!important}.order-lg-1{order:1!important}.order-lg-2{order:2!important}.order-lg-3{order:3!important}.order-lg-4{order:4!important}.order-lg-5{order:5!important}.order-lg-last{order:6!important}.m-lg-0{margin:0!important}.m-lg-1{margin:.25rem!important}.m-lg-2{margin:.5rem!important}.m-lg-3{margin:1rem!important}.m-lg-4{margin:1.5rem!important}.m-lg-5{margin:3rem!important}.m-lg-auto{margin:auto!important}.mx-lg-0{margin-right:0!important;margin-left:0!important}.mx-lg-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-lg-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-lg-3{margin-right:1rem!important;margin-left:1rem!important}.mx-lg-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-lg-5{margin-right:3rem!important;margin-left:3rem!important}.mx-lg-auto{margin-right:auto!important;margin-left:auto!important}.my-lg-0{margin-top:0!important;margin-bottom:0!important}.my-lg-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-lg-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-lg-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-lg-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-lg-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-lg-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-lg-0{margin-top:0!important}.mt-lg-1{margin-top:.25rem!important}.mt-lg-2{margin-top:.5rem!important}.mt-lg-3{margin-top:1rem!important}.mt-lg-4{margin-top:1.5rem!important}.mt-lg-5{margin-top:3rem!important}.mt-lg-auto{margin-top:auto!important}.me-lg-0{margin-right:0!important}.me-lg-1{margin-right:.25rem!important}.me-lg-2{margin-right:.5rem!important}.me-lg-3{margin-right:1rem!important}.me-lg-4{margin-right:1.5rem!important}.me-lg-5{margin-right:3rem!important}.me-lg-auto{margin-right:auto!important}.mb-lg-0{margin-bottom:0!important}.mb-lg-1{margin-bottom:.25rem!important}.mb-lg-2{margin-bottom:.5rem!important}.mb-lg-3{margin-bottom:1rem!important}.mb-lg-4{margin-bottom:1.5rem!important}.mb-lg-5{margin-bottom:3rem!important}.mb-lg-auto{margin-bottom:auto!important}.ms-lg-0{margin-left:0!important}.ms-lg-1{margin-left:.25rem!important}.ms-lg-2{margin-left:.5rem!important}.ms-lg-3{margin-left:1rem!important}.ms-lg-4{margin-left:1.5rem!important}.ms-lg-5{margin-left:3rem!important}.ms-lg-auto{margin-left:auto!important}.p-lg-0{padding:0!important}.p-lg-1{padding:.25rem!important}.p-lg-2{padding:.5rem!important}.p-lg-3{padding:1rem!important}.p-lg-4{padding:1.5rem!important}.p-lg-5{padding:3rem!important}.px-lg-0{padding-right:0!important;padding-left:0!important}.px-lg-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-lg-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-lg-3{padding-right:1rem!important;padding-left:1rem!important}.px-lg-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-lg-5{padding-right:3rem!important;padding-left:3rem!important}.py-lg-0{padding-top:0!important;padding-bottom:0!important}.py-lg-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-lg-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-lg-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-lg-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-lg-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-lg-0{padding-top:0!important}.pt-lg-1{padding-top:.25rem!important}.pt-lg-2{padding-top:.5rem!important}.pt-lg-3{padding-top:1rem!important}.pt-lg-4{padding-top:1.5rem!important}.pt-lg-5{padding-top:3rem!important}.pe-lg-0{padding-right:0!important}.pe-lg-1{padding-right:.25rem!important}.pe-lg-2{padding-right:.5rem!important}.pe-lg-3{padding-right:1rem!important}.pe-lg-4{padding-right:1.5rem!important}.pe-lg-5{padding-right:3rem!important}.pb-lg-0{padding-bottom:0!important}.pb-lg-1{padding-bottom:.25rem!important}.pb-lg-2{padding-bottom:.5rem!important}.pb-lg-3{padding-bottom:1rem!important}.pb-lg-4{padding-bottom:1.5rem!important}.pb-lg-5{padding-bottom:3rem!important}.ps-lg-0{padding-left:0!important}.ps-lg-1{padding-left:.25rem!important}.ps-lg-2{padding-left:.5rem!important}.ps-lg-3{padding-left:1rem!important}.ps-lg-4{padding-left:1.5rem!important}.ps-lg-5{padding-left:3rem!important}.gap-lg-0{gap:0!important}.gap-lg-1{gap:.25rem!important}.gap-lg-2{gap:.5rem!important}.gap-lg-3{gap:1rem!important}.gap-lg-4{gap:1.5rem!important}.gap-lg-5{gap:3rem!important}.row-gap-lg-0{row-gap:0!important}.row-gap-lg-1{row-gap:.25rem!important}.row-gap-lg-2{row-gap:.5rem!important}.row-gap-lg-3{row-gap:1rem!important}.row-gap-lg-4{row-gap:1.5rem!important}.row-gap-lg-5{row-gap:3rem!important}.column-gap-lg-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-lg-1{-moz-column-gap:0.25rem!important;column-gap:.25rem!important}.column-gap-lg-2{-moz-column-gap:0.5rem!important;column-gap:.5rem!important}.column-gap-lg-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-lg-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-lg-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-lg-start{text-align:left!important}.text-lg-end{text-align:right!important}.text-lg-center{text-align:center!important}}\n@media (min-width:1200px){.float-xl-start{float:left!important}.float-xl-end{float:right!important}.float-xl-none{float:none!important}.object-fit-xl-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-xl-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-xl-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-xl-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-xl-none{-o-object-fit:none!important;object-fit:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-grid{display:grid!important}.d-xl-inline-grid{display:inline-grid!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}.d-xl-none{display:none!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.justify-content-xl-evenly{justify-content:space-evenly!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}.order-xl-first{order:-1!important}.order-xl-0{order:0!important}.order-xl-1{order:1!important}.order-xl-2{order:2!important}.order-xl-3{order:3!important}.order-xl-4{order:4!important}.order-xl-5{order:5!important}.order-xl-last{order:6!important}.m-xl-0{margin:0!important}.m-xl-1{margin:.25rem!important}.m-xl-2{margin:.5rem!important}.m-xl-3{margin:1rem!important}.m-xl-4{margin:1.5rem!important}.m-xl-5{margin:3rem!important}.m-xl-auto{margin:auto!important}.mx-xl-0{margin-right:0!important;margin-left:0!important}.mx-xl-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xl-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xl-3{margin-right:1rem!important;margin-left:1rem!important}.mx-xl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xl-5{margin-right:3rem!important;margin-left:3rem!important}.mx-xl-auto{margin-right:auto!important;margin-left:auto!important}.my-xl-0{margin-top:0!important;margin-bottom:0!important}.my-xl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xl-0{margin-top:0!important}.mt-xl-1{margin-top:.25rem!important}.mt-xl-2{margin-top:.5rem!important}.mt-xl-3{margin-top:1rem!important}.mt-xl-4{margin-top:1.5rem!important}.mt-xl-5{margin-top:3rem!important}.mt-xl-auto{margin-top:auto!important}.me-xl-0{margin-right:0!important}.me-xl-1{margin-right:.25rem!important}.me-xl-2{margin-right:.5rem!important}.me-xl-3{margin-right:1rem!important}.me-xl-4{margin-right:1.5rem!important}.me-xl-5{margin-right:3rem!important}.me-xl-auto{margin-right:auto!important}.mb-xl-0{margin-bottom:0!important}.mb-xl-1{margin-bottom:.25rem!important}.mb-xl-2{margin-bottom:.5rem!important}.mb-xl-3{margin-bottom:1rem!important}.mb-xl-4{margin-bottom:1.5rem!important}.mb-xl-5{margin-bottom:3rem!important}.mb-xl-auto{margin-bottom:auto!important}.ms-xl-0{margin-left:0!important}.ms-xl-1{margin-left:.25rem!important}.ms-xl-2{margin-left:.5rem!important}.ms-xl-3{margin-left:1rem!important}.ms-xl-4{margin-left:1.5rem!important}.ms-xl-5{margin-left:3rem!important}.ms-xl-auto{margin-left:auto!important}.p-xl-0{padding:0!important}.p-xl-1{padding:.25rem!important}.p-xl-2{padding:.5rem!important}.p-xl-3{padding:1rem!important}.p-xl-4{padding:1.5rem!important}.p-xl-5{padding:3rem!important}.px-xl-0{padding-right:0!important;padding-left:0!important}.px-xl-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-xl-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-xl-3{padding-right:1rem!important;padding-left:1rem!important}.px-xl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xl-0{padding-top:0!important;padding-bottom:0!important}.py-xl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xl-0{padding-top:0!important}.pt-xl-1{padding-top:.25rem!important}.pt-xl-2{padding-top:.5rem!important}.pt-xl-3{padding-top:1rem!important}.pt-xl-4{padding-top:1.5rem!important}.pt-xl-5{padding-top:3rem!important}.pe-xl-0{padding-right:0!important}.pe-xl-1{padding-right:.25rem!important}.pe-xl-2{padding-right:.5rem!important}.pe-xl-3{padding-right:1rem!important}.pe-xl-4{padding-right:1.5rem!important}.pe-xl-5{padding-right:3rem!important}.pb-xl-0{padding-bottom:0!important}.pb-xl-1{padding-bottom:.25rem!important}.pb-xl-2{padding-bottom:.5rem!important}.pb-xl-3{padding-bottom:1rem!important}.pb-xl-4{padding-bottom:1.5rem!important}.pb-xl-5{padding-bottom:3rem!important}.ps-xl-0{padding-left:0!important}.ps-xl-1{padding-left:.25rem!important}.ps-xl-2{padding-left:.5rem!important}.ps-xl-3{padding-left:1rem!important}.ps-xl-4{padding-left:1.5rem!important}.ps-xl-5{padding-left:3rem!important}.gap-xl-0{gap:0!important}.gap-xl-1{gap:.25rem!important}.gap-xl-2{gap:.5rem!important}.gap-xl-3{gap:1rem!important}.gap-xl-4{gap:1.5rem!important}.gap-xl-5{gap:3rem!important}.row-gap-xl-0{row-gap:0!important}.row-gap-xl-1{row-gap:.25rem!important}.row-gap-xl-2{row-gap:.5rem!important}.row-gap-xl-3{row-gap:1rem!important}.row-gap-xl-4{row-gap:1.5rem!important}.row-gap-xl-5{row-gap:3rem!important}.column-gap-xl-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-xl-1{-moz-column-gap:0.25rem!important;column-gap:.25rem!important}.column-gap-xl-2{-moz-column-gap:0.5rem!important;column-gap:.5rem!important}.column-gap-xl-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-xl-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-xl-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-xl-start{text-align:left!important}.text-xl-end{text-align:right!important}.text-xl-center{text-align:center!important}}\n@media (min-width:1400px){.float-xxl-start{float:left!important}.float-xxl-end{float:right!important}.float-xxl-none{float:none!important}.object-fit-xxl-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-xxl-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-xxl-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-xxl-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-xxl-none{-o-object-fit:none!important;object-fit:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-grid{display:grid!important}.d-xxl-inline-grid{display:inline-grid!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}.d-xxl-none{display:none!important}.flex-xxl-fill{flex:1 1 auto!important}.flex-xxl-row{flex-direction:row!important}.flex-xxl-column{flex-direction:column!important}.flex-xxl-row-reverse{flex-direction:row-reverse!important}.flex-xxl-column-reverse{flex-direction:column-reverse!important}.flex-xxl-grow-0{flex-grow:0!important}.flex-xxl-grow-1{flex-grow:1!important}.flex-xxl-shrink-0{flex-shrink:0!important}.flex-xxl-shrink-1{flex-shrink:1!important}.flex-xxl-wrap{flex-wrap:wrap!important}.flex-xxl-nowrap{flex-wrap:nowrap!important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xxl-start{justify-content:flex-start!important}.justify-content-xxl-end{justify-content:flex-end!important}.justify-content-xxl-center{justify-content:center!important}.justify-content-xxl-between{justify-content:space-between!important}.justify-content-xxl-around{justify-content:space-around!important}.justify-content-xxl-evenly{justify-content:space-evenly!important}.align-items-xxl-start{align-items:flex-start!important}.align-items-xxl-end{align-items:flex-end!important}.align-items-xxl-center{align-items:center!important}.align-items-xxl-baseline{align-items:baseline!important}.align-items-xxl-stretch{align-items:stretch!important}.align-content-xxl-start{align-content:flex-start!important}.align-content-xxl-end{align-content:flex-end!important}.align-content-xxl-center{align-content:center!important}.align-content-xxl-between{align-content:space-between!important}.align-content-xxl-around{align-content:space-around!important}.align-content-xxl-stretch{align-content:stretch!important}.align-self-xxl-auto{align-self:auto!important}.align-self-xxl-start{align-self:flex-start!important}.align-self-xxl-end{align-self:flex-end!important}.align-self-xxl-center{align-self:center!important}.align-self-xxl-baseline{align-self:baseline!important}.align-self-xxl-stretch{align-self:stretch!important}.order-xxl-first{order:-1!important}.order-xxl-0{order:0!important}.order-xxl-1{order:1!important}.order-xxl-2{order:2!important}.order-xxl-3{order:3!important}.order-xxl-4{order:4!important}.order-xxl-5{order:5!important}.order-xxl-last{order:6!important}.m-xxl-0{margin:0!important}.m-xxl-1{margin:.25rem!important}.m-xxl-2{margin:.5rem!important}.m-xxl-3{margin:1rem!important}.m-xxl-4{margin:1.5rem!important}.m-xxl-5{margin:3rem!important}.m-xxl-auto{margin:auto!important}.mx-xxl-0{margin-right:0!important;margin-left:0!important}.mx-xxl-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xxl-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xxl-3{margin-right:1rem!important;margin-left:1rem!important}.mx-xxl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xxl-5{margin-right:3rem!important;margin-left:3rem!important}.mx-xxl-auto{margin-right:auto!important;margin-left:auto!important}.my-xxl-0{margin-top:0!important;margin-bottom:0!important}.my-xxl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xxl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xxl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xxl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xxl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xxl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xxl-0{margin-top:0!important}.mt-xxl-1{margin-top:.25rem!important}.mt-xxl-2{margin-top:.5rem!important}.mt-xxl-3{margin-top:1rem!important}.mt-xxl-4{margin-top:1.5rem!important}.mt-xxl-5{margin-top:3rem!important}.mt-xxl-auto{margin-top:auto!important}.me-xxl-0{margin-right:0!important}.me-xxl-1{margin-right:.25rem!important}.me-xxl-2{margin-right:.5rem!important}.me-xxl-3{margin-right:1rem!important}.me-xxl-4{margin-right:1.5rem!important}.me-xxl-5{margin-right:3rem!important}.me-xxl-auto{margin-right:auto!important}.mb-xxl-0{margin-bottom:0!important}.mb-xxl-1{margin-bottom:.25rem!important}.mb-xxl-2{margin-bottom:.5rem!important}.mb-xxl-3{margin-bottom:1rem!important}.mb-xxl-4{margin-bottom:1.5rem!important}.mb-xxl-5{margin-bottom:3rem!important}.mb-xxl-auto{margin-bottom:auto!important}.ms-xxl-0{margin-left:0!important}.ms-xxl-1{margin-left:.25rem!important}.ms-xxl-2{margin-left:.5rem!important}.ms-xxl-3{margin-left:1rem!important}.ms-xxl-4{margin-left:1.5rem!important}.ms-xxl-5{margin-left:3rem!important}.ms-xxl-auto{margin-left:auto!important}.p-xxl-0{padding:0!important}.p-xxl-1{padding:.25rem!important}.p-xxl-2{padding:.5rem!important}.p-xxl-3{padding:1rem!important}.p-xxl-4{padding:1.5rem!important}.p-xxl-5{padding:3rem!important}.px-xxl-0{padding-right:0!important;padding-left:0!important}.px-xxl-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-xxl-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-xxl-3{padding-right:1rem!important;padding-left:1rem!important}.px-xxl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xxl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xxl-0{padding-top:0!important;padding-bottom:0!important}.py-xxl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xxl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xxl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xxl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xxl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xxl-0{padding-top:0!important}.pt-xxl-1{padding-top:.25rem!important}.pt-xxl-2{padding-top:.5rem!important}.pt-xxl-3{padding-top:1rem!important}.pt-xxl-4{padding-top:1.5rem!important}.pt-xxl-5{padding-top:3rem!important}.pe-xxl-0{padding-right:0!important}.pe-xxl-1{padding-right:.25rem!important}.pe-xxl-2{padding-right:.5rem!important}.pe-xxl-3{padding-right:1rem!important}.pe-xxl-4{padding-right:1.5rem!important}.pe-xxl-5{padding-right:3rem!important}.pb-xxl-0{padding-bottom:0!important}.pb-xxl-1{padding-bottom:.25rem!important}.pb-xxl-2{padding-bottom:.5rem!important}.pb-xxl-3{padding-bottom:1rem!important}.pb-xxl-4{padding-bottom:1.5rem!important}.pb-xxl-5{padding-bottom:3rem!important}.ps-xxl-0{padding-left:0!important}.ps-xxl-1{padding-left:.25rem!important}.ps-xxl-2{padding-left:.5rem!important}.ps-xxl-3{padding-left:1rem!important}.ps-xxl-4{padding-left:1.5rem!important}.ps-xxl-5{padding-left:3rem!important}.gap-xxl-0{gap:0!important}.gap-xxl-1{gap:.25rem!important}.gap-xxl-2{gap:.5rem!important}.gap-xxl-3{gap:1rem!important}.gap-xxl-4{gap:1.5rem!important}.gap-xxl-5{gap:3rem!important}.row-gap-xxl-0{row-gap:0!important}.row-gap-xxl-1{row-gap:.25rem!important}.row-gap-xxl-2{row-gap:.5rem!important}.row-gap-xxl-3{row-gap:1rem!important}.row-gap-xxl-4{row-gap:1.5rem!important}.row-gap-xxl-5{row-gap:3rem!important}.column-gap-xxl-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-xxl-1{-moz-column-gap:0.25rem!important;column-gap:.25rem!important}.column-gap-xxl-2{-moz-column-gap:0.5rem!important;column-gap:.5rem!important}.column-gap-xxl-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-xxl-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-xxl-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-xxl-start{text-align:left!important}.text-xxl-end{text-align:right!important}.text-xxl-center{text-align:center!important}}\n@media (min-width:1200px){.fs-1{font-size:2.5rem!important}.fs-2{font-size:2rem!important}.fs-3{font-size:1.75rem!important}.fs-4{font-size:1.5rem!important}}\n@media print{.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-grid{display:grid!important}.d-print-inline-grid{display:inline-grid!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}.d-print-none{display:none!important}}";
styleInject(css_248z$3);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (Object.prototype.hasOwnProperty.call(n, '__esModule')) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var bootstrap_min$1 = {exports: {}};

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle$1(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x,
      y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }, getWindow(popper)) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref) {
        var name = _ref.name,
            _ref$options = _ref.options,
            options = _ref$options === void 0 ? {} : _ref$options,
            effect = _ref.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper$2 = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules

var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var createPopper$1 = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers$1
}); // eslint-disable-next-line import/no-unused-modules

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

var lib = /*#__PURE__*/Object.freeze({
  __proto__: null,
  afterMain: afterMain,
  afterRead: afterRead,
  afterWrite: afterWrite,
  applyStyles: applyStyles$1,
  arrow: arrow$1,
  auto: auto,
  basePlacements: basePlacements,
  beforeMain: beforeMain,
  beforeRead: beforeRead,
  beforeWrite: beforeWrite,
  bottom: bottom,
  clippingParents: clippingParents,
  computeStyles: computeStyles$1,
  createPopper: createPopper,
  createPopperBase: createPopper$2,
  createPopperLite: createPopper$1,
  detectOverflow: detectOverflow,
  end: end,
  eventListeners: eventListeners,
  flip: flip$1,
  hide: hide$1,
  left: left,
  main: main,
  modifierPhases: modifierPhases,
  offset: offset$1,
  placements: placements,
  popper: popper,
  popperGenerator: popperGenerator,
  popperOffsets: popperOffsets$1,
  preventOverflow: preventOverflow$1,
  read: read,
  reference: reference,
  right: right,
  start: start,
  top: top,
  variationPlacements: variationPlacements,
  viewport: viewport,
  write: write
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(lib);

/*!
  * Bootstrap v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var bootstrap_min = bootstrap_min$1.exports;

var hasRequiredBootstrap_min;

function requireBootstrap_min () {
	if (hasRequiredBootstrap_min) return bootstrap_min$1.exports;
	hasRequiredBootstrap_min = 1;
	(function (module, exports) {
		!function(t,e){module.exports=e(require$$0);}(bootstrap_min,(function(t){function e(t){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t)for(const i in t)if("default"!==i){const s=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(e,i,s.get?s:{enumerable:true,get:()=>t[i]});}return e.default=t,Object.freeze(e)}const i=e(t),s=new Map,n={set(t,e,i){s.has(t)||s.set(t,new Map);const n=s.get(t);n.has(e)||0===n.size?n.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);},get:(t,e)=>s.has(t)&&s.get(t).get(e)||null,remove(t,e){if(!s.has(t))return;const i=s.get(t);i.delete(e),0===i.size&&s.delete(t);}},o="transitionend",r=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,((t,e)=>`#${CSS.escape(e)}`))),t),a=t=>{t.dispatchEvent(new Event(o));},l=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),c=t=>l(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(r(t)):null,h=t=>{if(!l(t)||0===t.getClientRects().length)return  false;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return  false;if(null===e)return  false}return e},d=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),u=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?u(t.parentNode):null},_=()=>{},g=t=>{t.offsetHeight;},f=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,m=[],p=()=>"rtl"===document.documentElement.dir,b=t=>{var e;e=()=>{const e=f();if(e){const i=t.NAME,s=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=s,t.jQueryInterface);}},"loading"===document.readyState?(m.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of m)t();})),m.push(e)):e();},v=(t,e=[],i=t)=>"function"==typeof t?t.call(...e):i,y=(t,e,i=true)=>{if(!i)return void v(t);const s=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const s=Number.parseFloat(e),n=Number.parseFloat(i);return s||n?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let n=false;const r=({target:i})=>{i===e&&(n=true,e.removeEventListener(o,r),v(t));};e.addEventListener(o,r),setTimeout((()=>{n||a(e);}),s);},w=(t,e,i,s)=>{const n=t.length;let o=t.indexOf(e);return  -1===o?!i&&s?t[n-1]:t[0]:(o+=i?1:-1,s&&(o=(o+n)%n),t[Math.max(0,Math.min(o,n-1))])},A=/[^.]*(?=\..*)\.|.*/,E=/\..*/,C=/::\d+$/,T={};let k=1;const $={mouseenter:"mouseover",mouseleave:"mouseout"},S=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function L(t,e){return e&&`${e}::${k++}`||t.uidEvent||k++}function O(t){const e=L(t);return t.uidEvent=e,T[e]=T[e]||{},T[e]}function I(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function D(t,e,i){const s="string"==typeof e,n=s?i:e||i;let o=M(t);return S.has(o)||(o=t),[s,n,o]}function N(t,e,i,s,n){if("string"!=typeof e||!t)return;let[o,r,a]=D(e,i,s);if(e in $){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r);}const l=O(t),c=l[a]||(l[a]={}),h=I(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&n);const d=L(r,e.replace(A,"")),u=o?function(t,e,i){return function s(n){const o=t.querySelectorAll(e);for(let{target:r}=n;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return F(n,{delegateTarget:r}),s.oneOff&&j.off(t,n.type,e,i),i.apply(r,[n])}}(t,i,r):function(t,e){return function i(s){return F(s,{delegateTarget:t}),i.oneOff&&j.off(t,s.type,e),e.apply(t,[s])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=n,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o);}function P(t,e,i,s,n){const o=I(e[i],s,n);o&&(t.removeEventListener(i,o,Boolean(n)),delete e[i][o.uidEvent]);}function x(t,e,i,s){const n=e[i]||{};for(const[o,r]of Object.entries(n))o.includes(s)&&P(t,e,i,r.callable,r.delegationSelector);}function M(t){return t=t.replace(E,""),$[t]||t}const j={on(t,e,i,s){N(t,e,i,s,false);},one(t,e,i,s){N(t,e,i,s,true);},off(t,e,i,s){if("string"!=typeof e||!t)return;const[n,o,r]=D(e,i,s),a=r!==e,l=O(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const i of Object.keys(l))x(t,l,i,e.slice(1));for(const[i,s]of Object.entries(c)){const n=i.replace(C,"");a&&!e.includes(n)||P(t,l,r,s.callable,s.delegationSelector);}}else {if(!Object.keys(c).length)return;P(t,l,r,o,n?i:null);}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const s=f();let n=null,o=true,r=true,a=false;e!==M(e)&&s&&(n=s.Event(e,i),s(t).trigger(n),o=!n.isPropagationStopped(),r=!n.isImmediatePropagationStopped(),a=n.isDefaultPrevented());const l=F(new Event(e,{bubbles:o,cancelable:true}),i);return a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&n&&n.preventDefault(),l}};function F(t,e={}){for(const[i,s]of Object.entries(e))try{t[i]=s;}catch(e){Object.defineProperty(t,i,{configurable:true,get:()=>s});}return t}function z(t){if("true"===t)return  true;if("false"===t)return  false;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function H(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const B={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${H(e)}`,i);},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${H(e)}`);},getDataAttributes(t){if(!t)return {};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const s of i){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1),e[i]=z(t.dataset[s]);}return e},getDataAttribute:(t,e)=>z(t.getAttribute(`data-bs-${H(e)}`))};class q{static get Default(){return {}}static get DefaultType(){return {}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=l(e)?B.getDataAttribute(e,"config"):{};return {...this.constructor.Default,..."object"==typeof i?i:{},...l(e)?B.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[s,n]of Object.entries(e)){const e=t[s],o=l(e)?"element":null==(i=e)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(n).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${n}".`)}var i;}}class W extends q{constructor(t,e){super(),(t=c(t))&&(this._element=t,this._config=this._getConfig(e),n.set(this._element,this.constructor.DATA_KEY,this));}dispose(){n.remove(this._element,this.constructor.DATA_KEY),j.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null;}_queueCallback(t,e,i=true){y(t,e,i);}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return n.get(c(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return "5.3.5"}static get DATA_KEY(){return `bs.${this.NAME}`}static get EVENT_KEY(){return `.${this.DATA_KEY}`}static eventName(t){return `${t}${this.EVENT_KEY}`}}const R=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null;}return e?e.split(",").map((t=>r(t))).join(","):null},K={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let s=t.parentNode.closest(e);for(;s;)i.push(s),s=s.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return [i];i=i.previousElementSibling;}return []},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return [i];i=i.nextElementSibling;}return []},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!d(t)&&h(t)))},getSelectorFromElement(t){const e=R(t);return e&&K.findOne(e)?e:null},getElementFromSelector(t){const e=R(t);return e?K.findOne(e):null},getMultipleElementsFromSelector(t){const e=R(t);return e?K.find(e):[]}},V=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;j.on(document,i,`[data-bs-dismiss="${s}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),d(this))return;const n=K.getElementFromSelector(this)||this.closest(`.${s}`);t.getOrCreateInstance(n)[e]();}));},Q=".bs.alert",X=`close${Q}`,Y=`closed${Q}`;class U extends W{static get NAME(){return "alert"}close(){if(j.trigger(this._element,X).defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t);}_destroyElement(){this._element.remove(),j.trigger(this._element,Y),this.dispose();}static jQueryInterface(t){return this.each((function(){const e=U.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this);}}))}}V(U,"close"),b(U);const G='[data-bs-toggle="button"]';class J extends W{static get NAME(){return "button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"));}static jQueryInterface(t){return this.each((function(){const e=J.getOrCreateInstance(this);"toggle"===t&&e[t]();}))}}j.on(document,"click.bs.button.data-api",G,(t=>{t.preventDefault();const e=t.target.closest(G);J.getOrCreateInstance(e).toggle();})),b(J);const Z=".bs.swipe",tt=`touchstart${Z}`,et=`touchmove${Z}`,it=`touchend${Z}`,st=`pointerdown${Z}`,nt=`pointerup${Z}`,ot={endCallback:null,leftCallback:null,rightCallback:null},rt={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class at extends q{constructor(t,e){super(),this._element=t,t&&at.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents());}static get Default(){return ot}static get DefaultType(){return rt}static get NAME(){return "swipe"}dispose(){j.off(this._element,Z);}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX;}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),v(this._config.endCallback);}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX;}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&v(e>0?this._config.rightCallback:this._config.leftCallback);}_initEvents(){this._supportPointerEvents?(j.on(this._element,st,(t=>this._start(t))),j.on(this._element,nt,(t=>this._end(t))),this._element.classList.add("pointer-event")):(j.on(this._element,tt,(t=>this._start(t))),j.on(this._element,et,(t=>this._move(t))),j.on(this._element,it,(t=>this._end(t))));}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return "ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const lt=".bs.carousel",ct=".data-api",ht="ArrowLeft",dt="ArrowRight",ut="next",_t="prev",gt="left",ft="right",mt=`slide${lt}`,pt=`slid${lt}`,bt=`keydown${lt}`,vt=`mouseenter${lt}`,yt=`mouseleave${lt}`,wt=`dragstart${lt}`,At=`load${lt}${ct}`,Et=`click${lt}${ct}`,Ct="carousel",Tt="active",kt=".active",$t=".carousel-item",St=kt+$t,Lt={[ht]:ft,[dt]:gt},Ot={interval:5e3,keyboard:true,pause:"hover",ride:false,touch:true,wrap:true},It={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Dt extends W{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=false,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=K.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===Ct&&this.cycle();}static get Default(){return Ot}static get DefaultType(){return It}static get NAME(){return "carousel"}next(){this._slide(ut);}nextWhenVisible(){!document.hidden&&h(this._element)&&this.next();}prev(){this._slide(_t);}pause(){this._isSliding&&a(this._element),this._clearInterval();}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval);}_maybeEnableCycle(){this._config.ride&&(this._isSliding?j.one(this._element,pt,(()=>this.cycle())):this.cycle());}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void j.one(this._element,pt,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const s=t>i?ut:_t;this._slide(s,e[t]);}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose();}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&j.on(this._element,bt,(t=>this._keydown(t))),"hover"===this._config.pause&&(j.on(this._element,vt,(()=>this.pause())),j.on(this._element,yt,(()=>this._maybeEnableCycle()))),this._config.touch&&at.isSupported()&&this._addTouchEventListeners();}_addTouchEventListeners(){for(const t of K.find(".carousel-item img",this._element))j.on(t,wt,(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(gt)),rightCallback:()=>this._slide(this._directionToOrder(ft)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval));}};this._swipeHelper=new at(this._element,t);}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Lt[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)));}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=K.findOne(kt,this._indicatorsElement);e.classList.remove(Tt),e.removeAttribute("aria-current");const i=K.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(Tt),i.setAttribute("aria-current","true"));}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval;}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),s=t===ut,n=e||w(this._getItems(),i,s,this._config.wrap);if(n===i)return;const o=this._getItemIndex(n),r=e=>j.trigger(this._element,e,{relatedTarget:n,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r(mt).defaultPrevented)return;if(!i||!n)return;const a=Boolean(this._interval);this.pause(),this._isSliding=true,this._setActiveIndicatorElement(o),this._activeElement=n;const l=s?"carousel-item-start":"carousel-item-end",c=s?"carousel-item-next":"carousel-item-prev";n.classList.add(c),g(n),i.classList.add(l),n.classList.add(l),this._queueCallback((()=>{n.classList.remove(l,c),n.classList.add(Tt),i.classList.remove(Tt,c,l),this._isSliding=false,r(pt);}),i,this._isAnimated()),a&&this.cycle();}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return K.findOne(St,this._element)}_getItems(){return K.find($t,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null);}_directionToOrder(t){return p()?t===gt?_t:ut:t===gt?ut:_t}_orderToDirection(t){return p()?t===_t?gt:ft:t===_t?ft:gt}static jQueryInterface(t){return this.each((function(){const e=Dt.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]();}}else e.to(t);}))}}j.on(document,Et,"[data-bs-slide], [data-bs-slide-to]",(function(t){const e=K.getElementFromSelector(this);if(!e||!e.classList.contains(Ct))return;t.preventDefault();const i=Dt.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");return s?(i.to(s),void i._maybeEnableCycle()):"next"===B.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),j.on(window,At,(()=>{const t=K.find('[data-bs-ride="carousel"]');for(const e of t)Dt.getOrCreateInstance(e);})),b(Dt);const Nt=".bs.collapse",Pt=`show${Nt}`,xt=`shown${Nt}`,Mt=`hide${Nt}`,jt=`hidden${Nt}`,Ft=`click${Nt}.data-api`,zt="show",Ht="collapse",Bt="collapsing",qt=`:scope .${Ht} .${Ht}`,Wt='[data-bs-toggle="collapse"]',Rt={parent:null,toggle:true},Kt={parent:"(null|element)",toggle:"boolean"};class Vt extends W{constructor(t,e){super(t,e),this._isTransitioning=false,this._triggerArray=[];const i=K.find(Wt);for(const t of i){const e=K.getSelectorFromElement(t),i=K.find(e).filter((t=>t===this._element));null!==e&&i.length&&this._triggerArray.push(t);}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle();}static get Default(){return Rt}static get DefaultType(){return Kt}static get NAME(){return "collapse"}toggle(){this._isShown()?this.hide():this.show();}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>Vt.getOrCreateInstance(t,{toggle:false})))),t.length&&t[0]._isTransitioning)return;if(j.trigger(this._element,Pt).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(Ht),this._element.classList.add(Bt),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,true),this._isTransitioning=true;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=false,this._element.classList.remove(Bt),this._element.classList.add(Ht,zt),this._element.style[e]="",j.trigger(this._element,xt);}),this._element,true),this._element.style[e]=`${this._element[i]}px`;}hide(){if(this._isTransitioning||!this._isShown())return;if(j.trigger(this._element,Mt).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,g(this._element),this._element.classList.add(Bt),this._element.classList.remove(Ht,zt);for(const t of this._triggerArray){const e=K.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],false);}this._isTransitioning=true,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=false,this._element.classList.remove(Bt),this._element.classList.add(Ht),j.trigger(this._element,jt);}),this._element,true);}_isShown(t=this._element){return t.classList.contains(zt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=c(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(Wt);for(const e of t){const t=K.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t));}}_getFirstLevelChildren(t){const e=K.find(qt,this._config.parent);return K.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e);}static jQueryInterface(t){const e={};return "string"==typeof t&&/show|hide/.test(t)&&(e.toggle=false),this.each((function(){const i=Vt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]();}}))}}j.on(document,Ft,Wt,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of K.getMultipleElementsFromSelector(this))Vt.getOrCreateInstance(t,{toggle:false}).toggle();})),b(Vt);const Qt="dropdown",Xt=".bs.dropdown",Yt=".data-api",Ut="ArrowUp",Gt="ArrowDown",Jt=`hide${Xt}`,Zt=`hidden${Xt}`,te=`show${Xt}`,ee=`shown${Xt}`,ie=`click${Xt}${Yt}`,se=`keydown${Xt}${Yt}`,ne=`keyup${Xt}${Yt}`,oe="show",re='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',ae=`${re}.${oe}`,le=".dropdown-menu",ce=p()?"top-end":"top-start",he=p()?"top-start":"top-end",de=p()?"bottom-end":"bottom-start",ue=p()?"bottom-start":"bottom-end",_e=p()?"left-start":"right-start",ge=p()?"right-start":"left-start",fe={autoClose:true,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},me={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class pe extends W{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=K.next(this._element,le)[0]||K.prev(this._element,le)[0]||K.findOne(le,this._parent),this._inNavbar=this._detectNavbar();}static get Default(){return fe}static get DefaultType(){return me}static get NAME(){return Qt}toggle(){return this._isShown()?this.hide():this.show()}show(){if(d(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!j.trigger(this._element,te,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of [].concat(...document.body.children))j.on(t,"mouseover",_);this._element.focus(),this._element.setAttribute("aria-expanded",true),this._menu.classList.add(oe),this._element.classList.add(oe),j.trigger(this._element,ee,t);}}hide(){if(d(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t);}dispose(){this._popper&&this._popper.destroy(),super.dispose();}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update();}_completeHide(t){if(!j.trigger(this._element,Jt,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of [].concat(...document.body.children))j.off(t,"mouseover",_);this._popper&&this._popper.destroy(),this._menu.classList.remove(oe),this._element.classList.remove(oe),this._element.setAttribute("aria-expanded","false"),B.removeDataAttribute(this._menu,"popper"),j.trigger(this._element,Zt,t);}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!l(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${Qt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===i)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let t=this._element;"parent"===this._config.reference?t=this._parent:l(this._config.reference)?t=c(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=i.createPopper(t,this._menu,e);}_isShown(){return this._menu.classList.contains(oe)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return _e;if(t.classList.contains("dropstart"))return ge;if(t.classList.contains("dropup-center"))return "top";if(t.classList.contains("dropdown-center"))return "bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?he:ce:e?ue:de}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return "string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return (this._inNavbar||"static"===this._config.display)&&(B.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:false}]),{...t,...v(this._config.popperConfig,[void 0,t])}}_selectMenuItem({key:t,target:e}){const i=K.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>h(t)));i.length&&w(i,e,t===Gt,!i.includes(e)).focus();}static jQueryInterface(t){return this.each((function(){const e=pe.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]();}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=K.find(ae);for(const i of e){const e=pe.getInstance(i);if(!e||false===e._config.autoClose)continue;const s=t.composedPath(),n=s.includes(e._menu);if(s.includes(e._element)||"inside"===e._config.autoClose&&!n||"outside"===e._config.autoClose&&n)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o);}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,s=[Ut,Gt].includes(t.key);if(!s&&!i)return;if(e&&!i)return;t.preventDefault();const n=this.matches(re)?this:K.prev(this,re)[0]||K.next(this,re)[0]||K.findOne(re,t.delegateTarget.parentNode),o=pe.getOrCreateInstance(n);if(s)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),n.focus());}}j.on(document,se,re,pe.dataApiKeydownHandler),j.on(document,se,le,pe.dataApiKeydownHandler),j.on(document,ie,pe.clearMenus),j.on(document,ne,pe.clearMenus),j.on(document,ie,re,(function(t){t.preventDefault(),pe.getOrCreateInstance(this).toggle();})),b(pe);const be="backdrop",ve="show",ye=`mousedown.bs.${be}`,we={className:"modal-backdrop",clickCallback:null,isAnimated:false,isVisible:true,rootElement:"body"},Ae={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ee extends q{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=false,this._element=null;}static get Default(){return we}static get DefaultType(){return Ae}static get NAME(){return be}show(t){if(!this._config.isVisible)return void v(t);this._append();const e=this._getElement();this._config.isAnimated&&g(e),e.classList.add(ve),this._emulateAnimation((()=>{v(t);}));}hide(t){this._config.isVisible?(this._getElement().classList.remove(ve),this._emulateAnimation((()=>{this.dispose(),v(t);}))):v(t);}dispose(){this._isAppended&&(j.off(this._element,ye),this._element.remove(),this._isAppended=false);}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t;}return this._element}_configAfterMerge(t){return t.rootElement=c(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),j.on(t,ye,(()=>{v(this._config.clickCallback);})),this._isAppended=true;}_emulateAnimation(t){y(t,this._getElement(),this._config.isAnimated);}}const Ce=".bs.focustrap",Te=`focusin${Ce}`,ke=`keydown.tab${Ce}`,$e="backward",Se={autofocus:true,trapElement:null},Le={autofocus:"boolean",trapElement:"element"};class Oe extends q{constructor(t){super(),this._config=this._getConfig(t),this._isActive=false,this._lastTabNavDirection=null;}static get Default(){return Se}static get DefaultType(){return Le}static get NAME(){return "focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),j.off(document,Ce),j.on(document,Te,(t=>this._handleFocusin(t))),j.on(document,ke,(t=>this._handleKeydown(t))),this._isActive=true);}deactivate(){this._isActive&&(this._isActive=false,j.off(document,Ce));}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=K.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===$e?i[i.length-1].focus():i[0].focus();}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?$e:"forward");}}const Ie=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",De=".sticky-top",Ne="padding-right",Pe="margin-right";class xe{constructor(){this._element=document.body;}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Ne,(e=>e+t)),this._setElementAttributes(Ie,Ne,(e=>e+t)),this._setElementAttributes(De,Pe,(e=>e-t));}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Ne),this._resetElementAttributes(Ie,Ne),this._resetElementAttributes(De,Pe);}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden";}_setElementAttributes(t,e,i){const s=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return;this._saveInitialAttribute(t,e);const n=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(n))}px`);}));}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&B.setDataAttribute(t,e,i);}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=B.getDataAttribute(t,e);null!==i?(B.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e);}));}_applyManipulationCallback(t,e){if(l(t))e(t);else for(const i of K.find(t,this._element))e(i);}}const Me=".bs.modal",je=`hide${Me}`,Fe=`hidePrevented${Me}`,ze=`hidden${Me}`,He=`show${Me}`,Be=`shown${Me}`,qe=`resize${Me}`,We=`click.dismiss${Me}`,Re=`mousedown.dismiss${Me}`,Ke=`keydown.dismiss${Me}`,Ve=`click${Me}.data-api`,Qe="modal-open",Xe="show",Ye="modal-static",Ue={backdrop:true,focus:true,keyboard:true},Ge={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Je extends W{constructor(t,e){super(t,e),this._dialog=K.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=false,this._isTransitioning=false,this._scrollBar=new xe,this._addEventListeners();}static get Default(){return Ue}static get DefaultType(){return Ge}static get NAME(){return "modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||j.trigger(this._element,He,{relatedTarget:t}).defaultPrevented||(this._isShown=true,this._isTransitioning=true,this._scrollBar.hide(),document.body.classList.add(Qe),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))));}hide(){this._isShown&&!this._isTransitioning&&(j.trigger(this._element,je).defaultPrevented||(this._isShown=false,this._isTransitioning=true,this._focustrap.deactivate(),this._element.classList.remove(Xe),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())));}dispose(){j.off(window,Me),j.off(this._dialog,Me),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose();}handleUpdate(){this._adjustDialog();}_initializeBackDrop(){return new Ee({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Oe({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",true),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=K.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),g(this._element),this._element.classList.add(Xe),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=false,j.trigger(this._element,Be,{relatedTarget:t});}),this._dialog,this._isAnimated());}_addEventListeners(){j.on(this._element,Ke,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():this._triggerBackdropTransition());})),j.on(window,qe,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog();})),j.on(this._element,Re,(t=>{j.one(this._element,We,(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition());}));}));}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",true),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=false,this._backdrop.hide((()=>{document.body.classList.remove(Qe),this._resetAdjustments(),this._scrollBar.reset(),j.trigger(this._element,ze);}));}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(j.trigger(this._element,Fe).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(Ye)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(Ye),this._queueCallback((()=>{this._element.classList.remove(Ye),this._queueCallback((()=>{this._element.style.overflowY=e;}),this._dialog);}),this._dialog),this._element.focus());}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=p()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`;}if(!i&&t){const t=p()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`;}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight="";}static jQueryInterface(t,e){return this.each((function(){const i=Je.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e);}}))}}j.on(document,Ve,'[data-bs-toggle="modal"]',(function(t){const e=K.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),j.one(e,He,(t=>{t.defaultPrevented||j.one(e,ze,(()=>{h(this)&&this.focus();}));}));const i=K.findOne(".modal.show");i&&Je.getInstance(i).hide(),Je.getOrCreateInstance(e).toggle(this);})),V(Je),b(Je);const Ze=".bs.offcanvas",ti=".data-api",ei=`load${Ze}${ti}`,ii="show",si="showing",ni="hiding",oi=".offcanvas.show",ri=`show${Ze}`,ai=`shown${Ze}`,li=`hide${Ze}`,ci=`hidePrevented${Ze}`,hi=`hidden${Ze}`,di=`resize${Ze}`,ui=`click${Ze}${ti}`,_i=`keydown.dismiss${Ze}`,gi={backdrop:true,keyboard:true,scroll:false},fi={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class mi extends W{constructor(t,e){super(t,e),this._isShown=false,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners();}static get Default(){return gi}static get DefaultType(){return fi}static get NAME(){return "offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||j.trigger(this._element,ri,{relatedTarget:t}).defaultPrevented||(this._isShown=true,this._backdrop.show(),this._config.scroll||(new xe).hide(),this._element.setAttribute("aria-modal",true),this._element.setAttribute("role","dialog"),this._element.classList.add(si),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(ii),this._element.classList.remove(si),j.trigger(this._element,ai,{relatedTarget:t});}),this._element,true));}hide(){this._isShown&&(j.trigger(this._element,li).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=false,this._element.classList.add(ni),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove(ii,ni),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new xe).reset(),j.trigger(this._element,hi);}),this._element,true)));}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose();}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new Ee({className:"offcanvas-backdrop",isVisible:t,isAnimated:true,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():j.trigger(this._element,ci);}:null})}_initializeFocusTrap(){return new Oe({trapElement:this._element})}_addEventListeners(){j.on(this._element,_i,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():j.trigger(this._element,ci));}));}static jQueryInterface(t){return this.each((function(){const e=mi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this);}}))}}j.on(document,ui,'[data-bs-toggle="offcanvas"]',(function(t){const e=K.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),d(this))return;j.one(e,hi,(()=>{h(this)&&this.focus();}));const i=K.findOne(oi);i&&i!==e&&mi.getInstance(i).hide(),mi.getOrCreateInstance(e).toggle(this);})),j.on(window,ei,(()=>{for(const t of K.find(oi))mi.getOrCreateInstance(t).show();})),j.on(window,di,(()=>{for(const t of K.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&mi.getOrCreateInstance(t).hide();})),V(mi),b(mi);const pi={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},bi=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),vi=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,yi=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!bi.has(i)||Boolean(vi.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},wi={allowList:pi,content:{},extraClass:"",html:false,sanitize:true,sanitizeFn:null,template:"<div></div>"},Ai={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Ei={entry:"(string|element|function|null)",selector:"(string|element)"};class Ci extends q{constructor(t){super(),this._config=this._getConfig(t);}static get Default(){return wi}static get DefaultType(){return Ai}static get NAME(){return "TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content);}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Ei);}_setContent(t,e,i){const s=K.findOne(i,t);s&&((e=this._resolvePossibleFunction(e))?l(e)?this._putElementInTemplate(c(e),s):this._config.html?s.innerHTML=this._maybeSanitize(e):s.textContent=e:s.remove());}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const s=(new window.DOMParser).parseFromString(t,"text/html"),n=[].concat(...s.body.querySelectorAll("*"));for(const t of n){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const s=[].concat(...t.attributes),n=[].concat(e["*"]||[],e[i]||[]);for(const e of s)yi(e,n)||t.removeAttribute(e.nodeName);}return s.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return v(t,[void 0,this])}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent;}}const Ti=new Set(["sanitize","allowList","sanitizeFn"]),ki="fade",$i="show",Si=".tooltip-inner",Li=".modal",Oi="hide.bs.modal",Ii="hover",Di="focus",Ni={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},Pi={allowList:pi,animation:true,boundary:"clippingParents",container:false,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:false,offset:[0,6],placement:"top",popperConfig:null,sanitize:true,sanitizeFn:null,selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},xi={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Mi extends W{constructor(t,e){if(void 0===i)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(t,e),this._isEnabled=true,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle();}static get Default(){return Pi}static get DefaultType(){return xi}static get NAME(){return "tooltip"}enable(){this._isEnabled=true;}disable(){this._isEnabled=false;}toggleEnabled(){this._isEnabled=!this._isEnabled;}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter());}dispose(){clearTimeout(this._timeout),j.off(this._element.closest(Li),Oi,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose();}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=j.trigger(this._element,this.constructor.eventName("show")),e=(u(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),j.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add($i),"ontouchstart"in document.documentElement)for(const t of [].concat(...document.body.children))j.on(t,"mouseover",_);this._queueCallback((()=>{j.trigger(this._element,this.constructor.eventName("shown")),false===this._isHovered&&this._leave(),this._isHovered=false;}),this.tip,this._isAnimated());}hide(){if(this._isShown()&&!j.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove($i),"ontouchstart"in document.documentElement)for(const t of [].concat(...document.body.children))j.off(t,"mouseover",_);this._activeTrigger.click=false,this._activeTrigger[Di]=false,this._activeTrigger[Ii]=false,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),j.trigger(this._element,this.constructor.eventName("hidden")));}),this.tip,this._isAnimated());}}update(){this._popper&&this._popper.update();}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(ki,$i),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random());}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(ki),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show());}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new Ci({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return {[Si]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ki)}_isShown(){return this.tip&&this.tip.classList.contains($i)}_createPopper(t){const e=v(this._config.placement,[this,t,this._element]),s=Ni[e.toUpperCase()];return i.createPopper(this._element,t,this._getPopperConfig(s))}_getOffset(){const{offset:t}=this._config;return "string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return v(t,[this._element,this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:true,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement);}}]};return {...e,...v(this._config.popperConfig,[void 0,e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)j.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>{this._initializeOnDelegatedTarget(t).toggle();}));else if("manual"!==e){const t=e===Ii?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===Ii?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");j.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?Di:Ii]=true,e._enter();})),j.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?Di:Ii]=e._element.contains(t.relatedTarget),e._leave();}));}this._hideModalHandler=()=>{this._element&&this.hide();},j.on(this._element.closest(Li),Oi,this._hideModalHandler);}_fixTitle(){const t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"));}_enter(){this._isShown()||this._isHovered?this._isHovered=true:(this._isHovered=true,this._setTimeout((()=>{this._isHovered&&this.show();}),this._config.delay.show));}_leave(){this._isWithActiveTrigger()||(this._isHovered=false,this._setTimeout((()=>{this._isHovered||this.hide();}),this._config.delay.hide));}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e);}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(true)}_getConfig(t){const e=B.getDataAttributes(this._element);for(const t of Object.keys(e))Ti.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=false===t.container?document.body:c(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=false,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null);}static jQueryInterface(t){return this.each((function(){const e=Mi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]();}}))}}b(Mi);const ji=".popover-header",Fi=".popover-body",zi={...Mi.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Hi={...Mi.DefaultType,content:"(null|string|element|function)"};class Bi extends Mi{static get Default(){return zi}static get DefaultType(){return Hi}static get NAME(){return "popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return {[ji]:this._getTitle(),[Fi]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=Bi.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]();}}))}}b(Bi);const qi=".bs.scrollspy",Wi=`activate${qi}`,Ri=`click${qi}`,Ki=`load${qi}.data-api`,Vi="active",Qi="[href]",Xi=".nav-link",Yi=`${Xi}, .nav-item > ${Xi}, .list-group-item`,Ui={offset:null,rootMargin:"0px 0px -25%",smoothScroll:false,target:null,threshold:[.1,.5,1]},Gi={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Ji extends W{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh();}static get Default(){return Ui}static get DefaultType(){return Gi}static get NAME(){return "scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t);}dispose(){this._observer.disconnect(),super.dispose();}_configAfterMerge(t){return t.target=c(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(j.off(this._config.target,Ri),j.on(this._config.target,Ri,Qi,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,s=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:s,behavior:"smooth"});i.scrollTop=s;}})));}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t));},s=(this._rootElement||document.documentElement).scrollTop,n=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(n&&t){if(i(o),!s)return}else n||t||i(o);}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=K.find(Qi,this._config.target);for(const e of t){if(!e.hash||d(e))continue;const t=K.findOne(decodeURI(e.hash),this._element);h(t)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,t));}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(Vi),this._activateParents(t),j.trigger(this._element,Wi,{relatedTarget:t}));}_activateParents(t){if(t.classList.contains("dropdown-item"))K.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(Vi);else for(const e of K.parents(t,".nav, .list-group"))for(const t of K.prev(e,Yi))t.classList.add(Vi);}_clearActiveClass(t){t.classList.remove(Vi);const e=K.find(`${Qi}.${Vi}`,t);for(const t of e)t.classList.remove(Vi);}static jQueryInterface(t){return this.each((function(){const e=Ji.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]();}}))}}j.on(window,Ki,(()=>{for(const t of K.find('[data-bs-spy="scroll"]'))Ji.getOrCreateInstance(t);})),b(Ji);const Zi=".bs.tab",ts=`hide${Zi}`,es=`hidden${Zi}`,is=`show${Zi}`,ss=`shown${Zi}`,ns=`click${Zi}`,os=`keydown${Zi}`,rs=`load${Zi}`,as="ArrowLeft",ls="ArrowRight",cs="ArrowUp",hs="ArrowDown",ds="Home",us="End",_s="active",gs="fade",fs="show",ms=".dropdown-toggle",ps=`:not(${ms})`,bs='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',vs=`.nav-link${ps}, .list-group-item${ps}, [role="tab"]${ps}, ${bs}`,ys=`.${_s}[data-bs-toggle="tab"], .${_s}[data-bs-toggle="pill"], .${_s}[data-bs-toggle="list"]`;class ws extends W{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),j.on(this._element,os,(t=>this._keydown(t))));}static get NAME(){return "tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?j.trigger(e,ts,{relatedTarget:t}):null;j.trigger(t,is,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e));}_activate(t,e){t&&(t.classList.add(_s),this._activate(K.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",true),this._toggleDropDown(t,true),j.trigger(t,ss,{relatedTarget:e})):t.classList.add(fs);}),t,t.classList.contains(gs)));}_deactivate(t,e){t&&(t.classList.remove(_s),t.blur(),this._deactivate(K.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",false),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,false),j.trigger(t,es,{relatedTarget:e})):t.classList.remove(fs);}),t,t.classList.contains(gs)));}_keydown(t){if(![as,ls,cs,hs,ds,us].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter((t=>!d(t)));let i;if([ds,us].includes(t.key))i=e[t.key===ds?0:e.length-1];else {const s=[ls,hs].includes(t.key);i=w(e,t.target,s,true);}i&&(i.focus({preventScroll:true}),ws.getOrCreateInstance(i).show());}_getChildren(){return K.find(vs,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t);}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t);}_setInitialAttributesOnTargetPanel(t){const e=K.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`));}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const s=(t,s)=>{const n=K.findOne(t,i);n&&n.classList.toggle(s,e);};s(ms,_s),s(".dropdown-menu",fs),i.setAttribute("aria-expanded",e);}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i);}_elemIsActive(t){return t.classList.contains(_s)}_getInnerElement(t){return t.matches(vs)?t:K.findOne(vs,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=ws.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]();}}))}}j.on(document,ns,bs,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),d(this)||ws.getOrCreateInstance(this).show();})),j.on(window,rs,(()=>{for(const t of K.find(ys))ws.getOrCreateInstance(t);})),b(ws);const As=".bs.toast",Es=`mouseover${As}`,Cs=`mouseout${As}`,Ts=`focusin${As}`,ks=`focusout${As}`,$s=`hide${As}`,Ss=`hidden${As}`,Ls=`show${As}`,Os=`shown${As}`,Is="hide",Ds="show",Ns="showing",Ps={animation:"boolean",autohide:"boolean",delay:"number"},xs={animation:true,autohide:true,delay:5e3};class Ms extends W{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=false,this._hasKeyboardInteraction=false,this._setListeners();}static get Default(){return xs}static get DefaultType(){return Ps}static get NAME(){return "toast"}show(){j.trigger(this._element,Ls).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Is),g(this._element),this._element.classList.add(Ds,Ns),this._queueCallback((()=>{this._element.classList.remove(Ns),j.trigger(this._element,Os),this._maybeScheduleHide();}),this._element,this._config.animation));}hide(){this.isShown()&&(j.trigger(this._element,$s).defaultPrevented||(this._element.classList.add(Ns),this._queueCallback((()=>{this._element.classList.add(Is),this._element.classList.remove(Ns,Ds),j.trigger(this._element,Ss);}),this._element,this._config.animation)));}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ds),super.dispose();}isShown(){return this._element.classList.contains(Ds)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide();}),this._config.delay)));}_onInteraction(t,e){switch(t.type){case "mouseover":case "mouseout":this._hasMouseInteraction=e;break;case "focusin":case "focusout":this._hasKeyboardInteraction=e;}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide();}_setListeners(){j.on(this._element,Es,(t=>this._onInteraction(t,true))),j.on(this._element,Cs,(t=>this._onInteraction(t,false))),j.on(this._element,Ts,(t=>this._onInteraction(t,true))),j.on(this._element,ks,(t=>this._onInteraction(t,false)));}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null;}static jQueryInterface(t){return this.each((function(){const e=Ms.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this);}}))}}return V(Ms),b(Ms),{Alert:U,Button:J,Carousel:Dt,Collapse:Vt,Dropdown:pe,Modal:Je,Offcanvas:mi,Popover:Bi,ScrollSpy:Ji,Tab:ws,Toast:Ms,Tooltip:Mi}}));
		
	} (bootstrap_min$1));
	return bootstrap_min$1.exports;
}

requireBootstrap_min();

var css_248z$2 = "/*!\n * Bootstrap Icons v1.11.3 (https://icons.getbootstrap.com/)\n * Copyright 2019-2024 The Bootstrap Authors\n * Licensed under MIT (https://github.com/twbs/icons/blob/main/LICENSE)\n */\n\n@font-face {\n  font-display: block;\n  font-family: \"bootstrap-icons\";\n  src: url(\"./fonts/bootstrap-icons.woff2?dd67030699838ea613ee6dbda90effa6\") format(\"woff2\"),\nurl(\"./fonts/bootstrap-icons.woff?dd67030699838ea613ee6dbda90effa6\") format(\"woff\");\n}\n\n.bi::before,\n[class^=\"bi-\"]::before,\n[class*=\" bi-\"]::before {\n  display: inline-block;\n  font-family: bootstrap-icons !important;\n  font-style: normal;\n  font-weight: normal !important;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  vertical-align: -.125em;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.bi-123::before { content: \"\\f67f\"; }\n\n.bi-alarm-fill::before { content: \"\\f101\"; }\n\n.bi-alarm::before { content: \"\\f102\"; }\n\n.bi-align-bottom::before { content: \"\\f103\"; }\n\n.bi-align-center::before { content: \"\\f104\"; }\n\n.bi-align-end::before { content: \"\\f105\"; }\n\n.bi-align-middle::before { content: \"\\f106\"; }\n\n.bi-align-start::before { content: \"\\f107\"; }\n\n.bi-align-top::before { content: \"\\f108\"; }\n\n.bi-alt::before { content: \"\\f109\"; }\n\n.bi-app-indicator::before { content: \"\\f10a\"; }\n\n.bi-app::before { content: \"\\f10b\"; }\n\n.bi-archive-fill::before { content: \"\\f10c\"; }\n\n.bi-archive::before { content: \"\\f10d\"; }\n\n.bi-arrow-90deg-down::before { content: \"\\f10e\"; }\n\n.bi-arrow-90deg-left::before { content: \"\\f10f\"; }\n\n.bi-arrow-90deg-right::before { content: \"\\f110\"; }\n\n.bi-arrow-90deg-up::before { content: \"\\f111\"; }\n\n.bi-arrow-bar-down::before { content: \"\\f112\"; }\n\n.bi-arrow-bar-left::before { content: \"\\f113\"; }\n\n.bi-arrow-bar-right::before { content: \"\\f114\"; }\n\n.bi-arrow-bar-up::before { content: \"\\f115\"; }\n\n.bi-arrow-clockwise::before { content: \"\\f116\"; }\n\n.bi-arrow-counterclockwise::before { content: \"\\f117\"; }\n\n.bi-arrow-down-circle-fill::before { content: \"\\f118\"; }\n\n.bi-arrow-down-circle::before { content: \"\\f119\"; }\n\n.bi-arrow-down-left-circle-fill::before { content: \"\\f11a\"; }\n\n.bi-arrow-down-left-circle::before { content: \"\\f11b\"; }\n\n.bi-arrow-down-left-square-fill::before { content: \"\\f11c\"; }\n\n.bi-arrow-down-left-square::before { content: \"\\f11d\"; }\n\n.bi-arrow-down-left::before { content: \"\\f11e\"; }\n\n.bi-arrow-down-right-circle-fill::before { content: \"\\f11f\"; }\n\n.bi-arrow-down-right-circle::before { content: \"\\f120\"; }\n\n.bi-arrow-down-right-square-fill::before { content: \"\\f121\"; }\n\n.bi-arrow-down-right-square::before { content: \"\\f122\"; }\n\n.bi-arrow-down-right::before { content: \"\\f123\"; }\n\n.bi-arrow-down-short::before { content: \"\\f124\"; }\n\n.bi-arrow-down-square-fill::before { content: \"\\f125\"; }\n\n.bi-arrow-down-square::before { content: \"\\f126\"; }\n\n.bi-arrow-down-up::before { content: \"\\f127\"; }\n\n.bi-arrow-down::before { content: \"\\f128\"; }\n\n.bi-arrow-left-circle-fill::before { content: \"\\f129\"; }\n\n.bi-arrow-left-circle::before { content: \"\\f12a\"; }\n\n.bi-arrow-left-right::before { content: \"\\f12b\"; }\n\n.bi-arrow-left-short::before { content: \"\\f12c\"; }\n\n.bi-arrow-left-square-fill::before { content: \"\\f12d\"; }\n\n.bi-arrow-left-square::before { content: \"\\f12e\"; }\n\n.bi-arrow-left::before { content: \"\\f12f\"; }\n\n.bi-arrow-repeat::before { content: \"\\f130\"; }\n\n.bi-arrow-return-left::before { content: \"\\f131\"; }\n\n.bi-arrow-return-right::before { content: \"\\f132\"; }\n\n.bi-arrow-right-circle-fill::before { content: \"\\f133\"; }\n\n.bi-arrow-right-circle::before { content: \"\\f134\"; }\n\n.bi-arrow-right-short::before { content: \"\\f135\"; }\n\n.bi-arrow-right-square-fill::before { content: \"\\f136\"; }\n\n.bi-arrow-right-square::before { content: \"\\f137\"; }\n\n.bi-arrow-right::before { content: \"\\f138\"; }\n\n.bi-arrow-up-circle-fill::before { content: \"\\f139\"; }\n\n.bi-arrow-up-circle::before { content: \"\\f13a\"; }\n\n.bi-arrow-up-left-circle-fill::before { content: \"\\f13b\"; }\n\n.bi-arrow-up-left-circle::before { content: \"\\f13c\"; }\n\n.bi-arrow-up-left-square-fill::before { content: \"\\f13d\"; }\n\n.bi-arrow-up-left-square::before { content: \"\\f13e\"; }\n\n.bi-arrow-up-left::before { content: \"\\f13f\"; }\n\n.bi-arrow-up-right-circle-fill::before { content: \"\\f140\"; }\n\n.bi-arrow-up-right-circle::before { content: \"\\f141\"; }\n\n.bi-arrow-up-right-square-fill::before { content: \"\\f142\"; }\n\n.bi-arrow-up-right-square::before { content: \"\\f143\"; }\n\n.bi-arrow-up-right::before { content: \"\\f144\"; }\n\n.bi-arrow-up-short::before { content: \"\\f145\"; }\n\n.bi-arrow-up-square-fill::before { content: \"\\f146\"; }\n\n.bi-arrow-up-square::before { content: \"\\f147\"; }\n\n.bi-arrow-up::before { content: \"\\f148\"; }\n\n.bi-arrows-angle-contract::before { content: \"\\f149\"; }\n\n.bi-arrows-angle-expand::before { content: \"\\f14a\"; }\n\n.bi-arrows-collapse::before { content: \"\\f14b\"; }\n\n.bi-arrows-expand::before { content: \"\\f14c\"; }\n\n.bi-arrows-fullscreen::before { content: \"\\f14d\"; }\n\n.bi-arrows-move::before { content: \"\\f14e\"; }\n\n.bi-aspect-ratio-fill::before { content: \"\\f14f\"; }\n\n.bi-aspect-ratio::before { content: \"\\f150\"; }\n\n.bi-asterisk::before { content: \"\\f151\"; }\n\n.bi-at::before { content: \"\\f152\"; }\n\n.bi-award-fill::before { content: \"\\f153\"; }\n\n.bi-award::before { content: \"\\f154\"; }\n\n.bi-back::before { content: \"\\f155\"; }\n\n.bi-backspace-fill::before { content: \"\\f156\"; }\n\n.bi-backspace-reverse-fill::before { content: \"\\f157\"; }\n\n.bi-backspace-reverse::before { content: \"\\f158\"; }\n\n.bi-backspace::before { content: \"\\f159\"; }\n\n.bi-badge-3d-fill::before { content: \"\\f15a\"; }\n\n.bi-badge-3d::before { content: \"\\f15b\"; }\n\n.bi-badge-4k-fill::before { content: \"\\f15c\"; }\n\n.bi-badge-4k::before { content: \"\\f15d\"; }\n\n.bi-badge-8k-fill::before { content: \"\\f15e\"; }\n\n.bi-badge-8k::before { content: \"\\f15f\"; }\n\n.bi-badge-ad-fill::before { content: \"\\f160\"; }\n\n.bi-badge-ad::before { content: \"\\f161\"; }\n\n.bi-badge-ar-fill::before { content: \"\\f162\"; }\n\n.bi-badge-ar::before { content: \"\\f163\"; }\n\n.bi-badge-cc-fill::before { content: \"\\f164\"; }\n\n.bi-badge-cc::before { content: \"\\f165\"; }\n\n.bi-badge-hd-fill::before { content: \"\\f166\"; }\n\n.bi-badge-hd::before { content: \"\\f167\"; }\n\n.bi-badge-tm-fill::before { content: \"\\f168\"; }\n\n.bi-badge-tm::before { content: \"\\f169\"; }\n\n.bi-badge-vo-fill::before { content: \"\\f16a\"; }\n\n.bi-badge-vo::before { content: \"\\f16b\"; }\n\n.bi-badge-vr-fill::before { content: \"\\f16c\"; }\n\n.bi-badge-vr::before { content: \"\\f16d\"; }\n\n.bi-badge-wc-fill::before { content: \"\\f16e\"; }\n\n.bi-badge-wc::before { content: \"\\f16f\"; }\n\n.bi-bag-check-fill::before { content: \"\\f170\"; }\n\n.bi-bag-check::before { content: \"\\f171\"; }\n\n.bi-bag-dash-fill::before { content: \"\\f172\"; }\n\n.bi-bag-dash::before { content: \"\\f173\"; }\n\n.bi-bag-fill::before { content: \"\\f174\"; }\n\n.bi-bag-plus-fill::before { content: \"\\f175\"; }\n\n.bi-bag-plus::before { content: \"\\f176\"; }\n\n.bi-bag-x-fill::before { content: \"\\f177\"; }\n\n.bi-bag-x::before { content: \"\\f178\"; }\n\n.bi-bag::before { content: \"\\f179\"; }\n\n.bi-bar-chart-fill::before { content: \"\\f17a\"; }\n\n.bi-bar-chart-line-fill::before { content: \"\\f17b\"; }\n\n.bi-bar-chart-line::before { content: \"\\f17c\"; }\n\n.bi-bar-chart-steps::before { content: \"\\f17d\"; }\n\n.bi-bar-chart::before { content: \"\\f17e\"; }\n\n.bi-basket-fill::before { content: \"\\f17f\"; }\n\n.bi-basket::before { content: \"\\f180\"; }\n\n.bi-basket2-fill::before { content: \"\\f181\"; }\n\n.bi-basket2::before { content: \"\\f182\"; }\n\n.bi-basket3-fill::before { content: \"\\f183\"; }\n\n.bi-basket3::before { content: \"\\f184\"; }\n\n.bi-battery-charging::before { content: \"\\f185\"; }\n\n.bi-battery-full::before { content: \"\\f186\"; }\n\n.bi-battery-half::before { content: \"\\f187\"; }\n\n.bi-battery::before { content: \"\\f188\"; }\n\n.bi-bell-fill::before { content: \"\\f189\"; }\n\n.bi-bell::before { content: \"\\f18a\"; }\n\n.bi-bezier::before { content: \"\\f18b\"; }\n\n.bi-bezier2::before { content: \"\\f18c\"; }\n\n.bi-bicycle::before { content: \"\\f18d\"; }\n\n.bi-binoculars-fill::before { content: \"\\f18e\"; }\n\n.bi-binoculars::before { content: \"\\f18f\"; }\n\n.bi-blockquote-left::before { content: \"\\f190\"; }\n\n.bi-blockquote-right::before { content: \"\\f191\"; }\n\n.bi-book-fill::before { content: \"\\f192\"; }\n\n.bi-book-half::before { content: \"\\f193\"; }\n\n.bi-book::before { content: \"\\f194\"; }\n\n.bi-bookmark-check-fill::before { content: \"\\f195\"; }\n\n.bi-bookmark-check::before { content: \"\\f196\"; }\n\n.bi-bookmark-dash-fill::before { content: \"\\f197\"; }\n\n.bi-bookmark-dash::before { content: \"\\f198\"; }\n\n.bi-bookmark-fill::before { content: \"\\f199\"; }\n\n.bi-bookmark-heart-fill::before { content: \"\\f19a\"; }\n\n.bi-bookmark-heart::before { content: \"\\f19b\"; }\n\n.bi-bookmark-plus-fill::before { content: \"\\f19c\"; }\n\n.bi-bookmark-plus::before { content: \"\\f19d\"; }\n\n.bi-bookmark-star-fill::before { content: \"\\f19e\"; }\n\n.bi-bookmark-star::before { content: \"\\f19f\"; }\n\n.bi-bookmark-x-fill::before { content: \"\\f1a0\"; }\n\n.bi-bookmark-x::before { content: \"\\f1a1\"; }\n\n.bi-bookmark::before { content: \"\\f1a2\"; }\n\n.bi-bookmarks-fill::before { content: \"\\f1a3\"; }\n\n.bi-bookmarks::before { content: \"\\f1a4\"; }\n\n.bi-bookshelf::before { content: \"\\f1a5\"; }\n\n.bi-bootstrap-fill::before { content: \"\\f1a6\"; }\n\n.bi-bootstrap-reboot::before { content: \"\\f1a7\"; }\n\n.bi-bootstrap::before { content: \"\\f1a8\"; }\n\n.bi-border-all::before { content: \"\\f1a9\"; }\n\n.bi-border-bottom::before { content: \"\\f1aa\"; }\n\n.bi-border-center::before { content: \"\\f1ab\"; }\n\n.bi-border-inner::before { content: \"\\f1ac\"; }\n\n.bi-border-left::before { content: \"\\f1ad\"; }\n\n.bi-border-middle::before { content: \"\\f1ae\"; }\n\n.bi-border-outer::before { content: \"\\f1af\"; }\n\n.bi-border-right::before { content: \"\\f1b0\"; }\n\n.bi-border-style::before { content: \"\\f1b1\"; }\n\n.bi-border-top::before { content: \"\\f1b2\"; }\n\n.bi-border-width::before { content: \"\\f1b3\"; }\n\n.bi-border::before { content: \"\\f1b4\"; }\n\n.bi-bounding-box-circles::before { content: \"\\f1b5\"; }\n\n.bi-bounding-box::before { content: \"\\f1b6\"; }\n\n.bi-box-arrow-down-left::before { content: \"\\f1b7\"; }\n\n.bi-box-arrow-down-right::before { content: \"\\f1b8\"; }\n\n.bi-box-arrow-down::before { content: \"\\f1b9\"; }\n\n.bi-box-arrow-in-down-left::before { content: \"\\f1ba\"; }\n\n.bi-box-arrow-in-down-right::before { content: \"\\f1bb\"; }\n\n.bi-box-arrow-in-down::before { content: \"\\f1bc\"; }\n\n.bi-box-arrow-in-left::before { content: \"\\f1bd\"; }\n\n.bi-box-arrow-in-right::before { content: \"\\f1be\"; }\n\n.bi-box-arrow-in-up-left::before { content: \"\\f1bf\"; }\n\n.bi-box-arrow-in-up-right::before { content: \"\\f1c0\"; }\n\n.bi-box-arrow-in-up::before { content: \"\\f1c1\"; }\n\n.bi-box-arrow-left::before { content: \"\\f1c2\"; }\n\n.bi-box-arrow-right::before { content: \"\\f1c3\"; }\n\n.bi-box-arrow-up-left::before { content: \"\\f1c4\"; }\n\n.bi-box-arrow-up-right::before { content: \"\\f1c5\"; }\n\n.bi-box-arrow-up::before { content: \"\\f1c6\"; }\n\n.bi-box-seam::before { content: \"\\f1c7\"; }\n\n.bi-box::before { content: \"\\f1c8\"; }\n\n.bi-braces::before { content: \"\\f1c9\"; }\n\n.bi-bricks::before { content: \"\\f1ca\"; }\n\n.bi-briefcase-fill::before { content: \"\\f1cb\"; }\n\n.bi-briefcase::before { content: \"\\f1cc\"; }\n\n.bi-brightness-alt-high-fill::before { content: \"\\f1cd\"; }\n\n.bi-brightness-alt-high::before { content: \"\\f1ce\"; }\n\n.bi-brightness-alt-low-fill::before { content: \"\\f1cf\"; }\n\n.bi-brightness-alt-low::before { content: \"\\f1d0\"; }\n\n.bi-brightness-high-fill::before { content: \"\\f1d1\"; }\n\n.bi-brightness-high::before { content: \"\\f1d2\"; }\n\n.bi-brightness-low-fill::before { content: \"\\f1d3\"; }\n\n.bi-brightness-low::before { content: \"\\f1d4\"; }\n\n.bi-broadcast-pin::before { content: \"\\f1d5\"; }\n\n.bi-broadcast::before { content: \"\\f1d6\"; }\n\n.bi-brush-fill::before { content: \"\\f1d7\"; }\n\n.bi-brush::before { content: \"\\f1d8\"; }\n\n.bi-bucket-fill::before { content: \"\\f1d9\"; }\n\n.bi-bucket::before { content: \"\\f1da\"; }\n\n.bi-bug-fill::before { content: \"\\f1db\"; }\n\n.bi-bug::before { content: \"\\f1dc\"; }\n\n.bi-building::before { content: \"\\f1dd\"; }\n\n.bi-bullseye::before { content: \"\\f1de\"; }\n\n.bi-calculator-fill::before { content: \"\\f1df\"; }\n\n.bi-calculator::before { content: \"\\f1e0\"; }\n\n.bi-calendar-check-fill::before { content: \"\\f1e1\"; }\n\n.bi-calendar-check::before { content: \"\\f1e2\"; }\n\n.bi-calendar-date-fill::before { content: \"\\f1e3\"; }\n\n.bi-calendar-date::before { content: \"\\f1e4\"; }\n\n.bi-calendar-day-fill::before { content: \"\\f1e5\"; }\n\n.bi-calendar-day::before { content: \"\\f1e6\"; }\n\n.bi-calendar-event-fill::before { content: \"\\f1e7\"; }\n\n.bi-calendar-event::before { content: \"\\f1e8\"; }\n\n.bi-calendar-fill::before { content: \"\\f1e9\"; }\n\n.bi-calendar-minus-fill::before { content: \"\\f1ea\"; }\n\n.bi-calendar-minus::before { content: \"\\f1eb\"; }\n\n.bi-calendar-month-fill::before { content: \"\\f1ec\"; }\n\n.bi-calendar-month::before { content: \"\\f1ed\"; }\n\n.bi-calendar-plus-fill::before { content: \"\\f1ee\"; }\n\n.bi-calendar-plus::before { content: \"\\f1ef\"; }\n\n.bi-calendar-range-fill::before { content: \"\\f1f0\"; }\n\n.bi-calendar-range::before { content: \"\\f1f1\"; }\n\n.bi-calendar-week-fill::before { content: \"\\f1f2\"; }\n\n.bi-calendar-week::before { content: \"\\f1f3\"; }\n\n.bi-calendar-x-fill::before { content: \"\\f1f4\"; }\n\n.bi-calendar-x::before { content: \"\\f1f5\"; }\n\n.bi-calendar::before { content: \"\\f1f6\"; }\n\n.bi-calendar2-check-fill::before { content: \"\\f1f7\"; }\n\n.bi-calendar2-check::before { content: \"\\f1f8\"; }\n\n.bi-calendar2-date-fill::before { content: \"\\f1f9\"; }\n\n.bi-calendar2-date::before { content: \"\\f1fa\"; }\n\n.bi-calendar2-day-fill::before { content: \"\\f1fb\"; }\n\n.bi-calendar2-day::before { content: \"\\f1fc\"; }\n\n.bi-calendar2-event-fill::before { content: \"\\f1fd\"; }\n\n.bi-calendar2-event::before { content: \"\\f1fe\"; }\n\n.bi-calendar2-fill::before { content: \"\\f1ff\"; }\n\n.bi-calendar2-minus-fill::before { content: \"\\f200\"; }\n\n.bi-calendar2-minus::before { content: \"\\f201\"; }\n\n.bi-calendar2-month-fill::before { content: \"\\f202\"; }\n\n.bi-calendar2-month::before { content: \"\\f203\"; }\n\n.bi-calendar2-plus-fill::before { content: \"\\f204\"; }\n\n.bi-calendar2-plus::before { content: \"\\f205\"; }\n\n.bi-calendar2-range-fill::before { content: \"\\f206\"; }\n\n.bi-calendar2-range::before { content: \"\\f207\"; }\n\n.bi-calendar2-week-fill::before { content: \"\\f208\"; }\n\n.bi-calendar2-week::before { content: \"\\f209\"; }\n\n.bi-calendar2-x-fill::before { content: \"\\f20a\"; }\n\n.bi-calendar2-x::before { content: \"\\f20b\"; }\n\n.bi-calendar2::before { content: \"\\f20c\"; }\n\n.bi-calendar3-event-fill::before { content: \"\\f20d\"; }\n\n.bi-calendar3-event::before { content: \"\\f20e\"; }\n\n.bi-calendar3-fill::before { content: \"\\f20f\"; }\n\n.bi-calendar3-range-fill::before { content: \"\\f210\"; }\n\n.bi-calendar3-range::before { content: \"\\f211\"; }\n\n.bi-calendar3-week-fill::before { content: \"\\f212\"; }\n\n.bi-calendar3-week::before { content: \"\\f213\"; }\n\n.bi-calendar3::before { content: \"\\f214\"; }\n\n.bi-calendar4-event::before { content: \"\\f215\"; }\n\n.bi-calendar4-range::before { content: \"\\f216\"; }\n\n.bi-calendar4-week::before { content: \"\\f217\"; }\n\n.bi-calendar4::before { content: \"\\f218\"; }\n\n.bi-camera-fill::before { content: \"\\f219\"; }\n\n.bi-camera-reels-fill::before { content: \"\\f21a\"; }\n\n.bi-camera-reels::before { content: \"\\f21b\"; }\n\n.bi-camera-video-fill::before { content: \"\\f21c\"; }\n\n.bi-camera-video-off-fill::before { content: \"\\f21d\"; }\n\n.bi-camera-video-off::before { content: \"\\f21e\"; }\n\n.bi-camera-video::before { content: \"\\f21f\"; }\n\n.bi-camera::before { content: \"\\f220\"; }\n\n.bi-camera2::before { content: \"\\f221\"; }\n\n.bi-capslock-fill::before { content: \"\\f222\"; }\n\n.bi-capslock::before { content: \"\\f223\"; }\n\n.bi-card-checklist::before { content: \"\\f224\"; }\n\n.bi-card-heading::before { content: \"\\f225\"; }\n\n.bi-card-image::before { content: \"\\f226\"; }\n\n.bi-card-list::before { content: \"\\f227\"; }\n\n.bi-card-text::before { content: \"\\f228\"; }\n\n.bi-caret-down-fill::before { content: \"\\f229\"; }\n\n.bi-caret-down-square-fill::before { content: \"\\f22a\"; }\n\n.bi-caret-down-square::before { content: \"\\f22b\"; }\n\n.bi-caret-down::before { content: \"\\f22c\"; }\n\n.bi-caret-left-fill::before { content: \"\\f22d\"; }\n\n.bi-caret-left-square-fill::before { content: \"\\f22e\"; }\n\n.bi-caret-left-square::before { content: \"\\f22f\"; }\n\n.bi-caret-left::before { content: \"\\f230\"; }\n\n.bi-caret-right-fill::before { content: \"\\f231\"; }\n\n.bi-caret-right-square-fill::before { content: \"\\f232\"; }\n\n.bi-caret-right-square::before { content: \"\\f233\"; }\n\n.bi-caret-right::before { content: \"\\f234\"; }\n\n.bi-caret-up-fill::before { content: \"\\f235\"; }\n\n.bi-caret-up-square-fill::before { content: \"\\f236\"; }\n\n.bi-caret-up-square::before { content: \"\\f237\"; }\n\n.bi-caret-up::before { content: \"\\f238\"; }\n\n.bi-cart-check-fill::before { content: \"\\f239\"; }\n\n.bi-cart-check::before { content: \"\\f23a\"; }\n\n.bi-cart-dash-fill::before { content: \"\\f23b\"; }\n\n.bi-cart-dash::before { content: \"\\f23c\"; }\n\n.bi-cart-fill::before { content: \"\\f23d\"; }\n\n.bi-cart-plus-fill::before { content: \"\\f23e\"; }\n\n.bi-cart-plus::before { content: \"\\f23f\"; }\n\n.bi-cart-x-fill::before { content: \"\\f240\"; }\n\n.bi-cart-x::before { content: \"\\f241\"; }\n\n.bi-cart::before { content: \"\\f242\"; }\n\n.bi-cart2::before { content: \"\\f243\"; }\n\n.bi-cart3::before { content: \"\\f244\"; }\n\n.bi-cart4::before { content: \"\\f245\"; }\n\n.bi-cash-stack::before { content: \"\\f246\"; }\n\n.bi-cash::before { content: \"\\f247\"; }\n\n.bi-cast::before { content: \"\\f248\"; }\n\n.bi-chat-dots-fill::before { content: \"\\f249\"; }\n\n.bi-chat-dots::before { content: \"\\f24a\"; }\n\n.bi-chat-fill::before { content: \"\\f24b\"; }\n\n.bi-chat-left-dots-fill::before { content: \"\\f24c\"; }\n\n.bi-chat-left-dots::before { content: \"\\f24d\"; }\n\n.bi-chat-left-fill::before { content: \"\\f24e\"; }\n\n.bi-chat-left-quote-fill::before { content: \"\\f24f\"; }\n\n.bi-chat-left-quote::before { content: \"\\f250\"; }\n\n.bi-chat-left-text-fill::before { content: \"\\f251\"; }\n\n.bi-chat-left-text::before { content: \"\\f252\"; }\n\n.bi-chat-left::before { content: \"\\f253\"; }\n\n.bi-chat-quote-fill::before { content: \"\\f254\"; }\n\n.bi-chat-quote::before { content: \"\\f255\"; }\n\n.bi-chat-right-dots-fill::before { content: \"\\f256\"; }\n\n.bi-chat-right-dots::before { content: \"\\f257\"; }\n\n.bi-chat-right-fill::before { content: \"\\f258\"; }\n\n.bi-chat-right-quote-fill::before { content: \"\\f259\"; }\n\n.bi-chat-right-quote::before { content: \"\\f25a\"; }\n\n.bi-chat-right-text-fill::before { content: \"\\f25b\"; }\n\n.bi-chat-right-text::before { content: \"\\f25c\"; }\n\n.bi-chat-right::before { content: \"\\f25d\"; }\n\n.bi-chat-square-dots-fill::before { content: \"\\f25e\"; }\n\n.bi-chat-square-dots::before { content: \"\\f25f\"; }\n\n.bi-chat-square-fill::before { content: \"\\f260\"; }\n\n.bi-chat-square-quote-fill::before { content: \"\\f261\"; }\n\n.bi-chat-square-quote::before { content: \"\\f262\"; }\n\n.bi-chat-square-text-fill::before { content: \"\\f263\"; }\n\n.bi-chat-square-text::before { content: \"\\f264\"; }\n\n.bi-chat-square::before { content: \"\\f265\"; }\n\n.bi-chat-text-fill::before { content: \"\\f266\"; }\n\n.bi-chat-text::before { content: \"\\f267\"; }\n\n.bi-chat::before { content: \"\\f268\"; }\n\n.bi-check-all::before { content: \"\\f269\"; }\n\n.bi-check-circle-fill::before { content: \"\\f26a\"; }\n\n.bi-check-circle::before { content: \"\\f26b\"; }\n\n.bi-check-square-fill::before { content: \"\\f26c\"; }\n\n.bi-check-square::before { content: \"\\f26d\"; }\n\n.bi-check::before { content: \"\\f26e\"; }\n\n.bi-check2-all::before { content: \"\\f26f\"; }\n\n.bi-check2-circle::before { content: \"\\f270\"; }\n\n.bi-check2-square::before { content: \"\\f271\"; }\n\n.bi-check2::before { content: \"\\f272\"; }\n\n.bi-chevron-bar-contract::before { content: \"\\f273\"; }\n\n.bi-chevron-bar-down::before { content: \"\\f274\"; }\n\n.bi-chevron-bar-expand::before { content: \"\\f275\"; }\n\n.bi-chevron-bar-left::before { content: \"\\f276\"; }\n\n.bi-chevron-bar-right::before { content: \"\\f277\"; }\n\n.bi-chevron-bar-up::before { content: \"\\f278\"; }\n\n.bi-chevron-compact-down::before { content: \"\\f279\"; }\n\n.bi-chevron-compact-left::before { content: \"\\f27a\"; }\n\n.bi-chevron-compact-right::before { content: \"\\f27b\"; }\n\n.bi-chevron-compact-up::before { content: \"\\f27c\"; }\n\n.bi-chevron-contract::before { content: \"\\f27d\"; }\n\n.bi-chevron-double-down::before { content: \"\\f27e\"; }\n\n.bi-chevron-double-left::before { content: \"\\f27f\"; }\n\n.bi-chevron-double-right::before { content: \"\\f280\"; }\n\n.bi-chevron-double-up::before { content: \"\\f281\"; }\n\n.bi-chevron-down::before { content: \"\\f282\"; }\n\n.bi-chevron-expand::before { content: \"\\f283\"; }\n\n.bi-chevron-left::before { content: \"\\f284\"; }\n\n.bi-chevron-right::before { content: \"\\f285\"; }\n\n.bi-chevron-up::before { content: \"\\f286\"; }\n\n.bi-circle-fill::before { content: \"\\f287\"; }\n\n.bi-circle-half::before { content: \"\\f288\"; }\n\n.bi-circle-square::before { content: \"\\f289\"; }\n\n.bi-circle::before { content: \"\\f28a\"; }\n\n.bi-clipboard-check::before { content: \"\\f28b\"; }\n\n.bi-clipboard-data::before { content: \"\\f28c\"; }\n\n.bi-clipboard-minus::before { content: \"\\f28d\"; }\n\n.bi-clipboard-plus::before { content: \"\\f28e\"; }\n\n.bi-clipboard-x::before { content: \"\\f28f\"; }\n\n.bi-clipboard::before { content: \"\\f290\"; }\n\n.bi-clock-fill::before { content: \"\\f291\"; }\n\n.bi-clock-history::before { content: \"\\f292\"; }\n\n.bi-clock::before { content: \"\\f293\"; }\n\n.bi-cloud-arrow-down-fill::before { content: \"\\f294\"; }\n\n.bi-cloud-arrow-down::before { content: \"\\f295\"; }\n\n.bi-cloud-arrow-up-fill::before { content: \"\\f296\"; }\n\n.bi-cloud-arrow-up::before { content: \"\\f297\"; }\n\n.bi-cloud-check-fill::before { content: \"\\f298\"; }\n\n.bi-cloud-check::before { content: \"\\f299\"; }\n\n.bi-cloud-download-fill::before { content: \"\\f29a\"; }\n\n.bi-cloud-download::before { content: \"\\f29b\"; }\n\n.bi-cloud-drizzle-fill::before { content: \"\\f29c\"; }\n\n.bi-cloud-drizzle::before { content: \"\\f29d\"; }\n\n.bi-cloud-fill::before { content: \"\\f29e\"; }\n\n.bi-cloud-fog-fill::before { content: \"\\f29f\"; }\n\n.bi-cloud-fog::before { content: \"\\f2a0\"; }\n\n.bi-cloud-fog2-fill::before { content: \"\\f2a1\"; }\n\n.bi-cloud-fog2::before { content: \"\\f2a2\"; }\n\n.bi-cloud-hail-fill::before { content: \"\\f2a3\"; }\n\n.bi-cloud-hail::before { content: \"\\f2a4\"; }\n\n.bi-cloud-haze-fill::before { content: \"\\f2a6\"; }\n\n.bi-cloud-haze::before { content: \"\\f2a7\"; }\n\n.bi-cloud-haze2-fill::before { content: \"\\f2a8\"; }\n\n.bi-cloud-lightning-fill::before { content: \"\\f2a9\"; }\n\n.bi-cloud-lightning-rain-fill::before { content: \"\\f2aa\"; }\n\n.bi-cloud-lightning-rain::before { content: \"\\f2ab\"; }\n\n.bi-cloud-lightning::before { content: \"\\f2ac\"; }\n\n.bi-cloud-minus-fill::before { content: \"\\f2ad\"; }\n\n.bi-cloud-minus::before { content: \"\\f2ae\"; }\n\n.bi-cloud-moon-fill::before { content: \"\\f2af\"; }\n\n.bi-cloud-moon::before { content: \"\\f2b0\"; }\n\n.bi-cloud-plus-fill::before { content: \"\\f2b1\"; }\n\n.bi-cloud-plus::before { content: \"\\f2b2\"; }\n\n.bi-cloud-rain-fill::before { content: \"\\f2b3\"; }\n\n.bi-cloud-rain-heavy-fill::before { content: \"\\f2b4\"; }\n\n.bi-cloud-rain-heavy::before { content: \"\\f2b5\"; }\n\n.bi-cloud-rain::before { content: \"\\f2b6\"; }\n\n.bi-cloud-slash-fill::before { content: \"\\f2b7\"; }\n\n.bi-cloud-slash::before { content: \"\\f2b8\"; }\n\n.bi-cloud-sleet-fill::before { content: \"\\f2b9\"; }\n\n.bi-cloud-sleet::before { content: \"\\f2ba\"; }\n\n.bi-cloud-snow-fill::before { content: \"\\f2bb\"; }\n\n.bi-cloud-snow::before { content: \"\\f2bc\"; }\n\n.bi-cloud-sun-fill::before { content: \"\\f2bd\"; }\n\n.bi-cloud-sun::before { content: \"\\f2be\"; }\n\n.bi-cloud-upload-fill::before { content: \"\\f2bf\"; }\n\n.bi-cloud-upload::before { content: \"\\f2c0\"; }\n\n.bi-cloud::before { content: \"\\f2c1\"; }\n\n.bi-clouds-fill::before { content: \"\\f2c2\"; }\n\n.bi-clouds::before { content: \"\\f2c3\"; }\n\n.bi-cloudy-fill::before { content: \"\\f2c4\"; }\n\n.bi-cloudy::before { content: \"\\f2c5\"; }\n\n.bi-code-slash::before { content: \"\\f2c6\"; }\n\n.bi-code-square::before { content: \"\\f2c7\"; }\n\n.bi-code::before { content: \"\\f2c8\"; }\n\n.bi-collection-fill::before { content: \"\\f2c9\"; }\n\n.bi-collection-play-fill::before { content: \"\\f2ca\"; }\n\n.bi-collection-play::before { content: \"\\f2cb\"; }\n\n.bi-collection::before { content: \"\\f2cc\"; }\n\n.bi-columns-gap::before { content: \"\\f2cd\"; }\n\n.bi-columns::before { content: \"\\f2ce\"; }\n\n.bi-command::before { content: \"\\f2cf\"; }\n\n.bi-compass-fill::before { content: \"\\f2d0\"; }\n\n.bi-compass::before { content: \"\\f2d1\"; }\n\n.bi-cone-striped::before { content: \"\\f2d2\"; }\n\n.bi-cone::before { content: \"\\f2d3\"; }\n\n.bi-controller::before { content: \"\\f2d4\"; }\n\n.bi-cpu-fill::before { content: \"\\f2d5\"; }\n\n.bi-cpu::before { content: \"\\f2d6\"; }\n\n.bi-credit-card-2-back-fill::before { content: \"\\f2d7\"; }\n\n.bi-credit-card-2-back::before { content: \"\\f2d8\"; }\n\n.bi-credit-card-2-front-fill::before { content: \"\\f2d9\"; }\n\n.bi-credit-card-2-front::before { content: \"\\f2da\"; }\n\n.bi-credit-card-fill::before { content: \"\\f2db\"; }\n\n.bi-credit-card::before { content: \"\\f2dc\"; }\n\n.bi-crop::before { content: \"\\f2dd\"; }\n\n.bi-cup-fill::before { content: \"\\f2de\"; }\n\n.bi-cup-straw::before { content: \"\\f2df\"; }\n\n.bi-cup::before { content: \"\\f2e0\"; }\n\n.bi-cursor-fill::before { content: \"\\f2e1\"; }\n\n.bi-cursor-text::before { content: \"\\f2e2\"; }\n\n.bi-cursor::before { content: \"\\f2e3\"; }\n\n.bi-dash-circle-dotted::before { content: \"\\f2e4\"; }\n\n.bi-dash-circle-fill::before { content: \"\\f2e5\"; }\n\n.bi-dash-circle::before { content: \"\\f2e6\"; }\n\n.bi-dash-square-dotted::before { content: \"\\f2e7\"; }\n\n.bi-dash-square-fill::before { content: \"\\f2e8\"; }\n\n.bi-dash-square::before { content: \"\\f2e9\"; }\n\n.bi-dash::before { content: \"\\f2ea\"; }\n\n.bi-diagram-2-fill::before { content: \"\\f2eb\"; }\n\n.bi-diagram-2::before { content: \"\\f2ec\"; }\n\n.bi-diagram-3-fill::before { content: \"\\f2ed\"; }\n\n.bi-diagram-3::before { content: \"\\f2ee\"; }\n\n.bi-diamond-fill::before { content: \"\\f2ef\"; }\n\n.bi-diamond-half::before { content: \"\\f2f0\"; }\n\n.bi-diamond::before { content: \"\\f2f1\"; }\n\n.bi-dice-1-fill::before { content: \"\\f2f2\"; }\n\n.bi-dice-1::before { content: \"\\f2f3\"; }\n\n.bi-dice-2-fill::before { content: \"\\f2f4\"; }\n\n.bi-dice-2::before { content: \"\\f2f5\"; }\n\n.bi-dice-3-fill::before { content: \"\\f2f6\"; }\n\n.bi-dice-3::before { content: \"\\f2f7\"; }\n\n.bi-dice-4-fill::before { content: \"\\f2f8\"; }\n\n.bi-dice-4::before { content: \"\\f2f9\"; }\n\n.bi-dice-5-fill::before { content: \"\\f2fa\"; }\n\n.bi-dice-5::before { content: \"\\f2fb\"; }\n\n.bi-dice-6-fill::before { content: \"\\f2fc\"; }\n\n.bi-dice-6::before { content: \"\\f2fd\"; }\n\n.bi-disc-fill::before { content: \"\\f2fe\"; }\n\n.bi-disc::before { content: \"\\f2ff\"; }\n\n.bi-discord::before { content: \"\\f300\"; }\n\n.bi-display-fill::before { content: \"\\f301\"; }\n\n.bi-display::before { content: \"\\f302\"; }\n\n.bi-distribute-horizontal::before { content: \"\\f303\"; }\n\n.bi-distribute-vertical::before { content: \"\\f304\"; }\n\n.bi-door-closed-fill::before { content: \"\\f305\"; }\n\n.bi-door-closed::before { content: \"\\f306\"; }\n\n.bi-door-open-fill::before { content: \"\\f307\"; }\n\n.bi-door-open::before { content: \"\\f308\"; }\n\n.bi-dot::before { content: \"\\f309\"; }\n\n.bi-download::before { content: \"\\f30a\"; }\n\n.bi-droplet-fill::before { content: \"\\f30b\"; }\n\n.bi-droplet-half::before { content: \"\\f30c\"; }\n\n.bi-droplet::before { content: \"\\f30d\"; }\n\n.bi-earbuds::before { content: \"\\f30e\"; }\n\n.bi-easel-fill::before { content: \"\\f30f\"; }\n\n.bi-easel::before { content: \"\\f310\"; }\n\n.bi-egg-fill::before { content: \"\\f311\"; }\n\n.bi-egg-fried::before { content: \"\\f312\"; }\n\n.bi-egg::before { content: \"\\f313\"; }\n\n.bi-eject-fill::before { content: \"\\f314\"; }\n\n.bi-eject::before { content: \"\\f315\"; }\n\n.bi-emoji-angry-fill::before { content: \"\\f316\"; }\n\n.bi-emoji-angry::before { content: \"\\f317\"; }\n\n.bi-emoji-dizzy-fill::before { content: \"\\f318\"; }\n\n.bi-emoji-dizzy::before { content: \"\\f319\"; }\n\n.bi-emoji-expressionless-fill::before { content: \"\\f31a\"; }\n\n.bi-emoji-expressionless::before { content: \"\\f31b\"; }\n\n.bi-emoji-frown-fill::before { content: \"\\f31c\"; }\n\n.bi-emoji-frown::before { content: \"\\f31d\"; }\n\n.bi-emoji-heart-eyes-fill::before { content: \"\\f31e\"; }\n\n.bi-emoji-heart-eyes::before { content: \"\\f31f\"; }\n\n.bi-emoji-laughing-fill::before { content: \"\\f320\"; }\n\n.bi-emoji-laughing::before { content: \"\\f321\"; }\n\n.bi-emoji-neutral-fill::before { content: \"\\f322\"; }\n\n.bi-emoji-neutral::before { content: \"\\f323\"; }\n\n.bi-emoji-smile-fill::before { content: \"\\f324\"; }\n\n.bi-emoji-smile-upside-down-fill::before { content: \"\\f325\"; }\n\n.bi-emoji-smile-upside-down::before { content: \"\\f326\"; }\n\n.bi-emoji-smile::before { content: \"\\f327\"; }\n\n.bi-emoji-sunglasses-fill::before { content: \"\\f328\"; }\n\n.bi-emoji-sunglasses::before { content: \"\\f329\"; }\n\n.bi-emoji-wink-fill::before { content: \"\\f32a\"; }\n\n.bi-emoji-wink::before { content: \"\\f32b\"; }\n\n.bi-envelope-fill::before { content: \"\\f32c\"; }\n\n.bi-envelope-open-fill::before { content: \"\\f32d\"; }\n\n.bi-envelope-open::before { content: \"\\f32e\"; }\n\n.bi-envelope::before { content: \"\\f32f\"; }\n\n.bi-eraser-fill::before { content: \"\\f330\"; }\n\n.bi-eraser::before { content: \"\\f331\"; }\n\n.bi-exclamation-circle-fill::before { content: \"\\f332\"; }\n\n.bi-exclamation-circle::before { content: \"\\f333\"; }\n\n.bi-exclamation-diamond-fill::before { content: \"\\f334\"; }\n\n.bi-exclamation-diamond::before { content: \"\\f335\"; }\n\n.bi-exclamation-octagon-fill::before { content: \"\\f336\"; }\n\n.bi-exclamation-octagon::before { content: \"\\f337\"; }\n\n.bi-exclamation-square-fill::before { content: \"\\f338\"; }\n\n.bi-exclamation-square::before { content: \"\\f339\"; }\n\n.bi-exclamation-triangle-fill::before { content: \"\\f33a\"; }\n\n.bi-exclamation-triangle::before { content: \"\\f33b\"; }\n\n.bi-exclamation::before { content: \"\\f33c\"; }\n\n.bi-exclude::before { content: \"\\f33d\"; }\n\n.bi-eye-fill::before { content: \"\\f33e\"; }\n\n.bi-eye-slash-fill::before { content: \"\\f33f\"; }\n\n.bi-eye-slash::before { content: \"\\f340\"; }\n\n.bi-eye::before { content: \"\\f341\"; }\n\n.bi-eyedropper::before { content: \"\\f342\"; }\n\n.bi-eyeglasses::before { content: \"\\f343\"; }\n\n.bi-facebook::before { content: \"\\f344\"; }\n\n.bi-file-arrow-down-fill::before { content: \"\\f345\"; }\n\n.bi-file-arrow-down::before { content: \"\\f346\"; }\n\n.bi-file-arrow-up-fill::before { content: \"\\f347\"; }\n\n.bi-file-arrow-up::before { content: \"\\f348\"; }\n\n.bi-file-bar-graph-fill::before { content: \"\\f349\"; }\n\n.bi-file-bar-graph::before { content: \"\\f34a\"; }\n\n.bi-file-binary-fill::before { content: \"\\f34b\"; }\n\n.bi-file-binary::before { content: \"\\f34c\"; }\n\n.bi-file-break-fill::before { content: \"\\f34d\"; }\n\n.bi-file-break::before { content: \"\\f34e\"; }\n\n.bi-file-check-fill::before { content: \"\\f34f\"; }\n\n.bi-file-check::before { content: \"\\f350\"; }\n\n.bi-file-code-fill::before { content: \"\\f351\"; }\n\n.bi-file-code::before { content: \"\\f352\"; }\n\n.bi-file-diff-fill::before { content: \"\\f353\"; }\n\n.bi-file-diff::before { content: \"\\f354\"; }\n\n.bi-file-earmark-arrow-down-fill::before { content: \"\\f355\"; }\n\n.bi-file-earmark-arrow-down::before { content: \"\\f356\"; }\n\n.bi-file-earmark-arrow-up-fill::before { content: \"\\f357\"; }\n\n.bi-file-earmark-arrow-up::before { content: \"\\f358\"; }\n\n.bi-file-earmark-bar-graph-fill::before { content: \"\\f359\"; }\n\n.bi-file-earmark-bar-graph::before { content: \"\\f35a\"; }\n\n.bi-file-earmark-binary-fill::before { content: \"\\f35b\"; }\n\n.bi-file-earmark-binary::before { content: \"\\f35c\"; }\n\n.bi-file-earmark-break-fill::before { content: \"\\f35d\"; }\n\n.bi-file-earmark-break::before { content: \"\\f35e\"; }\n\n.bi-file-earmark-check-fill::before { content: \"\\f35f\"; }\n\n.bi-file-earmark-check::before { content: \"\\f360\"; }\n\n.bi-file-earmark-code-fill::before { content: \"\\f361\"; }\n\n.bi-file-earmark-code::before { content: \"\\f362\"; }\n\n.bi-file-earmark-diff-fill::before { content: \"\\f363\"; }\n\n.bi-file-earmark-diff::before { content: \"\\f364\"; }\n\n.bi-file-earmark-easel-fill::before { content: \"\\f365\"; }\n\n.bi-file-earmark-easel::before { content: \"\\f366\"; }\n\n.bi-file-earmark-excel-fill::before { content: \"\\f367\"; }\n\n.bi-file-earmark-excel::before { content: \"\\f368\"; }\n\n.bi-file-earmark-fill::before { content: \"\\f369\"; }\n\n.bi-file-earmark-font-fill::before { content: \"\\f36a\"; }\n\n.bi-file-earmark-font::before { content: \"\\f36b\"; }\n\n.bi-file-earmark-image-fill::before { content: \"\\f36c\"; }\n\n.bi-file-earmark-image::before { content: \"\\f36d\"; }\n\n.bi-file-earmark-lock-fill::before { content: \"\\f36e\"; }\n\n.bi-file-earmark-lock::before { content: \"\\f36f\"; }\n\n.bi-file-earmark-lock2-fill::before { content: \"\\f370\"; }\n\n.bi-file-earmark-lock2::before { content: \"\\f371\"; }\n\n.bi-file-earmark-medical-fill::before { content: \"\\f372\"; }\n\n.bi-file-earmark-medical::before { content: \"\\f373\"; }\n\n.bi-file-earmark-minus-fill::before { content: \"\\f374\"; }\n\n.bi-file-earmark-minus::before { content: \"\\f375\"; }\n\n.bi-file-earmark-music-fill::before { content: \"\\f376\"; }\n\n.bi-file-earmark-music::before { content: \"\\f377\"; }\n\n.bi-file-earmark-person-fill::before { content: \"\\f378\"; }\n\n.bi-file-earmark-person::before { content: \"\\f379\"; }\n\n.bi-file-earmark-play-fill::before { content: \"\\f37a\"; }\n\n.bi-file-earmark-play::before { content: \"\\f37b\"; }\n\n.bi-file-earmark-plus-fill::before { content: \"\\f37c\"; }\n\n.bi-file-earmark-plus::before { content: \"\\f37d\"; }\n\n.bi-file-earmark-post-fill::before { content: \"\\f37e\"; }\n\n.bi-file-earmark-post::before { content: \"\\f37f\"; }\n\n.bi-file-earmark-ppt-fill::before { content: \"\\f380\"; }\n\n.bi-file-earmark-ppt::before { content: \"\\f381\"; }\n\n.bi-file-earmark-richtext-fill::before { content: \"\\f382\"; }\n\n.bi-file-earmark-richtext::before { content: \"\\f383\"; }\n\n.bi-file-earmark-ruled-fill::before { content: \"\\f384\"; }\n\n.bi-file-earmark-ruled::before { content: \"\\f385\"; }\n\n.bi-file-earmark-slides-fill::before { content: \"\\f386\"; }\n\n.bi-file-earmark-slides::before { content: \"\\f387\"; }\n\n.bi-file-earmark-spreadsheet-fill::before { content: \"\\f388\"; }\n\n.bi-file-earmark-spreadsheet::before { content: \"\\f389\"; }\n\n.bi-file-earmark-text-fill::before { content: \"\\f38a\"; }\n\n.bi-file-earmark-text::before { content: \"\\f38b\"; }\n\n.bi-file-earmark-word-fill::before { content: \"\\f38c\"; }\n\n.bi-file-earmark-word::before { content: \"\\f38d\"; }\n\n.bi-file-earmark-x-fill::before { content: \"\\f38e\"; }\n\n.bi-file-earmark-x::before { content: \"\\f38f\"; }\n\n.bi-file-earmark-zip-fill::before { content: \"\\f390\"; }\n\n.bi-file-earmark-zip::before { content: \"\\f391\"; }\n\n.bi-file-earmark::before { content: \"\\f392\"; }\n\n.bi-file-easel-fill::before { content: \"\\f393\"; }\n\n.bi-file-easel::before { content: \"\\f394\"; }\n\n.bi-file-excel-fill::before { content: \"\\f395\"; }\n\n.bi-file-excel::before { content: \"\\f396\"; }\n\n.bi-file-fill::before { content: \"\\f397\"; }\n\n.bi-file-font-fill::before { content: \"\\f398\"; }\n\n.bi-file-font::before { content: \"\\f399\"; }\n\n.bi-file-image-fill::before { content: \"\\f39a\"; }\n\n.bi-file-image::before { content: \"\\f39b\"; }\n\n.bi-file-lock-fill::before { content: \"\\f39c\"; }\n\n.bi-file-lock::before { content: \"\\f39d\"; }\n\n.bi-file-lock2-fill::before { content: \"\\f39e\"; }\n\n.bi-file-lock2::before { content: \"\\f39f\"; }\n\n.bi-file-medical-fill::before { content: \"\\f3a0\"; }\n\n.bi-file-medical::before { content: \"\\f3a1\"; }\n\n.bi-file-minus-fill::before { content: \"\\f3a2\"; }\n\n.bi-file-minus::before { content: \"\\f3a3\"; }\n\n.bi-file-music-fill::before { content: \"\\f3a4\"; }\n\n.bi-file-music::before { content: \"\\f3a5\"; }\n\n.bi-file-person-fill::before { content: \"\\f3a6\"; }\n\n.bi-file-person::before { content: \"\\f3a7\"; }\n\n.bi-file-play-fill::before { content: \"\\f3a8\"; }\n\n.bi-file-play::before { content: \"\\f3a9\"; }\n\n.bi-file-plus-fill::before { content: \"\\f3aa\"; }\n\n.bi-file-plus::before { content: \"\\f3ab\"; }\n\n.bi-file-post-fill::before { content: \"\\f3ac\"; }\n\n.bi-file-post::before { content: \"\\f3ad\"; }\n\n.bi-file-ppt-fill::before { content: \"\\f3ae\"; }\n\n.bi-file-ppt::before { content: \"\\f3af\"; }\n\n.bi-file-richtext-fill::before { content: \"\\f3b0\"; }\n\n.bi-file-richtext::before { content: \"\\f3b1\"; }\n\n.bi-file-ruled-fill::before { content: \"\\f3b2\"; }\n\n.bi-file-ruled::before { content: \"\\f3b3\"; }\n\n.bi-file-slides-fill::before { content: \"\\f3b4\"; }\n\n.bi-file-slides::before { content: \"\\f3b5\"; }\n\n.bi-file-spreadsheet-fill::before { content: \"\\f3b6\"; }\n\n.bi-file-spreadsheet::before { content: \"\\f3b7\"; }\n\n.bi-file-text-fill::before { content: \"\\f3b8\"; }\n\n.bi-file-text::before { content: \"\\f3b9\"; }\n\n.bi-file-word-fill::before { content: \"\\f3ba\"; }\n\n.bi-file-word::before { content: \"\\f3bb\"; }\n\n.bi-file-x-fill::before { content: \"\\f3bc\"; }\n\n.bi-file-x::before { content: \"\\f3bd\"; }\n\n.bi-file-zip-fill::before { content: \"\\f3be\"; }\n\n.bi-file-zip::before { content: \"\\f3bf\"; }\n\n.bi-file::before { content: \"\\f3c0\"; }\n\n.bi-files-alt::before { content: \"\\f3c1\"; }\n\n.bi-files::before { content: \"\\f3c2\"; }\n\n.bi-film::before { content: \"\\f3c3\"; }\n\n.bi-filter-circle-fill::before { content: \"\\f3c4\"; }\n\n.bi-filter-circle::before { content: \"\\f3c5\"; }\n\n.bi-filter-left::before { content: \"\\f3c6\"; }\n\n.bi-filter-right::before { content: \"\\f3c7\"; }\n\n.bi-filter-square-fill::before { content: \"\\f3c8\"; }\n\n.bi-filter-square::before { content: \"\\f3c9\"; }\n\n.bi-filter::before { content: \"\\f3ca\"; }\n\n.bi-flag-fill::before { content: \"\\f3cb\"; }\n\n.bi-flag::before { content: \"\\f3cc\"; }\n\n.bi-flower1::before { content: \"\\f3cd\"; }\n\n.bi-flower2::before { content: \"\\f3ce\"; }\n\n.bi-flower3::before { content: \"\\f3cf\"; }\n\n.bi-folder-check::before { content: \"\\f3d0\"; }\n\n.bi-folder-fill::before { content: \"\\f3d1\"; }\n\n.bi-folder-minus::before { content: \"\\f3d2\"; }\n\n.bi-folder-plus::before { content: \"\\f3d3\"; }\n\n.bi-folder-symlink-fill::before { content: \"\\f3d4\"; }\n\n.bi-folder-symlink::before { content: \"\\f3d5\"; }\n\n.bi-folder-x::before { content: \"\\f3d6\"; }\n\n.bi-folder::before { content: \"\\f3d7\"; }\n\n.bi-folder2-open::before { content: \"\\f3d8\"; }\n\n.bi-folder2::before { content: \"\\f3d9\"; }\n\n.bi-fonts::before { content: \"\\f3da\"; }\n\n.bi-forward-fill::before { content: \"\\f3db\"; }\n\n.bi-forward::before { content: \"\\f3dc\"; }\n\n.bi-front::before { content: \"\\f3dd\"; }\n\n.bi-fullscreen-exit::before { content: \"\\f3de\"; }\n\n.bi-fullscreen::before { content: \"\\f3df\"; }\n\n.bi-funnel-fill::before { content: \"\\f3e0\"; }\n\n.bi-funnel::before { content: \"\\f3e1\"; }\n\n.bi-gear-fill::before { content: \"\\f3e2\"; }\n\n.bi-gear-wide-connected::before { content: \"\\f3e3\"; }\n\n.bi-gear-wide::before { content: \"\\f3e4\"; }\n\n.bi-gear::before { content: \"\\f3e5\"; }\n\n.bi-gem::before { content: \"\\f3e6\"; }\n\n.bi-geo-alt-fill::before { content: \"\\f3e7\"; }\n\n.bi-geo-alt::before { content: \"\\f3e8\"; }\n\n.bi-geo-fill::before { content: \"\\f3e9\"; }\n\n.bi-geo::before { content: \"\\f3ea\"; }\n\n.bi-gift-fill::before { content: \"\\f3eb\"; }\n\n.bi-gift::before { content: \"\\f3ec\"; }\n\n.bi-github::before { content: \"\\f3ed\"; }\n\n.bi-globe::before { content: \"\\f3ee\"; }\n\n.bi-globe2::before { content: \"\\f3ef\"; }\n\n.bi-google::before { content: \"\\f3f0\"; }\n\n.bi-graph-down::before { content: \"\\f3f1\"; }\n\n.bi-graph-up::before { content: \"\\f3f2\"; }\n\n.bi-grid-1x2-fill::before { content: \"\\f3f3\"; }\n\n.bi-grid-1x2::before { content: \"\\f3f4\"; }\n\n.bi-grid-3x2-gap-fill::before { content: \"\\f3f5\"; }\n\n.bi-grid-3x2-gap::before { content: \"\\f3f6\"; }\n\n.bi-grid-3x2::before { content: \"\\f3f7\"; }\n\n.bi-grid-3x3-gap-fill::before { content: \"\\f3f8\"; }\n\n.bi-grid-3x3-gap::before { content: \"\\f3f9\"; }\n\n.bi-grid-3x3::before { content: \"\\f3fa\"; }\n\n.bi-grid-fill::before { content: \"\\f3fb\"; }\n\n.bi-grid::before { content: \"\\f3fc\"; }\n\n.bi-grip-horizontal::before { content: \"\\f3fd\"; }\n\n.bi-grip-vertical::before { content: \"\\f3fe\"; }\n\n.bi-hammer::before { content: \"\\f3ff\"; }\n\n.bi-hand-index-fill::before { content: \"\\f400\"; }\n\n.bi-hand-index-thumb-fill::before { content: \"\\f401\"; }\n\n.bi-hand-index-thumb::before { content: \"\\f402\"; }\n\n.bi-hand-index::before { content: \"\\f403\"; }\n\n.bi-hand-thumbs-down-fill::before { content: \"\\f404\"; }\n\n.bi-hand-thumbs-down::before { content: \"\\f405\"; }\n\n.bi-hand-thumbs-up-fill::before { content: \"\\f406\"; }\n\n.bi-hand-thumbs-up::before { content: \"\\f407\"; }\n\n.bi-handbag-fill::before { content: \"\\f408\"; }\n\n.bi-handbag::before { content: \"\\f409\"; }\n\n.bi-hash::before { content: \"\\f40a\"; }\n\n.bi-hdd-fill::before { content: \"\\f40b\"; }\n\n.bi-hdd-network-fill::before { content: \"\\f40c\"; }\n\n.bi-hdd-network::before { content: \"\\f40d\"; }\n\n.bi-hdd-rack-fill::before { content: \"\\f40e\"; }\n\n.bi-hdd-rack::before { content: \"\\f40f\"; }\n\n.bi-hdd-stack-fill::before { content: \"\\f410\"; }\n\n.bi-hdd-stack::before { content: \"\\f411\"; }\n\n.bi-hdd::before { content: \"\\f412\"; }\n\n.bi-headphones::before { content: \"\\f413\"; }\n\n.bi-headset::before { content: \"\\f414\"; }\n\n.bi-heart-fill::before { content: \"\\f415\"; }\n\n.bi-heart-half::before { content: \"\\f416\"; }\n\n.bi-heart::before { content: \"\\f417\"; }\n\n.bi-heptagon-fill::before { content: \"\\f418\"; }\n\n.bi-heptagon-half::before { content: \"\\f419\"; }\n\n.bi-heptagon::before { content: \"\\f41a\"; }\n\n.bi-hexagon-fill::before { content: \"\\f41b\"; }\n\n.bi-hexagon-half::before { content: \"\\f41c\"; }\n\n.bi-hexagon::before { content: \"\\f41d\"; }\n\n.bi-hourglass-bottom::before { content: \"\\f41e\"; }\n\n.bi-hourglass-split::before { content: \"\\f41f\"; }\n\n.bi-hourglass-top::before { content: \"\\f420\"; }\n\n.bi-hourglass::before { content: \"\\f421\"; }\n\n.bi-house-door-fill::before { content: \"\\f422\"; }\n\n.bi-house-door::before { content: \"\\f423\"; }\n\n.bi-house-fill::before { content: \"\\f424\"; }\n\n.bi-house::before { content: \"\\f425\"; }\n\n.bi-hr::before { content: \"\\f426\"; }\n\n.bi-hurricane::before { content: \"\\f427\"; }\n\n.bi-image-alt::before { content: \"\\f428\"; }\n\n.bi-image-fill::before { content: \"\\f429\"; }\n\n.bi-image::before { content: \"\\f42a\"; }\n\n.bi-images::before { content: \"\\f42b\"; }\n\n.bi-inbox-fill::before { content: \"\\f42c\"; }\n\n.bi-inbox::before { content: \"\\f42d\"; }\n\n.bi-inboxes-fill::before { content: \"\\f42e\"; }\n\n.bi-inboxes::before { content: \"\\f42f\"; }\n\n.bi-info-circle-fill::before { content: \"\\f430\"; }\n\n.bi-info-circle::before { content: \"\\f431\"; }\n\n.bi-info-square-fill::before { content: \"\\f432\"; }\n\n.bi-info-square::before { content: \"\\f433\"; }\n\n.bi-info::before { content: \"\\f434\"; }\n\n.bi-input-cursor-text::before { content: \"\\f435\"; }\n\n.bi-input-cursor::before { content: \"\\f436\"; }\n\n.bi-instagram::before { content: \"\\f437\"; }\n\n.bi-intersect::before { content: \"\\f438\"; }\n\n.bi-journal-album::before { content: \"\\f439\"; }\n\n.bi-journal-arrow-down::before { content: \"\\f43a\"; }\n\n.bi-journal-arrow-up::before { content: \"\\f43b\"; }\n\n.bi-journal-bookmark-fill::before { content: \"\\f43c\"; }\n\n.bi-journal-bookmark::before { content: \"\\f43d\"; }\n\n.bi-journal-check::before { content: \"\\f43e\"; }\n\n.bi-journal-code::before { content: \"\\f43f\"; }\n\n.bi-journal-medical::before { content: \"\\f440\"; }\n\n.bi-journal-minus::before { content: \"\\f441\"; }\n\n.bi-journal-plus::before { content: \"\\f442\"; }\n\n.bi-journal-richtext::before { content: \"\\f443\"; }\n\n.bi-journal-text::before { content: \"\\f444\"; }\n\n.bi-journal-x::before { content: \"\\f445\"; }\n\n.bi-journal::before { content: \"\\f446\"; }\n\n.bi-journals::before { content: \"\\f447\"; }\n\n.bi-joystick::before { content: \"\\f448\"; }\n\n.bi-justify-left::before { content: \"\\f449\"; }\n\n.bi-justify-right::before { content: \"\\f44a\"; }\n\n.bi-justify::before { content: \"\\f44b\"; }\n\n.bi-kanban-fill::before { content: \"\\f44c\"; }\n\n.bi-kanban::before { content: \"\\f44d\"; }\n\n.bi-key-fill::before { content: \"\\f44e\"; }\n\n.bi-key::before { content: \"\\f44f\"; }\n\n.bi-keyboard-fill::before { content: \"\\f450\"; }\n\n.bi-keyboard::before { content: \"\\f451\"; }\n\n.bi-ladder::before { content: \"\\f452\"; }\n\n.bi-lamp-fill::before { content: \"\\f453\"; }\n\n.bi-lamp::before { content: \"\\f454\"; }\n\n.bi-laptop-fill::before { content: \"\\f455\"; }\n\n.bi-laptop::before { content: \"\\f456\"; }\n\n.bi-layer-backward::before { content: \"\\f457\"; }\n\n.bi-layer-forward::before { content: \"\\f458\"; }\n\n.bi-layers-fill::before { content: \"\\f459\"; }\n\n.bi-layers-half::before { content: \"\\f45a\"; }\n\n.bi-layers::before { content: \"\\f45b\"; }\n\n.bi-layout-sidebar-inset-reverse::before { content: \"\\f45c\"; }\n\n.bi-layout-sidebar-inset::before { content: \"\\f45d\"; }\n\n.bi-layout-sidebar-reverse::before { content: \"\\f45e\"; }\n\n.bi-layout-sidebar::before { content: \"\\f45f\"; }\n\n.bi-layout-split::before { content: \"\\f460\"; }\n\n.bi-layout-text-sidebar-reverse::before { content: \"\\f461\"; }\n\n.bi-layout-text-sidebar::before { content: \"\\f462\"; }\n\n.bi-layout-text-window-reverse::before { content: \"\\f463\"; }\n\n.bi-layout-text-window::before { content: \"\\f464\"; }\n\n.bi-layout-three-columns::before { content: \"\\f465\"; }\n\n.bi-layout-wtf::before { content: \"\\f466\"; }\n\n.bi-life-preserver::before { content: \"\\f467\"; }\n\n.bi-lightbulb-fill::before { content: \"\\f468\"; }\n\n.bi-lightbulb-off-fill::before { content: \"\\f469\"; }\n\n.bi-lightbulb-off::before { content: \"\\f46a\"; }\n\n.bi-lightbulb::before { content: \"\\f46b\"; }\n\n.bi-lightning-charge-fill::before { content: \"\\f46c\"; }\n\n.bi-lightning-charge::before { content: \"\\f46d\"; }\n\n.bi-lightning-fill::before { content: \"\\f46e\"; }\n\n.bi-lightning::before { content: \"\\f46f\"; }\n\n.bi-link-45deg::before { content: \"\\f470\"; }\n\n.bi-link::before { content: \"\\f471\"; }\n\n.bi-linkedin::before { content: \"\\f472\"; }\n\n.bi-list-check::before { content: \"\\f473\"; }\n\n.bi-list-nested::before { content: \"\\f474\"; }\n\n.bi-list-ol::before { content: \"\\f475\"; }\n\n.bi-list-stars::before { content: \"\\f476\"; }\n\n.bi-list-task::before { content: \"\\f477\"; }\n\n.bi-list-ul::before { content: \"\\f478\"; }\n\n.bi-list::before { content: \"\\f479\"; }\n\n.bi-lock-fill::before { content: \"\\f47a\"; }\n\n.bi-lock::before { content: \"\\f47b\"; }\n\n.bi-mailbox::before { content: \"\\f47c\"; }\n\n.bi-mailbox2::before { content: \"\\f47d\"; }\n\n.bi-map-fill::before { content: \"\\f47e\"; }\n\n.bi-map::before { content: \"\\f47f\"; }\n\n.bi-markdown-fill::before { content: \"\\f480\"; }\n\n.bi-markdown::before { content: \"\\f481\"; }\n\n.bi-mask::before { content: \"\\f482\"; }\n\n.bi-megaphone-fill::before { content: \"\\f483\"; }\n\n.bi-megaphone::before { content: \"\\f484\"; }\n\n.bi-menu-app-fill::before { content: \"\\f485\"; }\n\n.bi-menu-app::before { content: \"\\f486\"; }\n\n.bi-menu-button-fill::before { content: \"\\f487\"; }\n\n.bi-menu-button-wide-fill::before { content: \"\\f488\"; }\n\n.bi-menu-button-wide::before { content: \"\\f489\"; }\n\n.bi-menu-button::before { content: \"\\f48a\"; }\n\n.bi-menu-down::before { content: \"\\f48b\"; }\n\n.bi-menu-up::before { content: \"\\f48c\"; }\n\n.bi-mic-fill::before { content: \"\\f48d\"; }\n\n.bi-mic-mute-fill::before { content: \"\\f48e\"; }\n\n.bi-mic-mute::before { content: \"\\f48f\"; }\n\n.bi-mic::before { content: \"\\f490\"; }\n\n.bi-minecart-loaded::before { content: \"\\f491\"; }\n\n.bi-minecart::before { content: \"\\f492\"; }\n\n.bi-moisture::before { content: \"\\f493\"; }\n\n.bi-moon-fill::before { content: \"\\f494\"; }\n\n.bi-moon-stars-fill::before { content: \"\\f495\"; }\n\n.bi-moon-stars::before { content: \"\\f496\"; }\n\n.bi-moon::before { content: \"\\f497\"; }\n\n.bi-mouse-fill::before { content: \"\\f498\"; }\n\n.bi-mouse::before { content: \"\\f499\"; }\n\n.bi-mouse2-fill::before { content: \"\\f49a\"; }\n\n.bi-mouse2::before { content: \"\\f49b\"; }\n\n.bi-mouse3-fill::before { content: \"\\f49c\"; }\n\n.bi-mouse3::before { content: \"\\f49d\"; }\n\n.bi-music-note-beamed::before { content: \"\\f49e\"; }\n\n.bi-music-note-list::before { content: \"\\f49f\"; }\n\n.bi-music-note::before { content: \"\\f4a0\"; }\n\n.bi-music-player-fill::before { content: \"\\f4a1\"; }\n\n.bi-music-player::before { content: \"\\f4a2\"; }\n\n.bi-newspaper::before { content: \"\\f4a3\"; }\n\n.bi-node-minus-fill::before { content: \"\\f4a4\"; }\n\n.bi-node-minus::before { content: \"\\f4a5\"; }\n\n.bi-node-plus-fill::before { content: \"\\f4a6\"; }\n\n.bi-node-plus::before { content: \"\\f4a7\"; }\n\n.bi-nut-fill::before { content: \"\\f4a8\"; }\n\n.bi-nut::before { content: \"\\f4a9\"; }\n\n.bi-octagon-fill::before { content: \"\\f4aa\"; }\n\n.bi-octagon-half::before { content: \"\\f4ab\"; }\n\n.bi-octagon::before { content: \"\\f4ac\"; }\n\n.bi-option::before { content: \"\\f4ad\"; }\n\n.bi-outlet::before { content: \"\\f4ae\"; }\n\n.bi-paint-bucket::before { content: \"\\f4af\"; }\n\n.bi-palette-fill::before { content: \"\\f4b0\"; }\n\n.bi-palette::before { content: \"\\f4b1\"; }\n\n.bi-palette2::before { content: \"\\f4b2\"; }\n\n.bi-paperclip::before { content: \"\\f4b3\"; }\n\n.bi-paragraph::before { content: \"\\f4b4\"; }\n\n.bi-patch-check-fill::before { content: \"\\f4b5\"; }\n\n.bi-patch-check::before { content: \"\\f4b6\"; }\n\n.bi-patch-exclamation-fill::before { content: \"\\f4b7\"; }\n\n.bi-patch-exclamation::before { content: \"\\f4b8\"; }\n\n.bi-patch-minus-fill::before { content: \"\\f4b9\"; }\n\n.bi-patch-minus::before { content: \"\\f4ba\"; }\n\n.bi-patch-plus-fill::before { content: \"\\f4bb\"; }\n\n.bi-patch-plus::before { content: \"\\f4bc\"; }\n\n.bi-patch-question-fill::before { content: \"\\f4bd\"; }\n\n.bi-patch-question::before { content: \"\\f4be\"; }\n\n.bi-pause-btn-fill::before { content: \"\\f4bf\"; }\n\n.bi-pause-btn::before { content: \"\\f4c0\"; }\n\n.bi-pause-circle-fill::before { content: \"\\f4c1\"; }\n\n.bi-pause-circle::before { content: \"\\f4c2\"; }\n\n.bi-pause-fill::before { content: \"\\f4c3\"; }\n\n.bi-pause::before { content: \"\\f4c4\"; }\n\n.bi-peace-fill::before { content: \"\\f4c5\"; }\n\n.bi-peace::before { content: \"\\f4c6\"; }\n\n.bi-pen-fill::before { content: \"\\f4c7\"; }\n\n.bi-pen::before { content: \"\\f4c8\"; }\n\n.bi-pencil-fill::before { content: \"\\f4c9\"; }\n\n.bi-pencil-square::before { content: \"\\f4ca\"; }\n\n.bi-pencil::before { content: \"\\f4cb\"; }\n\n.bi-pentagon-fill::before { content: \"\\f4cc\"; }\n\n.bi-pentagon-half::before { content: \"\\f4cd\"; }\n\n.bi-pentagon::before { content: \"\\f4ce\"; }\n\n.bi-people-fill::before { content: \"\\f4cf\"; }\n\n.bi-people::before { content: \"\\f4d0\"; }\n\n.bi-percent::before { content: \"\\f4d1\"; }\n\n.bi-person-badge-fill::before { content: \"\\f4d2\"; }\n\n.bi-person-badge::before { content: \"\\f4d3\"; }\n\n.bi-person-bounding-box::before { content: \"\\f4d4\"; }\n\n.bi-person-check-fill::before { content: \"\\f4d5\"; }\n\n.bi-person-check::before { content: \"\\f4d6\"; }\n\n.bi-person-circle::before { content: \"\\f4d7\"; }\n\n.bi-person-dash-fill::before { content: \"\\f4d8\"; }\n\n.bi-person-dash::before { content: \"\\f4d9\"; }\n\n.bi-person-fill::before { content: \"\\f4da\"; }\n\n.bi-person-lines-fill::before { content: \"\\f4db\"; }\n\n.bi-person-plus-fill::before { content: \"\\f4dc\"; }\n\n.bi-person-plus::before { content: \"\\f4dd\"; }\n\n.bi-person-square::before { content: \"\\f4de\"; }\n\n.bi-person-x-fill::before { content: \"\\f4df\"; }\n\n.bi-person-x::before { content: \"\\f4e0\"; }\n\n.bi-person::before { content: \"\\f4e1\"; }\n\n.bi-phone-fill::before { content: \"\\f4e2\"; }\n\n.bi-phone-landscape-fill::before { content: \"\\f4e3\"; }\n\n.bi-phone-landscape::before { content: \"\\f4e4\"; }\n\n.bi-phone-vibrate-fill::before { content: \"\\f4e5\"; }\n\n.bi-phone-vibrate::before { content: \"\\f4e6\"; }\n\n.bi-phone::before { content: \"\\f4e7\"; }\n\n.bi-pie-chart-fill::before { content: \"\\f4e8\"; }\n\n.bi-pie-chart::before { content: \"\\f4e9\"; }\n\n.bi-pin-angle-fill::before { content: \"\\f4ea\"; }\n\n.bi-pin-angle::before { content: \"\\f4eb\"; }\n\n.bi-pin-fill::before { content: \"\\f4ec\"; }\n\n.bi-pin::before { content: \"\\f4ed\"; }\n\n.bi-pip-fill::before { content: \"\\f4ee\"; }\n\n.bi-pip::before { content: \"\\f4ef\"; }\n\n.bi-play-btn-fill::before { content: \"\\f4f0\"; }\n\n.bi-play-btn::before { content: \"\\f4f1\"; }\n\n.bi-play-circle-fill::before { content: \"\\f4f2\"; }\n\n.bi-play-circle::before { content: \"\\f4f3\"; }\n\n.bi-play-fill::before { content: \"\\f4f4\"; }\n\n.bi-play::before { content: \"\\f4f5\"; }\n\n.bi-plug-fill::before { content: \"\\f4f6\"; }\n\n.bi-plug::before { content: \"\\f4f7\"; }\n\n.bi-plus-circle-dotted::before { content: \"\\f4f8\"; }\n\n.bi-plus-circle-fill::before { content: \"\\f4f9\"; }\n\n.bi-plus-circle::before { content: \"\\f4fa\"; }\n\n.bi-plus-square-dotted::before { content: \"\\f4fb\"; }\n\n.bi-plus-square-fill::before { content: \"\\f4fc\"; }\n\n.bi-plus-square::before { content: \"\\f4fd\"; }\n\n.bi-plus::before { content: \"\\f4fe\"; }\n\n.bi-power::before { content: \"\\f4ff\"; }\n\n.bi-printer-fill::before { content: \"\\f500\"; }\n\n.bi-printer::before { content: \"\\f501\"; }\n\n.bi-puzzle-fill::before { content: \"\\f502\"; }\n\n.bi-puzzle::before { content: \"\\f503\"; }\n\n.bi-question-circle-fill::before { content: \"\\f504\"; }\n\n.bi-question-circle::before { content: \"\\f505\"; }\n\n.bi-question-diamond-fill::before { content: \"\\f506\"; }\n\n.bi-question-diamond::before { content: \"\\f507\"; }\n\n.bi-question-octagon-fill::before { content: \"\\f508\"; }\n\n.bi-question-octagon::before { content: \"\\f509\"; }\n\n.bi-question-square-fill::before { content: \"\\f50a\"; }\n\n.bi-question-square::before { content: \"\\f50b\"; }\n\n.bi-question::before { content: \"\\f50c\"; }\n\n.bi-rainbow::before { content: \"\\f50d\"; }\n\n.bi-receipt-cutoff::before { content: \"\\f50e\"; }\n\n.bi-receipt::before { content: \"\\f50f\"; }\n\n.bi-reception-0::before { content: \"\\f510\"; }\n\n.bi-reception-1::before { content: \"\\f511\"; }\n\n.bi-reception-2::before { content: \"\\f512\"; }\n\n.bi-reception-3::before { content: \"\\f513\"; }\n\n.bi-reception-4::before { content: \"\\f514\"; }\n\n.bi-record-btn-fill::before { content: \"\\f515\"; }\n\n.bi-record-btn::before { content: \"\\f516\"; }\n\n.bi-record-circle-fill::before { content: \"\\f517\"; }\n\n.bi-record-circle::before { content: \"\\f518\"; }\n\n.bi-record-fill::before { content: \"\\f519\"; }\n\n.bi-record::before { content: \"\\f51a\"; }\n\n.bi-record2-fill::before { content: \"\\f51b\"; }\n\n.bi-record2::before { content: \"\\f51c\"; }\n\n.bi-reply-all-fill::before { content: \"\\f51d\"; }\n\n.bi-reply-all::before { content: \"\\f51e\"; }\n\n.bi-reply-fill::before { content: \"\\f51f\"; }\n\n.bi-reply::before { content: \"\\f520\"; }\n\n.bi-rss-fill::before { content: \"\\f521\"; }\n\n.bi-rss::before { content: \"\\f522\"; }\n\n.bi-rulers::before { content: \"\\f523\"; }\n\n.bi-save-fill::before { content: \"\\f524\"; }\n\n.bi-save::before { content: \"\\f525\"; }\n\n.bi-save2-fill::before { content: \"\\f526\"; }\n\n.bi-save2::before { content: \"\\f527\"; }\n\n.bi-scissors::before { content: \"\\f528\"; }\n\n.bi-screwdriver::before { content: \"\\f529\"; }\n\n.bi-search::before { content: \"\\f52a\"; }\n\n.bi-segmented-nav::before { content: \"\\f52b\"; }\n\n.bi-server::before { content: \"\\f52c\"; }\n\n.bi-share-fill::before { content: \"\\f52d\"; }\n\n.bi-share::before { content: \"\\f52e\"; }\n\n.bi-shield-check::before { content: \"\\f52f\"; }\n\n.bi-shield-exclamation::before { content: \"\\f530\"; }\n\n.bi-shield-fill-check::before { content: \"\\f531\"; }\n\n.bi-shield-fill-exclamation::before { content: \"\\f532\"; }\n\n.bi-shield-fill-minus::before { content: \"\\f533\"; }\n\n.bi-shield-fill-plus::before { content: \"\\f534\"; }\n\n.bi-shield-fill-x::before { content: \"\\f535\"; }\n\n.bi-shield-fill::before { content: \"\\f536\"; }\n\n.bi-shield-lock-fill::before { content: \"\\f537\"; }\n\n.bi-shield-lock::before { content: \"\\f538\"; }\n\n.bi-shield-minus::before { content: \"\\f539\"; }\n\n.bi-shield-plus::before { content: \"\\f53a\"; }\n\n.bi-shield-shaded::before { content: \"\\f53b\"; }\n\n.bi-shield-slash-fill::before { content: \"\\f53c\"; }\n\n.bi-shield-slash::before { content: \"\\f53d\"; }\n\n.bi-shield-x::before { content: \"\\f53e\"; }\n\n.bi-shield::before { content: \"\\f53f\"; }\n\n.bi-shift-fill::before { content: \"\\f540\"; }\n\n.bi-shift::before { content: \"\\f541\"; }\n\n.bi-shop-window::before { content: \"\\f542\"; }\n\n.bi-shop::before { content: \"\\f543\"; }\n\n.bi-shuffle::before { content: \"\\f544\"; }\n\n.bi-signpost-2-fill::before { content: \"\\f545\"; }\n\n.bi-signpost-2::before { content: \"\\f546\"; }\n\n.bi-signpost-fill::before { content: \"\\f547\"; }\n\n.bi-signpost-split-fill::before { content: \"\\f548\"; }\n\n.bi-signpost-split::before { content: \"\\f549\"; }\n\n.bi-signpost::before { content: \"\\f54a\"; }\n\n.bi-sim-fill::before { content: \"\\f54b\"; }\n\n.bi-sim::before { content: \"\\f54c\"; }\n\n.bi-skip-backward-btn-fill::before { content: \"\\f54d\"; }\n\n.bi-skip-backward-btn::before { content: \"\\f54e\"; }\n\n.bi-skip-backward-circle-fill::before { content: \"\\f54f\"; }\n\n.bi-skip-backward-circle::before { content: \"\\f550\"; }\n\n.bi-skip-backward-fill::before { content: \"\\f551\"; }\n\n.bi-skip-backward::before { content: \"\\f552\"; }\n\n.bi-skip-end-btn-fill::before { content: \"\\f553\"; }\n\n.bi-skip-end-btn::before { content: \"\\f554\"; }\n\n.bi-skip-end-circle-fill::before { content: \"\\f555\"; }\n\n.bi-skip-end-circle::before { content: \"\\f556\"; }\n\n.bi-skip-end-fill::before { content: \"\\f557\"; }\n\n.bi-skip-end::before { content: \"\\f558\"; }\n\n.bi-skip-forward-btn-fill::before { content: \"\\f559\"; }\n\n.bi-skip-forward-btn::before { content: \"\\f55a\"; }\n\n.bi-skip-forward-circle-fill::before { content: \"\\f55b\"; }\n\n.bi-skip-forward-circle::before { content: \"\\f55c\"; }\n\n.bi-skip-forward-fill::before { content: \"\\f55d\"; }\n\n.bi-skip-forward::before { content: \"\\f55e\"; }\n\n.bi-skip-start-btn-fill::before { content: \"\\f55f\"; }\n\n.bi-skip-start-btn::before { content: \"\\f560\"; }\n\n.bi-skip-start-circle-fill::before { content: \"\\f561\"; }\n\n.bi-skip-start-circle::before { content: \"\\f562\"; }\n\n.bi-skip-start-fill::before { content: \"\\f563\"; }\n\n.bi-skip-start::before { content: \"\\f564\"; }\n\n.bi-slack::before { content: \"\\f565\"; }\n\n.bi-slash-circle-fill::before { content: \"\\f566\"; }\n\n.bi-slash-circle::before { content: \"\\f567\"; }\n\n.bi-slash-square-fill::before { content: \"\\f568\"; }\n\n.bi-slash-square::before { content: \"\\f569\"; }\n\n.bi-slash::before { content: \"\\f56a\"; }\n\n.bi-sliders::before { content: \"\\f56b\"; }\n\n.bi-smartwatch::before { content: \"\\f56c\"; }\n\n.bi-snow::before { content: \"\\f56d\"; }\n\n.bi-snow2::before { content: \"\\f56e\"; }\n\n.bi-snow3::before { content: \"\\f56f\"; }\n\n.bi-sort-alpha-down-alt::before { content: \"\\f570\"; }\n\n.bi-sort-alpha-down::before { content: \"\\f571\"; }\n\n.bi-sort-alpha-up-alt::before { content: \"\\f572\"; }\n\n.bi-sort-alpha-up::before { content: \"\\f573\"; }\n\n.bi-sort-down-alt::before { content: \"\\f574\"; }\n\n.bi-sort-down::before { content: \"\\f575\"; }\n\n.bi-sort-numeric-down-alt::before { content: \"\\f576\"; }\n\n.bi-sort-numeric-down::before { content: \"\\f577\"; }\n\n.bi-sort-numeric-up-alt::before { content: \"\\f578\"; }\n\n.bi-sort-numeric-up::before { content: \"\\f579\"; }\n\n.bi-sort-up-alt::before { content: \"\\f57a\"; }\n\n.bi-sort-up::before { content: \"\\f57b\"; }\n\n.bi-soundwave::before { content: \"\\f57c\"; }\n\n.bi-speaker-fill::before { content: \"\\f57d\"; }\n\n.bi-speaker::before { content: \"\\f57e\"; }\n\n.bi-speedometer::before { content: \"\\f57f\"; }\n\n.bi-speedometer2::before { content: \"\\f580\"; }\n\n.bi-spellcheck::before { content: \"\\f581\"; }\n\n.bi-square-fill::before { content: \"\\f582\"; }\n\n.bi-square-half::before { content: \"\\f583\"; }\n\n.bi-square::before { content: \"\\f584\"; }\n\n.bi-stack::before { content: \"\\f585\"; }\n\n.bi-star-fill::before { content: \"\\f586\"; }\n\n.bi-star-half::before { content: \"\\f587\"; }\n\n.bi-star::before { content: \"\\f588\"; }\n\n.bi-stars::before { content: \"\\f589\"; }\n\n.bi-stickies-fill::before { content: \"\\f58a\"; }\n\n.bi-stickies::before { content: \"\\f58b\"; }\n\n.bi-sticky-fill::before { content: \"\\f58c\"; }\n\n.bi-sticky::before { content: \"\\f58d\"; }\n\n.bi-stop-btn-fill::before { content: \"\\f58e\"; }\n\n.bi-stop-btn::before { content: \"\\f58f\"; }\n\n.bi-stop-circle-fill::before { content: \"\\f590\"; }\n\n.bi-stop-circle::before { content: \"\\f591\"; }\n\n.bi-stop-fill::before { content: \"\\f592\"; }\n\n.bi-stop::before { content: \"\\f593\"; }\n\n.bi-stoplights-fill::before { content: \"\\f594\"; }\n\n.bi-stoplights::before { content: \"\\f595\"; }\n\n.bi-stopwatch-fill::before { content: \"\\f596\"; }\n\n.bi-stopwatch::before { content: \"\\f597\"; }\n\n.bi-subtract::before { content: \"\\f598\"; }\n\n.bi-suit-club-fill::before { content: \"\\f599\"; }\n\n.bi-suit-club::before { content: \"\\f59a\"; }\n\n.bi-suit-diamond-fill::before { content: \"\\f59b\"; }\n\n.bi-suit-diamond::before { content: \"\\f59c\"; }\n\n.bi-suit-heart-fill::before { content: \"\\f59d\"; }\n\n.bi-suit-heart::before { content: \"\\f59e\"; }\n\n.bi-suit-spade-fill::before { content: \"\\f59f\"; }\n\n.bi-suit-spade::before { content: \"\\f5a0\"; }\n\n.bi-sun-fill::before { content: \"\\f5a1\"; }\n\n.bi-sun::before { content: \"\\f5a2\"; }\n\n.bi-sunglasses::before { content: \"\\f5a3\"; }\n\n.bi-sunrise-fill::before { content: \"\\f5a4\"; }\n\n.bi-sunrise::before { content: \"\\f5a5\"; }\n\n.bi-sunset-fill::before { content: \"\\f5a6\"; }\n\n.bi-sunset::before { content: \"\\f5a7\"; }\n\n.bi-symmetry-horizontal::before { content: \"\\f5a8\"; }\n\n.bi-symmetry-vertical::before { content: \"\\f5a9\"; }\n\n.bi-table::before { content: \"\\f5aa\"; }\n\n.bi-tablet-fill::before { content: \"\\f5ab\"; }\n\n.bi-tablet-landscape-fill::before { content: \"\\f5ac\"; }\n\n.bi-tablet-landscape::before { content: \"\\f5ad\"; }\n\n.bi-tablet::before { content: \"\\f5ae\"; }\n\n.bi-tag-fill::before { content: \"\\f5af\"; }\n\n.bi-tag::before { content: \"\\f5b0\"; }\n\n.bi-tags-fill::before { content: \"\\f5b1\"; }\n\n.bi-tags::before { content: \"\\f5b2\"; }\n\n.bi-telegram::before { content: \"\\f5b3\"; }\n\n.bi-telephone-fill::before { content: \"\\f5b4\"; }\n\n.bi-telephone-forward-fill::before { content: \"\\f5b5\"; }\n\n.bi-telephone-forward::before { content: \"\\f5b6\"; }\n\n.bi-telephone-inbound-fill::before { content: \"\\f5b7\"; }\n\n.bi-telephone-inbound::before { content: \"\\f5b8\"; }\n\n.bi-telephone-minus-fill::before { content: \"\\f5b9\"; }\n\n.bi-telephone-minus::before { content: \"\\f5ba\"; }\n\n.bi-telephone-outbound-fill::before { content: \"\\f5bb\"; }\n\n.bi-telephone-outbound::before { content: \"\\f5bc\"; }\n\n.bi-telephone-plus-fill::before { content: \"\\f5bd\"; }\n\n.bi-telephone-plus::before { content: \"\\f5be\"; }\n\n.bi-telephone-x-fill::before { content: \"\\f5bf\"; }\n\n.bi-telephone-x::before { content: \"\\f5c0\"; }\n\n.bi-telephone::before { content: \"\\f5c1\"; }\n\n.bi-terminal-fill::before { content: \"\\f5c2\"; }\n\n.bi-terminal::before { content: \"\\f5c3\"; }\n\n.bi-text-center::before { content: \"\\f5c4\"; }\n\n.bi-text-indent-left::before { content: \"\\f5c5\"; }\n\n.bi-text-indent-right::before { content: \"\\f5c6\"; }\n\n.bi-text-left::before { content: \"\\f5c7\"; }\n\n.bi-text-paragraph::before { content: \"\\f5c8\"; }\n\n.bi-text-right::before { content: \"\\f5c9\"; }\n\n.bi-textarea-resize::before { content: \"\\f5ca\"; }\n\n.bi-textarea-t::before { content: \"\\f5cb\"; }\n\n.bi-textarea::before { content: \"\\f5cc\"; }\n\n.bi-thermometer-half::before { content: \"\\f5cd\"; }\n\n.bi-thermometer-high::before { content: \"\\f5ce\"; }\n\n.bi-thermometer-low::before { content: \"\\f5cf\"; }\n\n.bi-thermometer-snow::before { content: \"\\f5d0\"; }\n\n.bi-thermometer-sun::before { content: \"\\f5d1\"; }\n\n.bi-thermometer::before { content: \"\\f5d2\"; }\n\n.bi-three-dots-vertical::before { content: \"\\f5d3\"; }\n\n.bi-three-dots::before { content: \"\\f5d4\"; }\n\n.bi-toggle-off::before { content: \"\\f5d5\"; }\n\n.bi-toggle-on::before { content: \"\\f5d6\"; }\n\n.bi-toggle2-off::before { content: \"\\f5d7\"; }\n\n.bi-toggle2-on::before { content: \"\\f5d8\"; }\n\n.bi-toggles::before { content: \"\\f5d9\"; }\n\n.bi-toggles2::before { content: \"\\f5da\"; }\n\n.bi-tools::before { content: \"\\f5db\"; }\n\n.bi-tornado::before { content: \"\\f5dc\"; }\n\n.bi-trash-fill::before { content: \"\\f5dd\"; }\n\n.bi-trash::before { content: \"\\f5de\"; }\n\n.bi-trash2-fill::before { content: \"\\f5df\"; }\n\n.bi-trash2::before { content: \"\\f5e0\"; }\n\n.bi-tree-fill::before { content: \"\\f5e1\"; }\n\n.bi-tree::before { content: \"\\f5e2\"; }\n\n.bi-triangle-fill::before { content: \"\\f5e3\"; }\n\n.bi-triangle-half::before { content: \"\\f5e4\"; }\n\n.bi-triangle::before { content: \"\\f5e5\"; }\n\n.bi-trophy-fill::before { content: \"\\f5e6\"; }\n\n.bi-trophy::before { content: \"\\f5e7\"; }\n\n.bi-tropical-storm::before { content: \"\\f5e8\"; }\n\n.bi-truck-flatbed::before { content: \"\\f5e9\"; }\n\n.bi-truck::before { content: \"\\f5ea\"; }\n\n.bi-tsunami::before { content: \"\\f5eb\"; }\n\n.bi-tv-fill::before { content: \"\\f5ec\"; }\n\n.bi-tv::before { content: \"\\f5ed\"; }\n\n.bi-twitch::before { content: \"\\f5ee\"; }\n\n.bi-twitter::before { content: \"\\f5ef\"; }\n\n.bi-type-bold::before { content: \"\\f5f0\"; }\n\n.bi-type-h1::before { content: \"\\f5f1\"; }\n\n.bi-type-h2::before { content: \"\\f5f2\"; }\n\n.bi-type-h3::before { content: \"\\f5f3\"; }\n\n.bi-type-italic::before { content: \"\\f5f4\"; }\n\n.bi-type-strikethrough::before { content: \"\\f5f5\"; }\n\n.bi-type-underline::before { content: \"\\f5f6\"; }\n\n.bi-type::before { content: \"\\f5f7\"; }\n\n.bi-ui-checks-grid::before { content: \"\\f5f8\"; }\n\n.bi-ui-checks::before { content: \"\\f5f9\"; }\n\n.bi-ui-radios-grid::before { content: \"\\f5fa\"; }\n\n.bi-ui-radios::before { content: \"\\f5fb\"; }\n\n.bi-umbrella-fill::before { content: \"\\f5fc\"; }\n\n.bi-umbrella::before { content: \"\\f5fd\"; }\n\n.bi-union::before { content: \"\\f5fe\"; }\n\n.bi-unlock-fill::before { content: \"\\f5ff\"; }\n\n.bi-unlock::before { content: \"\\f600\"; }\n\n.bi-upc-scan::before { content: \"\\f601\"; }\n\n.bi-upc::before { content: \"\\f602\"; }\n\n.bi-upload::before { content: \"\\f603\"; }\n\n.bi-vector-pen::before { content: \"\\f604\"; }\n\n.bi-view-list::before { content: \"\\f605\"; }\n\n.bi-view-stacked::before { content: \"\\f606\"; }\n\n.bi-vinyl-fill::before { content: \"\\f607\"; }\n\n.bi-vinyl::before { content: \"\\f608\"; }\n\n.bi-voicemail::before { content: \"\\f609\"; }\n\n.bi-volume-down-fill::before { content: \"\\f60a\"; }\n\n.bi-volume-down::before { content: \"\\f60b\"; }\n\n.bi-volume-mute-fill::before { content: \"\\f60c\"; }\n\n.bi-volume-mute::before { content: \"\\f60d\"; }\n\n.bi-volume-off-fill::before { content: \"\\f60e\"; }\n\n.bi-volume-off::before { content: \"\\f60f\"; }\n\n.bi-volume-up-fill::before { content: \"\\f610\"; }\n\n.bi-volume-up::before { content: \"\\f611\"; }\n\n.bi-vr::before { content: \"\\f612\"; }\n\n.bi-wallet-fill::before { content: \"\\f613\"; }\n\n.bi-wallet::before { content: \"\\f614\"; }\n\n.bi-wallet2::before { content: \"\\f615\"; }\n\n.bi-watch::before { content: \"\\f616\"; }\n\n.bi-water::before { content: \"\\f617\"; }\n\n.bi-whatsapp::before { content: \"\\f618\"; }\n\n.bi-wifi-1::before { content: \"\\f619\"; }\n\n.bi-wifi-2::before { content: \"\\f61a\"; }\n\n.bi-wifi-off::before { content: \"\\f61b\"; }\n\n.bi-wifi::before { content: \"\\f61c\"; }\n\n.bi-wind::before { content: \"\\f61d\"; }\n\n.bi-window-dock::before { content: \"\\f61e\"; }\n\n.bi-window-sidebar::before { content: \"\\f61f\"; }\n\n.bi-window::before { content: \"\\f620\"; }\n\n.bi-wrench::before { content: \"\\f621\"; }\n\n.bi-x-circle-fill::before { content: \"\\f622\"; }\n\n.bi-x-circle::before { content: \"\\f623\"; }\n\n.bi-x-diamond-fill::before { content: \"\\f624\"; }\n\n.bi-x-diamond::before { content: \"\\f625\"; }\n\n.bi-x-octagon-fill::before { content: \"\\f626\"; }\n\n.bi-x-octagon::before { content: \"\\f627\"; }\n\n.bi-x-square-fill::before { content: \"\\f628\"; }\n\n.bi-x-square::before { content: \"\\f629\"; }\n\n.bi-x::before { content: \"\\f62a\"; }\n\n.bi-youtube::before { content: \"\\f62b\"; }\n\n.bi-zoom-in::before { content: \"\\f62c\"; }\n\n.bi-zoom-out::before { content: \"\\f62d\"; }\n\n.bi-bank::before { content: \"\\f62e\"; }\n\n.bi-bank2::before { content: \"\\f62f\"; }\n\n.bi-bell-slash-fill::before { content: \"\\f630\"; }\n\n.bi-bell-slash::before { content: \"\\f631\"; }\n\n.bi-cash-coin::before { content: \"\\f632\"; }\n\n.bi-check-lg::before { content: \"\\f633\"; }\n\n.bi-coin::before { content: \"\\f634\"; }\n\n.bi-currency-bitcoin::before { content: \"\\f635\"; }\n\n.bi-currency-dollar::before { content: \"\\f636\"; }\n\n.bi-currency-euro::before { content: \"\\f637\"; }\n\n.bi-currency-exchange::before { content: \"\\f638\"; }\n\n.bi-currency-pound::before { content: \"\\f639\"; }\n\n.bi-currency-yen::before { content: \"\\f63a\"; }\n\n.bi-dash-lg::before { content: \"\\f63b\"; }\n\n.bi-exclamation-lg::before { content: \"\\f63c\"; }\n\n.bi-file-earmark-pdf-fill::before { content: \"\\f63d\"; }\n\n.bi-file-earmark-pdf::before { content: \"\\f63e\"; }\n\n.bi-file-pdf-fill::before { content: \"\\f63f\"; }\n\n.bi-file-pdf::before { content: \"\\f640\"; }\n\n.bi-gender-ambiguous::before { content: \"\\f641\"; }\n\n.bi-gender-female::before { content: \"\\f642\"; }\n\n.bi-gender-male::before { content: \"\\f643\"; }\n\n.bi-gender-trans::before { content: \"\\f644\"; }\n\n.bi-headset-vr::before { content: \"\\f645\"; }\n\n.bi-info-lg::before { content: \"\\f646\"; }\n\n.bi-mastodon::before { content: \"\\f647\"; }\n\n.bi-messenger::before { content: \"\\f648\"; }\n\n.bi-piggy-bank-fill::before { content: \"\\f649\"; }\n\n.bi-piggy-bank::before { content: \"\\f64a\"; }\n\n.bi-pin-map-fill::before { content: \"\\f64b\"; }\n\n.bi-pin-map::before { content: \"\\f64c\"; }\n\n.bi-plus-lg::before { content: \"\\f64d\"; }\n\n.bi-question-lg::before { content: \"\\f64e\"; }\n\n.bi-recycle::before { content: \"\\f64f\"; }\n\n.bi-reddit::before { content: \"\\f650\"; }\n\n.bi-safe-fill::before { content: \"\\f651\"; }\n\n.bi-safe2-fill::before { content: \"\\f652\"; }\n\n.bi-safe2::before { content: \"\\f653\"; }\n\n.bi-sd-card-fill::before { content: \"\\f654\"; }\n\n.bi-sd-card::before { content: \"\\f655\"; }\n\n.bi-skype::before { content: \"\\f656\"; }\n\n.bi-slash-lg::before { content: \"\\f657\"; }\n\n.bi-translate::before { content: \"\\f658\"; }\n\n.bi-x-lg::before { content: \"\\f659\"; }\n\n.bi-safe::before { content: \"\\f65a\"; }\n\n.bi-apple::before { content: \"\\f65b\"; }\n\n.bi-microsoft::before { content: \"\\f65d\"; }\n\n.bi-windows::before { content: \"\\f65e\"; }\n\n.bi-behance::before { content: \"\\f65c\"; }\n\n.bi-dribbble::before { content: \"\\f65f\"; }\n\n.bi-line::before { content: \"\\f660\"; }\n\n.bi-medium::before { content: \"\\f661\"; }\n\n.bi-paypal::before { content: \"\\f662\"; }\n\n.bi-pinterest::before { content: \"\\f663\"; }\n\n.bi-signal::before { content: \"\\f664\"; }\n\n.bi-snapchat::before { content: \"\\f665\"; }\n\n.bi-spotify::before { content: \"\\f666\"; }\n\n.bi-stack-overflow::before { content: \"\\f667\"; }\n\n.bi-strava::before { content: \"\\f668\"; }\n\n.bi-wordpress::before { content: \"\\f669\"; }\n\n.bi-vimeo::before { content: \"\\f66a\"; }\n\n.bi-activity::before { content: \"\\f66b\"; }\n\n.bi-easel2-fill::before { content: \"\\f66c\"; }\n\n.bi-easel2::before { content: \"\\f66d\"; }\n\n.bi-easel3-fill::before { content: \"\\f66e\"; }\n\n.bi-easel3::before { content: \"\\f66f\"; }\n\n.bi-fan::before { content: \"\\f670\"; }\n\n.bi-fingerprint::before { content: \"\\f671\"; }\n\n.bi-graph-down-arrow::before { content: \"\\f672\"; }\n\n.bi-graph-up-arrow::before { content: \"\\f673\"; }\n\n.bi-hypnotize::before { content: \"\\f674\"; }\n\n.bi-magic::before { content: \"\\f675\"; }\n\n.bi-person-rolodex::before { content: \"\\f676\"; }\n\n.bi-person-video::before { content: \"\\f677\"; }\n\n.bi-person-video2::before { content: \"\\f678\"; }\n\n.bi-person-video3::before { content: \"\\f679\"; }\n\n.bi-person-workspace::before { content: \"\\f67a\"; }\n\n.bi-radioactive::before { content: \"\\f67b\"; }\n\n.bi-webcam-fill::before { content: \"\\f67c\"; }\n\n.bi-webcam::before { content: \"\\f67d\"; }\n\n.bi-yin-yang::before { content: \"\\f67e\"; }\n\n.bi-bandaid-fill::before { content: \"\\f680\"; }\n\n.bi-bandaid::before { content: \"\\f681\"; }\n\n.bi-bluetooth::before { content: \"\\f682\"; }\n\n.bi-body-text::before { content: \"\\f683\"; }\n\n.bi-boombox::before { content: \"\\f684\"; }\n\n.bi-boxes::before { content: \"\\f685\"; }\n\n.bi-dpad-fill::before { content: \"\\f686\"; }\n\n.bi-dpad::before { content: \"\\f687\"; }\n\n.bi-ear-fill::before { content: \"\\f688\"; }\n\n.bi-ear::before { content: \"\\f689\"; }\n\n.bi-envelope-check-fill::before { content: \"\\f68b\"; }\n\n.bi-envelope-check::before { content: \"\\f68c\"; }\n\n.bi-envelope-dash-fill::before { content: \"\\f68e\"; }\n\n.bi-envelope-dash::before { content: \"\\f68f\"; }\n\n.bi-envelope-exclamation-fill::before { content: \"\\f691\"; }\n\n.bi-envelope-exclamation::before { content: \"\\f692\"; }\n\n.bi-envelope-plus-fill::before { content: \"\\f693\"; }\n\n.bi-envelope-plus::before { content: \"\\f694\"; }\n\n.bi-envelope-slash-fill::before { content: \"\\f696\"; }\n\n.bi-envelope-slash::before { content: \"\\f697\"; }\n\n.bi-envelope-x-fill::before { content: \"\\f699\"; }\n\n.bi-envelope-x::before { content: \"\\f69a\"; }\n\n.bi-explicit-fill::before { content: \"\\f69b\"; }\n\n.bi-explicit::before { content: \"\\f69c\"; }\n\n.bi-git::before { content: \"\\f69d\"; }\n\n.bi-infinity::before { content: \"\\f69e\"; }\n\n.bi-list-columns-reverse::before { content: \"\\f69f\"; }\n\n.bi-list-columns::before { content: \"\\f6a0\"; }\n\n.bi-meta::before { content: \"\\f6a1\"; }\n\n.bi-nintendo-switch::before { content: \"\\f6a4\"; }\n\n.bi-pc-display-horizontal::before { content: \"\\f6a5\"; }\n\n.bi-pc-display::before { content: \"\\f6a6\"; }\n\n.bi-pc-horizontal::before { content: \"\\f6a7\"; }\n\n.bi-pc::before { content: \"\\f6a8\"; }\n\n.bi-playstation::before { content: \"\\f6a9\"; }\n\n.bi-plus-slash-minus::before { content: \"\\f6aa\"; }\n\n.bi-projector-fill::before { content: \"\\f6ab\"; }\n\n.bi-projector::before { content: \"\\f6ac\"; }\n\n.bi-qr-code-scan::before { content: \"\\f6ad\"; }\n\n.bi-qr-code::before { content: \"\\f6ae\"; }\n\n.bi-quora::before { content: \"\\f6af\"; }\n\n.bi-quote::before { content: \"\\f6b0\"; }\n\n.bi-robot::before { content: \"\\f6b1\"; }\n\n.bi-send-check-fill::before { content: \"\\f6b2\"; }\n\n.bi-send-check::before { content: \"\\f6b3\"; }\n\n.bi-send-dash-fill::before { content: \"\\f6b4\"; }\n\n.bi-send-dash::before { content: \"\\f6b5\"; }\n\n.bi-send-exclamation-fill::before { content: \"\\f6b7\"; }\n\n.bi-send-exclamation::before { content: \"\\f6b8\"; }\n\n.bi-send-fill::before { content: \"\\f6b9\"; }\n\n.bi-send-plus-fill::before { content: \"\\f6ba\"; }\n\n.bi-send-plus::before { content: \"\\f6bb\"; }\n\n.bi-send-slash-fill::before { content: \"\\f6bc\"; }\n\n.bi-send-slash::before { content: \"\\f6bd\"; }\n\n.bi-send-x-fill::before { content: \"\\f6be\"; }\n\n.bi-send-x::before { content: \"\\f6bf\"; }\n\n.bi-send::before { content: \"\\f6c0\"; }\n\n.bi-steam::before { content: \"\\f6c1\"; }\n\n.bi-terminal-dash::before { content: \"\\f6c3\"; }\n\n.bi-terminal-plus::before { content: \"\\f6c4\"; }\n\n.bi-terminal-split::before { content: \"\\f6c5\"; }\n\n.bi-ticket-detailed-fill::before { content: \"\\f6c6\"; }\n\n.bi-ticket-detailed::before { content: \"\\f6c7\"; }\n\n.bi-ticket-fill::before { content: \"\\f6c8\"; }\n\n.bi-ticket-perforated-fill::before { content: \"\\f6c9\"; }\n\n.bi-ticket-perforated::before { content: \"\\f6ca\"; }\n\n.bi-ticket::before { content: \"\\f6cb\"; }\n\n.bi-tiktok::before { content: \"\\f6cc\"; }\n\n.bi-window-dash::before { content: \"\\f6cd\"; }\n\n.bi-window-desktop::before { content: \"\\f6ce\"; }\n\n.bi-window-fullscreen::before { content: \"\\f6cf\"; }\n\n.bi-window-plus::before { content: \"\\f6d0\"; }\n\n.bi-window-split::before { content: \"\\f6d1\"; }\n\n.bi-window-stack::before { content: \"\\f6d2\"; }\n\n.bi-window-x::before { content: \"\\f6d3\"; }\n\n.bi-xbox::before { content: \"\\f6d4\"; }\n\n.bi-ethernet::before { content: \"\\f6d5\"; }\n\n.bi-hdmi-fill::before { content: \"\\f6d6\"; }\n\n.bi-hdmi::before { content: \"\\f6d7\"; }\n\n.bi-usb-c-fill::before { content: \"\\f6d8\"; }\n\n.bi-usb-c::before { content: \"\\f6d9\"; }\n\n.bi-usb-fill::before { content: \"\\f6da\"; }\n\n.bi-usb-plug-fill::before { content: \"\\f6db\"; }\n\n.bi-usb-plug::before { content: \"\\f6dc\"; }\n\n.bi-usb-symbol::before { content: \"\\f6dd\"; }\n\n.bi-usb::before { content: \"\\f6de\"; }\n\n.bi-boombox-fill::before { content: \"\\f6df\"; }\n\n.bi-displayport::before { content: \"\\f6e1\"; }\n\n.bi-gpu-card::before { content: \"\\f6e2\"; }\n\n.bi-memory::before { content: \"\\f6e3\"; }\n\n.bi-modem-fill::before { content: \"\\f6e4\"; }\n\n.bi-modem::before { content: \"\\f6e5\"; }\n\n.bi-motherboard-fill::before { content: \"\\f6e6\"; }\n\n.bi-motherboard::before { content: \"\\f6e7\"; }\n\n.bi-optical-audio-fill::before { content: \"\\f6e8\"; }\n\n.bi-optical-audio::before { content: \"\\f6e9\"; }\n\n.bi-pci-card::before { content: \"\\f6ea\"; }\n\n.bi-router-fill::before { content: \"\\f6eb\"; }\n\n.bi-router::before { content: \"\\f6ec\"; }\n\n.bi-thunderbolt-fill::before { content: \"\\f6ef\"; }\n\n.bi-thunderbolt::before { content: \"\\f6f0\"; }\n\n.bi-usb-drive-fill::before { content: \"\\f6f1\"; }\n\n.bi-usb-drive::before { content: \"\\f6f2\"; }\n\n.bi-usb-micro-fill::before { content: \"\\f6f3\"; }\n\n.bi-usb-micro::before { content: \"\\f6f4\"; }\n\n.bi-usb-mini-fill::before { content: \"\\f6f5\"; }\n\n.bi-usb-mini::before { content: \"\\f6f6\"; }\n\n.bi-cloud-haze2::before { content: \"\\f6f7\"; }\n\n.bi-device-hdd-fill::before { content: \"\\f6f8\"; }\n\n.bi-device-hdd::before { content: \"\\f6f9\"; }\n\n.bi-device-ssd-fill::before { content: \"\\f6fa\"; }\n\n.bi-device-ssd::before { content: \"\\f6fb\"; }\n\n.bi-displayport-fill::before { content: \"\\f6fc\"; }\n\n.bi-mortarboard-fill::before { content: \"\\f6fd\"; }\n\n.bi-mortarboard::before { content: \"\\f6fe\"; }\n\n.bi-terminal-x::before { content: \"\\f6ff\"; }\n\n.bi-arrow-through-heart-fill::before { content: \"\\f700\"; }\n\n.bi-arrow-through-heart::before { content: \"\\f701\"; }\n\n.bi-badge-sd-fill::before { content: \"\\f702\"; }\n\n.bi-badge-sd::before { content: \"\\f703\"; }\n\n.bi-bag-heart-fill::before { content: \"\\f704\"; }\n\n.bi-bag-heart::before { content: \"\\f705\"; }\n\n.bi-balloon-fill::before { content: \"\\f706\"; }\n\n.bi-balloon-heart-fill::before { content: \"\\f707\"; }\n\n.bi-balloon-heart::before { content: \"\\f708\"; }\n\n.bi-balloon::before { content: \"\\f709\"; }\n\n.bi-box2-fill::before { content: \"\\f70a\"; }\n\n.bi-box2-heart-fill::before { content: \"\\f70b\"; }\n\n.bi-box2-heart::before { content: \"\\f70c\"; }\n\n.bi-box2::before { content: \"\\f70d\"; }\n\n.bi-braces-asterisk::before { content: \"\\f70e\"; }\n\n.bi-calendar-heart-fill::before { content: \"\\f70f\"; }\n\n.bi-calendar-heart::before { content: \"\\f710\"; }\n\n.bi-calendar2-heart-fill::before { content: \"\\f711\"; }\n\n.bi-calendar2-heart::before { content: \"\\f712\"; }\n\n.bi-chat-heart-fill::before { content: \"\\f713\"; }\n\n.bi-chat-heart::before { content: \"\\f714\"; }\n\n.bi-chat-left-heart-fill::before { content: \"\\f715\"; }\n\n.bi-chat-left-heart::before { content: \"\\f716\"; }\n\n.bi-chat-right-heart-fill::before { content: \"\\f717\"; }\n\n.bi-chat-right-heart::before { content: \"\\f718\"; }\n\n.bi-chat-square-heart-fill::before { content: \"\\f719\"; }\n\n.bi-chat-square-heart::before { content: \"\\f71a\"; }\n\n.bi-clipboard-check-fill::before { content: \"\\f71b\"; }\n\n.bi-clipboard-data-fill::before { content: \"\\f71c\"; }\n\n.bi-clipboard-fill::before { content: \"\\f71d\"; }\n\n.bi-clipboard-heart-fill::before { content: \"\\f71e\"; }\n\n.bi-clipboard-heart::before { content: \"\\f71f\"; }\n\n.bi-clipboard-minus-fill::before { content: \"\\f720\"; }\n\n.bi-clipboard-plus-fill::before { content: \"\\f721\"; }\n\n.bi-clipboard-pulse::before { content: \"\\f722\"; }\n\n.bi-clipboard-x-fill::before { content: \"\\f723\"; }\n\n.bi-clipboard2-check-fill::before { content: \"\\f724\"; }\n\n.bi-clipboard2-check::before { content: \"\\f725\"; }\n\n.bi-clipboard2-data-fill::before { content: \"\\f726\"; }\n\n.bi-clipboard2-data::before { content: \"\\f727\"; }\n\n.bi-clipboard2-fill::before { content: \"\\f728\"; }\n\n.bi-clipboard2-heart-fill::before { content: \"\\f729\"; }\n\n.bi-clipboard2-heart::before { content: \"\\f72a\"; }\n\n.bi-clipboard2-minus-fill::before { content: \"\\f72b\"; }\n\n.bi-clipboard2-minus::before { content: \"\\f72c\"; }\n\n.bi-clipboard2-plus-fill::before { content: \"\\f72d\"; }\n\n.bi-clipboard2-plus::before { content: \"\\f72e\"; }\n\n.bi-clipboard2-pulse-fill::before { content: \"\\f72f\"; }\n\n.bi-clipboard2-pulse::before { content: \"\\f730\"; }\n\n.bi-clipboard2-x-fill::before { content: \"\\f731\"; }\n\n.bi-clipboard2-x::before { content: \"\\f732\"; }\n\n.bi-clipboard2::before { content: \"\\f733\"; }\n\n.bi-emoji-kiss-fill::before { content: \"\\f734\"; }\n\n.bi-emoji-kiss::before { content: \"\\f735\"; }\n\n.bi-envelope-heart-fill::before { content: \"\\f736\"; }\n\n.bi-envelope-heart::before { content: \"\\f737\"; }\n\n.bi-envelope-open-heart-fill::before { content: \"\\f738\"; }\n\n.bi-envelope-open-heart::before { content: \"\\f739\"; }\n\n.bi-envelope-paper-fill::before { content: \"\\f73a\"; }\n\n.bi-envelope-paper-heart-fill::before { content: \"\\f73b\"; }\n\n.bi-envelope-paper-heart::before { content: \"\\f73c\"; }\n\n.bi-envelope-paper::before { content: \"\\f73d\"; }\n\n.bi-filetype-aac::before { content: \"\\f73e\"; }\n\n.bi-filetype-ai::before { content: \"\\f73f\"; }\n\n.bi-filetype-bmp::before { content: \"\\f740\"; }\n\n.bi-filetype-cs::before { content: \"\\f741\"; }\n\n.bi-filetype-css::before { content: \"\\f742\"; }\n\n.bi-filetype-csv::before { content: \"\\f743\"; }\n\n.bi-filetype-doc::before { content: \"\\f744\"; }\n\n.bi-filetype-docx::before { content: \"\\f745\"; }\n\n.bi-filetype-exe::before { content: \"\\f746\"; }\n\n.bi-filetype-gif::before { content: \"\\f747\"; }\n\n.bi-filetype-heic::before { content: \"\\f748\"; }\n\n.bi-filetype-html::before { content: \"\\f749\"; }\n\n.bi-filetype-java::before { content: \"\\f74a\"; }\n\n.bi-filetype-jpg::before { content: \"\\f74b\"; }\n\n.bi-filetype-js::before { content: \"\\f74c\"; }\n\n.bi-filetype-jsx::before { content: \"\\f74d\"; }\n\n.bi-filetype-key::before { content: \"\\f74e\"; }\n\n.bi-filetype-m4p::before { content: \"\\f74f\"; }\n\n.bi-filetype-md::before { content: \"\\f750\"; }\n\n.bi-filetype-mdx::before { content: \"\\f751\"; }\n\n.bi-filetype-mov::before { content: \"\\f752\"; }\n\n.bi-filetype-mp3::before { content: \"\\f753\"; }\n\n.bi-filetype-mp4::before { content: \"\\f754\"; }\n\n.bi-filetype-otf::before { content: \"\\f755\"; }\n\n.bi-filetype-pdf::before { content: \"\\f756\"; }\n\n.bi-filetype-php::before { content: \"\\f757\"; }\n\n.bi-filetype-png::before { content: \"\\f758\"; }\n\n.bi-filetype-ppt::before { content: \"\\f75a\"; }\n\n.bi-filetype-psd::before { content: \"\\f75b\"; }\n\n.bi-filetype-py::before { content: \"\\f75c\"; }\n\n.bi-filetype-raw::before { content: \"\\f75d\"; }\n\n.bi-filetype-rb::before { content: \"\\f75e\"; }\n\n.bi-filetype-sass::before { content: \"\\f75f\"; }\n\n.bi-filetype-scss::before { content: \"\\f760\"; }\n\n.bi-filetype-sh::before { content: \"\\f761\"; }\n\n.bi-filetype-svg::before { content: \"\\f762\"; }\n\n.bi-filetype-tiff::before { content: \"\\f763\"; }\n\n.bi-filetype-tsx::before { content: \"\\f764\"; }\n\n.bi-filetype-ttf::before { content: \"\\f765\"; }\n\n.bi-filetype-txt::before { content: \"\\f766\"; }\n\n.bi-filetype-wav::before { content: \"\\f767\"; }\n\n.bi-filetype-woff::before { content: \"\\f768\"; }\n\n.bi-filetype-xls::before { content: \"\\f76a\"; }\n\n.bi-filetype-xml::before { content: \"\\f76b\"; }\n\n.bi-filetype-yml::before { content: \"\\f76c\"; }\n\n.bi-heart-arrow::before { content: \"\\f76d\"; }\n\n.bi-heart-pulse-fill::before { content: \"\\f76e\"; }\n\n.bi-heart-pulse::before { content: \"\\f76f\"; }\n\n.bi-heartbreak-fill::before { content: \"\\f770\"; }\n\n.bi-heartbreak::before { content: \"\\f771\"; }\n\n.bi-hearts::before { content: \"\\f772\"; }\n\n.bi-hospital-fill::before { content: \"\\f773\"; }\n\n.bi-hospital::before { content: \"\\f774\"; }\n\n.bi-house-heart-fill::before { content: \"\\f775\"; }\n\n.bi-house-heart::before { content: \"\\f776\"; }\n\n.bi-incognito::before { content: \"\\f777\"; }\n\n.bi-magnet-fill::before { content: \"\\f778\"; }\n\n.bi-magnet::before { content: \"\\f779\"; }\n\n.bi-person-heart::before { content: \"\\f77a\"; }\n\n.bi-person-hearts::before { content: \"\\f77b\"; }\n\n.bi-phone-flip::before { content: \"\\f77c\"; }\n\n.bi-plugin::before { content: \"\\f77d\"; }\n\n.bi-postage-fill::before { content: \"\\f77e\"; }\n\n.bi-postage-heart-fill::before { content: \"\\f77f\"; }\n\n.bi-postage-heart::before { content: \"\\f780\"; }\n\n.bi-postage::before { content: \"\\f781\"; }\n\n.bi-postcard-fill::before { content: \"\\f782\"; }\n\n.bi-postcard-heart-fill::before { content: \"\\f783\"; }\n\n.bi-postcard-heart::before { content: \"\\f784\"; }\n\n.bi-postcard::before { content: \"\\f785\"; }\n\n.bi-search-heart-fill::before { content: \"\\f786\"; }\n\n.bi-search-heart::before { content: \"\\f787\"; }\n\n.bi-sliders2-vertical::before { content: \"\\f788\"; }\n\n.bi-sliders2::before { content: \"\\f789\"; }\n\n.bi-trash3-fill::before { content: \"\\f78a\"; }\n\n.bi-trash3::before { content: \"\\f78b\"; }\n\n.bi-valentine::before { content: \"\\f78c\"; }\n\n.bi-valentine2::before { content: \"\\f78d\"; }\n\n.bi-wrench-adjustable-circle-fill::before { content: \"\\f78e\"; }\n\n.bi-wrench-adjustable-circle::before { content: \"\\f78f\"; }\n\n.bi-wrench-adjustable::before { content: \"\\f790\"; }\n\n.bi-filetype-json::before { content: \"\\f791\"; }\n\n.bi-filetype-pptx::before { content: \"\\f792\"; }\n\n.bi-filetype-xlsx::before { content: \"\\f793\"; }\n\n.bi-1-circle-fill::before { content: \"\\f796\"; }\n\n.bi-1-circle::before { content: \"\\f797\"; }\n\n.bi-1-square-fill::before { content: \"\\f798\"; }\n\n.bi-1-square::before { content: \"\\f799\"; }\n\n.bi-2-circle-fill::before { content: \"\\f79c\"; }\n\n.bi-2-circle::before { content: \"\\f79d\"; }\n\n.bi-2-square-fill::before { content: \"\\f79e\"; }\n\n.bi-2-square::before { content: \"\\f79f\"; }\n\n.bi-3-circle-fill::before { content: \"\\f7a2\"; }\n\n.bi-3-circle::before { content: \"\\f7a3\"; }\n\n.bi-3-square-fill::before { content: \"\\f7a4\"; }\n\n.bi-3-square::before { content: \"\\f7a5\"; }\n\n.bi-4-circle-fill::before { content: \"\\f7a8\"; }\n\n.bi-4-circle::before { content: \"\\f7a9\"; }\n\n.bi-4-square-fill::before { content: \"\\f7aa\"; }\n\n.bi-4-square::before { content: \"\\f7ab\"; }\n\n.bi-5-circle-fill::before { content: \"\\f7ae\"; }\n\n.bi-5-circle::before { content: \"\\f7af\"; }\n\n.bi-5-square-fill::before { content: \"\\f7b0\"; }\n\n.bi-5-square::before { content: \"\\f7b1\"; }\n\n.bi-6-circle-fill::before { content: \"\\f7b4\"; }\n\n.bi-6-circle::before { content: \"\\f7b5\"; }\n\n.bi-6-square-fill::before { content: \"\\f7b6\"; }\n\n.bi-6-square::before { content: \"\\f7b7\"; }\n\n.bi-7-circle-fill::before { content: \"\\f7ba\"; }\n\n.bi-7-circle::before { content: \"\\f7bb\"; }\n\n.bi-7-square-fill::before { content: \"\\f7bc\"; }\n\n.bi-7-square::before { content: \"\\f7bd\"; }\n\n.bi-8-circle-fill::before { content: \"\\f7c0\"; }\n\n.bi-8-circle::before { content: \"\\f7c1\"; }\n\n.bi-8-square-fill::before { content: \"\\f7c2\"; }\n\n.bi-8-square::before { content: \"\\f7c3\"; }\n\n.bi-9-circle-fill::before { content: \"\\f7c6\"; }\n\n.bi-9-circle::before { content: \"\\f7c7\"; }\n\n.bi-9-square-fill::before { content: \"\\f7c8\"; }\n\n.bi-9-square::before { content: \"\\f7c9\"; }\n\n.bi-airplane-engines-fill::before { content: \"\\f7ca\"; }\n\n.bi-airplane-engines::before { content: \"\\f7cb\"; }\n\n.bi-airplane-fill::before { content: \"\\f7cc\"; }\n\n.bi-airplane::before { content: \"\\f7cd\"; }\n\n.bi-alexa::before { content: \"\\f7ce\"; }\n\n.bi-alipay::before { content: \"\\f7cf\"; }\n\n.bi-android::before { content: \"\\f7d0\"; }\n\n.bi-android2::before { content: \"\\f7d1\"; }\n\n.bi-box-fill::before { content: \"\\f7d2\"; }\n\n.bi-box-seam-fill::before { content: \"\\f7d3\"; }\n\n.bi-browser-chrome::before { content: \"\\f7d4\"; }\n\n.bi-browser-edge::before { content: \"\\f7d5\"; }\n\n.bi-browser-firefox::before { content: \"\\f7d6\"; }\n\n.bi-browser-safari::before { content: \"\\f7d7\"; }\n\n.bi-c-circle-fill::before { content: \"\\f7da\"; }\n\n.bi-c-circle::before { content: \"\\f7db\"; }\n\n.bi-c-square-fill::before { content: \"\\f7dc\"; }\n\n.bi-c-square::before { content: \"\\f7dd\"; }\n\n.bi-capsule-pill::before { content: \"\\f7de\"; }\n\n.bi-capsule::before { content: \"\\f7df\"; }\n\n.bi-car-front-fill::before { content: \"\\f7e0\"; }\n\n.bi-car-front::before { content: \"\\f7e1\"; }\n\n.bi-cassette-fill::before { content: \"\\f7e2\"; }\n\n.bi-cassette::before { content: \"\\f7e3\"; }\n\n.bi-cc-circle-fill::before { content: \"\\f7e6\"; }\n\n.bi-cc-circle::before { content: \"\\f7e7\"; }\n\n.bi-cc-square-fill::before { content: \"\\f7e8\"; }\n\n.bi-cc-square::before { content: \"\\f7e9\"; }\n\n.bi-cup-hot-fill::before { content: \"\\f7ea\"; }\n\n.bi-cup-hot::before { content: \"\\f7eb\"; }\n\n.bi-currency-rupee::before { content: \"\\f7ec\"; }\n\n.bi-dropbox::before { content: \"\\f7ed\"; }\n\n.bi-escape::before { content: \"\\f7ee\"; }\n\n.bi-fast-forward-btn-fill::before { content: \"\\f7ef\"; }\n\n.bi-fast-forward-btn::before { content: \"\\f7f0\"; }\n\n.bi-fast-forward-circle-fill::before { content: \"\\f7f1\"; }\n\n.bi-fast-forward-circle::before { content: \"\\f7f2\"; }\n\n.bi-fast-forward-fill::before { content: \"\\f7f3\"; }\n\n.bi-fast-forward::before { content: \"\\f7f4\"; }\n\n.bi-filetype-sql::before { content: \"\\f7f5\"; }\n\n.bi-fire::before { content: \"\\f7f6\"; }\n\n.bi-google-play::before { content: \"\\f7f7\"; }\n\n.bi-h-circle-fill::before { content: \"\\f7fa\"; }\n\n.bi-h-circle::before { content: \"\\f7fb\"; }\n\n.bi-h-square-fill::before { content: \"\\f7fc\"; }\n\n.bi-h-square::before { content: \"\\f7fd\"; }\n\n.bi-indent::before { content: \"\\f7fe\"; }\n\n.bi-lungs-fill::before { content: \"\\f7ff\"; }\n\n.bi-lungs::before { content: \"\\f800\"; }\n\n.bi-microsoft-teams::before { content: \"\\f801\"; }\n\n.bi-p-circle-fill::before { content: \"\\f804\"; }\n\n.bi-p-circle::before { content: \"\\f805\"; }\n\n.bi-p-square-fill::before { content: \"\\f806\"; }\n\n.bi-p-square::before { content: \"\\f807\"; }\n\n.bi-pass-fill::before { content: \"\\f808\"; }\n\n.bi-pass::before { content: \"\\f809\"; }\n\n.bi-prescription::before { content: \"\\f80a\"; }\n\n.bi-prescription2::before { content: \"\\f80b\"; }\n\n.bi-r-circle-fill::before { content: \"\\f80e\"; }\n\n.bi-r-circle::before { content: \"\\f80f\"; }\n\n.bi-r-square-fill::before { content: \"\\f810\"; }\n\n.bi-r-square::before { content: \"\\f811\"; }\n\n.bi-repeat-1::before { content: \"\\f812\"; }\n\n.bi-repeat::before { content: \"\\f813\"; }\n\n.bi-rewind-btn-fill::before { content: \"\\f814\"; }\n\n.bi-rewind-btn::before { content: \"\\f815\"; }\n\n.bi-rewind-circle-fill::before { content: \"\\f816\"; }\n\n.bi-rewind-circle::before { content: \"\\f817\"; }\n\n.bi-rewind-fill::before { content: \"\\f818\"; }\n\n.bi-rewind::before { content: \"\\f819\"; }\n\n.bi-train-freight-front-fill::before { content: \"\\f81a\"; }\n\n.bi-train-freight-front::before { content: \"\\f81b\"; }\n\n.bi-train-front-fill::before { content: \"\\f81c\"; }\n\n.bi-train-front::before { content: \"\\f81d\"; }\n\n.bi-train-lightrail-front-fill::before { content: \"\\f81e\"; }\n\n.bi-train-lightrail-front::before { content: \"\\f81f\"; }\n\n.bi-truck-front-fill::before { content: \"\\f820\"; }\n\n.bi-truck-front::before { content: \"\\f821\"; }\n\n.bi-ubuntu::before { content: \"\\f822\"; }\n\n.bi-unindent::before { content: \"\\f823\"; }\n\n.bi-unity::before { content: \"\\f824\"; }\n\n.bi-universal-access-circle::before { content: \"\\f825\"; }\n\n.bi-universal-access::before { content: \"\\f826\"; }\n\n.bi-virus::before { content: \"\\f827\"; }\n\n.bi-virus2::before { content: \"\\f828\"; }\n\n.bi-wechat::before { content: \"\\f829\"; }\n\n.bi-yelp::before { content: \"\\f82a\"; }\n\n.bi-sign-stop-fill::before { content: \"\\f82b\"; }\n\n.bi-sign-stop-lights-fill::before { content: \"\\f82c\"; }\n\n.bi-sign-stop-lights::before { content: \"\\f82d\"; }\n\n.bi-sign-stop::before { content: \"\\f82e\"; }\n\n.bi-sign-turn-left-fill::before { content: \"\\f82f\"; }\n\n.bi-sign-turn-left::before { content: \"\\f830\"; }\n\n.bi-sign-turn-right-fill::before { content: \"\\f831\"; }\n\n.bi-sign-turn-right::before { content: \"\\f832\"; }\n\n.bi-sign-turn-slight-left-fill::before { content: \"\\f833\"; }\n\n.bi-sign-turn-slight-left::before { content: \"\\f834\"; }\n\n.bi-sign-turn-slight-right-fill::before { content: \"\\f835\"; }\n\n.bi-sign-turn-slight-right::before { content: \"\\f836\"; }\n\n.bi-sign-yield-fill::before { content: \"\\f837\"; }\n\n.bi-sign-yield::before { content: \"\\f838\"; }\n\n.bi-ev-station-fill::before { content: \"\\f839\"; }\n\n.bi-ev-station::before { content: \"\\f83a\"; }\n\n.bi-fuel-pump-diesel-fill::before { content: \"\\f83b\"; }\n\n.bi-fuel-pump-diesel::before { content: \"\\f83c\"; }\n\n.bi-fuel-pump-fill::before { content: \"\\f83d\"; }\n\n.bi-fuel-pump::before { content: \"\\f83e\"; }\n\n.bi-0-circle-fill::before { content: \"\\f83f\"; }\n\n.bi-0-circle::before { content: \"\\f840\"; }\n\n.bi-0-square-fill::before { content: \"\\f841\"; }\n\n.bi-0-square::before { content: \"\\f842\"; }\n\n.bi-rocket-fill::before { content: \"\\f843\"; }\n\n.bi-rocket-takeoff-fill::before { content: \"\\f844\"; }\n\n.bi-rocket-takeoff::before { content: \"\\f845\"; }\n\n.bi-rocket::before { content: \"\\f846\"; }\n\n.bi-stripe::before { content: \"\\f847\"; }\n\n.bi-subscript::before { content: \"\\f848\"; }\n\n.bi-superscript::before { content: \"\\f849\"; }\n\n.bi-trello::before { content: \"\\f84a\"; }\n\n.bi-envelope-at-fill::before { content: \"\\f84b\"; }\n\n.bi-envelope-at::before { content: \"\\f84c\"; }\n\n.bi-regex::before { content: \"\\f84d\"; }\n\n.bi-text-wrap::before { content: \"\\f84e\"; }\n\n.bi-sign-dead-end-fill::before { content: \"\\f84f\"; }\n\n.bi-sign-dead-end::before { content: \"\\f850\"; }\n\n.bi-sign-do-not-enter-fill::before { content: \"\\f851\"; }\n\n.bi-sign-do-not-enter::before { content: \"\\f852\"; }\n\n.bi-sign-intersection-fill::before { content: \"\\f853\"; }\n\n.bi-sign-intersection-side-fill::before { content: \"\\f854\"; }\n\n.bi-sign-intersection-side::before { content: \"\\f855\"; }\n\n.bi-sign-intersection-t-fill::before { content: \"\\f856\"; }\n\n.bi-sign-intersection-t::before { content: \"\\f857\"; }\n\n.bi-sign-intersection-y-fill::before { content: \"\\f858\"; }\n\n.bi-sign-intersection-y::before { content: \"\\f859\"; }\n\n.bi-sign-intersection::before { content: \"\\f85a\"; }\n\n.bi-sign-merge-left-fill::before { content: \"\\f85b\"; }\n\n.bi-sign-merge-left::before { content: \"\\f85c\"; }\n\n.bi-sign-merge-right-fill::before { content: \"\\f85d\"; }\n\n.bi-sign-merge-right::before { content: \"\\f85e\"; }\n\n.bi-sign-no-left-turn-fill::before { content: \"\\f85f\"; }\n\n.bi-sign-no-left-turn::before { content: \"\\f860\"; }\n\n.bi-sign-no-parking-fill::before { content: \"\\f861\"; }\n\n.bi-sign-no-parking::before { content: \"\\f862\"; }\n\n.bi-sign-no-right-turn-fill::before { content: \"\\f863\"; }\n\n.bi-sign-no-right-turn::before { content: \"\\f864\"; }\n\n.bi-sign-railroad-fill::before { content: \"\\f865\"; }\n\n.bi-sign-railroad::before { content: \"\\f866\"; }\n\n.bi-building-add::before { content: \"\\f867\"; }\n\n.bi-building-check::before { content: \"\\f868\"; }\n\n.bi-building-dash::before { content: \"\\f869\"; }\n\n.bi-building-down::before { content: \"\\f86a\"; }\n\n.bi-building-exclamation::before { content: \"\\f86b\"; }\n\n.bi-building-fill-add::before { content: \"\\f86c\"; }\n\n.bi-building-fill-check::before { content: \"\\f86d\"; }\n\n.bi-building-fill-dash::before { content: \"\\f86e\"; }\n\n.bi-building-fill-down::before { content: \"\\f86f\"; }\n\n.bi-building-fill-exclamation::before { content: \"\\f870\"; }\n\n.bi-building-fill-gear::before { content: \"\\f871\"; }\n\n.bi-building-fill-lock::before { content: \"\\f872\"; }\n\n.bi-building-fill-slash::before { content: \"\\f873\"; }\n\n.bi-building-fill-up::before { content: \"\\f874\"; }\n\n.bi-building-fill-x::before { content: \"\\f875\"; }\n\n.bi-building-fill::before { content: \"\\f876\"; }\n\n.bi-building-gear::before { content: \"\\f877\"; }\n\n.bi-building-lock::before { content: \"\\f878\"; }\n\n.bi-building-slash::before { content: \"\\f879\"; }\n\n.bi-building-up::before { content: \"\\f87a\"; }\n\n.bi-building-x::before { content: \"\\f87b\"; }\n\n.bi-buildings-fill::before { content: \"\\f87c\"; }\n\n.bi-buildings::before { content: \"\\f87d\"; }\n\n.bi-bus-front-fill::before { content: \"\\f87e\"; }\n\n.bi-bus-front::before { content: \"\\f87f\"; }\n\n.bi-ev-front-fill::before { content: \"\\f880\"; }\n\n.bi-ev-front::before { content: \"\\f881\"; }\n\n.bi-globe-americas::before { content: \"\\f882\"; }\n\n.bi-globe-asia-australia::before { content: \"\\f883\"; }\n\n.bi-globe-central-south-asia::before { content: \"\\f884\"; }\n\n.bi-globe-europe-africa::before { content: \"\\f885\"; }\n\n.bi-house-add-fill::before { content: \"\\f886\"; }\n\n.bi-house-add::before { content: \"\\f887\"; }\n\n.bi-house-check-fill::before { content: \"\\f888\"; }\n\n.bi-house-check::before { content: \"\\f889\"; }\n\n.bi-house-dash-fill::before { content: \"\\f88a\"; }\n\n.bi-house-dash::before { content: \"\\f88b\"; }\n\n.bi-house-down-fill::before { content: \"\\f88c\"; }\n\n.bi-house-down::before { content: \"\\f88d\"; }\n\n.bi-house-exclamation-fill::before { content: \"\\f88e\"; }\n\n.bi-house-exclamation::before { content: \"\\f88f\"; }\n\n.bi-house-gear-fill::before { content: \"\\f890\"; }\n\n.bi-house-gear::before { content: \"\\f891\"; }\n\n.bi-house-lock-fill::before { content: \"\\f892\"; }\n\n.bi-house-lock::before { content: \"\\f893\"; }\n\n.bi-house-slash-fill::before { content: \"\\f894\"; }\n\n.bi-house-slash::before { content: \"\\f895\"; }\n\n.bi-house-up-fill::before { content: \"\\f896\"; }\n\n.bi-house-up::before { content: \"\\f897\"; }\n\n.bi-house-x-fill::before { content: \"\\f898\"; }\n\n.bi-house-x::before { content: \"\\f899\"; }\n\n.bi-person-add::before { content: \"\\f89a\"; }\n\n.bi-person-down::before { content: \"\\f89b\"; }\n\n.bi-person-exclamation::before { content: \"\\f89c\"; }\n\n.bi-person-fill-add::before { content: \"\\f89d\"; }\n\n.bi-person-fill-check::before { content: \"\\f89e\"; }\n\n.bi-person-fill-dash::before { content: \"\\f89f\"; }\n\n.bi-person-fill-down::before { content: \"\\f8a0\"; }\n\n.bi-person-fill-exclamation::before { content: \"\\f8a1\"; }\n\n.bi-person-fill-gear::before { content: \"\\f8a2\"; }\n\n.bi-person-fill-lock::before { content: \"\\f8a3\"; }\n\n.bi-person-fill-slash::before { content: \"\\f8a4\"; }\n\n.bi-person-fill-up::before { content: \"\\f8a5\"; }\n\n.bi-person-fill-x::before { content: \"\\f8a6\"; }\n\n.bi-person-gear::before { content: \"\\f8a7\"; }\n\n.bi-person-lock::before { content: \"\\f8a8\"; }\n\n.bi-person-slash::before { content: \"\\f8a9\"; }\n\n.bi-person-up::before { content: \"\\f8aa\"; }\n\n.bi-scooter::before { content: \"\\f8ab\"; }\n\n.bi-taxi-front-fill::before { content: \"\\f8ac\"; }\n\n.bi-taxi-front::before { content: \"\\f8ad\"; }\n\n.bi-amd::before { content: \"\\f8ae\"; }\n\n.bi-database-add::before { content: \"\\f8af\"; }\n\n.bi-database-check::before { content: \"\\f8b0\"; }\n\n.bi-database-dash::before { content: \"\\f8b1\"; }\n\n.bi-database-down::before { content: \"\\f8b2\"; }\n\n.bi-database-exclamation::before { content: \"\\f8b3\"; }\n\n.bi-database-fill-add::before { content: \"\\f8b4\"; }\n\n.bi-database-fill-check::before { content: \"\\f8b5\"; }\n\n.bi-database-fill-dash::before { content: \"\\f8b6\"; }\n\n.bi-database-fill-down::before { content: \"\\f8b7\"; }\n\n.bi-database-fill-exclamation::before { content: \"\\f8b8\"; }\n\n.bi-database-fill-gear::before { content: \"\\f8b9\"; }\n\n.bi-database-fill-lock::before { content: \"\\f8ba\"; }\n\n.bi-database-fill-slash::before { content: \"\\f8bb\"; }\n\n.bi-database-fill-up::before { content: \"\\f8bc\"; }\n\n.bi-database-fill-x::before { content: \"\\f8bd\"; }\n\n.bi-database-fill::before { content: \"\\f8be\"; }\n\n.bi-database-gear::before { content: \"\\f8bf\"; }\n\n.bi-database-lock::before { content: \"\\f8c0\"; }\n\n.bi-database-slash::before { content: \"\\f8c1\"; }\n\n.bi-database-up::before { content: \"\\f8c2\"; }\n\n.bi-database-x::before { content: \"\\f8c3\"; }\n\n.bi-database::before { content: \"\\f8c4\"; }\n\n.bi-houses-fill::before { content: \"\\f8c5\"; }\n\n.bi-houses::before { content: \"\\f8c6\"; }\n\n.bi-nvidia::before { content: \"\\f8c7\"; }\n\n.bi-person-vcard-fill::before { content: \"\\f8c8\"; }\n\n.bi-person-vcard::before { content: \"\\f8c9\"; }\n\n.bi-sina-weibo::before { content: \"\\f8ca\"; }\n\n.bi-tencent-qq::before { content: \"\\f8cb\"; }\n\n.bi-wikipedia::before { content: \"\\f8cc\"; }\n\n.bi-alphabet-uppercase::before { content: \"\\f2a5\"; }\n\n.bi-alphabet::before { content: \"\\f68a\"; }\n\n.bi-amazon::before { content: \"\\f68d\"; }\n\n.bi-arrows-collapse-vertical::before { content: \"\\f690\"; }\n\n.bi-arrows-expand-vertical::before { content: \"\\f695\"; }\n\n.bi-arrows-vertical::before { content: \"\\f698\"; }\n\n.bi-arrows::before { content: \"\\f6a2\"; }\n\n.bi-ban-fill::before { content: \"\\f6a3\"; }\n\n.bi-ban::before { content: \"\\f6b6\"; }\n\n.bi-bing::before { content: \"\\f6c2\"; }\n\n.bi-cake::before { content: \"\\f6e0\"; }\n\n.bi-cake2::before { content: \"\\f6ed\"; }\n\n.bi-cookie::before { content: \"\\f6ee\"; }\n\n.bi-copy::before { content: \"\\f759\"; }\n\n.bi-crosshair::before { content: \"\\f769\"; }\n\n.bi-crosshair2::before { content: \"\\f794\"; }\n\n.bi-emoji-astonished-fill::before { content: \"\\f795\"; }\n\n.bi-emoji-astonished::before { content: \"\\f79a\"; }\n\n.bi-emoji-grimace-fill::before { content: \"\\f79b\"; }\n\n.bi-emoji-grimace::before { content: \"\\f7a0\"; }\n\n.bi-emoji-grin-fill::before { content: \"\\f7a1\"; }\n\n.bi-emoji-grin::before { content: \"\\f7a6\"; }\n\n.bi-emoji-surprise-fill::before { content: \"\\f7a7\"; }\n\n.bi-emoji-surprise::before { content: \"\\f7ac\"; }\n\n.bi-emoji-tear-fill::before { content: \"\\f7ad\"; }\n\n.bi-emoji-tear::before { content: \"\\f7b2\"; }\n\n.bi-envelope-arrow-down-fill::before { content: \"\\f7b3\"; }\n\n.bi-envelope-arrow-down::before { content: \"\\f7b8\"; }\n\n.bi-envelope-arrow-up-fill::before { content: \"\\f7b9\"; }\n\n.bi-envelope-arrow-up::before { content: \"\\f7be\"; }\n\n.bi-feather::before { content: \"\\f7bf\"; }\n\n.bi-feather2::before { content: \"\\f7c4\"; }\n\n.bi-floppy-fill::before { content: \"\\f7c5\"; }\n\n.bi-floppy::before { content: \"\\f7d8\"; }\n\n.bi-floppy2-fill::before { content: \"\\f7d9\"; }\n\n.bi-floppy2::before { content: \"\\f7e4\"; }\n\n.bi-gitlab::before { content: \"\\f7e5\"; }\n\n.bi-highlighter::before { content: \"\\f7f8\"; }\n\n.bi-marker-tip::before { content: \"\\f802\"; }\n\n.bi-nvme-fill::before { content: \"\\f803\"; }\n\n.bi-nvme::before { content: \"\\f80c\"; }\n\n.bi-opencollective::before { content: \"\\f80d\"; }\n\n.bi-pci-card-network::before { content: \"\\f8cd\"; }\n\n.bi-pci-card-sound::before { content: \"\\f8ce\"; }\n\n.bi-radar::before { content: \"\\f8cf\"; }\n\n.bi-send-arrow-down-fill::before { content: \"\\f8d0\"; }\n\n.bi-send-arrow-down::before { content: \"\\f8d1\"; }\n\n.bi-send-arrow-up-fill::before { content: \"\\f8d2\"; }\n\n.bi-send-arrow-up::before { content: \"\\f8d3\"; }\n\n.bi-sim-slash-fill::before { content: \"\\f8d4\"; }\n\n.bi-sim-slash::before { content: \"\\f8d5\"; }\n\n.bi-sourceforge::before { content: \"\\f8d6\"; }\n\n.bi-substack::before { content: \"\\f8d7\"; }\n\n.bi-threads-fill::before { content: \"\\f8d8\"; }\n\n.bi-threads::before { content: \"\\f8d9\"; }\n\n.bi-transparency::before { content: \"\\f8da\"; }\n\n.bi-twitter-x::before { content: \"\\f8db\"; }\n\n.bi-type-h4::before { content: \"\\f8dc\"; }\n\n.bi-type-h5::before { content: \"\\f8dd\"; }\n\n.bi-type-h6::before { content: \"\\f8de\"; }\n\n.bi-backpack-fill::before { content: \"\\f8df\"; }\n\n.bi-backpack::before { content: \"\\f8e0\"; }\n\n.bi-backpack2-fill::before { content: \"\\f8e1\"; }\n\n.bi-backpack2::before { content: \"\\f8e2\"; }\n\n.bi-backpack3-fill::before { content: \"\\f8e3\"; }\n\n.bi-backpack3::before { content: \"\\f8e4\"; }\n\n.bi-backpack4-fill::before { content: \"\\f8e5\"; }\n\n.bi-backpack4::before { content: \"\\f8e6\"; }\n\n.bi-brilliance::before { content: \"\\f8e7\"; }\n\n.bi-cake-fill::before { content: \"\\f8e8\"; }\n\n.bi-cake2-fill::before { content: \"\\f8e9\"; }\n\n.bi-duffle-fill::before { content: \"\\f8ea\"; }\n\n.bi-duffle::before { content: \"\\f8eb\"; }\n\n.bi-exposure::before { content: \"\\f8ec\"; }\n\n.bi-gender-neuter::before { content: \"\\f8ed\"; }\n\n.bi-highlights::before { content: \"\\f8ee\"; }\n\n.bi-luggage-fill::before { content: \"\\f8ef\"; }\n\n.bi-luggage::before { content: \"\\f8f0\"; }\n\n.bi-mailbox-flag::before { content: \"\\f8f1\"; }\n\n.bi-mailbox2-flag::before { content: \"\\f8f2\"; }\n\n.bi-noise-reduction::before { content: \"\\f8f3\"; }\n\n.bi-passport-fill::before { content: \"\\f8f4\"; }\n\n.bi-passport::before { content: \"\\f8f5\"; }\n\n.bi-person-arms-up::before { content: \"\\f8f6\"; }\n\n.bi-person-raised-hand::before { content: \"\\f8f7\"; }\n\n.bi-person-standing-dress::before { content: \"\\f8f8\"; }\n\n.bi-person-standing::before { content: \"\\f8f9\"; }\n\n.bi-person-walking::before { content: \"\\f8fa\"; }\n\n.bi-person-wheelchair::before { content: \"\\f8fb\"; }\n\n.bi-shadows::before { content: \"\\f8fc\"; }\n\n.bi-suitcase-fill::before { content: \"\\f8fd\"; }\n\n.bi-suitcase-lg-fill::before { content: \"\\f8fe\"; }\n\n.bi-suitcase-lg::before { content: \"\\f8ff\"; }\n\n.bi-suitcase::before { content: \"\\f900\"; }\n\n.bi-suitcase2-fill::before { content: \"\\f901\"; }\n\n.bi-suitcase2::before { content: \"\\f902\"; }\n\n.bi-vignette::before { content: \"\\f903\"; }\n";
styleInject(css_248z$2);

var css_248z$1 = "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n\n.CodeMirror-linenumbers {}\n\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n\n/* Shown when moving in bi-directional text */\n\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n\n.cm-fat-cursor .CodeMirror-line::selection,\n.cm-fat-cursor .CodeMirror-line > span::selection, \n.cm-fat-cursor .CodeMirror-line > span > span::selection { background: transparent; }\n\n.cm-fat-cursor .CodeMirror-line::-moz-selection,\n.cm-fat-cursor .CodeMirror-line > span::-moz-selection,\n.cm-fat-cursor .CodeMirror-line > span > span::-moz-selection { background: transparent; }\n\n.cm-fat-cursor { caret-color: transparent; }\n\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: 0;\n  overflow: hidden;\n}\n\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n\n.cm-s-default .cm-quote {color: #090;}\n\n.cm-negative {color: #d44;}\n\n.cm-positive {color: #292;}\n\n.cm-header, .cm-strong {font-weight: bold;}\n\n.cm-em {font-style: italic;}\n\n.cm-link {text-decoration: underline;}\n\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n\n.cm-s-default .cm-atom {color: #219;}\n\n.cm-s-default .cm-number {color: #164;}\n\n.cm-s-default .cm-def {color: #00f;}\n\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n\n.cm-s-default .cm-variable-2 {color: #05a;}\n\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n\n.cm-s-default .cm-comment {color: #a50;}\n\n.cm-s-default .cm-string {color: #a11;}\n\n.cm-s-default .cm-string-2 {color: #f50;}\n\n.cm-s-default .cm-meta {color: #555;}\n\n.cm-s-default .cm-qualifier {color: #555;}\n\n.cm-s-default .cm-builtin {color: #30a;}\n\n.cm-s-default .cm-bracket {color: #997;}\n\n.cm-s-default .cm-tag {color: #170;}\n\n.cm-s-default .cm-attribute {color: #00c;}\n\n.cm-s-default .cm-hr {color: #999;}\n\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\n\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 50px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -50px; margin-right: -50px;\n  padding-bottom: 50px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n  z-index: 0;\n}\n\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 50px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n  outline: none;\n}\n\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -50px;\n}\n\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n\n.CodeMirror-wrap pre.CodeMirror-line,\n.CodeMirror-wrap pre.CodeMirror-line-like {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\n\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n\n.CodeMirror-crosshair { cursor: crosshair; }\n\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\n\nspan.CodeMirror-selectedtext { background: none; }\n";
styleInject(css_248z$1);

var javascript = {exports: {}};

var codemirror$2 = {exports: {}};

var codemirror$1 = codemirror$2.exports;

var hasRequiredCodemirror;

function requireCodemirror () {
	if (hasRequiredCodemirror) return codemirror$2.exports;
	hasRequiredCodemirror = 1;
	(function (module, exports) {
		// CodeMirror, copyright (c) by Marijn Haverbeke and others
		// Distributed under an MIT license: https://codemirror.net/5/LICENSE

		// This is CodeMirror (https://codemirror.net/5), a code editor
		// implemented in JavaScript on top of the browser's DOM.
		//
		// You can find some technical background for some of the code below
		// at http://marijnhaverbeke.nl/blog/#cm-internals .

		(function (global, factory) {
		  module.exports = factory() ;
		}(codemirror$1, (function () {
		  // Kludges for bugs and behavior differences that can't be feature
		  // detected are enabled based on userAgent etc sniffing.
		  var userAgent = navigator.userAgent;
		  var platform = navigator.platform;

		  var gecko = /gecko\/\d/i.test(userAgent);
		  var ie_upto10 = /MSIE \d/.test(userAgent);
		  var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
		  var edge = /Edge\/(\d+)/.exec(userAgent);
		  var ie = ie_upto10 || ie_11up || edge;
		  var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1]);
		  var webkit = !edge && /WebKit\//.test(userAgent);
		  var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
		  var chrome = !edge && /Chrome\/(\d+)/.exec(userAgent);
		  var chrome_version = chrome && +chrome[1];
		  var presto = /Opera\//.test(userAgent);
		  var safari = /Apple Computer/.test(navigator.vendor);
		  var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
		  var phantom = /PhantomJS/.test(userAgent);

		  var ios = safari && (/Mobile\/\w+/.test(userAgent) || navigator.maxTouchPoints > 2);
		  var android = /Android/.test(userAgent);
		  // This is woefully incomplete. Suggestions for alternative methods welcome.
		  var mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
		  var mac = ios || /Mac/.test(platform);
		  var chromeOS = /\bCrOS\b/.test(userAgent);
		  var windows = /win/i.test(platform);

		  var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
		  if (presto_version) { presto_version = Number(presto_version[1]); }
		  if (presto_version && presto_version >= 15) { presto = false; webkit = true; }
		  // Some browsers use the wrong event properties to signal cmd/ctrl on OS X
		  var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
		  var captureRightClick = gecko || (ie && ie_version >= 9);

		  function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*") }

		  var rmClass = function(node, cls) {
		    var current = node.className;
		    var match = classTest(cls).exec(current);
		    if (match) {
		      var after = current.slice(match.index + match[0].length);
		      node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
		    }
		  };

		  function removeChildren(e) {
		    for (var count = e.childNodes.length; count > 0; --count)
		      { e.removeChild(e.firstChild); }
		    return e
		  }

		  function removeChildrenAndAdd(parent, e) {
		    return removeChildren(parent).appendChild(e)
		  }

		  function elt(tag, content, className, style) {
		    var e = document.createElement(tag);
		    if (className) { e.className = className; }
		    if (style) { e.style.cssText = style; }
		    if (typeof content == "string") { e.appendChild(document.createTextNode(content)); }
		    else if (content) { for (var i = 0; i < content.length; ++i) { e.appendChild(content[i]); } }
		    return e
		  }
		  // wrapper for elt, which removes the elt from the accessibility tree
		  function eltP(tag, content, className, style) {
		    var e = elt(tag, content, className, style);
		    e.setAttribute("role", "presentation");
		    return e
		  }

		  var range;
		  if (document.createRange) { range = function(node, start, end, endNode) {
		    var r = document.createRange();
		    r.setEnd(endNode || node, end);
		    r.setStart(node, start);
		    return r
		  }; }
		  else { range = function(node, start, end) {
		    var r = document.body.createTextRange();
		    try { r.moveToElementText(node.parentNode); }
		    catch(e) { return r }
		    r.collapse(true);
		    r.moveEnd("character", end);
		    r.moveStart("character", start);
		    return r
		  }; }

		  function contains(parent, child) {
		    if (child.nodeType == 3) // Android browser always returns false when child is a textnode
		      { child = child.parentNode; }
		    if (parent.contains)
		      { return parent.contains(child) }
		    do {
		      if (child.nodeType == 11) { child = child.host; }
		      if (child == parent) { return true }
		    } while (child = child.parentNode)
		  }

		  function activeElt(rootNode) {
		    // IE and Edge may throw an "Unspecified Error" when accessing document.activeElement.
		    // IE < 10 will throw when accessed while the page is loading or in an iframe.
		    // IE > 9 and Edge will throw when accessed in an iframe if document.body is unavailable.
		    var doc = rootNode.ownerDocument || rootNode;
		    var activeElement;
		    try {
		      activeElement = rootNode.activeElement;
		    } catch(e) {
		      activeElement = doc.body || null;
		    }
		    while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement)
		      { activeElement = activeElement.shadowRoot.activeElement; }
		    return activeElement
		  }

		  function addClass(node, cls) {
		    var current = node.className;
		    if (!classTest(cls).test(current)) { node.className += (current ? " " : "") + cls; }
		  }
		  function joinClasses(a, b) {
		    var as = a.split(" ");
		    for (var i = 0; i < as.length; i++)
		      { if (as[i] && !classTest(as[i]).test(b)) { b += " " + as[i]; } }
		    return b
		  }

		  var selectInput = function(node) { node.select(); };
		  if (ios) // Mobile Safari apparently has a bug where select() is broken.
		    { selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length; }; }
		  else if (ie) // Suppress mysterious IE10 errors
		    { selectInput = function(node) { try { node.select(); } catch(_e) {} }; }

		  function doc(cm) { return cm.display.wrapper.ownerDocument }

		  function root(cm) {
		    return rootNode(cm.display.wrapper)
		  }

		  function rootNode(element) {
		    // Detect modern browsers (2017+).
		    return element.getRootNode ? element.getRootNode() : element.ownerDocument
		  }

		  function win(cm) { return doc(cm).defaultView }

		  function bind(f) {
		    var args = Array.prototype.slice.call(arguments, 1);
		    return function(){return f.apply(null, args)}
		  }

		  function copyObj(obj, target, overwrite) {
		    if (!target) { target = {}; }
		    for (var prop in obj)
		      { if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
		        { target[prop] = obj[prop]; } }
		    return target
		  }

		  // Counts the column offset in a string, taking tabs into account.
		  // Used mostly to find indentation.
		  function countColumn(string, end, tabSize, startIndex, startValue) {
		    if (end == null) {
		      end = string.search(/[^\s\u00a0]/);
		      if (end == -1) { end = string.length; }
		    }
		    for (var i = startIndex || 0, n = startValue || 0;;) {
		      var nextTab = string.indexOf("\t", i);
		      if (nextTab < 0 || nextTab >= end)
		        { return n + (end - i) }
		      n += nextTab - i;
		      n += tabSize - (n % tabSize);
		      i = nextTab + 1;
		    }
		  }

		  var Delayed = function() {
		    this.id = null;
		    this.f = null;
		    this.time = 0;
		    this.handler = bind(this.onTimeout, this);
		  };
		  Delayed.prototype.onTimeout = function (self) {
		    self.id = 0;
		    if (self.time <= +new Date) {
		      self.f();
		    } else {
		      setTimeout(self.handler, self.time - +new Date);
		    }
		  };
		  Delayed.prototype.set = function (ms, f) {
		    this.f = f;
		    var time = +new Date + ms;
		    if (!this.id || time < this.time) {
		      clearTimeout(this.id);
		      this.id = setTimeout(this.handler, ms);
		      this.time = time;
		    }
		  };

		  function indexOf(array, elt) {
		    for (var i = 0; i < array.length; ++i)
		      { if (array[i] == elt) { return i } }
		    return -1
		  }

		  // Number of pixels added to scroller and sizer to hide scrollbar
		  var scrollerGap = 50;

		  // Returned or thrown by various protocols to signal 'I'm not
		  // handling this'.
		  var Pass = {toString: function(){return "CodeMirror.Pass"}};

		  // Reused option objects for setSelection & friends
		  var sel_dontScroll = {scroll: false}, sel_mouse = {origin: "*mouse"}, sel_move = {origin: "+move"};

		  // The inverse of countColumn -- find the offset that corresponds to
		  // a particular column.
		  function findColumn(string, goal, tabSize) {
		    for (var pos = 0, col = 0;;) {
		      var nextTab = string.indexOf("\t", pos);
		      if (nextTab == -1) { nextTab = string.length; }
		      var skipped = nextTab - pos;
		      if (nextTab == string.length || col + skipped >= goal)
		        { return pos + Math.min(skipped, goal - col) }
		      col += nextTab - pos;
		      col += tabSize - (col % tabSize);
		      pos = nextTab + 1;
		      if (col >= goal) { return pos }
		    }
		  }

		  var spaceStrs = [""];
		  function spaceStr(n) {
		    while (spaceStrs.length <= n)
		      { spaceStrs.push(lst(spaceStrs) + " "); }
		    return spaceStrs[n]
		  }

		  function lst(arr) { return arr[arr.length-1] }

		  function map(array, f) {
		    var out = [];
		    for (var i = 0; i < array.length; i++) { out[i] = f(array[i], i); }
		    return out
		  }

		  function insertSorted(array, value, score) {
		    var pos = 0, priority = score(value);
		    while (pos < array.length && score(array[pos]) <= priority) { pos++; }
		    array.splice(pos, 0, value);
		  }

		  function nothing() {}

		  function createObj(base, props) {
		    var inst;
		    if (Object.create) {
		      inst = Object.create(base);
		    } else {
		      nothing.prototype = base;
		      inst = new nothing();
		    }
		    if (props) { copyObj(props, inst); }
		    return inst
		  }

		  var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
		  function isWordCharBasic(ch) {
		    return /\w/.test(ch) || ch > "\x80" &&
		      (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))
		  }
		  function isWordChar(ch, helper) {
		    if (!helper) { return isWordCharBasic(ch) }
		    if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) { return true }
		    return helper.test(ch)
		  }

		  function isEmpty(obj) {
		    for (var n in obj) { if (obj.hasOwnProperty(n) && obj[n]) { return false } }
		    return true
		  }

		  // Extending unicode characters. A series of a non-extending char +
		  // any number of extending chars is treated as a single unit as far
		  // as editing and measuring is concerned. This is not fully correct,
		  // since some scripts/fonts/browsers also treat other configurations
		  // of code points as a group.
		  var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
		  function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch) }

		  // Returns a number from the range [`0`; `str.length`] unless `pos` is outside that range.
		  function skipExtendingChars(str, pos, dir) {
		    while ((dir < 0 ? pos > 0 : pos < str.length) && isExtendingChar(str.charAt(pos))) { pos += dir; }
		    return pos
		  }

		  // Returns the value from the range [`from`; `to`] that satisfies
		  // `pred` and is closest to `from`. Assumes that at least `to`
		  // satisfies `pred`. Supports `from` being greater than `to`.
		  function findFirst(pred, from, to) {
		    // At any point we are certain `to` satisfies `pred`, don't know
		    // whether `from` does.
		    var dir = from > to ? -1 : 1;
		    for (;;) {
		      if (from == to) { return from }
		      var midF = (from + to) / 2, mid = dir < 0 ? Math.ceil(midF) : Math.floor(midF);
		      if (mid == from) { return pred(mid) ? from : to }
		      if (pred(mid)) { to = mid; }
		      else { from = mid + dir; }
		    }
		  }

		  // BIDI HELPERS

		  function iterateBidiSections(order, from, to, f) {
		    if (!order) { return f(from, to, "ltr", 0) }
		    var found = false;
		    for (var i = 0; i < order.length; ++i) {
		      var part = order[i];
		      if (part.from < to && part.to > from || from == to && part.to == from) {
		        f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr", i);
		        found = true;
		      }
		    }
		    if (!found) { f(from, to, "ltr"); }
		  }

		  var bidiOther = null;
		  function getBidiPartAt(order, ch, sticky) {
		    var found;
		    bidiOther = null;
		    for (var i = 0; i < order.length; ++i) {
		      var cur = order[i];
		      if (cur.from < ch && cur.to > ch) { return i }
		      if (cur.to == ch) {
		        if (cur.from != cur.to && sticky == "before") { found = i; }
		        else { bidiOther = i; }
		      }
		      if (cur.from == ch) {
		        if (cur.from != cur.to && sticky != "before") { found = i; }
		        else { bidiOther = i; }
		      }
		    }
		    return found != null ? found : bidiOther
		  }

		  // Bidirectional ordering algorithm
		  // See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
		  // that this (partially) implements.

		  // One-char codes used for character types:
		  // L (L):   Left-to-Right
		  // R (R):   Right-to-Left
		  // r (AL):  Right-to-Left Arabic
		  // 1 (EN):  European Number
		  // + (ES):  European Number Separator
		  // % (ET):  European Number Terminator
		  // n (AN):  Arabic Number
		  // , (CS):  Common Number Separator
		  // m (NSM): Non-Spacing Mark
		  // b (BN):  Boundary Neutral
		  // s (B):   Paragraph Separator
		  // t (S):   Segment Separator
		  // w (WS):  Whitespace
		  // N (ON):  Other Neutrals

		  // Returns null if characters are ordered as they appear
		  // (left-to-right), or an array of sections ({from, to, level}
		  // objects) in the order in which they occur visually.
		  var bidiOrdering = (function() {
		    // Character types for codepoints 0 to 0xff
		    var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
		    // Character types for codepoints 0x600 to 0x6f9
		    var arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
		    function charType(code) {
		      if (code <= 0xf7) { return lowTypes.charAt(code) }
		      else if (0x590 <= code && code <= 0x5f4) { return "R" }
		      else if (0x600 <= code && code <= 0x6f9) { return arabicTypes.charAt(code - 0x600) }
		      else if (0x6ee <= code && code <= 0x8ac) { return "r" }
		      else if (0x2000 <= code && code <= 0x200b) { return "w" }
		      else if (code == 0x200c) { return "b" }
		      else { return "L" }
		    }

		    var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
		    var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;

		    function BidiSpan(level, from, to) {
		      this.level = level;
		      this.from = from; this.to = to;
		    }

		    return function(str, direction) {
		      var outerType = direction == "ltr" ? "L" : "R";

		      if (str.length == 0 || direction == "ltr" && !bidiRE.test(str)) { return false }
		      var len = str.length, types = [];
		      for (var i = 0; i < len; ++i)
		        { types.push(charType(str.charCodeAt(i))); }

		      // W1. Examine each non-spacing mark (NSM) in the level run, and
		      // change the type of the NSM to the type of the previous
		      // character. If the NSM is at the start of the level run, it will
		      // get the type of sor.
		      for (var i$1 = 0, prev = outerType; i$1 < len; ++i$1) {
		        var type = types[i$1];
		        if (type == "m") { types[i$1] = prev; }
		        else { prev = type; }
		      }

		      // W2. Search backwards from each instance of a European number
		      // until the first strong type (R, L, AL, or sor) is found. If an
		      // AL is found, change the type of the European number to Arabic
		      // number.
		      // W3. Change all ALs to R.
		      for (var i$2 = 0, cur = outerType; i$2 < len; ++i$2) {
		        var type$1 = types[i$2];
		        if (type$1 == "1" && cur == "r") { types[i$2] = "n"; }
		        else if (isStrong.test(type$1)) { cur = type$1; if (type$1 == "r") { types[i$2] = "R"; } }
		      }

		      // W4. A single European separator between two European numbers
		      // changes to a European number. A single common separator between
		      // two numbers of the same type changes to that type.
		      for (var i$3 = 1, prev$1 = types[0]; i$3 < len - 1; ++i$3) {
		        var type$2 = types[i$3];
		        if (type$2 == "+" && prev$1 == "1" && types[i$3+1] == "1") { types[i$3] = "1"; }
		        else if (type$2 == "," && prev$1 == types[i$3+1] &&
		                 (prev$1 == "1" || prev$1 == "n")) { types[i$3] = prev$1; }
		        prev$1 = type$2;
		      }

		      // W5. A sequence of European terminators adjacent to European
		      // numbers changes to all European numbers.
		      // W6. Otherwise, separators and terminators change to Other
		      // Neutral.
		      for (var i$4 = 0; i$4 < len; ++i$4) {
		        var type$3 = types[i$4];
		        if (type$3 == ",") { types[i$4] = "N"; }
		        else if (type$3 == "%") {
		          var end = (void 0);
		          for (end = i$4 + 1; end < len && types[end] == "%"; ++end) {}
		          var replace = (i$4 && types[i$4-1] == "!") || (end < len && types[end] == "1") ? "1" : "N";
		          for (var j = i$4; j < end; ++j) { types[j] = replace; }
		          i$4 = end - 1;
		        }
		      }

		      // W7. Search backwards from each instance of a European number
		      // until the first strong type (R, L, or sor) is found. If an L is
		      // found, then change the type of the European number to L.
		      for (var i$5 = 0, cur$1 = outerType; i$5 < len; ++i$5) {
		        var type$4 = types[i$5];
		        if (cur$1 == "L" && type$4 == "1") { types[i$5] = "L"; }
		        else if (isStrong.test(type$4)) { cur$1 = type$4; }
		      }

		      // N1. A sequence of neutrals takes the direction of the
		      // surrounding strong text if the text on both sides has the same
		      // direction. European and Arabic numbers act as if they were R in
		      // terms of their influence on neutrals. Start-of-level-run (sor)
		      // and end-of-level-run (eor) are used at level run boundaries.
		      // N2. Any remaining neutrals take the embedding direction.
		      for (var i$6 = 0; i$6 < len; ++i$6) {
		        if (isNeutral.test(types[i$6])) {
		          var end$1 = (void 0);
		          for (end$1 = i$6 + 1; end$1 < len && isNeutral.test(types[end$1]); ++end$1) {}
		          var before = (i$6 ? types[i$6-1] : outerType) == "L";
		          var after = (end$1 < len ? types[end$1] : outerType) == "L";
		          var replace$1 = before == after ? (before ? "L" : "R") : outerType;
		          for (var j$1 = i$6; j$1 < end$1; ++j$1) { types[j$1] = replace$1; }
		          i$6 = end$1 - 1;
		        }
		      }

		      // Here we depart from the documented algorithm, in order to avoid
		      // building up an actual levels array. Since there are only three
		      // levels (0, 1, 2) in an implementation that doesn't take
		      // explicit embedding into account, we can build up the order on
		      // the fly, without following the level-based algorithm.
		      var order = [], m;
		      for (var i$7 = 0; i$7 < len;) {
		        if (countsAsLeft.test(types[i$7])) {
		          var start = i$7;
		          for (++i$7; i$7 < len && countsAsLeft.test(types[i$7]); ++i$7) {}
		          order.push(new BidiSpan(0, start, i$7));
		        } else {
		          var pos = i$7, at = order.length, isRTL = direction == "rtl" ? 1 : 0;
		          for (++i$7; i$7 < len && types[i$7] != "L"; ++i$7) {}
		          for (var j$2 = pos; j$2 < i$7;) {
		            if (countsAsNum.test(types[j$2])) {
		              if (pos < j$2) { order.splice(at, 0, new BidiSpan(1, pos, j$2)); at += isRTL; }
		              var nstart = j$2;
		              for (++j$2; j$2 < i$7 && countsAsNum.test(types[j$2]); ++j$2) {}
		              order.splice(at, 0, new BidiSpan(2, nstart, j$2));
		              at += isRTL;
		              pos = j$2;
		            } else { ++j$2; }
		          }
		          if (pos < i$7) { order.splice(at, 0, new BidiSpan(1, pos, i$7)); }
		        }
		      }
		      if (direction == "ltr") {
		        if (order[0].level == 1 && (m = str.match(/^\s+/))) {
		          order[0].from = m[0].length;
		          order.unshift(new BidiSpan(0, 0, m[0].length));
		        }
		        if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
		          lst(order).to -= m[0].length;
		          order.push(new BidiSpan(0, len - m[0].length, len));
		        }
		      }

		      return direction == "rtl" ? order.reverse() : order
		    }
		  })();

		  // Get the bidi ordering for the given line (and cache it). Returns
		  // false for lines that are fully left-to-right, and an array of
		  // BidiSpan objects otherwise.
		  function getOrder(line, direction) {
		    var order = line.order;
		    if (order == null) { order = line.order = bidiOrdering(line.text, direction); }
		    return order
		  }

		  // EVENT HANDLING

		  // Lightweight event framework. on/off also work on DOM nodes,
		  // registering native DOM handlers.

		  var noHandlers = [];

		  var on = function(emitter, type, f) {
		    if (emitter.addEventListener) {
		      emitter.addEventListener(type, f, false);
		    } else if (emitter.attachEvent) {
		      emitter.attachEvent("on" + type, f);
		    } else {
		      var map = emitter._handlers || (emitter._handlers = {});
		      map[type] = (map[type] || noHandlers).concat(f);
		    }
		  };

		  function getHandlers(emitter, type) {
		    return emitter._handlers && emitter._handlers[type] || noHandlers
		  }

		  function off(emitter, type, f) {
		    if (emitter.removeEventListener) {
		      emitter.removeEventListener(type, f, false);
		    } else if (emitter.detachEvent) {
		      emitter.detachEvent("on" + type, f);
		    } else {
		      var map = emitter._handlers, arr = map && map[type];
		      if (arr) {
		        var index = indexOf(arr, f);
		        if (index > -1)
		          { map[type] = arr.slice(0, index).concat(arr.slice(index + 1)); }
		      }
		    }
		  }

		  function signal(emitter, type /*, values...*/) {
		    var handlers = getHandlers(emitter, type);
		    if (!handlers.length) { return }
		    var args = Array.prototype.slice.call(arguments, 2);
		    for (var i = 0; i < handlers.length; ++i) { handlers[i].apply(null, args); }
		  }

		  // The DOM events that CodeMirror handles can be overridden by
		  // registering a (non-DOM) handler on the editor for the event name,
		  // and preventDefault-ing the event in that handler.
		  function signalDOMEvent(cm, e, override) {
		    if (typeof e == "string")
		      { e = {type: e, preventDefault: function() { this.defaultPrevented = true; }}; }
		    signal(cm, override || e.type, cm, e);
		    return e_defaultPrevented(e) || e.codemirrorIgnore
		  }

		  function signalCursorActivity(cm) {
		    var arr = cm._handlers && cm._handlers.cursorActivity;
		    if (!arr) { return }
		    var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
		    for (var i = 0; i < arr.length; ++i) { if (indexOf(set, arr[i]) == -1)
		      { set.push(arr[i]); } }
		  }

		  function hasHandler(emitter, type) {
		    return getHandlers(emitter, type).length > 0
		  }

		  // Add on and off methods to a constructor's prototype, to make
		  // registering events on such objects more convenient.
		  function eventMixin(ctor) {
		    ctor.prototype.on = function(type, f) {on(this, type, f);};
		    ctor.prototype.off = function(type, f) {off(this, type, f);};
		  }

		  // Due to the fact that we still support jurassic IE versions, some
		  // compatibility wrappers are needed.

		  function e_preventDefault(e) {
		    if (e.preventDefault) { e.preventDefault(); }
		    else { e.returnValue = false; }
		  }
		  function e_stopPropagation(e) {
		    if (e.stopPropagation) { e.stopPropagation(); }
		    else { e.cancelBubble = true; }
		  }
		  function e_defaultPrevented(e) {
		    return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false
		  }
		  function e_stop(e) {e_preventDefault(e); e_stopPropagation(e);}

		  function e_target(e) {return e.target || e.srcElement}
		  function e_button(e) {
		    var b = e.which;
		    if (b == null) {
		      if (e.button & 1) { b = 1; }
		      else if (e.button & 2) { b = 3; }
		      else if (e.button & 4) { b = 2; }
		    }
		    if (mac && e.ctrlKey && b == 1) { b = 3; }
		    return b
		  }

		  // Detect drag-and-drop
		  var dragAndDrop = function() {
		    // There is *some* kind of drag-and-drop support in IE6-8, but I
		    // couldn't get it to work yet.
		    if (ie && ie_version < 9) { return false }
		    var div = elt('div');
		    return "draggable" in div || "dragDrop" in div
		  }();

		  var zwspSupported;
		  function zeroWidthElement(measure) {
		    if (zwspSupported == null) {
		      var test = elt("span", "\u200b");
		      removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
		      if (measure.firstChild.offsetHeight != 0)
		        { zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8); }
		    }
		    var node = zwspSupported ? elt("span", "\u200b") :
		      elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
		    node.setAttribute("cm-text", "");
		    return node
		  }

		  // Feature-detect IE's crummy client rect reporting for bidi text
		  var badBidiRects;
		  function hasBadBidiRects(measure) {
		    if (badBidiRects != null) { return badBidiRects }
		    var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"));
		    var r0 = range(txt, 0, 1).getBoundingClientRect();
		    var r1 = range(txt, 1, 2).getBoundingClientRect();
		    removeChildren(measure);
		    if (!r0 || r0.left == r0.right) { return false } // Safari returns null in some cases (#2780)
		    return badBidiRects = (r1.right - r0.right < 3)
		  }

		  // See if "".split is the broken IE version, if so, provide an
		  // alternative way to split lines.
		  var splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? function (string) {
		    var pos = 0, result = [], l = string.length;
		    while (pos <= l) {
		      var nl = string.indexOf("\n", pos);
		      if (nl == -1) { nl = string.length; }
		      var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
		      var rt = line.indexOf("\r");
		      if (rt != -1) {
		        result.push(line.slice(0, rt));
		        pos += rt + 1;
		      } else {
		        result.push(line);
		        pos = nl + 1;
		      }
		    }
		    return result
		  } : function (string) { return string.split(/\r\n?|\n/); };

		  var hasSelection = window.getSelection ? function (te) {
		    try { return te.selectionStart != te.selectionEnd }
		    catch(e) { return false }
		  } : function (te) {
		    var range;
		    try {range = te.ownerDocument.selection.createRange();}
		    catch(e) {}
		    if (!range || range.parentElement() != te) { return false }
		    return range.compareEndPoints("StartToEnd", range) != 0
		  };

		  var hasCopyEvent = (function () {
		    var e = elt("div");
		    if ("oncopy" in e) { return true }
		    e.setAttribute("oncopy", "return;");
		    return typeof e.oncopy == "function"
		  })();

		  var badZoomedRects = null;
		  function hasBadZoomedRects(measure) {
		    if (badZoomedRects != null) { return badZoomedRects }
		    var node = removeChildrenAndAdd(measure, elt("span", "x"));
		    var normal = node.getBoundingClientRect();
		    var fromRange = range(node, 0, 1).getBoundingClientRect();
		    return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1
		  }

		  // Known modes, by name and by MIME
		  var modes = {}, mimeModes = {};

		  // Extra arguments are stored as the mode's dependencies, which is
		  // used by (legacy) mechanisms like loadmode.js to automatically
		  // load a mode. (Preferred mechanism is the require/define calls.)
		  function defineMode(name, mode) {
		    if (arguments.length > 2)
		      { mode.dependencies = Array.prototype.slice.call(arguments, 2); }
		    modes[name] = mode;
		  }

		  function defineMIME(mime, spec) {
		    mimeModes[mime] = spec;
		  }

		  // Given a MIME type, a {name, ...options} config object, or a name
		  // string, return a mode config object.
		  function resolveMode(spec) {
		    if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
		      spec = mimeModes[spec];
		    } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
		      var found = mimeModes[spec.name];
		      if (typeof found == "string") { found = {name: found}; }
		      spec = createObj(found, spec);
		      spec.name = found.name;
		    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
		      return resolveMode("application/xml")
		    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
		      return resolveMode("application/json")
		    }
		    if (typeof spec == "string") { return {name: spec} }
		    else { return spec || {name: "null"} }
		  }

		  // Given a mode spec (anything that resolveMode accepts), find and
		  // initialize an actual mode object.
		  function getMode(options, spec) {
		    spec = resolveMode(spec);
		    var mfactory = modes[spec.name];
		    if (!mfactory) { return getMode(options, "text/plain") }
		    var modeObj = mfactory(options, spec);
		    if (modeExtensions.hasOwnProperty(spec.name)) {
		      var exts = modeExtensions[spec.name];
		      for (var prop in exts) {
		        if (!exts.hasOwnProperty(prop)) { continue }
		        if (modeObj.hasOwnProperty(prop)) { modeObj["_" + prop] = modeObj[prop]; }
		        modeObj[prop] = exts[prop];
		      }
		    }
		    modeObj.name = spec.name;
		    if (spec.helperType) { modeObj.helperType = spec.helperType; }
		    if (spec.modeProps) { for (var prop$1 in spec.modeProps)
		      { modeObj[prop$1] = spec.modeProps[prop$1]; } }

		    return modeObj
		  }

		  // This can be used to attach properties to mode objects from
		  // outside the actual mode definition.
		  var modeExtensions = {};
		  function extendMode(mode, properties) {
		    var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
		    copyObj(properties, exts);
		  }

		  function copyState(mode, state) {
		    if (state === true) { return state }
		    if (mode.copyState) { return mode.copyState(state) }
		    var nstate = {};
		    for (var n in state) {
		      var val = state[n];
		      if (val instanceof Array) { val = val.concat([]); }
		      nstate[n] = val;
		    }
		    return nstate
		  }

		  // Given a mode and a state (for that mode), find the inner mode and
		  // state at the position that the state refers to.
		  function innerMode(mode, state) {
		    var info;
		    while (mode.innerMode) {
		      info = mode.innerMode(state);
		      if (!info || info.mode == mode) { break }
		      state = info.state;
		      mode = info.mode;
		    }
		    return info || {mode: mode, state: state}
		  }

		  function startState(mode, a1, a2) {
		    return mode.startState ? mode.startState(a1, a2) : true
		  }

		  // STRING STREAM

		  // Fed to the mode parsers, provides helper functions to make
		  // parsers more succinct.

		  var StringStream = function(string, tabSize, lineOracle) {
		    this.pos = this.start = 0;
		    this.string = string;
		    this.tabSize = tabSize || 8;
		    this.lastColumnPos = this.lastColumnValue = 0;
		    this.lineStart = 0;
		    this.lineOracle = lineOracle;
		  };

		  StringStream.prototype.eol = function () {return this.pos >= this.string.length};
		  StringStream.prototype.sol = function () {return this.pos == this.lineStart};
		  StringStream.prototype.peek = function () {return this.string.charAt(this.pos) || undefined};
		  StringStream.prototype.next = function () {
		    if (this.pos < this.string.length)
		      { return this.string.charAt(this.pos++) }
		  };
		  StringStream.prototype.eat = function (match) {
		    var ch = this.string.charAt(this.pos);
		    var ok;
		    if (typeof match == "string") { ok = ch == match; }
		    else { ok = ch && (match.test ? match.test(ch) : match(ch)); }
		    if (ok) {++this.pos; return ch}
		  };
		  StringStream.prototype.eatWhile = function (match) {
		    var start = this.pos;
		    while (this.eat(match)){}
		    return this.pos > start
		  };
		  StringStream.prototype.eatSpace = function () {
		    var start = this.pos;
		    while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) { ++this.pos; }
		    return this.pos > start
		  };
		  StringStream.prototype.skipToEnd = function () {this.pos = this.string.length;};
		  StringStream.prototype.skipTo = function (ch) {
		    var found = this.string.indexOf(ch, this.pos);
		    if (found > -1) {this.pos = found; return true}
		  };
		  StringStream.prototype.backUp = function (n) {this.pos -= n;};
		  StringStream.prototype.column = function () {
		    if (this.lastColumnPos < this.start) {
		      this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
		      this.lastColumnPos = this.start;
		    }
		    return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
		  };
		  StringStream.prototype.indentation = function () {
		    return countColumn(this.string, null, this.tabSize) -
		      (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
		  };
		  StringStream.prototype.match = function (pattern, consume, caseInsensitive) {
		    if (typeof pattern == "string") {
		      var cased = function (str) { return caseInsensitive ? str.toLowerCase() : str; };
		      var substr = this.string.substr(this.pos, pattern.length);
		      if (cased(substr) == cased(pattern)) {
		        if (consume !== false) { this.pos += pattern.length; }
		        return true
		      }
		    } else {
		      var match = this.string.slice(this.pos).match(pattern);
		      if (match && match.index > 0) { return null }
		      if (match && consume !== false) { this.pos += match[0].length; }
		      return match
		    }
		  };
		  StringStream.prototype.current = function (){return this.string.slice(this.start, this.pos)};
		  StringStream.prototype.hideFirstChars = function (n, inner) {
		    this.lineStart += n;
		    try { return inner() }
		    finally { this.lineStart -= n; }
		  };
		  StringStream.prototype.lookAhead = function (n) {
		    var oracle = this.lineOracle;
		    return oracle && oracle.lookAhead(n)
		  };
		  StringStream.prototype.baseToken = function () {
		    var oracle = this.lineOracle;
		    return oracle && oracle.baseToken(this.pos)
		  };

		  // Find the line object corresponding to the given line number.
		  function getLine(doc, n) {
		    n -= doc.first;
		    if (n < 0 || n >= doc.size) { throw new Error("There is no line " + (n + doc.first) + " in the document.") }
		    var chunk = doc;
		    while (!chunk.lines) {
		      for (var i = 0;; ++i) {
		        var child = chunk.children[i], sz = child.chunkSize();
		        if (n < sz) { chunk = child; break }
		        n -= sz;
		      }
		    }
		    return chunk.lines[n]
		  }

		  // Get the part of a document between two positions, as an array of
		  // strings.
		  function getBetween(doc, start, end) {
		    var out = [], n = start.line;
		    doc.iter(start.line, end.line + 1, function (line) {
		      var text = line.text;
		      if (n == end.line) { text = text.slice(0, end.ch); }
		      if (n == start.line) { text = text.slice(start.ch); }
		      out.push(text);
		      ++n;
		    });
		    return out
		  }
		  // Get the lines between from and to, as array of strings.
		  function getLines(doc, from, to) {
		    var out = [];
		    doc.iter(from, to, function (line) { out.push(line.text); }); // iter aborts when callback returns truthy value
		    return out
		  }

		  // Update the height of a line, propagating the height change
		  // upwards to parent nodes.
		  function updateLineHeight(line, height) {
		    var diff = height - line.height;
		    if (diff) { for (var n = line; n; n = n.parent) { n.height += diff; } }
		  }

		  // Given a line object, find its line number by walking up through
		  // its parent links.
		  function lineNo(line) {
		    if (line.parent == null) { return null }
		    var cur = line.parent, no = indexOf(cur.lines, line);
		    for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
		      for (var i = 0;; ++i) {
		        if (chunk.children[i] == cur) { break }
		        no += chunk.children[i].chunkSize();
		      }
		    }
		    return no + cur.first
		  }

		  // Find the line at the given vertical position, using the height
		  // information in the document tree.
		  function lineAtHeight(chunk, h) {
		    var n = chunk.first;
		    outer: do {
		      for (var i$1 = 0; i$1 < chunk.children.length; ++i$1) {
		        var child = chunk.children[i$1], ch = child.height;
		        if (h < ch) { chunk = child; continue outer }
		        h -= ch;
		        n += child.chunkSize();
		      }
		      return n
		    } while (!chunk.lines)
		    var i = 0;
		    for (; i < chunk.lines.length; ++i) {
		      var line = chunk.lines[i], lh = line.height;
		      if (h < lh) { break }
		      h -= lh;
		    }
		    return n + i
		  }

		  function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size}

		  function lineNumberFor(options, i) {
		    return String(options.lineNumberFormatter(i + options.firstLineNumber))
		  }

		  // A Pos instance represents a position within the text.
		  function Pos(line, ch, sticky) {
		    if ( sticky === void 0 ) sticky = null;

		    if (!(this instanceof Pos)) { return new Pos(line, ch, sticky) }
		    this.line = line;
		    this.ch = ch;
		    this.sticky = sticky;
		  }

		  // Compare two positions, return 0 if they are the same, a negative
		  // number when a is less, and a positive number otherwise.
		  function cmp(a, b) { return a.line - b.line || a.ch - b.ch }

		  function equalCursorPos(a, b) { return a.sticky == b.sticky && cmp(a, b) == 0 }

		  function copyPos(x) {return Pos(x.line, x.ch)}
		  function maxPos(a, b) { return cmp(a, b) < 0 ? b : a }
		  function minPos(a, b) { return cmp(a, b) < 0 ? a : b }

		  // Most of the external API clips given positions to make sure they
		  // actually exist within the document.
		  function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1))}
		  function clipPos(doc, pos) {
		    if (pos.line < doc.first) { return Pos(doc.first, 0) }
		    var last = doc.first + doc.size - 1;
		    if (pos.line > last) { return Pos(last, getLine(doc, last).text.length) }
		    return clipToLen(pos, getLine(doc, pos.line).text.length)
		  }
		  function clipToLen(pos, linelen) {
		    var ch = pos.ch;
		    if (ch == null || ch > linelen) { return Pos(pos.line, linelen) }
		    else if (ch < 0) { return Pos(pos.line, 0) }
		    else { return pos }
		  }
		  function clipPosArray(doc, array) {
		    var out = [];
		    for (var i = 0; i < array.length; i++) { out[i] = clipPos(doc, array[i]); }
		    return out
		  }

		  var SavedContext = function(state, lookAhead) {
		    this.state = state;
		    this.lookAhead = lookAhead;
		  };

		  var Context = function(doc, state, line, lookAhead) {
		    this.state = state;
		    this.doc = doc;
		    this.line = line;
		    this.maxLookAhead = lookAhead || 0;
		    this.baseTokens = null;
		    this.baseTokenPos = 1;
		  };

		  Context.prototype.lookAhead = function (n) {
		    var line = this.doc.getLine(this.line + n);
		    if (line != null && n > this.maxLookAhead) { this.maxLookAhead = n; }
		    return line
		  };

		  Context.prototype.baseToken = function (n) {
		    if (!this.baseTokens) { return null }
		    while (this.baseTokens[this.baseTokenPos] <= n)
		      { this.baseTokenPos += 2; }
		    var type = this.baseTokens[this.baseTokenPos + 1];
		    return {type: type && type.replace(/( |^)overlay .*/, ""),
		            size: this.baseTokens[this.baseTokenPos] - n}
		  };

		  Context.prototype.nextLine = function () {
		    this.line++;
		    if (this.maxLookAhead > 0) { this.maxLookAhead--; }
		  };

		  Context.fromSaved = function (doc, saved, line) {
		    if (saved instanceof SavedContext)
		      { return new Context(doc, copyState(doc.mode, saved.state), line, saved.lookAhead) }
		    else
		      { return new Context(doc, copyState(doc.mode, saved), line) }
		  };

		  Context.prototype.save = function (copy) {
		    var state = copy !== false ? copyState(this.doc.mode, this.state) : this.state;
		    return this.maxLookAhead > 0 ? new SavedContext(state, this.maxLookAhead) : state
		  };


		  // Compute a style array (an array starting with a mode generation
		  // -- for invalidation -- followed by pairs of end positions and
		  // style strings), which is used to highlight the tokens on the
		  // line.
		  function highlightLine(cm, line, context, forceToEnd) {
		    // A styles array always starts with a number identifying the
		    // mode/overlays that it is based on (for easy invalidation).
		    var st = [cm.state.modeGen], lineClasses = {};
		    // Compute the base array of styles
		    runMode(cm, line.text, cm.doc.mode, context, function (end, style) { return st.push(end, style); },
		            lineClasses, forceToEnd);
		    var state = context.state;

		    // Run overlays, adjust style array.
		    var loop = function ( o ) {
		      context.baseTokens = st;
		      var overlay = cm.state.overlays[o], i = 1, at = 0;
		      context.state = true;
		      runMode(cm, line.text, overlay.mode, context, function (end, style) {
		        var start = i;
		        // Ensure there's a token end at the current position, and that i points at it
		        while (at < end) {
		          var i_end = st[i];
		          if (i_end > end)
		            { st.splice(i, 1, end, st[i+1], i_end); }
		          i += 2;
		          at = Math.min(end, i_end);
		        }
		        if (!style) { return }
		        if (overlay.opaque) {
		          st.splice(start, i - start, end, "overlay " + style);
		          i = start + 2;
		        } else {
		          for (; start < i; start += 2) {
		            var cur = st[start+1];
		            st[start+1] = (cur ? cur + " " : "") + "overlay " + style;
		          }
		        }
		      }, lineClasses);
		      context.state = state;
		      context.baseTokens = null;
		      context.baseTokenPos = 1;
		    };

		    for (var o = 0; o < cm.state.overlays.length; ++o) loop( o );

		    return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null}
		  }

		  function getLineStyles(cm, line, updateFrontier) {
		    if (!line.styles || line.styles[0] != cm.state.modeGen) {
		      var context = getContextBefore(cm, lineNo(line));
		      var resetState = line.text.length > cm.options.maxHighlightLength && copyState(cm.doc.mode, context.state);
		      var result = highlightLine(cm, line, context);
		      if (resetState) { context.state = resetState; }
		      line.stateAfter = context.save(!resetState);
		      line.styles = result.styles;
		      if (result.classes) { line.styleClasses = result.classes; }
		      else if (line.styleClasses) { line.styleClasses = null; }
		      if (updateFrontier === cm.doc.highlightFrontier)
		        { cm.doc.modeFrontier = Math.max(cm.doc.modeFrontier, ++cm.doc.highlightFrontier); }
		    }
		    return line.styles
		  }

		  function getContextBefore(cm, n, precise) {
		    var doc = cm.doc, display = cm.display;
		    if (!doc.mode.startState) { return new Context(doc, true, n) }
		    var start = findStartLine(cm, n, precise);
		    var saved = start > doc.first && getLine(doc, start - 1).stateAfter;
		    var context = saved ? Context.fromSaved(doc, saved, start) : new Context(doc, startState(doc.mode), start);

		    doc.iter(start, n, function (line) {
		      processLine(cm, line.text, context);
		      var pos = context.line;
		      line.stateAfter = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo ? context.save() : null;
		      context.nextLine();
		    });
		    if (precise) { doc.modeFrontier = context.line; }
		    return context
		  }

		  // Lightweight form of highlight -- proceed over this line and
		  // update state, but don't save a style array. Used for lines that
		  // aren't currently visible.
		  function processLine(cm, text, context, startAt) {
		    var mode = cm.doc.mode;
		    var stream = new StringStream(text, cm.options.tabSize, context);
		    stream.start = stream.pos = startAt || 0;
		    if (text == "") { callBlankLine(mode, context.state); }
		    while (!stream.eol()) {
		      readToken(mode, stream, context.state);
		      stream.start = stream.pos;
		    }
		  }

		  function callBlankLine(mode, state) {
		    if (mode.blankLine) { return mode.blankLine(state) }
		    if (!mode.innerMode) { return }
		    var inner = innerMode(mode, state);
		    if (inner.mode.blankLine) { return inner.mode.blankLine(inner.state) }
		  }

		  function readToken(mode, stream, state, inner) {
		    for (var i = 0; i < 10; i++) {
		      if (inner) { inner[0] = innerMode(mode, state).mode; }
		      var style = mode.token(stream, state);
		      if (stream.pos > stream.start) { return style }
		    }
		    throw new Error("Mode " + mode.name + " failed to advance stream.")
		  }

		  var Token = function(stream, type, state) {
		    this.start = stream.start; this.end = stream.pos;
		    this.string = stream.current();
		    this.type = type || null;
		    this.state = state;
		  };

		  // Utility for getTokenAt and getLineTokens
		  function takeToken(cm, pos, precise, asArray) {
		    var doc = cm.doc, mode = doc.mode, style;
		    pos = clipPos(doc, pos);
		    var line = getLine(doc, pos.line), context = getContextBefore(cm, pos.line, precise);
		    var stream = new StringStream(line.text, cm.options.tabSize, context), tokens;
		    if (asArray) { tokens = []; }
		    while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
		      stream.start = stream.pos;
		      style = readToken(mode, stream, context.state);
		      if (asArray) { tokens.push(new Token(stream, style, copyState(doc.mode, context.state))); }
		    }
		    return asArray ? tokens : new Token(stream, style, context.state)
		  }

		  function extractLineClasses(type, output) {
		    if (type) { for (;;) {
		      var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
		      if (!lineClass) { break }
		      type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
		      var prop = lineClass[1] ? "bgClass" : "textClass";
		      if (output[prop] == null)
		        { output[prop] = lineClass[2]; }
		      else if (!(new RegExp("(?:^|\\s)" + lineClass[2] + "(?:$|\\s)")).test(output[prop]))
		        { output[prop] += " " + lineClass[2]; }
		    } }
		    return type
		  }

		  // Run the given mode's parser over a line, calling f for each token.
		  function runMode(cm, text, mode, context, f, lineClasses, forceToEnd) {
		    var flattenSpans = mode.flattenSpans;
		    if (flattenSpans == null) { flattenSpans = cm.options.flattenSpans; }
		    var curStart = 0, curStyle = null;
		    var stream = new StringStream(text, cm.options.tabSize, context), style;
		    var inner = cm.options.addModeClass && [null];
		    if (text == "") { extractLineClasses(callBlankLine(mode, context.state), lineClasses); }
		    while (!stream.eol()) {
		      if (stream.pos > cm.options.maxHighlightLength) {
		        flattenSpans = false;
		        if (forceToEnd) { processLine(cm, text, context, stream.pos); }
		        stream.pos = text.length;
		        style = null;
		      } else {
		        style = extractLineClasses(readToken(mode, stream, context.state, inner), lineClasses);
		      }
		      if (inner) {
		        var mName = inner[0].name;
		        if (mName) { style = "m-" + (style ? mName + " " + style : mName); }
		      }
		      if (!flattenSpans || curStyle != style) {
		        while (curStart < stream.start) {
		          curStart = Math.min(stream.start, curStart + 5000);
		          f(curStart, curStyle);
		        }
		        curStyle = style;
		      }
		      stream.start = stream.pos;
		    }
		    while (curStart < stream.pos) {
		      // Webkit seems to refuse to render text nodes longer than 57444
		      // characters, and returns inaccurate measurements in nodes
		      // starting around 5000 chars.
		      var pos = Math.min(stream.pos, curStart + 5000);
		      f(pos, curStyle);
		      curStart = pos;
		    }
		  }

		  // Finds the line to start with when starting a parse. Tries to
		  // find a line with a stateAfter, so that it can start with a
		  // valid state. If that fails, it returns the line with the
		  // smallest indentation, which tends to need the least context to
		  // parse correctly.
		  function findStartLine(cm, n, precise) {
		    var minindent, minline, doc = cm.doc;
		    var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);
		    for (var search = n; search > lim; --search) {
		      if (search <= doc.first) { return doc.first }
		      var line = getLine(doc, search - 1), after = line.stateAfter;
		      if (after && (!precise || search + (after instanceof SavedContext ? after.lookAhead : 0) <= doc.modeFrontier))
		        { return search }
		      var indented = countColumn(line.text, null, cm.options.tabSize);
		      if (minline == null || minindent > indented) {
		        minline = search - 1;
		        minindent = indented;
		      }
		    }
		    return minline
		  }

		  function retreatFrontier(doc, n) {
		    doc.modeFrontier = Math.min(doc.modeFrontier, n);
		    if (doc.highlightFrontier < n - 10) { return }
		    var start = doc.first;
		    for (var line = n - 1; line > start; line--) {
		      var saved = getLine(doc, line).stateAfter;
		      // change is on 3
		      // state on line 1 looked ahead 2 -- so saw 3
		      // test 1 + 2 < 3 should cover this
		      if (saved && (!(saved instanceof SavedContext) || line + saved.lookAhead < n)) {
		        start = line + 1;
		        break
		      }
		    }
		    doc.highlightFrontier = Math.min(doc.highlightFrontier, start);
		  }

		  // Optimize some code when these features are not used.
		  var sawReadOnlySpans = false, sawCollapsedSpans = false;

		  function seeReadOnlySpans() {
		    sawReadOnlySpans = true;
		  }

		  function seeCollapsedSpans() {
		    sawCollapsedSpans = true;
		  }

		  // TEXTMARKER SPANS

		  function MarkedSpan(marker, from, to) {
		    this.marker = marker;
		    this.from = from; this.to = to;
		  }

		  // Search an array of spans for a span matching the given marker.
		  function getMarkedSpanFor(spans, marker) {
		    if (spans) { for (var i = 0; i < spans.length; ++i) {
		      var span = spans[i];
		      if (span.marker == marker) { return span }
		    } }
		  }

		  // Remove a span from an array, returning undefined if no spans are
		  // left (we don't store arrays for lines without spans).
		  function removeMarkedSpan(spans, span) {
		    var r;
		    for (var i = 0; i < spans.length; ++i)
		      { if (spans[i] != span) { (r || (r = [])).push(spans[i]); } }
		    return r
		  }

		  // Add a span to a line.
		  function addMarkedSpan(line, span, op) {
		    var inThisOp = op && window.WeakSet && (op.markedSpans || (op.markedSpans = new WeakSet));
		    if (inThisOp && line.markedSpans && inThisOp.has(line.markedSpans)) {
		      line.markedSpans.push(span);
		    } else {
		      line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
		      if (inThisOp) { inThisOp.add(line.markedSpans); }
		    }
		    span.marker.attachLine(line);
		  }

		  // Used for the algorithm that adjusts markers for a change in the
		  // document. These functions cut an array of spans at a given
		  // character position, returning an array of remaining chunks (or
		  // undefined if nothing remains).
		  function markedSpansBefore(old, startCh, isInsert) {
		    var nw;
		    if (old) { for (var i = 0; i < old.length; ++i) {
		      var span = old[i], marker = span.marker;
		      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
		      if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
		        var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh)
		        ;(nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
		      }
		    } }
		    return nw
		  }
		  function markedSpansAfter(old, endCh, isInsert) {
		    var nw;
		    if (old) { for (var i = 0; i < old.length; ++i) {
		      var span = old[i], marker = span.marker;
		      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
		      if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
		        var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh)
		        ;(nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
		                                              span.to == null ? null : span.to - endCh));
		      }
		    } }
		    return nw
		  }

		  // Given a change object, compute the new set of marker spans that
		  // cover the line in which the change took place. Removes spans
		  // entirely within the change, reconnects spans belonging to the
		  // same marker that appear on both sides of the change, and cuts off
		  // spans partially within the change. Returns an array of span
		  // arrays with one element for each line in (after) the change.
		  function stretchSpansOverChange(doc, change) {
		    if (change.full) { return null }
		    var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
		    var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
		    if (!oldFirst && !oldLast) { return null }

		    var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
		    // Get the spans that 'stick out' on both sides
		    var first = markedSpansBefore(oldFirst, startCh, isInsert);
		    var last = markedSpansAfter(oldLast, endCh, isInsert);

		    // Next, merge those two ends
		    var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
		    if (first) {
		      // Fix up .to properties of first
		      for (var i = 0; i < first.length; ++i) {
		        var span = first[i];
		        if (span.to == null) {
		          var found = getMarkedSpanFor(last, span.marker);
		          if (!found) { span.to = startCh; }
		          else if (sameLine) { span.to = found.to == null ? null : found.to + offset; }
		        }
		      }
		    }
		    if (last) {
		      // Fix up .from in last (or move them into first in case of sameLine)
		      for (var i$1 = 0; i$1 < last.length; ++i$1) {
		        var span$1 = last[i$1];
		        if (span$1.to != null) { span$1.to += offset; }
		        if (span$1.from == null) {
		          var found$1 = getMarkedSpanFor(first, span$1.marker);
		          if (!found$1) {
		            span$1.from = offset;
		            if (sameLine) { (first || (first = [])).push(span$1); }
		          }
		        } else {
		          span$1.from += offset;
		          if (sameLine) { (first || (first = [])).push(span$1); }
		        }
		      }
		    }
		    // Make sure we didn't create any zero-length spans
		    if (first) { first = clearEmptySpans(first); }
		    if (last && last != first) { last = clearEmptySpans(last); }

		    var newMarkers = [first];
		    if (!sameLine) {
		      // Fill gap with whole-line-spans
		      var gap = change.text.length - 2, gapMarkers;
		      if (gap > 0 && first)
		        { for (var i$2 = 0; i$2 < first.length; ++i$2)
		          { if (first[i$2].to == null)
		            { (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i$2].marker, null, null)); } } }
		      for (var i$3 = 0; i$3 < gap; ++i$3)
		        { newMarkers.push(gapMarkers); }
		      newMarkers.push(last);
		    }
		    return newMarkers
		  }

		  // Remove spans that are empty and don't have a clearWhenEmpty
		  // option of false.
		  function clearEmptySpans(spans) {
		    for (var i = 0; i < spans.length; ++i) {
		      var span = spans[i];
		      if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
		        { spans.splice(i--, 1); }
		    }
		    if (!spans.length) { return null }
		    return spans
		  }

		  // Used to 'clip' out readOnly ranges when making a change.
		  function removeReadOnlyRanges(doc, from, to) {
		    var markers = null;
		    doc.iter(from.line, to.line + 1, function (line) {
		      if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
		        var mark = line.markedSpans[i].marker;
		        if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
		          { (markers || (markers = [])).push(mark); }
		      } }
		    });
		    if (!markers) { return null }
		    var parts = [{from: from, to: to}];
		    for (var i = 0; i < markers.length; ++i) {
		      var mk = markers[i], m = mk.find(0);
		      for (var j = 0; j < parts.length; ++j) {
		        var p = parts[j];
		        if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) { continue }
		        var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
		        if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
		          { newParts.push({from: p.from, to: m.from}); }
		        if (dto > 0 || !mk.inclusiveRight && !dto)
		          { newParts.push({from: m.to, to: p.to}); }
		        parts.splice.apply(parts, newParts);
		        j += newParts.length - 3;
		      }
		    }
		    return parts
		  }

		  // Connect or disconnect spans from a line.
		  function detachMarkedSpans(line) {
		    var spans = line.markedSpans;
		    if (!spans) { return }
		    for (var i = 0; i < spans.length; ++i)
		      { spans[i].marker.detachLine(line); }
		    line.markedSpans = null;
		  }
		  function attachMarkedSpans(line, spans) {
		    if (!spans) { return }
		    for (var i = 0; i < spans.length; ++i)
		      { spans[i].marker.attachLine(line); }
		    line.markedSpans = spans;
		  }

		  // Helpers used when computing which overlapping collapsed span
		  // counts as the larger one.
		  function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0 }
		  function extraRight(marker) { return marker.inclusiveRight ? 1 : 0 }

		  // Returns a number indicating which of two overlapping collapsed
		  // spans is larger (and thus includes the other). Falls back to
		  // comparing ids when the spans cover exactly the same range.
		  function compareCollapsedMarkers(a, b) {
		    var lenDiff = a.lines.length - b.lines.length;
		    if (lenDiff != 0) { return lenDiff }
		    var aPos = a.find(), bPos = b.find();
		    var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
		    if (fromCmp) { return -fromCmp }
		    var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
		    if (toCmp) { return toCmp }
		    return b.id - a.id
		  }

		  // Find out whether a line ends or starts in a collapsed span. If
		  // so, return the marker for that span.
		  function collapsedSpanAtSide(line, start) {
		    var sps = sawCollapsedSpans && line.markedSpans, found;
		    if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
		      sp = sps[i];
		      if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
		          (!found || compareCollapsedMarkers(found, sp.marker) < 0))
		        { found = sp.marker; }
		    } }
		    return found
		  }
		  function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true) }
		  function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false) }

		  function collapsedSpanAround(line, ch) {
		    var sps = sawCollapsedSpans && line.markedSpans, found;
		    if (sps) { for (var i = 0; i < sps.length; ++i) {
		      var sp = sps[i];
		      if (sp.marker.collapsed && (sp.from == null || sp.from < ch) && (sp.to == null || sp.to > ch) &&
		          (!found || compareCollapsedMarkers(found, sp.marker) < 0)) { found = sp.marker; }
		    } }
		    return found
		  }

		  // Test whether there exists a collapsed span that partially
		  // overlaps (covers the start or end, but not both) of a new span.
		  // Such overlap is not allowed.
		  function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
		    var line = getLine(doc, lineNo);
		    var sps = sawCollapsedSpans && line.markedSpans;
		    if (sps) { for (var i = 0; i < sps.length; ++i) {
		      var sp = sps[i];
		      if (!sp.marker.collapsed) { continue }
		      var found = sp.marker.find(0);
		      var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
		      var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
		      if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) { continue }
		      if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) ||
		          fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0))
		        { return true }
		    } }
		  }

		  // A visual line is a line as drawn on the screen. Folding, for
		  // example, can cause multiple logical lines to appear on the same
		  // visual line. This finds the start of the visual line that the
		  // given line is part of (usually that is the line itself).
		  function visualLine(line) {
		    var merged;
		    while (merged = collapsedSpanAtStart(line))
		      { line = merged.find(-1, true).line; }
		    return line
		  }

		  function visualLineEnd(line) {
		    var merged;
		    while (merged = collapsedSpanAtEnd(line))
		      { line = merged.find(1, true).line; }
		    return line
		  }

		  // Returns an array of logical lines that continue the visual line
		  // started by the argument, or undefined if there are no such lines.
		  function visualLineContinued(line) {
		    var merged, lines;
		    while (merged = collapsedSpanAtEnd(line)) {
		      line = merged.find(1, true).line
		      ;(lines || (lines = [])).push(line);
		    }
		    return lines
		  }

		  // Get the line number of the start of the visual line that the
		  // given line number is part of.
		  function visualLineNo(doc, lineN) {
		    var line = getLine(doc, lineN), vis = visualLine(line);
		    if (line == vis) { return lineN }
		    return lineNo(vis)
		  }

		  // Get the line number of the start of the next visual line after
		  // the given line.
		  function visualLineEndNo(doc, lineN) {
		    if (lineN > doc.lastLine()) { return lineN }
		    var line = getLine(doc, lineN), merged;
		    if (!lineIsHidden(doc, line)) { return lineN }
		    while (merged = collapsedSpanAtEnd(line))
		      { line = merged.find(1, true).line; }
		    return lineNo(line) + 1
		  }

		  // Compute whether a line is hidden. Lines count as hidden when they
		  // are part of a visual line that starts with another line, or when
		  // they are entirely covered by collapsed, non-widget span.
		  function lineIsHidden(doc, line) {
		    var sps = sawCollapsedSpans && line.markedSpans;
		    if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
		      sp = sps[i];
		      if (!sp.marker.collapsed) { continue }
		      if (sp.from == null) { return true }
		      if (sp.marker.widgetNode) { continue }
		      if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
		        { return true }
		    } }
		  }
		  function lineIsHiddenInner(doc, line, span) {
		    if (span.to == null) {
		      var end = span.marker.find(1, true);
		      return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker))
		    }
		    if (span.marker.inclusiveRight && span.to == line.text.length)
		      { return true }
		    for (var sp = (void 0), i = 0; i < line.markedSpans.length; ++i) {
		      sp = line.markedSpans[i];
		      if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
		          (sp.to == null || sp.to != span.from) &&
		          (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
		          lineIsHiddenInner(doc, line, sp)) { return true }
		    }
		  }

		  // Find the height above the given line.
		  function heightAtLine(lineObj) {
		    lineObj = visualLine(lineObj);

		    var h = 0, chunk = lineObj.parent;
		    for (var i = 0; i < chunk.lines.length; ++i) {
		      var line = chunk.lines[i];
		      if (line == lineObj) { break }
		      else { h += line.height; }
		    }
		    for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
		      for (var i$1 = 0; i$1 < p.children.length; ++i$1) {
		        var cur = p.children[i$1];
		        if (cur == chunk) { break }
		        else { h += cur.height; }
		      }
		    }
		    return h
		  }

		  // Compute the character length of a line, taking into account
		  // collapsed ranges (see markText) that might hide parts, and join
		  // other lines onto it.
		  function lineLength(line) {
		    if (line.height == 0) { return 0 }
		    var len = line.text.length, merged, cur = line;
		    while (merged = collapsedSpanAtStart(cur)) {
		      var found = merged.find(0, true);
		      cur = found.from.line;
		      len += found.from.ch - found.to.ch;
		    }
		    cur = line;
		    while (merged = collapsedSpanAtEnd(cur)) {
		      var found$1 = merged.find(0, true);
		      len -= cur.text.length - found$1.from.ch;
		      cur = found$1.to.line;
		      len += cur.text.length - found$1.to.ch;
		    }
		    return len
		  }

		  // Find the longest line in the document.
		  function findMaxLine(cm) {
		    var d = cm.display, doc = cm.doc;
		    d.maxLine = getLine(doc, doc.first);
		    d.maxLineLength = lineLength(d.maxLine);
		    d.maxLineChanged = true;
		    doc.iter(function (line) {
		      var len = lineLength(line);
		      if (len > d.maxLineLength) {
		        d.maxLineLength = len;
		        d.maxLine = line;
		      }
		    });
		  }

		  // LINE DATA STRUCTURE

		  // Line objects. These hold state related to a line, including
		  // highlighting info (the styles array).
		  var Line = function(text, markedSpans, estimateHeight) {
		    this.text = text;
		    attachMarkedSpans(this, markedSpans);
		    this.height = estimateHeight ? estimateHeight(this) : 1;
		  };

		  Line.prototype.lineNo = function () { return lineNo(this) };
		  eventMixin(Line);

		  // Change the content (text, markers) of a line. Automatically
		  // invalidates cached information and tries to re-estimate the
		  // line's height.
		  function updateLine(line, text, markedSpans, estimateHeight) {
		    line.text = text;
		    if (line.stateAfter) { line.stateAfter = null; }
		    if (line.styles) { line.styles = null; }
		    if (line.order != null) { line.order = null; }
		    detachMarkedSpans(line);
		    attachMarkedSpans(line, markedSpans);
		    var estHeight = estimateHeight ? estimateHeight(line) : 1;
		    if (estHeight != line.height) { updateLineHeight(line, estHeight); }
		  }

		  // Detach a line from the document tree and its markers.
		  function cleanUpLine(line) {
		    line.parent = null;
		    detachMarkedSpans(line);
		  }

		  // Convert a style as returned by a mode (either null, or a string
		  // containing one or more styles) to a CSS style. This is cached,
		  // and also looks for line-wide styles.
		  var styleToClassCache = {}, styleToClassCacheWithMode = {};
		  function interpretTokenStyle(style, options) {
		    if (!style || /^\s*$/.test(style)) { return null }
		    var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
		    return cache[style] ||
		      (cache[style] = style.replace(/\S+/g, "cm-$&"))
		  }

		  // Render the DOM representation of the text of a line. Also builds
		  // up a 'line map', which points at the DOM nodes that represent
		  // specific stretches of text, and is used by the measuring code.
		  // The returned object contains the DOM node, this map, and
		  // information about line-wide styles that were set by the mode.
		  function buildLineContent(cm, lineView) {
		    // The padding-right forces the element to have a 'border', which
		    // is needed on Webkit to be able to get line-level bounding
		    // rectangles for it (in measureChar).
		    var content = eltP("span", null, null, webkit ? "padding-right: .1px" : null);
		    var builder = {pre: eltP("pre", [content], "CodeMirror-line"), content: content,
		                   col: 0, pos: 0, cm: cm,
		                   trailingSpace: false,
		                   splitSpaces: cm.getOption("lineWrapping")};
		    lineView.measure = {};

		    // Iterate over the logical lines that make up this visual line.
		    for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
		      var line = i ? lineView.rest[i - 1] : lineView.line, order = (void 0);
		      builder.pos = 0;
		      builder.addToken = buildToken;
		      // Optionally wire in some hacks into the token-rendering
		      // algorithm, to deal with browser quirks.
		      if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line, cm.doc.direction)))
		        { builder.addToken = buildTokenBadBidi(builder.addToken, order); }
		      builder.map = [];
		      var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
		      insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
		      if (line.styleClasses) {
		        if (line.styleClasses.bgClass)
		          { builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || ""); }
		        if (line.styleClasses.textClass)
		          { builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || ""); }
		      }

		      // Ensure at least a single node is present, for measuring.
		      if (builder.map.length == 0)
		        { builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure))); }

		      // Store the map and a cache object for the current logical line
		      if (i == 0) {
		        lineView.measure.map = builder.map;
		        lineView.measure.cache = {};
		      } else {
		  (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map)
		        ;(lineView.measure.caches || (lineView.measure.caches = [])).push({});
		      }
		    }

		    // See issue #2901
		    if (webkit) {
		      var last = builder.content.lastChild;
		      if (/\bcm-tab\b/.test(last.className) || (last.querySelector && last.querySelector(".cm-tab")))
		        { builder.content.className = "cm-tab-wrap-hack"; }
		    }

		    signal(cm, "renderLine", cm, lineView.line, builder.pre);
		    if (builder.pre.className)
		      { builder.textClass = joinClasses(builder.pre.className, builder.textClass || ""); }

		    return builder
		  }

		  function defaultSpecialCharPlaceholder(ch) {
		    var token = elt("span", "\u2022", "cm-invalidchar");
		    token.title = "\\u" + ch.charCodeAt(0).toString(16);
		    token.setAttribute("aria-label", token.title);
		    return token
		  }

		  // Build up the DOM representation for a single token, and add it to
		  // the line map. Takes care to render special characters separately.
		  function buildToken(builder, text, style, startStyle, endStyle, css, attributes) {
		    if (!text) { return }
		    var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text;
		    var special = builder.cm.state.specialChars, mustWrap = false;
		    var content;
		    if (!special.test(text)) {
		      builder.col += text.length;
		      content = document.createTextNode(displayText);
		      builder.map.push(builder.pos, builder.pos + text.length, content);
		      if (ie && ie_version < 9) { mustWrap = true; }
		      builder.pos += text.length;
		    } else {
		      content = document.createDocumentFragment();
		      var pos = 0;
		      while (true) {
		        special.lastIndex = pos;
		        var m = special.exec(text);
		        var skipped = m ? m.index - pos : text.length - pos;
		        if (skipped) {
		          var txt = document.createTextNode(displayText.slice(pos, pos + skipped));
		          if (ie && ie_version < 9) { content.appendChild(elt("span", [txt])); }
		          else { content.appendChild(txt); }
		          builder.map.push(builder.pos, builder.pos + skipped, txt);
		          builder.col += skipped;
		          builder.pos += skipped;
		        }
		        if (!m) { break }
		        pos += skipped + 1;
		        var txt$1 = (void 0);
		        if (m[0] == "\t") {
		          var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
		          txt$1 = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
		          txt$1.setAttribute("role", "presentation");
		          txt$1.setAttribute("cm-text", "\t");
		          builder.col += tabWidth;
		        } else if (m[0] == "\r" || m[0] == "\n") {
		          txt$1 = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"));
		          txt$1.setAttribute("cm-text", m[0]);
		          builder.col += 1;
		        } else {
		          txt$1 = builder.cm.options.specialCharPlaceholder(m[0]);
		          txt$1.setAttribute("cm-text", m[0]);
		          if (ie && ie_version < 9) { content.appendChild(elt("span", [txt$1])); }
		          else { content.appendChild(txt$1); }
		          builder.col += 1;
		        }
		        builder.map.push(builder.pos, builder.pos + 1, txt$1);
		        builder.pos++;
		      }
		    }
		    builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32;
		    if (style || startStyle || endStyle || mustWrap || css || attributes) {
		      var fullStyle = style || "";
		      if (startStyle) { fullStyle += startStyle; }
		      if (endStyle) { fullStyle += endStyle; }
		      var token = elt("span", [content], fullStyle, css);
		      if (attributes) {
		        for (var attr in attributes) { if (attributes.hasOwnProperty(attr) && attr != "style" && attr != "class")
		          { token.setAttribute(attr, attributes[attr]); } }
		      }
		      return builder.content.appendChild(token)
		    }
		    builder.content.appendChild(content);
		  }

		  // Change some spaces to NBSP to prevent the browser from collapsing
		  // trailing spaces at the end of a line when rendering text (issue #1362).
		  function splitSpaces(text, trailingBefore) {
		    if (text.length > 1 && !/  /.test(text)) { return text }
		    var spaceBefore = trailingBefore, result = "";
		    for (var i = 0; i < text.length; i++) {
		      var ch = text.charAt(i);
		      if (ch == " " && spaceBefore && (i == text.length - 1 || text.charCodeAt(i + 1) == 32))
		        { ch = "\u00a0"; }
		      result += ch;
		      spaceBefore = ch == " ";
		    }
		    return result
		  }

		  // Work around nonsense dimensions being reported for stretches of
		  // right-to-left text.
		  function buildTokenBadBidi(inner, order) {
		    return function (builder, text, style, startStyle, endStyle, css, attributes) {
		      style = style ? style + " cm-force-border" : "cm-force-border";
		      var start = builder.pos, end = start + text.length;
		      for (;;) {
		        // Find the part that overlaps with the start of this text
		        var part = (void 0);
		        for (var i = 0; i < order.length; i++) {
		          part = order[i];
		          if (part.to > start && part.from <= start) { break }
		        }
		        if (part.to >= end) { return inner(builder, text, style, startStyle, endStyle, css, attributes) }
		        inner(builder, text.slice(0, part.to - start), style, startStyle, null, css, attributes);
		        startStyle = null;
		        text = text.slice(part.to - start);
		        start = part.to;
		      }
		    }
		  }

		  function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
		    var widget = !ignoreWidget && marker.widgetNode;
		    if (widget) { builder.map.push(builder.pos, builder.pos + size, widget); }
		    if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
		      if (!widget)
		        { widget = builder.content.appendChild(document.createElement("span")); }
		      widget.setAttribute("cm-marker", marker.id);
		    }
		    if (widget) {
		      builder.cm.display.input.setUneditable(widget);
		      builder.content.appendChild(widget);
		    }
		    builder.pos += size;
		    builder.trailingSpace = false;
		  }

		  // Outputs a number of spans to make up a line, taking highlighting
		  // and marked text into account.
		  function insertLineContent(line, builder, styles) {
		    var spans = line.markedSpans, allText = line.text, at = 0;
		    if (!spans) {
		      for (var i$1 = 1; i$1 < styles.length; i$1+=2)
		        { builder.addToken(builder, allText.slice(at, at = styles[i$1]), interpretTokenStyle(styles[i$1+1], builder.cm.options)); }
		      return
		    }

		    var len = allText.length, pos = 0, i = 1, text = "", style, css;
		    var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, collapsed, attributes;
		    for (;;) {
		      if (nextChange == pos) { // Update current marker set
		        spanStyle = spanEndStyle = spanStartStyle = css = "";
		        attributes = null;
		        collapsed = null; nextChange = Infinity;
		        var foundBookmarks = [], endStyles = (void 0);
		        for (var j = 0; j < spans.length; ++j) {
		          var sp = spans[j], m = sp.marker;
		          if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
		            foundBookmarks.push(m);
		          } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
		            if (sp.to != null && sp.to != pos && nextChange > sp.to) {
		              nextChange = sp.to;
		              spanEndStyle = "";
		            }
		            if (m.className) { spanStyle += " " + m.className; }
		            if (m.css) { css = (css ? css + ";" : "") + m.css; }
		            if (m.startStyle && sp.from == pos) { spanStartStyle += " " + m.startStyle; }
		            if (m.endStyle && sp.to == nextChange) { (endStyles || (endStyles = [])).push(m.endStyle, sp.to); }
		            // support for the old title property
		            // https://github.com/codemirror/CodeMirror/pull/5673
		            if (m.title) { (attributes || (attributes = {})).title = m.title; }
		            if (m.attributes) {
		              for (var attr in m.attributes)
		                { (attributes || (attributes = {}))[attr] = m.attributes[attr]; }
		            }
		            if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
		              { collapsed = sp; }
		          } else if (sp.from > pos && nextChange > sp.from) {
		            nextChange = sp.from;
		          }
		        }
		        if (endStyles) { for (var j$1 = 0; j$1 < endStyles.length; j$1 += 2)
		          { if (endStyles[j$1 + 1] == nextChange) { spanEndStyle += " " + endStyles[j$1]; } } }

		        if (!collapsed || collapsed.from == pos) { for (var j$2 = 0; j$2 < foundBookmarks.length; ++j$2)
		          { buildCollapsedSpan(builder, 0, foundBookmarks[j$2]); } }
		        if (collapsed && (collapsed.from || 0) == pos) {
		          buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
		                             collapsed.marker, collapsed.from == null);
		          if (collapsed.to == null) { return }
		          if (collapsed.to == pos) { collapsed = false; }
		        }
		      }
		      if (pos >= len) { break }

		      var upto = Math.min(len, nextChange);
		      while (true) {
		        if (text) {
		          var end = pos + text.length;
		          if (!collapsed) {
		            var tokenText = end > upto ? text.slice(0, upto - pos) : text;
		            builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
		                             spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", css, attributes);
		          }
		          if (end >= upto) {text = text.slice(upto - pos); pos = upto; break}
		          pos = end;
		          spanStartStyle = "";
		        }
		        text = allText.slice(at, at = styles[i++]);
		        style = interpretTokenStyle(styles[i++], builder.cm.options);
		      }
		    }
		  }


		  // These objects are used to represent the visible (currently drawn)
		  // part of the document. A LineView may correspond to multiple
		  // logical lines, if those are connected by collapsed ranges.
		  function LineView(doc, line, lineN) {
		    // The starting line
		    this.line = line;
		    // Continuing lines, if any
		    this.rest = visualLineContinued(line);
		    // Number of logical lines in this visual line
		    this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
		    this.node = this.text = null;
		    this.hidden = lineIsHidden(doc, line);
		  }

		  // Create a range of LineView objects for the given lines.
		  function buildViewArray(cm, from, to) {
		    var array = [], nextPos;
		    for (var pos = from; pos < to; pos = nextPos) {
		      var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
		      nextPos = pos + view.size;
		      array.push(view);
		    }
		    return array
		  }

		  var operationGroup = null;

		  function pushOperation(op) {
		    if (operationGroup) {
		      operationGroup.ops.push(op);
		    } else {
		      op.ownsGroup = operationGroup = {
		        ops: [op],
		        delayedCallbacks: []
		      };
		    }
		  }

		  function fireCallbacksForOps(group) {
		    // Calls delayed callbacks and cursorActivity handlers until no
		    // new ones appear
		    var callbacks = group.delayedCallbacks, i = 0;
		    do {
		      for (; i < callbacks.length; i++)
		        { callbacks[i].call(null); }
		      for (var j = 0; j < group.ops.length; j++) {
		        var op = group.ops[j];
		        if (op.cursorActivityHandlers)
		          { while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
		            { op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm); } }
		      }
		    } while (i < callbacks.length)
		  }

		  function finishOperation(op, endCb) {
		    var group = op.ownsGroup;
		    if (!group) { return }

		    try { fireCallbacksForOps(group); }
		    finally {
		      operationGroup = null;
		      endCb(group);
		    }
		  }

		  var orphanDelayedCallbacks = null;

		  // Often, we want to signal events at a point where we are in the
		  // middle of some work, but don't want the handler to start calling
		  // other methods on the editor, which might be in an inconsistent
		  // state or simply not expect any other events to happen.
		  // signalLater looks whether there are any handlers, and schedules
		  // them to be executed when the last operation ends, or, if no
		  // operation is active, when a timeout fires.
		  function signalLater(emitter, type /*, values...*/) {
		    var arr = getHandlers(emitter, type);
		    if (!arr.length) { return }
		    var args = Array.prototype.slice.call(arguments, 2), list;
		    if (operationGroup) {
		      list = operationGroup.delayedCallbacks;
		    } else if (orphanDelayedCallbacks) {
		      list = orphanDelayedCallbacks;
		    } else {
		      list = orphanDelayedCallbacks = [];
		      setTimeout(fireOrphanDelayed, 0);
		    }
		    var loop = function ( i ) {
		      list.push(function () { return arr[i].apply(null, args); });
		    };

		    for (var i = 0; i < arr.length; ++i)
		      loop( i );
		  }

		  function fireOrphanDelayed() {
		    var delayed = orphanDelayedCallbacks;
		    orphanDelayedCallbacks = null;
		    for (var i = 0; i < delayed.length; ++i) { delayed[i](); }
		  }

		  // When an aspect of a line changes, a string is added to
		  // lineView.changes. This updates the relevant part of the line's
		  // DOM structure.
		  function updateLineForChanges(cm, lineView, lineN, dims) {
		    for (var j = 0; j < lineView.changes.length; j++) {
		      var type = lineView.changes[j];
		      if (type == "text") { updateLineText(cm, lineView); }
		      else if (type == "gutter") { updateLineGutter(cm, lineView, lineN, dims); }
		      else if (type == "class") { updateLineClasses(cm, lineView); }
		      else if (type == "widget") { updateLineWidgets(cm, lineView, dims); }
		    }
		    lineView.changes = null;
		  }

		  // Lines with gutter elements, widgets or a background class need to
		  // be wrapped, and have the extra elements added to the wrapper div
		  function ensureLineWrapped(lineView) {
		    if (lineView.node == lineView.text) {
		      lineView.node = elt("div", null, null, "position: relative");
		      if (lineView.text.parentNode)
		        { lineView.text.parentNode.replaceChild(lineView.node, lineView.text); }
		      lineView.node.appendChild(lineView.text);
		      if (ie && ie_version < 8) { lineView.node.style.zIndex = 2; }
		    }
		    return lineView.node
		  }

		  function updateLineBackground(cm, lineView) {
		    var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
		    if (cls) { cls += " CodeMirror-linebackground"; }
		    if (lineView.background) {
		      if (cls) { lineView.background.className = cls; }
		      else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null; }
		    } else if (cls) {
		      var wrap = ensureLineWrapped(lineView);
		      lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
		      cm.display.input.setUneditable(lineView.background);
		    }
		  }

		  // Wrapper around buildLineContent which will reuse the structure
		  // in display.externalMeasured when possible.
		  function getLineContent(cm, lineView) {
		    var ext = cm.display.externalMeasured;
		    if (ext && ext.line == lineView.line) {
		      cm.display.externalMeasured = null;
		      lineView.measure = ext.measure;
		      return ext.built
		    }
		    return buildLineContent(cm, lineView)
		  }

		  // Redraw the line's text. Interacts with the background and text
		  // classes because the mode may output tokens that influence these
		  // classes.
		  function updateLineText(cm, lineView) {
		    var cls = lineView.text.className;
		    var built = getLineContent(cm, lineView);
		    if (lineView.text == lineView.node) { lineView.node = built.pre; }
		    lineView.text.parentNode.replaceChild(built.pre, lineView.text);
		    lineView.text = built.pre;
		    if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
		      lineView.bgClass = built.bgClass;
		      lineView.textClass = built.textClass;
		      updateLineClasses(cm, lineView);
		    } else if (cls) {
		      lineView.text.className = cls;
		    }
		  }

		  function updateLineClasses(cm, lineView) {
		    updateLineBackground(cm, lineView);
		    if (lineView.line.wrapClass)
		      { ensureLineWrapped(lineView).className = lineView.line.wrapClass; }
		    else if (lineView.node != lineView.text)
		      { lineView.node.className = ""; }
		    var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
		    lineView.text.className = textClass || "";
		  }

		  function updateLineGutter(cm, lineView, lineN, dims) {
		    if (lineView.gutter) {
		      lineView.node.removeChild(lineView.gutter);
		      lineView.gutter = null;
		    }
		    if (lineView.gutterBackground) {
		      lineView.node.removeChild(lineView.gutterBackground);
		      lineView.gutterBackground = null;
		    }
		    if (lineView.line.gutterClass) {
		      var wrap = ensureLineWrapped(lineView);
		      lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
		                                      ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + (dims.gutterTotalWidth) + "px"));
		      cm.display.input.setUneditable(lineView.gutterBackground);
		      wrap.insertBefore(lineView.gutterBackground, lineView.text);
		    }
		    var markers = lineView.line.gutterMarkers;
		    if (cm.options.lineNumbers || markers) {
		      var wrap$1 = ensureLineWrapped(lineView);
		      var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"));
		      gutterWrap.setAttribute("aria-hidden", "true");
		      cm.display.input.setUneditable(gutterWrap);
		      wrap$1.insertBefore(gutterWrap, lineView.text);
		      if (lineView.line.gutterClass)
		        { gutterWrap.className += " " + lineView.line.gutterClass; }
		      if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
		        { lineView.lineNumber = gutterWrap.appendChild(
		          elt("div", lineNumberFor(cm.options, lineN),
		              "CodeMirror-linenumber CodeMirror-gutter-elt",
		              ("left: " + (dims.gutterLeft["CodeMirror-linenumbers"]) + "px; width: " + (cm.display.lineNumInnerWidth) + "px"))); }
		      if (markers) { for (var k = 0; k < cm.display.gutterSpecs.length; ++k) {
		        var id = cm.display.gutterSpecs[k].className, found = markers.hasOwnProperty(id) && markers[id];
		        if (found)
		          { gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt",
		                                     ("left: " + (dims.gutterLeft[id]) + "px; width: " + (dims.gutterWidth[id]) + "px"))); }
		      } }
		    }
		  }

		  function updateLineWidgets(cm, lineView, dims) {
		    if (lineView.alignable) { lineView.alignable = null; }
		    var isWidget = classTest("CodeMirror-linewidget");
		    for (var node = lineView.node.firstChild, next = (void 0); node; node = next) {
		      next = node.nextSibling;
		      if (isWidget.test(node.className)) { lineView.node.removeChild(node); }
		    }
		    insertLineWidgets(cm, lineView, dims);
		  }

		  // Build a line's DOM representation from scratch
		  function buildLineElement(cm, lineView, lineN, dims) {
		    var built = getLineContent(cm, lineView);
		    lineView.text = lineView.node = built.pre;
		    if (built.bgClass) { lineView.bgClass = built.bgClass; }
		    if (built.textClass) { lineView.textClass = built.textClass; }

		    updateLineClasses(cm, lineView);
		    updateLineGutter(cm, lineView, lineN, dims);
		    insertLineWidgets(cm, lineView, dims);
		    return lineView.node
		  }

		  // A lineView may contain multiple logical lines (when merged by
		  // collapsed spans). The widgets for all of them need to be drawn.
		  function insertLineWidgets(cm, lineView, dims) {
		    insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);
		    if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
		      { insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false); } }
		  }

		  function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
		    if (!line.widgets) { return }
		    var wrap = ensureLineWrapped(lineView);
		    for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
		      var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget" + (widget.className ? " " + widget.className : ""));
		      if (!widget.handleMouseEvents) { node.setAttribute("cm-ignore-events", "true"); }
		      positionLineWidget(widget, node, lineView, dims);
		      cm.display.input.setUneditable(node);
		      if (allowAbove && widget.above)
		        { wrap.insertBefore(node, lineView.gutter || lineView.text); }
		      else
		        { wrap.appendChild(node); }
		      signalLater(widget, "redraw");
		    }
		  }

		  function positionLineWidget(widget, node, lineView, dims) {
		    if (widget.noHScroll) {
		  (lineView.alignable || (lineView.alignable = [])).push(node);
		      var width = dims.wrapperWidth;
		      node.style.left = dims.fixedPos + "px";
		      if (!widget.coverGutter) {
		        width -= dims.gutterTotalWidth;
		        node.style.paddingLeft = dims.gutterTotalWidth + "px";
		      }
		      node.style.width = width + "px";
		    }
		    if (widget.coverGutter) {
		      node.style.zIndex = 5;
		      node.style.position = "relative";
		      if (!widget.noHScroll) { node.style.marginLeft = -dims.gutterTotalWidth + "px"; }
		    }
		  }

		  function widgetHeight(widget) {
		    if (widget.height != null) { return widget.height }
		    var cm = widget.doc.cm;
		    if (!cm) { return 0 }
		    if (!contains(document.body, widget.node)) {
		      var parentStyle = "position: relative;";
		      if (widget.coverGutter)
		        { parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;"; }
		      if (widget.noHScroll)
		        { parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;"; }
		      removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
		    }
		    return widget.height = widget.node.parentNode.offsetHeight
		  }

		  // Return true when the given mouse event happened in a widget
		  function eventInWidget(display, e) {
		    for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
		      if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
		          (n.parentNode == display.sizer && n != display.mover))
		        { return true }
		    }
		  }

		  // POSITION MEASUREMENT

		  function paddingTop(display) {return display.lineSpace.offsetTop}
		  function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight}
		  function paddingH(display) {
		    if (display.cachedPaddingH) { return display.cachedPaddingH }
		    var e = removeChildrenAndAdd(display.measure, elt("pre", "x", "CodeMirror-line-like"));
		    var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
		    var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)};
		    if (!isNaN(data.left) && !isNaN(data.right)) { display.cachedPaddingH = data; }
		    return data
		  }

		  function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth }
		  function displayWidth(cm) {
		    return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth
		  }
		  function displayHeight(cm) {
		    return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight
		  }

		  // Ensure the lineView.wrapping.heights array is populated. This is
		  // an array of bottom offsets for the lines that make up a drawn
		  // line. When lineWrapping is on, there might be more than one
		  // height.
		  function ensureLineHeights(cm, lineView, rect) {
		    var wrapping = cm.options.lineWrapping;
		    var curWidth = wrapping && displayWidth(cm);
		    if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
		      var heights = lineView.measure.heights = [];
		      if (wrapping) {
		        lineView.measure.width = curWidth;
		        var rects = lineView.text.firstChild.getClientRects();
		        for (var i = 0; i < rects.length - 1; i++) {
		          var cur = rects[i], next = rects[i + 1];
		          if (Math.abs(cur.bottom - next.bottom) > 2)
		            { heights.push((cur.bottom + next.top) / 2 - rect.top); }
		        }
		      }
		      heights.push(rect.bottom - rect.top);
		    }
		  }

		  // Find a line map (mapping character offsets to text nodes) and a
		  // measurement cache for the given line number. (A line view might
		  // contain multiple lines when collapsed ranges are present.)
		  function mapFromLineView(lineView, line, lineN) {
		    if (lineView.line == line)
		      { return {map: lineView.measure.map, cache: lineView.measure.cache} }
		    if (lineView.rest) {
		      for (var i = 0; i < lineView.rest.length; i++)
		        { if (lineView.rest[i] == line)
		          { return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]} } }
		      for (var i$1 = 0; i$1 < lineView.rest.length; i$1++)
		        { if (lineNo(lineView.rest[i$1]) > lineN)
		          { return {map: lineView.measure.maps[i$1], cache: lineView.measure.caches[i$1], before: true} } }
		    }
		  }

		  // Render a line into the hidden node display.externalMeasured. Used
		  // when measurement is needed for a line that's not in the viewport.
		  function updateExternalMeasurement(cm, line) {
		    line = visualLine(line);
		    var lineN = lineNo(line);
		    var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
		    view.lineN = lineN;
		    var built = view.built = buildLineContent(cm, view);
		    view.text = built.pre;
		    removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
		    return view
		  }

		  // Get a {top, bottom, left, right} box (in line-local coordinates)
		  // for a given character.
		  function measureChar(cm, line, ch, bias) {
		    return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias)
		  }

		  // Find a line view that corresponds to the given line number.
		  function findViewForLine(cm, lineN) {
		    if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
		      { return cm.display.view[findViewIndex(cm, lineN)] }
		    var ext = cm.display.externalMeasured;
		    if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
		      { return ext }
		  }

		  // Measurement can be split in two steps, the set-up work that
		  // applies to the whole line, and the measurement of the actual
		  // character. Functions like coordsChar, that need to do a lot of
		  // measurements in a row, can thus ensure that the set-up work is
		  // only done once.
		  function prepareMeasureForLine(cm, line) {
		    var lineN = lineNo(line);
		    var view = findViewForLine(cm, lineN);
		    if (view && !view.text) {
		      view = null;
		    } else if (view && view.changes) {
		      updateLineForChanges(cm, view, lineN, getDimensions(cm));
		      cm.curOp.forceUpdate = true;
		    }
		    if (!view)
		      { view = updateExternalMeasurement(cm, line); }

		    var info = mapFromLineView(view, line, lineN);
		    return {
		      line: line, view: view, rect: null,
		      map: info.map, cache: info.cache, before: info.before,
		      hasHeights: false
		    }
		  }

		  // Given a prepared measurement object, measures the position of an
		  // actual character (or fetches it from the cache).
		  function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
		    if (prepared.before) { ch = -1; }
		    var key = ch + (bias || ""), found;
		    if (prepared.cache.hasOwnProperty(key)) {
		      found = prepared.cache[key];
		    } else {
		      if (!prepared.rect)
		        { prepared.rect = prepared.view.text.getBoundingClientRect(); }
		      if (!prepared.hasHeights) {
		        ensureLineHeights(cm, prepared.view, prepared.rect);
		        prepared.hasHeights = true;
		      }
		      found = measureCharInner(cm, prepared, ch, bias);
		      if (!found.bogus) { prepared.cache[key] = found; }
		    }
		    return {left: found.left, right: found.right,
		            top: varHeight ? found.rtop : found.top,
		            bottom: varHeight ? found.rbottom : found.bottom}
		  }

		  var nullRect = {left: 0, right: 0, top: 0, bottom: 0};

		  function nodeAndOffsetInLineMap(map, ch, bias) {
		    var node, start, end, collapse, mStart, mEnd;
		    // First, search the line map for the text node corresponding to,
		    // or closest to, the target character.
		    for (var i = 0; i < map.length; i += 3) {
		      mStart = map[i];
		      mEnd = map[i + 1];
		      if (ch < mStart) {
		        start = 0; end = 1;
		        collapse = "left";
		      } else if (ch < mEnd) {
		        start = ch - mStart;
		        end = start + 1;
		      } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
		        end = mEnd - mStart;
		        start = end - 1;
		        if (ch >= mEnd) { collapse = "right"; }
		      }
		      if (start != null) {
		        node = map[i + 2];
		        if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
		          { collapse = bias; }
		        if (bias == "left" && start == 0)
		          { while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
		            node = map[(i -= 3) + 2];
		            collapse = "left";
		          } }
		        if (bias == "right" && start == mEnd - mStart)
		          { while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
		            node = map[(i += 3) + 2];
		            collapse = "right";
		          } }
		        break
		      }
		    }
		    return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd}
		  }

		  function getUsefulRect(rects, bias) {
		    var rect = nullRect;
		    if (bias == "left") { for (var i = 0; i < rects.length; i++) {
		      if ((rect = rects[i]).left != rect.right) { break }
		    } } else { for (var i$1 = rects.length - 1; i$1 >= 0; i$1--) {
		      if ((rect = rects[i$1]).left != rect.right) { break }
		    } }
		    return rect
		  }

		  function measureCharInner(cm, prepared, ch, bias) {
		    var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
		    var node = place.node, start = place.start, end = place.end, collapse = place.collapse;

		    var rect;
		    if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
		      for (var i$1 = 0; i$1 < 4; i$1++) { // Retry a maximum of 4 times when nonsense rectangles are returned
		        while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) { --start; }
		        while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) { ++end; }
		        if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart)
		          { rect = node.parentNode.getBoundingClientRect(); }
		        else
		          { rect = getUsefulRect(range(node, start, end).getClientRects(), bias); }
		        if (rect.left || rect.right || start == 0) { break }
		        end = start;
		        start = start - 1;
		        collapse = "right";
		      }
		      if (ie && ie_version < 11) { rect = maybeUpdateRectForZooming(cm.display.measure, rect); }
		    } else { // If it is a widget, simply get the box for the whole widget.
		      if (start > 0) { collapse = bias = "right"; }
		      var rects;
		      if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
		        { rect = rects[bias == "right" ? rects.length - 1 : 0]; }
		      else
		        { rect = node.getBoundingClientRect(); }
		    }
		    if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
		      var rSpan = node.parentNode.getClientRects()[0];
		      if (rSpan)
		        { rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom}; }
		      else
		        { rect = nullRect; }
		    }

		    var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
		    var mid = (rtop + rbot) / 2;
		    var heights = prepared.view.measure.heights;
		    var i = 0;
		    for (; i < heights.length - 1; i++)
		      { if (mid < heights[i]) { break } }
		    var top = i ? heights[i - 1] : 0, bot = heights[i];
		    var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
		                  right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
		                  top: top, bottom: bot};
		    if (!rect.left && !rect.right) { result.bogus = true; }
		    if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot; }

		    return result
		  }

		  // Work around problem with bounding client rects on ranges being
		  // returned incorrectly when zoomed on IE10 and below.
		  function maybeUpdateRectForZooming(measure, rect) {
		    if (!window.screen || screen.logicalXDPI == null ||
		        screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
		      { return rect }
		    var scaleX = screen.logicalXDPI / screen.deviceXDPI;
		    var scaleY = screen.logicalYDPI / screen.deviceYDPI;
		    return {left: rect.left * scaleX, right: rect.right * scaleX,
		            top: rect.top * scaleY, bottom: rect.bottom * scaleY}
		  }

		  function clearLineMeasurementCacheFor(lineView) {
		    if (lineView.measure) {
		      lineView.measure.cache = {};
		      lineView.measure.heights = null;
		      if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
		        { lineView.measure.caches[i] = {}; } }
		    }
		  }

		  function clearLineMeasurementCache(cm) {
		    cm.display.externalMeasure = null;
		    removeChildren(cm.display.lineMeasure);
		    for (var i = 0; i < cm.display.view.length; i++)
		      { clearLineMeasurementCacheFor(cm.display.view[i]); }
		  }

		  function clearCaches(cm) {
		    clearLineMeasurementCache(cm);
		    cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
		    if (!cm.options.lineWrapping) { cm.display.maxLineChanged = true; }
		    cm.display.lineNumChars = null;
		  }

		  function pageScrollX(doc) {
		    // Work around https://bugs.chromium.org/p/chromium/issues/detail?id=489206
		    // which causes page_Offset and bounding client rects to use
		    // different reference viewports and invalidate our calculations.
		    if (chrome && android) { return -(doc.body.getBoundingClientRect().left - parseInt(getComputedStyle(doc.body).marginLeft)) }
		    return doc.defaultView.pageXOffset || (doc.documentElement || doc.body).scrollLeft
		  }
		  function pageScrollY(doc) {
		    if (chrome && android) { return -(doc.body.getBoundingClientRect().top - parseInt(getComputedStyle(doc.body).marginTop)) }
		    return doc.defaultView.pageYOffset || (doc.documentElement || doc.body).scrollTop
		  }

		  function widgetTopHeight(lineObj) {
		    var ref = visualLine(lineObj);
		    var widgets = ref.widgets;
		    var height = 0;
		    if (widgets) { for (var i = 0; i < widgets.length; ++i) { if (widgets[i].above)
		      { height += widgetHeight(widgets[i]); } } }
		    return height
		  }

		  // Converts a {top, bottom, left, right} box from line-local
		  // coordinates into another coordinate system. Context may be one of
		  // "line", "div" (display.lineDiv), "local"./null (editor), "window",
		  // or "page".
		  function intoCoordSystem(cm, lineObj, rect, context, includeWidgets) {
		    if (!includeWidgets) {
		      var height = widgetTopHeight(lineObj);
		      rect.top += height; rect.bottom += height;
		    }
		    if (context == "line") { return rect }
		    if (!context) { context = "local"; }
		    var yOff = heightAtLine(lineObj);
		    if (context == "local") { yOff += paddingTop(cm.display); }
		    else { yOff -= cm.display.viewOffset; }
		    if (context == "page" || context == "window") {
		      var lOff = cm.display.lineSpace.getBoundingClientRect();
		      yOff += lOff.top + (context == "window" ? 0 : pageScrollY(doc(cm)));
		      var xOff = lOff.left + (context == "window" ? 0 : pageScrollX(doc(cm)));
		      rect.left += xOff; rect.right += xOff;
		    }
		    rect.top += yOff; rect.bottom += yOff;
		    return rect
		  }

		  // Coverts a box from "div" coords to another coordinate system.
		  // Context may be "window", "page", "div", or "local"./null.
		  function fromCoordSystem(cm, coords, context) {
		    if (context == "div") { return coords }
		    var left = coords.left, top = coords.top;
		    // First move into "page" coordinate system
		    if (context == "page") {
		      left -= pageScrollX(doc(cm));
		      top -= pageScrollY(doc(cm));
		    } else if (context == "local" || !context) {
		      var localBox = cm.display.sizer.getBoundingClientRect();
		      left += localBox.left;
		      top += localBox.top;
		    }

		    var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
		    return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top}
		  }

		  function charCoords(cm, pos, context, lineObj, bias) {
		    if (!lineObj) { lineObj = getLine(cm.doc, pos.line); }
		    return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context)
		  }

		  // Returns a box for a given cursor position, which may have an
		  // 'other' property containing the position of the secondary cursor
		  // on a bidi boundary.
		  // A cursor Pos(line, char, "before") is on the same visual line as `char - 1`
		  // and after `char - 1` in writing order of `char - 1`
		  // A cursor Pos(line, char, "after") is on the same visual line as `char`
		  // and before `char` in writing order of `char`
		  // Examples (upper-case letters are RTL, lower-case are LTR):
		  //     Pos(0, 1, ...)
		  //     before   after
		  // ab     a|b     a|b
		  // aB     a|B     aB|
		  // Ab     |Ab     A|b
		  // AB     B|A     B|A
		  // Every position after the last character on a line is considered to stick
		  // to the last character on the line.
		  function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
		    lineObj = lineObj || getLine(cm.doc, pos.line);
		    if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj); }
		    function get(ch, right) {
		      var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);
		      if (right) { m.left = m.right; } else { m.right = m.left; }
		      return intoCoordSystem(cm, lineObj, m, context)
		    }
		    var order = getOrder(lineObj, cm.doc.direction), ch = pos.ch, sticky = pos.sticky;
		    if (ch >= lineObj.text.length) {
		      ch = lineObj.text.length;
		      sticky = "before";
		    } else if (ch <= 0) {
		      ch = 0;
		      sticky = "after";
		    }
		    if (!order) { return get(sticky == "before" ? ch - 1 : ch, sticky == "before") }

		    function getBidi(ch, partPos, invert) {
		      var part = order[partPos], right = part.level == 1;
		      return get(invert ? ch - 1 : ch, right != invert)
		    }
		    var partPos = getBidiPartAt(order, ch, sticky);
		    var other = bidiOther;
		    var val = getBidi(ch, partPos, sticky == "before");
		    if (other != null) { val.other = getBidi(ch, other, sticky != "before"); }
		    return val
		  }

		  // Used to cheaply estimate the coordinates for a position. Used for
		  // intermediate scroll updates.
		  function estimateCoords(cm, pos) {
		    var left = 0;
		    pos = clipPos(cm.doc, pos);
		    if (!cm.options.lineWrapping) { left = charWidth(cm.display) * pos.ch; }
		    var lineObj = getLine(cm.doc, pos.line);
		    var top = heightAtLine(lineObj) + paddingTop(cm.display);
		    return {left: left, right: left, top: top, bottom: top + lineObj.height}
		  }

		  // Positions returned by coordsChar contain some extra information.
		  // xRel is the relative x position of the input coordinates compared
		  // to the found position (so xRel > 0 means the coordinates are to
		  // the right of the character position, for example). When outside
		  // is true, that means the coordinates lie outside the line's
		  // vertical range.
		  function PosWithInfo(line, ch, sticky, outside, xRel) {
		    var pos = Pos(line, ch, sticky);
		    pos.xRel = xRel;
		    if (outside) { pos.outside = outside; }
		    return pos
		  }

		  // Compute the character position closest to the given coordinates.
		  // Input must be lineSpace-local ("div" coordinate system).
		  function coordsChar(cm, x, y) {
		    var doc = cm.doc;
		    y += cm.display.viewOffset;
		    if (y < 0) { return PosWithInfo(doc.first, 0, null, -1, -1) }
		    var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
		    if (lineN > last)
		      { return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, null, 1, 1) }
		    if (x < 0) { x = 0; }

		    var lineObj = getLine(doc, lineN);
		    for (;;) {
		      var found = coordsCharInner(cm, lineObj, lineN, x, y);
		      var collapsed = collapsedSpanAround(lineObj, found.ch + (found.xRel > 0 || found.outside > 0 ? 1 : 0));
		      if (!collapsed) { return found }
		      var rangeEnd = collapsed.find(1);
		      if (rangeEnd.line == lineN) { return rangeEnd }
		      lineObj = getLine(doc, lineN = rangeEnd.line);
		    }
		  }

		  function wrappedLineExtent(cm, lineObj, preparedMeasure, y) {
		    y -= widgetTopHeight(lineObj);
		    var end = lineObj.text.length;
		    var begin = findFirst(function (ch) { return measureCharPrepared(cm, preparedMeasure, ch - 1).bottom <= y; }, end, 0);
		    end = findFirst(function (ch) { return measureCharPrepared(cm, preparedMeasure, ch).top > y; }, begin, end);
		    return {begin: begin, end: end}
		  }

		  function wrappedLineExtentChar(cm, lineObj, preparedMeasure, target) {
		    if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj); }
		    var targetTop = intoCoordSystem(cm, lineObj, measureCharPrepared(cm, preparedMeasure, target), "line").top;
		    return wrappedLineExtent(cm, lineObj, preparedMeasure, targetTop)
		  }

		  // Returns true if the given side of a box is after the given
		  // coordinates, in top-to-bottom, left-to-right order.
		  function boxIsAfter(box, x, y, left) {
		    return box.bottom <= y ? false : box.top > y ? true : (left ? box.left : box.right) > x
		  }

		  function coordsCharInner(cm, lineObj, lineNo, x, y) {
		    // Move y into line-local coordinate space
		    y -= heightAtLine(lineObj);
		    var preparedMeasure = prepareMeasureForLine(cm, lineObj);
		    // When directly calling `measureCharPrepared`, we have to adjust
		    // for the widgets at this line.
		    var widgetHeight = widgetTopHeight(lineObj);
		    var begin = 0, end = lineObj.text.length, ltr = true;

		    var order = getOrder(lineObj, cm.doc.direction);
		    // If the line isn't plain left-to-right text, first figure out
		    // which bidi section the coordinates fall into.
		    if (order) {
		      var part = (cm.options.lineWrapping ? coordsBidiPartWrapped : coordsBidiPart)
		                   (cm, lineObj, lineNo, preparedMeasure, order, x, y);
		      ltr = part.level != 1;
		      // The awkward -1 offsets are needed because findFirst (called
		      // on these below) will treat its first bound as inclusive,
		      // second as exclusive, but we want to actually address the
		      // characters in the part's range
		      begin = ltr ? part.from : part.to - 1;
		      end = ltr ? part.to : part.from - 1;
		    }

		    // A binary search to find the first character whose bounding box
		    // starts after the coordinates. If we run across any whose box wrap
		    // the coordinates, store that.
		    var chAround = null, boxAround = null;
		    var ch = findFirst(function (ch) {
		      var box = measureCharPrepared(cm, preparedMeasure, ch);
		      box.top += widgetHeight; box.bottom += widgetHeight;
		      if (!boxIsAfter(box, x, y, false)) { return false }
		      if (box.top <= y && box.left <= x) {
		        chAround = ch;
		        boxAround = box;
		      }
		      return true
		    }, begin, end);

		    var baseX, sticky, outside = false;
		    // If a box around the coordinates was found, use that
		    if (boxAround) {
		      // Distinguish coordinates nearer to the left or right side of the box
		      var atLeft = x - boxAround.left < boxAround.right - x, atStart = atLeft == ltr;
		      ch = chAround + (atStart ? 0 : 1);
		      sticky = atStart ? "after" : "before";
		      baseX = atLeft ? boxAround.left : boxAround.right;
		    } else {
		      // (Adjust for extended bound, if necessary.)
		      if (!ltr && (ch == end || ch == begin)) { ch++; }
		      // To determine which side to associate with, get the box to the
		      // left of the character and compare it's vertical position to the
		      // coordinates
		      sticky = ch == 0 ? "after" : ch == lineObj.text.length ? "before" :
		        (measureCharPrepared(cm, preparedMeasure, ch - (ltr ? 1 : 0)).bottom + widgetHeight <= y) == ltr ?
		        "after" : "before";
		      // Now get accurate coordinates for this place, in order to get a
		      // base X position
		      var coords = cursorCoords(cm, Pos(lineNo, ch, sticky), "line", lineObj, preparedMeasure);
		      baseX = coords.left;
		      outside = y < coords.top ? -1 : y >= coords.bottom ? 1 : 0;
		    }

		    ch = skipExtendingChars(lineObj.text, ch, 1);
		    return PosWithInfo(lineNo, ch, sticky, outside, x - baseX)
		  }

		  function coordsBidiPart(cm, lineObj, lineNo, preparedMeasure, order, x, y) {
		    // Bidi parts are sorted left-to-right, and in a non-line-wrapping
		    // situation, we can take this ordering to correspond to the visual
		    // ordering. This finds the first part whose end is after the given
		    // coordinates.
		    var index = findFirst(function (i) {
		      var part = order[i], ltr = part.level != 1;
		      return boxIsAfter(cursorCoords(cm, Pos(lineNo, ltr ? part.to : part.from, ltr ? "before" : "after"),
		                                     "line", lineObj, preparedMeasure), x, y, true)
		    }, 0, order.length - 1);
		    var part = order[index];
		    // If this isn't the first part, the part's start is also after
		    // the coordinates, and the coordinates aren't on the same line as
		    // that start, move one part back.
		    if (index > 0) {
		      var ltr = part.level != 1;
		      var start = cursorCoords(cm, Pos(lineNo, ltr ? part.from : part.to, ltr ? "after" : "before"),
		                               "line", lineObj, preparedMeasure);
		      if (boxIsAfter(start, x, y, true) && start.top > y)
		        { part = order[index - 1]; }
		    }
		    return part
		  }

		  function coordsBidiPartWrapped(cm, lineObj, _lineNo, preparedMeasure, order, x, y) {
		    // In a wrapped line, rtl text on wrapping boundaries can do things
		    // that don't correspond to the ordering in our `order` array at
		    // all, so a binary search doesn't work, and we want to return a
		    // part that only spans one line so that the binary search in
		    // coordsCharInner is safe. As such, we first find the extent of the
		    // wrapped line, and then do a flat search in which we discard any
		    // spans that aren't on the line.
		    var ref = wrappedLineExtent(cm, lineObj, preparedMeasure, y);
		    var begin = ref.begin;
		    var end = ref.end;
		    if (/\s/.test(lineObj.text.charAt(end - 1))) { end--; }
		    var part = null, closestDist = null;
		    for (var i = 0; i < order.length; i++) {
		      var p = order[i];
		      if (p.from >= end || p.to <= begin) { continue }
		      var ltr = p.level != 1;
		      var endX = measureCharPrepared(cm, preparedMeasure, ltr ? Math.min(end, p.to) - 1 : Math.max(begin, p.from)).right;
		      // Weigh against spans ending before this, so that they are only
		      // picked if nothing ends after
		      var dist = endX < x ? x - endX + 1e9 : endX - x;
		      if (!part || closestDist > dist) {
		        part = p;
		        closestDist = dist;
		      }
		    }
		    if (!part) { part = order[order.length - 1]; }
		    // Clip the part to the wrapped line.
		    if (part.from < begin) { part = {from: begin, to: part.to, level: part.level}; }
		    if (part.to > end) { part = {from: part.from, to: end, level: part.level}; }
		    return part
		  }

		  var measureText;
		  // Compute the default text height.
		  function textHeight(display) {
		    if (display.cachedTextHeight != null) { return display.cachedTextHeight }
		    if (measureText == null) {
		      measureText = elt("pre", null, "CodeMirror-line-like");
		      // Measure a bunch of lines, for browsers that compute
		      // fractional heights.
		      for (var i = 0; i < 49; ++i) {
		        measureText.appendChild(document.createTextNode("x"));
		        measureText.appendChild(elt("br"));
		      }
		      measureText.appendChild(document.createTextNode("x"));
		    }
		    removeChildrenAndAdd(display.measure, measureText);
		    var height = measureText.offsetHeight / 50;
		    if (height > 3) { display.cachedTextHeight = height; }
		    removeChildren(display.measure);
		    return height || 1
		  }

		  // Compute the default character width.
		  function charWidth(display) {
		    if (display.cachedCharWidth != null) { return display.cachedCharWidth }
		    var anchor = elt("span", "xxxxxxxxxx");
		    var pre = elt("pre", [anchor], "CodeMirror-line-like");
		    removeChildrenAndAdd(display.measure, pre);
		    var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
		    if (width > 2) { display.cachedCharWidth = width; }
		    return width || 10
		  }

		  // Do a bulk-read of the DOM positions and sizes needed to draw the
		  // view, so that we don't interleave reading and writing to the DOM.
		  function getDimensions(cm) {
		    var d = cm.display, left = {}, width = {};
		    var gutterLeft = d.gutters.clientLeft;
		    for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
		      var id = cm.display.gutterSpecs[i].className;
		      left[id] = n.offsetLeft + n.clientLeft + gutterLeft;
		      width[id] = n.clientWidth;
		    }
		    return {fixedPos: compensateForHScroll(d),
		            gutterTotalWidth: d.gutters.offsetWidth,
		            gutterLeft: left,
		            gutterWidth: width,
		            wrapperWidth: d.wrapper.clientWidth}
		  }

		  // Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
		  // but using getBoundingClientRect to get a sub-pixel-accurate
		  // result.
		  function compensateForHScroll(display) {
		    return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left
		  }

		  // Returns a function that estimates the height of a line, to use as
		  // first approximation until the line becomes visible (and is thus
		  // properly measurable).
		  function estimateHeight(cm) {
		    var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
		    var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
		    return function (line) {
		      if (lineIsHidden(cm.doc, line)) { return 0 }

		      var widgetsHeight = 0;
		      if (line.widgets) { for (var i = 0; i < line.widgets.length; i++) {
		        if (line.widgets[i].height) { widgetsHeight += line.widgets[i].height; }
		      } }

		      if (wrapping)
		        { return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th }
		      else
		        { return widgetsHeight + th }
		    }
		  }

		  function estimateLineHeights(cm) {
		    var doc = cm.doc, est = estimateHeight(cm);
		    doc.iter(function (line) {
		      var estHeight = est(line);
		      if (estHeight != line.height) { updateLineHeight(line, estHeight); }
		    });
		  }

		  // Given a mouse event, find the corresponding position. If liberal
		  // is false, it checks whether a gutter or scrollbar was clicked,
		  // and returns null if it was. forRect is used by rectangular
		  // selections, and tries to estimate a character position even for
		  // coordinates beyond the right of the text.
		  function posFromMouse(cm, e, liberal, forRect) {
		    var display = cm.display;
		    if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") { return null }

		    var x, y, space = display.lineSpace.getBoundingClientRect();
		    // Fails unpredictably on IE[67] when mouse is dragged around quickly.
		    try { x = e.clientX - space.left; y = e.clientY - space.top; }
		    catch (e$1) { return null }
		    var coords = coordsChar(cm, x, y), line;
		    if (forRect && coords.xRel > 0 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
		      var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
		      coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
		    }
		    return coords
		  }

		  // Find the view element corresponding to a given line. Return null
		  // when the line isn't visible.
		  function findViewIndex(cm, n) {
		    if (n >= cm.display.viewTo) { return null }
		    n -= cm.display.viewFrom;
		    if (n < 0) { return null }
		    var view = cm.display.view;
		    for (var i = 0; i < view.length; i++) {
		      n -= view[i].size;
		      if (n < 0) { return i }
		    }
		  }

		  // Updates the display.view data structure for a given change to the
		  // document. From and to are in pre-change coordinates. Lendiff is
		  // the amount of lines added or subtracted by the change. This is
		  // used for changes that span multiple lines, or change the way
		  // lines are divided into visual lines. regLineChange (below)
		  // registers single-line changes.
		  function regChange(cm, from, to, lendiff) {
		    if (from == null) { from = cm.doc.first; }
		    if (to == null) { to = cm.doc.first + cm.doc.size; }
		    if (!lendiff) { lendiff = 0; }

		    var display = cm.display;
		    if (lendiff && to < display.viewTo &&
		        (display.updateLineNumbers == null || display.updateLineNumbers > from))
		      { display.updateLineNumbers = from; }

		    cm.curOp.viewChanged = true;

		    if (from >= display.viewTo) { // Change after
		      if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
		        { resetView(cm); }
		    } else if (to <= display.viewFrom) { // Change before
		      if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
		        resetView(cm);
		      } else {
		        display.viewFrom += lendiff;
		        display.viewTo += lendiff;
		      }
		    } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
		      resetView(cm);
		    } else if (from <= display.viewFrom) { // Top overlap
		      var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
		      if (cut) {
		        display.view = display.view.slice(cut.index);
		        display.viewFrom = cut.lineN;
		        display.viewTo += lendiff;
		      } else {
		        resetView(cm);
		      }
		    } else if (to >= display.viewTo) { // Bottom overlap
		      var cut$1 = viewCuttingPoint(cm, from, from, -1);
		      if (cut$1) {
		        display.view = display.view.slice(0, cut$1.index);
		        display.viewTo = cut$1.lineN;
		      } else {
		        resetView(cm);
		      }
		    } else { // Gap in the middle
		      var cutTop = viewCuttingPoint(cm, from, from, -1);
		      var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
		      if (cutTop && cutBot) {
		        display.view = display.view.slice(0, cutTop.index)
		          .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
		          .concat(display.view.slice(cutBot.index));
		        display.viewTo += lendiff;
		      } else {
		        resetView(cm);
		      }
		    }

		    var ext = display.externalMeasured;
		    if (ext) {
		      if (to < ext.lineN)
		        { ext.lineN += lendiff; }
		      else if (from < ext.lineN + ext.size)
		        { display.externalMeasured = null; }
		    }
		  }

		  // Register a change to a single line. Type must be one of "text",
		  // "gutter", "class", "widget"
		  function regLineChange(cm, line, type) {
		    cm.curOp.viewChanged = true;
		    var display = cm.display, ext = cm.display.externalMeasured;
		    if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
		      { display.externalMeasured = null; }

		    if (line < display.viewFrom || line >= display.viewTo) { return }
		    var lineView = display.view[findViewIndex(cm, line)];
		    if (lineView.node == null) { return }
		    var arr = lineView.changes || (lineView.changes = []);
		    if (indexOf(arr, type) == -1) { arr.push(type); }
		  }

		  // Clear the view.
		  function resetView(cm) {
		    cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
		    cm.display.view = [];
		    cm.display.viewOffset = 0;
		  }

		  function viewCuttingPoint(cm, oldN, newN, dir) {
		    var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
		    if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
		      { return {index: index, lineN: newN} }
		    var n = cm.display.viewFrom;
		    for (var i = 0; i < index; i++)
		      { n += view[i].size; }
		    if (n != oldN) {
		      if (dir > 0) {
		        if (index == view.length - 1) { return null }
		        diff = (n + view[index].size) - oldN;
		        index++;
		      } else {
		        diff = n - oldN;
		      }
		      oldN += diff; newN += diff;
		    }
		    while (visualLineNo(cm.doc, newN) != newN) {
		      if (index == (dir < 0 ? 0 : view.length - 1)) { return null }
		      newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
		      index += dir;
		    }
		    return {index: index, lineN: newN}
		  }

		  // Force the view to cover a given range, adding empty view element
		  // or clipping off existing ones as needed.
		  function adjustView(cm, from, to) {
		    var display = cm.display, view = display.view;
		    if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
		      display.view = buildViewArray(cm, from, to);
		      display.viewFrom = from;
		    } else {
		      if (display.viewFrom > from)
		        { display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view); }
		      else if (display.viewFrom < from)
		        { display.view = display.view.slice(findViewIndex(cm, from)); }
		      display.viewFrom = from;
		      if (display.viewTo < to)
		        { display.view = display.view.concat(buildViewArray(cm, display.viewTo, to)); }
		      else if (display.viewTo > to)
		        { display.view = display.view.slice(0, findViewIndex(cm, to)); }
		    }
		    display.viewTo = to;
		  }

		  // Count the number of lines in the view whose DOM representation is
		  // out of date (or nonexistent).
		  function countDirtyView(cm) {
		    var view = cm.display.view, dirty = 0;
		    for (var i = 0; i < view.length; i++) {
		      var lineView = view[i];
		      if (!lineView.hidden && (!lineView.node || lineView.changes)) { ++dirty; }
		    }
		    return dirty
		  }

		  function updateSelection(cm) {
		    cm.display.input.showSelection(cm.display.input.prepareSelection());
		  }

		  function prepareSelection(cm, primary) {
		    if ( primary === void 0 ) primary = true;

		    var doc = cm.doc, result = {};
		    var curFragment = result.cursors = document.createDocumentFragment();
		    var selFragment = result.selection = document.createDocumentFragment();

		    var customCursor = cm.options.$customCursor;
		    if (customCursor) { primary = true; }
		    for (var i = 0; i < doc.sel.ranges.length; i++) {
		      if (!primary && i == doc.sel.primIndex) { continue }
		      var range = doc.sel.ranges[i];
		      if (range.from().line >= cm.display.viewTo || range.to().line < cm.display.viewFrom) { continue }
		      var collapsed = range.empty();
		      if (customCursor) {
		        var head = customCursor(cm, range);
		        if (head) { drawSelectionCursor(cm, head, curFragment); }
		      } else if (collapsed || cm.options.showCursorWhenSelecting) {
		        drawSelectionCursor(cm, range.head, curFragment);
		      }
		      if (!collapsed)
		        { drawSelectionRange(cm, range, selFragment); }
		    }
		    return result
		  }

		  // Draws a cursor for the given range
		  function drawSelectionCursor(cm, head, output) {
		    var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);

		    var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"));
		    cursor.style.left = pos.left + "px";
		    cursor.style.top = pos.top + "px";
		    cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";

		    if (/\bcm-fat-cursor\b/.test(cm.getWrapperElement().className)) {
		      var charPos = charCoords(cm, head, "div", null, null);
		      var width = charPos.right - charPos.left;
		      cursor.style.width = (width > 0 ? width : cm.defaultCharWidth()) + "px";
		    }

		    if (pos.other) {
		      // Secondary cursor, shown when on a 'jump' in bi-directional text
		      var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"));
		      otherCursor.style.display = "";
		      otherCursor.style.left = pos.other.left + "px";
		      otherCursor.style.top = pos.other.top + "px";
		      otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
		    }
		  }

		  function cmpCoords(a, b) { return a.top - b.top || a.left - b.left }

		  // Draws the given range as a highlighted selection
		  function drawSelectionRange(cm, range, output) {
		    var display = cm.display, doc = cm.doc;
		    var fragment = document.createDocumentFragment();
		    var padding = paddingH(cm.display), leftSide = padding.left;
		    var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;
		    var docLTR = doc.direction == "ltr";

		    function add(left, top, width, bottom) {
		      if (top < 0) { top = 0; }
		      top = Math.round(top);
		      bottom = Math.round(bottom);
		      fragment.appendChild(elt("div", null, "CodeMirror-selected", ("position: absolute; left: " + left + "px;\n                             top: " + top + "px; width: " + (width == null ? rightSide - left : width) + "px;\n                             height: " + (bottom - top) + "px")));
		    }

		    function drawForLine(line, fromArg, toArg) {
		      var lineObj = getLine(doc, line);
		      var lineLen = lineObj.text.length;
		      var start, end;
		      function coords(ch, bias) {
		        return charCoords(cm, Pos(line, ch), "div", lineObj, bias)
		      }

		      function wrapX(pos, dir, side) {
		        var extent = wrappedLineExtentChar(cm, lineObj, null, pos);
		        var prop = (dir == "ltr") == (side == "after") ? "left" : "right";
		        var ch = side == "after" ? extent.begin : extent.end - (/\s/.test(lineObj.text.charAt(extent.end - 1)) ? 2 : 1);
		        return coords(ch, prop)[prop]
		      }

		      var order = getOrder(lineObj, doc.direction);
		      iterateBidiSections(order, fromArg || 0, toArg == null ? lineLen : toArg, function (from, to, dir, i) {
		        var ltr = dir == "ltr";
		        var fromPos = coords(from, ltr ? "left" : "right");
		        var toPos = coords(to - 1, ltr ? "right" : "left");

		        var openStart = fromArg == null && from == 0, openEnd = toArg == null && to == lineLen;
		        var first = i == 0, last = !order || i == order.length - 1;
		        if (toPos.top - fromPos.top <= 3) { // Single line
		          var openLeft = (docLTR ? openStart : openEnd) && first;
		          var openRight = (docLTR ? openEnd : openStart) && last;
		          var left = openLeft ? leftSide : (ltr ? fromPos : toPos).left;
		          var right = openRight ? rightSide : (ltr ? toPos : fromPos).right;
		          add(left, fromPos.top, right - left, fromPos.bottom);
		        } else { // Multiple lines
		          var topLeft, topRight, botLeft, botRight;
		          if (ltr) {
		            topLeft = docLTR && openStart && first ? leftSide : fromPos.left;
		            topRight = docLTR ? rightSide : wrapX(from, dir, "before");
		            botLeft = docLTR ? leftSide : wrapX(to, dir, "after");
		            botRight = docLTR && openEnd && last ? rightSide : toPos.right;
		          } else {
		            topLeft = !docLTR ? leftSide : wrapX(from, dir, "before");
		            topRight = !docLTR && openStart && first ? rightSide : fromPos.right;
		            botLeft = !docLTR && openEnd && last ? leftSide : toPos.left;
		            botRight = !docLTR ? rightSide : wrapX(to, dir, "after");
		          }
		          add(topLeft, fromPos.top, topRight - topLeft, fromPos.bottom);
		          if (fromPos.bottom < toPos.top) { add(leftSide, fromPos.bottom, null, toPos.top); }
		          add(botLeft, toPos.top, botRight - botLeft, toPos.bottom);
		        }

		        if (!start || cmpCoords(fromPos, start) < 0) { start = fromPos; }
		        if (cmpCoords(toPos, start) < 0) { start = toPos; }
		        if (!end || cmpCoords(fromPos, end) < 0) { end = fromPos; }
		        if (cmpCoords(toPos, end) < 0) { end = toPos; }
		      });
		      return {start: start, end: end}
		    }

		    var sFrom = range.from(), sTo = range.to();
		    if (sFrom.line == sTo.line) {
		      drawForLine(sFrom.line, sFrom.ch, sTo.ch);
		    } else {
		      var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line);
		      var singleVLine = visualLine(fromLine) == visualLine(toLine);
		      var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
		      var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
		      if (singleVLine) {
		        if (leftEnd.top < rightStart.top - 2) {
		          add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
		          add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
		        } else {
		          add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
		        }
		      }
		      if (leftEnd.bottom < rightStart.top)
		        { add(leftSide, leftEnd.bottom, null, rightStart.top); }
		    }

		    output.appendChild(fragment);
		  }

		  // Cursor-blinking
		  function restartBlink(cm) {
		    if (!cm.state.focused) { return }
		    var display = cm.display;
		    clearInterval(display.blinker);
		    var on = true;
		    display.cursorDiv.style.visibility = "";
		    if (cm.options.cursorBlinkRate > 0)
		      { display.blinker = setInterval(function () {
		        if (!cm.hasFocus()) { onBlur(cm); }
		        display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden";
		      }, cm.options.cursorBlinkRate); }
		    else if (cm.options.cursorBlinkRate < 0)
		      { display.cursorDiv.style.visibility = "hidden"; }
		  }

		  function ensureFocus(cm) {
		    if (!cm.hasFocus()) {
		      cm.display.input.focus();
		      if (!cm.state.focused) { onFocus(cm); }
		    }
		  }

		  function delayBlurEvent(cm) {
		    cm.state.delayingBlurEvent = true;
		    setTimeout(function () { if (cm.state.delayingBlurEvent) {
		      cm.state.delayingBlurEvent = false;
		      if (cm.state.focused) { onBlur(cm); }
		    } }, 100);
		  }

		  function onFocus(cm, e) {
		    if (cm.state.delayingBlurEvent && !cm.state.draggingText) { cm.state.delayingBlurEvent = false; }

		    if (cm.options.readOnly == "nocursor") { return }
		    if (!cm.state.focused) {
		      signal(cm, "focus", cm, e);
		      cm.state.focused = true;
		      addClass(cm.display.wrapper, "CodeMirror-focused");
		      // This test prevents this from firing when a context
		      // menu is closed (since the input reset would kill the
		      // select-all detection hack)
		      if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
		        cm.display.input.reset();
		        if (webkit) { setTimeout(function () { return cm.display.input.reset(true); }, 20); } // Issue #1730
		      }
		      cm.display.input.receivedFocus();
		    }
		    restartBlink(cm);
		  }
		  function onBlur(cm, e) {
		    if (cm.state.delayingBlurEvent) { return }

		    if (cm.state.focused) {
		      signal(cm, "blur", cm, e);
		      cm.state.focused = false;
		      rmClass(cm.display.wrapper, "CodeMirror-focused");
		    }
		    clearInterval(cm.display.blinker);
		    setTimeout(function () { if (!cm.state.focused) { cm.display.shift = false; } }, 150);
		  }

		  // Read the actual heights of the rendered lines, and update their
		  // stored heights to match.
		  function updateHeightsInViewport(cm) {
		    var display = cm.display;
		    var prevBottom = display.lineDiv.offsetTop;
		    var viewTop = Math.max(0, display.scroller.getBoundingClientRect().top);
		    var oldHeight = display.lineDiv.getBoundingClientRect().top;
		    var mustScroll = 0;
		    for (var i = 0; i < display.view.length; i++) {
		      var cur = display.view[i], wrapping = cm.options.lineWrapping;
		      var height = (void 0), width = 0;
		      if (cur.hidden) { continue }
		      oldHeight += cur.line.height;
		      if (ie && ie_version < 8) {
		        var bot = cur.node.offsetTop + cur.node.offsetHeight;
		        height = bot - prevBottom;
		        prevBottom = bot;
		      } else {
		        var box = cur.node.getBoundingClientRect();
		        height = box.bottom - box.top;
		        // Check that lines don't extend past the right of the current
		        // editor width
		        if (!wrapping && cur.text.firstChild)
		          { width = cur.text.firstChild.getBoundingClientRect().right - box.left - 1; }
		      }
		      var diff = cur.line.height - height;
		      if (diff > .005 || diff < -5e-3) {
		        if (oldHeight < viewTop) { mustScroll -= diff; }
		        updateLineHeight(cur.line, height);
		        updateWidgetHeight(cur.line);
		        if (cur.rest) { for (var j = 0; j < cur.rest.length; j++)
		          { updateWidgetHeight(cur.rest[j]); } }
		      }
		      if (width > cm.display.sizerWidth) {
		        var chWidth = Math.ceil(width / charWidth(cm.display));
		        if (chWidth > cm.display.maxLineLength) {
		          cm.display.maxLineLength = chWidth;
		          cm.display.maxLine = cur.line;
		          cm.display.maxLineChanged = true;
		        }
		      }
		    }
		    if (Math.abs(mustScroll) > 2) { display.scroller.scrollTop += mustScroll; }
		  }

		  // Read and store the height of line widgets associated with the
		  // given line.
		  function updateWidgetHeight(line) {
		    if (line.widgets) { for (var i = 0; i < line.widgets.length; ++i) {
		      var w = line.widgets[i], parent = w.node.parentNode;
		      if (parent) { w.height = parent.offsetHeight; }
		    } }
		  }

		  // Compute the lines that are visible in a given viewport (defaults
		  // the current scroll position). viewport may contain top,
		  // height, and ensure (see op.scrollToPos) properties.
		  function visibleLines(display, doc, viewport) {
		    var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
		    top = Math.floor(top - paddingTop(display));
		    var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;

		    var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
		    // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
		    // forces those lines into the viewport (if possible).
		    if (viewport && viewport.ensure) {
		      var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
		      if (ensureFrom < from) {
		        from = ensureFrom;
		        to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
		      } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
		        from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
		        to = ensureTo;
		      }
		    }
		    return {from: from, to: Math.max(to, from + 1)}
		  }

		  // SCROLLING THINGS INTO VIEW

		  // If an editor sits on the top or bottom of the window, partially
		  // scrolled out of view, this ensures that the cursor is visible.
		  function maybeScrollWindow(cm, rect) {
		    if (signalDOMEvent(cm, "scrollCursorIntoView")) { return }

		    var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
		    var doc = display.wrapper.ownerDocument;
		    if (rect.top + box.top < 0) { doScroll = true; }
		    else if (rect.bottom + box.top > (doc.defaultView.innerHeight || doc.documentElement.clientHeight)) { doScroll = false; }
		    if (doScroll != null && !phantom) {
		      var scrollNode = elt("div", "\u200b", null, ("position: absolute;\n                         top: " + (rect.top - display.viewOffset - paddingTop(cm.display)) + "px;\n                         height: " + (rect.bottom - rect.top + scrollGap(cm) + display.barHeight) + "px;\n                         left: " + (rect.left) + "px; width: " + (Math.max(2, rect.right - rect.left)) + "px;"));
		      cm.display.lineSpace.appendChild(scrollNode);
		      scrollNode.scrollIntoView(doScroll);
		      cm.display.lineSpace.removeChild(scrollNode);
		    }
		  }

		  // Scroll a given position into view (immediately), verifying that
		  // it actually became visible (as line heights are accurately
		  // measured, the position of something may 'drift' during drawing).
		  function scrollPosIntoView(cm, pos, end, margin) {
		    if (margin == null) { margin = 0; }
		    var rect;
		    if (!cm.options.lineWrapping && pos == end) {
		      // Set pos and end to the cursor positions around the character pos sticks to
		      // If pos.sticky == "before", that is around pos.ch - 1, otherwise around pos.ch
		      // If pos == Pos(_, 0, "before"), pos and end are unchanged
		      end = pos.sticky == "before" ? Pos(pos.line, pos.ch + 1, "before") : pos;
		      pos = pos.ch ? Pos(pos.line, pos.sticky == "before" ? pos.ch - 1 : pos.ch, "after") : pos;
		    }
		    for (var limit = 0; limit < 5; limit++) {
		      var changed = false;
		      var coords = cursorCoords(cm, pos);
		      var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
		      rect = {left: Math.min(coords.left, endCoords.left),
		              top: Math.min(coords.top, endCoords.top) - margin,
		              right: Math.max(coords.left, endCoords.left),
		              bottom: Math.max(coords.bottom, endCoords.bottom) + margin};
		      var scrollPos = calculateScrollPos(cm, rect);
		      var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
		      if (scrollPos.scrollTop != null) {
		        updateScrollTop(cm, scrollPos.scrollTop);
		        if (Math.abs(cm.doc.scrollTop - startTop) > 1) { changed = true; }
		      }
		      if (scrollPos.scrollLeft != null) {
		        setScrollLeft(cm, scrollPos.scrollLeft);
		        if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) { changed = true; }
		      }
		      if (!changed) { break }
		    }
		    return rect
		  }

		  // Scroll a given set of coordinates into view (immediately).
		  function scrollIntoView(cm, rect) {
		    var scrollPos = calculateScrollPos(cm, rect);
		    if (scrollPos.scrollTop != null) { updateScrollTop(cm, scrollPos.scrollTop); }
		    if (scrollPos.scrollLeft != null) { setScrollLeft(cm, scrollPos.scrollLeft); }
		  }

		  // Calculate a new scroll position needed to scroll the given
		  // rectangle into view. Returns an object with scrollTop and
		  // scrollLeft properties. When these are undefined, the
		  // vertical/horizontal position does not need to be adjusted.
		  function calculateScrollPos(cm, rect) {
		    var display = cm.display, snapMargin = textHeight(cm.display);
		    if (rect.top < 0) { rect.top = 0; }
		    var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
		    var screen = displayHeight(cm), result = {};
		    if (rect.bottom - rect.top > screen) { rect.bottom = rect.top + screen; }
		    var docBottom = cm.doc.height + paddingVert(display);
		    var atTop = rect.top < snapMargin, atBottom = rect.bottom > docBottom - snapMargin;
		    if (rect.top < screentop) {
		      result.scrollTop = atTop ? 0 : rect.top;
		    } else if (rect.bottom > screentop + screen) {
		      var newTop = Math.min(rect.top, (atBottom ? docBottom : rect.bottom) - screen);
		      if (newTop != screentop) { result.scrollTop = newTop; }
		    }

		    var gutterSpace = cm.options.fixedGutter ? 0 : display.gutters.offsetWidth;
		    var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft - gutterSpace;
		    var screenw = displayWidth(cm) - display.gutters.offsetWidth;
		    var tooWide = rect.right - rect.left > screenw;
		    if (tooWide) { rect.right = rect.left + screenw; }
		    if (rect.left < 10)
		      { result.scrollLeft = 0; }
		    else if (rect.left < screenleft)
		      { result.scrollLeft = Math.max(0, rect.left + gutterSpace - (tooWide ? 0 : 10)); }
		    else if (rect.right > screenw + screenleft - 3)
		      { result.scrollLeft = rect.right + (tooWide ? 0 : 10) - screenw; }
		    return result
		  }

		  // Store a relative adjustment to the scroll position in the current
		  // operation (to be applied when the operation finishes).
		  function addToScrollTop(cm, top) {
		    if (top == null) { return }
		    resolveScrollToPos(cm);
		    cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
		  }

		  // Make sure that at the end of the operation the current cursor is
		  // shown.
		  function ensureCursorVisible(cm) {
		    resolveScrollToPos(cm);
		    var cur = cm.getCursor();
		    cm.curOp.scrollToPos = {from: cur, to: cur, margin: cm.options.cursorScrollMargin};
		  }

		  function scrollToCoords(cm, x, y) {
		    if (x != null || y != null) { resolveScrollToPos(cm); }
		    if (x != null) { cm.curOp.scrollLeft = x; }
		    if (y != null) { cm.curOp.scrollTop = y; }
		  }

		  function scrollToRange(cm, range) {
		    resolveScrollToPos(cm);
		    cm.curOp.scrollToPos = range;
		  }

		  // When an operation has its scrollToPos property set, and another
		  // scroll action is applied before the end of the operation, this
		  // 'simulates' scrolling that position into view in a cheap way, so
		  // that the effect of intermediate scroll commands is not ignored.
		  function resolveScrollToPos(cm) {
		    var range = cm.curOp.scrollToPos;
		    if (range) {
		      cm.curOp.scrollToPos = null;
		      var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to);
		      scrollToCoordsRange(cm, from, to, range.margin);
		    }
		  }

		  function scrollToCoordsRange(cm, from, to, margin) {
		    var sPos = calculateScrollPos(cm, {
		      left: Math.min(from.left, to.left),
		      top: Math.min(from.top, to.top) - margin,
		      right: Math.max(from.right, to.right),
		      bottom: Math.max(from.bottom, to.bottom) + margin
		    });
		    scrollToCoords(cm, sPos.scrollLeft, sPos.scrollTop);
		  }

		  // Sync the scrollable area and scrollbars, ensure the viewport
		  // covers the visible area.
		  function updateScrollTop(cm, val) {
		    if (Math.abs(cm.doc.scrollTop - val) < 2) { return }
		    if (!gecko) { updateDisplaySimple(cm, {top: val}); }
		    setScrollTop(cm, val, true);
		    if (gecko) { updateDisplaySimple(cm); }
		    startWorker(cm, 100);
		  }

		  function setScrollTop(cm, val, forceScroll) {
		    val = Math.max(0, Math.min(cm.display.scroller.scrollHeight - cm.display.scroller.clientHeight, val));
		    if (cm.display.scroller.scrollTop == val && !forceScroll) { return }
		    cm.doc.scrollTop = val;
		    cm.display.scrollbars.setScrollTop(val);
		    if (cm.display.scroller.scrollTop != val) { cm.display.scroller.scrollTop = val; }
		  }

		  // Sync scroller and scrollbar, ensure the gutter elements are
		  // aligned.
		  function setScrollLeft(cm, val, isScroller, forceScroll) {
		    val = Math.max(0, Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth));
		    if ((isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) && !forceScroll) { return }
		    cm.doc.scrollLeft = val;
		    alignHorizontally(cm);
		    if (cm.display.scroller.scrollLeft != val) { cm.display.scroller.scrollLeft = val; }
		    cm.display.scrollbars.setScrollLeft(val);
		  }

		  // SCROLLBARS

		  // Prepare DOM reads needed to update the scrollbars. Done in one
		  // shot to minimize update/measure roundtrips.
		  function measureForScrollbars(cm) {
		    var d = cm.display, gutterW = d.gutters.offsetWidth;
		    var docH = Math.round(cm.doc.height + paddingVert(cm.display));
		    return {
		      clientHeight: d.scroller.clientHeight,
		      viewHeight: d.wrapper.clientHeight,
		      scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
		      viewWidth: d.wrapper.clientWidth,
		      barLeft: cm.options.fixedGutter ? gutterW : 0,
		      docHeight: docH,
		      scrollHeight: docH + scrollGap(cm) + d.barHeight,
		      nativeBarWidth: d.nativeBarWidth,
		      gutterWidth: gutterW
		    }
		  }

		  var NativeScrollbars = function(place, scroll, cm) {
		    this.cm = cm;
		    var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
		    var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
		    vert.tabIndex = horiz.tabIndex = -1;
		    place(vert); place(horiz);

		    on(vert, "scroll", function () {
		      if (vert.clientHeight) { scroll(vert.scrollTop, "vertical"); }
		    });
		    on(horiz, "scroll", function () {
		      if (horiz.clientWidth) { scroll(horiz.scrollLeft, "horizontal"); }
		    });

		    this.checkedZeroWidth = false;
		    // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
		    if (ie && ie_version < 8) { this.horiz.style.minHeight = this.vert.style.minWidth = "18px"; }
		  };

		  NativeScrollbars.prototype.update = function (measure) {
		    var needsH = measure.scrollWidth > measure.clientWidth + 1;
		    var needsV = measure.scrollHeight > measure.clientHeight + 1;
		    var sWidth = measure.nativeBarWidth;

		    if (needsV) {
		      this.vert.style.display = "block";
		      this.vert.style.bottom = needsH ? sWidth + "px" : "0";
		      var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
		      // A bug in IE8 can cause this value to be negative, so guard it.
		      this.vert.firstChild.style.height =
		        Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
		    } else {
		      this.vert.scrollTop = 0;
		      this.vert.style.display = "";
		      this.vert.firstChild.style.height = "0";
		    }

		    if (needsH) {
		      this.horiz.style.display = "block";
		      this.horiz.style.right = needsV ? sWidth + "px" : "0";
		      this.horiz.style.left = measure.barLeft + "px";
		      var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
		      this.horiz.firstChild.style.width =
		        Math.max(0, measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
		    } else {
		      this.horiz.style.display = "";
		      this.horiz.firstChild.style.width = "0";
		    }

		    if (!this.checkedZeroWidth && measure.clientHeight > 0) {
		      if (sWidth == 0) { this.zeroWidthHack(); }
		      this.checkedZeroWidth = true;
		    }

		    return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0}
		  };

		  NativeScrollbars.prototype.setScrollLeft = function (pos) {
		    if (this.horiz.scrollLeft != pos) { this.horiz.scrollLeft = pos; }
		    if (this.disableHoriz) { this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz"); }
		  };

		  NativeScrollbars.prototype.setScrollTop = function (pos) {
		    if (this.vert.scrollTop != pos) { this.vert.scrollTop = pos; }
		    if (this.disableVert) { this.enableZeroWidthBar(this.vert, this.disableVert, "vert"); }
		  };

		  NativeScrollbars.prototype.zeroWidthHack = function () {
		    var w = mac && !mac_geMountainLion ? "12px" : "18px";
		    this.horiz.style.height = this.vert.style.width = w;
		    this.horiz.style.visibility = this.vert.style.visibility = "hidden";
		    this.disableHoriz = new Delayed;
		    this.disableVert = new Delayed;
		  };

		  NativeScrollbars.prototype.enableZeroWidthBar = function (bar, delay, type) {
		    bar.style.visibility = "";
		    function maybeDisable() {
		      // To find out whether the scrollbar is still visible, we
		      // check whether the element under the pixel in the bottom
		      // right corner of the scrollbar box is the scrollbar box
		      // itself (when the bar is still visible) or its filler child
		      // (when the bar is hidden). If it is still visible, we keep
		      // it enabled, if it's hidden, we disable pointer events.
		      var box = bar.getBoundingClientRect();
		      var elt = type == "vert" ? document.elementFromPoint(box.right - 1, (box.top + box.bottom) / 2)
		          : document.elementFromPoint((box.right + box.left) / 2, box.bottom - 1);
		      if (elt != bar) { bar.style.visibility = "hidden"; }
		      else { delay.set(1000, maybeDisable); }
		    }
		    delay.set(1000, maybeDisable);
		  };

		  NativeScrollbars.prototype.clear = function () {
		    var parent = this.horiz.parentNode;
		    parent.removeChild(this.horiz);
		    parent.removeChild(this.vert);
		  };

		  var NullScrollbars = function () {};

		  NullScrollbars.prototype.update = function () { return {bottom: 0, right: 0} };
		  NullScrollbars.prototype.setScrollLeft = function () {};
		  NullScrollbars.prototype.setScrollTop = function () {};
		  NullScrollbars.prototype.clear = function () {};

		  function updateScrollbars(cm, measure) {
		    if (!measure) { measure = measureForScrollbars(cm); }
		    var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
		    updateScrollbarsInner(cm, measure);
		    for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
		      if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
		        { updateHeightsInViewport(cm); }
		      updateScrollbarsInner(cm, measureForScrollbars(cm));
		      startWidth = cm.display.barWidth; startHeight = cm.display.barHeight;
		    }
		  }

		  // Re-synchronize the fake scrollbars with the actual size of the
		  // content.
		  function updateScrollbarsInner(cm, measure) {
		    var d = cm.display;
		    var sizes = d.scrollbars.update(measure);

		    d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
		    d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";
		    d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent";

		    if (sizes.right && sizes.bottom) {
		      d.scrollbarFiller.style.display = "block";
		      d.scrollbarFiller.style.height = sizes.bottom + "px";
		      d.scrollbarFiller.style.width = sizes.right + "px";
		    } else { d.scrollbarFiller.style.display = ""; }
		    if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
		      d.gutterFiller.style.display = "block";
		      d.gutterFiller.style.height = sizes.bottom + "px";
		      d.gutterFiller.style.width = measure.gutterWidth + "px";
		    } else { d.gutterFiller.style.display = ""; }
		  }

		  var scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars};

		  function initScrollbars(cm) {
		    if (cm.display.scrollbars) {
		      cm.display.scrollbars.clear();
		      if (cm.display.scrollbars.addClass)
		        { rmClass(cm.display.wrapper, cm.display.scrollbars.addClass); }
		    }

		    cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](function (node) {
		      cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
		      // Prevent clicks in the scrollbars from killing focus
		      on(node, "mousedown", function () {
		        if (cm.state.focused) { setTimeout(function () { return cm.display.input.focus(); }, 0); }
		      });
		      node.setAttribute("cm-not-content", "true");
		    }, function (pos, axis) {
		      if (axis == "horizontal") { setScrollLeft(cm, pos); }
		      else { updateScrollTop(cm, pos); }
		    }, cm);
		    if (cm.display.scrollbars.addClass)
		      { addClass(cm.display.wrapper, cm.display.scrollbars.addClass); }
		  }

		  // Operations are used to wrap a series of changes to the editor
		  // state in such a way that each change won't have to update the
		  // cursor and display (which would be awkward, slow, and
		  // error-prone). Instead, display updates are batched and then all
		  // combined and executed at once.

		  var nextOpId = 0;
		  // Start a new operation.
		  function startOperation(cm) {
		    cm.curOp = {
		      cm: cm,
		      viewChanged: false,      // Flag that indicates that lines might need to be redrawn
		      startHeight: cm.doc.height, // Used to detect need to update scrollbar
		      forceUpdate: false,      // Used to force a redraw
		      updateInput: 0,       // Whether to reset the input textarea
		      typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
		      changeObjs: null,        // Accumulated changes, for firing change events
		      cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
		      cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
		      selectionChanged: false, // Whether the selection needs to be redrawn
		      updateMaxLine: false,    // Set when the widest line needs to be determined anew
		      scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
		      scrollToPos: null,       // Used to scroll to a specific position
		      focus: false,
		      id: ++nextOpId,          // Unique ID
		      markArrays: null         // Used by addMarkedSpan
		    };
		    pushOperation(cm.curOp);
		  }

		  // Finish an operation, updating the display and signalling delayed events
		  function endOperation(cm) {
		    var op = cm.curOp;
		    if (op) { finishOperation(op, function (group) {
		      for (var i = 0; i < group.ops.length; i++)
		        { group.ops[i].cm.curOp = null; }
		      endOperations(group);
		    }); }
		  }

		  // The DOM updates done when an operation finishes are batched so
		  // that the minimum number of relayouts are required.
		  function endOperations(group) {
		    var ops = group.ops;
		    for (var i = 0; i < ops.length; i++) // Read DOM
		      { endOperation_R1(ops[i]); }
		    for (var i$1 = 0; i$1 < ops.length; i$1++) // Write DOM (maybe)
		      { endOperation_W1(ops[i$1]); }
		    for (var i$2 = 0; i$2 < ops.length; i$2++) // Read DOM
		      { endOperation_R2(ops[i$2]); }
		    for (var i$3 = 0; i$3 < ops.length; i$3++) // Write DOM (maybe)
		      { endOperation_W2(ops[i$3]); }
		    for (var i$4 = 0; i$4 < ops.length; i$4++) // Read DOM
		      { endOperation_finish(ops[i$4]); }
		  }

		  function endOperation_R1(op) {
		    var cm = op.cm, display = cm.display;
		    maybeClipScrollbars(cm);
		    if (op.updateMaxLine) { findMaxLine(cm); }

		    op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
		      op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
		                         op.scrollToPos.to.line >= display.viewTo) ||
		      display.maxLineChanged && cm.options.lineWrapping;
		    op.update = op.mustUpdate &&
		      new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate);
		  }

		  function endOperation_W1(op) {
		    op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
		  }

		  function endOperation_R2(op) {
		    var cm = op.cm, display = cm.display;
		    if (op.updatedDisplay) { updateHeightsInViewport(cm); }

		    op.barMeasure = measureForScrollbars(cm);

		    // If the max line changed since it was last measured, measure it,
		    // and ensure the document's width matches it.
		    // updateDisplay_W2 will use these properties to do the actual resizing
		    if (display.maxLineChanged && !cm.options.lineWrapping) {
		      op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
		      cm.display.sizerWidth = op.adjustWidthTo;
		      op.barMeasure.scrollWidth =
		        Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
		      op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
		    }

		    if (op.updatedDisplay || op.selectionChanged)
		      { op.preparedSelection = display.input.prepareSelection(); }
		  }

		  function endOperation_W2(op) {
		    var cm = op.cm;

		    if (op.adjustWidthTo != null) {
		      cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
		      if (op.maxScrollLeft < cm.doc.scrollLeft)
		        { setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true); }
		      cm.display.maxLineChanged = false;
		    }

		    var takeFocus = op.focus && op.focus == activeElt(root(cm));
		    if (op.preparedSelection)
		      { cm.display.input.showSelection(op.preparedSelection, takeFocus); }
		    if (op.updatedDisplay || op.startHeight != cm.doc.height)
		      { updateScrollbars(cm, op.barMeasure); }
		    if (op.updatedDisplay)
		      { setDocumentHeight(cm, op.barMeasure); }

		    if (op.selectionChanged) { restartBlink(cm); }

		    if (cm.state.focused && op.updateInput)
		      { cm.display.input.reset(op.typing); }
		    if (takeFocus) { ensureFocus(op.cm); }
		  }

		  function endOperation_finish(op) {
		    var cm = op.cm, display = cm.display, doc = cm.doc;

		    if (op.updatedDisplay) { postUpdateDisplay(cm, op.update); }

		    // Abort mouse wheel delta measurement, when scrolling explicitly
		    if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
		      { display.wheelStartX = display.wheelStartY = null; }

		    // Propagate the scroll position to the actual DOM scroller
		    if (op.scrollTop != null) { setScrollTop(cm, op.scrollTop, op.forceScroll); }

		    if (op.scrollLeft != null) { setScrollLeft(cm, op.scrollLeft, true, true); }
		    // If we need to scroll a specific position into view, do so.
		    if (op.scrollToPos) {
		      var rect = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
		                                   clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
		      maybeScrollWindow(cm, rect);
		    }

		    // Fire events for markers that are hidden/unidden by editing or
		    // undoing
		    var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
		    if (hidden) { for (var i = 0; i < hidden.length; ++i)
		      { if (!hidden[i].lines.length) { signal(hidden[i], "hide"); } } }
		    if (unhidden) { for (var i$1 = 0; i$1 < unhidden.length; ++i$1)
		      { if (unhidden[i$1].lines.length) { signal(unhidden[i$1], "unhide"); } } }

		    if (display.wrapper.offsetHeight)
		      { doc.scrollTop = cm.display.scroller.scrollTop; }

		    // Fire change events, and delayed event handlers
		    if (op.changeObjs)
		      { signal(cm, "changes", cm, op.changeObjs); }
		    if (op.update)
		      { op.update.finish(); }
		  }

		  // Run the given function in an operation
		  function runInOp(cm, f) {
		    if (cm.curOp) { return f() }
		    startOperation(cm);
		    try { return f() }
		    finally { endOperation(cm); }
		  }
		  // Wraps a function in an operation. Returns the wrapped function.
		  function operation(cm, f) {
		    return function() {
		      if (cm.curOp) { return f.apply(cm, arguments) }
		      startOperation(cm);
		      try { return f.apply(cm, arguments) }
		      finally { endOperation(cm); }
		    }
		  }
		  // Used to add methods to editor and doc instances, wrapping them in
		  // operations.
		  function methodOp(f) {
		    return function() {
		      if (this.curOp) { return f.apply(this, arguments) }
		      startOperation(this);
		      try { return f.apply(this, arguments) }
		      finally { endOperation(this); }
		    }
		  }
		  function docMethodOp(f) {
		    return function() {
		      var cm = this.cm;
		      if (!cm || cm.curOp) { return f.apply(this, arguments) }
		      startOperation(cm);
		      try { return f.apply(this, arguments) }
		      finally { endOperation(cm); }
		    }
		  }

		  // HIGHLIGHT WORKER

		  function startWorker(cm, time) {
		    if (cm.doc.highlightFrontier < cm.display.viewTo)
		      { cm.state.highlight.set(time, bind(highlightWorker, cm)); }
		  }

		  function highlightWorker(cm) {
		    var doc = cm.doc;
		    if (doc.highlightFrontier >= cm.display.viewTo) { return }
		    var end = +new Date + cm.options.workTime;
		    var context = getContextBefore(cm, doc.highlightFrontier);
		    var changedLines = [];

		    doc.iter(context.line, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function (line) {
		      if (context.line >= cm.display.viewFrom) { // Visible
		        var oldStyles = line.styles;
		        var resetState = line.text.length > cm.options.maxHighlightLength ? copyState(doc.mode, context.state) : null;
		        var highlighted = highlightLine(cm, line, context, true);
		        if (resetState) { context.state = resetState; }
		        line.styles = highlighted.styles;
		        var oldCls = line.styleClasses, newCls = highlighted.classes;
		        if (newCls) { line.styleClasses = newCls; }
		        else if (oldCls) { line.styleClasses = null; }
		        var ischange = !oldStyles || oldStyles.length != line.styles.length ||
		          oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
		        for (var i = 0; !ischange && i < oldStyles.length; ++i) { ischange = oldStyles[i] != line.styles[i]; }
		        if (ischange) { changedLines.push(context.line); }
		        line.stateAfter = context.save();
		        context.nextLine();
		      } else {
		        if (line.text.length <= cm.options.maxHighlightLength)
		          { processLine(cm, line.text, context); }
		        line.stateAfter = context.line % 5 == 0 ? context.save() : null;
		        context.nextLine();
		      }
		      if (+new Date > end) {
		        startWorker(cm, cm.options.workDelay);
		        return true
		      }
		    });
		    doc.highlightFrontier = context.line;
		    doc.modeFrontier = Math.max(doc.modeFrontier, context.line);
		    if (changedLines.length) { runInOp(cm, function () {
		      for (var i = 0; i < changedLines.length; i++)
		        { regLineChange(cm, changedLines[i], "text"); }
		    }); }
		  }

		  // DISPLAY DRAWING

		  var DisplayUpdate = function(cm, viewport, force) {
		    var display = cm.display;

		    this.viewport = viewport;
		    // Store some values that we'll need later (but don't want to force a relayout for)
		    this.visible = visibleLines(display, cm.doc, viewport);
		    this.editorIsHidden = !display.wrapper.offsetWidth;
		    this.wrapperHeight = display.wrapper.clientHeight;
		    this.wrapperWidth = display.wrapper.clientWidth;
		    this.oldDisplayWidth = displayWidth(cm);
		    this.force = force;
		    this.dims = getDimensions(cm);
		    this.events = [];
		  };

		  DisplayUpdate.prototype.signal = function (emitter, type) {
		    if (hasHandler(emitter, type))
		      { this.events.push(arguments); }
		  };
		  DisplayUpdate.prototype.finish = function () {
		    for (var i = 0; i < this.events.length; i++)
		      { signal.apply(null, this.events[i]); }
		  };

		  function maybeClipScrollbars(cm) {
		    var display = cm.display;
		    if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
		      display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
		      display.heightForcer.style.height = scrollGap(cm) + "px";
		      display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
		      display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
		      display.scrollbarsClipped = true;
		    }
		  }

		  function selectionSnapshot(cm) {
		    if (cm.hasFocus()) { return null }
		    var active = activeElt(root(cm));
		    if (!active || !contains(cm.display.lineDiv, active)) { return null }
		    var result = {activeElt: active};
		    if (window.getSelection) {
		      var sel = win(cm).getSelection();
		      if (sel.anchorNode && sel.extend && contains(cm.display.lineDiv, sel.anchorNode)) {
		        result.anchorNode = sel.anchorNode;
		        result.anchorOffset = sel.anchorOffset;
		        result.focusNode = sel.focusNode;
		        result.focusOffset = sel.focusOffset;
		      }
		    }
		    return result
		  }

		  function restoreSelection(snapshot) {
		    if (!snapshot || !snapshot.activeElt || snapshot.activeElt == activeElt(rootNode(snapshot.activeElt))) { return }
		    snapshot.activeElt.focus();
		    if (!/^(INPUT|TEXTAREA)$/.test(snapshot.activeElt.nodeName) &&
		        snapshot.anchorNode && contains(document.body, snapshot.anchorNode) && contains(document.body, snapshot.focusNode)) {
		      var doc = snapshot.activeElt.ownerDocument;
		      var sel = doc.defaultView.getSelection(), range = doc.createRange();
		      range.setEnd(snapshot.anchorNode, snapshot.anchorOffset);
		      range.collapse(false);
		      sel.removeAllRanges();
		      sel.addRange(range);
		      sel.extend(snapshot.focusNode, snapshot.focusOffset);
		    }
		  }

		  // Does the actual updating of the line display. Bails out
		  // (returning false) when there is nothing to be done and forced is
		  // false.
		  function updateDisplayIfNeeded(cm, update) {
		    var display = cm.display, doc = cm.doc;

		    if (update.editorIsHidden) {
		      resetView(cm);
		      return false
		    }

		    // Bail out if the visible area is already rendered and nothing changed.
		    if (!update.force &&
		        update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
		        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
		        display.renderedView == display.view && countDirtyView(cm) == 0)
		      { return false }

		    if (maybeUpdateLineNumberWidth(cm)) {
		      resetView(cm);
		      update.dims = getDimensions(cm);
		    }

		    // Compute a suitable new viewport (from & to)
		    var end = doc.first + doc.size;
		    var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
		    var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
		    if (display.viewFrom < from && from - display.viewFrom < 20) { from = Math.max(doc.first, display.viewFrom); }
		    if (display.viewTo > to && display.viewTo - to < 20) { to = Math.min(end, display.viewTo); }
		    if (sawCollapsedSpans) {
		      from = visualLineNo(cm.doc, from);
		      to = visualLineEndNo(cm.doc, to);
		    }

		    var different = from != display.viewFrom || to != display.viewTo ||
		      display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
		    adjustView(cm, from, to);

		    display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
		    // Position the mover div to align with the current scroll position
		    cm.display.mover.style.top = display.viewOffset + "px";

		    var toUpdate = countDirtyView(cm);
		    if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
		        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
		      { return false }

		    // For big changes, we hide the enclosing element during the
		    // update, since that speeds up the operations on most browsers.
		    var selSnapshot = selectionSnapshot(cm);
		    if (toUpdate > 4) { display.lineDiv.style.display = "none"; }
		    patchDisplay(cm, display.updateLineNumbers, update.dims);
		    if (toUpdate > 4) { display.lineDiv.style.display = ""; }
		    display.renderedView = display.view;
		    // There might have been a widget with a focused element that got
		    // hidden or updated, if so re-focus it.
		    restoreSelection(selSnapshot);

		    // Prevent selection and cursors from interfering with the scroll
		    // width and height.
		    removeChildren(display.cursorDiv);
		    removeChildren(display.selectionDiv);
		    display.gutters.style.height = display.sizer.style.minHeight = 0;

		    if (different) {
		      display.lastWrapHeight = update.wrapperHeight;
		      display.lastWrapWidth = update.wrapperWidth;
		      startWorker(cm, 400);
		    }

		    display.updateLineNumbers = null;

		    return true
		  }

		  function postUpdateDisplay(cm, update) {
		    var viewport = update.viewport;

		    for (var first = true;; first = false) {
		      if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
		        // Clip forced viewport to actual scrollable area.
		        if (viewport && viewport.top != null)
		          { viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)}; }
		        // Updated line heights might result in the drawn area not
		        // actually covering the viewport. Keep looping until it does.
		        update.visible = visibleLines(cm.display, cm.doc, viewport);
		        if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
		          { break }
		      } else if (first) {
		        update.visible = visibleLines(cm.display, cm.doc, viewport);
		      }
		      if (!updateDisplayIfNeeded(cm, update)) { break }
		      updateHeightsInViewport(cm);
		      var barMeasure = measureForScrollbars(cm);
		      updateSelection(cm);
		      updateScrollbars(cm, barMeasure);
		      setDocumentHeight(cm, barMeasure);
		      update.force = false;
		    }

		    update.signal(cm, "update", cm);
		    if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
		      update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
		      cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo;
		    }
		  }

		  function updateDisplaySimple(cm, viewport) {
		    var update = new DisplayUpdate(cm, viewport);
		    if (updateDisplayIfNeeded(cm, update)) {
		      updateHeightsInViewport(cm);
		      postUpdateDisplay(cm, update);
		      var barMeasure = measureForScrollbars(cm);
		      updateSelection(cm);
		      updateScrollbars(cm, barMeasure);
		      setDocumentHeight(cm, barMeasure);
		      update.finish();
		    }
		  }

		  // Sync the actual display DOM structure with display.view, removing
		  // nodes for lines that are no longer in view, and creating the ones
		  // that are not there yet, and updating the ones that are out of
		  // date.
		  function patchDisplay(cm, updateNumbersFrom, dims) {
		    var display = cm.display, lineNumbers = cm.options.lineNumbers;
		    var container = display.lineDiv, cur = container.firstChild;

		    function rm(node) {
		      var next = node.nextSibling;
		      // Works around a throw-scroll bug in OS X Webkit
		      if (webkit && mac && cm.display.currentWheelTarget == node)
		        { node.style.display = "none"; }
		      else
		        { node.parentNode.removeChild(node); }
		      return next
		    }

		    var view = display.view, lineN = display.viewFrom;
		    // Loop over the elements in the view, syncing cur (the DOM nodes
		    // in display.lineDiv) with the view as we go.
		    for (var i = 0; i < view.length; i++) {
		      var lineView = view[i];
		      if (lineView.hidden) ; else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
		        var node = buildLineElement(cm, lineView, lineN, dims);
		        container.insertBefore(node, cur);
		      } else { // Already drawn
		        while (cur != lineView.node) { cur = rm(cur); }
		        var updateNumber = lineNumbers && updateNumbersFrom != null &&
		          updateNumbersFrom <= lineN && lineView.lineNumber;
		        if (lineView.changes) {
		          if (indexOf(lineView.changes, "gutter") > -1) { updateNumber = false; }
		          updateLineForChanges(cm, lineView, lineN, dims);
		        }
		        if (updateNumber) {
		          removeChildren(lineView.lineNumber);
		          lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
		        }
		        cur = lineView.node.nextSibling;
		      }
		      lineN += lineView.size;
		    }
		    while (cur) { cur = rm(cur); }
		  }

		  function updateGutterSpace(display) {
		    var width = display.gutters.offsetWidth;
		    display.sizer.style.marginLeft = width + "px";
		    // Send an event to consumers responding to changes in gutter width.
		    signalLater(display, "gutterChanged", display);
		  }

		  function setDocumentHeight(cm, measure) {
		    cm.display.sizer.style.minHeight = measure.docHeight + "px";
		    cm.display.heightForcer.style.top = measure.docHeight + "px";
		    cm.display.gutters.style.height = (measure.docHeight + cm.display.barHeight + scrollGap(cm)) + "px";
		  }

		  // Re-align line numbers and gutter marks to compensate for
		  // horizontal scrolling.
		  function alignHorizontally(cm) {
		    var display = cm.display, view = display.view;
		    if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) { return }
		    var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
		    var gutterW = display.gutters.offsetWidth, left = comp + "px";
		    for (var i = 0; i < view.length; i++) { if (!view[i].hidden) {
		      if (cm.options.fixedGutter) {
		        if (view[i].gutter)
		          { view[i].gutter.style.left = left; }
		        if (view[i].gutterBackground)
		          { view[i].gutterBackground.style.left = left; }
		      }
		      var align = view[i].alignable;
		      if (align) { for (var j = 0; j < align.length; j++)
		        { align[j].style.left = left; } }
		    } }
		    if (cm.options.fixedGutter)
		      { display.gutters.style.left = (comp + gutterW) + "px"; }
		  }

		  // Used to ensure that the line number gutter is still the right
		  // size for the current document size. Returns true when an update
		  // is needed.
		  function maybeUpdateLineNumberWidth(cm) {
		    if (!cm.options.lineNumbers) { return false }
		    var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
		    if (last.length != display.lineNumChars) {
		      var test = display.measure.appendChild(elt("div", [elt("div", last)],
		                                                 "CodeMirror-linenumber CodeMirror-gutter-elt"));
		      var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
		      display.lineGutter.style.width = "";
		      display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
		      display.lineNumWidth = display.lineNumInnerWidth + padding;
		      display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
		      display.lineGutter.style.width = display.lineNumWidth + "px";
		      updateGutterSpace(cm.display);
		      return true
		    }
		    return false
		  }

		  function getGutters(gutters, lineNumbers) {
		    var result = [], sawLineNumbers = false;
		    for (var i = 0; i < gutters.length; i++) {
		      var name = gutters[i], style = null;
		      if (typeof name != "string") { style = name.style; name = name.className; }
		      if (name == "CodeMirror-linenumbers") {
		        if (!lineNumbers) { continue }
		        else { sawLineNumbers = true; }
		      }
		      result.push({className: name, style: style});
		    }
		    if (lineNumbers && !sawLineNumbers) { result.push({className: "CodeMirror-linenumbers", style: null}); }
		    return result
		  }

		  // Rebuild the gutter elements, ensure the margin to the left of the
		  // code matches their width.
		  function renderGutters(display) {
		    var gutters = display.gutters, specs = display.gutterSpecs;
		    removeChildren(gutters);
		    display.lineGutter = null;
		    for (var i = 0; i < specs.length; ++i) {
		      var ref = specs[i];
		      var className = ref.className;
		      var style = ref.style;
		      var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + className));
		      if (style) { gElt.style.cssText = style; }
		      if (className == "CodeMirror-linenumbers") {
		        display.lineGutter = gElt;
		        gElt.style.width = (display.lineNumWidth || 1) + "px";
		      }
		    }
		    gutters.style.display = specs.length ? "" : "none";
		    updateGutterSpace(display);
		  }

		  function updateGutters(cm) {
		    renderGutters(cm.display);
		    regChange(cm);
		    alignHorizontally(cm);
		  }

		  // The display handles the DOM integration, both for input reading
		  // and content drawing. It holds references to DOM nodes and
		  // display-related state.

		  function Display(place, doc, input, options) {
		    var d = this;
		    this.input = input;

		    // Covers bottom-right square when both scrollbars are present.
		    d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
		    d.scrollbarFiller.setAttribute("cm-not-content", "true");
		    // Covers bottom of gutter when coverGutterNextToScrollbar is on
		    // and h scrollbar is present.
		    d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
		    d.gutterFiller.setAttribute("cm-not-content", "true");
		    // Will contain the actual code, positioned to cover the viewport.
		    d.lineDiv = eltP("div", null, "CodeMirror-code");
		    // Elements are added to these to represent selection and cursors.
		    d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
		    d.cursorDiv = elt("div", null, "CodeMirror-cursors");
		    // A visibility: hidden element used to find the size of things.
		    d.measure = elt("div", null, "CodeMirror-measure");
		    // When lines outside of the viewport are measured, they are drawn in this.
		    d.lineMeasure = elt("div", null, "CodeMirror-measure");
		    // Wraps everything that needs to exist inside the vertically-padded coordinate system
		    d.lineSpace = eltP("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
		                      null, "position: relative; outline: none");
		    var lines = eltP("div", [d.lineSpace], "CodeMirror-lines");
		    // Moved around its parent to cover visible view.
		    d.mover = elt("div", [lines], null, "position: relative");
		    // Set to the height of the document, allowing scrolling.
		    d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
		    d.sizerWidth = null;
		    // Behavior of elts with overflow: auto and padding is
		    // inconsistent across browsers. This is used to ensure the
		    // scrollable area is big enough.
		    d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
		    // Will contain the gutters, if any.
		    d.gutters = elt("div", null, "CodeMirror-gutters");
		    d.lineGutter = null;
		    // Actual scrollable element.
		    d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
		    d.scroller.setAttribute("tabIndex", "-1");
		    // The element in which the editor lives.
		    d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");
		    // See #6982. FIXME remove when this has been fixed for a while in Chrome
		    if (chrome && chrome_version >= 105) { d.wrapper.style.clipPath = "inset(0px)"; }

		    // This attribute is respected by automatic translation systems such as Google Translate,
		    // and may also be respected by tools used by human translators.
		    d.wrapper.setAttribute('translate', 'no');

		    // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
		    if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0; }
		    if (!webkit && !(gecko && mobile)) { d.scroller.draggable = true; }

		    if (place) {
		      if (place.appendChild) { place.appendChild(d.wrapper); }
		      else { place(d.wrapper); }
		    }

		    // Current rendered range (may be bigger than the view window).
		    d.viewFrom = d.viewTo = doc.first;
		    d.reportedViewFrom = d.reportedViewTo = doc.first;
		    // Information about the rendered lines.
		    d.view = [];
		    d.renderedView = null;
		    // Holds info about a single rendered line when it was rendered
		    // for measurement, while not in view.
		    d.externalMeasured = null;
		    // Empty space (in pixels) above the view
		    d.viewOffset = 0;
		    d.lastWrapHeight = d.lastWrapWidth = 0;
		    d.updateLineNumbers = null;

		    d.nativeBarWidth = d.barHeight = d.barWidth = 0;
		    d.scrollbarsClipped = false;

		    // Used to only resize the line number gutter when necessary (when
		    // the amount of lines crosses a boundary that makes its width change)
		    d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
		    // Set to true when a non-horizontal-scrolling line widget is
		    // added. As an optimization, line widget aligning is skipped when
		    // this is false.
		    d.alignWidgets = false;

		    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;

		    // Tracks the maximum line length so that the horizontal scrollbar
		    // can be kept static when scrolling.
		    d.maxLine = null;
		    d.maxLineLength = 0;
		    d.maxLineChanged = false;

		    // Used for measuring wheel scrolling granularity
		    d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;

		    // True when shift is held down.
		    d.shift = false;

		    // Used to track whether anything happened since the context menu
		    // was opened.
		    d.selForContextMenu = null;

		    d.activeTouch = null;

		    d.gutterSpecs = getGutters(options.gutters, options.lineNumbers);
		    renderGutters(d);

		    input.init(d);
		  }

		  // Since the delta values reported on mouse wheel events are
		  // unstandardized between browsers and even browser versions, and
		  // generally horribly unpredictable, this code starts by measuring
		  // the scroll effect that the first few mouse wheel events have,
		  // and, from that, detects the way it can convert deltas to pixel
		  // offsets afterwards.
		  //
		  // The reason we want to know the amount a wheel event will scroll
		  // is that it gives us a chance to update the display before the
		  // actual scrolling happens, reducing flickering.

		  var wheelSamples = 0, wheelPixelsPerUnit = null;
		  // Fill in a browser-detected starting value on browsers where we
		  // know one. These don't have to be accurate -- the result of them
		  // being wrong would just be a slight flicker on the first wheel
		  // scroll (if it is large enough).
		  if (ie) { wheelPixelsPerUnit = -0.53; }
		  else if (gecko) { wheelPixelsPerUnit = 15; }
		  else if (chrome) { wheelPixelsPerUnit = -0.7; }
		  else if (safari) { wheelPixelsPerUnit = -1/3; }

		  function wheelEventDelta(e) {
		    var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
		    if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) { dx = e.detail; }
		    if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) { dy = e.detail; }
		    else if (dy == null) { dy = e.wheelDelta; }
		    return {x: dx, y: dy}
		  }
		  function wheelEventPixels(e) {
		    var delta = wheelEventDelta(e);
		    delta.x *= wheelPixelsPerUnit;
		    delta.y *= wheelPixelsPerUnit;
		    return delta
		  }

		  function onScrollWheel(cm, e) {
		    // On Chrome 102, viewport updates somehow stop wheel-based
		    // scrolling. Turning off pointer events during the scroll seems
		    // to avoid the issue.
		    if (chrome && chrome_version == 102) {
		      if (cm.display.chromeScrollHack == null) { cm.display.sizer.style.pointerEvents = "none"; }
		      else { clearTimeout(cm.display.chromeScrollHack); }
		      cm.display.chromeScrollHack = setTimeout(function () {
		        cm.display.chromeScrollHack = null;
		        cm.display.sizer.style.pointerEvents = "";
		      }, 100);
		    }
		    var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y;
		    var pixelsPerUnit = wheelPixelsPerUnit;
		    if (e.deltaMode === 0) {
		      dx = e.deltaX;
		      dy = e.deltaY;
		      pixelsPerUnit = 1;
		    }

		    var display = cm.display, scroll = display.scroller;
		    // Quit if there's nothing to scroll here
		    var canScrollX = scroll.scrollWidth > scroll.clientWidth;
		    var canScrollY = scroll.scrollHeight > scroll.clientHeight;
		    if (!(dx && canScrollX || dy && canScrollY)) { return }

		    // Webkit browsers on OS X abort momentum scrolls when the target
		    // of the scroll event is removed from the scrollable element.
		    // This hack (see related code in patchDisplay) makes sure the
		    // element is kept around.
		    if (dy && mac && webkit) {
		      outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
		        for (var i = 0; i < view.length; i++) {
		          if (view[i].node == cur) {
		            cm.display.currentWheelTarget = cur;
		            break outer
		          }
		        }
		      }
		    }

		    // On some browsers, horizontal scrolling will cause redraws to
		    // happen before the gutter has been realigned, causing it to
		    // wriggle around in a most unseemly way. When we have an
		    // estimated pixels/delta value, we just handle horizontal
		    // scrolling entirely here. It'll be slightly off from native, but
		    // better than glitching out.
		    if (dx && !gecko && !presto && pixelsPerUnit != null) {
		      if (dy && canScrollY)
		        { updateScrollTop(cm, Math.max(0, scroll.scrollTop + dy * pixelsPerUnit)); }
		      setScrollLeft(cm, Math.max(0, scroll.scrollLeft + dx * pixelsPerUnit));
		      // Only prevent default scrolling if vertical scrolling is
		      // actually possible. Otherwise, it causes vertical scroll
		      // jitter on OSX trackpads when deltaX is small and deltaY
		      // is large (issue #3579)
		      if (!dy || (dy && canScrollY))
		        { e_preventDefault(e); }
		      display.wheelStartX = null; // Abort measurement, if in progress
		      return
		    }

		    // 'Project' the visible viewport to cover the area that is being
		    // scrolled into view (if we know enough to estimate it).
		    if (dy && pixelsPerUnit != null) {
		      var pixels = dy * pixelsPerUnit;
		      var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
		      if (pixels < 0) { top = Math.max(0, top + pixels - 50); }
		      else { bot = Math.min(cm.doc.height, bot + pixels + 50); }
		      updateDisplaySimple(cm, {top: top, bottom: bot});
		    }

		    if (wheelSamples < 20 && e.deltaMode !== 0) {
		      if (display.wheelStartX == null) {
		        display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop;
		        display.wheelDX = dx; display.wheelDY = dy;
		        setTimeout(function () {
		          if (display.wheelStartX == null) { return }
		          var movedX = scroll.scrollLeft - display.wheelStartX;
		          var movedY = scroll.scrollTop - display.wheelStartY;
		          var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
		            (movedX && display.wheelDX && movedX / display.wheelDX);
		          display.wheelStartX = display.wheelStartY = null;
		          if (!sample) { return }
		          wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
		          ++wheelSamples;
		        }, 200);
		      } else {
		        display.wheelDX += dx; display.wheelDY += dy;
		      }
		    }
		  }

		  // Selection objects are immutable. A new one is created every time
		  // the selection changes. A selection is one or more non-overlapping
		  // (and non-touching) ranges, sorted, and an integer that indicates
		  // which one is the primary selection (the one that's scrolled into
		  // view, that getCursor returns, etc).
		  var Selection = function(ranges, primIndex) {
		    this.ranges = ranges;
		    this.primIndex = primIndex;
		  };

		  Selection.prototype.primary = function () { return this.ranges[this.primIndex] };

		  Selection.prototype.equals = function (other) {
		    if (other == this) { return true }
		    if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) { return false }
		    for (var i = 0; i < this.ranges.length; i++) {
		      var here = this.ranges[i], there = other.ranges[i];
		      if (!equalCursorPos(here.anchor, there.anchor) || !equalCursorPos(here.head, there.head)) { return false }
		    }
		    return true
		  };

		  Selection.prototype.deepCopy = function () {
		    var out = [];
		    for (var i = 0; i < this.ranges.length; i++)
		      { out[i] = new Range(copyPos(this.ranges[i].anchor), copyPos(this.ranges[i].head)); }
		    return new Selection(out, this.primIndex)
		  };

		  Selection.prototype.somethingSelected = function () {
		    for (var i = 0; i < this.ranges.length; i++)
		      { if (!this.ranges[i].empty()) { return true } }
		    return false
		  };

		  Selection.prototype.contains = function (pos, end) {
		    if (!end) { end = pos; }
		    for (var i = 0; i < this.ranges.length; i++) {
		      var range = this.ranges[i];
		      if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
		        { return i }
		    }
		    return -1
		  };

		  var Range = function(anchor, head) {
		    this.anchor = anchor; this.head = head;
		  };

		  Range.prototype.from = function () { return minPos(this.anchor, this.head) };
		  Range.prototype.to = function () { return maxPos(this.anchor, this.head) };
		  Range.prototype.empty = function () { return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch };

		  // Take an unsorted, potentially overlapping set of ranges, and
		  // build a selection out of it. 'Consumes' ranges array (modifying
		  // it).
		  function normalizeSelection(cm, ranges, primIndex) {
		    var mayTouch = cm && cm.options.selectionsMayTouch;
		    var prim = ranges[primIndex];
		    ranges.sort(function (a, b) { return cmp(a.from(), b.from()); });
		    primIndex = indexOf(ranges, prim);
		    for (var i = 1; i < ranges.length; i++) {
		      var cur = ranges[i], prev = ranges[i - 1];
		      var diff = cmp(prev.to(), cur.from());
		      if (mayTouch && !cur.empty() ? diff > 0 : diff >= 0) {
		        var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
		        var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
		        if (i <= primIndex) { --primIndex; }
		        ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
		      }
		    }
		    return new Selection(ranges, primIndex)
		  }

		  function simpleSelection(anchor, head) {
		    return new Selection([new Range(anchor, head || anchor)], 0)
		  }

		  // Compute the position of the end of a change (its 'to' property
		  // refers to the pre-change end).
		  function changeEnd(change) {
		    if (!change.text) { return change.to }
		    return Pos(change.from.line + change.text.length - 1,
		               lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0))
		  }

		  // Adjust a position to refer to the post-change position of the
		  // same text, or the end of the change if the change covers it.
		  function adjustForChange(pos, change) {
		    if (cmp(pos, change.from) < 0) { return pos }
		    if (cmp(pos, change.to) <= 0) { return changeEnd(change) }

		    var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
		    if (pos.line == change.to.line) { ch += changeEnd(change).ch - change.to.ch; }
		    return Pos(line, ch)
		  }

		  function computeSelAfterChange(doc, change) {
		    var out = [];
		    for (var i = 0; i < doc.sel.ranges.length; i++) {
		      var range = doc.sel.ranges[i];
		      out.push(new Range(adjustForChange(range.anchor, change),
		                         adjustForChange(range.head, change)));
		    }
		    return normalizeSelection(doc.cm, out, doc.sel.primIndex)
		  }

		  function offsetPos(pos, old, nw) {
		    if (pos.line == old.line)
		      { return Pos(nw.line, pos.ch - old.ch + nw.ch) }
		    else
		      { return Pos(nw.line + (pos.line - old.line), pos.ch) }
		  }

		  // Used by replaceSelections to allow moving the selection to the
		  // start or around the replaced test. Hint may be "start" or "around".
		  function computeReplacedSel(doc, changes, hint) {
		    var out = [];
		    var oldPrev = Pos(doc.first, 0), newPrev = oldPrev;
		    for (var i = 0; i < changes.length; i++) {
		      var change = changes[i];
		      var from = offsetPos(change.from, oldPrev, newPrev);
		      var to = offsetPos(changeEnd(change), oldPrev, newPrev);
		      oldPrev = change.to;
		      newPrev = to;
		      if (hint == "around") {
		        var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0;
		        out[i] = new Range(inv ? to : from, inv ? from : to);
		      } else {
		        out[i] = new Range(from, from);
		      }
		    }
		    return new Selection(out, doc.sel.primIndex)
		  }

		  // Used to get the editor into a consistent state again when options change.

		  function loadMode(cm) {
		    cm.doc.mode = getMode(cm.options, cm.doc.modeOption);
		    resetModeState(cm);
		  }

		  function resetModeState(cm) {
		    cm.doc.iter(function (line) {
		      if (line.stateAfter) { line.stateAfter = null; }
		      if (line.styles) { line.styles = null; }
		    });
		    cm.doc.modeFrontier = cm.doc.highlightFrontier = cm.doc.first;
		    startWorker(cm, 100);
		    cm.state.modeGen++;
		    if (cm.curOp) { regChange(cm); }
		  }

		  // DOCUMENT DATA STRUCTURE

		  // By default, updates that start and end at the beginning of a line
		  // are treated specially, in order to make the association of line
		  // widgets and marker elements with the text behave more intuitive.
		  function isWholeLineUpdate(doc, change) {
		    return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
		      (!doc.cm || doc.cm.options.wholeLineUpdateBefore)
		  }

		  // Perform a change on the document data structure.
		  function updateDoc(doc, change, markedSpans, estimateHeight) {
		    function spansFor(n) {return markedSpans ? markedSpans[n] : null}
		    function update(line, text, spans) {
		      updateLine(line, text, spans, estimateHeight);
		      signalLater(line, "change", line, change);
		    }
		    function linesFor(start, end) {
		      var result = [];
		      for (var i = start; i < end; ++i)
		        { result.push(new Line(text[i], spansFor(i), estimateHeight)); }
		      return result
		    }

		    var from = change.from, to = change.to, text = change.text;
		    var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
		    var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;

		    // Adjust the line structure
		    if (change.full) {
		      doc.insert(0, linesFor(0, text.length));
		      doc.remove(text.length, doc.size - text.length);
		    } else if (isWholeLineUpdate(doc, change)) {
		      // This is a whole-line replace. Treated specially to make
		      // sure line objects move the way they are supposed to.
		      var added = linesFor(0, text.length - 1);
		      update(lastLine, lastLine.text, lastSpans);
		      if (nlines) { doc.remove(from.line, nlines); }
		      if (added.length) { doc.insert(from.line, added); }
		    } else if (firstLine == lastLine) {
		      if (text.length == 1) {
		        update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
		      } else {
		        var added$1 = linesFor(1, text.length - 1);
		        added$1.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight));
		        update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
		        doc.insert(from.line + 1, added$1);
		      }
		    } else if (text.length == 1) {
		      update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
		      doc.remove(from.line + 1, nlines);
		    } else {
		      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
		      update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
		      var added$2 = linesFor(1, text.length - 1);
		      if (nlines > 1) { doc.remove(from.line + 1, nlines - 1); }
		      doc.insert(from.line + 1, added$2);
		    }

		    signalLater(doc, "change", doc, change);
		  }

		  // Call f for all linked documents.
		  function linkedDocs(doc, f, sharedHistOnly) {
		    function propagate(doc, skip, sharedHist) {
		      if (doc.linked) { for (var i = 0; i < doc.linked.length; ++i) {
		        var rel = doc.linked[i];
		        if (rel.doc == skip) { continue }
		        var shared = sharedHist && rel.sharedHist;
		        if (sharedHistOnly && !shared) { continue }
		        f(rel.doc, shared);
		        propagate(rel.doc, doc, shared);
		      } }
		    }
		    propagate(doc, null, true);
		  }

		  // Attach a document to an editor.
		  function attachDoc(cm, doc) {
		    if (doc.cm) { throw new Error("This document is already in use.") }
		    cm.doc = doc;
		    doc.cm = cm;
		    estimateLineHeights(cm);
		    loadMode(cm);
		    setDirectionClass(cm);
		    cm.options.direction = doc.direction;
		    if (!cm.options.lineWrapping) { findMaxLine(cm); }
		    cm.options.mode = doc.modeOption;
		    regChange(cm);
		  }

		  function setDirectionClass(cm) {
		  (cm.doc.direction == "rtl" ? addClass : rmClass)(cm.display.lineDiv, "CodeMirror-rtl");
		  }

		  function directionChanged(cm) {
		    runInOp(cm, function () {
		      setDirectionClass(cm);
		      regChange(cm);
		    });
		  }

		  function History(prev) {
		    // Arrays of change events and selections. Doing something adds an
		    // event to done and clears undo. Undoing moves events from done
		    // to undone, redoing moves them in the other direction.
		    this.done = []; this.undone = [];
		    this.undoDepth = prev ? prev.undoDepth : Infinity;
		    // Used to track when changes can be merged into a single undo
		    // event
		    this.lastModTime = this.lastSelTime = 0;
		    this.lastOp = this.lastSelOp = null;
		    this.lastOrigin = this.lastSelOrigin = null;
		    // Used by the isClean() method
		    this.generation = this.maxGeneration = prev ? prev.maxGeneration : 1;
		  }

		  // Create a history change event from an updateDoc-style change
		  // object.
		  function historyChangeFromChange(doc, change) {
		    var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)};
		    attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
		    linkedDocs(doc, function (doc) { return attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1); }, true);
		    return histChange
		  }

		  // Pop all selection events off the end of a history array. Stop at
		  // a change event.
		  function clearSelectionEvents(array) {
		    while (array.length) {
		      var last = lst(array);
		      if (last.ranges) { array.pop(); }
		      else { break }
		    }
		  }

		  // Find the top change event in the history. Pop off selection
		  // events that are in the way.
		  function lastChangeEvent(hist, force) {
		    if (force) {
		      clearSelectionEvents(hist.done);
		      return lst(hist.done)
		    } else if (hist.done.length && !lst(hist.done).ranges) {
		      return lst(hist.done)
		    } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
		      hist.done.pop();
		      return lst(hist.done)
		    }
		  }

		  // Register a change in the history. Merges changes that are within
		  // a single operation, or are close together with an origin that
		  // allows merging (starting with "+") into a single event.
		  function addChangeToHistory(doc, change, selAfter, opId) {
		    var hist = doc.history;
		    hist.undone.length = 0;
		    var time = +new Date, cur;
		    var last;

		    if ((hist.lastOp == opId ||
		         hist.lastOrigin == change.origin && change.origin &&
		         ((change.origin.charAt(0) == "+" && hist.lastModTime > time - (doc.cm ? doc.cm.options.historyEventDelay : 500)) ||
		          change.origin.charAt(0) == "*")) &&
		        (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
		      // Merge this change into the last event
		      last = lst(cur.changes);
		      if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
		        // Optimized case for simple insertion -- don't want to add
		        // new changesets for every character typed
		        last.to = changeEnd(change);
		      } else {
		        // Add new sub-event
		        cur.changes.push(historyChangeFromChange(doc, change));
		      }
		    } else {
		      // Can not be merged, start a new event.
		      var before = lst(hist.done);
		      if (!before || !before.ranges)
		        { pushSelectionToHistory(doc.sel, hist.done); }
		      cur = {changes: [historyChangeFromChange(doc, change)],
		             generation: hist.generation};
		      hist.done.push(cur);
		      while (hist.done.length > hist.undoDepth) {
		        hist.done.shift();
		        if (!hist.done[0].ranges) { hist.done.shift(); }
		      }
		    }
		    hist.done.push(selAfter);
		    hist.generation = ++hist.maxGeneration;
		    hist.lastModTime = hist.lastSelTime = time;
		    hist.lastOp = hist.lastSelOp = opId;
		    hist.lastOrigin = hist.lastSelOrigin = change.origin;

		    if (!last) { signal(doc, "historyAdded"); }
		  }

		  function selectionEventCanBeMerged(doc, origin, prev, sel) {
		    var ch = origin.charAt(0);
		    return ch == "*" ||
		      ch == "+" &&
		      prev.ranges.length == sel.ranges.length &&
		      prev.somethingSelected() == sel.somethingSelected() &&
		      new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500)
		  }

		  // Called whenever the selection changes, sets the new selection as
		  // the pending selection in the history, and pushes the old pending
		  // selection into the 'done' array when it was significantly
		  // different (in number of selected ranges, emptiness, or time).
		  function addSelectionToHistory(doc, sel, opId, options) {
		    var hist = doc.history, origin = options && options.origin;

		    // A new event is started when the previous origin does not match
		    // the current, or the origins don't allow matching. Origins
		    // starting with * are always merged, those starting with + are
		    // merged when similar and close together in time.
		    if (opId == hist.lastSelOp ||
		        (origin && hist.lastSelOrigin == origin &&
		         (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
		          selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
		      { hist.done[hist.done.length - 1] = sel; }
		    else
		      { pushSelectionToHistory(sel, hist.done); }

		    hist.lastSelTime = +new Date;
		    hist.lastSelOrigin = origin;
		    hist.lastSelOp = opId;
		    if (options && options.clearRedo !== false)
		      { clearSelectionEvents(hist.undone); }
		  }

		  function pushSelectionToHistory(sel, dest) {
		    var top = lst(dest);
		    if (!(top && top.ranges && top.equals(sel)))
		      { dest.push(sel); }
		  }

		  // Used to store marked span information in the history.
		  function attachLocalSpans(doc, change, from, to) {
		    var existing = change["spans_" + doc.id], n = 0;
		    doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function (line) {
		      if (line.markedSpans)
		        { (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans; }
		      ++n;
		    });
		  }

		  // When un/re-doing restores text containing marked spans, those
		  // that have been explicitly cleared should not be restored.
		  function removeClearedSpans(spans) {
		    if (!spans) { return null }
		    var out;
		    for (var i = 0; i < spans.length; ++i) {
		      if (spans[i].marker.explicitlyCleared) { if (!out) { out = spans.slice(0, i); } }
		      else if (out) { out.push(spans[i]); }
		    }
		    return !out ? spans : out.length ? out : null
		  }

		  // Retrieve and filter the old marked spans stored in a change event.
		  function getOldSpans(doc, change) {
		    var found = change["spans_" + doc.id];
		    if (!found) { return null }
		    var nw = [];
		    for (var i = 0; i < change.text.length; ++i)
		      { nw.push(removeClearedSpans(found[i])); }
		    return nw
		  }

		  // Used for un/re-doing changes from the history. Combines the
		  // result of computing the existing spans with the set of spans that
		  // existed in the history (so that deleting around a span and then
		  // undoing brings back the span).
		  function mergeOldSpans(doc, change) {
		    var old = getOldSpans(doc, change);
		    var stretched = stretchSpansOverChange(doc, change);
		    if (!old) { return stretched }
		    if (!stretched) { return old }

		    for (var i = 0; i < old.length; ++i) {
		      var oldCur = old[i], stretchCur = stretched[i];
		      if (oldCur && stretchCur) {
		        spans: for (var j = 0; j < stretchCur.length; ++j) {
		          var span = stretchCur[j];
		          for (var k = 0; k < oldCur.length; ++k)
		            { if (oldCur[k].marker == span.marker) { continue spans } }
		          oldCur.push(span);
		        }
		      } else if (stretchCur) {
		        old[i] = stretchCur;
		      }
		    }
		    return old
		  }

		  // Used both to provide a JSON-safe object in .getHistory, and, when
		  // detaching a document, to split the history in two
		  function copyHistoryArray(events, newGroup, instantiateSel) {
		    var copy = [];
		    for (var i = 0; i < events.length; ++i) {
		      var event = events[i];
		      if (event.ranges) {
		        copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
		        continue
		      }
		      var changes = event.changes, newChanges = [];
		      copy.push({changes: newChanges});
		      for (var j = 0; j < changes.length; ++j) {
		        var change = changes[j], m = (void 0);
		        newChanges.push({from: change.from, to: change.to, text: change.text});
		        if (newGroup) { for (var prop in change) { if (m = prop.match(/^spans_(\d+)$/)) {
		          if (indexOf(newGroup, Number(m[1])) > -1) {
		            lst(newChanges)[prop] = change[prop];
		            delete change[prop];
		          }
		        } } }
		      }
		    }
		    return copy
		  }

		  // The 'scroll' parameter given to many of these indicated whether
		  // the new cursor position should be scrolled into view after
		  // modifying the selection.

		  // If shift is held or the extend flag is set, extends a range to
		  // include a given position (and optionally a second position).
		  // Otherwise, simply returns the range between the given positions.
		  // Used for cursor motion and such.
		  function extendRange(range, head, other, extend) {
		    if (extend) {
		      var anchor = range.anchor;
		      if (other) {
		        var posBefore = cmp(head, anchor) < 0;
		        if (posBefore != (cmp(other, anchor) < 0)) {
		          anchor = head;
		          head = other;
		        } else if (posBefore != (cmp(head, other) < 0)) {
		          head = other;
		        }
		      }
		      return new Range(anchor, head)
		    } else {
		      return new Range(other || head, head)
		    }
		  }

		  // Extend the primary selection range, discard the rest.
		  function extendSelection(doc, head, other, options, extend) {
		    if (extend == null) { extend = doc.cm && (doc.cm.display.shift || doc.extend); }
		    setSelection(doc, new Selection([extendRange(doc.sel.primary(), head, other, extend)], 0), options);
		  }

		  // Extend all selections (pos is an array of selections with length
		  // equal the number of selections)
		  function extendSelections(doc, heads, options) {
		    var out = [];
		    var extend = doc.cm && (doc.cm.display.shift || doc.extend);
		    for (var i = 0; i < doc.sel.ranges.length; i++)
		      { out[i] = extendRange(doc.sel.ranges[i], heads[i], null, extend); }
		    var newSel = normalizeSelection(doc.cm, out, doc.sel.primIndex);
		    setSelection(doc, newSel, options);
		  }

		  // Updates a single range in the selection.
		  function replaceOneSelection(doc, i, range, options) {
		    var ranges = doc.sel.ranges.slice(0);
		    ranges[i] = range;
		    setSelection(doc, normalizeSelection(doc.cm, ranges, doc.sel.primIndex), options);
		  }

		  // Reset the selection to a single range.
		  function setSimpleSelection(doc, anchor, head, options) {
		    setSelection(doc, simpleSelection(anchor, head), options);
		  }

		  // Give beforeSelectionChange handlers a change to influence a
		  // selection update.
		  function filterSelectionChange(doc, sel, options) {
		    var obj = {
		      ranges: sel.ranges,
		      update: function(ranges) {
		        this.ranges = [];
		        for (var i = 0; i < ranges.length; i++)
		          { this.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
		                                     clipPos(doc, ranges[i].head)); }
		      },
		      origin: options && options.origin
		    };
		    signal(doc, "beforeSelectionChange", doc, obj);
		    if (doc.cm) { signal(doc.cm, "beforeSelectionChange", doc.cm, obj); }
		    if (obj.ranges != sel.ranges) { return normalizeSelection(doc.cm, obj.ranges, obj.ranges.length - 1) }
		    else { return sel }
		  }

		  function setSelectionReplaceHistory(doc, sel, options) {
		    var done = doc.history.done, last = lst(done);
		    if (last && last.ranges) {
		      done[done.length - 1] = sel;
		      setSelectionNoUndo(doc, sel, options);
		    } else {
		      setSelection(doc, sel, options);
		    }
		  }

		  // Set a new selection.
		  function setSelection(doc, sel, options) {
		    setSelectionNoUndo(doc, sel, options);
		    addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
		  }

		  function setSelectionNoUndo(doc, sel, options) {
		    if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
		      { sel = filterSelectionChange(doc, sel, options); }

		    var bias = options && options.bias ||
		      (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
		    setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));

		    if (!(options && options.scroll === false) && doc.cm && doc.cm.getOption("readOnly") != "nocursor")
		      { ensureCursorVisible(doc.cm); }
		  }

		  function setSelectionInner(doc, sel) {
		    if (sel.equals(doc.sel)) { return }

		    doc.sel = sel;

		    if (doc.cm) {
		      doc.cm.curOp.updateInput = 1;
		      doc.cm.curOp.selectionChanged = true;
		      signalCursorActivity(doc.cm);
		    }
		    signalLater(doc, "cursorActivity", doc);
		  }

		  // Verify that the selection does not partially select any atomic
		  // marked ranges.
		  function reCheckSelection(doc) {
		    setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false));
		  }

		  // Return a selection that does not partially select any atomic
		  // ranges.
		  function skipAtomicInSelection(doc, sel, bias, mayClear) {
		    var out;
		    for (var i = 0; i < sel.ranges.length; i++) {
		      var range = sel.ranges[i];
		      var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i];
		      var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear);
		      var newHead = range.head == range.anchor ? newAnchor : skipAtomic(doc, range.head, old && old.head, bias, mayClear);
		      if (out || newAnchor != range.anchor || newHead != range.head) {
		        if (!out) { out = sel.ranges.slice(0, i); }
		        out[i] = new Range(newAnchor, newHead);
		      }
		    }
		    return out ? normalizeSelection(doc.cm, out, sel.primIndex) : sel
		  }

		  function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
		    var line = getLine(doc, pos.line);
		    if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
		      var sp = line.markedSpans[i], m = sp.marker;

		      // Determine if we should prevent the cursor being placed to the left/right of an atomic marker
		      // Historically this was determined using the inclusiveLeft/Right option, but the new way to control it
		      // is with selectLeft/Right
		      var preventCursorLeft = ("selectLeft" in m) ? !m.selectLeft : m.inclusiveLeft;
		      var preventCursorRight = ("selectRight" in m) ? !m.selectRight : m.inclusiveRight;

		      if ((sp.from == null || (preventCursorLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
		          (sp.to == null || (preventCursorRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
		        if (mayClear) {
		          signal(m, "beforeCursorEnter");
		          if (m.explicitlyCleared) {
		            if (!line.markedSpans) { break }
		            else {--i; continue}
		          }
		        }
		        if (!m.atomic) { continue }

		        if (oldPos) {
		          var near = m.find(dir < 0 ? 1 : -1), diff = (void 0);
		          if (dir < 0 ? preventCursorRight : preventCursorLeft)
		            { near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null); }
		          if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
		            { return skipAtomicInner(doc, near, pos, dir, mayClear) }
		        }

		        var far = m.find(dir < 0 ? -1 : 1);
		        if (dir < 0 ? preventCursorLeft : preventCursorRight)
		          { far = movePos(doc, far, dir, far.line == pos.line ? line : null); }
		        return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null
		      }
		    } }
		    return pos
		  }

		  // Ensure a given position is not inside an atomic range.
		  function skipAtomic(doc, pos, oldPos, bias, mayClear) {
		    var dir = bias || 1;
		    var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
		        (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
		        skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
		        (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true));
		    if (!found) {
		      doc.cantEdit = true;
		      return Pos(doc.first, 0)
		    }
		    return found
		  }

		  function movePos(doc, pos, dir, line) {
		    if (dir < 0 && pos.ch == 0) {
		      if (pos.line > doc.first) { return clipPos(doc, Pos(pos.line - 1)) }
		      else { return null }
		    } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
		      if (pos.line < doc.first + doc.size - 1) { return Pos(pos.line + 1, 0) }
		      else { return null }
		    } else {
		      return new Pos(pos.line, pos.ch + dir)
		    }
		  }

		  function selectAll(cm) {
		    cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);
		  }

		  // UPDATING

		  // Allow "beforeChange" event handlers to influence a change
		  function filterChange(doc, change, update) {
		    var obj = {
		      canceled: false,
		      from: change.from,
		      to: change.to,
		      text: change.text,
		      origin: change.origin,
		      cancel: function () { return obj.canceled = true; }
		    };
		    if (update) { obj.update = function (from, to, text, origin) {
		      if (from) { obj.from = clipPos(doc, from); }
		      if (to) { obj.to = clipPos(doc, to); }
		      if (text) { obj.text = text; }
		      if (origin !== undefined) { obj.origin = origin; }
		    }; }
		    signal(doc, "beforeChange", doc, obj);
		    if (doc.cm) { signal(doc.cm, "beforeChange", doc.cm, obj); }

		    if (obj.canceled) {
		      if (doc.cm) { doc.cm.curOp.updateInput = 2; }
		      return null
		    }
		    return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin}
		  }

		  // Apply a change to a document, and add it to the document's
		  // history, and propagating it to all linked documents.
		  function makeChange(doc, change, ignoreReadOnly) {
		    if (doc.cm) {
		      if (!doc.cm.curOp) { return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly) }
		      if (doc.cm.state.suppressEdits) { return }
		    }

		    if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
		      change = filterChange(doc, change, true);
		      if (!change) { return }
		    }

		    // Possibly split or suppress the update based on the presence
		    // of read-only spans in its range.
		    var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
		    if (split) {
		      for (var i = split.length - 1; i >= 0; --i)
		        { makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text, origin: change.origin}); }
		    } else {
		      makeChangeInner(doc, change);
		    }
		  }

		  function makeChangeInner(doc, change) {
		    if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) { return }
		    var selAfter = computeSelAfterChange(doc, change);
		    addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);

		    makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
		    var rebased = [];

		    linkedDocs(doc, function (doc, sharedHist) {
		      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
		        rebaseHist(doc.history, change);
		        rebased.push(doc.history);
		      }
		      makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
		    });
		  }

		  // Revert a change stored in a document's history.
		  function makeChangeFromHistory(doc, type, allowSelectionOnly) {
		    var suppress = doc.cm && doc.cm.state.suppressEdits;
		    if (suppress && !allowSelectionOnly) { return }

		    var hist = doc.history, event, selAfter = doc.sel;
		    var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;

		    // Verify that there is a useable event (so that ctrl-z won't
		    // needlessly clear selection events)
		    var i = 0;
		    for (; i < source.length; i++) {
		      event = source[i];
		      if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
		        { break }
		    }
		    if (i == source.length) { return }
		    hist.lastOrigin = hist.lastSelOrigin = null;

		    for (;;) {
		      event = source.pop();
		      if (event.ranges) {
		        pushSelectionToHistory(event, dest);
		        if (allowSelectionOnly && !event.equals(doc.sel)) {
		          setSelection(doc, event, {clearRedo: false});
		          return
		        }
		        selAfter = event;
		      } else if (suppress) {
		        source.push(event);
		        return
		      } else { break }
		    }

		    // Build up a reverse change object to add to the opposite history
		    // stack (redo when undoing, and vice versa).
		    var antiChanges = [];
		    pushSelectionToHistory(selAfter, dest);
		    dest.push({changes: antiChanges, generation: hist.generation});
		    hist.generation = event.generation || ++hist.maxGeneration;

		    var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

		    var loop = function ( i ) {
		      var change = event.changes[i];
		      change.origin = type;
		      if (filter && !filterChange(doc, change, false)) {
		        source.length = 0;
		        return {}
		      }

		      antiChanges.push(historyChangeFromChange(doc, change));

		      var after = i ? computeSelAfterChange(doc, change) : lst(source);
		      makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
		      if (!i && doc.cm) { doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)}); }
		      var rebased = [];

		      // Propagate to the linked documents
		      linkedDocs(doc, function (doc, sharedHist) {
		        if (!sharedHist && indexOf(rebased, doc.history) == -1) {
		          rebaseHist(doc.history, change);
		          rebased.push(doc.history);
		        }
		        makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
		      });
		    };

		    for (var i$1 = event.changes.length - 1; i$1 >= 0; --i$1) {
		      var returned = loop( i$1 );

		      if ( returned ) return returned.v;
		    }
		  }

		  // Sub-views need their line numbers shifted when text is added
		  // above or below them in the parent document.
		  function shiftDoc(doc, distance) {
		    if (distance == 0) { return }
		    doc.first += distance;
		    doc.sel = new Selection(map(doc.sel.ranges, function (range) { return new Range(
		      Pos(range.anchor.line + distance, range.anchor.ch),
		      Pos(range.head.line + distance, range.head.ch)
		    ); }), doc.sel.primIndex);
		    if (doc.cm) {
		      regChange(doc.cm, doc.first, doc.first - distance, distance);
		      for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
		        { regLineChange(doc.cm, l, "gutter"); }
		    }
		  }

		  // More lower-level change function, handling only a single document
		  // (not linked ones).
		  function makeChangeSingleDoc(doc, change, selAfter, spans) {
		    if (doc.cm && !doc.cm.curOp)
		      { return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans) }

		    if (change.to.line < doc.first) {
		      shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
		      return
		    }
		    if (change.from.line > doc.lastLine()) { return }

		    // Clip the change to the size of this doc
		    if (change.from.line < doc.first) {
		      var shift = change.text.length - 1 - (doc.first - change.from.line);
		      shiftDoc(doc, shift);
		      change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
		                text: [lst(change.text)], origin: change.origin};
		    }
		    var last = doc.lastLine();
		    if (change.to.line > last) {
		      change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
		                text: [change.text[0]], origin: change.origin};
		    }

		    change.removed = getBetween(doc, change.from, change.to);

		    if (!selAfter) { selAfter = computeSelAfterChange(doc, change); }
		    if (doc.cm) { makeChangeSingleDocInEditor(doc.cm, change, spans); }
		    else { updateDoc(doc, change, spans); }
		    setSelectionNoUndo(doc, selAfter, sel_dontScroll);

		    if (doc.cantEdit && skipAtomic(doc, Pos(doc.firstLine(), 0)))
		      { doc.cantEdit = false; }
		  }

		  // Handle the interaction of a change to a document with the editor
		  // that this document is part of.
		  function makeChangeSingleDocInEditor(cm, change, spans) {
		    var doc = cm.doc, display = cm.display, from = change.from, to = change.to;

		    var recomputeMaxLength = false, checkWidthStart = from.line;
		    if (!cm.options.lineWrapping) {
		      checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
		      doc.iter(checkWidthStart, to.line + 1, function (line) {
		        if (line == display.maxLine) {
		          recomputeMaxLength = true;
		          return true
		        }
		      });
		    }

		    if (doc.sel.contains(change.from, change.to) > -1)
		      { signalCursorActivity(cm); }

		    updateDoc(doc, change, spans, estimateHeight(cm));

		    if (!cm.options.lineWrapping) {
		      doc.iter(checkWidthStart, from.line + change.text.length, function (line) {
		        var len = lineLength(line);
		        if (len > display.maxLineLength) {
		          display.maxLine = line;
		          display.maxLineLength = len;
		          display.maxLineChanged = true;
		          recomputeMaxLength = false;
		        }
		      });
		      if (recomputeMaxLength) { cm.curOp.updateMaxLine = true; }
		    }

		    retreatFrontier(doc, from.line);
		    startWorker(cm, 400);

		    var lendiff = change.text.length - (to.line - from.line) - 1;
		    // Remember that these lines changed, for updating the display
		    if (change.full)
		      { regChange(cm); }
		    else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
		      { regLineChange(cm, from.line, "text"); }
		    else
		      { regChange(cm, from.line, to.line + 1, lendiff); }

		    var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
		    if (changeHandler || changesHandler) {
		      var obj = {
		        from: from, to: to,
		        text: change.text,
		        removed: change.removed,
		        origin: change.origin
		      };
		      if (changeHandler) { signalLater(cm, "change", cm, obj); }
		      if (changesHandler) { (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj); }
		    }
		    cm.display.selForContextMenu = null;
		  }

		  function replaceRange(doc, code, from, to, origin) {
		    var assign;

		    if (!to) { to = from; }
		    if (cmp(to, from) < 0) { (assign = [to, from], from = assign[0], to = assign[1]); }
		    if (typeof code == "string") { code = doc.splitLines(code); }
		    makeChange(doc, {from: from, to: to, text: code, origin: origin});
		  }

		  // Rebasing/resetting history to deal with externally-sourced changes

		  function rebaseHistSelSingle(pos, from, to, diff) {
		    if (to < pos.line) {
		      pos.line += diff;
		    } else if (from < pos.line) {
		      pos.line = from;
		      pos.ch = 0;
		    }
		  }

		  // Tries to rebase an array of history events given a change in the
		  // document. If the change touches the same lines as the event, the
		  // event, and everything 'behind' it, is discarded. If the change is
		  // before the event, the event's positions are updated. Uses a
		  // copy-on-write scheme for the positions, to avoid having to
		  // reallocate them all on every rebase, but also avoid problems with
		  // shared position objects being unsafely updated.
		  function rebaseHistArray(array, from, to, diff) {
		    for (var i = 0; i < array.length; ++i) {
		      var sub = array[i], ok = true;
		      if (sub.ranges) {
		        if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true; }
		        for (var j = 0; j < sub.ranges.length; j++) {
		          rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
		          rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
		        }
		        continue
		      }
		      for (var j$1 = 0; j$1 < sub.changes.length; ++j$1) {
		        var cur = sub.changes[j$1];
		        if (to < cur.from.line) {
		          cur.from = Pos(cur.from.line + diff, cur.from.ch);
		          cur.to = Pos(cur.to.line + diff, cur.to.ch);
		        } else if (from <= cur.to.line) {
		          ok = false;
		          break
		        }
		      }
		      if (!ok) {
		        array.splice(0, i + 1);
		        i = 0;
		      }
		    }
		  }

		  function rebaseHist(hist, change) {
		    var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
		    rebaseHistArray(hist.done, from, to, diff);
		    rebaseHistArray(hist.undone, from, to, diff);
		  }

		  // Utility for applying a change to a line by handle or number,
		  // returning the number and optionally registering the line as
		  // changed.
		  function changeLine(doc, handle, changeType, op) {
		    var no = handle, line = handle;
		    if (typeof handle == "number") { line = getLine(doc, clipLine(doc, handle)); }
		    else { no = lineNo(handle); }
		    if (no == null) { return null }
		    if (op(line, no) && doc.cm) { regLineChange(doc.cm, no, changeType); }
		    return line
		  }

		  // The document is represented as a BTree consisting of leaves, with
		  // chunk of lines in them, and branches, with up to ten leaves or
		  // other branch nodes below them. The top node is always a branch
		  // node, and is the document object itself (meaning it has
		  // additional methods and properties).
		  //
		  // All nodes have parent links. The tree is used both to go from
		  // line numbers to line objects, and to go from objects to numbers.
		  // It also indexes by height, and is used to convert between height
		  // and line object, and to find the total height of the document.
		  //
		  // See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

		  function LeafChunk(lines) {
		    this.lines = lines;
		    this.parent = null;
		    var height = 0;
		    for (var i = 0; i < lines.length; ++i) {
		      lines[i].parent = this;
		      height += lines[i].height;
		    }
		    this.height = height;
		  }

		  LeafChunk.prototype = {
		    chunkSize: function() { return this.lines.length },

		    // Remove the n lines at offset 'at'.
		    removeInner: function(at, n) {
		      for (var i = at, e = at + n; i < e; ++i) {
		        var line = this.lines[i];
		        this.height -= line.height;
		        cleanUpLine(line);
		        signalLater(line, "delete");
		      }
		      this.lines.splice(at, n);
		    },

		    // Helper used to collapse a small branch into a single leaf.
		    collapse: function(lines) {
		      lines.push.apply(lines, this.lines);
		    },

		    // Insert the given array of lines at offset 'at', count them as
		    // having the given height.
		    insertInner: function(at, lines, height) {
		      this.height += height;
		      this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
		      for (var i = 0; i < lines.length; ++i) { lines[i].parent = this; }
		    },

		    // Used to iterate over a part of the tree.
		    iterN: function(at, n, op) {
		      for (var e = at + n; at < e; ++at)
		        { if (op(this.lines[at])) { return true } }
		    }
		  };

		  function BranchChunk(children) {
		    this.children = children;
		    var size = 0, height = 0;
		    for (var i = 0; i < children.length; ++i) {
		      var ch = children[i];
		      size += ch.chunkSize(); height += ch.height;
		      ch.parent = this;
		    }
		    this.size = size;
		    this.height = height;
		    this.parent = null;
		  }

		  BranchChunk.prototype = {
		    chunkSize: function() { return this.size },

		    removeInner: function(at, n) {
		      this.size -= n;
		      for (var i = 0; i < this.children.length; ++i) {
		        var child = this.children[i], sz = child.chunkSize();
		        if (at < sz) {
		          var rm = Math.min(n, sz - at), oldHeight = child.height;
		          child.removeInner(at, rm);
		          this.height -= oldHeight - child.height;
		          if (sz == rm) { this.children.splice(i--, 1); child.parent = null; }
		          if ((n -= rm) == 0) { break }
		          at = 0;
		        } else { at -= sz; }
		      }
		      // If the result is smaller than 25 lines, ensure that it is a
		      // single leaf node.
		      if (this.size - n < 25 &&
		          (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
		        var lines = [];
		        this.collapse(lines);
		        this.children = [new LeafChunk(lines)];
		        this.children[0].parent = this;
		      }
		    },

		    collapse: function(lines) {
		      for (var i = 0; i < this.children.length; ++i) { this.children[i].collapse(lines); }
		    },

		    insertInner: function(at, lines, height) {
		      this.size += lines.length;
		      this.height += height;
		      for (var i = 0; i < this.children.length; ++i) {
		        var child = this.children[i], sz = child.chunkSize();
		        if (at <= sz) {
		          child.insertInner(at, lines, height);
		          if (child.lines && child.lines.length > 50) {
		            // To avoid memory thrashing when child.lines is huge (e.g. first view of a large file), it's never spliced.
		            // Instead, small slices are taken. They're taken in order because sequential memory accesses are fastest.
		            var remaining = child.lines.length % 25 + 25;
		            for (var pos = remaining; pos < child.lines.length;) {
		              var leaf = new LeafChunk(child.lines.slice(pos, pos += 25));
		              child.height -= leaf.height;
		              this.children.splice(++i, 0, leaf);
		              leaf.parent = this;
		            }
		            child.lines = child.lines.slice(0, remaining);
		            this.maybeSpill();
		          }
		          break
		        }
		        at -= sz;
		      }
		    },

		    // When a node has grown, check whether it should be split.
		    maybeSpill: function() {
		      if (this.children.length <= 10) { return }
		      var me = this;
		      do {
		        var spilled = me.children.splice(me.children.length - 5, 5);
		        var sibling = new BranchChunk(spilled);
		        if (!me.parent) { // Become the parent node
		          var copy = new BranchChunk(me.children);
		          copy.parent = me;
		          me.children = [copy, sibling];
		          me = copy;
		       } else {
		          me.size -= sibling.size;
		          me.height -= sibling.height;
		          var myIndex = indexOf(me.parent.children, me);
		          me.parent.children.splice(myIndex + 1, 0, sibling);
		        }
		        sibling.parent = me.parent;
		      } while (me.children.length > 10)
		      me.parent.maybeSpill();
		    },

		    iterN: function(at, n, op) {
		      for (var i = 0; i < this.children.length; ++i) {
		        var child = this.children[i], sz = child.chunkSize();
		        if (at < sz) {
		          var used = Math.min(n, sz - at);
		          if (child.iterN(at, used, op)) { return true }
		          if ((n -= used) == 0) { break }
		          at = 0;
		        } else { at -= sz; }
		      }
		    }
		  };

		  // Line widgets are block elements displayed above or below a line.

		  var LineWidget = function(doc, node, options) {
		    if (options) { for (var opt in options) { if (options.hasOwnProperty(opt))
		      { this[opt] = options[opt]; } } }
		    this.doc = doc;
		    this.node = node;
		  };

		  LineWidget.prototype.clear = function () {
		    var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
		    if (no == null || !ws) { return }
		    for (var i = 0; i < ws.length; ++i) { if (ws[i] == this) { ws.splice(i--, 1); } }
		    if (!ws.length) { line.widgets = null; }
		    var height = widgetHeight(this);
		    updateLineHeight(line, Math.max(0, line.height - height));
		    if (cm) {
		      runInOp(cm, function () {
		        adjustScrollWhenAboveVisible(cm, line, -height);
		        regLineChange(cm, no, "widget");
		      });
		      signalLater(cm, "lineWidgetCleared", cm, this, no);
		    }
		  };

		  LineWidget.prototype.changed = function () {
		      var this$1$1 = this;

		    var oldH = this.height, cm = this.doc.cm, line = this.line;
		    this.height = null;
		    var diff = widgetHeight(this) - oldH;
		    if (!diff) { return }
		    if (!lineIsHidden(this.doc, line)) { updateLineHeight(line, line.height + diff); }
		    if (cm) {
		      runInOp(cm, function () {
		        cm.curOp.forceUpdate = true;
		        adjustScrollWhenAboveVisible(cm, line, diff);
		        signalLater(cm, "lineWidgetChanged", cm, this$1$1, lineNo(line));
		      });
		    }
		  };
		  eventMixin(LineWidget);

		  function adjustScrollWhenAboveVisible(cm, line, diff) {
		    if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
		      { addToScrollTop(cm, diff); }
		  }

		  function addLineWidget(doc, handle, node, options) {
		    var widget = new LineWidget(doc, node, options);
		    var cm = doc.cm;
		    if (cm && widget.noHScroll) { cm.display.alignWidgets = true; }
		    changeLine(doc, handle, "widget", function (line) {
		      var widgets = line.widgets || (line.widgets = []);
		      if (widget.insertAt == null) { widgets.push(widget); }
		      else { widgets.splice(Math.min(widgets.length, Math.max(0, widget.insertAt)), 0, widget); }
		      widget.line = line;
		      if (cm && !lineIsHidden(doc, line)) {
		        var aboveVisible = heightAtLine(line) < doc.scrollTop;
		        updateLineHeight(line, line.height + widgetHeight(widget));
		        if (aboveVisible) { addToScrollTop(cm, widget.height); }
		        cm.curOp.forceUpdate = true;
		      }
		      return true
		    });
		    if (cm) { signalLater(cm, "lineWidgetAdded", cm, widget, typeof handle == "number" ? handle : lineNo(handle)); }
		    return widget
		  }

		  // TEXTMARKERS

		  // Created with markText and setBookmark methods. A TextMarker is a
		  // handle that can be used to clear or find a marked position in the
		  // document. Line objects hold arrays (markedSpans) containing
		  // {from, to, marker} object pointing to such marker objects, and
		  // indicating that such a marker is present on that line. Multiple
		  // lines may point to the same marker when it spans across lines.
		  // The spans will have null for their from/to properties when the
		  // marker continues beyond the start/end of the line. Markers have
		  // links back to the lines they currently touch.

		  // Collapsed markers have unique ids, in order to be able to order
		  // them, which is needed for uniquely determining an outer marker
		  // when they overlap (they may nest, but not partially overlap).
		  var nextMarkerId = 0;

		  var TextMarker = function(doc, type) {
		    this.lines = [];
		    this.type = type;
		    this.doc = doc;
		    this.id = ++nextMarkerId;
		  };

		  // Clear the marker.
		  TextMarker.prototype.clear = function () {
		    if (this.explicitlyCleared) { return }
		    var cm = this.doc.cm, withOp = cm && !cm.curOp;
		    if (withOp) { startOperation(cm); }
		    if (hasHandler(this, "clear")) {
		      var found = this.find();
		      if (found) { signalLater(this, "clear", found.from, found.to); }
		    }
		    var min = null, max = null;
		    for (var i = 0; i < this.lines.length; ++i) {
		      var line = this.lines[i];
		      var span = getMarkedSpanFor(line.markedSpans, this);
		      if (cm && !this.collapsed) { regLineChange(cm, lineNo(line), "text"); }
		      else if (cm) {
		        if (span.to != null) { max = lineNo(line); }
		        if (span.from != null) { min = lineNo(line); }
		      }
		      line.markedSpans = removeMarkedSpan(line.markedSpans, span);
		      if (span.from == null && this.collapsed && !lineIsHidden(this.doc, line) && cm)
		        { updateLineHeight(line, textHeight(cm.display)); }
		    }
		    if (cm && this.collapsed && !cm.options.lineWrapping) { for (var i$1 = 0; i$1 < this.lines.length; ++i$1) {
		      var visual = visualLine(this.lines[i$1]), len = lineLength(visual);
		      if (len > cm.display.maxLineLength) {
		        cm.display.maxLine = visual;
		        cm.display.maxLineLength = len;
		        cm.display.maxLineChanged = true;
		      }
		    } }

		    if (min != null && cm && this.collapsed) { regChange(cm, min, max + 1); }
		    this.lines.length = 0;
		    this.explicitlyCleared = true;
		    if (this.atomic && this.doc.cantEdit) {
		      this.doc.cantEdit = false;
		      if (cm) { reCheckSelection(cm.doc); }
		    }
		    if (cm) { signalLater(cm, "markerCleared", cm, this, min, max); }
		    if (withOp) { endOperation(cm); }
		    if (this.parent) { this.parent.clear(); }
		  };

		  // Find the position of the marker in the document. Returns a {from,
		  // to} object by default. Side can be passed to get a specific side
		  // -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
		  // Pos objects returned contain a line object, rather than a line
		  // number (used to prevent looking up the same line twice).
		  TextMarker.prototype.find = function (side, lineObj) {
		    if (side == null && this.type == "bookmark") { side = 1; }
		    var from, to;
		    for (var i = 0; i < this.lines.length; ++i) {
		      var line = this.lines[i];
		      var span = getMarkedSpanFor(line.markedSpans, this);
		      if (span.from != null) {
		        from = Pos(lineObj ? line : lineNo(line), span.from);
		        if (side == -1) { return from }
		      }
		      if (span.to != null) {
		        to = Pos(lineObj ? line : lineNo(line), span.to);
		        if (side == 1) { return to }
		      }
		    }
		    return from && {from: from, to: to}
		  };

		  // Signals that the marker's widget changed, and surrounding layout
		  // should be recomputed.
		  TextMarker.prototype.changed = function () {
		      var this$1$1 = this;

		    var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
		    if (!pos || !cm) { return }
		    runInOp(cm, function () {
		      var line = pos.line, lineN = lineNo(pos.line);
		      var view = findViewForLine(cm, lineN);
		      if (view) {
		        clearLineMeasurementCacheFor(view);
		        cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
		      }
		      cm.curOp.updateMaxLine = true;
		      if (!lineIsHidden(widget.doc, line) && widget.height != null) {
		        var oldHeight = widget.height;
		        widget.height = null;
		        var dHeight = widgetHeight(widget) - oldHeight;
		        if (dHeight)
		          { updateLineHeight(line, line.height + dHeight); }
		      }
		      signalLater(cm, "markerChanged", cm, this$1$1);
		    });
		  };

		  TextMarker.prototype.attachLine = function (line) {
		    if (!this.lines.length && this.doc.cm) {
		      var op = this.doc.cm.curOp;
		      if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
		        { (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this); }
		    }
		    this.lines.push(line);
		  };

		  TextMarker.prototype.detachLine = function (line) {
		    this.lines.splice(indexOf(this.lines, line), 1);
		    if (!this.lines.length && this.doc.cm) {
		      var op = this.doc.cm.curOp
		      ;(op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
		    }
		  };
		  eventMixin(TextMarker);

		  // Create a marker, wire it up to the right lines, and
		  function markText(doc, from, to, options, type) {
		    // Shared markers (across linked documents) are handled separately
		    // (markTextShared will call out to this again, once per
		    // document).
		    if (options && options.shared) { return markTextShared(doc, from, to, options, type) }
		    // Ensure we are in an operation.
		    if (doc.cm && !doc.cm.curOp) { return operation(doc.cm, markText)(doc, from, to, options, type) }

		    var marker = new TextMarker(doc, type), diff = cmp(from, to);
		    if (options) { copyObj(options, marker, false); }
		    // Don't connect empty markers unless clearWhenEmpty is false
		    if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
		      { return marker }
		    if (marker.replacedWith) {
		      // Showing up as a widget implies collapsed (widget replaces text)
		      marker.collapsed = true;
		      marker.widgetNode = eltP("span", [marker.replacedWith], "CodeMirror-widget");
		      if (!options.handleMouseEvents) { marker.widgetNode.setAttribute("cm-ignore-events", "true"); }
		      if (options.insertLeft) { marker.widgetNode.insertLeft = true; }
		    }
		    if (marker.collapsed) {
		      if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
		          from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
		        { throw new Error("Inserting collapsed marker partially overlapping an existing one") }
		      seeCollapsedSpans();
		    }

		    if (marker.addToHistory)
		      { addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN); }

		    var curLine = from.line, cm = doc.cm, updateMaxLine;
		    doc.iter(curLine, to.line + 1, function (line) {
		      if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
		        { updateMaxLine = true; }
		      if (marker.collapsed && curLine != from.line) { updateLineHeight(line, 0); }
		      addMarkedSpan(line, new MarkedSpan(marker,
		                                         curLine == from.line ? from.ch : null,
		                                         curLine == to.line ? to.ch : null), doc.cm && doc.cm.curOp);
		      ++curLine;
		    });
		    // lineIsHidden depends on the presence of the spans, so needs a second pass
		    if (marker.collapsed) { doc.iter(from.line, to.line + 1, function (line) {
		      if (lineIsHidden(doc, line)) { updateLineHeight(line, 0); }
		    }); }

		    if (marker.clearOnEnter) { on(marker, "beforeCursorEnter", function () { return marker.clear(); }); }

		    if (marker.readOnly) {
		      seeReadOnlySpans();
		      if (doc.history.done.length || doc.history.undone.length)
		        { doc.clearHistory(); }
		    }
		    if (marker.collapsed) {
		      marker.id = ++nextMarkerId;
		      marker.atomic = true;
		    }
		    if (cm) {
		      // Sync editor state
		      if (updateMaxLine) { cm.curOp.updateMaxLine = true; }
		      if (marker.collapsed)
		        { regChange(cm, from.line, to.line + 1); }
		      else if (marker.className || marker.startStyle || marker.endStyle || marker.css ||
		               marker.attributes || marker.title)
		        { for (var i = from.line; i <= to.line; i++) { regLineChange(cm, i, "text"); } }
		      if (marker.atomic) { reCheckSelection(cm.doc); }
		      signalLater(cm, "markerAdded", cm, marker);
		    }
		    return marker
		  }

		  // SHARED TEXTMARKERS

		  // A shared marker spans multiple linked documents. It is
		  // implemented as a meta-marker-object controlling multiple normal
		  // markers.
		  var SharedTextMarker = function(markers, primary) {
		    this.markers = markers;
		    this.primary = primary;
		    for (var i = 0; i < markers.length; ++i)
		      { markers[i].parent = this; }
		  };

		  SharedTextMarker.prototype.clear = function () {
		    if (this.explicitlyCleared) { return }
		    this.explicitlyCleared = true;
		    for (var i = 0; i < this.markers.length; ++i)
		      { this.markers[i].clear(); }
		    signalLater(this, "clear");
		  };

		  SharedTextMarker.prototype.find = function (side, lineObj) {
		    return this.primary.find(side, lineObj)
		  };
		  eventMixin(SharedTextMarker);

		  function markTextShared(doc, from, to, options, type) {
		    options = copyObj(options);
		    options.shared = false;
		    var markers = [markText(doc, from, to, options, type)], primary = markers[0];
		    var widget = options.widgetNode;
		    linkedDocs(doc, function (doc) {
		      if (widget) { options.widgetNode = widget.cloneNode(true); }
		      markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
		      for (var i = 0; i < doc.linked.length; ++i)
		        { if (doc.linked[i].isParent) { return } }
		      primary = lst(markers);
		    });
		    return new SharedTextMarker(markers, primary)
		  }

		  function findSharedMarkers(doc) {
		    return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())), function (m) { return m.parent; })
		  }

		  function copySharedMarkers(doc, markers) {
		    for (var i = 0; i < markers.length; i++) {
		      var marker = markers[i], pos = marker.find();
		      var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
		      if (cmp(mFrom, mTo)) {
		        var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
		        marker.markers.push(subMark);
		        subMark.parent = marker;
		      }
		    }
		  }

		  function detachSharedMarkers(markers) {
		    var loop = function ( i ) {
		      var marker = markers[i], linked = [marker.primary.doc];
		      linkedDocs(marker.primary.doc, function (d) { return linked.push(d); });
		      for (var j = 0; j < marker.markers.length; j++) {
		        var subMarker = marker.markers[j];
		        if (indexOf(linked, subMarker.doc) == -1) {
		          subMarker.parent = null;
		          marker.markers.splice(j--, 1);
		        }
		      }
		    };

		    for (var i = 0; i < markers.length; i++) loop( i );
		  }

		  var nextDocId = 0;
		  var Doc = function(text, mode, firstLine, lineSep, direction) {
		    if (!(this instanceof Doc)) { return new Doc(text, mode, firstLine, lineSep, direction) }
		    if (firstLine == null) { firstLine = 0; }

		    BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
		    this.first = firstLine;
		    this.scrollTop = this.scrollLeft = 0;
		    this.cantEdit = false;
		    this.cleanGeneration = 1;
		    this.modeFrontier = this.highlightFrontier = firstLine;
		    var start = Pos(firstLine, 0);
		    this.sel = simpleSelection(start);
		    this.history = new History(null);
		    this.id = ++nextDocId;
		    this.modeOption = mode;
		    this.lineSep = lineSep;
		    this.direction = (direction == "rtl") ? "rtl" : "ltr";
		    this.extend = false;

		    if (typeof text == "string") { text = this.splitLines(text); }
		    updateDoc(this, {from: start, to: start, text: text});
		    setSelection(this, simpleSelection(start), sel_dontScroll);
		  };

		  Doc.prototype = createObj(BranchChunk.prototype, {
		    constructor: Doc,
		    // Iterate over the document. Supports two forms -- with only one
		    // argument, it calls that for each line in the document. With
		    // three, it iterates over the range given by the first two (with
		    // the second being non-inclusive).
		    iter: function(from, to, op) {
		      if (op) { this.iterN(from - this.first, to - from, op); }
		      else { this.iterN(this.first, this.first + this.size, from); }
		    },

		    // Non-public interface for adding and removing lines.
		    insert: function(at, lines) {
		      var height = 0;
		      for (var i = 0; i < lines.length; ++i) { height += lines[i].height; }
		      this.insertInner(at - this.first, lines, height);
		    },
		    remove: function(at, n) { this.removeInner(at - this.first, n); },

		    // From here, the methods are part of the public interface. Most
		    // are also available from CodeMirror (editor) instances.

		    getValue: function(lineSep) {
		      var lines = getLines(this, this.first, this.first + this.size);
		      if (lineSep === false) { return lines }
		      return lines.join(lineSep || this.lineSeparator())
		    },
		    setValue: docMethodOp(function(code) {
		      var top = Pos(this.first, 0), last = this.first + this.size - 1;
		      makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
		                        text: this.splitLines(code), origin: "setValue", full: true}, true);
		      if (this.cm) { scrollToCoords(this.cm, 0, 0); }
		      setSelection(this, simpleSelection(top), sel_dontScroll);
		    }),
		    replaceRange: function(code, from, to, origin) {
		      from = clipPos(this, from);
		      to = to ? clipPos(this, to) : from;
		      replaceRange(this, code, from, to, origin);
		    },
		    getRange: function(from, to, lineSep) {
		      var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
		      if (lineSep === false) { return lines }
		      if (lineSep === '') { return lines.join('') }
		      return lines.join(lineSep || this.lineSeparator())
		    },

		    getLine: function(line) {var l = this.getLineHandle(line); return l && l.text},

		    getLineHandle: function(line) {if (isLine(this, line)) { return getLine(this, line) }},
		    getLineNumber: function(line) {return lineNo(line)},

		    getLineHandleVisualStart: function(line) {
		      if (typeof line == "number") { line = getLine(this, line); }
		      return visualLine(line)
		    },

		    lineCount: function() {return this.size},
		    firstLine: function() {return this.first},
		    lastLine: function() {return this.first + this.size - 1},

		    clipPos: function(pos) {return clipPos(this, pos)},

		    getCursor: function(start) {
		      var range = this.sel.primary(), pos;
		      if (start == null || start == "head") { pos = range.head; }
		      else if (start == "anchor") { pos = range.anchor; }
		      else if (start == "end" || start == "to" || start === false) { pos = range.to(); }
		      else { pos = range.from(); }
		      return pos
		    },
		    listSelections: function() { return this.sel.ranges },
		    somethingSelected: function() {return this.sel.somethingSelected()},

		    setCursor: docMethodOp(function(line, ch, options) {
		      setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
		    }),
		    setSelection: docMethodOp(function(anchor, head, options) {
		      setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
		    }),
		    extendSelection: docMethodOp(function(head, other, options) {
		      extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
		    }),
		    extendSelections: docMethodOp(function(heads, options) {
		      extendSelections(this, clipPosArray(this, heads), options);
		    }),
		    extendSelectionsBy: docMethodOp(function(f, options) {
		      var heads = map(this.sel.ranges, f);
		      extendSelections(this, clipPosArray(this, heads), options);
		    }),
		    setSelections: docMethodOp(function(ranges, primary, options) {
		      if (!ranges.length) { return }
		      var out = [];
		      for (var i = 0; i < ranges.length; i++)
		        { out[i] = new Range(clipPos(this, ranges[i].anchor),
		                           clipPos(this, ranges[i].head || ranges[i].anchor)); }
		      if (primary == null) { primary = Math.min(ranges.length - 1, this.sel.primIndex); }
		      setSelection(this, normalizeSelection(this.cm, out, primary), options);
		    }),
		    addSelection: docMethodOp(function(anchor, head, options) {
		      var ranges = this.sel.ranges.slice(0);
		      ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
		      setSelection(this, normalizeSelection(this.cm, ranges, ranges.length - 1), options);
		    }),

		    getSelection: function(lineSep) {
		      var ranges = this.sel.ranges, lines;
		      for (var i = 0; i < ranges.length; i++) {
		        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
		        lines = lines ? lines.concat(sel) : sel;
		      }
		      if (lineSep === false) { return lines }
		      else { return lines.join(lineSep || this.lineSeparator()) }
		    },
		    getSelections: function(lineSep) {
		      var parts = [], ranges = this.sel.ranges;
		      for (var i = 0; i < ranges.length; i++) {
		        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
		        if (lineSep !== false) { sel = sel.join(lineSep || this.lineSeparator()); }
		        parts[i] = sel;
		      }
		      return parts
		    },
		    replaceSelection: function(code, collapse, origin) {
		      var dup = [];
		      for (var i = 0; i < this.sel.ranges.length; i++)
		        { dup[i] = code; }
		      this.replaceSelections(dup, collapse, origin || "+input");
		    },
		    replaceSelections: docMethodOp(function(code, collapse, origin) {
		      var changes = [], sel = this.sel;
		      for (var i = 0; i < sel.ranges.length; i++) {
		        var range = sel.ranges[i];
		        changes[i] = {from: range.from(), to: range.to(), text: this.splitLines(code[i]), origin: origin};
		      }
		      var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
		      for (var i$1 = changes.length - 1; i$1 >= 0; i$1--)
		        { makeChange(this, changes[i$1]); }
		      if (newSel) { setSelectionReplaceHistory(this, newSel); }
		      else if (this.cm) { ensureCursorVisible(this.cm); }
		    }),
		    undo: docMethodOp(function() {makeChangeFromHistory(this, "undo");}),
		    redo: docMethodOp(function() {makeChangeFromHistory(this, "redo");}),
		    undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true);}),
		    redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true);}),

		    setExtending: function(val) {this.extend = val;},
		    getExtending: function() {return this.extend},

		    historySize: function() {
		      var hist = this.history, done = 0, undone = 0;
		      for (var i = 0; i < hist.done.length; i++) { if (!hist.done[i].ranges) { ++done; } }
		      for (var i$1 = 0; i$1 < hist.undone.length; i$1++) { if (!hist.undone[i$1].ranges) { ++undone; } }
		      return {undo: done, redo: undone}
		    },
		    clearHistory: function() {
		      var this$1$1 = this;

		      this.history = new History(this.history);
		      linkedDocs(this, function (doc) { return doc.history = this$1$1.history; }, true);
		    },

		    markClean: function() {
		      this.cleanGeneration = this.changeGeneration(true);
		    },
		    changeGeneration: function(forceSplit) {
		      if (forceSplit)
		        { this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null; }
		      return this.history.generation
		    },
		    isClean: function (gen) {
		      return this.history.generation == (gen || this.cleanGeneration)
		    },

		    getHistory: function() {
		      return {done: copyHistoryArray(this.history.done),
		              undone: copyHistoryArray(this.history.undone)}
		    },
		    setHistory: function(histData) {
		      var hist = this.history = new History(this.history);
		      hist.done = copyHistoryArray(histData.done.slice(0), null, true);
		      hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
		    },

		    setGutterMarker: docMethodOp(function(line, gutterID, value) {
		      return changeLine(this, line, "gutter", function (line) {
		        var markers = line.gutterMarkers || (line.gutterMarkers = {});
		        markers[gutterID] = value;
		        if (!value && isEmpty(markers)) { line.gutterMarkers = null; }
		        return true
		      })
		    }),

		    clearGutter: docMethodOp(function(gutterID) {
		      var this$1$1 = this;

		      this.iter(function (line) {
		        if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
		          changeLine(this$1$1, line, "gutter", function () {
		            line.gutterMarkers[gutterID] = null;
		            if (isEmpty(line.gutterMarkers)) { line.gutterMarkers = null; }
		            return true
		          });
		        }
		      });
		    }),

		    lineInfo: function(line) {
		      var n;
		      if (typeof line == "number") {
		        if (!isLine(this, line)) { return null }
		        n = line;
		        line = getLine(this, line);
		        if (!line) { return null }
		      } else {
		        n = lineNo(line);
		        if (n == null) { return null }
		      }
		      return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
		              textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
		              widgets: line.widgets}
		    },

		    addLineClass: docMethodOp(function(handle, where, cls) {
		      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
		        var prop = where == "text" ? "textClass"
		                 : where == "background" ? "bgClass"
		                 : where == "gutter" ? "gutterClass" : "wrapClass";
		        if (!line[prop]) { line[prop] = cls; }
		        else if (classTest(cls).test(line[prop])) { return false }
		        else { line[prop] += " " + cls; }
		        return true
		      })
		    }),
		    removeLineClass: docMethodOp(function(handle, where, cls) {
		      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
		        var prop = where == "text" ? "textClass"
		                 : where == "background" ? "bgClass"
		                 : where == "gutter" ? "gutterClass" : "wrapClass";
		        var cur = line[prop];
		        if (!cur) { return false }
		        else if (cls == null) { line[prop] = null; }
		        else {
		          var found = cur.match(classTest(cls));
		          if (!found) { return false }
		          var end = found.index + found[0].length;
		          line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
		        }
		        return true
		      })
		    }),

		    addLineWidget: docMethodOp(function(handle, node, options) {
		      return addLineWidget(this, handle, node, options)
		    }),
		    removeLineWidget: function(widget) { widget.clear(); },

		    markText: function(from, to, options) {
		      return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range")
		    },
		    setBookmark: function(pos, options) {
		      var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
		                      insertLeft: options && options.insertLeft,
		                      clearWhenEmpty: false, shared: options && options.shared,
		                      handleMouseEvents: options && options.handleMouseEvents};
		      pos = clipPos(this, pos);
		      return markText(this, pos, pos, realOpts, "bookmark")
		    },
		    findMarksAt: function(pos) {
		      pos = clipPos(this, pos);
		      var markers = [], spans = getLine(this, pos.line).markedSpans;
		      if (spans) { for (var i = 0; i < spans.length; ++i) {
		        var span = spans[i];
		        if ((span.from == null || span.from <= pos.ch) &&
		            (span.to == null || span.to >= pos.ch))
		          { markers.push(span.marker.parent || span.marker); }
		      } }
		      return markers
		    },
		    findMarks: function(from, to, filter) {
		      from = clipPos(this, from); to = clipPos(this, to);
		      var found = [], lineNo = from.line;
		      this.iter(from.line, to.line + 1, function (line) {
		        var spans = line.markedSpans;
		        if (spans) { for (var i = 0; i < spans.length; i++) {
		          var span = spans[i];
		          if (!(span.to != null && lineNo == from.line && from.ch >= span.to ||
		                span.from == null && lineNo != from.line ||
		                span.from != null && lineNo == to.line && span.from >= to.ch) &&
		              (!filter || filter(span.marker)))
		            { found.push(span.marker.parent || span.marker); }
		        } }
		        ++lineNo;
		      });
		      return found
		    },
		    getAllMarks: function() {
		      var markers = [];
		      this.iter(function (line) {
		        var sps = line.markedSpans;
		        if (sps) { for (var i = 0; i < sps.length; ++i)
		          { if (sps[i].from != null) { markers.push(sps[i].marker); } } }
		      });
		      return markers
		    },

		    posFromIndex: function(off) {
		      var ch, lineNo = this.first, sepSize = this.lineSeparator().length;
		      this.iter(function (line) {
		        var sz = line.text.length + sepSize;
		        if (sz > off) { ch = off; return true }
		        off -= sz;
		        ++lineNo;
		      });
		      return clipPos(this, Pos(lineNo, ch))
		    },
		    indexFromPos: function (coords) {
		      coords = clipPos(this, coords);
		      var index = coords.ch;
		      if (coords.line < this.first || coords.ch < 0) { return 0 }
		      var sepSize = this.lineSeparator().length;
		      this.iter(this.first, coords.line, function (line) { // iter aborts when callback returns a truthy value
		        index += line.text.length + sepSize;
		      });
		      return index
		    },

		    copy: function(copyHistory) {
		      var doc = new Doc(getLines(this, this.first, this.first + this.size),
		                        this.modeOption, this.first, this.lineSep, this.direction);
		      doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft;
		      doc.sel = this.sel;
		      doc.extend = false;
		      if (copyHistory) {
		        doc.history.undoDepth = this.history.undoDepth;
		        doc.setHistory(this.getHistory());
		      }
		      return doc
		    },

		    linkedDoc: function(options) {
		      if (!options) { options = {}; }
		      var from = this.first, to = this.first + this.size;
		      if (options.from != null && options.from > from) { from = options.from; }
		      if (options.to != null && options.to < to) { to = options.to; }
		      var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep, this.direction);
		      if (options.sharedHist) { copy.history = this.history
		      ; }(this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist});
		      copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}];
		      copySharedMarkers(copy, findSharedMarkers(this));
		      return copy
		    },
		    unlinkDoc: function(other) {
		      if (other instanceof CodeMirror) { other = other.doc; }
		      if (this.linked) { for (var i = 0; i < this.linked.length; ++i) {
		        var link = this.linked[i];
		        if (link.doc != other) { continue }
		        this.linked.splice(i, 1);
		        other.unlinkDoc(this);
		        detachSharedMarkers(findSharedMarkers(this));
		        break
		      } }
		      // If the histories were shared, split them again
		      if (other.history == this.history) {
		        var splitIds = [other.id];
		        linkedDocs(other, function (doc) { return splitIds.push(doc.id); }, true);
		        other.history = new History(null);
		        other.history.done = copyHistoryArray(this.history.done, splitIds);
		        other.history.undone = copyHistoryArray(this.history.undone, splitIds);
		      }
		    },
		    iterLinkedDocs: function(f) {linkedDocs(this, f);},

		    getMode: function() {return this.mode},
		    getEditor: function() {return this.cm},

		    splitLines: function(str) {
		      if (this.lineSep) { return str.split(this.lineSep) }
		      return splitLinesAuto(str)
		    },
		    lineSeparator: function() { return this.lineSep || "\n" },

		    setDirection: docMethodOp(function (dir) {
		      if (dir != "rtl") { dir = "ltr"; }
		      if (dir == this.direction) { return }
		      this.direction = dir;
		      this.iter(function (line) { return line.order = null; });
		      if (this.cm) { directionChanged(this.cm); }
		    })
		  });

		  // Public alias.
		  Doc.prototype.eachLine = Doc.prototype.iter;

		  // Kludge to work around strange IE behavior where it'll sometimes
		  // re-fire a series of drag-related events right after the drop (#1551)
		  var lastDrop = 0;

		  function onDrop(e) {
		    var cm = this;
		    clearDragCursor(cm);
		    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
		      { return }
		    e_preventDefault(e);
		    if (ie) { lastDrop = +new Date; }
		    var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
		    if (!pos || cm.isReadOnly()) { return }
		    // Might be a file drop, in which case we simply extract the text
		    // and insert it.
		    if (files && files.length && window.FileReader && window.File) {
		      var n = files.length, text = Array(n), read = 0;
		      var markAsReadAndPasteIfAllFilesAreRead = function () {
		        if (++read == n) {
		          operation(cm, function () {
		            pos = clipPos(cm.doc, pos);
		            var change = {from: pos, to: pos,
		                          text: cm.doc.splitLines(
		                              text.filter(function (t) { return t != null; }).join(cm.doc.lineSeparator())),
		                          origin: "paste"};
		            makeChange(cm.doc, change);
		            setSelectionReplaceHistory(cm.doc, simpleSelection(clipPos(cm.doc, pos), clipPos(cm.doc, changeEnd(change))));
		          })();
		        }
		      };
		      var readTextFromFile = function (file, i) {
		        if (cm.options.allowDropFileTypes &&
		            indexOf(cm.options.allowDropFileTypes, file.type) == -1) {
		          markAsReadAndPasteIfAllFilesAreRead();
		          return
		        }
		        var reader = new FileReader;
		        reader.onerror = function () { return markAsReadAndPasteIfAllFilesAreRead(); };
		        reader.onload = function () {
		          var content = reader.result;
		          if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) {
		            markAsReadAndPasteIfAllFilesAreRead();
		            return
		          }
		          text[i] = content;
		          markAsReadAndPasteIfAllFilesAreRead();
		        };
		        reader.readAsText(file);
		      };
		      for (var i = 0; i < files.length; i++) { readTextFromFile(files[i], i); }
		    } else { // Normal drop
		      // Don't do a replace if the drop happened inside of the selected text.
		      if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
		        cm.state.draggingText(e);
		        // Ensure the editor is re-focused
		        setTimeout(function () { return cm.display.input.focus(); }, 20);
		        return
		      }
		      try {
		        var text$1 = e.dataTransfer.getData("Text");
		        if (text$1) {
		          var selected;
		          if (cm.state.draggingText && !cm.state.draggingText.copy)
		            { selected = cm.listSelections(); }
		          setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
		          if (selected) { for (var i$1 = 0; i$1 < selected.length; ++i$1)
		            { replaceRange(cm.doc, "", selected[i$1].anchor, selected[i$1].head, "drag"); } }
		          cm.replaceSelection(text$1, "around", "paste");
		          cm.display.input.focus();
		        }
		      }
		      catch(e$1){}
		    }
		  }

		  function onDragStart(cm, e) {
		    if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return }
		    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) { return }

		    e.dataTransfer.setData("Text", cm.getSelection());
		    e.dataTransfer.effectAllowed = "copyMove";

		    // Use dummy image instead of default browsers image.
		    // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
		    if (e.dataTransfer.setDragImage && !safari) {
		      var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
		      img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
		      if (presto) {
		        img.width = img.height = 1;
		        cm.display.wrapper.appendChild(img);
		        // Force a relayout, or Opera won't use our image for some obscure reason
		        img._top = img.offsetTop;
		      }
		      e.dataTransfer.setDragImage(img, 0, 0);
		      if (presto) { img.parentNode.removeChild(img); }
		    }
		  }

		  function onDragOver(cm, e) {
		    var pos = posFromMouse(cm, e);
		    if (!pos) { return }
		    var frag = document.createDocumentFragment();
		    drawSelectionCursor(cm, pos, frag);
		    if (!cm.display.dragCursor) {
		      cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors");
		      cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv);
		    }
		    removeChildrenAndAdd(cm.display.dragCursor, frag);
		  }

		  function clearDragCursor(cm) {
		    if (cm.display.dragCursor) {
		      cm.display.lineSpace.removeChild(cm.display.dragCursor);
		      cm.display.dragCursor = null;
		    }
		  }

		  // These must be handled carefully, because naively registering a
		  // handler for each editor will cause the editors to never be
		  // garbage collected.

		  function forEachCodeMirror(f) {
		    if (!document.getElementsByClassName) { return }
		    var byClass = document.getElementsByClassName("CodeMirror"), editors = [];
		    for (var i = 0; i < byClass.length; i++) {
		      var cm = byClass[i].CodeMirror;
		      if (cm) { editors.push(cm); }
		    }
		    if (editors.length) { editors[0].operation(function () {
		      for (var i = 0; i < editors.length; i++) { f(editors[i]); }
		    }); }
		  }

		  var globalsRegistered = false;
		  function ensureGlobalHandlers() {
		    if (globalsRegistered) { return }
		    registerGlobalHandlers();
		    globalsRegistered = true;
		  }
		  function registerGlobalHandlers() {
		    // When the window resizes, we need to refresh active editors.
		    var resizeTimer;
		    on(window, "resize", function () {
		      if (resizeTimer == null) { resizeTimer = setTimeout(function () {
		        resizeTimer = null;
		        forEachCodeMirror(onResize);
		      }, 100); }
		    });
		    // When the window loses focus, we want to show the editor as blurred
		    on(window, "blur", function () { return forEachCodeMirror(onBlur); });
		  }
		  // Called when the window resizes
		  function onResize(cm) {
		    var d = cm.display;
		    // Might be a text scaling operation, clear size caches.
		    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
		    d.scrollbarsClipped = false;
		    cm.setSize();
		  }

		  var keyNames = {
		    3: "Pause", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
		    19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
		    36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
		    46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
		    106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 145: "ScrollLock",
		    173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
		    221: "]", 222: "'", 224: "Mod", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
		    63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
		  };

		  // Number keys
		  for (var i = 0; i < 10; i++) { keyNames[i + 48] = keyNames[i + 96] = String(i); }
		  // Alphabetic keys
		  for (var i$1 = 65; i$1 <= 90; i$1++) { keyNames[i$1] = String.fromCharCode(i$1); }
		  // Function keys
		  for (var i$2 = 1; i$2 <= 12; i$2++) { keyNames[i$2 + 111] = keyNames[i$2 + 63235] = "F" + i$2; }

		  var keyMap = {};

		  keyMap.basic = {
		    "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
		    "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
		    "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
		    "Tab": "defaultTab", "Shift-Tab": "indentAuto",
		    "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
		    "Esc": "singleSelection"
		  };
		  // Note that the save and find-related commands aren't defined by
		  // default. User code or addons can define them. Unknown commands
		  // are simply ignored.
		  keyMap.pcDefault = {
		    "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
		    "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
		    "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
		    "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
		    "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
		    "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
		    "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
		    "fallthrough": "basic"
		  };
		  // Very basic readline/emacs-style bindings, which are standard on Mac.
		  keyMap.emacsy = {
		    "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
		    "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd", "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp",
		    "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine",
		    "Ctrl-T": "transposeChars", "Ctrl-O": "openLine"
		  };
		  keyMap.macDefault = {
		    "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
		    "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
		    "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
		    "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
		    "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
		    "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
		    "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
		    "fallthrough": ["basic", "emacsy"]
		  };
		  keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;

		  // KEYMAP DISPATCH

		  function normalizeKeyName(name) {
		    var parts = name.split(/-(?!$)/);
		    name = parts[parts.length - 1];
		    var alt, ctrl, shift, cmd;
		    for (var i = 0; i < parts.length - 1; i++) {
		      var mod = parts[i];
		      if (/^(cmd|meta|m)$/i.test(mod)) { cmd = true; }
		      else if (/^a(lt)?$/i.test(mod)) { alt = true; }
		      else if (/^(c|ctrl|control)$/i.test(mod)) { ctrl = true; }
		      else if (/^s(hift)?$/i.test(mod)) { shift = true; }
		      else { throw new Error("Unrecognized modifier name: " + mod) }
		    }
		    if (alt) { name = "Alt-" + name; }
		    if (ctrl) { name = "Ctrl-" + name; }
		    if (cmd) { name = "Cmd-" + name; }
		    if (shift) { name = "Shift-" + name; }
		    return name
		  }

		  // This is a kludge to keep keymaps mostly working as raw objects
		  // (backwards compatibility) while at the same time support features
		  // like normalization and multi-stroke key bindings. It compiles a
		  // new normalized keymap, and then updates the old object to reflect
		  // this.
		  function normalizeKeyMap(keymap) {
		    var copy = {};
		    for (var keyname in keymap) { if (keymap.hasOwnProperty(keyname)) {
		      var value = keymap[keyname];
		      if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) { continue }
		      if (value == "...") { delete keymap[keyname]; continue }

		      var keys = map(keyname.split(" "), normalizeKeyName);
		      for (var i = 0; i < keys.length; i++) {
		        var val = (void 0), name = (void 0);
		        if (i == keys.length - 1) {
		          name = keys.join(" ");
		          val = value;
		        } else {
		          name = keys.slice(0, i + 1).join(" ");
		          val = "...";
		        }
		        var prev = copy[name];
		        if (!prev) { copy[name] = val; }
		        else if (prev != val) { throw new Error("Inconsistent bindings for " + name) }
		      }
		      delete keymap[keyname];
		    } }
		    for (var prop in copy) { keymap[prop] = copy[prop]; }
		    return keymap
		  }

		  function lookupKey(key, map, handle, context) {
		    map = getKeyMap(map);
		    var found = map.call ? map.call(key, context) : map[key];
		    if (found === false) { return "nothing" }
		    if (found === "...") { return "multi" }
		    if (found != null && handle(found)) { return "handled" }

		    if (map.fallthrough) {
		      if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
		        { return lookupKey(key, map.fallthrough, handle, context) }
		      for (var i = 0; i < map.fallthrough.length; i++) {
		        var result = lookupKey(key, map.fallthrough[i], handle, context);
		        if (result) { return result }
		      }
		    }
		  }

		  // Modifier key presses don't count as 'real' key presses for the
		  // purpose of keymap fallthrough.
		  function isModifierKey(value) {
		    var name = typeof value == "string" ? value : keyNames[value.keyCode];
		    return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod"
		  }

		  function addModifierNames(name, event, noShift) {
		    var base = name;
		    if (event.altKey && base != "Alt") { name = "Alt-" + name; }
		    if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") { name = "Ctrl-" + name; }
		    if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Mod") { name = "Cmd-" + name; }
		    if (!noShift && event.shiftKey && base != "Shift") { name = "Shift-" + name; }
		    return name
		  }

		  // Look up the name of a key as indicated by an event object.
		  function keyName(event, noShift) {
		    if (presto && event.keyCode == 34 && event["char"]) { return false }
		    var name = keyNames[event.keyCode];
		    if (name == null || event.altGraphKey) { return false }
		    // Ctrl-ScrollLock has keyCode 3, same as Ctrl-Pause,
		    // so we'll use event.code when available (Chrome 48+, FF 38+, Safari 10.1+)
		    if (event.keyCode == 3 && event.code) { name = event.code; }
		    return addModifierNames(name, event, noShift)
		  }

		  function getKeyMap(val) {
		    return typeof val == "string" ? keyMap[val] : val
		  }

		  // Helper for deleting text near the selection(s), used to implement
		  // backspace, delete, and similar functionality.
		  function deleteNearSelection(cm, compute) {
		    var ranges = cm.doc.sel.ranges, kill = [];
		    // Build up a set of ranges to kill first, merging overlapping
		    // ranges.
		    for (var i = 0; i < ranges.length; i++) {
		      var toKill = compute(ranges[i]);
		      while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
		        var replaced = kill.pop();
		        if (cmp(replaced.from, toKill.from) < 0) {
		          toKill.from = replaced.from;
		          break
		        }
		      }
		      kill.push(toKill);
		    }
		    // Next, remove those actual ranges.
		    runInOp(cm, function () {
		      for (var i = kill.length - 1; i >= 0; i--)
		        { replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete"); }
		      ensureCursorVisible(cm);
		    });
		  }

		  function moveCharLogically(line, ch, dir) {
		    var target = skipExtendingChars(line.text, ch + dir, dir);
		    return target < 0 || target > line.text.length ? null : target
		  }

		  function moveLogically(line, start, dir) {
		    var ch = moveCharLogically(line, start.ch, dir);
		    return ch == null ? null : new Pos(start.line, ch, dir < 0 ? "after" : "before")
		  }

		  function endOfLine(visually, cm, lineObj, lineNo, dir) {
		    if (visually) {
		      if (cm.doc.direction == "rtl") { dir = -dir; }
		      var order = getOrder(lineObj, cm.doc.direction);
		      if (order) {
		        var part = dir < 0 ? lst(order) : order[0];
		        var moveInStorageOrder = (dir < 0) == (part.level == 1);
		        var sticky = moveInStorageOrder ? "after" : "before";
		        var ch;
		        // With a wrapped rtl chunk (possibly spanning multiple bidi parts),
		        // it could be that the last bidi part is not on the last visual line,
		        // since visual lines contain content order-consecutive chunks.
		        // Thus, in rtl, we are looking for the first (content-order) character
		        // in the rtl chunk that is on the last line (that is, the same line
		        // as the last (content-order) character).
		        if (part.level > 0 || cm.doc.direction == "rtl") {
		          var prep = prepareMeasureForLine(cm, lineObj);
		          ch = dir < 0 ? lineObj.text.length - 1 : 0;
		          var targetTop = measureCharPrepared(cm, prep, ch).top;
		          ch = findFirst(function (ch) { return measureCharPrepared(cm, prep, ch).top == targetTop; }, (dir < 0) == (part.level == 1) ? part.from : part.to - 1, ch);
		          if (sticky == "before") { ch = moveCharLogically(lineObj, ch, 1); }
		        } else { ch = dir < 0 ? part.to : part.from; }
		        return new Pos(lineNo, ch, sticky)
		      }
		    }
		    return new Pos(lineNo, dir < 0 ? lineObj.text.length : 0, dir < 0 ? "before" : "after")
		  }

		  function moveVisually(cm, line, start, dir) {
		    var bidi = getOrder(line, cm.doc.direction);
		    if (!bidi) { return moveLogically(line, start, dir) }
		    if (start.ch >= line.text.length) {
		      start.ch = line.text.length;
		      start.sticky = "before";
		    } else if (start.ch <= 0) {
		      start.ch = 0;
		      start.sticky = "after";
		    }
		    var partPos = getBidiPartAt(bidi, start.ch, start.sticky), part = bidi[partPos];
		    if (cm.doc.direction == "ltr" && part.level % 2 == 0 && (dir > 0 ? part.to > start.ch : part.from < start.ch)) {
		      // Case 1: We move within an ltr part in an ltr editor. Even with wrapped lines,
		      // nothing interesting happens.
		      return moveLogically(line, start, dir)
		    }

		    var mv = function (pos, dir) { return moveCharLogically(line, pos instanceof Pos ? pos.ch : pos, dir); };
		    var prep;
		    var getWrappedLineExtent = function (ch) {
		      if (!cm.options.lineWrapping) { return {begin: 0, end: line.text.length} }
		      prep = prep || prepareMeasureForLine(cm, line);
		      return wrappedLineExtentChar(cm, line, prep, ch)
		    };
		    var wrappedLineExtent = getWrappedLineExtent(start.sticky == "before" ? mv(start, -1) : start.ch);

		    if (cm.doc.direction == "rtl" || part.level == 1) {
		      var moveInStorageOrder = (part.level == 1) == (dir < 0);
		      var ch = mv(start, moveInStorageOrder ? 1 : -1);
		      if (ch != null && (!moveInStorageOrder ? ch >= part.from && ch >= wrappedLineExtent.begin : ch <= part.to && ch <= wrappedLineExtent.end)) {
		        // Case 2: We move within an rtl part or in an rtl editor on the same visual line
		        var sticky = moveInStorageOrder ? "before" : "after";
		        return new Pos(start.line, ch, sticky)
		      }
		    }

		    // Case 3: Could not move within this bidi part in this visual line, so leave
		    // the current bidi part

		    var searchInVisualLine = function (partPos, dir, wrappedLineExtent) {
		      var getRes = function (ch, moveInStorageOrder) { return moveInStorageOrder
		        ? new Pos(start.line, mv(ch, 1), "before")
		        : new Pos(start.line, ch, "after"); };

		      for (; partPos >= 0 && partPos < bidi.length; partPos += dir) {
		        var part = bidi[partPos];
		        var moveInStorageOrder = (dir > 0) == (part.level != 1);
		        var ch = moveInStorageOrder ? wrappedLineExtent.begin : mv(wrappedLineExtent.end, -1);
		        if (part.from <= ch && ch < part.to) { return getRes(ch, moveInStorageOrder) }
		        ch = moveInStorageOrder ? part.from : mv(part.to, -1);
		        if (wrappedLineExtent.begin <= ch && ch < wrappedLineExtent.end) { return getRes(ch, moveInStorageOrder) }
		      }
		    };

		    // Case 3a: Look for other bidi parts on the same visual line
		    var res = searchInVisualLine(partPos + dir, dir, wrappedLineExtent);
		    if (res) { return res }

		    // Case 3b: Look for other bidi parts on the next visual line
		    var nextCh = dir > 0 ? wrappedLineExtent.end : mv(wrappedLineExtent.begin, -1);
		    if (nextCh != null && !(dir > 0 && nextCh == line.text.length)) {
		      res = searchInVisualLine(dir > 0 ? 0 : bidi.length - 1, dir, getWrappedLineExtent(nextCh));
		      if (res) { return res }
		    }

		    // Case 4: Nowhere to move
		    return null
		  }

		  // Commands are parameter-less actions that can be performed on an
		  // editor, mostly used for keybindings.
		  var commands = {
		    selectAll: selectAll,
		    singleSelection: function (cm) { return cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll); },
		    killLine: function (cm) { return deleteNearSelection(cm, function (range) {
		      if (range.empty()) {
		        var len = getLine(cm.doc, range.head.line).text.length;
		        if (range.head.ch == len && range.head.line < cm.lastLine())
		          { return {from: range.head, to: Pos(range.head.line + 1, 0)} }
		        else
		          { return {from: range.head, to: Pos(range.head.line, len)} }
		      } else {
		        return {from: range.from(), to: range.to()}
		      }
		    }); },
		    deleteLine: function (cm) { return deleteNearSelection(cm, function (range) { return ({
		      from: Pos(range.from().line, 0),
		      to: clipPos(cm.doc, Pos(range.to().line + 1, 0))
		    }); }); },
		    delLineLeft: function (cm) { return deleteNearSelection(cm, function (range) { return ({
		      from: Pos(range.from().line, 0), to: range.from()
		    }); }); },
		    delWrappedLineLeft: function (cm) { return deleteNearSelection(cm, function (range) {
		      var top = cm.charCoords(range.head, "div").top + 5;
		      var leftPos = cm.coordsChar({left: 0, top: top}, "div");
		      return {from: leftPos, to: range.from()}
		    }); },
		    delWrappedLineRight: function (cm) { return deleteNearSelection(cm, function (range) {
		      var top = cm.charCoords(range.head, "div").top + 5;
		      var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
		      return {from: range.from(), to: rightPos }
		    }); },
		    undo: function (cm) { return cm.undo(); },
		    redo: function (cm) { return cm.redo(); },
		    undoSelection: function (cm) { return cm.undoSelection(); },
		    redoSelection: function (cm) { return cm.redoSelection(); },
		    goDocStart: function (cm) { return cm.extendSelection(Pos(cm.firstLine(), 0)); },
		    goDocEnd: function (cm) { return cm.extendSelection(Pos(cm.lastLine())); },
		    goLineStart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStart(cm, range.head.line); },
		      {origin: "+move", bias: 1}
		    ); },
		    goLineStartSmart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStartSmart(cm, range.head); },
		      {origin: "+move", bias: 1}
		    ); },
		    goLineEnd: function (cm) { return cm.extendSelectionsBy(function (range) { return lineEnd(cm, range.head.line); },
		      {origin: "+move", bias: -1}
		    ); },
		    goLineRight: function (cm) { return cm.extendSelectionsBy(function (range) {
		      var top = cm.cursorCoords(range.head, "div").top + 5;
		      return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
		    }, sel_move); },
		    goLineLeft: function (cm) { return cm.extendSelectionsBy(function (range) {
		      var top = cm.cursorCoords(range.head, "div").top + 5;
		      return cm.coordsChar({left: 0, top: top}, "div")
		    }, sel_move); },
		    goLineLeftSmart: function (cm) { return cm.extendSelectionsBy(function (range) {
		      var top = cm.cursorCoords(range.head, "div").top + 5;
		      var pos = cm.coordsChar({left: 0, top: top}, "div");
		      if (pos.ch < cm.getLine(pos.line).search(/\S/)) { return lineStartSmart(cm, range.head) }
		      return pos
		    }, sel_move); },
		    goLineUp: function (cm) { return cm.moveV(-1, "line"); },
		    goLineDown: function (cm) { return cm.moveV(1, "line"); },
		    goPageUp: function (cm) { return cm.moveV(-1, "page"); },
		    goPageDown: function (cm) { return cm.moveV(1, "page"); },
		    goCharLeft: function (cm) { return cm.moveH(-1, "char"); },
		    goCharRight: function (cm) { return cm.moveH(1, "char"); },
		    goColumnLeft: function (cm) { return cm.moveH(-1, "column"); },
		    goColumnRight: function (cm) { return cm.moveH(1, "column"); },
		    goWordLeft: function (cm) { return cm.moveH(-1, "word"); },
		    goGroupRight: function (cm) { return cm.moveH(1, "group"); },
		    goGroupLeft: function (cm) { return cm.moveH(-1, "group"); },
		    goWordRight: function (cm) { return cm.moveH(1, "word"); },
		    delCharBefore: function (cm) { return cm.deleteH(-1, "codepoint"); },
		    delCharAfter: function (cm) { return cm.deleteH(1, "char"); },
		    delWordBefore: function (cm) { return cm.deleteH(-1, "word"); },
		    delWordAfter: function (cm) { return cm.deleteH(1, "word"); },
		    delGroupBefore: function (cm) { return cm.deleteH(-1, "group"); },
		    delGroupAfter: function (cm) { return cm.deleteH(1, "group"); },
		    indentAuto: function (cm) { return cm.indentSelection("smart"); },
		    indentMore: function (cm) { return cm.indentSelection("add"); },
		    indentLess: function (cm) { return cm.indentSelection("subtract"); },
		    insertTab: function (cm) { return cm.replaceSelection("\t"); },
		    insertSoftTab: function (cm) {
		      var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
		      for (var i = 0; i < ranges.length; i++) {
		        var pos = ranges[i].from();
		        var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
		        spaces.push(spaceStr(tabSize - col % tabSize));
		      }
		      cm.replaceSelections(spaces);
		    },
		    defaultTab: function (cm) {
		      if (cm.somethingSelected()) { cm.indentSelection("add"); }
		      else { cm.execCommand("insertTab"); }
		    },
		    // Swap the two chars left and right of each selection's head.
		    // Move cursor behind the two swapped characters afterwards.
		    //
		    // Doesn't consider line feeds a character.
		    // Doesn't scan more than one line above to find a character.
		    // Doesn't do anything on an empty line.
		    // Doesn't do anything with non-empty selections.
		    transposeChars: function (cm) { return runInOp(cm, function () {
		      var ranges = cm.listSelections(), newSel = [];
		      for (var i = 0; i < ranges.length; i++) {
		        if (!ranges[i].empty()) { continue }
		        var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text;
		        if (line) {
		          if (cur.ch == line.length) { cur = new Pos(cur.line, cur.ch - 1); }
		          if (cur.ch > 0) {
		            cur = new Pos(cur.line, cur.ch + 1);
		            cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
		                            Pos(cur.line, cur.ch - 2), cur, "+transpose");
		          } else if (cur.line > cm.doc.first) {
		            var prev = getLine(cm.doc, cur.line - 1).text;
		            if (prev) {
		              cur = new Pos(cur.line, 1);
		              cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
		                              prev.charAt(prev.length - 1),
		                              Pos(cur.line - 1, prev.length - 1), cur, "+transpose");
		            }
		          }
		        }
		        newSel.push(new Range(cur, cur));
		      }
		      cm.setSelections(newSel);
		    }); },
		    newlineAndIndent: function (cm) { return runInOp(cm, function () {
		      var sels = cm.listSelections();
		      for (var i = sels.length - 1; i >= 0; i--)
		        { cm.replaceRange(cm.doc.lineSeparator(), sels[i].anchor, sels[i].head, "+input"); }
		      sels = cm.listSelections();
		      for (var i$1 = 0; i$1 < sels.length; i$1++)
		        { cm.indentLine(sels[i$1].from().line, null, true); }
		      ensureCursorVisible(cm);
		    }); },
		    openLine: function (cm) { return cm.replaceSelection("\n", "start"); },
		    toggleOverwrite: function (cm) { return cm.toggleOverwrite(); }
		  };


		  function lineStart(cm, lineN) {
		    var line = getLine(cm.doc, lineN);
		    var visual = visualLine(line);
		    if (visual != line) { lineN = lineNo(visual); }
		    return endOfLine(true, cm, visual, lineN, 1)
		  }
		  function lineEnd(cm, lineN) {
		    var line = getLine(cm.doc, lineN);
		    var visual = visualLineEnd(line);
		    if (visual != line) { lineN = lineNo(visual); }
		    return endOfLine(true, cm, line, lineN, -1)
		  }
		  function lineStartSmart(cm, pos) {
		    var start = lineStart(cm, pos.line);
		    var line = getLine(cm.doc, start.line);
		    var order = getOrder(line, cm.doc.direction);
		    if (!order || order[0].level == 0) {
		      var firstNonWS = Math.max(start.ch, line.text.search(/\S/));
		      var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
		      return Pos(start.line, inWS ? 0 : firstNonWS, start.sticky)
		    }
		    return start
		  }

		  // Run a handler that was bound to a key.
		  function doHandleBinding(cm, bound, dropShift) {
		    if (typeof bound == "string") {
		      bound = commands[bound];
		      if (!bound) { return false }
		    }
		    // Ensure previous input has been read, so that the handler sees a
		    // consistent view of the document
		    cm.display.input.ensurePolled();
		    var prevShift = cm.display.shift, done = false;
		    try {
		      if (cm.isReadOnly()) { cm.state.suppressEdits = true; }
		      if (dropShift) { cm.display.shift = false; }
		      done = bound(cm) != Pass;
		    } finally {
		      cm.display.shift = prevShift;
		      cm.state.suppressEdits = false;
		    }
		    return done
		  }

		  function lookupKeyForEditor(cm, name, handle) {
		    for (var i = 0; i < cm.state.keyMaps.length; i++) {
		      var result = lookupKey(name, cm.state.keyMaps[i], handle, cm);
		      if (result) { return result }
		    }
		    return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
		      || lookupKey(name, cm.options.keyMap, handle, cm)
		  }

		  // Note that, despite the name, this function is also used to check
		  // for bound mouse clicks.

		  var stopSeq = new Delayed;

		  function dispatchKey(cm, name, e, handle) {
		    var seq = cm.state.keySeq;
		    if (seq) {
		      if (isModifierKey(name)) { return "handled" }
		      if (/\'$/.test(name))
		        { cm.state.keySeq = null; }
		      else
		        { stopSeq.set(50, function () {
		          if (cm.state.keySeq == seq) {
		            cm.state.keySeq = null;
		            cm.display.input.reset();
		          }
		        }); }
		      if (dispatchKeyInner(cm, seq + " " + name, e, handle)) { return true }
		    }
		    return dispatchKeyInner(cm, name, e, handle)
		  }

		  function dispatchKeyInner(cm, name, e, handle) {
		    var result = lookupKeyForEditor(cm, name, handle);

		    if (result == "multi")
		      { cm.state.keySeq = name; }
		    if (result == "handled")
		      { signalLater(cm, "keyHandled", cm, name, e); }

		    if (result == "handled" || result == "multi") {
		      e_preventDefault(e);
		      restartBlink(cm);
		    }

		    return !!result
		  }

		  // Handle a key from the keydown event.
		  function handleKeyBinding(cm, e) {
		    var name = keyName(e, true);
		    if (!name) { return false }

		    if (e.shiftKey && !cm.state.keySeq) {
		      // First try to resolve full name (including 'Shift-'). Failing
		      // that, see if there is a cursor-motion command (starting with
		      // 'go') bound to the keyname without 'Shift-'.
		      return dispatchKey(cm, "Shift-" + name, e, function (b) { return doHandleBinding(cm, b, true); })
		          || dispatchKey(cm, name, e, function (b) {
		               if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
		                 { return doHandleBinding(cm, b) }
		             })
		    } else {
		      return dispatchKey(cm, name, e, function (b) { return doHandleBinding(cm, b); })
		    }
		  }

		  // Handle a key from the keypress event
		  function handleCharBinding(cm, e, ch) {
		    return dispatchKey(cm, "'" + ch + "'", e, function (b) { return doHandleBinding(cm, b, true); })
		  }

		  var lastStoppedKey = null;
		  function onKeyDown(e) {
		    var cm = this;
		    if (e.target && e.target != cm.display.input.getField()) { return }
		    cm.curOp.focus = activeElt(root(cm));
		    if (signalDOMEvent(cm, e)) { return }
		    // IE does strange things with escape.
		    if (ie && ie_version < 11 && e.keyCode == 27) { e.returnValue = false; }
		    var code = e.keyCode;
		    cm.display.shift = code == 16 || e.shiftKey;
		    var handled = handleKeyBinding(cm, e);
		    if (presto) {
		      lastStoppedKey = handled ? code : null;
		      // Opera has no cut event... we try to at least catch the key combo
		      if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
		        { cm.replaceSelection("", null, "cut"); }
		    }
		    if (gecko && !mac && !handled && code == 46 && e.shiftKey && !e.ctrlKey && document.execCommand)
		      { document.execCommand("cut"); }

		    // Turn mouse into crosshair when Alt is held on Mac.
		    if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
		      { showCrossHair(cm); }
		  }

		  function showCrossHair(cm) {
		    var lineDiv = cm.display.lineDiv;
		    addClass(lineDiv, "CodeMirror-crosshair");

		    function up(e) {
		      if (e.keyCode == 18 || !e.altKey) {
		        rmClass(lineDiv, "CodeMirror-crosshair");
		        off(document, "keyup", up);
		        off(document, "mouseover", up);
		      }
		    }
		    on(document, "keyup", up);
		    on(document, "mouseover", up);
		  }

		  function onKeyUp(e) {
		    if (e.keyCode == 16) { this.doc.sel.shift = false; }
		    signalDOMEvent(this, e);
		  }

		  function onKeyPress(e) {
		    var cm = this;
		    if (e.target && e.target != cm.display.input.getField()) { return }
		    if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) { return }
		    var keyCode = e.keyCode, charCode = e.charCode;
		    if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return}
		    if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) { return }
		    var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
		    // Some browsers fire keypress events for backspace
		    if (ch == "\x08") { return }
		    if (handleCharBinding(cm, e, ch)) { return }
		    cm.display.input.onKeyPress(e);
		  }

		  var DOUBLECLICK_DELAY = 400;

		  var PastClick = function(time, pos, button) {
		    this.time = time;
		    this.pos = pos;
		    this.button = button;
		  };

		  PastClick.prototype.compare = function (time, pos, button) {
		    return this.time + DOUBLECLICK_DELAY > time &&
		      cmp(pos, this.pos) == 0 && button == this.button
		  };

		  var lastClick, lastDoubleClick;
		  function clickRepeat(pos, button) {
		    var now = +new Date;
		    if (lastDoubleClick && lastDoubleClick.compare(now, pos, button)) {
		      lastClick = lastDoubleClick = null;
		      return "triple"
		    } else if (lastClick && lastClick.compare(now, pos, button)) {
		      lastDoubleClick = new PastClick(now, pos, button);
		      lastClick = null;
		      return "double"
		    } else {
		      lastClick = new PastClick(now, pos, button);
		      lastDoubleClick = null;
		      return "single"
		    }
		  }

		  // A mouse down can be a single click, double click, triple click,
		  // start of selection drag, start of text drag, new cursor
		  // (ctrl-click), rectangle drag (alt-drag), or xwin
		  // middle-click-paste. Or it might be a click on something we should
		  // not interfere with, such as a scrollbar or widget.
		  function onMouseDown(e) {
		    var cm = this, display = cm.display;
		    if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) { return }
		    display.input.ensurePolled();
		    display.shift = e.shiftKey;

		    if (eventInWidget(display, e)) {
		      if (!webkit) {
		        // Briefly turn off draggability, to allow widgets to do
		        // normal dragging things.
		        display.scroller.draggable = false;
		        setTimeout(function () { return display.scroller.draggable = true; }, 100);
		      }
		      return
		    }
		    if (clickInGutter(cm, e)) { return }
		    var pos = posFromMouse(cm, e), button = e_button(e), repeat = pos ? clickRepeat(pos, button) : "single";
		    win(cm).focus();

		    // #3261: make sure, that we're not starting a second selection
		    if (button == 1 && cm.state.selectingText)
		      { cm.state.selectingText(e); }

		    if (pos && handleMappedButton(cm, button, pos, repeat, e)) { return }

		    if (button == 1) {
		      if (pos) { leftButtonDown(cm, pos, repeat, e); }
		      else if (e_target(e) == display.scroller) { e_preventDefault(e); }
		    } else if (button == 2) {
		      if (pos) { extendSelection(cm.doc, pos); }
		      setTimeout(function () { return display.input.focus(); }, 20);
		    } else if (button == 3) {
		      if (captureRightClick) { cm.display.input.onContextMenu(e); }
		      else { delayBlurEvent(cm); }
		    }
		  }

		  function handleMappedButton(cm, button, pos, repeat, event) {
		    var name = "Click";
		    if (repeat == "double") { name = "Double" + name; }
		    else if (repeat == "triple") { name = "Triple" + name; }
		    name = (button == 1 ? "Left" : button == 2 ? "Middle" : "Right") + name;

		    return dispatchKey(cm,  addModifierNames(name, event), event, function (bound) {
		      if (typeof bound == "string") { bound = commands[bound]; }
		      if (!bound) { return false }
		      var done = false;
		      try {
		        if (cm.isReadOnly()) { cm.state.suppressEdits = true; }
		        done = bound(cm, pos) != Pass;
		      } finally {
		        cm.state.suppressEdits = false;
		      }
		      return done
		    })
		  }

		  function configureMouse(cm, repeat, event) {
		    var option = cm.getOption("configureMouse");
		    var value = option ? option(cm, repeat, event) : {};
		    if (value.unit == null) {
		      var rect = chromeOS ? event.shiftKey && event.metaKey : event.altKey;
		      value.unit = rect ? "rectangle" : repeat == "single" ? "char" : repeat == "double" ? "word" : "line";
		    }
		    if (value.extend == null || cm.doc.extend) { value.extend = cm.doc.extend || event.shiftKey; }
		    if (value.addNew == null) { value.addNew = mac ? event.metaKey : event.ctrlKey; }
		    if (value.moveOnDrag == null) { value.moveOnDrag = !(mac ? event.altKey : event.ctrlKey); }
		    return value
		  }

		  function leftButtonDown(cm, pos, repeat, event) {
		    if (ie) { setTimeout(bind(ensureFocus, cm), 0); }
		    else { cm.curOp.focus = activeElt(root(cm)); }

		    var behavior = configureMouse(cm, repeat, event);

		    var sel = cm.doc.sel, contained;
		    if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() &&
		        repeat == "single" && (contained = sel.contains(pos)) > -1 &&
		        (cmp((contained = sel.ranges[contained]).from(), pos) < 0 || pos.xRel > 0) &&
		        (cmp(contained.to(), pos) > 0 || pos.xRel < 0))
		      { leftButtonStartDrag(cm, event, pos, behavior); }
		    else
		      { leftButtonSelect(cm, event, pos, behavior); }
		  }

		  // Start a text drag. When it ends, see if any dragging actually
		  // happen, and treat as a click if it didn't.
		  function leftButtonStartDrag(cm, event, pos, behavior) {
		    var display = cm.display, moved = false;
		    var dragEnd = operation(cm, function (e) {
		      if (webkit) { display.scroller.draggable = false; }
		      cm.state.draggingText = false;
		      if (cm.state.delayingBlurEvent) {
		        if (cm.hasFocus()) { cm.state.delayingBlurEvent = false; }
		        else { delayBlurEvent(cm); }
		      }
		      off(display.wrapper.ownerDocument, "mouseup", dragEnd);
		      off(display.wrapper.ownerDocument, "mousemove", mouseMove);
		      off(display.scroller, "dragstart", dragStart);
		      off(display.scroller, "drop", dragEnd);
		      if (!moved) {
		        e_preventDefault(e);
		        if (!behavior.addNew)
		          { extendSelection(cm.doc, pos, null, null, behavior.extend); }
		        // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
		        if ((webkit && !safari) || ie && ie_version == 9)
		          { setTimeout(function () {display.wrapper.ownerDocument.body.focus({preventScroll: true}); display.input.focus();}, 20); }
		        else
		          { display.input.focus(); }
		      }
		    });
		    var mouseMove = function(e2) {
		      moved = moved || Math.abs(event.clientX - e2.clientX) + Math.abs(event.clientY - e2.clientY) >= 10;
		    };
		    var dragStart = function () { return moved = true; };
		    // Let the drag handler handle this.
		    if (webkit) { display.scroller.draggable = true; }
		    cm.state.draggingText = dragEnd;
		    dragEnd.copy = !behavior.moveOnDrag;
		    on(display.wrapper.ownerDocument, "mouseup", dragEnd);
		    on(display.wrapper.ownerDocument, "mousemove", mouseMove);
		    on(display.scroller, "dragstart", dragStart);
		    on(display.scroller, "drop", dragEnd);

		    cm.state.delayingBlurEvent = true;
		    setTimeout(function () { return display.input.focus(); }, 20);
		    // IE's approach to draggable
		    if (display.scroller.dragDrop) { display.scroller.dragDrop(); }
		  }

		  function rangeForUnit(cm, pos, unit) {
		    if (unit == "char") { return new Range(pos, pos) }
		    if (unit == "word") { return cm.findWordAt(pos) }
		    if (unit == "line") { return new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))) }
		    var result = unit(cm, pos);
		    return new Range(result.from, result.to)
		  }

		  // Normal selection, as opposed to text dragging.
		  function leftButtonSelect(cm, event, start, behavior) {
		    if (ie) { delayBlurEvent(cm); }
		    var display = cm.display, doc = cm.doc;
		    e_preventDefault(event);

		    var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges;
		    if (behavior.addNew && !behavior.extend) {
		      ourIndex = doc.sel.contains(start);
		      if (ourIndex > -1)
		        { ourRange = ranges[ourIndex]; }
		      else
		        { ourRange = new Range(start, start); }
		    } else {
		      ourRange = doc.sel.primary();
		      ourIndex = doc.sel.primIndex;
		    }

		    if (behavior.unit == "rectangle") {
		      if (!behavior.addNew) { ourRange = new Range(start, start); }
		      start = posFromMouse(cm, event, true, true);
		      ourIndex = -1;
		    } else {
		      var range = rangeForUnit(cm, start, behavior.unit);
		      if (behavior.extend)
		        { ourRange = extendRange(ourRange, range.anchor, range.head, behavior.extend); }
		      else
		        { ourRange = range; }
		    }

		    if (!behavior.addNew) {
		      ourIndex = 0;
		      setSelection(doc, new Selection([ourRange], 0), sel_mouse);
		      startSel = doc.sel;
		    } else if (ourIndex == -1) {
		      ourIndex = ranges.length;
		      setSelection(doc, normalizeSelection(cm, ranges.concat([ourRange]), ourIndex),
		                   {scroll: false, origin: "*mouse"});
		    } else if (ranges.length > 1 && ranges[ourIndex].empty() && behavior.unit == "char" && !behavior.extend) {
		      setSelection(doc, normalizeSelection(cm, ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
		                   {scroll: false, origin: "*mouse"});
		      startSel = doc.sel;
		    } else {
		      replaceOneSelection(doc, ourIndex, ourRange, sel_mouse);
		    }

		    var lastPos = start;
		    function extendTo(pos) {
		      if (cmp(lastPos, pos) == 0) { return }
		      lastPos = pos;

		      if (behavior.unit == "rectangle") {
		        var ranges = [], tabSize = cm.options.tabSize;
		        var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize);
		        var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize);
		        var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
		        for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
		             line <= end; line++) {
		          var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize);
		          if (left == right)
		            { ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos))); }
		          else if (text.length > leftPos)
		            { ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize)))); }
		        }
		        if (!ranges.length) { ranges.push(new Range(start, start)); }
		        setSelection(doc, normalizeSelection(cm, startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
		                     {origin: "*mouse", scroll: false});
		        cm.scrollIntoView(pos);
		      } else {
		        var oldRange = ourRange;
		        var range = rangeForUnit(cm, pos, behavior.unit);
		        var anchor = oldRange.anchor, head;
		        if (cmp(range.anchor, anchor) > 0) {
		          head = range.head;
		          anchor = minPos(oldRange.from(), range.anchor);
		        } else {
		          head = range.anchor;
		          anchor = maxPos(oldRange.to(), range.head);
		        }
		        var ranges$1 = startSel.ranges.slice(0);
		        ranges$1[ourIndex] = bidiSimplify(cm, new Range(clipPos(doc, anchor), head));
		        setSelection(doc, normalizeSelection(cm, ranges$1, ourIndex), sel_mouse);
		      }
		    }

		    var editorSize = display.wrapper.getBoundingClientRect();
		    // Used to ensure timeout re-tries don't fire when another extend
		    // happened in the meantime (clearTimeout isn't reliable -- at
		    // least on Chrome, the timeouts still happen even when cleared,
		    // if the clear happens after their scheduled firing time).
		    var counter = 0;

		    function extend(e) {
		      var curCount = ++counter;
		      var cur = posFromMouse(cm, e, true, behavior.unit == "rectangle");
		      if (!cur) { return }
		      if (cmp(cur, lastPos) != 0) {
		        cm.curOp.focus = activeElt(root(cm));
		        extendTo(cur);
		        var visible = visibleLines(display, doc);
		        if (cur.line >= visible.to || cur.line < visible.from)
		          { setTimeout(operation(cm, function () {if (counter == curCount) { extend(e); }}), 150); }
		      } else {
		        var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
		        if (outside) { setTimeout(operation(cm, function () {
		          if (counter != curCount) { return }
		          display.scroller.scrollTop += outside;
		          extend(e);
		        }), 50); }
		      }
		    }

		    function done(e) {
		      cm.state.selectingText = false;
		      counter = Infinity;
		      // If e is null or undefined we interpret this as someone trying
		      // to explicitly cancel the selection rather than the user
		      // letting go of the mouse button.
		      if (e) {
		        e_preventDefault(e);
		        display.input.focus();
		      }
		      off(display.wrapper.ownerDocument, "mousemove", move);
		      off(display.wrapper.ownerDocument, "mouseup", up);
		      doc.history.lastSelOrigin = null;
		    }

		    var move = operation(cm, function (e) {
		      if (e.buttons === 0 || !e_button(e)) { done(e); }
		      else { extend(e); }
		    });
		    var up = operation(cm, done);
		    cm.state.selectingText = up;
		    on(display.wrapper.ownerDocument, "mousemove", move);
		    on(display.wrapper.ownerDocument, "mouseup", up);
		  }

		  // Used when mouse-selecting to adjust the anchor to the proper side
		  // of a bidi jump depending on the visual position of the head.
		  function bidiSimplify(cm, range) {
		    var anchor = range.anchor;
		    var head = range.head;
		    var anchorLine = getLine(cm.doc, anchor.line);
		    if (cmp(anchor, head) == 0 && anchor.sticky == head.sticky) { return range }
		    var order = getOrder(anchorLine);
		    if (!order) { return range }
		    var index = getBidiPartAt(order, anchor.ch, anchor.sticky), part = order[index];
		    if (part.from != anchor.ch && part.to != anchor.ch) { return range }
		    var boundary = index + ((part.from == anchor.ch) == (part.level != 1) ? 0 : 1);
		    if (boundary == 0 || boundary == order.length) { return range }

		    // Compute the relative visual position of the head compared to the
		    // anchor (<0 is to the left, >0 to the right)
		    var leftSide;
		    if (head.line != anchor.line) {
		      leftSide = (head.line - anchor.line) * (cm.doc.direction == "ltr" ? 1 : -1) > 0;
		    } else {
		      var headIndex = getBidiPartAt(order, head.ch, head.sticky);
		      var dir = headIndex - index || (head.ch - anchor.ch) * (part.level == 1 ? -1 : 1);
		      if (headIndex == boundary - 1 || headIndex == boundary)
		        { leftSide = dir < 0; }
		      else
		        { leftSide = dir > 0; }
		    }

		    var usePart = order[boundary + (leftSide ? -1 : 0)];
		    var from = leftSide == (usePart.level == 1);
		    var ch = from ? usePart.from : usePart.to, sticky = from ? "after" : "before";
		    return anchor.ch == ch && anchor.sticky == sticky ? range : new Range(new Pos(anchor.line, ch, sticky), head)
		  }


		  // Determines whether an event happened in the gutter, and fires the
		  // handlers for the corresponding event.
		  function gutterEvent(cm, e, type, prevent) {
		    var mX, mY;
		    if (e.touches) {
		      mX = e.touches[0].clientX;
		      mY = e.touches[0].clientY;
		    } else {
		      try { mX = e.clientX; mY = e.clientY; }
		      catch(e$1) { return false }
		    }
		    if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) { return false }
		    if (prevent) { e_preventDefault(e); }

		    var display = cm.display;
		    var lineBox = display.lineDiv.getBoundingClientRect();

		    if (mY > lineBox.bottom || !hasHandler(cm, type)) { return e_defaultPrevented(e) }
		    mY -= lineBox.top - display.viewOffset;

		    for (var i = 0; i < cm.display.gutterSpecs.length; ++i) {
		      var g = display.gutters.childNodes[i];
		      if (g && g.getBoundingClientRect().right >= mX) {
		        var line = lineAtHeight(cm.doc, mY);
		        var gutter = cm.display.gutterSpecs[i];
		        signal(cm, type, cm, line, gutter.className, e);
		        return e_defaultPrevented(e)
		      }
		    }
		  }

		  function clickInGutter(cm, e) {
		    return gutterEvent(cm, e, "gutterClick", true)
		  }

		  // CONTEXT MENU HANDLING

		  // To make the context menu work, we need to briefly unhide the
		  // textarea (making it as unobtrusive as possible) to let the
		  // right-click take effect on it.
		  function onContextMenu(cm, e) {
		    if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) { return }
		    if (signalDOMEvent(cm, e, "contextmenu")) { return }
		    if (!captureRightClick) { cm.display.input.onContextMenu(e); }
		  }

		  function contextMenuInGutter(cm, e) {
		    if (!hasHandler(cm, "gutterContextMenu")) { return false }
		    return gutterEvent(cm, e, "gutterContextMenu", false)
		  }

		  function themeChanged(cm) {
		    cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
		      cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
		    clearCaches(cm);
		  }

		  var Init = {toString: function(){return "CodeMirror.Init"}};

		  var defaults = {};
		  var optionHandlers = {};

		  function defineOptions(CodeMirror) {
		    var optionHandlers = CodeMirror.optionHandlers;

		    function option(name, deflt, handle, notOnInit) {
		      CodeMirror.defaults[name] = deflt;
		      if (handle) { optionHandlers[name] =
		        notOnInit ? function (cm, val, old) {if (old != Init) { handle(cm, val, old); }} : handle; }
		    }

		    CodeMirror.defineOption = option;

		    // Passed to option handlers when there is no old value.
		    CodeMirror.Init = Init;

		    // These two are, on init, called from the constructor because they
		    // have to be initialized before the editor can start at all.
		    option("value", "", function (cm, val) { return cm.setValue(val); }, true);
		    option("mode", null, function (cm, val) {
		      cm.doc.modeOption = val;
		      loadMode(cm);
		    }, true);

		    option("indentUnit", 2, loadMode, true);
		    option("indentWithTabs", false);
		    option("smartIndent", true);
		    option("tabSize", 4, function (cm) {
		      resetModeState(cm);
		      clearCaches(cm);
		      regChange(cm);
		    }, true);

		    option("lineSeparator", null, function (cm, val) {
		      cm.doc.lineSep = val;
		      if (!val) { return }
		      var newBreaks = [], lineNo = cm.doc.first;
		      cm.doc.iter(function (line) {
		        for (var pos = 0;;) {
		          var found = line.text.indexOf(val, pos);
		          if (found == -1) { break }
		          pos = found + val.length;
		          newBreaks.push(Pos(lineNo, found));
		        }
		        lineNo++;
		      });
		      for (var i = newBreaks.length - 1; i >= 0; i--)
		        { replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length)); }
		    });
		    option("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g, function (cm, val, old) {
		      cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g");
		      if (old != Init) { cm.refresh(); }
		    });
		    option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function (cm) { return cm.refresh(); }, true);
		    option("electricChars", true);
		    option("inputStyle", mobile ? "contenteditable" : "textarea", function () {
		      throw new Error("inputStyle can not (yet) be changed in a running editor") // FIXME
		    }, true);
		    option("spellcheck", false, function (cm, val) { return cm.getInputField().spellcheck = val; }, true);
		    option("autocorrect", false, function (cm, val) { return cm.getInputField().autocorrect = val; }, true);
		    option("autocapitalize", false, function (cm, val) { return cm.getInputField().autocapitalize = val; }, true);
		    option("rtlMoveVisually", !windows);
		    option("wholeLineUpdateBefore", true);

		    option("theme", "default", function (cm) {
		      themeChanged(cm);
		      updateGutters(cm);
		    }, true);
		    option("keyMap", "default", function (cm, val, old) {
		      var next = getKeyMap(val);
		      var prev = old != Init && getKeyMap(old);
		      if (prev && prev.detach) { prev.detach(cm, next); }
		      if (next.attach) { next.attach(cm, prev || null); }
		    });
		    option("extraKeys", null);
		    option("configureMouse", null);

		    option("lineWrapping", false, wrappingChanged, true);
		    option("gutters", [], function (cm, val) {
		      cm.display.gutterSpecs = getGutters(val, cm.options.lineNumbers);
		      updateGutters(cm);
		    }, true);
		    option("fixedGutter", true, function (cm, val) {
		      cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
		      cm.refresh();
		    }, true);
		    option("coverGutterNextToScrollbar", false, function (cm) { return updateScrollbars(cm); }, true);
		    option("scrollbarStyle", "native", function (cm) {
		      initScrollbars(cm);
		      updateScrollbars(cm);
		      cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
		      cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
		    }, true);
		    option("lineNumbers", false, function (cm, val) {
		      cm.display.gutterSpecs = getGutters(cm.options.gutters, val);
		      updateGutters(cm);
		    }, true);
		    option("firstLineNumber", 1, updateGutters, true);
		    option("lineNumberFormatter", function (integer) { return integer; }, updateGutters, true);
		    option("showCursorWhenSelecting", false, updateSelection, true);

		    option("resetSelectionOnContextMenu", true);
		    option("lineWiseCopyCut", true);
		    option("pasteLinesPerSelection", true);
		    option("selectionsMayTouch", false);

		    option("readOnly", false, function (cm, val) {
		      if (val == "nocursor") {
		        onBlur(cm);
		        cm.display.input.blur();
		      }
		      cm.display.input.readOnlyChanged(val);
		    });

		    option("screenReaderLabel", null, function (cm, val) {
		      val = (val === '') ? null : val;
		      cm.display.input.screenReaderLabelChanged(val);
		    });

		    option("disableInput", false, function (cm, val) {if (!val) { cm.display.input.reset(); }}, true);
		    option("dragDrop", true, dragDropChanged);
		    option("allowDropFileTypes", null);

		    option("cursorBlinkRate", 530);
		    option("cursorScrollMargin", 0);
		    option("cursorHeight", 1, updateSelection, true);
		    option("singleCursorHeightPerLine", true, updateSelection, true);
		    option("workTime", 100);
		    option("workDelay", 100);
		    option("flattenSpans", true, resetModeState, true);
		    option("addModeClass", false, resetModeState, true);
		    option("pollInterval", 100);
		    option("undoDepth", 200, function (cm, val) { return cm.doc.history.undoDepth = val; });
		    option("historyEventDelay", 1250);
		    option("viewportMargin", 10, function (cm) { return cm.refresh(); }, true);
		    option("maxHighlightLength", 10000, resetModeState, true);
		    option("moveInputWithCursor", true, function (cm, val) {
		      if (!val) { cm.display.input.resetPosition(); }
		    });

		    option("tabindex", null, function (cm, val) { return cm.display.input.getField().tabIndex = val || ""; });
		    option("autofocus", null);
		    option("direction", "ltr", function (cm, val) { return cm.doc.setDirection(val); }, true);
		    option("phrases", null);
		  }

		  function dragDropChanged(cm, value, old) {
		    var wasOn = old && old != Init;
		    if (!value != !wasOn) {
		      var funcs = cm.display.dragFunctions;
		      var toggle = value ? on : off;
		      toggle(cm.display.scroller, "dragstart", funcs.start);
		      toggle(cm.display.scroller, "dragenter", funcs.enter);
		      toggle(cm.display.scroller, "dragover", funcs.over);
		      toggle(cm.display.scroller, "dragleave", funcs.leave);
		      toggle(cm.display.scroller, "drop", funcs.drop);
		    }
		  }

		  function wrappingChanged(cm) {
		    if (cm.options.lineWrapping) {
		      addClass(cm.display.wrapper, "CodeMirror-wrap");
		      cm.display.sizer.style.minWidth = "";
		      cm.display.sizerWidth = null;
		    } else {
		      rmClass(cm.display.wrapper, "CodeMirror-wrap");
		      findMaxLine(cm);
		    }
		    estimateLineHeights(cm);
		    regChange(cm);
		    clearCaches(cm);
		    setTimeout(function () { return updateScrollbars(cm); }, 100);
		  }

		  // A CodeMirror instance represents an editor. This is the object
		  // that user code is usually dealing with.

		  function CodeMirror(place, options) {
		    var this$1$1 = this;

		    if (!(this instanceof CodeMirror)) { return new CodeMirror(place, options) }

		    this.options = options = options ? copyObj(options) : {};
		    // Determine effective options based on given values and defaults.
		    copyObj(defaults, options, false);

		    var doc = options.value;
		    if (typeof doc == "string") { doc = new Doc(doc, options.mode, null, options.lineSeparator, options.direction); }
		    else if (options.mode) { doc.modeOption = options.mode; }
		    this.doc = doc;

		    var input = new CodeMirror.inputStyles[options.inputStyle](this);
		    var display = this.display = new Display(place, doc, input, options);
		    display.wrapper.CodeMirror = this;
		    themeChanged(this);
		    if (options.lineWrapping)
		      { this.display.wrapper.className += " CodeMirror-wrap"; }
		    initScrollbars(this);

		    this.state = {
		      keyMaps: [],  // stores maps added by addKeyMap
		      overlays: [], // highlighting overlays, as added by addOverlay
		      modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
		      overwrite: false,
		      delayingBlurEvent: false,
		      focused: false,
		      suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
		      pasteIncoming: -1, cutIncoming: -1, // help recognize paste/cut edits in input.poll
		      selectingText: false,
		      draggingText: false,
		      highlight: new Delayed(), // stores highlight worker timeout
		      keySeq: null,  // Unfinished key sequence
		      specialChars: null
		    };

		    if (options.autofocus && !mobile) { display.input.focus(); }

		    // Override magic textarea content restore that IE sometimes does
		    // on our hidden textarea on reload
		    if (ie && ie_version < 11) { setTimeout(function () { return this$1$1.display.input.reset(true); }, 20); }

		    registerEventHandlers(this);
		    ensureGlobalHandlers();

		    startOperation(this);
		    this.curOp.forceUpdate = true;
		    attachDoc(this, doc);

		    if ((options.autofocus && !mobile) || this.hasFocus())
		      { setTimeout(function () {
		        if (this$1$1.hasFocus() && !this$1$1.state.focused) { onFocus(this$1$1); }
		      }, 20); }
		    else
		      { onBlur(this); }

		    for (var opt in optionHandlers) { if (optionHandlers.hasOwnProperty(opt))
		      { optionHandlers[opt](this, options[opt], Init); } }
		    maybeUpdateLineNumberWidth(this);
		    if (options.finishInit) { options.finishInit(this); }
		    for (var i = 0; i < initHooks.length; ++i) { initHooks[i](this); }
		    endOperation(this);
		    // Suppress optimizelegibility in Webkit, since it breaks text
		    // measuring on line wrapping boundaries.
		    if (webkit && options.lineWrapping &&
		        getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
		      { display.lineDiv.style.textRendering = "auto"; }
		  }

		  // The default configuration options.
		  CodeMirror.defaults = defaults;
		  // Functions to run when options are changed.
		  CodeMirror.optionHandlers = optionHandlers;

		  // Attach the necessary event handlers when initializing the editor
		  function registerEventHandlers(cm) {
		    var d = cm.display;
		    on(d.scroller, "mousedown", operation(cm, onMouseDown));
		    // Older IE's will not fire a second mousedown for a double click
		    if (ie && ie_version < 11)
		      { on(d.scroller, "dblclick", operation(cm, function (e) {
		        if (signalDOMEvent(cm, e)) { return }
		        var pos = posFromMouse(cm, e);
		        if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) { return }
		        e_preventDefault(e);
		        var word = cm.findWordAt(pos);
		        extendSelection(cm.doc, word.anchor, word.head);
		      })); }
		    else
		      { on(d.scroller, "dblclick", function (e) { return signalDOMEvent(cm, e) || e_preventDefault(e); }); }
		    // Some browsers fire contextmenu *after* opening the menu, at
		    // which point we can't mess with it anymore. Context menu is
		    // handled in onMouseDown for these browsers.
		    on(d.scroller, "contextmenu", function (e) { return onContextMenu(cm, e); });
		    on(d.input.getField(), "contextmenu", function (e) {
		      if (!d.scroller.contains(e.target)) { onContextMenu(cm, e); }
		    });

		    // Used to suppress mouse event handling when a touch happens
		    var touchFinished, prevTouch = {end: 0};
		    function finishTouch() {
		      if (d.activeTouch) {
		        touchFinished = setTimeout(function () { return d.activeTouch = null; }, 1000);
		        prevTouch = d.activeTouch;
		        prevTouch.end = +new Date;
		      }
		    }
		    function isMouseLikeTouchEvent(e) {
		      if (e.touches.length != 1) { return false }
		      var touch = e.touches[0];
		      return touch.radiusX <= 1 && touch.radiusY <= 1
		    }
		    function farAway(touch, other) {
		      if (other.left == null) { return true }
		      var dx = other.left - touch.left, dy = other.top - touch.top;
		      return dx * dx + dy * dy > 20 * 20
		    }
		    on(d.scroller, "touchstart", function (e) {
		      if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e) && !clickInGutter(cm, e)) {
		        d.input.ensurePolled();
		        clearTimeout(touchFinished);
		        var now = +new Date;
		        d.activeTouch = {start: now, moved: false,
		                         prev: now - prevTouch.end <= 300 ? prevTouch : null};
		        if (e.touches.length == 1) {
		          d.activeTouch.left = e.touches[0].pageX;
		          d.activeTouch.top = e.touches[0].pageY;
		        }
		      }
		    });
		    on(d.scroller, "touchmove", function () {
		      if (d.activeTouch) { d.activeTouch.moved = true; }
		    });
		    on(d.scroller, "touchend", function (e) {
		      var touch = d.activeTouch;
		      if (touch && !eventInWidget(d, e) && touch.left != null &&
		          !touch.moved && new Date - touch.start < 300) {
		        var pos = cm.coordsChar(d.activeTouch, "page"), range;
		        if (!touch.prev || farAway(touch, touch.prev)) // Single tap
		          { range = new Range(pos, pos); }
		        else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
		          { range = cm.findWordAt(pos); }
		        else // Triple tap
		          { range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))); }
		        cm.setSelection(range.anchor, range.head);
		        cm.focus();
		        e_preventDefault(e);
		      }
		      finishTouch();
		    });
		    on(d.scroller, "touchcancel", finishTouch);

		    // Sync scrolling between fake scrollbars and real scrollable
		    // area, ensure viewport is updated when scrolling.
		    on(d.scroller, "scroll", function () {
		      if (d.scroller.clientHeight) {
		        updateScrollTop(cm, d.scroller.scrollTop);
		        setScrollLeft(cm, d.scroller.scrollLeft, true);
		        signal(cm, "scroll", cm);
		      }
		    });

		    // Listen to wheel events in order to try and update the viewport on time.
		    on(d.scroller, "mousewheel", function (e) { return onScrollWheel(cm, e); });
		    on(d.scroller, "DOMMouseScroll", function (e) { return onScrollWheel(cm, e); });

		    // Prevent wrapper from ever scrolling
		    on(d.wrapper, "scroll", function () { return d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; });

		    d.dragFunctions = {
		      enter: function (e) {if (!signalDOMEvent(cm, e)) { e_stop(e); }},
		      over: function (e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e); }},
		      start: function (e) { return onDragStart(cm, e); },
		      drop: operation(cm, onDrop),
		      leave: function (e) {if (!signalDOMEvent(cm, e)) { clearDragCursor(cm); }}
		    };

		    var inp = d.input.getField();
		    on(inp, "keyup", function (e) { return onKeyUp.call(cm, e); });
		    on(inp, "keydown", operation(cm, onKeyDown));
		    on(inp, "keypress", operation(cm, onKeyPress));
		    on(inp, "focus", function (e) { return onFocus(cm, e); });
		    on(inp, "blur", function (e) { return onBlur(cm, e); });
		  }

		  var initHooks = [];
		  CodeMirror.defineInitHook = function (f) { return initHooks.push(f); };

		  // Indent the given line. The how parameter can be "smart",
		  // "add"/null, "subtract", or "prev". When aggressive is false
		  // (typically set to true for forced single-line indents), empty
		  // lines are not indented, and places where the mode returns Pass
		  // are left alone.
		  function indentLine(cm, n, how, aggressive) {
		    var doc = cm.doc, state;
		    if (how == null) { how = "add"; }
		    if (how == "smart") {
		      // Fall back to "prev" when the mode doesn't have an indentation
		      // method.
		      if (!doc.mode.indent) { how = "prev"; }
		      else { state = getContextBefore(cm, n).state; }
		    }

		    var tabSize = cm.options.tabSize;
		    var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
		    if (line.stateAfter) { line.stateAfter = null; }
		    var curSpaceString = line.text.match(/^\s*/)[0], indentation;
		    if (!aggressive && !/\S/.test(line.text)) {
		      indentation = 0;
		      how = "not";
		    } else if (how == "smart") {
		      indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
		      if (indentation == Pass || indentation > 150) {
		        if (!aggressive) { return }
		        how = "prev";
		      }
		    }
		    if (how == "prev") {
		      if (n > doc.first) { indentation = countColumn(getLine(doc, n-1).text, null, tabSize); }
		      else { indentation = 0; }
		    } else if (how == "add") {
		      indentation = curSpace + cm.options.indentUnit;
		    } else if (how == "subtract") {
		      indentation = curSpace - cm.options.indentUnit;
		    } else if (typeof how == "number") {
		      indentation = curSpace + how;
		    }
		    indentation = Math.max(0, indentation);

		    var indentString = "", pos = 0;
		    if (cm.options.indentWithTabs)
		      { for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";} }
		    if (pos < indentation) { indentString += spaceStr(indentation - pos); }

		    if (indentString != curSpaceString) {
		      replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
		      line.stateAfter = null;
		      return true
		    } else {
		      // Ensure that, if the cursor was in the whitespace at the start
		      // of the line, it is moved to the end of that space.
		      for (var i$1 = 0; i$1 < doc.sel.ranges.length; i$1++) {
		        var range = doc.sel.ranges[i$1];
		        if (range.head.line == n && range.head.ch < curSpaceString.length) {
		          var pos$1 = Pos(n, curSpaceString.length);
		          replaceOneSelection(doc, i$1, new Range(pos$1, pos$1));
		          break
		        }
		      }
		    }
		  }

		  // This will be set to a {lineWise: bool, text: [string]} object, so
		  // that, when pasting, we know what kind of selections the copied
		  // text was made out of.
		  var lastCopied = null;

		  function setLastCopied(newLastCopied) {
		    lastCopied = newLastCopied;
		  }

		  function applyTextInput(cm, inserted, deleted, sel, origin) {
		    var doc = cm.doc;
		    cm.display.shift = false;
		    if (!sel) { sel = doc.sel; }

		    var recent = +new Date - 200;
		    var paste = origin == "paste" || cm.state.pasteIncoming > recent;
		    var textLines = splitLinesAuto(inserted), multiPaste = null;
		    // When pasting N lines into N selections, insert one line per selection
		    if (paste && sel.ranges.length > 1) {
		      if (lastCopied && lastCopied.text.join("\n") == inserted) {
		        if (sel.ranges.length % lastCopied.text.length == 0) {
		          multiPaste = [];
		          for (var i = 0; i < lastCopied.text.length; i++)
		            { multiPaste.push(doc.splitLines(lastCopied.text[i])); }
		        }
		      } else if (textLines.length == sel.ranges.length && cm.options.pasteLinesPerSelection) {
		        multiPaste = map(textLines, function (l) { return [l]; });
		      }
		    }

		    var updateInput = cm.curOp.updateInput;
		    // Normal behavior is to insert the new text into every selection
		    for (var i$1 = sel.ranges.length - 1; i$1 >= 0; i$1--) {
		      var range = sel.ranges[i$1];
		      var from = range.from(), to = range.to();
		      if (range.empty()) {
		        if (deleted && deleted > 0) // Handle deletion
		          { from = Pos(from.line, from.ch - deleted); }
		        else if (cm.state.overwrite && !paste) // Handle overwrite
		          { to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length)); }
		        else if (paste && lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == textLines.join("\n"))
		          { from = to = Pos(from.line, 0); }
		      }
		      var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i$1 % multiPaste.length] : textLines,
		                         origin: origin || (paste ? "paste" : cm.state.cutIncoming > recent ? "cut" : "+input")};
		      makeChange(cm.doc, changeEvent);
		      signalLater(cm, "inputRead", cm, changeEvent);
		    }
		    if (inserted && !paste)
		      { triggerElectric(cm, inserted); }

		    ensureCursorVisible(cm);
		    if (cm.curOp.updateInput < 2) { cm.curOp.updateInput = updateInput; }
		    cm.curOp.typing = true;
		    cm.state.pasteIncoming = cm.state.cutIncoming = -1;
		  }

		  function handlePaste(e, cm) {
		    var pasted = e.clipboardData && e.clipboardData.getData("Text");
		    if (pasted) {
		      e.preventDefault();
		      if (!cm.isReadOnly() && !cm.options.disableInput && cm.hasFocus())
		        { runInOp(cm, function () { return applyTextInput(cm, pasted, 0, null, "paste"); }); }
		      return true
		    }
		  }

		  function triggerElectric(cm, inserted) {
		    // When an 'electric' character is inserted, immediately trigger a reindent
		    if (!cm.options.electricChars || !cm.options.smartIndent) { return }
		    var sel = cm.doc.sel;

		    for (var i = sel.ranges.length - 1; i >= 0; i--) {
		      var range = sel.ranges[i];
		      if (range.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range.head.line)) { continue }
		      var mode = cm.getModeAt(range.head);
		      var indented = false;
		      if (mode.electricChars) {
		        for (var j = 0; j < mode.electricChars.length; j++)
		          { if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
		            indented = indentLine(cm, range.head.line, "smart");
		            break
		          } }
		      } else if (mode.electricInput) {
		        if (mode.electricInput.test(getLine(cm.doc, range.head.line).text.slice(0, range.head.ch)))
		          { indented = indentLine(cm, range.head.line, "smart"); }
		      }
		      if (indented) { signalLater(cm, "electricInput", cm, range.head.line); }
		    }
		  }

		  function copyableRanges(cm) {
		    var text = [], ranges = [];
		    for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
		      var line = cm.doc.sel.ranges[i].head.line;
		      var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)};
		      ranges.push(lineRange);
		      text.push(cm.getRange(lineRange.anchor, lineRange.head));
		    }
		    return {text: text, ranges: ranges}
		  }

		  function disableBrowserMagic(field, spellcheck, autocorrect, autocapitalize) {
		    field.setAttribute("autocorrect", autocorrect ? "on" : "off");
		    field.setAttribute("autocapitalize", autocapitalize ? "on" : "off");
		    field.setAttribute("spellcheck", !!spellcheck);
		  }

		  function hiddenTextarea() {
		    var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none");
		    var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
		    // The textarea is kept positioned near the cursor to prevent the
		    // fact that it'll be scrolled into view on input from scrolling
		    // our fake cursor out of view. On webkit, when wrap=off, paste is
		    // very slow. So make the area wide instead.
		    if (webkit) { te.style.width = "1000px"; }
		    else { te.setAttribute("wrap", "off"); }
		    // If border: 0; -- iOS fails to open keyboard (issue #1287)
		    if (ios) { te.style.border = "1px solid black"; }
		    return div
		  }

		  // The publicly visible API. Note that methodOp(f) means
		  // 'wrap f in an operation, performed on its `this` parameter'.

		  // This is not the complete set of editor methods. Most of the
		  // methods defined on the Doc type are also injected into
		  // CodeMirror.prototype, for backwards compatibility and
		  // convenience.

		  function addEditorMethods(CodeMirror) {
		    var optionHandlers = CodeMirror.optionHandlers;

		    var helpers = CodeMirror.helpers = {};

		    CodeMirror.prototype = {
		      constructor: CodeMirror,
		      focus: function(){win(this).focus(); this.display.input.focus();},

		      setOption: function(option, value) {
		        var options = this.options, old = options[option];
		        if (options[option] == value && option != "mode") { return }
		        options[option] = value;
		        if (optionHandlers.hasOwnProperty(option))
		          { operation(this, optionHandlers[option])(this, value, old); }
		        signal(this, "optionChange", this, option);
		      },

		      getOption: function(option) {return this.options[option]},
		      getDoc: function() {return this.doc},

		      addKeyMap: function(map, bottom) {
		        this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map));
		      },
		      removeKeyMap: function(map) {
		        var maps = this.state.keyMaps;
		        for (var i = 0; i < maps.length; ++i)
		          { if (maps[i] == map || maps[i].name == map) {
		            maps.splice(i, 1);
		            return true
		          } }
		      },

		      addOverlay: methodOp(function(spec, options) {
		        var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
		        if (mode.startState) { throw new Error("Overlays may not be stateful.") }
		        insertSorted(this.state.overlays,
		                     {mode: mode, modeSpec: spec, opaque: options && options.opaque,
		                      priority: (options && options.priority) || 0},
		                     function (overlay) { return overlay.priority; });
		        this.state.modeGen++;
		        regChange(this);
		      }),
		      removeOverlay: methodOp(function(spec) {
		        var overlays = this.state.overlays;
		        for (var i = 0; i < overlays.length; ++i) {
		          var cur = overlays[i].modeSpec;
		          if (cur == spec || typeof spec == "string" && cur.name == spec) {
		            overlays.splice(i, 1);
		            this.state.modeGen++;
		            regChange(this);
		            return
		          }
		        }
		      }),

		      indentLine: methodOp(function(n, dir, aggressive) {
		        if (typeof dir != "string" && typeof dir != "number") {
		          if (dir == null) { dir = this.options.smartIndent ? "smart" : "prev"; }
		          else { dir = dir ? "add" : "subtract"; }
		        }
		        if (isLine(this.doc, n)) { indentLine(this, n, dir, aggressive); }
		      }),
		      indentSelection: methodOp(function(how) {
		        var ranges = this.doc.sel.ranges, end = -1;
		        for (var i = 0; i < ranges.length; i++) {
		          var range = ranges[i];
		          if (!range.empty()) {
		            var from = range.from(), to = range.to();
		            var start = Math.max(end, from.line);
		            end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
		            for (var j = start; j < end; ++j)
		              { indentLine(this, j, how); }
		            var newRanges = this.doc.sel.ranges;
		            if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
		              { replaceOneSelection(this.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll); }
		          } else if (range.head.line > end) {
		            indentLine(this, range.head.line, how, true);
		            end = range.head.line;
		            if (i == this.doc.sel.primIndex) { ensureCursorVisible(this); }
		          }
		        }
		      }),

		      // Fetch the parser token for a given character. Useful for hacks
		      // that want to inspect the mode state (say, for completion).
		      getTokenAt: function(pos, precise) {
		        return takeToken(this, pos, precise)
		      },

		      getLineTokens: function(line, precise) {
		        return takeToken(this, Pos(line), precise, true)
		      },

		      getTokenTypeAt: function(pos) {
		        pos = clipPos(this.doc, pos);
		        var styles = getLineStyles(this, getLine(this.doc, pos.line));
		        var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
		        var type;
		        if (ch == 0) { type = styles[2]; }
		        else { for (;;) {
		          var mid = (before + after) >> 1;
		          if ((mid ? styles[mid * 2 - 1] : 0) >= ch) { after = mid; }
		          else if (styles[mid * 2 + 1] < ch) { before = mid + 1; }
		          else { type = styles[mid * 2 + 2]; break }
		        } }
		        var cut = type ? type.indexOf("overlay ") : -1;
		        return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1)
		      },

		      getModeAt: function(pos) {
		        var mode = this.doc.mode;
		        if (!mode.innerMode) { return mode }
		        return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode
		      },

		      getHelper: function(pos, type) {
		        return this.getHelpers(pos, type)[0]
		      },

		      getHelpers: function(pos, type) {
		        var found = [];
		        if (!helpers.hasOwnProperty(type)) { return found }
		        var help = helpers[type], mode = this.getModeAt(pos);
		        if (typeof mode[type] == "string") {
		          if (help[mode[type]]) { found.push(help[mode[type]]); }
		        } else if (mode[type]) {
		          for (var i = 0; i < mode[type].length; i++) {
		            var val = help[mode[type][i]];
		            if (val) { found.push(val); }
		          }
		        } else if (mode.helperType && help[mode.helperType]) {
		          found.push(help[mode.helperType]);
		        } else if (help[mode.name]) {
		          found.push(help[mode.name]);
		        }
		        for (var i$1 = 0; i$1 < help._global.length; i$1++) {
		          var cur = help._global[i$1];
		          if (cur.pred(mode, this) && indexOf(found, cur.val) == -1)
		            { found.push(cur.val); }
		        }
		        return found
		      },

		      getStateAfter: function(line, precise) {
		        var doc = this.doc;
		        line = clipLine(doc, line == null ? doc.first + doc.size - 1: line);
		        return getContextBefore(this, line + 1, precise).state
		      },

		      cursorCoords: function(start, mode) {
		        var pos, range = this.doc.sel.primary();
		        if (start == null) { pos = range.head; }
		        else if (typeof start == "object") { pos = clipPos(this.doc, start); }
		        else { pos = start ? range.from() : range.to(); }
		        return cursorCoords(this, pos, mode || "page")
		      },

		      charCoords: function(pos, mode) {
		        return charCoords(this, clipPos(this.doc, pos), mode || "page")
		      },

		      coordsChar: function(coords, mode) {
		        coords = fromCoordSystem(this, coords, mode || "page");
		        return coordsChar(this, coords.left, coords.top)
		      },

		      lineAtHeight: function(height, mode) {
		        height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top;
		        return lineAtHeight(this.doc, height + this.display.viewOffset)
		      },
		      heightAtLine: function(line, mode, includeWidgets) {
		        var end = false, lineObj;
		        if (typeof line == "number") {
		          var last = this.doc.first + this.doc.size - 1;
		          if (line < this.doc.first) { line = this.doc.first; }
		          else if (line > last) { line = last; end = true; }
		          lineObj = getLine(this.doc, line);
		        } else {
		          lineObj = line;
		        }
		        return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page", includeWidgets || end).top +
		          (end ? this.doc.height - heightAtLine(lineObj) : 0)
		      },

		      defaultTextHeight: function() { return textHeight(this.display) },
		      defaultCharWidth: function() { return charWidth(this.display) },

		      getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo}},

		      addWidget: function(pos, node, scroll, vert, horiz) {
		        var display = this.display;
		        pos = cursorCoords(this, clipPos(this.doc, pos));
		        var top = pos.bottom, left = pos.left;
		        node.style.position = "absolute";
		        node.setAttribute("cm-ignore-events", "true");
		        this.display.input.setUneditable(node);
		        display.sizer.appendChild(node);
		        if (vert == "over") {
		          top = pos.top;
		        } else if (vert == "above" || vert == "near") {
		          var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
		          hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
		          // Default to positioning above (if specified and possible); otherwise default to positioning below
		          if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
		            { top = pos.top - node.offsetHeight; }
		          else if (pos.bottom + node.offsetHeight <= vspace)
		            { top = pos.bottom; }
		          if (left + node.offsetWidth > hspace)
		            { left = hspace - node.offsetWidth; }
		        }
		        node.style.top = top + "px";
		        node.style.left = node.style.right = "";
		        if (horiz == "right") {
		          left = display.sizer.clientWidth - node.offsetWidth;
		          node.style.right = "0px";
		        } else {
		          if (horiz == "left") { left = 0; }
		          else if (horiz == "middle") { left = (display.sizer.clientWidth - node.offsetWidth) / 2; }
		          node.style.left = left + "px";
		        }
		        if (scroll)
		          { scrollIntoView(this, {left: left, top: top, right: left + node.offsetWidth, bottom: top + node.offsetHeight}); }
		      },

		      triggerOnKeyDown: methodOp(onKeyDown),
		      triggerOnKeyPress: methodOp(onKeyPress),
		      triggerOnKeyUp: onKeyUp,
		      triggerOnMouseDown: methodOp(onMouseDown),

		      execCommand: function(cmd) {
		        if (commands.hasOwnProperty(cmd))
		          { return commands[cmd].call(null, this) }
		      },

		      triggerElectric: methodOp(function(text) { triggerElectric(this, text); }),

		      findPosH: function(from, amount, unit, visually) {
		        var dir = 1;
		        if (amount < 0) { dir = -1; amount = -amount; }
		        var cur = clipPos(this.doc, from);
		        for (var i = 0; i < amount; ++i) {
		          cur = findPosH(this.doc, cur, dir, unit, visually);
		          if (cur.hitSide) { break }
		        }
		        return cur
		      },

		      moveH: methodOp(function(dir, unit) {
		        var this$1$1 = this;

		        this.extendSelectionsBy(function (range) {
		          if (this$1$1.display.shift || this$1$1.doc.extend || range.empty())
		            { return findPosH(this$1$1.doc, range.head, dir, unit, this$1$1.options.rtlMoveVisually) }
		          else
		            { return dir < 0 ? range.from() : range.to() }
		        }, sel_move);
		      }),

		      deleteH: methodOp(function(dir, unit) {
		        var sel = this.doc.sel, doc = this.doc;
		        if (sel.somethingSelected())
		          { doc.replaceSelection("", null, "+delete"); }
		        else
		          { deleteNearSelection(this, function (range) {
		            var other = findPosH(doc, range.head, dir, unit, false);
		            return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other}
		          }); }
		      }),

		      findPosV: function(from, amount, unit, goalColumn) {
		        var dir = 1, x = goalColumn;
		        if (amount < 0) { dir = -1; amount = -amount; }
		        var cur = clipPos(this.doc, from);
		        for (var i = 0; i < amount; ++i) {
		          var coords = cursorCoords(this, cur, "div");
		          if (x == null) { x = coords.left; }
		          else { coords.left = x; }
		          cur = findPosV(this, coords, dir, unit);
		          if (cur.hitSide) { break }
		        }
		        return cur
		      },

		      moveV: methodOp(function(dir, unit) {
		        var this$1$1 = this;

		        var doc = this.doc, goals = [];
		        var collapse = !this.display.shift && !doc.extend && doc.sel.somethingSelected();
		        doc.extendSelectionsBy(function (range) {
		          if (collapse)
		            { return dir < 0 ? range.from() : range.to() }
		          var headPos = cursorCoords(this$1$1, range.head, "div");
		          if (range.goalColumn != null) { headPos.left = range.goalColumn; }
		          goals.push(headPos.left);
		          var pos = findPosV(this$1$1, headPos, dir, unit);
		          if (unit == "page" && range == doc.sel.primary())
		            { addToScrollTop(this$1$1, charCoords(this$1$1, pos, "div").top - headPos.top); }
		          return pos
		        }, sel_move);
		        if (goals.length) { for (var i = 0; i < doc.sel.ranges.length; i++)
		          { doc.sel.ranges[i].goalColumn = goals[i]; } }
		      }),

		      // Find the word at the given position (as returned by coordsChar).
		      findWordAt: function(pos) {
		        var doc = this.doc, line = getLine(doc, pos.line).text;
		        var start = pos.ch, end = pos.ch;
		        if (line) {
		          var helper = this.getHelper(pos, "wordChars");
		          if ((pos.sticky == "before" || end == line.length) && start) { --start; } else { ++end; }
		          var startChar = line.charAt(start);
		          var check = isWordChar(startChar, helper)
		            ? function (ch) { return isWordChar(ch, helper); }
		            : /\s/.test(startChar) ? function (ch) { return /\s/.test(ch); }
		            : function (ch) { return (!/\s/.test(ch) && !isWordChar(ch)); };
		          while (start > 0 && check(line.charAt(start - 1))) { --start; }
		          while (end < line.length && check(line.charAt(end))) { ++end; }
		        }
		        return new Range(Pos(pos.line, start), Pos(pos.line, end))
		      },

		      toggleOverwrite: function(value) {
		        if (value != null && value == this.state.overwrite) { return }
		        if (this.state.overwrite = !this.state.overwrite)
		          { addClass(this.display.cursorDiv, "CodeMirror-overwrite"); }
		        else
		          { rmClass(this.display.cursorDiv, "CodeMirror-overwrite"); }

		        signal(this, "overwriteToggle", this, this.state.overwrite);
		      },
		      hasFocus: function() { return this.display.input.getField() == activeElt(root(this)) },
		      isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit) },

		      scrollTo: methodOp(function (x, y) { scrollToCoords(this, x, y); }),
		      getScrollInfo: function() {
		        var scroller = this.display.scroller;
		        return {left: scroller.scrollLeft, top: scroller.scrollTop,
		                height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
		                width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
		                clientHeight: displayHeight(this), clientWidth: displayWidth(this)}
		      },

		      scrollIntoView: methodOp(function(range, margin) {
		        if (range == null) {
		          range = {from: this.doc.sel.primary().head, to: null};
		          if (margin == null) { margin = this.options.cursorScrollMargin; }
		        } else if (typeof range == "number") {
		          range = {from: Pos(range, 0), to: null};
		        } else if (range.from == null) {
		          range = {from: range, to: null};
		        }
		        if (!range.to) { range.to = range.from; }
		        range.margin = margin || 0;

		        if (range.from.line != null) {
		          scrollToRange(this, range);
		        } else {
		          scrollToCoordsRange(this, range.from, range.to, range.margin);
		        }
		      }),

		      setSize: methodOp(function(width, height) {
		        var this$1$1 = this;

		        var interpret = function (val) { return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val; };
		        if (width != null) { this.display.wrapper.style.width = interpret(width); }
		        if (height != null) { this.display.wrapper.style.height = interpret(height); }
		        if (this.options.lineWrapping) { clearLineMeasurementCache(this); }
		        var lineNo = this.display.viewFrom;
		        this.doc.iter(lineNo, this.display.viewTo, function (line) {
		          if (line.widgets) { for (var i = 0; i < line.widgets.length; i++)
		            { if (line.widgets[i].noHScroll) { regLineChange(this$1$1, lineNo, "widget"); break } } }
		          ++lineNo;
		        });
		        this.curOp.forceUpdate = true;
		        signal(this, "refresh", this);
		      }),

		      operation: function(f){return runInOp(this, f)},
		      startOperation: function(){return startOperation(this)},
		      endOperation: function(){return endOperation(this)},

		      refresh: methodOp(function() {
		        var oldHeight = this.display.cachedTextHeight;
		        regChange(this);
		        this.curOp.forceUpdate = true;
		        clearCaches(this);
		        scrollToCoords(this, this.doc.scrollLeft, this.doc.scrollTop);
		        updateGutterSpace(this.display);
		        if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5 || this.options.lineWrapping)
		          { estimateLineHeights(this); }
		        signal(this, "refresh", this);
		      }),

		      swapDoc: methodOp(function(doc) {
		        var old = this.doc;
		        old.cm = null;
		        // Cancel the current text selection if any (#5821)
		        if (this.state.selectingText) { this.state.selectingText(); }
		        attachDoc(this, doc);
		        clearCaches(this);
		        this.display.input.reset();
		        scrollToCoords(this, doc.scrollLeft, doc.scrollTop);
		        this.curOp.forceScroll = true;
		        signalLater(this, "swapDoc", this, old);
		        return old
		      }),

		      phrase: function(phraseText) {
		        var phrases = this.options.phrases;
		        return phrases && Object.prototype.hasOwnProperty.call(phrases, phraseText) ? phrases[phraseText] : phraseText
		      },

		      getInputField: function(){return this.display.input.getField()},
		      getWrapperElement: function(){return this.display.wrapper},
		      getScrollerElement: function(){return this.display.scroller},
		      getGutterElement: function(){return this.display.gutters}
		    };
		    eventMixin(CodeMirror);

		    CodeMirror.registerHelper = function(type, name, value) {
		      if (!helpers.hasOwnProperty(type)) { helpers[type] = CodeMirror[type] = {_global: []}; }
		      helpers[type][name] = value;
		    };
		    CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
		      CodeMirror.registerHelper(type, name, value);
		      helpers[type]._global.push({pred: predicate, val: value});
		    };
		  }

		  // Used for horizontal relative motion. Dir is -1 or 1 (left or
		  // right), unit can be "codepoint", "char", "column" (like char, but
		  // doesn't cross line boundaries), "word" (across next word), or
		  // "group" (to the start of next group of word or
		  // non-word-non-whitespace chars). The visually param controls
		  // whether, in right-to-left text, direction 1 means to move towards
		  // the next index in the string, or towards the character to the right
		  // of the current position. The resulting position will have a
		  // hitSide=true property if it reached the end of the document.
		  function findPosH(doc, pos, dir, unit, visually) {
		    var oldPos = pos;
		    var origDir = dir;
		    var lineObj = getLine(doc, pos.line);
		    var lineDir = visually && doc.direction == "rtl" ? -dir : dir;
		    function findNextLine() {
		      var l = pos.line + lineDir;
		      if (l < doc.first || l >= doc.first + doc.size) { return false }
		      pos = new Pos(l, pos.ch, pos.sticky);
		      return lineObj = getLine(doc, l)
		    }
		    function moveOnce(boundToLine) {
		      var next;
		      if (unit == "codepoint") {
		        var ch = lineObj.text.charCodeAt(pos.ch + (dir > 0 ? 0 : -1));
		        if (isNaN(ch)) {
		          next = null;
		        } else {
		          var astral = dir > 0 ? ch >= 0xD800 && ch < 0xDC00 : ch >= 0xDC00 && ch < 0xDFFF;
		          next = new Pos(pos.line, Math.max(0, Math.min(lineObj.text.length, pos.ch + dir * (astral ? 2 : 1))), -dir);
		        }
		      } else if (visually) {
		        next = moveVisually(doc.cm, lineObj, pos, dir);
		      } else {
		        next = moveLogically(lineObj, pos, dir);
		      }
		      if (next == null) {
		        if (!boundToLine && findNextLine())
		          { pos = endOfLine(visually, doc.cm, lineObj, pos.line, lineDir); }
		        else
		          { return false }
		      } else {
		        pos = next;
		      }
		      return true
		    }

		    if (unit == "char" || unit == "codepoint") {
		      moveOnce();
		    } else if (unit == "column") {
		      moveOnce(true);
		    } else if (unit == "word" || unit == "group") {
		      var sawType = null, group = unit == "group";
		      var helper = doc.cm && doc.cm.getHelper(pos, "wordChars");
		      for (var first = true;; first = false) {
		        if (dir < 0 && !moveOnce(!first)) { break }
		        var cur = lineObj.text.charAt(pos.ch) || "\n";
		        var type = isWordChar(cur, helper) ? "w"
		          : group && cur == "\n" ? "n"
		          : !group || /\s/.test(cur) ? null
		          : "p";
		        if (group && !first && !type) { type = "s"; }
		        if (sawType && sawType != type) {
		          if (dir < 0) {dir = 1; moveOnce(); pos.sticky = "after";}
		          break
		        }

		        if (type) { sawType = type; }
		        if (dir > 0 && !moveOnce(!first)) { break }
		      }
		    }
		    var result = skipAtomic(doc, pos, oldPos, origDir, true);
		    if (equalCursorPos(oldPos, result)) { result.hitSide = true; }
		    return result
		  }

		  // For relative vertical movement. Dir may be -1 or 1. Unit can be
		  // "page" or "line". The resulting position will have a hitSide=true
		  // property if it reached the end of the document.
		  function findPosV(cm, pos, dir, unit) {
		    var doc = cm.doc, x = pos.left, y;
		    if (unit == "page") {
		      var pageSize = Math.min(cm.display.wrapper.clientHeight, win(cm).innerHeight || doc(cm).documentElement.clientHeight);
		      var moveAmount = Math.max(pageSize - .5 * textHeight(cm.display), 3);
		      y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount;

		    } else if (unit == "line") {
		      y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
		    }
		    var target;
		    for (;;) {
		      target = coordsChar(cm, x, y);
		      if (!target.outside) { break }
		      if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break }
		      y += dir * 5;
		    }
		    return target
		  }

		  // CONTENTEDITABLE INPUT STYLE

		  var ContentEditableInput = function(cm) {
		    this.cm = cm;
		    this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null;
		    this.polling = new Delayed();
		    this.composing = null;
		    this.gracePeriod = false;
		    this.readDOMTimeout = null;
		  };

		  ContentEditableInput.prototype.init = function (display) {
		      var this$1$1 = this;

		    var input = this, cm = input.cm;
		    var div = input.div = display.lineDiv;
		    div.contentEditable = true;
		    disableBrowserMagic(div, cm.options.spellcheck, cm.options.autocorrect, cm.options.autocapitalize);

		    function belongsToInput(e) {
		      for (var t = e.target; t; t = t.parentNode) {
		        if (t == div) { return true }
		        if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) { break }
		      }
		      return false
		    }

		    on(div, "paste", function (e) {
		      if (!belongsToInput(e) || signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }
		      // IE doesn't fire input events, so we schedule a read for the pasted content in this way
		      if (ie_version <= 11) { setTimeout(operation(cm, function () { return this$1$1.updateFromDOM(); }), 20); }
		    });

		    on(div, "compositionstart", function (e) {
		      this$1$1.composing = {data: e.data, done: false};
		    });
		    on(div, "compositionupdate", function (e) {
		      if (!this$1$1.composing) { this$1$1.composing = {data: e.data, done: false}; }
		    });
		    on(div, "compositionend", function (e) {
		      if (this$1$1.composing) {
		        if (e.data != this$1$1.composing.data) { this$1$1.readFromDOMSoon(); }
		        this$1$1.composing.done = true;
		      }
		    });

		    on(div, "touchstart", function () { return input.forceCompositionEnd(); });

		    on(div, "input", function () {
		      if (!this$1$1.composing) { this$1$1.readFromDOMSoon(); }
		    });

		    function onCopyCut(e) {
		      if (!belongsToInput(e) || signalDOMEvent(cm, e)) { return }
		      if (cm.somethingSelected()) {
		        setLastCopied({lineWise: false, text: cm.getSelections()});
		        if (e.type == "cut") { cm.replaceSelection("", null, "cut"); }
		      } else if (!cm.options.lineWiseCopyCut) {
		        return
		      } else {
		        var ranges = copyableRanges(cm);
		        setLastCopied({lineWise: true, text: ranges.text});
		        if (e.type == "cut") {
		          cm.operation(function () {
		            cm.setSelections(ranges.ranges, 0, sel_dontScroll);
		            cm.replaceSelection("", null, "cut");
		          });
		        }
		      }
		      if (e.clipboardData) {
		        e.clipboardData.clearData();
		        var content = lastCopied.text.join("\n");
		        // iOS exposes the clipboard API, but seems to discard content inserted into it
		        e.clipboardData.setData("Text", content);
		        if (e.clipboardData.getData("Text") == content) {
		          e.preventDefault();
		          return
		        }
		      }
		      // Old-fashioned briefly-focus-a-textarea hack
		      var kludge = hiddenTextarea(), te = kludge.firstChild;
		      disableBrowserMagic(te);
		      cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild);
		      te.value = lastCopied.text.join("\n");
		      var hadFocus = activeElt(rootNode(div));
		      selectInput(te);
		      setTimeout(function () {
		        cm.display.lineSpace.removeChild(kludge);
		        hadFocus.focus();
		        if (hadFocus == div) { input.showPrimarySelection(); }
		      }, 50);
		    }
		    on(div, "copy", onCopyCut);
		    on(div, "cut", onCopyCut);
		  };

		  ContentEditableInput.prototype.screenReaderLabelChanged = function (label) {
		    // Label for screenreaders, accessibility
		    if(label) {
		      this.div.setAttribute('aria-label', label);
		    } else {
		      this.div.removeAttribute('aria-label');
		    }
		  };

		  ContentEditableInput.prototype.prepareSelection = function () {
		    var result = prepareSelection(this.cm, false);
		    result.focus = activeElt(rootNode(this.div)) == this.div;
		    return result
		  };

		  ContentEditableInput.prototype.showSelection = function (info, takeFocus) {
		    if (!info || !this.cm.display.view.length) { return }
		    if (info.focus || takeFocus) { this.showPrimarySelection(); }
		    this.showMultipleSelections(info);
		  };

		  ContentEditableInput.prototype.getSelection = function () {
		    return this.cm.display.wrapper.ownerDocument.getSelection()
		  };

		  ContentEditableInput.prototype.showPrimarySelection = function () {
		    var sel = this.getSelection(), cm = this.cm, prim = cm.doc.sel.primary();
		    var from = prim.from(), to = prim.to();

		    if (cm.display.viewTo == cm.display.viewFrom || from.line >= cm.display.viewTo || to.line < cm.display.viewFrom) {
		      sel.removeAllRanges();
		      return
		    }

		    var curAnchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
		    var curFocus = domToPos(cm, sel.focusNode, sel.focusOffset);
		    if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
		        cmp(minPos(curAnchor, curFocus), from) == 0 &&
		        cmp(maxPos(curAnchor, curFocus), to) == 0)
		      { return }

		    var view = cm.display.view;
		    var start = (from.line >= cm.display.viewFrom && posToDOM(cm, from)) ||
		        {node: view[0].measure.map[2], offset: 0};
		    var end = to.line < cm.display.viewTo && posToDOM(cm, to);
		    if (!end) {
		      var measure = view[view.length - 1].measure;
		      var map = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
		      end = {node: map[map.length - 1], offset: map[map.length - 2] - map[map.length - 3]};
		    }

		    if (!start || !end) {
		      sel.removeAllRanges();
		      return
		    }

		    var old = sel.rangeCount && sel.getRangeAt(0), rng;
		    try { rng = range(start.node, start.offset, end.offset, end.node); }
		    catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
		    if (rng) {
		      if (!gecko && cm.state.focused) {
		        sel.collapse(start.node, start.offset);
		        if (!rng.collapsed) {
		          sel.removeAllRanges();
		          sel.addRange(rng);
		        }
		      } else {
		        sel.removeAllRanges();
		        sel.addRange(rng);
		      }
		      if (old && sel.anchorNode == null) { sel.addRange(old); }
		      else if (gecko) { this.startGracePeriod(); }
		    }
		    this.rememberSelection();
		  };

		  ContentEditableInput.prototype.startGracePeriod = function () {
		      var this$1$1 = this;

		    clearTimeout(this.gracePeriod);
		    this.gracePeriod = setTimeout(function () {
		      this$1$1.gracePeriod = false;
		      if (this$1$1.selectionChanged())
		        { this$1$1.cm.operation(function () { return this$1$1.cm.curOp.selectionChanged = true; }); }
		    }, 20);
		  };

		  ContentEditableInput.prototype.showMultipleSelections = function (info) {
		    removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors);
		    removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
		  };

		  ContentEditableInput.prototype.rememberSelection = function () {
		    var sel = this.getSelection();
		    this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset;
		    this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset;
		  };

		  ContentEditableInput.prototype.selectionInEditor = function () {
		    var sel = this.getSelection();
		    if (!sel.rangeCount) { return false }
		    var node = sel.getRangeAt(0).commonAncestorContainer;
		    return contains(this.div, node)
		  };

		  ContentEditableInput.prototype.focus = function () {
		    if (this.cm.options.readOnly != "nocursor") {
		      if (!this.selectionInEditor() || activeElt(rootNode(this.div)) != this.div)
		        { this.showSelection(this.prepareSelection(), true); }
		      this.div.focus();
		    }
		  };
		  ContentEditableInput.prototype.blur = function () { this.div.blur(); };
		  ContentEditableInput.prototype.getField = function () { return this.div };

		  ContentEditableInput.prototype.supportsTouch = function () { return true };

		  ContentEditableInput.prototype.receivedFocus = function () {
		      var this$1$1 = this;

		    var input = this;
		    if (this.selectionInEditor())
		      { setTimeout(function () { return this$1$1.pollSelection(); }, 20); }
		    else
		      { runInOp(this.cm, function () { return input.cm.curOp.selectionChanged = true; }); }

		    function poll() {
		      if (input.cm.state.focused) {
		        input.pollSelection();
		        input.polling.set(input.cm.options.pollInterval, poll);
		      }
		    }
		    this.polling.set(this.cm.options.pollInterval, poll);
		  };

		  ContentEditableInput.prototype.selectionChanged = function () {
		    var sel = this.getSelection();
		    return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
		      sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset
		  };

		  ContentEditableInput.prototype.pollSelection = function () {
		    if (this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged()) { return }
		    var sel = this.getSelection(), cm = this.cm;
		    // On Android Chrome (version 56, at least), backspacing into an
		    // uneditable block element will put the cursor in that element,
		    // and then, because it's not editable, hide the virtual keyboard.
		    // Because Android doesn't allow us to actually detect backspace
		    // presses in a sane way, this code checks for when that happens
		    // and simulates a backspace press in this case.
		    if (android && chrome && this.cm.display.gutterSpecs.length && isInGutter(sel.anchorNode)) {
		      this.cm.triggerOnKeyDown({type: "keydown", keyCode: 8, preventDefault: Math.abs});
		      this.blur();
		      this.focus();
		      return
		    }
		    if (this.composing) { return }
		    this.rememberSelection();
		    var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
		    var head = domToPos(cm, sel.focusNode, sel.focusOffset);
		    if (anchor && head) { runInOp(cm, function () {
		      setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll);
		      if (anchor.bad || head.bad) { cm.curOp.selectionChanged = true; }
		    }); }
		  };

		  ContentEditableInput.prototype.pollContent = function () {
		    if (this.readDOMTimeout != null) {
		      clearTimeout(this.readDOMTimeout);
		      this.readDOMTimeout = null;
		    }

		    var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary();
		    var from = sel.from(), to = sel.to();
		    if (from.ch == 0 && from.line > cm.firstLine())
		      { from = Pos(from.line - 1, getLine(cm.doc, from.line - 1).length); }
		    if (to.ch == getLine(cm.doc, to.line).text.length && to.line < cm.lastLine())
		      { to = Pos(to.line + 1, 0); }
		    if (from.line < display.viewFrom || to.line > display.viewTo - 1) { return false }

		    var fromIndex, fromLine, fromNode;
		    if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
		      fromLine = lineNo(display.view[0].line);
		      fromNode = display.view[0].node;
		    } else {
		      fromLine = lineNo(display.view[fromIndex].line);
		      fromNode = display.view[fromIndex - 1].node.nextSibling;
		    }
		    var toIndex = findViewIndex(cm, to.line);
		    var toLine, toNode;
		    if (toIndex == display.view.length - 1) {
		      toLine = display.viewTo - 1;
		      toNode = display.lineDiv.lastChild;
		    } else {
		      toLine = lineNo(display.view[toIndex + 1].line) - 1;
		      toNode = display.view[toIndex + 1].node.previousSibling;
		    }

		    if (!fromNode) { return false }
		    var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine));
		    var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length));
		    while (newText.length > 1 && oldText.length > 1) {
		      if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine--; }
		      else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++; }
		      else { break }
		    }

		    var cutFront = 0, cutEnd = 0;
		    var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length);
		    while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
		      { ++cutFront; }
		    var newBot = lst(newText), oldBot = lst(oldText);
		    var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
		                             oldBot.length - (oldText.length == 1 ? cutFront : 0));
		    while (cutEnd < maxCutEnd &&
		           newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
		      { ++cutEnd; }
		    // Try to move start of change to start of selection if ambiguous
		    if (newText.length == 1 && oldText.length == 1 && fromLine == from.line) {
		      while (cutFront && cutFront > from.ch &&
		             newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1)) {
		        cutFront--;
		        cutEnd++;
		      }
		    }

		    newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd).replace(/^\u200b+/, "");
		    newText[0] = newText[0].slice(cutFront).replace(/\u200b+$/, "");

		    var chFrom = Pos(fromLine, cutFront);
		    var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);
		    if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
		      replaceRange(cm.doc, newText, chFrom, chTo, "+input");
		      return true
		    }
		  };

		  ContentEditableInput.prototype.ensurePolled = function () {
		    this.forceCompositionEnd();
		  };
		  ContentEditableInput.prototype.reset = function () {
		    this.forceCompositionEnd();
		  };
		  ContentEditableInput.prototype.forceCompositionEnd = function () {
		    if (!this.composing) { return }
		    clearTimeout(this.readDOMTimeout);
		    this.composing = null;
		    this.updateFromDOM();
		    this.div.blur();
		    this.div.focus();
		  };
		  ContentEditableInput.prototype.readFromDOMSoon = function () {
		      var this$1$1 = this;

		    if (this.readDOMTimeout != null) { return }
		    this.readDOMTimeout = setTimeout(function () {
		      this$1$1.readDOMTimeout = null;
		      if (this$1$1.composing) {
		        if (this$1$1.composing.done) { this$1$1.composing = null; }
		        else { return }
		      }
		      this$1$1.updateFromDOM();
		    }, 80);
		  };

		  ContentEditableInput.prototype.updateFromDOM = function () {
		      var this$1$1 = this;

		    if (this.cm.isReadOnly() || !this.pollContent())
		      { runInOp(this.cm, function () { return regChange(this$1$1.cm); }); }
		  };

		  ContentEditableInput.prototype.setUneditable = function (node) {
		    node.contentEditable = "false";
		  };

		  ContentEditableInput.prototype.onKeyPress = function (e) {
		    if (e.charCode == 0 || this.composing) { return }
		    e.preventDefault();
		    if (!this.cm.isReadOnly())
		      { operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0); }
		  };

		  ContentEditableInput.prototype.readOnlyChanged = function (val) {
		    this.div.contentEditable = String(val != "nocursor");
		  };

		  ContentEditableInput.prototype.onContextMenu = function () {};
		  ContentEditableInput.prototype.resetPosition = function () {};

		  ContentEditableInput.prototype.needsContentAttribute = true;

		  function posToDOM(cm, pos) {
		    var view = findViewForLine(cm, pos.line);
		    if (!view || view.hidden) { return null }
		    var line = getLine(cm.doc, pos.line);
		    var info = mapFromLineView(view, line, pos.line);

		    var order = getOrder(line, cm.doc.direction), side = "left";
		    if (order) {
		      var partPos = getBidiPartAt(order, pos.ch);
		      side = partPos % 2 ? "right" : "left";
		    }
		    var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
		    result.offset = result.collapse == "right" ? result.end : result.start;
		    return result
		  }

		  function isInGutter(node) {
		    for (var scan = node; scan; scan = scan.parentNode)
		      { if (/CodeMirror-gutter-wrapper/.test(scan.className)) { return true } }
		    return false
		  }

		  function badPos(pos, bad) { if (bad) { pos.bad = true; } return pos }

		  function domTextBetween(cm, from, to, fromLine, toLine) {
		    var text = "", closing = false, lineSep = cm.doc.lineSeparator(), extraLinebreak = false;
		    function recognizeMarker(id) { return function (marker) { return marker.id == id; } }
		    function close() {
		      if (closing) {
		        text += lineSep;
		        if (extraLinebreak) { text += lineSep; }
		        closing = extraLinebreak = false;
		      }
		    }
		    function addText(str) {
		      if (str) {
		        close();
		        text += str;
		      }
		    }
		    function walk(node) {
		      if (node.nodeType == 1) {
		        var cmText = node.getAttribute("cm-text");
		        if (cmText) {
		          addText(cmText);
		          return
		        }
		        var markerID = node.getAttribute("cm-marker"), range;
		        if (markerID) {
		          var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));
		          if (found.length && (range = found[0].find(0)))
		            { addText(getBetween(cm.doc, range.from, range.to).join(lineSep)); }
		          return
		        }
		        if (node.getAttribute("contenteditable") == "false") { return }
		        var isBlock = /^(pre|div|p|li|table|br)$/i.test(node.nodeName);
		        if (!/^br$/i.test(node.nodeName) && node.textContent.length == 0) { return }

		        if (isBlock) { close(); }
		        for (var i = 0; i < node.childNodes.length; i++)
		          { walk(node.childNodes[i]); }

		        if (/^(pre|p)$/i.test(node.nodeName)) { extraLinebreak = true; }
		        if (isBlock) { closing = true; }
		      } else if (node.nodeType == 3) {
		        addText(node.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
		      }
		    }
		    for (;;) {
		      walk(from);
		      if (from == to) { break }
		      from = from.nextSibling;
		      extraLinebreak = false;
		    }
		    return text
		  }

		  function domToPos(cm, node, offset) {
		    var lineNode;
		    if (node == cm.display.lineDiv) {
		      lineNode = cm.display.lineDiv.childNodes[offset];
		      if (!lineNode) { return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true) }
		      node = null; offset = 0;
		    } else {
		      for (lineNode = node;; lineNode = lineNode.parentNode) {
		        if (!lineNode || lineNode == cm.display.lineDiv) { return null }
		        if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) { break }
		      }
		    }
		    for (var i = 0; i < cm.display.view.length; i++) {
		      var lineView = cm.display.view[i];
		      if (lineView.node == lineNode)
		        { return locateNodeInLineView(lineView, node, offset) }
		    }
		  }

		  function locateNodeInLineView(lineView, node, offset) {
		    var wrapper = lineView.text.firstChild, bad = false;
		    if (!node || !contains(wrapper, node)) { return badPos(Pos(lineNo(lineView.line), 0), true) }
		    if (node == wrapper) {
		      bad = true;
		      node = wrapper.childNodes[offset];
		      offset = 0;
		      if (!node) {
		        var line = lineView.rest ? lst(lineView.rest) : lineView.line;
		        return badPos(Pos(lineNo(line), line.text.length), bad)
		      }
		    }

		    var textNode = node.nodeType == 3 ? node : null, topNode = node;
		    if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
		      textNode = node.firstChild;
		      if (offset) { offset = textNode.nodeValue.length; }
		    }
		    while (topNode.parentNode != wrapper) { topNode = topNode.parentNode; }
		    var measure = lineView.measure, maps = measure.maps;

		    function find(textNode, topNode, offset) {
		      for (var i = -1; i < (maps ? maps.length : 0); i++) {
		        var map = i < 0 ? measure.map : maps[i];
		        for (var j = 0; j < map.length; j += 3) {
		          var curNode = map[j + 2];
		          if (curNode == textNode || curNode == topNode) {
		            var line = lineNo(i < 0 ? lineView.line : lineView.rest[i]);
		            var ch = map[j] + offset;
		            if (offset < 0 || curNode != textNode) { ch = map[j + (offset ? 1 : 0)]; }
		            return Pos(line, ch)
		          }
		        }
		      }
		    }
		    var found = find(textNode, topNode, offset);
		    if (found) { return badPos(found, bad) }

		    // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
		    for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
		      found = find(after, after.firstChild, 0);
		      if (found)
		        { return badPos(Pos(found.line, found.ch - dist), bad) }
		      else
		        { dist += after.textContent.length; }
		    }
		    for (var before = topNode.previousSibling, dist$1 = offset; before; before = before.previousSibling) {
		      found = find(before, before.firstChild, -1);
		      if (found)
		        { return badPos(Pos(found.line, found.ch + dist$1), bad) }
		      else
		        { dist$1 += before.textContent.length; }
		    }
		  }

		  // TEXTAREA INPUT STYLE

		  var TextareaInput = function(cm) {
		    this.cm = cm;
		    // See input.poll and input.reset
		    this.prevInput = "";

		    // Flag that indicates whether we expect input to appear real soon
		    // now (after some event like 'keypress' or 'input') and are
		    // polling intensively.
		    this.pollingFast = false;
		    // Self-resetting timeout for the poller
		    this.polling = new Delayed();
		    // Used to work around IE issue with selection being forgotten when focus moves away from textarea
		    this.hasSelection = false;
		    this.composing = null;
		    this.resetting = false;
		  };

		  TextareaInput.prototype.init = function (display) {
		      var this$1$1 = this;

		    var input = this, cm = this.cm;
		    this.createField(display);
		    var te = this.textarea;

		    display.wrapper.insertBefore(this.wrapper, display.wrapper.firstChild);

		    // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
		    if (ios) { te.style.width = "0px"; }

		    on(te, "input", function () {
		      if (ie && ie_version >= 9 && this$1$1.hasSelection) { this$1$1.hasSelection = null; }
		      input.poll();
		    });

		    on(te, "paste", function (e) {
		      if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }

		      cm.state.pasteIncoming = +new Date;
		      input.fastPoll();
		    });

		    function prepareCopyCut(e) {
		      if (signalDOMEvent(cm, e)) { return }
		      if (cm.somethingSelected()) {
		        setLastCopied({lineWise: false, text: cm.getSelections()});
		      } else if (!cm.options.lineWiseCopyCut) {
		        return
		      } else {
		        var ranges = copyableRanges(cm);
		        setLastCopied({lineWise: true, text: ranges.text});
		        if (e.type == "cut") {
		          cm.setSelections(ranges.ranges, null, sel_dontScroll);
		        } else {
		          input.prevInput = "";
		          te.value = ranges.text.join("\n");
		          selectInput(te);
		        }
		      }
		      if (e.type == "cut") { cm.state.cutIncoming = +new Date; }
		    }
		    on(te, "cut", prepareCopyCut);
		    on(te, "copy", prepareCopyCut);

		    on(display.scroller, "paste", function (e) {
		      if (eventInWidget(display, e) || signalDOMEvent(cm, e)) { return }
		      if (!te.dispatchEvent) {
		        cm.state.pasteIncoming = +new Date;
		        input.focus();
		        return
		      }

		      // Pass the `paste` event to the textarea so it's handled by its event listener.
		      var event = new Event("paste");
		      event.clipboardData = e.clipboardData;
		      te.dispatchEvent(event);
		    });

		    // Prevent normal selection in the editor (we handle our own)
		    on(display.lineSpace, "selectstart", function (e) {
		      if (!eventInWidget(display, e)) { e_preventDefault(e); }
		    });

		    on(te, "compositionstart", function () {
		      var start = cm.getCursor("from");
		      if (input.composing) { input.composing.range.clear(); }
		      input.composing = {
		        start: start,
		        range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
		      };
		    });
		    on(te, "compositionend", function () {
		      if (input.composing) {
		        input.poll();
		        input.composing.range.clear();
		        input.composing = null;
		      }
		    });
		  };

		  TextareaInput.prototype.createField = function (_display) {
		    // Wraps and hides input textarea
		    this.wrapper = hiddenTextarea();
		    // The semihidden textarea that is focused when the editor is
		    // focused, and receives input.
		    this.textarea = this.wrapper.firstChild;
		    var opts = this.cm.options;
		    disableBrowserMagic(this.textarea, opts.spellcheck, opts.autocorrect, opts.autocapitalize);
		  };

		  TextareaInput.prototype.screenReaderLabelChanged = function (label) {
		    // Label for screenreaders, accessibility
		    if(label) {
		      this.textarea.setAttribute('aria-label', label);
		    } else {
		      this.textarea.removeAttribute('aria-label');
		    }
		  };

		  TextareaInput.prototype.prepareSelection = function () {
		    // Redraw the selection and/or cursor
		    var cm = this.cm, display = cm.display, doc = cm.doc;
		    var result = prepareSelection(cm);

		    // Move the hidden textarea near the cursor to prevent scrolling artifacts
		    if (cm.options.moveInputWithCursor) {
		      var headPos = cursorCoords(cm, doc.sel.primary().head, "div");
		      var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
		      result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
		                                          headPos.top + lineOff.top - wrapOff.top));
		      result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
		                                           headPos.left + lineOff.left - wrapOff.left));
		    }

		    return result
		  };

		  TextareaInput.prototype.showSelection = function (drawn) {
		    var cm = this.cm, display = cm.display;
		    removeChildrenAndAdd(display.cursorDiv, drawn.cursors);
		    removeChildrenAndAdd(display.selectionDiv, drawn.selection);
		    if (drawn.teTop != null) {
		      this.wrapper.style.top = drawn.teTop + "px";
		      this.wrapper.style.left = drawn.teLeft + "px";
		    }
		  };

		  // Reset the input to correspond to the selection (or to be empty,
		  // when not typing and nothing is selected)
		  TextareaInput.prototype.reset = function (typing) {
		    if (this.contextMenuPending || this.composing && typing) { return }
		    var cm = this.cm;
		    this.resetting = true;
		    if (cm.somethingSelected()) {
		      this.prevInput = "";
		      var content = cm.getSelection();
		      this.textarea.value = content;
		      if (cm.state.focused) { selectInput(this.textarea); }
		      if (ie && ie_version >= 9) { this.hasSelection = content; }
		    } else if (!typing) {
		      this.prevInput = this.textarea.value = "";
		      if (ie && ie_version >= 9) { this.hasSelection = null; }
		    }
		    this.resetting = false;
		  };

		  TextareaInput.prototype.getField = function () { return this.textarea };

		  TextareaInput.prototype.supportsTouch = function () { return false };

		  TextareaInput.prototype.focus = function () {
		    if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt(rootNode(this.textarea)) != this.textarea)) {
		      try { this.textarea.focus(); }
		      catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
		    }
		  };

		  TextareaInput.prototype.blur = function () { this.textarea.blur(); };

		  TextareaInput.prototype.resetPosition = function () {
		    this.wrapper.style.top = this.wrapper.style.left = 0;
		  };

		  TextareaInput.prototype.receivedFocus = function () { this.slowPoll(); };

		  // Poll for input changes, using the normal rate of polling. This
		  // runs as long as the editor is focused.
		  TextareaInput.prototype.slowPoll = function () {
		      var this$1$1 = this;

		    if (this.pollingFast) { return }
		    this.polling.set(this.cm.options.pollInterval, function () {
		      this$1$1.poll();
		      if (this$1$1.cm.state.focused) { this$1$1.slowPoll(); }
		    });
		  };

		  // When an event has just come in that is likely to add or change
		  // something in the input textarea, we poll faster, to ensure that
		  // the change appears on the screen quickly.
		  TextareaInput.prototype.fastPoll = function () {
		    var missed = false, input = this;
		    input.pollingFast = true;
		    function p() {
		      var changed = input.poll();
		      if (!changed && !missed) {missed = true; input.polling.set(60, p);}
		      else {input.pollingFast = false; input.slowPoll();}
		    }
		    input.polling.set(20, p);
		  };

		  // Read input from the textarea, and update the document to match.
		  // When something is selected, it is present in the textarea, and
		  // selected (unless it is huge, in which case a placeholder is
		  // used). When nothing is selected, the cursor sits after previously
		  // seen text (can be empty), which is stored in prevInput (we must
		  // not reset the textarea when typing, because that breaks IME).
		  TextareaInput.prototype.poll = function () {
		      var this$1$1 = this;

		    var cm = this.cm, input = this.textarea, prevInput = this.prevInput;
		    // Since this is called a *lot*, try to bail out as cheaply as
		    // possible when it is clear that nothing happened. hasSelection
		    // will be the case when there is a lot of text in the textarea,
		    // in which case reading its value would be expensive.
		    if (this.contextMenuPending || this.resetting || !cm.state.focused ||
		        (hasSelection(input) && !prevInput && !this.composing) ||
		        cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
		      { return false }

		    var text = input.value;
		    // If nothing changed, bail.
		    if (text == prevInput && !cm.somethingSelected()) { return false }
		    // Work around nonsensical selection resetting in IE9/10, and
		    // inexplicable appearance of private area unicode characters on
		    // some key combos in Mac (#2689).
		    if (ie && ie_version >= 9 && this.hasSelection === text ||
		        mac && /[\uf700-\uf7ff]/.test(text)) {
		      cm.display.input.reset();
		      return false
		    }

		    if (cm.doc.sel == cm.display.selForContextMenu) {
		      var first = text.charCodeAt(0);
		      if (first == 0x200b && !prevInput) { prevInput = "\u200b"; }
		      if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo") }
		    }
		    // Find the part of the input that is actually new
		    var same = 0, l = Math.min(prevInput.length, text.length);
		    while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) { ++same; }

		    runInOp(cm, function () {
		      applyTextInput(cm, text.slice(same), prevInput.length - same,
		                     null, this$1$1.composing ? "*compose" : null);

		      // Don't leave long text in the textarea, since it makes further polling slow
		      if (text.length > 1000 || text.indexOf("\n") > -1) { input.value = this$1$1.prevInput = ""; }
		      else { this$1$1.prevInput = text; }

		      if (this$1$1.composing) {
		        this$1$1.composing.range.clear();
		        this$1$1.composing.range = cm.markText(this$1$1.composing.start, cm.getCursor("to"),
		                                           {className: "CodeMirror-composing"});
		      }
		    });
		    return true
		  };

		  TextareaInput.prototype.ensurePolled = function () {
		    if (this.pollingFast && this.poll()) { this.pollingFast = false; }
		  };

		  TextareaInput.prototype.onKeyPress = function () {
		    if (ie && ie_version >= 9) { this.hasSelection = null; }
		    this.fastPoll();
		  };

		  TextareaInput.prototype.onContextMenu = function (e) {
		    var input = this, cm = input.cm, display = cm.display, te = input.textarea;
		    if (input.contextMenuPending) { input.contextMenuPending(); }
		    var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
		    if (!pos || presto) { return } // Opera is difficult.

		    // Reset the current text selection only if the click is done outside of the selection
		    // and 'resetSelectionOnContextMenu' option is true.
		    var reset = cm.options.resetSelectionOnContextMenu;
		    if (reset && cm.doc.sel.contains(pos) == -1)
		      { operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll); }

		    var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText;
		    var wrapperBox = input.wrapper.offsetParent.getBoundingClientRect();
		    input.wrapper.style.cssText = "position: static";
		    te.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - wrapperBox.top - 5) + "px; left: " + (e.clientX - wrapperBox.left - 5) + "px;\n      z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
		    var oldScrollY;
		    if (webkit) { oldScrollY = te.ownerDocument.defaultView.scrollY; } // Work around Chrome issue (#2712)
		    display.input.focus();
		    if (webkit) { te.ownerDocument.defaultView.scrollTo(null, oldScrollY); }
		    display.input.reset();
		    // Adds "Select all" to context menu in FF
		    if (!cm.somethingSelected()) { te.value = input.prevInput = " "; }
		    input.contextMenuPending = rehide;
		    display.selForContextMenu = cm.doc.sel;
		    clearTimeout(display.detectingSelectAll);

		    // Select-all will be greyed out if there's nothing to select, so
		    // this adds a zero-width space so that we can later check whether
		    // it got selected.
		    function prepareSelectAllHack() {
		      if (te.selectionStart != null) {
		        var selected = cm.somethingSelected();
		        var extval = "\u200b" + (selected ? te.value : "");
		        te.value = "\u21da"; // Used to catch context-menu undo
		        te.value = extval;
		        input.prevInput = selected ? "" : "\u200b";
		        te.selectionStart = 1; te.selectionEnd = extval.length;
		        // Re-set this, in case some other handler touched the
		        // selection in the meantime.
		        display.selForContextMenu = cm.doc.sel;
		      }
		    }
		    function rehide() {
		      if (input.contextMenuPending != rehide) { return }
		      input.contextMenuPending = false;
		      input.wrapper.style.cssText = oldWrapperCSS;
		      te.style.cssText = oldCSS;
		      if (ie && ie_version < 9) { display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos); }

		      // Try to detect the user choosing select-all
		      if (te.selectionStart != null) {
		        if (!ie || (ie && ie_version < 9)) { prepareSelectAllHack(); }
		        var i = 0, poll = function () {
		          if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
		              te.selectionEnd > 0 && input.prevInput == "\u200b") {
		            operation(cm, selectAll)(cm);
		          } else if (i++ < 10) {
		            display.detectingSelectAll = setTimeout(poll, 500);
		          } else {
		            display.selForContextMenu = null;
		            display.input.reset();
		          }
		        };
		        display.detectingSelectAll = setTimeout(poll, 200);
		      }
		    }

		    if (ie && ie_version >= 9) { prepareSelectAllHack(); }
		    if (captureRightClick) {
		      e_stop(e);
		      var mouseup = function () {
		        off(window, "mouseup", mouseup);
		        setTimeout(rehide, 20);
		      };
		      on(window, "mouseup", mouseup);
		    } else {
		      setTimeout(rehide, 50);
		    }
		  };

		  TextareaInput.prototype.readOnlyChanged = function (val) {
		    if (!val) { this.reset(); }
		    this.textarea.disabled = val == "nocursor";
		    this.textarea.readOnly = !!val;
		  };

		  TextareaInput.prototype.setUneditable = function () {};

		  TextareaInput.prototype.needsContentAttribute = false;

		  function fromTextArea(textarea, options) {
		    options = options ? copyObj(options) : {};
		    options.value = textarea.value;
		    if (!options.tabindex && textarea.tabIndex)
		      { options.tabindex = textarea.tabIndex; }
		    if (!options.placeholder && textarea.placeholder)
		      { options.placeholder = textarea.placeholder; }
		    // Set autofocus to true if this textarea is focused, or if it has
		    // autofocus and no other element is focused.
		    if (options.autofocus == null) {
		      var hasFocus = activeElt(rootNode(textarea));
		      options.autofocus = hasFocus == textarea ||
		        textarea.getAttribute("autofocus") != null && hasFocus == document.body;
		    }

		    function save() {textarea.value = cm.getValue();}

		    var realSubmit;
		    if (textarea.form) {
		      on(textarea.form, "submit", save);
		      // Deplorable hack to make the submit method do the right thing.
		      if (!options.leaveSubmitMethodAlone) {
		        var form = textarea.form;
		        realSubmit = form.submit;
		        try {
		          var wrappedSubmit = form.submit = function () {
		            save();
		            form.submit = realSubmit;
		            form.submit();
		            form.submit = wrappedSubmit;
		          };
		        } catch(e) {}
		      }
		    }

		    options.finishInit = function (cm) {
		      cm.save = save;
		      cm.getTextArea = function () { return textarea; };
		      cm.toTextArea = function () {
		        cm.toTextArea = isNaN; // Prevent this from being ran twice
		        save();
		        textarea.parentNode.removeChild(cm.getWrapperElement());
		        textarea.style.display = "";
		        if (textarea.form) {
		          off(textarea.form, "submit", save);
		          if (!options.leaveSubmitMethodAlone && typeof textarea.form.submit == "function")
		            { textarea.form.submit = realSubmit; }
		        }
		      };
		    };

		    textarea.style.display = "none";
		    var cm = CodeMirror(function (node) { return textarea.parentNode.insertBefore(node, textarea.nextSibling); },
		      options);
		    return cm
		  }

		  function addLegacyProps(CodeMirror) {
		    CodeMirror.off = off;
		    CodeMirror.on = on;
		    CodeMirror.wheelEventPixels = wheelEventPixels;
		    CodeMirror.Doc = Doc;
		    CodeMirror.splitLines = splitLinesAuto;
		    CodeMirror.countColumn = countColumn;
		    CodeMirror.findColumn = findColumn;
		    CodeMirror.isWordChar = isWordCharBasic;
		    CodeMirror.Pass = Pass;
		    CodeMirror.signal = signal;
		    CodeMirror.Line = Line;
		    CodeMirror.changeEnd = changeEnd;
		    CodeMirror.scrollbarModel = scrollbarModel;
		    CodeMirror.Pos = Pos;
		    CodeMirror.cmpPos = cmp;
		    CodeMirror.modes = modes;
		    CodeMirror.mimeModes = mimeModes;
		    CodeMirror.resolveMode = resolveMode;
		    CodeMirror.getMode = getMode;
		    CodeMirror.modeExtensions = modeExtensions;
		    CodeMirror.extendMode = extendMode;
		    CodeMirror.copyState = copyState;
		    CodeMirror.startState = startState;
		    CodeMirror.innerMode = innerMode;
		    CodeMirror.commands = commands;
		    CodeMirror.keyMap = keyMap;
		    CodeMirror.keyName = keyName;
		    CodeMirror.isModifierKey = isModifierKey;
		    CodeMirror.lookupKey = lookupKey;
		    CodeMirror.normalizeKeyMap = normalizeKeyMap;
		    CodeMirror.StringStream = StringStream;
		    CodeMirror.SharedTextMarker = SharedTextMarker;
		    CodeMirror.TextMarker = TextMarker;
		    CodeMirror.LineWidget = LineWidget;
		    CodeMirror.e_preventDefault = e_preventDefault;
		    CodeMirror.e_stopPropagation = e_stopPropagation;
		    CodeMirror.e_stop = e_stop;
		    CodeMirror.addClass = addClass;
		    CodeMirror.contains = contains;
		    CodeMirror.rmClass = rmClass;
		    CodeMirror.keyNames = keyNames;
		  }

		  // EDITOR CONSTRUCTOR

		  defineOptions(CodeMirror);

		  addEditorMethods(CodeMirror);

		  // Set up methods on CodeMirror's prototype to redirect to the editor's document.
		  var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");
		  for (var prop in Doc.prototype) { if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
		    { CodeMirror.prototype[prop] = (function(method) {
		      return function() {return method.apply(this.doc, arguments)}
		    })(Doc.prototype[prop]); } }

		  eventMixin(Doc);
		  CodeMirror.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput};

		  // Extra arguments are stored as the mode's dependencies, which is
		  // used by (legacy) mechanisms like loadmode.js to automatically
		  // load a mode. (Preferred mechanism is the require/define calls.)
		  CodeMirror.defineMode = function(name/*, mode, …*/) {
		    if (!CodeMirror.defaults.mode && name != "null") { CodeMirror.defaults.mode = name; }
		    defineMode.apply(this, arguments);
		  };

		  CodeMirror.defineMIME = defineMIME;

		  // Minimal default mode.
		  CodeMirror.defineMode("null", function () { return ({token: function (stream) { return stream.skipToEnd(); }}); });
		  CodeMirror.defineMIME("text/plain", "null");

		  // EXTENSIONS

		  CodeMirror.defineExtension = function (name, func) {
		    CodeMirror.prototype[name] = func;
		  };
		  CodeMirror.defineDocExtension = function (name, func) {
		    Doc.prototype[name] = func;
		  };

		  CodeMirror.fromTextArea = fromTextArea;

		  addLegacyProps(CodeMirror);

		  CodeMirror.version = "5.65.19";

		  return CodeMirror;

		}))); 
	} (codemirror$2));
	return codemirror$2.exports;
}

var hasRequiredJavascript;

function requireJavascript () {
	if (hasRequiredJavascript) return javascript.exports;
	hasRequiredJavascript = 1;
	(function (module, exports) {
		// CodeMirror, copyright (c) by Marijn Haverbeke and others
		// Distributed under an MIT license: https://codemirror.net/5/LICENSE

		(function(mod) {
		  mod(requireCodemirror());
		})(function(CodeMirror) {

		CodeMirror.defineMode("javascript", function(config, parserConfig) {
		  var indentUnit = config.indentUnit;
		  var statementIndent = parserConfig.statementIndent;
		  var jsonldMode = parserConfig.jsonld;
		  var jsonMode = parserConfig.json || jsonldMode;
		  var trackScope = parserConfig.trackScope !== false;
		  var isTS = parserConfig.typescript;
		  var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;

		  // Tokenizer

		  var keywords = function(){
		    function kw(type) {return {type: type, style: "keyword"};}
		    var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c"), D = kw("keyword d");
		    var operator = kw("operator"), atom = {type: "atom", style: "atom"};

		    return {
		      "if": kw("if"), "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
		      "return": D, "break": D, "continue": D, "new": kw("new"), "delete": C, "void": C, "throw": C,
		      "debugger": kw("debugger"), "var": kw("var"), "const": kw("var"), "let": kw("var"),
		      "function": kw("function"), "catch": kw("catch"),
		      "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
		      "in": operator, "typeof": operator, "instanceof": operator,
		      "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom,
		      "this": kw("this"), "class": kw("class"), "super": kw("atom"),
		      "yield": C, "export": kw("export"), "import": kw("import"), "extends": C,
		      "await": C
		    };
		  }();

		  var isOperatorChar = /[+\-*&%=<>!?|~^@]/;
		  var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

		  function readRegexp(stream) {
		    var escaped = false, next, inSet = false;
		    while ((next = stream.next()) != null) {
		      if (!escaped) {
		        if (next == "/" && !inSet) return;
		        if (next == "[") inSet = true;
		        else if (inSet && next == "]") inSet = false;
		      }
		      escaped = !escaped && next == "\\";
		    }
		  }

		  // Used as scratch variables to communicate multiple values without
		  // consing up tons of objects.
		  var type, content;
		  function ret(tp, style, cont) {
		    type = tp; content = cont;
		    return style;
		  }
		  function tokenBase(stream, state) {
		    var ch = stream.next();
		    if (ch == '"' || ch == "'") {
		      state.tokenize = tokenString(ch);
		      return state.tokenize(stream, state);
		    } else if (ch == "." && stream.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) {
		      return ret("number", "number");
		    } else if (ch == "." && stream.match("..")) {
		      return ret("spread", "meta");
		    } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
		      return ret(ch);
		    } else if (ch == "=" && stream.eat(">")) {
		      return ret("=>", "operator");
		    } else if (ch == "0" && stream.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) {
		      return ret("number", "number");
		    } else if (/\d/.test(ch)) {
		      stream.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/);
		      return ret("number", "number");
		    } else if (ch == "/") {
		      if (stream.eat("*")) {
		        state.tokenize = tokenComment;
		        return tokenComment(stream, state);
		      } else if (stream.eat("/")) {
		        stream.skipToEnd();
		        return ret("comment", "comment");
		      } else if (expressionAllowed(stream, state, 1)) {
		        readRegexp(stream);
		        stream.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/);
		        return ret("regexp", "string-2");
		      } else {
		        stream.eat("=");
		        return ret("operator", "operator", stream.current());
		      }
		    } else if (ch == "`") {
		      state.tokenize = tokenQuasi;
		      return tokenQuasi(stream, state);
		    } else if (ch == "#" && stream.peek() == "!") {
		      stream.skipToEnd();
		      return ret("meta", "meta");
		    } else if (ch == "#" && stream.eatWhile(wordRE)) {
		      return ret("variable", "property")
		    } else if (ch == "<" && stream.match("!--") ||
		               (ch == "-" && stream.match("->") && !/\S/.test(stream.string.slice(0, stream.start)))) {
		      stream.skipToEnd();
		      return ret("comment", "comment")
		    } else if (isOperatorChar.test(ch)) {
		      if (ch != ">" || !state.lexical || state.lexical.type != ">") {
		        if (stream.eat("=")) {
		          if (ch == "!" || ch == "=") stream.eat("=");
		        } else if (/[<>*+\-|&?]/.test(ch)) {
		          stream.eat(ch);
		          if (ch == ">") stream.eat(ch);
		        }
		      }
		      if (ch == "?" && stream.eat(".")) return ret(".")
		      return ret("operator", "operator", stream.current());
		    } else if (wordRE.test(ch)) {
		      stream.eatWhile(wordRE);
		      var word = stream.current();
		      if (state.lastType != ".") {
		        if (keywords.propertyIsEnumerable(word)) {
		          var kw = keywords[word];
		          return ret(kw.type, kw.style, word)
		        }
		        if (word == "async" && stream.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, false))
		          return ret("async", "keyword", word)
		      }
		      return ret("variable", "variable", word)
		    }
		  }

		  function tokenString(quote) {
		    return function(stream, state) {
		      var escaped = false, next;
		      if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)){
		        state.tokenize = tokenBase;
		        return ret("jsonld-keyword", "meta");
		      }
		      while ((next = stream.next()) != null) {
		        if (next == quote && !escaped) break;
		        escaped = !escaped && next == "\\";
		      }
		      if (!escaped) state.tokenize = tokenBase;
		      return ret("string", "string");
		    };
		  }

		  function tokenComment(stream, state) {
		    var maybeEnd = false, ch;
		    while (ch = stream.next()) {
		      if (ch == "/" && maybeEnd) {
		        state.tokenize = tokenBase;
		        break;
		      }
		      maybeEnd = (ch == "*");
		    }
		    return ret("comment", "comment");
		  }

		  function tokenQuasi(stream, state) {
		    var escaped = false, next;
		    while ((next = stream.next()) != null) {
		      if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
		        state.tokenize = tokenBase;
		        break;
		      }
		      escaped = !escaped && next == "\\";
		    }
		    return ret("quasi", "string-2", stream.current());
		  }

		  var brackets = "([{}])";
		  // This is a crude lookahead trick to try and notice that we're
		  // parsing the argument patterns for a fat-arrow function before we
		  // actually hit the arrow token. It only works if the arrow is on
		  // the same line as the arguments and there's no strange noise
		  // (comments) in between. Fallback is to only notice when we hit the
		  // arrow, and not declare the arguments as locals for the arrow
		  // body.
		  function findFatArrow(stream, state) {
		    if (state.fatArrowAt) state.fatArrowAt = null;
		    var arrow = stream.string.indexOf("=>", stream.start);
		    if (arrow < 0) return;

		    if (isTS) { // Try to skip TypeScript return type declarations after the arguments
		      var m = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start, arrow));
		      if (m) arrow = m.index;
		    }

		    var depth = 0, sawSomething = false;
		    for (var pos = arrow - 1; pos >= 0; --pos) {
		      var ch = stream.string.charAt(pos);
		      var bracket = brackets.indexOf(ch);
		      if (bracket >= 0 && bracket < 3) {
		        if (!depth) { ++pos; break; }
		        if (--depth == 0) { if (ch == "(") sawSomething = true; break; }
		      } else if (bracket >= 3 && bracket < 6) {
		        ++depth;
		      } else if (wordRE.test(ch)) {
		        sawSomething = true;
		      } else if (/["'\/`]/.test(ch)) {
		        for (;; --pos) {
		          if (pos == 0) return
		          var next = stream.string.charAt(pos - 1);
		          if (next == ch && stream.string.charAt(pos - 2) != "\\") { pos--; break }
		        }
		      } else if (sawSomething && !depth) {
		        ++pos;
		        break;
		      }
		    }
		    if (sawSomething && !depth) state.fatArrowAt = pos;
		  }

		  // Parser

		  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true,
		                     "regexp": true, "this": true, "import": true, "jsonld-keyword": true};

		  function JSLexical(indented, column, type, align, prev, info) {
		    this.indented = indented;
		    this.column = column;
		    this.type = type;
		    this.prev = prev;
		    this.info = info;
		    if (align != null) this.align = align;
		  }

		  function inScope(state, varname) {
		    if (!trackScope) return false
		    for (var v = state.localVars; v; v = v.next)
		      if (v.name == varname) return true;
		    for (var cx = state.context; cx; cx = cx.prev) {
		      for (var v = cx.vars; v; v = v.next)
		        if (v.name == varname) return true;
		    }
		  }

		  function parseJS(state, style, type, content, stream) {
		    var cc = state.cc;
		    // Communicate our context to the combinators.
		    // (Less wasteful than consing up a hundred closures on every call.)
		    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc; cx.style = style;

		    if (!state.lexical.hasOwnProperty("align"))
		      state.lexical.align = true;

		    while(true) {
		      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
		      if (combinator(type, content)) {
		        while(cc.length && cc[cc.length - 1].lex)
		          cc.pop()();
		        if (cx.marked) return cx.marked;
		        if (type == "variable" && inScope(state, content)) return "variable-2";
		        return style;
		      }
		    }
		  }

		  // Combinator utils

		  var cx = {state: null, marked: null, cc: null};
		  function pass() {
		    for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
		  }
		  function cont() {
		    pass.apply(null, arguments);
		    return true;
		  }
		  function inList(name, list) {
		    for (var v = list; v; v = v.next) if (v.name == name) return true
		    return false;
		  }
		  function register(varname) {
		    var state = cx.state;
		    cx.marked = "def";
		    if (!trackScope) return
		    if (state.context) {
		      if (state.lexical.info == "var" && state.context && state.context.block) {
		        // FIXME function decls are also not block scoped
		        var newContext = registerVarScoped(varname, state.context);
		        if (newContext != null) {
		          state.context = newContext;
		          return
		        }
		      } else if (!inList(varname, state.localVars)) {
		        state.localVars = new Var(varname, state.localVars);
		        return
		      }
		    }
		    // Fall through means this is global
		    if (parserConfig.globalVars && !inList(varname, state.globalVars))
		      state.globalVars = new Var(varname, state.globalVars);
		  }
		  function registerVarScoped(varname, context) {
		    if (!context) {
		      return null
		    } else if (context.block) {
		      var inner = registerVarScoped(varname, context.prev);
		      if (!inner) return null
		      if (inner == context.prev) return context
		      return new Context(inner, context.vars, true)
		    } else if (inList(varname, context.vars)) {
		      return context
		    } else {
		      return new Context(context.prev, new Var(varname, context.vars), false)
		    }
		  }

		  function isModifier(name) {
		    return name == "public" || name == "private" || name == "protected" || name == "abstract" || name == "readonly"
		  }

		  // Combinators

		  function Context(prev, vars, block) { this.prev = prev; this.vars = vars; this.block = block; }
		  function Var(name, next) { this.name = name; this.next = next; }

		  var defaultVars = new Var("this", new Var("arguments", null));
		  function pushcontext() {
		    cx.state.context = new Context(cx.state.context, cx.state.localVars, false);
		    cx.state.localVars = defaultVars;
		  }
		  function pushblockcontext() {
		    cx.state.context = new Context(cx.state.context, cx.state.localVars, true);
		    cx.state.localVars = null;
		  }
		  pushcontext.lex = pushblockcontext.lex = true;
		  function popcontext() {
		    cx.state.localVars = cx.state.context.vars;
		    cx.state.context = cx.state.context.prev;
		  }
		  popcontext.lex = true;
		  function pushlex(type, info) {
		    var result = function() {
		      var state = cx.state, indent = state.indented;
		      if (state.lexical.type == "stat") indent = state.lexical.indented;
		      else for (var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
		        indent = outer.indented;
		      state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
		    };
		    result.lex = true;
		    return result;
		  }
		  function poplex() {
		    var state = cx.state;
		    if (state.lexical.prev) {
		      if (state.lexical.type == ")")
		        state.indented = state.lexical.indented;
		      state.lexical = state.lexical.prev;
		    }
		  }
		  poplex.lex = true;

		  function expect(wanted) {
		    function exp(type) {
		      if (type == wanted) return cont();
		      else if (wanted == ";" || type == "}" || type == ")" || type == "]") return pass();
		      else return cont(exp);
		    }		    return exp;
		  }

		  function statement(type, value) {
		    if (type == "var") return cont(pushlex("vardef", value), vardef, expect(";"), poplex);
		    if (type == "keyword a") return cont(pushlex("form"), parenExpr, statement, poplex);
		    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
		    if (type == "keyword d") return cx.stream.match(/^\s*$/, false) ? cont() : cont(pushlex("stat"), maybeexpression, expect(";"), poplex);
		    if (type == "debugger") return cont(expect(";"));
		    if (type == "{") return cont(pushlex("}"), pushblockcontext, block, poplex, popcontext);
		    if (type == ";") return cont();
		    if (type == "if") {
		      if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
		        cx.state.cc.pop()();
		      return cont(pushlex("form"), parenExpr, statement, poplex, maybeelse);
		    }
		    if (type == "function") return cont(functiondef);
		    if (type == "for") return cont(pushlex("form"), pushblockcontext, forspec, statement, popcontext, poplex);
		    if (type == "class" || (isTS && value == "interface")) {
		      cx.marked = "keyword";
		      return cont(pushlex("form", type == "class" ? type : value), className, poplex)
		    }
		    if (type == "variable") {
		      if (isTS && value == "declare") {
		        cx.marked = "keyword";
		        return cont(statement)
		      } else if (isTS && (value == "module" || value == "enum" || value == "type") && cx.stream.match(/^\s*\w/, false)) {
		        cx.marked = "keyword";
		        if (value == "enum") return cont(enumdef);
		        else if (value == "type") return cont(typename, expect("operator"), typeexpr, expect(";"));
		        else return cont(pushlex("form"), pattern, expect("{"), pushlex("}"), block, poplex, poplex)
		      } else if (isTS && value == "namespace") {
		        cx.marked = "keyword";
		        return cont(pushlex("form"), expression, statement, poplex)
		      } else if (isTS && value == "abstract") {
		        cx.marked = "keyword";
		        return cont(statement)
		      } else {
		        return cont(pushlex("stat"), maybelabel);
		      }
		    }
		    if (type == "switch") return cont(pushlex("form"), parenExpr, expect("{"), pushlex("}", "switch"), pushblockcontext,
		                                      block, poplex, poplex, popcontext);
		    if (type == "case") return cont(expression, expect(":"));
		    if (type == "default") return cont(expect(":"));
		    if (type == "catch") return cont(pushlex("form"), pushcontext, maybeCatchBinding, statement, poplex, popcontext);
		    if (type == "export") return cont(pushlex("stat"), afterExport, poplex);
		    if (type == "import") return cont(pushlex("stat"), afterImport, poplex);
		    if (type == "async") return cont(statement)
		    if (value == "@") return cont(expression, statement)
		    return pass(pushlex("stat"), expression, expect(";"), poplex);
		  }
		  function maybeCatchBinding(type) {
		    if (type == "(") return cont(funarg, expect(")"))
		  }
		  function expression(type, value) {
		    return expressionInner(type, value, false);
		  }
		  function expressionNoComma(type, value) {
		    return expressionInner(type, value, true);
		  }
		  function parenExpr(type) {
		    if (type != "(") return pass()
		    return cont(pushlex(")"), maybeexpression, expect(")"), poplex)
		  }
		  function expressionInner(type, value, noComma) {
		    if (cx.state.fatArrowAt == cx.stream.start) {
		      var body = noComma ? arrowBodyNoComma : arrowBody;
		      if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, expect("=>"), body, popcontext);
		      else if (type == "variable") return pass(pushcontext, pattern, expect("=>"), body, popcontext);
		    }

		    var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
		    if (atomicTypes.hasOwnProperty(type)) return cont(maybeop);
		    if (type == "function") return cont(functiondef, maybeop);
		    if (type == "class" || (isTS && value == "interface")) { cx.marked = "keyword"; return cont(pushlex("form"), classExpression, poplex); }
		    if (type == "keyword c" || type == "async") return cont(noComma ? expressionNoComma : expression);
		    if (type == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeop);
		    if (type == "operator" || type == "spread") return cont(noComma ? expressionNoComma : expression);
		    if (type == "[") return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
		    if (type == "{") return contCommasep(objprop, "}", null, maybeop);
		    if (type == "quasi") return pass(quasi, maybeop);
		    if (type == "new") return cont(maybeTarget(noComma));
		    return cont();
		  }
		  function maybeexpression(type) {
		    if (type.match(/[;\}\)\],]/)) return pass();
		    return pass(expression);
		  }

		  function maybeoperatorComma(type, value) {
		    if (type == ",") return cont(maybeexpression);
		    return maybeoperatorNoComma(type, value, false);
		  }
		  function maybeoperatorNoComma(type, value, noComma) {
		    var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
		    var expr = noComma == false ? expression : expressionNoComma;
		    if (type == "=>") return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
		    if (type == "operator") {
		      if (/\+\+|--/.test(value) || isTS && value == "!") return cont(me);
		      if (isTS && value == "<" && cx.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, false))
		        return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, me);
		      if (value == "?") return cont(expression, expect(":"), expr);
		      return cont(expr);
		    }
		    if (type == "quasi") { return pass(quasi, me); }
		    if (type == ";") return;
		    if (type == "(") return contCommasep(expressionNoComma, ")", "call", me);
		    if (type == ".") return cont(property, me);
		    if (type == "[") return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me);
		    if (isTS && value == "as") { cx.marked = "keyword"; return cont(typeexpr, me) }
		    if (type == "regexp") {
		      cx.state.lastType = cx.marked = "operator";
		      cx.stream.backUp(cx.stream.pos - cx.stream.start - 1);
		      return cont(expr)
		    }
		  }
		  function quasi(type, value) {
		    if (type != "quasi") return pass();
		    if (value.slice(value.length - 2) != "${") return cont(quasi);
		    return cont(maybeexpression, continueQuasi);
		  }
		  function continueQuasi(type) {
		    if (type == "}") {
		      cx.marked = "string-2";
		      cx.state.tokenize = tokenQuasi;
		      return cont(quasi);
		    }
		  }
		  function arrowBody(type) {
		    findFatArrow(cx.stream, cx.state);
		    return pass(type == "{" ? statement : expression);
		  }
		  function arrowBodyNoComma(type) {
		    findFatArrow(cx.stream, cx.state);
		    return pass(type == "{" ? statement : expressionNoComma);
		  }
		  function maybeTarget(noComma) {
		    return function(type) {
		      if (type == ".") return cont(noComma ? targetNoComma : target);
		      else if (type == "variable" && isTS) return cont(maybeTypeArgs, noComma ? maybeoperatorNoComma : maybeoperatorComma)
		      else return pass(noComma ? expressionNoComma : expression);
		    };
		  }
		  function target(_, value) {
		    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorComma); }
		  }
		  function targetNoComma(_, value) {
		    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorNoComma); }
		  }
		  function maybelabel(type) {
		    if (type == ":") return cont(poplex, statement);
		    return pass(maybeoperatorComma, expect(";"), poplex);
		  }
		  function property(type) {
		    if (type == "variable") {cx.marked = "property"; return cont();}
		  }
		  function objprop(type, value) {
		    if (type == "async") {
		      cx.marked = "property";
		      return cont(objprop);
		    } else if (type == "variable" || cx.style == "keyword") {
		      cx.marked = "property";
		      if (value == "get" || value == "set") return cont(getterSetter);
		      var m; // Work around fat-arrow-detection complication for detecting typescript typed arrow params
		      if (isTS && cx.state.fatArrowAt == cx.stream.start && (m = cx.stream.match(/^\s*:\s*/, false)))
		        cx.state.fatArrowAt = cx.stream.pos + m[0].length;
		      return cont(afterprop);
		    } else if (type == "number" || type == "string") {
		      cx.marked = jsonldMode ? "property" : (cx.style + " property");
		      return cont(afterprop);
		    } else if (type == "jsonld-keyword") {
		      return cont(afterprop);
		    } else if (isTS && isModifier(value)) {
		      cx.marked = "keyword";
		      return cont(objprop)
		    } else if (type == "[") {
		      return cont(expression, maybetype, expect("]"), afterprop);
		    } else if (type == "spread") {
		      return cont(expressionNoComma, afterprop);
		    } else if (value == "*") {
		      cx.marked = "keyword";
		      return cont(objprop);
		    } else if (type == ":") {
		      return pass(afterprop)
		    }
		  }
		  function getterSetter(type) {
		    if (type != "variable") return pass(afterprop);
		    cx.marked = "property";
		    return cont(functiondef);
		  }
		  function afterprop(type) {
		    if (type == ":") return cont(expressionNoComma);
		    if (type == "(") return pass(functiondef);
		  }
		  function commasep(what, end, sep) {
		    function proceed(type, value) {
		      if (sep ? sep.indexOf(type) > -1 : type == ",") {
		        var lex = cx.state.lexical;
		        if (lex.info == "call") lex.pos = (lex.pos || 0) + 1;
		        return cont(function(type, value) {
		          if (type == end || value == end) return pass()
		          return pass(what)
		        }, proceed);
		      }
		      if (type == end || value == end) return cont();
		      if (sep && sep.indexOf(";") > -1) return pass(what)
		      return cont(expect(end));
		    }
		    return function(type, value) {
		      if (type == end || value == end) return cont();
		      return pass(what, proceed);
		    };
		  }
		  function contCommasep(what, end, info) {
		    for (var i = 3; i < arguments.length; i++)
		      cx.cc.push(arguments[i]);
		    return cont(pushlex(end, info), commasep(what, end), poplex);
		  }
		  function block(type) {
		    if (type == "}") return cont();
		    return pass(statement, block);
		  }
		  function maybetype(type, value) {
		    if (isTS) {
		      if (type == ":") return cont(typeexpr);
		      if (value == "?") return cont(maybetype);
		    }
		  }
		  function maybetypeOrIn(type, value) {
		    if (isTS && (type == ":" || value == "in")) return cont(typeexpr)
		  }
		  function mayberettype(type) {
		    if (isTS && type == ":") {
		      if (cx.stream.match(/^\s*\w+\s+is\b/, false)) return cont(expression, isKW, typeexpr)
		      else return cont(typeexpr)
		    }
		  }
		  function isKW(_, value) {
		    if (value == "is") {
		      cx.marked = "keyword";
		      return cont()
		    }
		  }
		  function typeexpr(type, value) {
		    if (value == "keyof" || value == "typeof" || value == "infer" || value == "readonly") {
		      cx.marked = "keyword";
		      return cont(value == "typeof" ? expressionNoComma : typeexpr)
		    }
		    if (type == "variable" || value == "void") {
		      cx.marked = "type";
		      return cont(afterType)
		    }
		    if (value == "|" || value == "&") return cont(typeexpr)
		    if (type == "string" || type == "number" || type == "atom") return cont(afterType);
		    if (type == "[") return cont(pushlex("]"), commasep(typeexpr, "]", ","), poplex, afterType)
		    if (type == "{") return cont(pushlex("}"), typeprops, poplex, afterType)
		    if (type == "(") return cont(commasep(typearg, ")"), maybeReturnType, afterType)
		    if (type == "<") return cont(commasep(typeexpr, ">"), typeexpr)
		    if (type == "quasi") { return pass(quasiType, afterType); }
		  }
		  function maybeReturnType(type) {
		    if (type == "=>") return cont(typeexpr)
		  }
		  function typeprops(type) {
		    if (type.match(/[\}\)\]]/)) return cont()
		    if (type == "," || type == ";") return cont(typeprops)
		    return pass(typeprop, typeprops)
		  }
		  function typeprop(type, value) {
		    if (type == "variable" || cx.style == "keyword") {
		      cx.marked = "property";
		      return cont(typeprop)
		    } else if (value == "?" || type == "number" || type == "string") {
		      return cont(typeprop)
		    } else if (type == ":") {
		      return cont(typeexpr)
		    } else if (type == "[") {
		      return cont(expect("variable"), maybetypeOrIn, expect("]"), typeprop)
		    } else if (type == "(") {
		      return pass(functiondecl, typeprop)
		    } else if (!type.match(/[;\}\)\],]/)) {
		      return cont()
		    }
		  }
		  function quasiType(type, value) {
		    if (type != "quasi") return pass();
		    if (value.slice(value.length - 2) != "${") return cont(quasiType);
		    return cont(typeexpr, continueQuasiType);
		  }
		  function continueQuasiType(type) {
		    if (type == "}") {
		      cx.marked = "string-2";
		      cx.state.tokenize = tokenQuasi;
		      return cont(quasiType);
		    }
		  }
		  function typearg(type, value) {
		    if (type == "variable" && cx.stream.match(/^\s*[?:]/, false) || value == "?") return cont(typearg)
		    if (type == ":") return cont(typeexpr)
		    if (type == "spread") return cont(typearg)
		    return pass(typeexpr)
		  }
		  function afterType(type, value) {
		    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
		    if (value == "|" || type == "." || value == "&") return cont(typeexpr)
		    if (type == "[") return cont(typeexpr, expect("]"), afterType)
		    if (value == "extends" || value == "implements") { cx.marked = "keyword"; return cont(typeexpr) }
		    if (value == "?") return cont(typeexpr, expect(":"), typeexpr)
		  }
		  function maybeTypeArgs(_, value) {
		    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
		  }
		  function typeparam() {
		    return pass(typeexpr, maybeTypeDefault)
		  }
		  function maybeTypeDefault(_, value) {
		    if (value == "=") return cont(typeexpr)
		  }
		  function vardef(_, value) {
		    if (value == "enum") {cx.marked = "keyword"; return cont(enumdef)}
		    return pass(pattern, maybetype, maybeAssign, vardefCont);
		  }
		  function pattern(type, value) {
		    if (isTS && isModifier(value)) { cx.marked = "keyword"; return cont(pattern) }
		    if (type == "variable") { register(value); return cont(); }
		    if (type == "spread") return cont(pattern);
		    if (type == "[") return contCommasep(eltpattern, "]");
		    if (type == "{") return contCommasep(proppattern, "}");
		  }
		  function proppattern(type, value) {
		    if (type == "variable" && !cx.stream.match(/^\s*:/, false)) {
		      register(value);
		      return cont(maybeAssign);
		    }
		    if (type == "variable") cx.marked = "property";
		    if (type == "spread") return cont(pattern);
		    if (type == "}") return pass();
		    if (type == "[") return cont(expression, expect(']'), expect(':'), proppattern);
		    return cont(expect(":"), pattern, maybeAssign);
		  }
		  function eltpattern() {
		    return pass(pattern, maybeAssign)
		  }
		  function maybeAssign(_type, value) {
		    if (value == "=") return cont(expressionNoComma);
		  }
		  function vardefCont(type) {
		    if (type == ",") return cont(vardef);
		  }
		  function maybeelse(type, value) {
		    if (type == "keyword b" && value == "else") return cont(pushlex("form", "else"), statement, poplex);
		  }
		  function forspec(type, value) {
		    if (value == "await") return cont(forspec);
		    if (type == "(") return cont(pushlex(")"), forspec1, poplex);
		  }
		  function forspec1(type) {
		    if (type == "var") return cont(vardef, forspec2);
		    if (type == "variable") return cont(forspec2);
		    return pass(forspec2)
		  }
		  function forspec2(type, value) {
		    if (type == ")") return cont()
		    if (type == ";") return cont(forspec2)
		    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression, forspec2) }
		    return pass(expression, forspec2)
		  }
		  function functiondef(type, value) {
		    if (value == "*") {cx.marked = "keyword"; return cont(functiondef);}
		    if (type == "variable") {register(value); return cont(functiondef);}
		    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, statement, popcontext);
		    if (isTS && value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondef)
		  }
		  function functiondecl(type, value) {
		    if (value == "*") {cx.marked = "keyword"; return cont(functiondecl);}
		    if (type == "variable") {register(value); return cont(functiondecl);}
		    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, popcontext);
		    if (isTS && value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondecl)
		  }
		  function typename(type, value) {
		    if (type == "keyword" || type == "variable") {
		      cx.marked = "type";
		      return cont(typename)
		    } else if (value == "<") {
		      return cont(pushlex(">"), commasep(typeparam, ">"), poplex)
		    }
		  }
		  function funarg(type, value) {
		    if (value == "@") cont(expression, funarg);
		    if (type == "spread") return cont(funarg);
		    if (isTS && isModifier(value)) { cx.marked = "keyword"; return cont(funarg); }
		    if (isTS && type == "this") return cont(maybetype, maybeAssign)
		    return pass(pattern, maybetype, maybeAssign);
		  }
		  function classExpression(type, value) {
		    // Class expressions may have an optional name.
		    if (type == "variable") return className(type, value);
		    return classNameAfter(type, value);
		  }
		  function className(type, value) {
		    if (type == "variable") {register(value); return cont(classNameAfter);}
		  }
		  function classNameAfter(type, value) {
		    if (value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, classNameAfter)
		    if (value == "extends" || value == "implements" || (isTS && type == ",")) {
		      if (value == "implements") cx.marked = "keyword";
		      return cont(isTS ? typeexpr : expression, classNameAfter);
		    }
		    if (type == "{") return cont(pushlex("}"), classBody, poplex);
		  }
		  function classBody(type, value) {
		    if (type == "async" ||
		        (type == "variable" &&
		         (value == "static" || value == "get" || value == "set" || (isTS && isModifier(value))) &&
		         cx.stream.match(/^\s+#?[\w$\xa1-\uffff]/, false))) {
		      cx.marked = "keyword";
		      return cont(classBody);
		    }
		    if (type == "variable" || cx.style == "keyword") {
		      cx.marked = "property";
		      return cont(classfield, classBody);
		    }
		    if (type == "number" || type == "string") return cont(classfield, classBody);
		    if (type == "[")
		      return cont(expression, maybetype, expect("]"), classfield, classBody)
		    if (value == "*") {
		      cx.marked = "keyword";
		      return cont(classBody);
		    }
		    if (isTS && type == "(") return pass(functiondecl, classBody)
		    if (type == ";" || type == ",") return cont(classBody);
		    if (type == "}") return cont();
		    if (value == "@") return cont(expression, classBody)
		  }
		  function classfield(type, value) {
		    if (value == "!") return cont(classfield)
		    if (value == "?") return cont(classfield)
		    if (type == ":") return cont(typeexpr, maybeAssign)
		    if (value == "=") return cont(expressionNoComma)
		    var context = cx.state.lexical.prev, isInterface = context && context.info == "interface";
		    return pass(isInterface ? functiondecl : functiondef)
		  }
		  function afterExport(type, value) {
		    if (value == "*") { cx.marked = "keyword"; return cont(maybeFrom, expect(";")); }
		    if (value == "default") { cx.marked = "keyword"; return cont(expression, expect(";")); }
		    if (type == "{") return cont(commasep(exportField, "}"), maybeFrom, expect(";"));
		    return pass(statement);
		  }
		  function exportField(type, value) {
		    if (value == "as") { cx.marked = "keyword"; return cont(expect("variable")); }
		    if (type == "variable") return pass(expressionNoComma, exportField);
		  }
		  function afterImport(type) {
		    if (type == "string") return cont();
		    if (type == "(") return pass(expression);
		    if (type == ".") return pass(maybeoperatorComma);
		    return pass(importSpec, maybeMoreImports, maybeFrom);
		  }
		  function importSpec(type, value) {
		    if (type == "{") return contCommasep(importSpec, "}");
		    if (type == "variable") register(value);
		    if (value == "*") cx.marked = "keyword";
		    return cont(maybeAs);
		  }
		  function maybeMoreImports(type) {
		    if (type == ",") return cont(importSpec, maybeMoreImports)
		  }
		  function maybeAs(_type, value) {
		    if (value == "as") { cx.marked = "keyword"; return cont(importSpec); }
		  }
		  function maybeFrom(_type, value) {
		    if (value == "from") { cx.marked = "keyword"; return cont(expression); }
		  }
		  function arrayLiteral(type) {
		    if (type == "]") return cont();
		    return pass(commasep(expressionNoComma, "]"));
		  }
		  function enumdef() {
		    return pass(pushlex("form"), pattern, expect("{"), pushlex("}"), commasep(enummember, "}"), poplex, poplex)
		  }
		  function enummember() {
		    return pass(pattern, maybeAssign);
		  }

		  function isContinuedStatement(state, textAfter) {
		    return state.lastType == "operator" || state.lastType == "," ||
		      isOperatorChar.test(textAfter.charAt(0)) ||
		      /[,.]/.test(textAfter.charAt(0));
		  }

		  function expressionAllowed(stream, state, backUp) {
		    return state.tokenize == tokenBase &&
		      /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(state.lastType) ||
		      (state.lastType == "quasi" && /\{\s*$/.test(stream.string.slice(0, stream.pos - (backUp || 0))))
		  }

		  // Interface

		  return {
		    startState: function(basecolumn) {
		      var state = {
		        tokenize: tokenBase,
		        lastType: "sof",
		        cc: [],
		        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
		        localVars: parserConfig.localVars,
		        context: parserConfig.localVars && new Context(null, null, false),
		        indented: basecolumn || 0
		      };
		      if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
		        state.globalVars = parserConfig.globalVars;
		      return state;
		    },

		    token: function(stream, state) {
		      if (stream.sol()) {
		        if (!state.lexical.hasOwnProperty("align"))
		          state.lexical.align = false;
		        state.indented = stream.indentation();
		        findFatArrow(stream, state);
		      }
		      if (state.tokenize != tokenComment && stream.eatSpace()) return null;
		      var style = state.tokenize(stream, state);
		      if (type == "comment") return style;
		      state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
		      return parseJS(state, style, type, content, stream);
		    },

		    indent: function(state, textAfter) {
		      if (state.tokenize == tokenComment || state.tokenize == tokenQuasi) return CodeMirror.Pass;
		      if (state.tokenize != tokenBase) return 0;
		      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical, top;
		      // Kludge to prevent 'maybelse' from blocking lexical scope pops
		      if (!/^\s*else\b/.test(textAfter)) for (var i = state.cc.length - 1; i >= 0; --i) {
		        var c = state.cc[i];
		        if (c == poplex) lexical = lexical.prev;
		        else if (c != maybeelse && c != popcontext) break;
		      }
		      while ((lexical.type == "stat" || lexical.type == "form") &&
		             (firstChar == "}" || ((top = state.cc[state.cc.length - 1]) &&
		                                   (top == maybeoperatorComma || top == maybeoperatorNoComma) &&
		                                   !/^[,\.=+\-*:?[\(]/.test(textAfter))))
		        lexical = lexical.prev;
		      if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
		        lexical = lexical.prev;
		      var type = lexical.type, closing = firstChar == type;

		      if (type == "vardef") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info.length + 1 : 0);
		      else if (type == "form" && firstChar == "{") return lexical.indented;
		      else if (type == "form") return lexical.indented + indentUnit;
		      else if (type == "stat")
		        return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0);
		      else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
		        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
		      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
		      else return lexical.indented + (closing ? 0 : indentUnit);
		    },

		    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
		    blockCommentStart: jsonMode ? null : "/*",
		    blockCommentEnd: jsonMode ? null : "*/",
		    blockCommentContinue: jsonMode ? null : " * ",
		    lineComment: jsonMode ? null : "//",
		    fold: "brace",
		    closeBrackets: "()[]{}''\"\"``",

		    helperType: jsonMode ? "json" : "javascript",
		    jsonldMode: jsonldMode,
		    jsonMode: jsonMode,

		    expressionAllowed: expressionAllowed,

		    skipExpression: function(state) {
		      parseJS(state, "atom", "atom", "true", new CodeMirror.StringStream("", 2, null));
		    }
		  };
		});

		CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/);

		CodeMirror.defineMIME("text/javascript", "javascript");
		CodeMirror.defineMIME("text/ecmascript", "javascript");
		CodeMirror.defineMIME("application/javascript", "javascript");
		CodeMirror.defineMIME("application/x-javascript", "javascript");
		CodeMirror.defineMIME("application/ecmascript", "javascript");
		CodeMirror.defineMIME("application/json", { name: "javascript", json: true });
		CodeMirror.defineMIME("application/x-json", { name: "javascript", json: true });
		CodeMirror.defineMIME("application/manifest+json", { name: "javascript", json: true });
		CodeMirror.defineMIME("application/ld+json", { name: "javascript", jsonld: true });
		CodeMirror.defineMIME("text/typescript", { name: "javascript", typescript: true });
		CodeMirror.defineMIME("application/typescript", { name: "javascript", typescript: true });

		}); 
	} ());
	return javascript.exports;
}

requireJavascript();

var codemirrorExports = requireCodemirror();
var codemirror = /*@__PURE__*/getDefaultExportFromCjs(codemirrorExports);

var FileSaver_min$1 = {exports: {}};

var FileSaver_min = FileSaver_min$1.exports;

var hasRequiredFileSaver_min;

function requireFileSaver_min () {
	if (hasRequiredFileSaver_min) return FileSaver_min$1.exports;
	hasRequiredFileSaver_min = 1;
	(function (module, exports) {
		(function(a,b){b();})(FileSaver_min,function(){function b(a,b){return "undefined"==typeof b?b={autoBom:false}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c);},d.onerror=function(){console.error("could not download file");},d.send();}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,false);try{b.send();}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"));}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",true,true,window,0,0,0,80,20,false,false,false,false,0,null),a.dispatchEvent(b);}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof commonjsGlobal&&commonjsGlobal.global===commonjsGlobal?commonjsGlobal:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href);},4E4),setTimeout(function(){e(j);},0));}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else {var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i);});}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null;},k.readAsDataURL(b);}else {var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m);},4E4);}});f.saveAs=g.saveAs=g,(module.exports=g);});

		
	} (FileSaver_min$1));
	return FileSaver_min$1.exports;
}

var FileSaver_minExports = requireFileSaver_min();

var css_248z = ".jsnotebook-container{\n\n\t.verbose {\n\t  width: 100%;\n\t  font-family: monospace;\n\t  margin-top: 4px;\n\t}\n\n\t.CodeMirror {\n\t  height: 100%;\n\t  border: 1px solid #ccc;\n\t}\n\n\t.code-div.focused .CodeMirror {\n\t  border: 1px solid #02b1fc;\n\t}\n\n\t.id-note {\n\t  position: absolute;\n\t  right: 4px;\n\t  top: 1px;\n\t  border-bottom: 1px solid lightgrey;\n\t  border-left: 1px solid lightgrey;\n\t  background: white;\n\t  font-size: 6pt;\n\t  padding: 0px 1px;\n\t  margin-right: 5px;\n\t  z-index: 99;\n\t  color: grey;\n\t}\n\n\t.side-tag {\n\t  color: lightgrey;\n\t  user-select: none;\n\t  padding-right: 0px;\n\t  padding-left: 15px;\n\t  padding-top: 4px;\n\t  font-family: monospace;\n\t  white-space: nowrap;\n\t  width: 65px !important;\n\t}\n\n\t.code-div {\n\t\tposition: relative;\n\t}\n\n\n\t.output-div, .code-div {\n\t  padding-left: 0px;\n\t  padding-right: 8px;\n\t  width: calc(100% - 65px) !important;\n\t  /* white-space: nowrap;\n\t  overflow: scroll; */\n\t  word-break: break-all;\n\t  overflow: wrap;\n\t}\n\n\t.hidden {\n\t  visibility: hidden;\n\t}\n\n\t.cell {\n\t  padding-left: 15px;\n\t  /* margin-top: 20px; */\n\t  background-color: #fcfcfc;\n\n\t  padding-top: 10px;\n\t  padding-bottom: 5px;\n\t  /* border: 1px solid grey; */\n\t  border-radius: 5px;\n\t}\n\n\t.cell:hover {\n\t  background-color: #f7f7f7;\n\t}\n\n\t.cell.selected {\n\t  border-left: 5px solid #02b1fc;\n\t  padding-left: 10px;\n\t}\n\n\t.cell.selected .code-tag {\n\t  color: #02b1fc;\n\t}\n\t.cell.selected .output-tag {\n\t  color: #b57603;\n\t}\n\n\t.add-btn-bar {\n\t  margin-bottom: 0px;\n\t  height: 15px;\n\t}\n\n\t.add-btn-bar .col-xl-12 {\n\t  height: 18px;\n\t}\n\n\t.add-btn-bar button {\n\t  border-radius: 2px;\n\t  width: 100%;\n\t  border: 0;\n\t  height: 7px;\n\t  background-color: transparent;\n\t  /* margin-top: -20px !important; */\n\t  /* margin-bottom: 8px; */\n\t  outline: 0px;\n\t  display: block;\n\t  margin-top: 4px;\n\t}\n\n\t.add-btn-bar button:hover {\n\t  background-color: #02b1fc;\n\t}\n\n\t.tool-btn-group > .btn > i {\n\t\tfont-size: 15pt;\n\t}\n\n\t.tool-btn-group > .btn:hover {\n\t\tbackground-color: grey;\n\t}\n\n\n\n\n\n}";
styleInject(css_248z);

function insert(arr, index, el) {
  return [...arr.slice(0,index), el, ...arr.slice(index)];
}
function remove(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(1 + index)];
}



// worker and endpoints




const workerCode = `
self.onmessage = function (msg) {

  const self_ = self;

  let context = JSON.parse(msg.data.context);
  let code = msg.data.code;

  let verbose = {
    innerHTMLInternal: "",
    innerHTMLListener: function(val) {
      self_.postMessage({
        type: 'update',
        msg: {
          verbose_string: this.innerHTML,
          context: JSON.stringify({...context, ...self_})
        }
      });
    },
    set innerHTML(val) {
      this.innerHTMLInternal = val;
      this.innerHTMLListener(val);
    },
    get innerHTML() {
      return this.innerHTMLInternal;
    }
  };
  
  function print() {
    let args = [...arguments];
    verbose.innerHTML += args.map(x => typeof(x) == 'string' ? x : JSON.stringify(x)).join(' ') + '\\n';
  }

  try {
    let result;
    
    with (context) {
      result = eval(code);
    }
  
    new_context = {...context, ...self};

    self_.postMessage({
      type: 'complete',
      msg: {
        res: result,
        context: JSON.stringify(new_context)  // Return the updated context back
      }
    });
  } catch (e) {
    self_.postMessage({
      type: 'error',
      msg: {
        error: e,
        context: JSON.stringify({...context, ...self_})
      }
    });
  }
}
`;

const blob = new Blob([workerCode], { type: 'application/javascript' });
const workerBlobURL = URL.createObjectURL(blob);
new Worker(workerBlobURL);


class Computer {
  constructor(context) {
    this.worker = new Worker(workerBlobURL);
    this.context = context || {};
  }

  start(data) {
    // data is JSON with code, timeout, an ontimeout function, onupdate, and an oncomplete function
    const timeout = data.timeout;
    // kill after timeout
    const w = this.worker;
    const ontimeout = data.ontimeout || function (x) {console.log('timeout');};
    const id = setTimeout(function() {
      if (timeout) {
        w.terminate();
        ontimeout({
          msg: ' calculation timed out after ' + timeout + 'ms.'
        });
      }
    }, data.timeout);

    // responses
    const t = this;
    this.worker.onmessage = function(response) {
      data['on' + response.data.type](response.data.msg);
      t.context = JSON.parse(response.data.msg.context);
      if (response.data.type == 'complete') {
        clearTimeout(id);
      }
    };
    // start computation
    this.worker.postMessage({
      code: data.code,
      context: JSON.stringify(t.context)
    });
  }

  stop() {
    this.worker.terminate();
  }

}




class JSNotebook {
  constructor(container, global_context) {
    this.global_context = global_context || {};
    this.container = container;
    this.build_html();
    
    this.runBtn;
    this.stopBtn;
    this.open_modal;

    this.contents = [null];
    this.DOM_elements = [null];
    this.codeMirrors = [null];
    this.selected_cell;
    this.execution_num = 0;
    this.verbose;
    this.cell_list;
    
    this.calculation_queue = [];
    this.calculating = false;
    this.curr = null;
    this.computer = new Computer(this.global_context);
    this.execution_num = 0;

    this.insert_blank_cell(0);
    
    const t = this;
    
    setInterval(function() {t.save();}, 10000);

    let saved = localStorage.getItem(window.location.href + '--contents');
    if (saved) {
      this.contents = JSON.parse(saved);
      this.build_from_contents();
    }

    this.file;

    document.onkeydown = function(e) {
      if (event.code == "Enter" && event.shiftKey) {
        if (t.selected_cell) {
          e.preventDefault();
          t.offer_selected();
          return false;
        }
      }
      else if (event.code == "KeyS" && (event.metaKey || event.ctrlKey)) {
        e.preventDefault();
        t.save();
        return false;
      }

      else if (event.code == "KeyA" && (event.metaKey || event.ctrlKey)) {
        e.preventDefault();
        t.insert_blank_above_selected();
        return false;
      }
      else if (event.code == "KeyB" && (event.metaKey || event.ctrlKey)) {
        e.preventDefault();
        t.insert_blank_below_selected();
        return false;
      }
      else if (event.code == "KeyD" && (event.metaKey || event.ctrlKey)) {
        e.preventDefault();
        t.delete_selected();
        return false;
      }

    };
    
  }

  offer(id) {
    id = Number(id);
    if (this.curr == id) {
      this.computer.stop();
      this.calc_state(false);
    }
    if (this.codeMirrors[id].getValue().trim() == '') {
      return false;
    }
    this.calculation_queue.push({
      id:id,
      str:this.codeMirrors[id].getValue()
    });
    this.contents[id].state = 'queued';
    this.contents[id].output_content = '';
    this.write_cell_output(id);
    if (id == this.contents.length - 1) { // if last cell
     this. insert_blank_cell(id + 1);
    }
    this.DOM_elements[id + 1].cell.click();
    this.codeMirrors[id + 1].focus();

    if (!this.calculating) {
      this.next();
    }
  }

  next() {
    if (this.calculation_queue.length == 0) {
      this.calc_state(false);
      // this.computer = null;
      this.curr = null;
      return false;
    }
    this.calc_state(true);
    let execute_info = this.calculation_queue.shift();
    const id = Number(execute_info.id);
    this.curr = id;
    if (this.contents[id]) {
      this.execution_num++;
      this.contents[id].tag = this.execution_num;
      this.contents[id].output_content = "";
      this.write_cell_output(id);
      // this.computer = new Computer();
      const t = this;
      this.computer.start({
        code: execute_info.str,
        oncomplete: function(msg) {
          t.contents[id].state = 'normal';
          t.write_cell_output(id);
          t.next();
        },
        onupdate: function(msg) {
          t.contents[id].state = 'calc';
          t.contents[id].output_content = msg.verbose_string;
          t.write_cell_output(id);
        },
        onerror: function (msg) {
          t.contents[id].state = 'error';
          t.contents[id].output_content += msg.error.stack;
          console.log(msg.error);
          t.write_cell_output(id);
          t.error();
        }
      });
    }
  }
  
  stop() {
    if (this.calculating) {
      this.computer.stop();
      this.contents[this.curr].state = 'stop';
      this.write_cell_output(this.curr);
      this.calc_state(false);
      this.empty();
      console.log('# calculation stopped');
    }
  }
  
  error() {
    this.calc_state(false);
    this.empty();
  }

  empty() {
    for (let execute_info of this.calculation_queue) {
      this.ontents[execute_info.id].state = 'clear';
      this.write_cell_output(execute_info.id);
    }
    this.calculating_queue = [];
  }

  restart_copmuter() {
    this.stop();
    this.computer = new Computer(this.global_context);
    this.empty();
    for (let id = 1; id < this.get_num_cells(); id++) {
      this.contents[id].tag = " ";
      this.contents[id].output_content = "";
    }
    this.build_from_contents();
  }




  build_html() {
    const t = this;
    this.container.className = 'container-fluid jsnotebook-container';

    const row = document.createElement('div');
    row.className = 'row';
    row.style.marginBottom = '5px';
    row.style.backgroundColor = 'lightgrey';
    row.style.padding = '10px';
    this.container.appendChild(row);

    const col = document.createElement('div');
    col.className = 'col-md-12';
    row.appendChild(col);

    const btnGroup = document.createElement('div');
    btnGroup.className = 'tool-btn-group';
    col.appendChild(btnGroup);

    // // Insert above button
    // const insertAboveBtn = document.createElement('button');
    // insertAboveBtn.className = 'btn btn-default';
    // insertAboveBtn.title = 'A,A';
    // insertAboveBtn.onclick = function() {t.insert_blank_above_selected();};
    // insertAboveBtn.setAttribute('data-container', 'body');
    // insertAboveBtn.setAttribute('data-toggle', 'tooltip');
    // insertAboveBtn.setAttribute('data-placement', 'top');
    // insertAboveBtn.innerHTML = `
    //   <i class="bi bi-chevron-up" style="display:block; margin:-4px 0;"></i>
    //   <i class="bi bi-plus" style="display:block; margin:0;"></i>`;
    // btnGroup.appendChild(insertAboveBtn);

    // Insert below button
    const insertBelowBtn = document.createElement('button');
    insertBelowBtn.className = 'btn';
    insertBelowBtn.title = 'ctl+B';
    insertBelowBtn.onclick = function() {t.insert_blank_below_selected();};
    insertBelowBtn.setAttribute('data-container', 'body');
    insertBelowBtn.setAttribute('data-toggle', 'tooltip');
    insertBelowBtn.setAttribute('data-placement', 'top');
    insertBelowBtn.innerHTML = `
      <i class="bi bi-plus" style="display:block; margin:0;"></i>`;
    btnGroup.appendChild(insertBelowBtn);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.id = 'delete';
    deleteBtn.className = 'btn';
    deleteBtn.title = 'ctl+D';
    deleteBtn.onclick = function() {t.delete_selected();};
    deleteBtn.setAttribute('data-toggle', 'tooltip');
    deleteBtn.setAttribute('data-placement', 'top');
    deleteBtn.innerHTML = `<i class="bi bi-dash"></i>`;
    btnGroup.appendChild(deleteBtn);

    this.runBtn = document.createElement('button');
    this.runBtn.id = 'run';
    this.runBtn.className = 'btn';
    this.runBtn.onclick = function() {t.offer_selected();};
    this.runBtn.innerHTML = `<i class="bi bi-play-fill"></i>`;
    btnGroup.appendChild(this.runBtn);

    this.stopBtn = document.createElement('button');
    this.stopBtn.id = 'stop';
    this.stopBtn.className = 'btn';
    this.stopBtn.onclick = function () {t.stop();};
    this.stopBtn.innerHTML = `<i class="bi bi-stop-fill"></i>`;
    btnGroup.appendChild(this.stopBtn);

    let restartBtn = document.createElement('button');
    restartBtn.className = 'btn';
    restartBtn.onclick = function () {t.restart_copmuter();};
    restartBtn.innerHTML = `<i class="bi bi-arrow-clockwise"></i>`;
    btnGroup.appendChild(restartBtn);

    const openBtn = document.createElement('button');
    openBtn.className = 'btn';
    openBtn.setAttribute('data-bs-toggle', 'modal');
    openBtn.setAttribute('data-bs-target', '#open-modal');
    // openBtn.onclick = function() {
    //   new bootstrap.Modal(t.open_modal).show();
    // }
    openBtn.innerHTML = `<i class="bi bi-folder2-open"></i>`;
    btnGroup.appendChild(openBtn);

    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'btn';
    downloadBtn.onclick = function() { t.download(); };
    downloadBtn.innerHTML = `<i class="bi bi-cloud-download"></i>`;
    btnGroup.appendChild(downloadBtn);

    // const saveBtn = document.createElement('button');
    // saveBtn.className = 'btn';
    // saveBtn.title = 'ctrl + s';
    // saveBtn.onclick = function() {this.save()};
    // saveBtn.setAttribute('data-toggle', 'tooltip');
    // saveBtn.setAttribute('data-placement', 'top');
    // saveBtn.innerHTML = `<i class="bi bi-save"></i>`;
    // btnGroup.appendChild(saveBtn);

    let add_bar = document.createElement('div'); add_bar.classList.add('container-fluid', 'add-btn-bar');
    let add_bar_row = document.createElement('div'); add_bar_row.classList.add('row');
    let add_bar_col = document.createElement('div'); add_bar_col.classList.add('col-xl-12');
    let add_btn_bar = document.createElement('button'); 
    this.container.appendChild(add_bar);
    add_bar.appendChild(add_bar_row);
    add_bar_row.appendChild(add_bar_col);
    add_bar_col.appendChild(add_btn_bar);
    add_btn_bar.onclick = function() {
      t.insert_blank_cell(1);
    };

    // === Cell List Container ===
    this.cell_list = document.createElement('div');
    this.cell_list.id = 'cell-list';
    this.container.appendChild(this.cell_list);


    // === open modal ===
    this.open_modal = document.createElement('div');
    this.open_modal.classList.add('modal', 'fade');
    this.open_modal.id = 'open-modal';
    this.open_modal.tabIndex = -1;
    this.open_modal.setAttribute('aria-labelledby', 'open-ModalLabel');
    this.open_modal.setAttribute('aria-hidden', 'true');

    // Create the modal dialog
    const modalDialog = document.createElement('div');
    modalDialog.classList.add('modal-dialog');

    // Create the modal content
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Create the modal header
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');

    // Create the modal title
    const modalTitle = document.createElement('h5');
    modalTitle.classList.add('modal-title');
    modalTitle.id = 'open-ModalLabel';
    modalTitle.textContent = 'Choose a *.jsnb file to open';

    // Create the close button
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.classList.add('btn-close');
    closeButton.setAttribute('data-bs-dismiss', 'modal');
    closeButton.setAttribute('aria-label', 'Close');

    // Append title and close button to the modal header
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    // Create the modal body
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');

    // Create the file input element
    const uploadFileInput = document.createElement('input');
    uploadFileInput.id = 'upload-file';
    uploadFileInput.type = 'file';
    uploadFileInput.classList.add('input');
    uploadFileInput.setAttribute('accept', '.jsnb');
    uploadFileInput.onchange = function(event) {t.onChooseFile(event);};

    // Append the file input to the modal body
    modalBody.appendChild(uploadFileInput);

    // Create the modal footer
    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');

    // Create the Load button
    const loadButton = document.createElement('button');
    loadButton.type = 'button';
    loadButton.classList.add('btn', 'btn-secondary');
    loadButton.setAttribute('data-bs-dismiss', 'modal');
    loadButton.onclick = function() {t.load();};
    loadButton.textContent = 'Load';

    // Append the Load button to the modal footer
    modalFooter.appendChild(loadButton);

    // Append the modal header, body, and footer to the modal content
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    // Append the modal content to the modal dialog
    modalDialog.appendChild(modalContent);

    // Append the modal dialog to the modal
    this.open_modal.appendChild(modalDialog);

    this.container.appendChild(this.open_modal);
  }

  get_num_cells() {
    return this.contents.length - 1;
  }

  get_next_id_number(id) {
    if (id) {
      return id + 1;
    }
    return this.get_num_cells() + 1;
  }

  deselect() {
    let selected_elements = document.getElementsByClassName("selected");
    while (selected_elements.length > 0) {
      selected_elements = document.getElementsByClassName("selected");
      selected_elements[0].classList.remove("selected");
    }
    this.selected_cell = null;
  }
  
  select_cell(cell_id) {
    this.deselect();
    this.DOM_elements[cell_id].cell.classList.add('selected');
    this.selected_cell = cell_id;
  }

  generate_cell_DOM(cell_id) {
    const id = cell_id;

    let cell = document.createElement('div'); cell.classList.add('cell', 'container-fluid'); // cell.setAttribute('id', 'cell-' + id);
    let row1 = document.createElement('div'); row1.classList.add('row');
    let code_tag = document.createElement('div'); code_tag.classList.add('col-sm-1', 'side-tag', 'code-tag'); // code_tag.setAttribute('id', 'code-tag-' + id);
    let code_div = document.createElement('div'); code_div.classList.add('col-sm-11', 'code-div'); // code_div.setAttribute('id', 'code-div-' + id);
    let id_note = document.createElement('div'); id_note.classList.add('id-note'); // id_note.setAttribute('id', 'id-note-' + id);
    let row2 = document.createElement('div'); row2.classList.add('row');
    let output_tag = document.createElement('div'); output_tag.classList.add('col-sm-1', 'side-tag', 'output-tag', 'hidden'); // output_tag.setAttribute('id', 'output-tag-' + id);
    let output_div = document.createElement('div'); output_div.classList.add('col-sm-11', 'output-div'); // output_div.setAttribute('id', 'output-div-' + id);
    let verbose = document.createElement('div'); verbose.classList.add('verbose'); // verbose.setAttribute('id', 'verbose-' + id);

    let add_bar = document.createElement('div'); add_bar.classList.add('container-fluid', 'add-btn-bar');
    let add_bar_row = document.createElement('div'); add_bar_row.classList.add('row');
    let add_bar_col = document.createElement('div'); add_bar_col.classList.add('col-xl-12');
    let add_btn_bar = document.createElement('button');

    cell.appendChild(row1);
      row1.appendChild(code_tag);
        code_tag.innerHTML = "[ ]:";
      row1.appendChild(code_div);
        code_div.appendChild(id_note);
          id_note.innerHTML = id;
    cell.appendChild(row2);
      row2.appendChild(output_tag);
        output_tag.innerHTML = "[ ]:";
      row2.appendChild(output_div);
        output_div.appendChild(verbose);

    add_bar.appendChild(add_bar_row);
      add_bar_row.appendChild(add_bar_col);
        add_bar_col.appendChild(add_btn_bar);

    return {
      cell: cell,
      code_tag: code_tag,
      code_div: code_div,
      id_note: id_note,
      output_tag: output_tag,
      output_div: output_div,
      verbose: verbose,
      add_bar:add_bar,
      add_btn_bar:add_btn_bar
    };
  }

  set_handlers() {
    const t = this;
    for (let cell_id = 1; cell_id <= this.get_num_cells(); cell_id++) {
      const id = cell_id;
      let cell = this.DOM_elements[id].cell;
      const code_div = this.DOM_elements[id].code_div;
      let cm = this.codeMirrors[id];
      let add_btn_bar = this.DOM_elements[id].add_btn_bar;
      cell.onclick = function() {
        t.select_cell(id);
      };
      cell.ontouchstart = function() {
        t.select_cell(id);
      };
      cell.ontouchend = function() {
        t.select_cell(id);
      };
      cell.ontouchcancel = function() {
        t.deselect();
      };
      cm._handlers = {
        change: [
          function() {
            t.contents[id].code_content = t.codeMirrors[id].getValue();
          }
        ],
        focus: [
          function() {
            code_div.classList.add('focused');
          }
        ],
        blur: [
          function() {
            code_div.classList.remove('focused');
          }
        ]
      };
      add_btn_bar.onclick = function() {
        t.insert_blank_cell(id +1);
      };
    }
  }

  generate_codeMirror(cell_id) {
    const id = cell_id;

    this.DOM_elements[id].cell;
    let code_div = this.DOM_elements[id].code_div;

    let cm = codemirror(code_div, {
      value: "",
      mode: "javascript",
      lineNumbers: true,
      tabSize: 2,
      autofocus: false
    });

    return cm;
  }

  put_cell_on_page_at(dom_els, cell_id) {
    if (cell_id && cell_id != this.get_num_cells() && this.get_num_cells() > 0) {
      this.cell_list.insertBefore(dom_els.cell, this.DOM_elements[cell_id + 1].cell);
      this.cell_list.insertBefore(dom_els.add_bar, this.DOM_elements[cell_id + 1].cell);
    } else {
      this.cell_list.appendChild(dom_els.cell);
      this.cell_list.appendChild(dom_els.add_bar);
    }
  }

  renumber_id_notes() {
    for (let cell_id = 1; cell_id < this.get_num_cells() + 1; cell_id++) {
      this.DOM_elements[cell_id].id_note.innerHTML = cell_id;
    }
  }

  insert_blank_cell(cell_id) {
    cell_id = cell_id || this.get_next_id_number();
    let content = {
      code_content: "",
      tag: " ", // cell's execution number
      output_content: "",
      state: "clear"
    };
    this.insert_cell(cell_id, content);
  }

  insert_cell(cell_id, content) {
    this.contents = insert(this.contents, cell_id, content);
    let cell_DOM = this.generate_cell_DOM(cell_id, content);
    this.DOM_elements = insert(this.DOM_elements, cell_id, cell_DOM);
    this.put_cell_on_page_at(this.DOM_elements[cell_id], cell_id);
    let cm = this.generate_codeMirror(cell_id);
    this.codeMirrors = insert(this.codeMirrors, cell_id, cm);
    this.renumber_id_notes();
    this.set_handlers();
    // load cell content
    this.write_cell_code(cell_id);
    this.write_cell_output(cell_id);
  }

  delete_cell(cell_id) {
    this.contents = remove(this.contents, cell_id);
    this.DOM_elements[this.selected_cell].cell.remove();
    this.DOM_elements[this.selected_cell].add_bar.remove();
    this.DOM_elements = remove(this.DOM_elements, cell_id);
    this.codeMirrors = remove(this.codeMirrors, cell_id);
    this.renumber_id_notes();
    this.set_handlers();
  }

  insert_blank_above_selected() {
    if (this.get_num_cells() == 0) {
      this.insert_blank_cell(1);
      this.select_cell(1);
    } else {
      this.insert_blank_cell(this.selected_cell);
      this.select_cell(this.selected_cell + 1);
    }
  }

  insert_blank_below_selected() {
    if (this.get_num_cells() == 0) {
      this.insert_blank_cell(1);
      this.select_cell(1);
    } else {
      this.insert_blank_cell(this.selected_cell + 1);
      this.select_cell(this.selected_cell);
    }
  }

  delete_selected() {
    if (this.selected_cell) {
      this.delete_cell(this.selected_cell);
      if (this.get_num_cells() > 0) {
        if (this.selected_cell - 1 == this.get_num_cells()) { // if deleted last cell, select one above
          this.select_cell(this.selected_cell - 1);
        } else {
          this.select_cell(this.selected_cell);
        }
      } else {
        this.deselect();
      }
    }
  }

  write_cell_code(cell_id) {
    this.codeMirrors[cell_id].setValue(this.contents[cell_id].code_content);
    // save();
  }
  
  write_cell_output(cell_id) {
    this.DOM_elements[cell_id].verbose.style.color = this.contents[cell_id].state == 'error' ? 'red' : 'black';
    this.DOM_elements[cell_id].verbose.innerHTML = this.contents[cell_id].output_content.replaceAll('\n','<br>').replace('\t','&emsp;').replaceAll(' ','&nbsp;');
    this.DOM_elements[cell_id].code_tag.innerHTML = '[' + (this.contents[cell_id].state == 'queued' ? '*' : this.contents[cell_id].state == 'clear' ? ' ' : this.contents[cell_id].tag) + ']:';
    this.DOM_elements[cell_id].output_tag.innerHTML = '[' + {
      'normal': this.contents[cell_id].tag,
      'error':'?',
      'calc':'*',
      'stop':'#',
      'queued':'',
      'clear':''
    }[this.contents[cell_id].state] + ']:';
    if (['queued', 'clear'].includes(this.contents[cell_id].state) || this.contents[cell_id].output_content == '') {
      this.DOM_elements[cell_id].output_tag.classList.add('hidden');
    } else {
      this.DOM_elements[cell_id].output_tag.classList.remove('hidden');
    }
    // save();
  }


  build_from_contents() {
    let old_contents = this.contents;
    while (this.cell_list.hasChildNodes()) {
      this.cell_list.removeChild(this.cell_list.lastChild);
    }
    this.selected_cell = null;
    this.contents = [null];
    this.DOM_elements = [null];
    this.codeMirrors = [null];
    this.execution_num = 0;
    for (let cell_id = 1; cell_id < old_contents.length; cell_id++) {
      this.execution_num = Math.max(this.execution_num, Number(old_contents[cell_id].tag));
      this.insert_cell(cell_id, old_contents[cell_id]);
    }
  }

  download() {
    let blob = new Blob([this.get_string_contents()], { type: 'text/plain;charset=utf-8' });
    FileSaver_minExports.saveAs(blob, 'JSNotebook' + (new Date().toUTCString()) + '.jsnb');
  }

  onChooseFile(event) {
    if (event.target.files.length == 0) {
      return;
    }
    // document.getElementById('upload').checked = true;
    // document.getElementById('load').disabled = true;
    if (typeof window.FileReader !== 'function')
      throw ("The file API isn't supported on this browser.");
    let input = event.target;
    if (!input)
      throw ("The browser does not properly implement the event object");
    if (!input.files)
      throw ("This browser does not support the `files` property of the file input.");
    if (!input.files[0])
      return undefined;
    this.file = input.files[0];
    // document.getElementById('load').disabled = false;
  }

  load() {
    let fr = new FileReader();
    const t = this;
    fr.onload = function(e) {
      t.deselect();
      t.contents = JSON.parse(e.target.result);
      t.build_from_contents();
    };
    fr.readAsText(this.file);
  }

  get_string_contents() {
    let temp = JSON.parse(JSON.stringify(this.contents));
    for (let i = 1; i < temp.length; i++) {
      temp[i].tag = ' ';
      temp[i].state = temp[i].state == 'error' ? 'error' : 'normal';
    }
    return JSON.stringify(temp);
  }

  save() {
    localStorage.setItem(window.location.href + '--contents', this.get_string_contents());
  }

  offer_selected() {
    if (this.selected_cell) {
      this.offer(this.selected_cell);
    }
  }

  calc_state(bool) {
    this.calculating = bool;
  }





}

export { JSNotebook as default };
