
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

//Eric
// .post('/service', async (req, res) => {
//     try{
//       login.find(el => { return el.email === user && el.password === secret});
//       res.send("Success");
//     }
//     catch (err) {
//       console.error(err);
//       res.send("Error " + err);
//     }
//   })
