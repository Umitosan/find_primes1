$(document).ready(function() {

  $("#mainform").submit(function(event){
    event.preventDefault();

    var userBaseArray = [];
    var workingArray = [];

    var userStartNum = parseInt($("#input1").val());
    // console.log("parse int userinput: " , parseInt($("#input1").val()));

    // create array of num 2 through n
    for (i = 2; i <= userStartNum; i += 1) {
      userBaseArray.push(i);
    }

    workingArray = userBaseArray;
    console.log("userBaseArray: " , userBaseArray)

    // new loop to remove non-primes from array
    for (i = 2; i < userStartNum ; i += 1) {
      // remove multiples of i from workingArray
      for (j = i+i ; j <= userStartNum ; j = j + i) {
        // console.log("j to remove = " , j);
        workingArray.splice(workingArray.indexOf(j),1,"-");
        console.log("workingArray = " , workingArray);
      }
    }

    console.log("workingArray after primes: " , workingArray);

    // remove "-" from array
    var newarr = workingArray.join(" ");

    $("#numberofprimes").text("");
    $("#primelist").text("");

    $("#numberofprimes").append(workingArray.length);
    $("#primelist").append(workingArray);


  });

});
