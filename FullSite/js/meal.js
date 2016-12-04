$("#addButton").click(function () {
    var dateSelect = $('#datetimepicker1').data("DateTimePicker").date();
    if (dateSelect == null) {
        alert("You must Selected a Date and Time");
    } else {
        var user = JSON.parse(localStorage.getItem(sessionStorage.getItem("name")));
        if (user === null) {
            window.location.href = "/login.html";
        } else {
            $.ajax({
                url: 'https://trackapi.nutritionix.com/v2/search/item',
                headers: {
                    "x-app-id": "bd9705a5",
                    "x-app-key": '6e036410591cb7377ddd484c9b760797'
                },
                contentType: "application/json; charset=UTF-8",
                data: {
                    nix_item_id: $('#foodAutoId').val()
                },
            }).done(function (results) {
                itemStats = results;
                console.log(itemStats);
                var serving = parseInt($("#portionsSelect").val());
                var food = {
                    date: dateSelect.toString(),
                    name: results.foods["0"].food_name,
                    serve: serving,
                    cal: results.foods["0"].nf_calories * serving
                };
                var key = dateSelect.toString().replace(/\s+/g, '');
                user.meal[key] = food;
                localStorage.setItem(sessionStorage.getItem("name"), JSON.stringify(user));
                UpdateTable();
            });
        }
    }

});

function UpdateTable() {
    var user = JSON.parse(localStorage.getItem(sessionStorage.getItem("name")));
    if (user === null) {
        window.location.href = "/login.html";
    } else {
        var meals = user.meal;
        $("#outputFood").html(" <tr><td>Date/Time</td><td>Food</td><td>Serving</td><td>Calories</td></tr> ha");
        $.each(meals, function (key, value) {
            $("#outputFood").append("<tr><td>" + value.date + "</td>" + "<td>" + value.name + "</td><td>" + value.serve + "</td><td>" + value.cal + "</td><td>" + "<button type='button' class='deleteButton btn btn-danger' id=" + key + ">Delete</button>" + "</td></tr>");
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
        delete user.meal[thisId];
        localStorage.setItem(sessionStorage.getItem("name"), JSON.stringify(user));
        UpdateTable();
    }
});