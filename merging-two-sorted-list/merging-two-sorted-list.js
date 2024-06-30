function MergingTwoSortedLists(arr1, arr2) {
    var mergedArray = [];
    var i = 0;
    var j = 0;
    // Traverse both arrays and add smaller element to mergedArray
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        }
        else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    // Add remaining elements of arr1 (if any)
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    // Add remaining elements of arr2 (if any)
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}
console.log(MergingTwoSortedLists([13, 19, 24, 55, 69, 83, 91, 94], [47, 54, 63, 76, 90, 93, 98, 99]));
