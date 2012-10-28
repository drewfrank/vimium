// Code taken from http://css.dzone.com/news/friday-algorithms-javascript, 
// modified to use a custom comparator.
function mergeSort(arr, cmp) {
    if (arr.length < 2)
        return arr;
    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);
    return merge(mergeSort(left, cmp), mergeSort(right, cmp), cmp);
}
 
function merge(left, right, cmp) {
    var result = [];
    while (left.length && right.length) {
        if (cmp(left[0], right[0]) <= 0) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length)
        result.push(left.shift());
    while (right.length)
        result.push(right.shift());
    return result;
}
