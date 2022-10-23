let nums = [2, 7, 11, 15];

// PRINTING OUT THE ACTUAL VALUE
let twoSum = function(nums, target) {
    let maps = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        let num2 = target - num1;
        if (maps.has(num2)) {
            return [nums[i], num2];
        }
        maps.set(num1, i);
    }
};
console.log(twoSum(nums, 9));

// PRINTING OUT THE INDICE OF THE VALUES

// var twoSum = function(nums, target) {
//     let maps = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         // let num1 = nums[i];
//         let num2 = target - nums[i];
//         if (maps.has(num2)) {
//             return [maps.get(num2), i];
//         }
//         maps.set(nums[i], i);
//     }
// };