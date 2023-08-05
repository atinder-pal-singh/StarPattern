
function SquarePattern(n) {
    for (let i = 1; i <= n; i++) {
        var pattern = "";
        for (let j = 1; j <= n; j++) {
            pattern += "*";
        }
        console.log(pattern);
    }
}

SquarePattern(4);