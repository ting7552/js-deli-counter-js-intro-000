var katzDeliLine = [];
function takeANumber(katzDeliLine, name) {

  katzDeliLine.push(name);
  return ('Welcome, ' + name + ". You are number " + katzDeliLine.length + " in line.");
}

function nowServing(katzDeliLine) {

  for (var i = 0; i < katzDeliLine.length; i += 1) {
    if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
    } else {
      return ('Currently serving ' + katzDeliLine.shift() + ".");
    }
  }
}
function currentLine(katzDeliLine) {
var lineOrder = [];

if (katzDeliLine.length === 0) {
return "The line is curently empty." ;
}

for (var i = 0; i < katzDeliLine.length; i += 1) {
  var name = katzDeliLine[i];
 lineOrder.push(' ' + (i + 1) + '. ' + name);
}
return "the line is currently:" + lineOrder;
}
