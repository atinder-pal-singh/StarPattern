
function hollowTriangle(n) {
    var pattern = "";
    for (let i = 1; i <= n; i++) {
        pattern = "";
        for (let j = 1; j <= i; j++) {
            if(i === j) {
                pattern += "*";
            } else if (j === 1 || i == n) {
                pattern += "*";
            } else {
                pattern += " ";
            }
        }
        
        
        console.log(pattern);
    }
    
    
}

hollowTriangle(5);