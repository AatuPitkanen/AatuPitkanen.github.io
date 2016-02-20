    
$(document).ready(function () {
    $("form").submit(function (event) {
       event.preventDefault();
       $("#send-msg").attr("disabled", true)
       var msg      =  $("#message").val();
       var mail     = $("#email").val();
       var subject  = $("#subject").val();
       console.log(msg);
       console.log(mail);
       console.log(subject);
    if (msg !== "" && mail !== "" && subject !== "") {
           var payload = {subject: subject, email: mail, message: msg};

            // Send mail to the local python mail server
            $.ajax({
                type:    "POST",
                url:     "http://pitkanen.dy.fi:8080/sendmail",
                crossDomain: true,
                data:    payload,
                complete: function (data, status, req) {
                    $("#fa-send").toggleClass("fa-envelope-o").toggleClass("fa-spinner").toggleClass("fa-spin");

                    $("#message").val("");
                    $("#email").val("");
                    $("#subject").val("");
                    $("#send-msg").attr("disabled", false);
                }
            });
        } else {
            alert("Please fill all of the fields");
        }
    })
})