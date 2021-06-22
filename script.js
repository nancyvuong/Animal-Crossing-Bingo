//first populate the squares with randomized pictures/names
//create marked function which activates with onclick
//extra randomized which repopulates squares and also
//TEST CASE: make sure "" does not get into selected


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
    if(document.getElementById(squareid).style.backgroundColor=='yellow'){
        document.getElementById(squareid).style.backgroundColor='black';
    }
    
    else{
    document.getElementById(squareid).style.backgroundColor='yellow';
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
}