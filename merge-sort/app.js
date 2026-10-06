function mergeSort(arr) {
    if(arr.length <= 1) return arr; //base case


    const mid = Math.floor(arr.length-1/ 2 ); //mid point off the unsorted array
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    //merge the results
    return merge(mergeSort(left), mergeSort(right));

}


function merge(left , right) {
    let tempArr = [];
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length){
        if(left[i]< right[j]){
            tempArr.push(left[i]);
            i++;
        } else {
            tempArr.push(right[j]);
            j++;
        }
    }

    //append any elements which is left behind right or left arrays
    return tempArr.concat(left.slice(i)).concat(right.slice(j));

}




export {mergeSort, merge};