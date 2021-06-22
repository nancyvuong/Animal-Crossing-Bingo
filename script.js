//first populate the squares with randomized pictures/names
//create marked function which activates with onclick
//extra randomized which repopulates squares and also
//TEST CASE: make sure "" does not get into selected

var numMarked = 0;

document.addEventListener("DOMContentLoaded", 
    function(event){
        fetch('data/villagers.txt')
        .then(response => response.text())
        .then((data) => {
            var lines = data.split('\n');
            for(var line = 0; line < 9; line++){
                var squareid = "p" + line; 
                //selected.push(lines[Math.floor(Math.random() * lines.length)]);
                document.getElementById(squareid).innerHTML = lines[Math.floor(Math.random() * lines.length)];
              }
        })
    }
);

function marked(squareid){
    if(document.getElementById(squareid).style.backgroundColor !='black'){
        document.getElementById(squareid).style.backgroundColor='black';
        numMarked = numMarked + 1;
        //console.log(numMarked);
    }

    else{
        document.getElementById(squareid).style.backgroundColor='yellow';
        numMarked = numMarked - 1;
        //console.log(numMarked);

    }

    if (numMarked >= 3){
        checkBingo();
    }
}


function filled(){
    for (var i = 0; i < 9; i++){
        var squareid = "p"+i;
        document.getElementById(squareid).style.backgroundColor='yellow';
    }

    fetch('data/villagers.txt')
    .then(response => response.text())
    .then((data) => {
        var lines = data.split('\n');
        for(var line = 0; line < 9; line++){
            var squareid = "p" + line; 
            //selected.push(lines[Math.floor(Math.random() * lines.length)]);
            document.getElementById(squareid).innerHTML = lines[Math.floor(Math.random() * lines.length)];
        }
    })

    numMarked = 0;
}

function checkBingo(){
    //check horizontals
    
   
}