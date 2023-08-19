
function reversepyramid (n) {
    var pattern = "";
    for (let i = 0; i < n; i++) {
        pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += " ";
        }
        
        for (let k = 1; k <= 2*(n-i)-1; k++) {
            pattern += "*";            
        }
        
        console.log(pattern);
    }
}

reversepyramid(5);