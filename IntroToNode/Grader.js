function average(numarray){
    var total = 0; var averagescore = 0;
    for (var i=0; i<numarray.length; i++){
        total = numarray    [i] + total;
    }
    averagescore = total / numarray.length;
    averagescore = Math.round(averagescore);
    console.log(averagescore);
}

var scores1 = [90, 98, 89, 100, 100, 86, 94];
average(scores1);

var scores2 = [40, 65, 77, 82, 80, 54, 63, 73, 95, 49];
average(scores2);