//
$(document).ready(function() {
    //variables

    //click event for search button
    var searchBtn = $("#searchButton");
    searchBtn.on("click", function() {
        event.preventDefault();
        //value from text inputs
        //var citySearch = citySearch.val();

        // get()
        // function get(){
        //     var cityandDateEL = $("#cityDate"); //located on lines 45-49 of html
        //     var currentTempEl = $("#temp");
        //     var currentHumidEl = $("#humid");
        //     var currentWindEl = $("#wind");
        //     var uvIndexEl = $("#index");
        // }

        //API
        var citySearch
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Richmond,US&units=imperial&APPID=349502f2a4f0d6ec4cf04d1a6f9b5eb3"  
        console.log(queryURL);

        $.ajax({
            url: queryURL, 
            method:  "GET"
            //how we run
        })
        .then(function(result) {
            console.log(result)
            // for (var i = 0; i < result.length; i++); {
            //  //for loop object goes here what we are doing  
            //     $("#cityDate").text("");
            //     $("#temp").text("");
            //     $("#humid").text("");
            //     $("#wind").text("");
            // }
            $("#cityDate").text(result.main.timeZone);
            $("#temp").text("Temperature: " + result.main.temp);
            $("#humid").text("Humidity:  " + result.main.humidity);
            $("#wind").text("Wind:  " + result.wind.speed);
            localStorage.setitem("history", citySearch);

            $("#states").prepend(localStorage.getItem("history"))
        })
    
        })

        var uvIndex
        var queryLat = "https://api.openweathermap.org/data/2.5/uvi?appid=349502f2a4f0d6ec4cf04d1a6f9b5eb3&lat=37.94&lon=-122.35"
       
        $.ajax({
            url:  queryLat, 
            method:  "GET"         
        })
        .then(function(result) {
            console.log(result)
        
        $("#uvIndex").text("UV Index" + result.value)

        })

        var fiveDay
        var queryFive = "https://api.openweathermap.org/data/2.5/forecast?id=5387428&units=imperial&APPID=349502f2a4f0d6ec4cf04d1a6f9b5eb3"

        $.ajax({
            url:  queryFive,
            method:  "GET"
        })

        .then(function(result) {
            consosle.log(result)

            $("fiveDay").text("Five Day Forecast" + result.value)
        })

    })
