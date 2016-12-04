$("#loginButton").click(function () {
    var name = $("#loginName").val();
    if (localStorage.getItem(name) === null) {
        $("#warnings").html("WRONG USERNAME OR PASSWORDS");
    } else {
        var getBackitem = JSON.parse(localStorage.getItem(name));
        var pass = $("#pass").val();
        var passRe = getBackitem.password;

        if (pass !== passRe) {
            $("#warnings").html("WRONG USERNAME OR PASSWORDS");
        } else {

            sessionStorage.setItem("name", getBackitem.username);
            window.location.href = "/index.html";
        }
    }
});