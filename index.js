
function reverseElement(src){
    var listOfChars = src.split('');
    var reverseListOfChars = listOfChars.reverse();
    var reverseSrc = reverseListOfChars.join('');
    return reverseSrc
}





console.log(reverseElement('ramA'))