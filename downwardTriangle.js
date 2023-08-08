
function downTriangle(n) {
    var pattern = "";
    for (let i = n; i >= 1; i--) {
        pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "*";    
        }
        console.log(pattern);
    }
}

downTriangle(5);