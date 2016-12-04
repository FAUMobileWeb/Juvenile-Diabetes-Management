// constructs the suggestion engine
var food = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    // `states` is an array of state names defined in "The Basics"
    identify: function (item) {
        return item.name;
    },
    remote: {
        url: 'https://trackapi.nutritionix.com/v2/search/instant',
        prepare: function (query, settings) {
            console.log(query);
            settings.type = "GET";
            settings.contentType = "application/x-www-form-urlencoded; charset=UTF-8";
            settings.data = 'query=' + query;
            settings.headers = {
                'x-app-id': 'bd9705a5',
                'x-app-key': '6e036410591cb7377ddd484c9b760797'
            }
            return settings;
        },
        transform: function (response) {
            console.log(response);
            return $.map(response.branded, function (re) {
                return {
                    name: re.food_name,
                    id: re.nix_item_id
                };
            });
            /* var common = $.map(response.common, function(re) {
                return {
                    name: re.food_name,
                    id: re.tag_id
                };  
             });
             var combined = $.merge(common,branded);
             return combined;*/
        }
    }
});

$('#bloodhound .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
}, {
    name: 'food',
    display: 'name',
    limit: Infinity,
    source: food

});
$('#bloodhound .typeahead').bind('typeahead:select', function (ev, suggestion) {
    $('#foodAutoId').val(suggestion.id);
});