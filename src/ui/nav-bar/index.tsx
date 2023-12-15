import Dropdown from "../../components/drop-down/drop-down";

export default function Nav() {
  function handleTeamSelect(team: string) {
    console.log(team);
  }
  function handleMonthSelect(month: string) {
    console.log(month);
  }
  function handleWeekSelect(week: string) {
    console.log(week);
  }
  return (
    <div className=" flex items-center justify-evenly py-4">
      <div className="  flex items-center justify-normal space-x-6">
        <p>select your team : </p>
        <div className="relative ">
          <Dropdown
            title="teams"
            extendedClassNames={` w-full`}
            options={["develop", "design", "deploy"]}
            defaultValue=""
            onSelect={handleTeamSelect}
          />
        </div>
      </div>
      <div className="  flex items-center justify-normal space-x-6">
        <p>select month : </p>
        <div className="relative">
          <Dropdown
            title="month"
            extendedClassNames={``}
            options={["january", "february", "march"]}
            defaultValue=""
            onSelect={handleMonthSelect}
          />
        </div>
      </div>
      <div className="  flex items-center justify-normal space-x-6">
        <p>select your team : </p>
        <div className="relative">
          <Dropdown
            title="week"
            extendedClassNames={``}
            options={["week 1", "week 2", "week 3"]}
            defaultValue=""
            onSelect={handleWeekSelect}
          />
        </div>
      </div>
    </div>
  );
}
// week select dropdown
// department select dropdown