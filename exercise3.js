//This is Exercise 3 for the AJAX Lab

let array = ['This', 'That', 'Those', 'The other', 'The fox']      

//Function 1
function makeAllCaps(arr) {
    let newArr = arr.map(word => {
        return word.toUpperCase();
    });
    return newArr
}

//Function 2
function sortWords(arr) {
   let newArr = arr.sort();
   return newArr
}

function inOrder(arr) {
    arr.forEach(word => {
        
        if (/\s/.test(word)) {
            return 'Error!'
        }
    })
    .then(makeAllCaps(arr))
    .then(sortWords(arr))
}

inOrder(array);