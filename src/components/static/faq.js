import React from "react";
import Accordion from "./accordion";
import SponsorLayout from "../common/sponsorlayout";
import HeaderImg from "../../assets/img/WOW-TN-Banner02.jpg";

const Faq = () => {
  return (
    <div>
      <SponsorLayout image={HeaderImg} title="FAQ">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h5 className="mt-3 mb-3">REGISTRATION PROCESS</h5>
            <Accordion
              question="Who Can Participate?"
              answer="Entries are welcome from photographers across the world. Anyone above 18, whether professional or amateur and regardless of nationality, sex can participate and submit photos & videos captured within Tamil Nadu."
            />
            <Accordion
              question="What are the categories for submission?"
              answer={
                <>
                  <p className="mb-2">
                  The list of categories is given at the bottom of the first page. The categories under photography are as follows:
                  </p>
                  <ol>
                    <li>Places of Worship</li>
                    <li>Arts & Culture</li>
                    <li>Heritage Tourism</li>
                    <li>Joy of Celebrations</li>
                    <li>Tastes of Tamil Nadu</li>
                    <li>Smiles of Tamil Nadu</li>
                    <li>Nature’s Miracle</li>
                    <li>Wild in focus</li>
                    <li>Wanderlust</li>
                    <li>TN in Bird’s Eye view</li>
                  </ol>
                  <p className="mb-2">The categories under video are:</p>
                  <ol>
                    <li>WOW TN Reels</li>
                    <li>TN Video Guide</li>
                  </ol>
                </>
              }
            />
            <Accordion
              question="Is there any registration fee?"
              answer="Registration fee of Rs.200 is applicable per participation and this fee is
              non-refundable. The payment gateway is handled by EEHAAA travel and tourism
              services."
            />
            <Accordion
              question="Should the participant make a payment for every photo or video uploaded or every
              category chosen to upload their submissions?"
              answer="No. Each participant shall pay only the registration fee.. It is a one time payment."
            />
            <Accordion
              question="Is there a limit to the number of entries I can submit?"
              answer="A person can submit 10 photos and 10 videos per registration regardless of any categories."
            />
            <Accordion
              question="Should the 10 photos and 10 videos be submitted in the same category?"
              answer="All participants are allowed to submit 10 photos and 10 videos overall. It can be
              under any of the above categories."
            />
            <Accordion
              question="When submission starts for Wow Tamil Nadu Photo awards 2023?"
              answer="The submission date starts from 27th September 2023, World Tourism Day, the
              same day as the launch of the competition."
            />
            <Accordion
              question="How do I know if you have received my entry?"
              answer="You will receive a confirmation email and will be able to see the status of your entry
              in your profile page, once it gets approved by the admin. If you haven’t received the
              confirmation, check your SPAM folder before contacting us."
            />
            <h5 className="mt-3 mb-3">
              TECHNICAL SPECIFICATIONS OF IMAGES AND VIDEOS
            </h5>
            <Accordion
              question="What are the dimensions of photograph and format?"
              answer="Submitted photographs must have minimum resolution of 1000x1000 pixels and maximum allowed file size is up to 25MB. The recommended file format is JPEG, RAW and TIFF."
            />
            <Accordion
              question="What is the format of the video and video size?"
              answer={
                <>
                  <p className="mb-2">
                    Videos should be in MP4 Format. The submitted clips must be
                    minimum 1 minute and maximum 3 minutes. Submissions
                    exceeding 3 minutes may be disqualified. Videos must be
                    uploaded as one single file in the highest quality (minimum
                    of HD 1080 and maximum of 4K quality).
                  </p>
                  <p className="mb-2">
                    For final judging the management may request unedited
                    footages.
                  </p>
                </>
              }
            />
            <Accordion
              question="How to submit link for video category?"
              answer={
                <>
                  <p className="mb-2">
                    We request all the video files in MP4 format uploaded in any
                    of the below mentioned platforms and Submit only the link in
                    your{" "}
                    <a href="https://wowtamilnadu.com/">wowtamilnadu.com</a>{" "}
                    video section.
                  </p>
                  <p className="mb-2">Accepted downloadable links from:</p>
                  <ul>
                    <li>
                      <a href="http://wetransfer.com">Wetransfer.com</a>
                    </li>
                    <li>
                      <a href="http://sendbigfiles.com/">Sendbigfiles.com</a>
                    </li>
                    <li>
                      <a href="http://transferbigfiles.com/">
                        Transferbigfiles.com
                      </a>
                    </li>
                  </ul>
                  <p className="mb-2">
                    <u>
                      NOTE : YouTube Links will not be accepted for the entry.
                    </u>
                  </p>
                </>
              }
            />
            <Accordion
              question="Can the entries be sent through mail?"
              answer="No. All images must be submitted through our official website wowtamilnadu.com"
            />
            <Accordion
              question="Should I give any specific name for the submitted video?"
              answer="For easy access we suggest to submit the videos with “Your Name-video Name.mp4” as part of the video file name so it can be more easily linked to the entry form and video title.
              Example: Raja-ooty.mp4"
            />
            <h5 className="mt-3 mb-3">SUBMISSION </h5>
            <Accordion
              question="Do my images need to be taken within a certain timeframe?"
              answer="EEntries in wow tamilnadu photography and video awards 2023 competition must have been taken in 2023 (January 1 to December 25, 2023) or at least five years older. Photos could have already been submitted to other competitions as well."
            />
            <Accordion
              question="Can a work be submitted regardless of when it was taken?"
              answer="Minimum five year old pictures till recent pictures reflecting Tamil Nadu or Tamil Nadu tourism are welcome."
            />
            <Accordion
              question="Can I submit an entry that I have submitted to another contest as well?"
              answer="It's up to participants' decision to submit any number of photographs that have already been submitted to other contests currently happening. A person can also submit photographs that have won in previous contests."
            />
            <Accordion
              question="Can I enter my images in other competitions?"
              answer="Yes. You may enter into other photography competitions; we have no exclusivity rights to your images."
            />
            <Accordion
              question="Which photos are eligible?"
              answer="Photos and videos taken in any digital format are allowed. Pictures taken must be of high resolution."
            />
            <Accordion
              question="I am unable to upload my images, videos what has to be done?"
              answer="Please ensure that your images and videos are in the given format and size. Sometimes the images shall be too large for the local internet connection. In such a case, you may resize the image and try again. If the error continues, please contact us."
            />
            <Accordion
              question="Can I submit retouched images? And how much can I retouch the entry?"
              answer="Images that have been retouched will be accepted but limited to Colour Correction, Brightness, Contrast and Cropping. Both colour and monochrome images will be accepted."
            />
            <Accordion
              question="Should I submit only an original work?"
              answer="Yes. The contest rules require that any photograph that you submit for this contest must be your own original work and free from third-party copyright restrictions. Photographs that do not meet this requirement are not eligible for this contest."
            />
            <Accordion
              question="Can the submission be done as a team work?"
              answer="Even if you submit in a group, only the name of the representative will appear on the entry, so any prizes awarded will go to the individual representative, not to the group."
            />
            <Accordion
              question="Why is an entry to video contest rejected?"
              answer="Anything considered ‘inappropriate” will be disqualified. (Examples include: inappropriate language, obscenities, nudity, vulgarity, anything that appears to promote underage drinking or drug use, etc.)"
            />
            <Accordion
              question="Will photos be accepted with watermarks?"
              answer="No. All images must be clear of any copyright information so that the photographer’s identity is not revealed by the image.  In the interest of fairness, the judges are not allowed to see the names of the photographers when judging. Any images that do contain photographer’s names on the image or any other watermark/copyright information will be disqualified from being presented to the judges."
            />
            <h5 className="mt-3 mb-3">POST SUBMISSION</h5>
            <Accordion
              question="Can I change my images after submission?"
              answer="No. Once you have selected to ‘submit’ your images into a specified category, you will not be able to change it."
            />
            <Accordion
              question="Will I be able to change the category of submission after I submit under a different category?"
              answer="No, category cannot be changed once the photograph is submitted and approved by the admin."
            />
            <Accordion
              question="What are the terms for copyrights?? Will my image be misused??"
              answer="All entrants understand that any image submitted to the competition may be used by WOW Tamil Nadu management and sponsors related to the current event, for the sole purpose of promoting the competition and the photographers themselves. The sponsors will also have the rights to use the photographs for their own marketing purposes for the event and for their brand. No claims will be made in this regards"
            />
            <Accordion
              question="How the judging is conducted?"
              answer="The judging panel shall comprise of recognized people in the field of photography, journalism and tourism officials to judge the submitted photographs and videos. Judges decision is final."
            />
            <Accordion
              question="Is judging anonymous?"
              answer="Yes, we respect the integrity of the photographers and therefore judging is anonymous. Judges will not be aware about any of the entrants."
            />
            <Accordion
              question="If there are further queries, how could I contact you?"
              answer="We would be delighted to hear from you! Please do not hesitate to drop a message and we will get back to you as soon as possible."
            />
            <Accordion
              question="How the winners will be intimated?"
              answer="Award winners will be notified through calls, email and social media. Special invite will be sent for the winners to attend the award ceremony."
            />
            <Accordion
              question="When is the deadline for submissions for the 2021 Wow Tamil Nadu photo and video awards?"
              answer="The deadline for the Wow Tamil Nadu photo and video awards is January 16, 2023 by midnight."
            /> 
             <h5 className="mt-3 mb-3">PRIZES & AWARDS</h5>
            <Accordion
              question="When will the announcement be made about the winners?"
              answer={
                <>
                  <p className="mb-2">
                  The winners will be intimated on January 10th 2023 and the announcement will be made on 15th January 2023 during Pongal. Details about the award ceremony will be disclosed later.
                  </p>
                  
                </>
              }
            />
          </div>
        </div>
      </SponsorLayout>
    </div>
  );
};

export default Faq;
