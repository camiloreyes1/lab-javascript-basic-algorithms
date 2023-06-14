// Iteration 1: Names and Input

let driverName = "Juan";
let navName = "Alberto";

let hacker1 = `The driver's name is ${driverName}`;
let hacker2 = `The navigator's name is ${navName}`;

console.log(hacker1);
console.log(hacker2);

// Iteration 2: Conditionals

if (driverName.length > navName.length) {
    console.log("The driver has the longest name, it has " + 
    driverName.length + " characters." )
} else if (navName.length > driverName.length) {
    console.log("The navigator has the longest name, it has " + 
    navName.length + " characters." )
} else {
    console.log("Wow, you both have equally long names, " + 
    driverName.length + " characters!")
}

// Iteration 3: Loops

for (let i = 0; i < driverName.length; i++) {
    driverName.toUpperCase;
    console.log(driverName.toUpperCase()[i])

}

console.log( );

let word = " ";

for (let j = navName.length - 1; j >= 0; j--)
{
    console.log(navName[j]); 
}

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor sed nisi id dictum. Donec condimentum, massa eu euismod finibus, elit nibh placerat lacus, sed ullamcorper nisi augue quis massa. Maecenas at massa lorem. Quisque sit amet bibendum sem. Donec tempus purus mauris, molestie ullamcorper lectus elementum ut. Duis mi ex, luctus id mollis eu, gravida sit amet libero. Fusce placerat, nisl a auctor convallis, ligula nunc porttitor dui, ut consequat nunc orci a mauris. Proin mollis sem ipsum, eget interdum velit tincidunt nec. Phasellus a nulla vitae mi ullamcorper vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus scelerisque dui eu elit hendrerit feugiat ac a tellus. Ut dignissim ultrices ante, et congue risus tempus non. Maecenas varius sed ante eget accumsan. Phasellus ut sollicitudin felis. Nullam mollis sapien in vulputate fringilla. Donec cursus augue at rutrum tempor. Quisque ullamcorper quis urna in consequat. Vivamus convallis eget metus a tempor. Aliquam quis diam nisl. Pellentesque condimentum urna lectus, eget sagittis erat elementum nec. Vestibulum interdum sollicitudin dui et malesuada. Quisque cursus lectus vel lorem placerat, sit amet ornare neque ultrices. Integer quam mi, ullamcorper et nisl volutpat, dapibus pulvinar urna. Duis ut ultrices eros, in sodales orci. Mauris imperdiet interdum tellus at sodales. Pellentesque feugiat aliquet sapien, eget fringilla nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula iaculis leo, ac luctus felis fringilla et. Maecenas congue, elit quis condimentum ornare, odio libero consectetur diam, eu bibendum metus mauris ut enim. Sed condimentum lacus pellentesque erat euismod tincidunt. Phasellus placerat lectus lectus, vitae feugiat nisl porttitor vitae. Mauris vel sapien diam. Cras sagittis pretium orci, ut cursus justo venenatis a. Vivamus consequat eros a erat convallis, eu condimentum augue malesuada. Aliquam at nunc efficitur, ullamcorper risus id, dapibus enim. Vivamus sollicitudin urna nec porttitor condimentum. Praesent sit amet nisl vel magna hendrerit dictum. Maecenas feugiat quis libero eget mollis. Duis ut ultrices neque. Mauris varius nisl sed ultricies euismod. Phasellus nibh felis, sagittis vel finibus at, bibendum finibus sapien. Nulla facilisi."

console.log( );

function wordNum(str) {
    return str.split(" ").length;
}

console.log(wordNum(longText));

const phraseToCheck = "Amor, Roma";

let word1="";
let word2="";

for (let i=0; i<phraseToCheck.length; i++) {
    if (phraseToCheck [i]!=" "&&phraseToCheck[i]!="!"&&phraseToCheck[i] !="?"&&phraseToCheck [i]!=" '"){
        word1+=phraseToCheck[i].toLowerCase()
    }
}

for (let i=0;i<phraseToCheck. length; i++) {

    if (phraseToCheck [i]!=" "&&phraseToCheck[i]!="!"&&phraseToCheck[i] !="?"&&phraseToCheck [i]!=" '"){ 
        word2+=phraseToCheck[i].toLowerCase()

    }
}

if (word1 != word2) {
    console.log("Your phrase is NOT a palindrome")
} else {
    console.log("Your phrase is a palindrome")
}

console.log ("Word 1: ", word2)
console.log ("Word 2: ", word1)



console.log(word)