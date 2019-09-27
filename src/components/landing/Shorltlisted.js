import React from "react";
import { OpenImg } from "../modals/modalbtns";
import shortlistphotos from "./shortlistphotos";

function Shorltlisted() {
    return (
        <div className="post-section">
            <div className="container">
                <div className="masonry">
                    {shortlistphotos.map(({ id, photo, thumbnail }, index) => (
                        <OpenImg
                            className="w-100 cursor-zoom-in mb-3"
                            modalProps={{
                                image: photo,
                                share: true
                            }}
                            src={thumbnail}
                            alt={""}
                            key={"photo--" + id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Shorltlisted;
