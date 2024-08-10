/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
      if(s.length != t.length)
        return false;

    let sMap = new Map();

    for(let i = 0; i < s.length; i++){
        let thisLetter = s[i];

        sMap.set(thisLetter, (sMap.get(thisLetter) ?? 0) + 1);
    }

    for(let i = 0; i < t.length; i++){
        let thisLetter = t[i];

        let letterInMap = sMap.get(thisLetter);

        if(letterInMap == undefined){
            return false;
        }else{
          sMap.set(thisLetter, letterInMap - 1);

          if(sMap.get(thisLetter) === 0){
             sMap.delete(thisLetter);
          }
        }
    }

      return true;
    }
