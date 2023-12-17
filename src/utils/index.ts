import { DaysOfTheWeek, Month } from "../shared/enums";

const convertPxToRem = (numInPx: number) => {
  return numInPx / 16 + "rem";
};

function minutesToMilliseconds(minutes: number) {
  return minutes * 60000;
}
function uniqueArray(arr: string[]) {
  // Create a Set from the input array to automatically remove duplicates
  const uniqueSet = new Set(arr);

  // Convert the Set back to an array
  const uniqueArray = Array.from(uniqueSet);

  return uniqueArray;
}

function getCurrentDay() {
  const currentDate = new Date();
  const currentDay = DaysOfTheWeek[currentDate.getDay()];
  return currentDay;
}

// function getWeeksInMonth(month: Month, startDayOfWeek = 0): number {
//   const currentYear = new Date().getFullYear();

//   // Ensure month is in the range 1-12
//   month = Math.min(12, Math.max(1, month));

//   // Get the first and last day of the month
//   const firstDay = new Date(currentYear, month - 1, 1);
//   const lastDay = new Date(currentYear, month, 0);

//   // Set the start day of the week (0 for Sunday, 1 for Monday, etc.)
//   const startDay = (firstDay.getDay() - startDayOfWeek + 7) % 7;

//   // Calculate the total number of days in the month
//   const totalDays = lastDay.getDate();

//   // Calculate the number of full weeks
//   const fullWeeks = Math.floor((totalDays - startDay + 6) / 7);

//   // Check if there's a partial week at the beginning or end
//   const hasPartialWeek =
//     (startDay > 0 && totalDays >= startDay) ||
//     lastDay.getDay() !== startDayOfWeek;

//   // Return the total number of weeks
//   return fullWeeks + (hasPartialWeek ? 1 : 0);
// }
function getTotalWeeksInMonth(month: Month): string[] {
  const currentYear = new Date().getFullYear();

  const calendar = new Date(currentYear, month - 1, 1); // Set the date to the first day of the month

  const firstDay = calendar.getDay();
  const lastDay = new Date(
    calendar.getFullYear(),
    calendar.getMonth() + 1,
    0
  ).getDate();

  const totalDays = lastDay + firstDay - 1;
  const totalWeeks = Math.ceil(totalDays / 7);

  const weeks = Array.from({ length: totalWeeks }, (_, i) => `week ${i + 1}`);

  // (weeks, " : is the number of weeks");
  return weeks;
}
export {
  getTotalWeeksInMonth,
  getCurrentDay,
  convertPxToRem,
  uniqueArray,
  minutesToMilliseconds
};
