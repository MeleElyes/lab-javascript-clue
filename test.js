// function findUnique(wordsArr) {
//     let firstMotUnique = ""
//     for(i=0;i<wordsArr.length;i++){
//     if((wordsArr.filter(elem => elem === wordsArr[i])).length == 1) { return wordsArr[i] }
//     else if((wordsArr.filter(elem => elem === wordsArr[i])).length = 0){return null}
        
//     //   firstMotUnique = wordsArr[i]
//     // return firstMotUnique} 
  
// }

//     }

// a=['fizz', true, 'bar', 'bazz', 'fizz', 'bazz']

// console.log(a[1]+a[1])

const array = [1,4,5,7,18,554,21]
const array2 = [21,45,821,15,87,11]
let newArray = []
let tableauPlusLong =""
if(array.length>array2.length){tableauPlusLong = array.length }
else {tableauPlusLong = array2.length}

for(i=0,j=0;i<tableauPlusLong,j<tableauPlusLong;i++,j++){

 if(!array[i]){array[i]=0, newArray[i] = array[i] + array2[j]}
 else if (!array2[j]){array2[j]=0, newArray[i] = array[i] + array2[j]}
 else {newArray[i] = array[i] + array2[j]   }

}
console.log(newArray)
