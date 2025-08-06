function lengthOfSubstring(s){
    let longest = 0;

    for(let i = 0; i < s.length; i++){
        let seen = "";

        for (let j = i; j < s.length; j++){
            let char = s[j];

            if (seen.includes(char)){
                break;
            }else{
                seen += char;
                longest = Math.max(longest,seen.length);
            }
        }
    }
    return longest;
} 

console.log(lengthOfSubstring("bbbbb"));
console.log(lengthOfSubstring("pwwkew"));
console.log(lengthOfSubstring("abcabcbb"));  
console.log(lengthOfSubstring(""));