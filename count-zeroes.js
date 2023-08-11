function countZeroes(arr) {
    lInd = 0;
    rInd = arr.length - 1;
    if (arr[lInd] === 0) return arr.length;
    else if (arr[rInd] === 1) return 0;
    while (lInd <= rInd) {
        mInd = Math.floor((lInd + rInd) / 2);
        if (arr[mInd] === 1) {
            if (arr[mInd + 1] === 0) {
                return (arr.length - (mInd + 1));
            } else {
                lInd = mInd + 1;
            }
        } else {
            if (arr[mInd - 1] === 1) {
                return (arr.length - (mInd));
            } else {
                rInd = mInd -1;
            }
        }
    }
}

module.exports = countZeroes