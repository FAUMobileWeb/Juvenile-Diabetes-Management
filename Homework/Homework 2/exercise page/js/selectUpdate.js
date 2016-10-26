$(function(){
     $("#sliders2").collapse('show');
});
$("#weightSelect").change(function() {
    var selectedVal  = $("#weightSelect").val();
    
    if(selectedVal == 1)
        {
            $("#sliders2").collapse('show');
            $("#sliders1").collapse('hide');
        } 
    else if(selectedVal == 2 )
            {
            $("#sliders2").collapse('hide');
            $("#sliders1").collapse('show');
            }
});
