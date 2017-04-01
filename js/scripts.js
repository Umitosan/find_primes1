$(document).ready(function() {
  $("#mainform").submit(function(event){
    event.preventDefault();

    // create Array containing 2-startNum
    var createStartArr = function(startNum) {
      let tmpArr = [];
      for (i = 2; i <= startNum; i += 1) {
        tmpArr.push(i);
      }
      return tmpArr;
    }; ////

    // grab user's input
    var userNum = parseInt($("#input1").val());
    // generate working set of numbers
    var workingArray = createStartArr(userNum);
    console.log("workingArray = ", workingArray);

    // remove non-primes from array
    var removeNonPrime = function(tmpArr) {
      for (i = 2; i < userNum ; i += 1) {
        // remove multiples of i from workingArray
        for (j = i+i ; j <= userNum ; j = j + i) {
          tmpArr.splice(tmpArr.indexOf(j),1,"-");
        }
      }
      return tmpArr;
    };  ////

    workingArray = removeNonPrime(workingArray);
    var numOfPrimes = workingArray.length;

    // filter out all "-"
    var filteredArr = workingArray.filter(function(tmpIn) {
      if (tmpIn !== "-") {
        return tmpIn;
      }
    });

    var newstr2 = filteredArr.join(" ");
    // use regex to replace all "-"
    // var newstr2 = newstr.replace(/-/g, "");

    // clear output
    $("#numberofprimes").text("");
    $("#primelist").text("");
    // show new output
    $("#numberofprimes").append(numOfPrimes);
    $("#primelist").append(newstr2);

  });
});
