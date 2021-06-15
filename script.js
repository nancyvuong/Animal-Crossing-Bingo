//first populate the squares with randomized pictures/names
//create marked function which activates with onclick
//extra randomized which repopulates squares and also 

document.addEventListener("DOMContentLoaded", 
    function(event){
        var selected = [];
        fetch('data/villagers.txt')
        .then(response => response.text())
        .then((data) => {
            var lines = data.split('\n');
            for(var line = 0; line < 9; line++){
                //console.log(Math.floor(Math.random() * lines.length))
                selected.push(lines[Math.floor(Math.random() * lines.length)]);
                //selected.push(lines[line])
              }
        })

        console.log(selected);

        function fill(){
            for(var i = 0; i < selected.length; i++){
                //document.getElementById().innerHTML = selected[i];
            }
        }

    }
);

function marked(squareid){
    document.getElementById(squareid).style.backgroundColor='black';
}