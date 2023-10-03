//function scuberGreetingForFeet(){
  // Write your code here!
  function scuberGreetingForFeet(rideHeight) {
    if (rideHeight > 2500) {
      return "No can do.";
    } else if (rideHeight > 2000) {
      return "I will gladly take your thirty bucks.";
    } else if (rideHeight < 400) {
      return "This one is on me!";
    }
  }
  
  console.log(scuberGreetingForFeet(199));
  console.log(scuberGreetingForFeet(2001));
  console.log(scuberGreetingForFeet(2501));
  


  // The ternaryCheckCity function implemented

// Assuming you have the ternaryCheckCity function implemented

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}
console.log(ternaryCheckCity('NYC'));
console.log(ternaryCheckCity('Texas'));


function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
console.log(switchOnCharmFromTip('generous'));
console.log(switchOnCharmFromTip('not as generous'));
console.log(switchOnCharmFromTip('tip'));

  
  




// }
// function ternaryCheckCity(){
//   // Write your conamede here!
// }

