$(document).ready(function () {

  var powerRankings=[];

  for(let i=0;i<players.length;i++){
    console.log("inner loop starts,maxGameslength:"+maxGames.length);
    var pr=0;
    var denominator=0;
    for (let j=maxGames.length-1;j>=0;j--){
      console.log("wins:"+players[i].name);
      console.log("wins:"+players[i].wins[j]);
      console.log("loses:"+players[i].loses[j]);
      console.log("this itteration:"+(2*players[i].wins[j]-players[i].loses[j])/(2*maxGames[j]));
      pr+=(j+1)*(2*players[i].wins[j]-players[i].loses[j])/(2*maxGames[j]);
      denominator+=(j+1);
    }
    console.log(players[i].name+": "+pr+" "+denominator+" "+(pr/denominator));
    var currentPlayer={};
    currentPlayer.name=players[i].name;
    currentPlayer.image=players[i].image;
    currentPlayer.score=(((pr/denominator)+1)/2).toFixed(2);
    console.log(currentPlayer);
    powerRankings.push(currentPlayer);

  }

  //sort the array
  powerRankings.sort(function(a, b){return -(a.score-b.score)});
  console.log(powerRankings);

  //display
  for(let i=0;i<powerRankings.length;i++){
    $(".ranks").append("<div class=\"panel panel-info col-xs-12 col-sm-12 col-md-12 col-lg-12 boards\"><div class=\"panel-heading\"><h2>"+(i+1)+"."+powerRankings[i].name+"</h2></div><div class=\"panel-body col-xs-12 col-sm-12 col-md-12 col-lg-12\"><img class=\"col-xs-6 col-sm-6 col-md-4 col-lg-4 img-circle\" src="+powerRankings[i].image+"><h2 class=\"scoreDisplay\">"+"Power Rankings Score:<br>"+powerRankings[i].score+"</h2></div></div>")
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
