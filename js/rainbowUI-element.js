var rainbowUI_Element = {
    version: "0.1.0",
    author: "Barry",
    license: "MIT",
    init: function init() {
        this.importjs("js/jquery.min.js", "text/js")
        this.importjs("js/sweetalert.min.js", "text/js")
        this.importjs("js/rainbowUI-popup.js", "text/js")
        this.importstyle("css/font-awesome.min.css", "type/css")
    },
    importjs: function importjs(src, type) {
        var module = document.createElement('script');
        module.setAttribute('type', type);
        module.setAttribute('src', src);
        document.head.appendChild(module);
    },
    importstyle: function importst(href, type) {
        var stylesheet = document.createElement('link');
        stylesheet.setAttribute('type', type);
        stylesheet.setAttribute('rel', 'stylesheet');
        stylesheet.setAttribute('href', href);
        document.head.appendChild(stylesheet);
    }
}