import React from 'react'
import Accordion from './accordion';
import SponsorLayout from '../common/sponsorlayout';

const Faq = () => {
    return (
        <div>
            <SponsorLayout title="FAQ">
                <div className="row">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-8">
                        <h5 className="mt-3 mb-3">APPLICATION CATEGORIES</h5>
                        <Accordion
                            question="Who can participate?"
                            answer="Entries are open worldwide to photographers anyone over 18, whether professional or amateur and regardless of nationality, sex."
                        />
                        <Accordion
                            question="Is there any entry fee?"
                            answer="Entry fee is applicable."
                        />
                        <Accordion
                            question="What are the categories?"
                            answer={(
                                <>
                                    <p className="mb-2">12 unique categories to enter such as,</p>
                                    <ul>
                                        <li>Wanderlust</li>
                                        <li>Animal Kingdom</li>
                                        <li>Architecture</li>
                                        <li>World of Smiles</li>
                                        <li>Happy Street</li>
                                        <li>Nature’s Miracle</li>
                                        <li>Life Style</li>
                                        <li>Action-n-Motion</li>
                                        <li>Joy of Celebration</li>
                                        <li>Bird&#39;s Eye View</li>
                                        <li>Taste buds</li>
                                        <li>Creative in Focus</li>
                                    </ul>
                                </>
                            )}
                        />
                        <Accordion
                            question="How do I know if you received my entry?"
                            answer="You will receive a confirmation email and will be able to see the status of your entered photos in your profile page, once it gets approved by admin. If you haven’t received the confirmation, check your SPAM folder before contacting us."
                        />
                        <h5 className="mt-3 mb-3">ELIGIBILITY</h5>
                        <Accordion
                            question="What are the limitations of photograph sizes and format?"
                            answer="Submitted photographs must have minimum resolution of 1000x1000 pixels and maximum allowed file size is 20MB. The recommended file format is JPEG."
                        />
                        <Accordion
                            question="Can a work be submitted regardless of when it was taken?"
                            answer="You can submit works that have previously been uploaded to personal albums online or that have been posted to your personal website or a social networking service for non-commercial purposes."
                        />
                        <Accordion
                            question="Can I submit an entry that I have submitted to another contest as well?"
                            answer="All Photographes are allowed . Each contest themes and objectives are different so it’s up participants decision to submit any Photographs that have been submitted to other contests currently underway, including similar works already won prizes in other contests are eligible . Future claim is participants responsibility."
                        />
                        <Accordion
                            question="Is there a limit to the number of entries I can submit?"
                            answer="There are no limits on the amount of entries you submit."
                        />
                        <Accordion
                            question="Which photos are eligible?"
                            answer="Photographs taken with any Camera and Mobile phones are eligible. You can make use of
                            any camera/equipment for the contest. The pictures taken using mobile phones should be
                            with higher resolution version."
                        />
                        <Accordion
                            question="Can I submit retouched Images? And how much can I retouch the entry?"
                            answer="Images that have been retouched will be accepted but limited to Colour Correction, Brightness, Contrast and Cropping. Both colour and monochrome images will be accepted."
                        />
                        <Accordion
                            question="Can I enter my images in other competitions?"
                            answer="Yes. You may enter into other photography competitions; we have no exclusivity rights to
                            your images."
                        />
                        <h5 className="mt-3 mb-3">OTHER MATTERS</h5>
                        <Accordion
                            question="Photographs that I submit have to be my own original work?"
                            answer="Yes. The contest rules require that any photograph that you submit for this contest must be your own original work and otherwise free from third-party copyright restrictions. Photographs that do not meet this requirement are not eligible for this contest."
                        />
                        <Accordion
                            question="Can a group submit a work together?"
                            answer="Even if you submit in a group, only the name of the representative will appear on the entry, so any prizes awarded will go to the individual representative, not to the group."
                        />
                        <Accordion
                            question="Can I submit my entry on a CD or other physical media?"
                            answer="Entries are accepted only via Internet through our official website wowphotoawards.com"
                        />
                        <Accordion
                            question="Will you accept photos with watermarks?"
                            answer="No. All images must be clear of any copyright information so that the photographer’s identity
                            is not revealed by the image.  In the interest of fairness, the judges are not allowed to see
                            the names of the photographers when judging. Any images that do contain photographer’s
                            names on the image or any other watermark/copyright information will be disqualified from
                            being presented to the judges."
                        />
                        <Accordion
                            question="Can I able to change the category after submission?"
                            answer="No, category cannot be changed once the photograph is submitted and approved by the
                            admin."
                        />
                        <Accordion
                            question="Do the sponsors have rights to use my image? Will my images be used in any other
                            way?"
                            answer="All entrants understand that any image submitted to the competition may be used by WOW
                            Photo Awards, for the sole purpose of promoting the competition and the photographers
                            themselves."
                        />
                        <h5 className="mt-3 mb-3">ABOUT JUDGING</h5>
                        <Accordion
                            question="How the judging is conducted?"
                            answer="Your photos will be judged by a panel of recognized industry experts, journalists, sponsors and professional photographers."
                        />
                        <Accordion
                            question="How do I know if I have won the contest?"
                            answer="We do notify award winners by email but sometimes notifications get caught in spam filters or get a non-deliverable return if you change your provided email address. You can always check our site for the list of the winners. "
                        />
                        <h5 className="mt-3 mb-3">PRIZES & AWARDS</h5>
                        <Accordion
                            question="What are the prizes & awards?"
                            answer={(
                                <>
                                    <h6 className="font-weight-bold">WOW PHOTO of the Year 2019</h6>
                                    <ul>
                                        <li>International Surprise Trip</li>
                                        <li>US$2000 Grand</li>
                                        <li>WOW Photo Awards Trophy</li>
                                        <li>Photo Published in Exclusive International PR</li>
                                    </ul>
                                    <h6 className="font-weight-bold">WOW Creative Eye Award 2019</h6>
                                    <ul>
                                        <li>International Surprise Trip</li>
                                        <li>US$1000 Grand</li>
                                        <li>WOW Photo Awards Trophy</li>
                                        <li>Photo Published in Exclusive International PR</li>
                                    </ul>
                                    <h6 className="font-weight-bold">6 Explorer Awards</h6>
                                    <ul>
                                        <li>All Paid International Trip</li>
                                        <li>WOW Photo Awards Trophy</li>
                                    </ul>
                                    <h6 className="font-weight-bold">12 Best Category Awards</h6>
                                    <ul>
                                        <li>WOW AWARDS Trophy & Certificates</li>
                                    </ul>
                                    <h6 className="font-weight-bold">100 BEST WOW Appreciation Awards</h6>
                                    <ul>
                                        <li>Appreciation Certificates</li>
                                    </ul>
                                </>
                            )}
                        />
                    </div>
                </div>
            </SponsorLayout>
        </div>
    )
}

export default Faq