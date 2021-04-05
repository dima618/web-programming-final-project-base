
$('#login').on("submit",() => {
    let mail = $('#email').val;
    let password = $('#pass').val;


    $.post(window.location.pathname + "/login", {"email" : mail, "password" : password },(res) => {
        if (res==="Success"){
            location.href = window.location.origin.pathname + "/dashboard";
        }
    })
    return false;
});

