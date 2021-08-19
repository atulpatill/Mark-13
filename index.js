var dateInput = document.querySelector("#bday-input")
var showBtn = document.querySelector("#show-btn")
var output = document.querySelector("#result")

function clickHandler(){
     console.log(dateInput.value)
}

showBtn.addEventListener("click", clickHandler)


var date ={
    day: 05,
    month: 9,
    year: 2021
  }
  


function reverseElement(str){
    var listOfChars = str.split('');
    var reverseListOfChars = listOfChars.reverse();
    var reversedStr = reverseListOfChars.join('');
    return reversedStr
}
// Here we first reversed the string element by using function and then used another function to compare reversed string with input string...If both are same then string is palidrome.

function isPalidrome(str){
    var reverse = reverseElement(str)

    // if(str=== reverse){
    //     return true
    // }else{
    //     return false
    // }

    return str === reverse
}



// console.log(isPalidrome('rama'))
// console.log(isPalidrome('oppo'))
// console.log(isPalidrome('racecar'))
// console.log(isPalidrome('mom'))




  function convertDateToString(date){
    var dateStr = { day:'' , month:'',year:'' }

    var date ={
        day: 2,
        month: 11,
        year: 2020
      }
      
    
    if (date.day < 10){
      dateStr.day =   '0' + date.day //adding string into number results string...thats why we dont use .toString here
    }else {
      dateStr.day = date.day.toString()
    }
    if (date.month < 10){
      dateStr.month =  '0' + date.month
    }else {
      dateStr.month = date.month.toString()
    }
    dateStr.year = date.year.toString()
    return dateStr
    
  
  }
  console.log(convertDateToString(date))
  
//    var dateStrc =convertDateToString(date)
    
//    var c = dateStrc.year.slice(2)
//    console.log(c)


//   var a = ["ram","shyam", "om","krishna","ravi"] 

//   var b = a.slice(3)
//   console.log(b)

function getAllDateFormats(date){
    var dateStr = convertDateToString(date);
  
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(2)
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(2) 
    var yymmdd = dateStr.year.slice(2) + dateStr.month + dateStr.day
  
    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd]
  }
  
  console.log(getAllDateFormats(date))

  function checkPalidromeForAllDateFormats(date){
      var listOfPalidrome = getAllDateFormats(date);
      var flag = false;  //adding default flag..we are returning this variable so.

      for(var i=0;i < listOfPalidrome.length ; i++){
         if(isPalidrome(listOfPalidrome[i])){
             flag = true;
             break;
         }
        }
        return flag
  }
  console.log (checkPalidromeForAllDateFormats())




  