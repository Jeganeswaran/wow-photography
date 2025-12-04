import React from "react";
import EnterBtn from "../landing/EnterBtn";

const Announcement = () => {
  return (
      <section className="post-section">
        <div className="container">
          <div className="text-center mb-5">
            <h3
              className="f-700 mb-2"
              style={{ color: `rgba(0, 0, 0, 0.6)`, fontSize: `52px` }}
            >
              Submission Information
            </h3>
          </div>
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-10">
              <div className="text-center poppins mb-2">
              Submissions open on World Tourism Day,
              </div>
              <h5 className="text-center theme-red mb-5">27th September 2025  onwards</h5>
              <div className="text-center poppins mb-2">
              The deadline for submissions is 
              </div>
              <h5 className="text-center theme-red mb-5">31st  December 2025 – Midnight.</h5>
              <p
                className="text-center poppins"
                style={{ color: `rgba(0, 0, 0, 0.7)`, lineHeight: 1.8 }}
              >
               Don't miss this opportunity to showcase your artistic talents and compete for these incredible prizes. Get ready to capture WOW moments and create art that will leave a lasting impression.
                <br />
                <br />
                Join us in celebrating the diverse and stunning beauty of Tamil Nadu. We look forward to your participation in WOW Tamil Nadu Awards 2025! 🌟📸🎨.
              </p>

              <div className="flex-center pt-3">
                <EnterBtn className="btn pl-5 pr-5 btn-info" />
              </div>
            </div>
          </div>
        </div>
      </section>

  );
};

export default Announcement;
