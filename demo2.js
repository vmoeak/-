//2.求两个数组的交集和并集
const arr1 = [1,2,3,4]
const arr2 = [3,4,5,6]
function union(arr1,arr2){
    var arr = arr1.concat(arr2);
    arr = Array.form(new Set(arr));
    return arr;
}

function joinSet(arr1, arr2) {
    var arr = arr1.concat(arr2);
    var obj = sameNum(arr);
    var result = []
    for (var item in obj) {
        if (obj[item] > 1) {
            result.push(parseInt(item));
        }
    }
    return result;
}

// 3.给定一个数组，获取数组中重复的数及重复次数
function sameNum(array) {
    var obj = {};
    array.forEach(function (val) {
        if (obj[val]) {
            obj[val]++;
        } else {
            obj[val] = 1;
        }
    });
    return obj;
}
