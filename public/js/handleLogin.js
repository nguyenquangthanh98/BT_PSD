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
                url: "/login",
                type: "POST",
                data: body,
                dataType: "json"
            }).then(function(res) {
                if (res == 200) {
                    $('#text').text(res.message)
                } else {
                    $('#text').text(res.message)

                }
            });



        }

    )
})