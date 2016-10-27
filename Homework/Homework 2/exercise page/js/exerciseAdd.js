$("#addButton").click(function(){
   var dropdown = $("#weightSelect").val();
    var dateSelect = $('#datetimepicker1').data("DateTimePicker").date();
    if(dateSelect == null)
    {
     alert("You must Selected a Date and Time");        
    }
    else
    {
    if(dropdown == 1)
    {
        var weight = slider2.slider('getValue');
        var sets = slider3.slider('getValue');
        var reps = slider4.slider('getValue');
        $("#outputWeight").append("<tr><td>"+dateSelect.toString()+"</td>"+"<td>"+weight+"</td><td>"+sets+"</td><td>"+reps+"</td></tr>");
            
    }else if(dropdown == 2)
    {
       var timeSpan =  slider1.slider('getValue');
        $("#outputCardio").append("<tr><td>"+dateSelect.toString()+"</td>"+"<td>"+timeSpan+"</td></tr>");
    }
    }
});