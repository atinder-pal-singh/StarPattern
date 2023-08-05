
function printFullPattern(n) {
    var pattern = "";
    for (let i = 0; i < n; i++) {
        pattern += "*";
    }
    console.log(pattern);
}

function printhollowPattern(n) {
    var pattern = "";
    for (let i = 2; i <= n-1; i++) {
        pattern = "";
        pattern += "*";
        
        for (let j = 1; j <= n-2; j++) {
            pattern += " ";
        }
        
        pattern += "*";
        console.log(pattern);
    }
}

function hollowSquare(n) {
    printFullPattern(n);

    printhollowPattern(n);
    
    printFullPattern(n);
}

hollowSquare(7);