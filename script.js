//first populate the squares with randomized pictures/names
//create marked function which activates with onclick
//extra randomized which repopulates squares and also
//TEST CASE: make sure "" does not get into selected

var numMarked = 0;

document.addEventListener("DOMContentLoaded", 
    function(event){
        document.getElementById("banner").style.display = 'none';
        fetch('data/img_urls.txt')
        .then(response => response.text())
        .then((data) => {
            var lines = data.split('\n');
            for(var line = 0; line < 3; line++){
                for(var lain = 0; lain < 3; lain++){
                    var squareid = "p" + line + lain;
                    //selected.push(lines[Math.floor(Math.random() * lines.length)]);
                    var villager = lines[Math.floor(Math.random() * lines.length)];
                    while (!villager || villager === ""){
                        console.log("here");
                        console.log(villager);
                        villager = lines[Math.floor(Math.random() * lines.length)];
                    }
                    //document.getElementById(squareid).innerHTML = villager;
                    document.getElementById(squareid).style.backgroundImage = "url(" + villager + ")";

              }
            }
        })
    }
);

function marked(squareid){
    if(document.getElementById(squareid).style.backgroundSize != "0px 0px"){
        document.getElementById(squareid).style.backgroundSize = "0px 0px";
        numMarked = numMarked + 1;
        console.log(numMarked);
    }

    else{
        document.getElementById(squareid).style.backgroundSize = 'cover';
        numMarked = numMarked - 1;
        console.log(numMarked);

    }

    if (numMarked >= 3){
        checkBingo();
    }
}




function filled(){
    document.getElementById("bingo").style.display = 'block';
    document.getElementById("banner").style.display = 'none';
    for (var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            var squareid = "p"+i+j;
            document.getElementById(squareid).style.backgroundSize='cover';
        }
    }

    fetch('data/img_urls.txt')
    .then(response => response.text())
    .then((data) => {
        var lines = data.split('\n');
        for(var line = 0; line < 3; line++){
            for(var lain = 0; lain < 3; lain++){
                var squareid = "p" + line + lain; 
                //selected.push(lines[Math.floor(Math.random() * lines.length)]);
                var villager = lines[Math.floor(Math.random() * lines.length)];
                while (!villager || villager === ""){
                    console.log("here");
                    console.log(villager);
                    villager = lines[Math.floor(Math.random() * lines.length)];
                }
                document.getElementById(squareid).style.backgroundImage = "url(" + villager + ")";
            }
        }
    })

    numMarked = 0;
}


function checkBingo(){
    var win = false;
    var squareid;

    for (var i = 0; i < 3; i++){
        squareid = "p" + i;

        //check horizontals
        if(document.getElementById(squareid+0).style.backgroundSize=='0px 0px' &&
            document.getElementById(squareid+1).style.backgroundSize=='0px 0px' &&
            document.getElementById(squareid+2).style.backgroundSize=='0px 0px')
        {
           win = true; 
           break; 
        }

        //check verticals
        if(document.getElementById("p0"+i).style.backgroundSize=='0px 0px' &&
            document.getElementById("p1"+i).style.backgroundSize=='0px 0px' &&
            document.getElementById("p2"+i).style.backgroundSize=='0px 0px')
        {
           win = true; 
           break; 
        }

        //check diagonals
        if(win == false){
            if(document.getElementById("p11").style.backgroundSize=='0px 0px'){
                if (!(win = (document.getElementById("p00").style.backgroundSize=='0px 0px') &&
                (document.getElementById("p22").style.backgroundSize=='0px 0px'))){
                    
                    win = (document.getElementById("p02").style.backgroundSize=='0px 0px') &&
                    (document.getElementById("p20").style.backgroundSize=='0px 0px')
                }
            }
        }

        
    }
    console.log(win);
    if (win){
        document.getElementById("bingo").style.display = 'none';
        document.getElementById("banner").style.display = 'block';

    } 


    return;
}

