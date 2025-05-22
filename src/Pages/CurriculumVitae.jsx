import React from "react";
import myPic3 from "../assets/images/my-pic3.jpg";
import Container from "../Components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faAddressCard,
  faCakeCandles,
  faEnvelope,
  faLocation,
  faLocationArrow,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import infos from "../JavaScripts/info";
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import Activities from "../Components/Activities";
import months from "../JavaScripts/months";
import Education from "../Components/Education";

const CurriculumVitae = () => {

  return (
    <>
      <section className="h-500">
        <Container>
          <div className="border border-font">
            <div className="p-10 bg-iconic flex justify-between items-end">
              <div className="w-1/3">
                <div className="w-50 h-50 border border-black overflow-hidden mb-5">
                  <img
                    src="./src/assets/images/my-pic3.jpg"
                    alt="My Profile"
                    className="my-[-60px]"
                  />
                </div>
                <h1 className="text-3xl font-bold text-background">
                  {infos["name"]}
                </h1>
                <p className="text-background ">{infos["position"]}</p>
              </div>

              <div>
                <h1 className="text-center font-bold text-2xl text-background mb-5">
                  CONTACT INFORMATION
                </h1>
                <ul className="flex flex-col justify-between gap-2 items-start">
                  <li className="text-xl text-background text-left">
                    <FontAwesomeIcon icon={faCakeCandles} className="w-10" />{" "}
                    {infos["birthDay"]}
                    <sup>th</sup> {months[infos["birthMonth"] - 1]},{" "}
                    {infos["birthYear"]}
                  </li>
                  <li className="text-xl text-background text-left">
                    <FontAwesomeIcon icon={faPhone} className="w-10" />
                    {infos["phone"]}
                  </li>
                  <li className="text-xl text-background text-left">
                    <FontAwesomeIcon icon={faEnvelope} className="w-10" />
                    {infos["email"]}
                  </li>
                  <li className="text-xl text-background text-left">
                    <FontAwesomeIcon icon={faLocationDot} className="w-10" />
                    {infos["address"]}
                  </li>
                  <li className="text-xl text-background text-left">
                    <FontAwesomeIcon icon={faGithub} className="w-10" />
                    <a href={infos["gitAcc"]}>{infos["gitAcc"]}</a>
                  </li>
                </ul>
              </div>
            </div> 

            {/* Details */}
            <div className="bg-aboutme p-5 grid grid-cols-2 gap-10 text-justify text-font">
                <div>
                    <h1 className="text-2xl font-bold mb-2">OBJECTIVE</h1>
                    <p>{infos["objective"]}</p>
                </div>

                <div className="row-span-5">
                    <h1 className="text-2xl font-bold mb-2">ACTIVITIES</h1>
                    {infos["activities"].map((activity) => (
                        <Activities key={activity.activityId} activity={activity} />
                    ))}
                </div>

                <div>
                    <h1 className="text-2xl font-bold mb-2">EDUCATION</h1>
                    {infos["schools"].map((education) => (
                        <Education key={education.schoolId} education={education} />
                    ))}
                </div>

                {/* <div>
                    <h1 className="text-2xl font-bold mb-2">CERTIFICATIONS</h1>
                    {infos["certifications"].map((activity) => (
                        <Education key={activity.activityId} activity={activity} />
                    ))}
                </div> */}
            </div>

          </div>
        </Container>
      </section>
    </>
  );
};

export default CurriculumVitae;
