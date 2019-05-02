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
                                        <li>World of Smiles</li>
                                        <li>Bird's Eye View</li>
                                        <li>Creative Focus</li>
                                        <li>Action-n-Motion</li>
                                        <li>Celebrations</li>
                                        <li>Wanderlust</li>
                                        <li>Food & Beverages</li>
                                        <li>Living Structures</li>
                                        <li>Wild in Focus</li>
                                        <li>Life Style</li>
                                        <li>Street Photography</li>
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
                            answer="Photographs taken with any Camera and Mobile phones are eligible. You can make use of any camera/equipment for the contest."
                        />
                        <Accordion
                            question="Can I submit retouched Images? And how much can I retouch the entry?"
                            answer="Images that have been retouched will be accepted but limited to Colour Correction, Brightness, Contrast and Cropping. Both colour and monochrome images will be accepted."
                        />
                        <Accordion
                            question="Can I enter my images in other competitions?"
                            answer="Yes. You may enter into other photography competitions, we have no exclusivity rights to your images."
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
                            answer="We will display a credit alongside your photo as it appears on the site. We do not accept photos with watermarks."
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