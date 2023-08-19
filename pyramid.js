
function pyramid(n) {
    var pattern = "";
    for (let i = 1; i <= n; i++) {
        pattern = "";
        for (let j = 1; j <= n-i; j++) {
            pattern += " ";
            
        }
        for (let k = 1; k <= 2*i-1; k++) {
            pattern += "*";
        }
        
        console.log(pattern);
    }
}

pyramid(5);