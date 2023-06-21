/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length)
       return false;

    const characterMap = new Map();

    for(let i = 0; i < s.length; i++){
        const thisChar = s.charAt(i);

        if(!characterMap.has(thisChar)){
            characterMap.set(thisChar, 1)
        }else{
            characterMap.set(thisChar, characterMap.get(thisChar) + 1);
        }
    }

    for(let i = 0; i < t.length; i++){
        const thisChar = t.charAt(i);

        if(!characterMap.has(thisChar)){
            return false;
        }

        if(characterMap.get(thisChar) === 1){
            characterMap.delete(thisChar);
        }else{
            characterMap.set(thisChar, characterMap.get(thisChar) - 1);
        }
    }

    return characterMap.size === 0;
};
