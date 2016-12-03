$("#loginButton").click(function () {
    var pass = $("#pass").val();
    var passRe = $("#passRe").val();
    if (pass !== passRe) {
        $("#warnings").html("PASSWORDS DO NOT MATCH!");
    } else {
        var diabetes = $("#typeDiabetes").val();
        var name = $("#loginName").val();
        var User = {
            username: name,
            password: pass,
            diabetesType: diabetes,
            meal: {},
            bloodSugar: {},
            insulin: {},
            exercise: {},
            weight: {},
            bloodPressure: {}
        };
        localStorage.setItem(name, JSON.stringify(User));
        sessionStorage.setItem("name", name);
        var getBackitem = JSON.parse(localStorage.getItem(name));
        console.log(getBackitem);
        window.location.href = "/index.html";
    }
});