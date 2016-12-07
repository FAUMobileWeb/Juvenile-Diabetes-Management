var ctx = document.getElementById("myChart");

$("#cal").click(function () {
    var user = JSON.parse(localStorage.getItem(sessionStorage.getItem("name")));
    if (user === null) {
        window.location.href = "login.html";
    } else {
        var label = [];
        var dataset = [];
        var cals = user.meal;
        var orderedCals = {};
        Object.keys(cals).sort().forEach(function (key) {
            orderedCals[key] = cals[key];
        })
        $.each(orderedCals, function (key, value) {
            label.push(value.date);
            dataset.push(value.cal);
        });
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: label,
                datasets: [{
                        label: "Calories",
                        data: dataset
                    }

                    ]
            }
        });
    }

});

$("#sugar").click(function () {
    var user = JSON.parse(localStorage.getItem(sessionStorage.getItem("name")));
    if (user === null) {
        window.location.href = "login.html";
    } else {
        var label = [];
        var dataset = [];
        var cals = user.bloodSugar;
        var orderedCals = {};
        Object.keys(cals).sort().forEach(function (key) {
            orderedCals[key] = cals[key];
        })
        $.each(orderedCals, function (key, value) {
            label.push(value.date);
            dataset.push(value.level);
        });
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: label,
                datasets: [{
                        label: "Blood Sugar",
                        data: dataset
                    }

                    ]
            }
        });
    }

});
$("#insulin").click(function () {
    var user = JSON.parse(localStorage.getItem(sessionStorage.getItem("name")));
    if (user === null) {
        window.location.href = "login.html";
    } else {
        var label = [];
        var dataset = [];
        var cals = user.insulin;
        var orderedCals = {};
        Object.keys(cals).sort().forEach(function (key) {
            orderedCals[key] = cals[key];
        })
        $.each(orderedCals, function (key, value) {
            label.push(value.date);
            dataset.push(value.dosage);
        });
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: label,
                datasets: [{
                        label: "Insulin",
                        data: dataset
                    }

                    ]
            }
        });
    }

});
$("#exercise").click(function () {
    var user = JSON.parse(localStorage.getItem(sessionStorage.getItem("name")));
    if (user === null) {
        window.location.href = "login.html";
    } else {
        var label = [];
        var dataset = [];
        var cals = user.exerciseWeight;
        var orderedCals = {};
        Object.keys(cals).sort().forEach(function (key) {
            orderedCals[key] = cals[key];
        })
        $.each(orderedCals, function (key, value) {
            label.push(value.date);
            dataset.push(((value.pounds * value.rep) * value.set));
        });
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: label,
                datasets: [{
                        label: "Total Weight Lifted",
                        data: dataset
                    }

                    ]
            }
        });
    }

});
$("#exerciseRun").click(function () {
    var user = JSON.parse(localStorage.getItem(sessionStorage.getItem("name")));
    if (user === null) {
        window.location.href = "login.html";
    } else {
        var label = [];
        var dataset = [];
        var cals = user.exerciseCardio;
        var orderedCals = {};
        Object.keys(cals).sort().forEach(function (key) {
            orderedCals[key] = cals[key];
        })
        $.each(orderedCals, function (key, value) {
            label.push(value.date);
            dataset.push(value.time);
        });
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: label,
                datasets: [{
                        label: "Running in Minutes",
                        data: dataset
                    }

                    ]
            }
        });
    }

});
$("#weight").click(function () {
    var user = JSON.parse(localStorage.getItem(sessionStorage.getItem("name")));
    if (user === null) {
        window.location.href = "login.html";
    } else {
        var label = [];
        var dataset = [];
        var cals = user.weight;
        var orderedCals = {};
        Object.keys(cals).sort().forEach(function (key) {
            orderedCals[key] = cals[key];
        })
        $.each(orderedCals, function (key, value) {
            label.push(value.date);
            dataset.push(value.pounds);
        });
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: label,
                datasets: [{
                        label: "Weight",
                        data: dataset
                    }

                    ]
            }
        });
    }
});
$("#pressure").click(function () {

});