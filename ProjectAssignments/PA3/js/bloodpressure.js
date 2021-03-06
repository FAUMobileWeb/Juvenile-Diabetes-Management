$("#addButton").click(function () {
    var dateSelect = $('#datetimepicker1').data("DateTimePicker").date();
    if (dateSelect == null) {
        alert("You must Selected a Date and Time");
    } else {
        var user = JSON.parse(localStorage.getItem(sessionStorage.getItem("name")));
        if (user === null) {
            window.location.href = "login.html";
        } else {
            var lbs = slider2.slider('getValue');
            var dia = slider3.slider('getValue');
            var weight = {
                date: dateSelect.toString(),
                systolic: lbs,
                diastolic: dia
            };
            var key = dateSelect.unix();
            user.bloodPressure[key] = weight;
            localStorage.setItem(sessionStorage.getItem("name"), JSON.stringify(user));
            UpdateTable();
        }
    }

});

function UpdateTable() {
    var user = JSON.parse(localStorage.getItem(sessionStorage.getItem("name")));
    if (user === null) {
        window.location.href = "login.html";
    } else {
        var weights = user.bloodPressure;
        $("#outputWeight").html(" <tr><td>Date/Time</td><td>Systolic</td><td>Diastolic</td><td></td></tr>");
        $.each(weights, function (key, value) {
            $("#outputWeight").append("<tr><td>" + value.date + "</td>" + "<td>" + value.systolic + "</td><td>" + value.diastolic + "</td><td>" + "<button type='button' class='deleteButton btn btn-danger' id=" + key + ">Delete</button>" + "</td></tr>");
        });
    }
}

$(function () {
    UpdateTable();
});

$(document).on('click', '.deleteButton', function () {
    var user = JSON.parse(localStorage.getItem(sessionStorage.getItem("name")));
    if (user === null) {
        window.location.href = "login.html";
    } else {
        var thisId = $(this).attr("id");
        console.log(thisId);
        delete user.bloodPressure[thisId];
        localStorage.setItem(sessionStorage.getItem("name"), JSON.stringify(user));
        UpdateTable();
    }
});