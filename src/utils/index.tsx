import { ReactNode } from "react";

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
enum DaysOfTheWeek {
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
}
function getCurrentDay() {
  const currentDate = new Date();
  const currentDay = DaysOfTheWeek[currentDate.getDay()];
  return currentDay;
}

function RenderComponentWithProps({
  children,
  props,
  additionalClassName
}: {
  children: ReactNode;
  props: object[];
  additionalClassName: string[];
}) {
  return (
    <div {...props} className={`w-full mx-auto ${additionalClassName}`}>
      {children}
    </div>
  );
}
export {
  RenderComponentWithProps,
  getCurrentDay,
  convertPxToRem,
  uniqueArray,
  minutesToMilliseconds
};
