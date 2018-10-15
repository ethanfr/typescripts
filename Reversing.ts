

// var reverse= function<T>(obj: T[]): T[]
// {
//     return obj.reverse();
// }



function reverse<T>(arr):T {

return arr.reverse();
}

let arr = [1,3,5,77,8] ;
let rev_arr = reverse<number>(arr) ;
console.log(rev_arr) ;

let arr2 = ["a", "b", "c", "d"] ;
let rev_arr2 = reverse<string>(arr2) ;
console.log(rev_arr2) ;
