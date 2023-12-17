import { DashBoardChart } from "../../components/dashboard-chart";
import { Link } from "react-router-dom";
import React from "react";
import ReviewImg from "../../assets/img/images.jpeg";
import { TypeAnimation } from "react-type-animation";

const Dashboard: React.FC = () => {
  return (
    <div className=" flex flex-col items-center text-center justify-start space-y-8 lg:space-y-0 lg:grid grid-cols-2  gap-2 xl:gap-8 w-full h-full">
      {/* Section for asking the user about their work */}
      <div className="relative w-full h-full flex flex-col space-y-10 p-2 xl:p-6 bg-white ">
        <div className="">
          <div className=" uppercase text-2xl bg-gradient-to-r from-primary-400 to-primary-100 bg-clip-text text-transparent transition-all duration-500 ease-in-out hover:scale-210 text-center hover:animate-pulse cursor-default font-semibold mb-4 ">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Performance Review",
                3000,

                "Job Assessment",
                4000,
                "Career Feedback",
                6000,
                "Work Review",
                5000,

                "Employee Evaluation",

                2000
              ]}
              wrapper="span"
              speed={30}
              style={{ fontSize: "2rem", display: "inline-block" }}
              repeat={Infinity}
              cursor={true}
            />
            {/* Performance Review{" "} */}
          </div>
          <div className=" flex flex-col items-center justify-center space-y-2 font-semibold text-xl py-2">
            <p>We hope you have had a great week ?</p>
            <p className=" text-center">
              Take a few minutes to take the review quiz <br /> Report your
              progress and challenges faces during the <br />
              course of the week
            </p>
          </div>
        </div>
        <div className=" h-[20rem]">
          <img
            src={ReviewImg}
            alt="Review"
            className=" w-full md:w-3/5 lg:w-full xl:w-4/5 mx-auto h-full hover:animate-pulse"
          />
        </div>
        <div className=" flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-600 mb-4 w-3/4 mx-auto text-center font-medium text-xl ">
            Answer a few questions about your work to help us understand your
            progress and challenges.
          </p>
          <Link
            to="/review"
            className=" hover:bg-primary-200 hover:text-primary-800 transition-colors duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-100 active:shadow-none capitalize text-primary-100 p-2 rounded-lg border border-primary-200"
          >
            Take Review
          </Link>
        </div>
      </div>

      {/* Section for showing accumulated results */}
      <div className="relative w-full h-full flex flex-col space-y-10 p-6 bg-white ">
        <div className="">
          <div className=" uppercase text-2xl bg-gradient-to-r from-primary-400 to-primary-100 bg-clip-text text-transparent transition-all duration-500 ease-in-out hover:scale-210 text-center hover:animate-pulse cursor-default font-semibold mb-4 ">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Accumulated Results",
                3000,

                "Aggregated Achievements",
                4000,
                "Total Results",
                5000,
                "Combined Outcomes",
                4000,

                "Collected Performance",

                3000
              ]}
              wrapper="span"
              speed={35}
              style={{ fontSize: "2rem", display: "inline-block" }}
              repeat={Infinity}
              cursor={true}
            />
            {/* Performance Review{" "} */}
          </div>
          <div className=" flex flex-col items-center justify-center space-y-2 font-semibold text-xl py-2">
            <p>We commend you for your work so far!!</p>
            <p>View your performance progress chart below</p>
          </div>
        </div>
        <div className="relative h-[20rem] ">
          <div className=" w-full h-full ss:px-4 overflow-x-scroll">
            {<DashBoardChart />}
            {/* <AppChart /> */}
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-600 mb-4 w-3/4 mx-auto text-center font-medium text-xl ">
            View your accumulated results and performance based on your quiz
            responses.
          </p>
          <Link
            to="#"
            className=" hover:bg-primary-200 hover:text-primary-800 transition-colors duration-300 ease-in-out hover:shadow-lg hover:shadow-primary-100 active:shadow-none capitalize text-primary-100 p-2 rounded-lg border border-primary-200"
          >
            View Results
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
