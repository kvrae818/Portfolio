//adds together the num of hours actually slept
const getActualSleepHours = () => 8 + 7 + 9 + 6 + 4 + 8 + 6;
console.log(`You got: ${getActualSleepHours()} hours of sleep last night`);

// returns ideal sleep hours
const getIdealSleepHours = idealHours => idealHours * 7;

//calculates how much sleep debt there is
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
//compares actual and ideal sleep hours and prints message
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep')
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed')
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You should got ' + (idealSleepHours - actualSleepHours) + 'hour(s) less sleep than you needed this week. Go get some rest')
  }
}

calculateSleepDebt();
