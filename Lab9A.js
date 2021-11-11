var start = new Date();
console.log(start);

function stopTime(){
  var stop = new Date();
  console.log(stop);
  var final = start.getTime() - stop.setTime();
  console.log(final);
  final = final/600;
  alert("You have been on the page for " + final + " seconds");
}
