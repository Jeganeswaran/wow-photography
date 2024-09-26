import React from "react";
import SponsorLayout from "../common/sponsorlayout";
import FbPage from "./FbPage";
import Loader from "../common/loader";
import HeaderImg from "../../assets/img/WOW-TN-Banner01.jpg";

const About = () => {
  return (
    <div>
      <SponsorLayout image={HeaderImg} title="Announcements">
        <div className="row">
          <div className="col-sm-8 mb-3">
            <ul className="f-16 f-600 annoucelist">
              <li>Submissions open on World Tourism Day, September 27th, starting at 20:00 hrs IST</li>
              <li>The deadline for submissions is, 31st December 2024 – Midnight. </li>
              <li>
                WOW Tamil Nadu Team will contact the winners only via email /
                Mobile numbers that are used during registration.
              </li>
              <li>
                Announcements will be made on our official website and Social
                Media handles. Please follow our website and social media’s
                account for regular updates.
              </li>
            </ul>
          </div>
          <div className="col-sm-4 mb-3">
            <FbPage>
              <div className="flex-center p-3">
                <Loader width="50px" height="50px" />
              </div>
            </FbPage>
          </div>
        </div>
      </SponsorLayout>
    </div>
  );
};

export default About;
