import Dropdown from "../../components/drop-down/drop-down";
import {
  setUserMonth,
  setUserTeam,
  setUserWeek
} from "../../redux/slice/review-slice";
import { Month, Teams } from "../../shared/enums";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { getTotalWeeksInMonth } from "../../utils";

export default function Nav() {
  const dispatch = useAppDispatch();
  const currentMonth =
    useAppSelector((state) => state.review.team?.month) || Month[1];

  function handleTeamSelect(team: string) {
    dispatch(
      setUserTeam({
        team: Teams[team as keyof typeof Teams]
      })
    );
    console.log(team);
  }
  function handleMonthSelect(month: string) {
    dispatch(
      setUserMonth({
        month: Month[month as keyof typeof Month]
      })
    );
    console.log(month);
  }
  function handleWeekSelect(week: string) {
    dispatch(
      setUserWeek({
        week
      })
    );
    console.log(week);
  }
  return (
    <div className=" flex items-center justify-evenly py-4 bg-green-400">
      <div className="  flex items-center flex-col justify-start md:justify-normal space-y-2 md:space-y-0 md:space-x-1 lg:space-x-6 md:flex-row">
        <p className="text-white capitalize text-xs ss:text-sm md:text-lg ">
          Select your team{" "}
        </p>
        <span className="hidden md:inline-block text-white">: </span>
        <div className="relative text-white ">
          <Dropdown
            title="teams"
            extendedClassNames={` w-full`}
            options={[
              ...Object.keys(Teams).filter((item) => {
                return isNaN(Number(item));
              })
            ]}
            defaultValue={Teams[0]}
            onSelect={handleTeamSelect}
          />
        </div>
      </div>
      <div className="  flex items-center flex-col justify-start md:justify-center space-y-2 md:space-y-0 md:space-x-1 lg:space-x-6 md:flex-row">
        <p className="text-white capitalize text-xs ss:text-sm md:text-lg ">
          Select month{" "}
        </p>
        <span className="hidden md:inline-block text-white">: </span>
        <div className="relative text-white">
          <Dropdown
            title="month"
            extendedClassNames={``}
            options={[
              ...Object.keys(Month).filter((item) => {
                return isNaN(Number(item));
              })
            ]}
            defaultValue={Month[Month.January]}
            onSelect={handleMonthSelect}
          />
        </div>
      </div>
      <div className=" flex items-center flex-col justify-start md:justify-normal space-y-2 md:space-y-0 md:space-x-1 lg:space-x-6 md:flex-row">
        <p className="text-white capitalize text-xs ss:text-sm md:text-lg ">
          Select week{" "}
        </p>
        <span className="hidden md:inline-block text-white">: </span>
        <div className="relative  text-white">
          <Dropdown
            title="week"
            extendedClassNames={``}
            options={getTotalWeeksInMonth(currentMonth as Month)}
            defaultValue={
              getTotalWeeksInMonth(currentMonth as Month).at(0) || ""
            }
            onSelect={handleWeekSelect}
          />
        </div>
      </div>
    </div>
  );
}
// week select dropdown
// department select dropdown
