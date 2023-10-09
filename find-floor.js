function findFloor(arr, num) {
    let rInd = arr.length - 1
    if (arr[rInd] < num) return arr[rInd];
    else {
        let lInd = 0;
        let mInd;
        while (lInd <= rInd) {
            mInd = Math.floor((lInd + rInd) / 2);
            if (arr[mInd] < num) {
                if (arr[mInd+1] >= num) return arr[mInd];
                lInd = mInd + 1;
            } else if (arr[mInd] >= num) {
                rInd = mInd - 1;
            } 
        }
    }
    return -1;
}

module.exports = findFloor