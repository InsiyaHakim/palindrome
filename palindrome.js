const palindrome1 = (str) => {
    str = str.toLowerCase(); //0(n)
    //pushing each character in array
    let letters = [...str];//0(n)
    let reverseWord = ""; //0(1)

    //reversing the string
    //0(1) for char and 0(n) for loop
    for(let char in str) reverseWord += letters.pop(); //both assignment and pop() is 0(1)
    //Note: we can also reverse as reverseWord = letters.split("").reverse().join("");

    return reverseWord == str;//0(1)
}
console.log(palindrome1("Racecar")) //true
//TC: 0(n)
//SC: 0(n)

const palindrome2 = (str) => {
    str = str.toLowerCase(); //0(n)
    //0(1) for assigning i
    for(let i = 0; i < str.length-1; i++){ //0(n) for loop
        //here we are checking if the i position and strings last position -i is equivalent
        if(str[i] !== str[str.length -1 -i]) return false; //0(1)
    }
    return true;
}
console.log(palindrome2("match")) //false
//TC: 0(n)
//SC: 0(n)


const palindrome3 = (str) => {
    if(str.length === 1) return true; //0(1)
    //if we have 2 characters left then we compare them
    if(str.length === 2) return str[0] === str[1]; //0(1)

    return  str[0] === str[str.length -1] //0(1)
        ?  palindrome3(str.slice(1,-1)) //0(n) the function is being called n times before reaching base case
        :  false;
}
console.log(palindrome3("match")) //false
//TC: 0(n) I think
//SC: 0(1)


const palindrome4 = (str) => {
    let length = str.length;
    let start = str.substring(0, Math.floor(str.length / 2)).toLowerCase();
    let end = str.substring(length, Math.floor(str.length / 2)).toLowerCase();
    let reverseEnd = end.split("").reverse().join("");

    return start === reverseEnd;

}
console.log(palindrome4("todo")) //false