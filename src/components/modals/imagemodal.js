import React from "react";
import { CloseModalWrapper, ModalCon, CloseModalBtn } from "./modalbtns";
import useLoadImg from "../../hooks/useLoadImg";
import CenterLoader from "./centerloader";
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    PinterestShareButton
    // RedditShareButton
} from "react-share";

import {
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    PinterestIcon
    // RedditIcon
} from "react-share";

const ImageModal = ({ image, caption = "", share = false }) => {
    const loading = useLoadImg(image);

    return (
        <CloseModalWrapper className="modal-wrapper relative">
            <CloseModalBtn className="btn btn-theme btn-close">
                <i className="fas fa-times"></i>
            </CloseModalBtn>
            {loading ? (
                <CenterLoader />
            ) : (
                <ModalCon>
                    {caption && (
                        <h5 className="text-center text-light mt-2">
                            {caption.toUpperCase()}
                        </h5>
                    )}
                    <img src={image} className="modalprev-img" alt="" />
                    {share && (
                        <div className="d-flex mt-3 justify-content-around align-items-center align-content-center flex-wrap">
                            <FacebookShareButton
                                quote="100 WOW Clicks Shortlisted - wowphotowards.com"
                                url={image}
                            >
                                <FacebookIcon size={32} round={true} />
                            </FacebookShareButton>
                            <TwitterShareButton
                                title="100 WOW Clicks Shortlisted - wowphotowards.com"
                                url={image}
                            >
                                <TwitterIcon size={32} round={true} />
                            </TwitterShareButton>
                            <WhatsappShareButton
                                title="100 WOW Clicks Shortlisted - wowphotowards.com"
                                url={image}
                            >
                                <WhatsappIcon size={32} round={true} />
                            </WhatsappShareButton>
                            <PinterestShareButton
                                url={image}
                                media={image}
                                description="100 WOW Clicks Shortlisted - wowphotowards.com"
                            >
                                <PinterestIcon size={32} round={true} />
                            </PinterestShareButton>
                            {/* <RedditShareButton url={image}>
                                <RedditIcon size={32} round={true} />
                            </RedditShareButton> */}
                        </div>
                    )}
                </ModalCon>
            )}
        </CloseModalWrapper>
    );
};

export default ImageModal;
