function setColor(){
  var x = document.getElementById("colors").value;
  hoverFx(x);
}


function clearGrid(){
  //console.log("clear function called");
  document.getElementById("container").innerHTML = "";
  newGrid();
}

function newGrid(){
  document.getElementById("container").innerHTML = "";
  var x = document.getElementById("GridSize").value;
  var width = (600/x);
  
  for(var i = 0; i < x; i++){
    $("#container").append("<div id="+i+" class='row'></div>")
    for(var j = 0; j < x; j++){
      $("#"+i).append("<div id="+i+"."+j+" class='atom' style='width:"+width+"px; height:"+width+"px;'></div>");
    }
  }
  setColor();
}

$(document).ready(function(){
  newGrid();
});

function hoverFx(color){
  console.log("color is"+color);
  $(".atom").hover(function(){
        $(this).css("background-color", "gray");
        }, function(){
        $(this).css("background-color", color);
    });
}