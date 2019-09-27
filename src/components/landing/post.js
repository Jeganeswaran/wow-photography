import React from "react";
import { OpenImg } from "../modals/modalbtns";

const Post = ({ thumbnail, photo, title, share = false }) => {
    return (
        <div className="post">
            <div className="post-img-holder">
                <div className="post-img">
                    <OpenImg
                        modalProps={{ image: photo, share }}
                        src={thumbnail}
                        alt={""}
                    />
                </div>
            </div>
            {title && (
                <div className="p-1">
                    {title && <span>© {title}</span>}
                </div>
            )}
        </div>
    );
};

export default Post;
