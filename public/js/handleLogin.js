$(document).ready(function() {
    $('#button-login').click(function() {
        // var user = $('#user').val();
        // var pass = $('#pass').val();

        var body = {
            user: $('#user').val(),
            pass: $('#pass').val()
        }
        console.log(body);
        let result = $.ajax({
            url: "localhost:3000/login",
            type: "POST",
            data: body,
            dataType: "json"
        });
        console.log(result);
        if (result.status === 200) {
            // console.log(" Dang nhap thanh cong");
            $('alert').text(res.messeager)
        } else {
            // console.log("Dang nhap that baiaaaa");
            $('alert').text(res.messeager)

        }

    })
})