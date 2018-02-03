$(document).ready(function () {

  var powerRankings=[];

  for(let i=0;i<players.length;i++){
    var pr=0.5*(2*players[i].winsTotal-players[i].losesTotal)+0.5*(2*players[i].winsWeek-players[i].losesWeek)
    console.log(players[i].name+":"+pr);
    var currentPlayer={};
    currentPlayer.name=players[i].name;
    currentPlayer.image=players[i].image;
    currentPlayer.score=pr;
    console.log(currentPlayer);
    powerRankings.push(currentPlayer);

  }

  //sort the array
  powerRankings.sort(function(a, b){return -(a.score-b.score)});
  console.log(powerRankings);

  //display
  for(let i=0;i<powerRankings.length;i++){
    $(".ranks").append("<div class=\"panel panel-info col-xs-12 col-sm-12 col-md-12 col-lg-12 boards\"><div class=\"panel-heading\"><h2>"+(i+1)+"."+powerRankings[i].name+"</h2></div><div class=\"panel-body col-xs-12 col-sm-12 col-md-12 col-lg-12\"><img class=\"col-xs-6 col-sm-6 col-md-4 col-lg-4\" src="+powerRankings[i].image+"><h2 class=\"scoreDisplay\">"+"pwScore:<br>"+powerRankings[i].score+"</h2></div></div>")
  }


    $(".nav li").on("click", function () {
        console.log("clicked on item");
        $(".nav li").removeClass("active");
        $(this).addClass("active");
    });

    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#back2Top').fadeIn();
        } else {
            $('#back2Top').fadeOut();
        }
    });

    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $(".nav li").removeClass("active");
        return false;
    });

});
