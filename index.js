var katzDeliLine = [];

function takeANumber(line, person) {
  katzDeliLine = katzDeliLine.push(person);
  return "Welcome, " + person + ". You are number " + line.length + " in line.";
}