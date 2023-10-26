/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let buffer = new Map();
    let isValid = true;
    
    for(let i = 0; i < s.length; i++){
         const thisLetter = s.charAt(i);
         if (buffer.has(thisLetter)){
             buffer.set(thisLetter, buffer.get(thisLetter) + 1);
         }else{
             buffer.set(thisLetter, 1);
         }
    }

    for(let i = 0; i < t.length; i++){
        const thisLetter = t.charAt(i);

          if (buffer.has(thisLetter)){
              let minus1 = buffer.get(thisLetter) - 1;
              if(minus1 === 0){
                  buffer.delete(thisLetter);
              }else{
                  buffer.set(thisLetter, minus1);
              }
          }else{
              isValid = false;
              break;
          }
    }
    
    if(isValid)
        return buffer.size === 0
    return false;
};
