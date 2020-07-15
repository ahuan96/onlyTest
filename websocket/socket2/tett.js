
function getMaxProfit(arr) {
    // 排序
    arr.sort((a,b)=>{
        return a-b
    })
    // 返回差
    return (arr[arr.length-1] - arr[0])
}

let arr = [1,4,5,2]
console.log(getMax(arr))