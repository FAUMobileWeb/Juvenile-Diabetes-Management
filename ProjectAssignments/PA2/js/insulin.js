$("#addButton").click(function () {
    var dateSelect = $('#datetimepicker1').data("DateTimePicker").date();
    if (dateSelect == null) {
        alert("You must Selected a Date and Time");
    } else {
        var user = JSON.parse(localStorage.getItem(sessionStorage.getItem("name")));
        if (user === null) {
            window.location.href = "/login.html";
        } else {
            var dos = slider2.slider('getValue');
            var shot = {
                date: dateSelect.toString(),
                dosage: dos
            };
            var key = dateSelect.unix();
            user.insulin[key] = shot;
            localStorage.setItem(sessionStorage.getItem("name"), JSON.stringify(user));
            UpdateTable();
        }
    }

});

function UpdateTable() {
    var user = JSON.parse(localStorage.getItem(sessionStorage.getItem("name")));
    if (user === null) {
        window.location.href = "/login.html";
    } else {
        var dosages = user.insulin;
        $("#outputShot").html(" <tr><td>Date/Time</td><td>Dosage</td><td></td></tr>");
        $.each(dosages, function (key, value) {
            $("#outputShot").append("<tr><td>" + value.date + "</td>" + "<td>" + value.dosage + "</td><td>" + "<button type='button' class='deleteButton btn btn-danger' id=" + key + ">Delete</button>" + "</td></tr>");
        });
    }
}

$(function () {
    UpdateTable();
});

$(document).on('click', '.deleteButton', function () {
    var user = JSON.parse(localStorage.getItem(sessionStorage.getItem("name")));
    if (user === null) {
        window.location.href = "/login.html";
    } else {
        var thisId = $(this).attr("id");
        console.log(thisId);
        delete user.insulin[thisId];
        localStorage.setItem(sessionStorage.getItem("name"), JSON.stringify(user));
        UpdateTable();
    }
});