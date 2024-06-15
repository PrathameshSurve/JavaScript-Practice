var majorityElement = function(nums) {
    let biggest = 0;
    for (let num of nums){
        if(num > biggest){
            biggest = num;
        }
    }
    console.log(biggest)
};

majorityElement([3,2,3, 5, 5, 2, 9, 20,10, 19,5])
