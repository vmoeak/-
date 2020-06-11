// 1.在一个二维数组中，每一行都按照从左到右递增，每一列都从上到下递增的顺序排序，
// 完成一个函数，输入这个二维数组和一个整数，判断数组中是否含有该整数
const arr = [
    [1, 5, 9],
    [3, 8, 12],
    [6, 9, 19]
];

function hasNum(arr, num) {
    var len = arr.length;
    var i = 0;
    var j = len - 1;
    while (i < len && j >= 0) {
        if (arr[i][j] > num) j--;
        else if (arr[i][j] < num) i++;
        else return true;
        console.log(arr[i][j]);

    }
    return false;
}

console.log(hasNum(arr, 6));
