function sortedFrequency(arr, num) {
    let firstOccurence = arr[0] === num ? 0 : findLeft(arr,num);
    let lastOccurence = arr[arr.length-1] === num ? arr.length-1 : findRight(arr,num);
    if (firstOccurence === -1 && lastOccurence === -1) return -1
    return lastOccurence - firstOccurence + 1;
}

function findLeft(arr, num) {
    lInd = 0;
    rInd = arr.length - 1;
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
    return -1
}

function findRight(arr, num) {
    lInd = 0;
    rInd = arr.length - 1;
    while (lInd <= rInd) {
        mInd = Math.floor((lInd + rInd) / 2);
        if (arr[mInd] > num) {
            rInd = mInd - 1;
        } else if (arr[mInd] < num) {
            lInd = mInd + 1;
        } else {
            if (arr[mInd+1] !== num) return mInd;
            else lInd += 1;
        }
    }
    return -1
}

module.exports = sortedFrequency