/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
//dumbass solution
//     //format string
//     //might need to .trim()
//     s = s.toLocaleLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/gi, '');

//    const reversed = s.split('').reverse().join('');

// //    console.log(s);
// //    console.log(reversed);

//     if(s === reversed)
//         return true;

//     return false

//smarter solution
s = s.toLocaleLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/gi, '');

let l = 0; //left pointer
let r = s.length -1; //right pointer

while(l<=r){
    if(s[l] !== s[r]){
        return false;
    }
    l++;
    r--;
}

return true;
};
