//
$(document).ready(function() {
    //variables

//click event for search button
var searchBtn = $("#searchButton");
searchBtn.on("click", function() {
    event.preventDefault();
    //value from text inputs
    //var citySearch = citySearch.val();

function get(){
    var cityandDateEL = $("#cityDate"); //located on lines 45-49 of html
    var currentTempEl = $("#temp");
    var currentHumidEl = $("#humid");
    var currentWindEl = $("#wind");
    var uvIndexEl = $("#index");

}

//API
    queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Richmond,US&APPID=349502f2a4f0d6ec4cf04d1a6f9b5eb3"  
    console.log(queryURL);

    $.ajax({
        url: queryURL, 
        method:  "Get"
        //how we run
    }).then(function(result) {
        console.log(result)
        for (var i = 0; i < result.length; i++); {
         //for loop object goes here what we are doing  
            $("#cityDate" + i).text("");
            $("#temp" + i).text("");
            $("#humid" + i).text("");
            $("#wind" + i).text("");
        }

        localStorage.setitem("history"), citySearch
        $("#states").prepend(localStorage.getItem("history")