var rainbowUI_Popup = {
    version: "0.1.0",
    author: "Barry",
    license: "MIT",
    msgbox: function msgbox(msg, title = "title", className = null) {
        if (className != null) {
            swal(msg, {
                title: title,
                buttons: false,
                className: className
            })
        } else {
            swal(msg, {
                title: title,
                buttons: false
            })
        }
    },
    msgboxWithIcon: function msgboxWithIcon(title = "title", icon = "success") {
        swal({
            title: title,
            buttons: false,
            icon: icon
        })
    },
    msgboxWithbutton: function msgboxWithbutton(msg, title = "title", buttonText = "button") {
        swal(msg, {
            title: title,
            button: buttonText
        })

    }
}