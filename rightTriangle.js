
function rightTriangle(num) {
    var pattern = "";
    var addspace = "";
    for (let i = 1; i <= num; i++) {
        addspace = "";
        
        for (let k = 1; k <= num-i; k++) {
            addspace += " ";
        }

        pattern += "*";
        console.log(addspace + pattern);
    }
    
}

rightTriangle(5);