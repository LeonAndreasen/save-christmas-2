import { randomArray, swap } from './helpers.js'

const a = randomArray(100, 10)

const arr = [5,8,3,1]
function bubblesort(a){
for (let j = 0; j < a.length -1;  j++) {
    for (let i = 0; i < a.length -j -1; i++) {
    if (a[i]>a[i+1]) {
    swap(a,i ,i, + 1)  
    }
    }}
}
bubblesort(arr)
console.log(arr)