// Code your solution here
function findMatching(array, name) {   
   let result = array.filter(arr => arr.toLowerCase() === name.toLowerCase())
   return result
}

function fuzzyMatch(array, string){
    let result = array.filter(arr  => arr[0] === string[0])
    return result
}

function matchName(array, string){
    let result = array.filter(arr => arr.name === string)
    return result
}