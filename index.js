
var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {

  katzDeliLine.push(name);
  return ('Welcome, ' + name + ". You are number " + katzDeliLine.length + " in line.");
}


function nowServing(katzDeliLine) {
    if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
    } else {
      for (var i = 0; i < katzDeliLine.length; i += 1) {

      return ('Currently serving ' + katzDeliLine.shift() + ".");
    }
  }
}



function currentLine(katzDeliLine) {
var lineOrder = [];

if (katzDeliLine.length === 0) {
return "The line is currently empty." ;
}

for (var i = 0; i < katzDeliLine.length; i += 1) {
  var name = katzDeliLine[i];
 lineOrder.push(' ' + (i + 1) + '. ' + name);
}
return "The line is currently:" + lineOrder;
}
console.log (takeANumber(katzDeliLine, "Bill"));
console.log (takeANumber(katzDeliLine, "Jane"));
console.log (takeANumber(katzDeliLine, 'Ann'))
