// T-TASK
 console.log("Y-TASK javiblari");

// Shunday function yozing,
//  uni 2 ta array parapetri bolsin. 
// Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin. 
// MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3].

function findIntersection (arr1: number[], arr2: number[]): number[] {
    let natija: number[] = []
    for(let i = 0; i < arr1.length; i++){
        if (arr2.includes(arr1[i])) {
            natija.push(arr1[i]) 
        }
    }
    return natija
}
console.log(findIntersection([1,2,3,4],[1,4,6,8,]))