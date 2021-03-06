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
                        data: dataset,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)"
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
                        data: dataset,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)"
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
                        data: dataset,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)"
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
                        data: dataset,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)"
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
                        data: dataset,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)"
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
                        data: dataset,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)"
                    }

                    ]
            }
        });
    }
});
$("#pressure").click(function () {
    var user = JSON.parse(localStorage.getItem(sessionStorage.getItem("name")));
    if (user === null) {
        window.location.href = "login.html";
    } else {
        var label = [];
        var dataset = [];
        var dataset2 = [];
        var cals = user.bloodPressure;
        var orderedCals = {};
        Object.keys(cals).sort().forEach(function (key) {
            orderedCals[key] = cals[key];
        })
        $.each(orderedCals, function (key, value) {
            label.push(value.date);
            dataset.push(value.systolic);
            dataset2.push(value.diastolic);
        });
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: label,
                datasets: [{
                        label: "Systolic",
                        data: dataset,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)"
                    },
                    {
                        label: "Diastolic",
                        data: dataset2,
                        backgroundColor: "rgba(255, 25, 25, 0.4)",
                        borderColor: "rgba(255, 25, 25, 1)"
                    }

                    ]
            }

        });
    }
});