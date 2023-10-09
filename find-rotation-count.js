function findRotationCount(arr) {
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
    return 0;
}

module.exports = findRotationCount