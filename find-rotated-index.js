function findRotatedIndex(arr, num) {
    if (arr[0] === num) return 0;
    const pivotInd = findPivot(arr);
    let lInd;
    let rInd;
    let mInd;
    if (arr[0] < num) {
        lInd = 1;
        rInd = pivotInd-1;
    } else {
        lInd = pivotInd;
        rInd = arr.length-1;
    }
    while (lInd <= rInd) {
        mInd = Math.floor((lInd + rInd) / 2);
        if (arr[mInd] < num) {
            lInd = mInd + 1;
        } else if (arr[mInd] > num) {
            rInd = mInd - 1;
        } else {
            if (arr[mInd-1] !== num) return mInd;
            else rInd -= 1;
        }
    }
    return -1;
}

function findPivot(arr) {
    let lInd = 0;
    let rInd = arr.length-1;
    let mInd;
    while (lInd <= rInd) {
        mInd = Math.floor((lInd + rInd) / 2);
        if (arr[mInd] > arr[mInd+1]) return mInd+1;
        else if (arr[mInd] < arr[mInd-1]) return mInd;
        else if (arr[lInd] <= arr[mInd]) lInd = mInd +1;
        else rInd = mInd -1;
    }
}

module.exports = findRotatedIndex