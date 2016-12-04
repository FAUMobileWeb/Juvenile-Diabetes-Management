$("#addButton").click(function () {
    var dropdown = $("#weightSelect").val();
    var dateSelect = $('#datetimepicker1').data("DateTimePicker").date();
    if (dateSelect == null) {
        alert("You must Selected a Date and Time");
    } else {
        var user = JSON.parse(localStorage.getItem(sessionStorage.getItem("name")));
        if (user === null) {
            window.location.href = "login.html";
        } else {
            if (dropdown == 1) {
                var weight = slider2.slider('getValue');
                var sets = slider3.slider('getValue');
                var reps = slider4.slider('getValue');
                var lift = {
                    date: dateSelect.toString(),
                    pounds: weight,
                    set: sets,
                    rep: reps
                };
                var key = dateSelect.unix();
                user.exerciseWeight[key] = lift;
                localStorage.setItem(sessionStorage.getItem("name"), JSON.stringify(user));
                UpdateTable();

            } else if (dropdown == 2) {
                var timeSpan = slider1.slider('getValue');
                var run = {
                    date: dateSelect.toString(),
                    time: timeSpan
                };
                var key = dateSelect.unix();
                user.exerciseCardio[key] = run;
                localStorage.setItem(sessionStorage.getItem("name"), JSON.stringify(user));
                UpdateTable();
            }

        }
    }
});

function UpdateTable() {
    var user = JSON.parse(localStorage.getItem(sessionStorage.getItem("name")));
    if (user === null) {
        window.location.href = "login.html";
    } else {
        var lift = user.exerciseWeight;
        $("#outputWeight").html(" <tr><td>Date/Time</td><td>Weight</td><td>Sets</td><td>Reps</td></tr>");
        $.each(lift, function (key, value) {
            $("#outputWeight").append("<tr><td>" + value.date + "</td>" + "<td>" + value.pounds + "</td><td>" + value.set + "</td><td>" + value.rep + "</td><td><button type='button' class='deleteButton btn btn-danger' id=" + key + ">Delete</button>" + "</td></tr>");
        });
        var run = user.exerciseCardio;
        $("#outputCardio").html("<tr><td>Date</td><td>Time</td></tr>");
        $.each(run, function (key, value) {
            $("#outputCardio").append("<tr><td>" + value.date + "</td><td>" + value.time + "</td><td><button type='button' class='deleteButtonRun btn btn-danger' id=" + key + ">Delete</button>" + "</td></tr>");
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
        delete user.exerciseWeight[thisId];
        localStorage.setItem(sessionStorage.getItem("name"), JSON.stringify(user));
        UpdateTable();
    }
});

$(document).on('click', '.deleteButtonRun', function () {
    var user = JSON.parse(localStorage.getItem(sessionStorage.getItem("name")));
    if (user === null) {
        window.location.href = "login.html";
    } else {
        var thisId = $(this).attr("id");
        console.log(thisId);
        delete user.exerciseCardio[thisId];
        localStorage.setItem(sessionStorage.getItem("name"), JSON.stringify(user));
        UpdateTable();
    }
});