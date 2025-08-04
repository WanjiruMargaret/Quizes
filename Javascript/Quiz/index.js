function uniqueName(nam){
    const charCounts = {};

    for (let char of nam.toLowerCase()){
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    for (let i = 0; i<nam.length; i++){
        const char = nam[i];
        if (charCounts[char.toLowerCase()] === 1){
            return char;
        }
    }
    return null;
}
console.log(uniqueName("Hello"));   // "H"
console.log(uniqueName("Swiss"));   // "w"
console.log(uniqueName("aabbcc"));  // null
