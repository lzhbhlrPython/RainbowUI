var rainbowUI_Element = {
    version: "0.1.0",
    author: "Barry",
    license: "MIT",
    init: function init() {
        var jQuery = document.createElement('script');
        jQuery.setAttribute('type', 'text/javascript');
        jQuery.setAttribute('src', 'js/jquery.min.js');
        document.head.appendChild(jQuery);
        var sweetalert = document.createElement('script');
        sweetalert.setAttribute('type', 'text/javascript');
        sweetalert.setAttribute('src', 'js/sweetalert.min.js');
        document.head.appendChild(sweetalert);
        var popup = document.createElement('script');
        popup.setAttribute('type', 'text/javascript');
        popup.setAttribute('src', 'js/rainbowUI-popup.js');
        document.head.appendChild(popup);
    },

}