$('#login').on('submit', function (e) {
    e.preventDefault();

    let mail = $('#email').val();
    let password = $('#pass').val();

    $.ajax({
        type: "POST",
        url: window.location.pathname + "/login",
        data: {email: mail, password: password},
        success:function(response){
            console.log(response);
            if (response.success) {
                location.href = window.location.origin + "/dashboard";
            }
            else {
                alert("Incorrect Email or Password")
            }
        },
        error: function (request, status, error) {
            alert("An error occurred, Please try again.");
        }                  
    });

    // $.post(window.location.pathname + "/login", {"email" : mail, "password" : password }, (res) => {
    //     if (res === "Success"){
    //         location.href = window.location.origin.pathname + "/dashboard";
    //     }
    // });
});

