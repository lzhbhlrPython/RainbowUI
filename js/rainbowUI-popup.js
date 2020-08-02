var rainbowUI_Popup = {
    version: "0.1.0",
    author: "Barry",
    license: "MIT",
    msgbox: function msgbox(msg, title = "title", timer = null, className = "") {
        {
            swal(msg, {
                title: title,
                buttons: false,
                className: className,
                timer: timer
            })
        }
    },
    msgboxWithIcon: function msgboxWithIcon(title = "title", icon = "success", timer = null, ) {
        swal({
            title: title,
            buttons: false,
            timer: timer,
            icon: icon
        })
    },
    msgboxWithClose: function msgboxWithbutton(msg, title = "title", buttonText = "button", timer = null) {
        swal(msg, {
            title: title,
            timer: timer,
            button: buttonText
        })

    }
}