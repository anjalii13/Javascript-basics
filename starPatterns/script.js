function AsteriskPattern(){
    let pattern = "";
    for(let i=1; i<=5; i++){
        for(let j=1; j<=i; j++){
            pattern += "* ";
        }
        pattern += "\n";
    }
    console.log(pattern);
}

AsteriskPattern();

function squareAsteriskPattern(){
    let pattern = "";
    for(let i=1; i<=5; i++){
        for(let j=1; j<=5; j++){
            pattern += "* ";
        }
        pattern += "\n";
    }
    console.log(pattern);
}

squareAsteriskPattern();

function rightTrianglePattern(){
    let pattern = "";
    for(let i=1; i<=5; i++){
        for(let j=1; j<=i; j++){
            pattern += "* ";
        }
        pattern += "\n";
    }
    console.log(pattern);
}

rightTrianglePattern();

function invertedRightTrianglePattern(){
    let pattern = "";
    for(let i=5; i>=1; i--){
        for(let j=1; j<=i; j++){
            pattern += "* ";
        }
        pattern += "\n";
    }
    console.log(pattern);
}

invertedRightTrianglePattern();

function pyramidPattern(){
    let pattern = "";
    for(let i=1; i<=5; i++){
        for(let j=1; j<=5-i; j++){
            pattern += "  ";
        }
        for(let k=1; k<=2*i-1; k++){
            pattern += "* ";
        }
        pattern += "\n";
    }
    console.log(pattern);
}

pyramidPattern();

function invertedPyramidPattern(){
    let pattern = "";
    for(let i=5; i>=1; i--){
        for(let j=1; j<=5-i; j++){
            pattern += "  ";
        }
        for(let k=1; k<=2*i-1; k++){
            pattern += "* ";
        }
        pattern += "\n";
    }
    console.log(pattern);
}

invertedPyramidPattern();