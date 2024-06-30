var searchingTheMaximum = function (arr) {
    var max = arr[0];
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        if (max < arr[i])
            max = arr[i];
    }
    return max;
};
console.log(searchingTheMaximum([5, 7, 16, -5, -22, 15, -2001, 900, -1000]));
