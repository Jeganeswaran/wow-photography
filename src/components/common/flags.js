import React, { useEffect } from 'react';
import '../../assets/css/flags.min.css';
import { withRouter, Link } from "react-router-dom";
import { urlParams } from "../../utils/urlParams";

const languages = [
    {
        title: "English",
        flag: "us",
        lan: "en"
    },
    {
        title: "Chinese (Simplified)",
        flag: "cn",
        lan: "zh-CN"
    },
    {
        title: "Chinese (Traditional)",
        flag: "tw",
        lan: "zh-TW"
    },
    {
        title: "Spanish",
        flag: "es",
        lan: "es"
    },
    {
        title: "French",
        flag: "fr",
        lan: "fr"
    },
    {
        title: "German",
        flag: "de",
        lan: "de"
    },
    {
        title: "Hindi",
        flag: "in",
        lan: "hi"
    },
    {
        title: "Italian",
        flag: "it",
        lan: "it"
    },
    {
        title: "Japanese",
        flag: "jp",
        lan: "ja"
    },
    {
        title: "Korean",
        flag: "kr",
        lan: "ko"
    },
    {
        title: "Portuguese",
        flag: "pt",
        lan: "pt"
    },
    {
        title: "Russian",
        flag: "ru",
        lan: "ru"
    }
];

const Flags = withRouter(({ match, location }) => {

    useEffect(() => {
        if (location.search) {
            const { hl } = urlParams(location.search);
            const ggtr = document.querySelector("#google_translate_element .goog-te-combo");
            if (hl && ggtr) {
                ggtr.value = hl;
                // taken from
                // https://stackoverflow.com/questions/2856513/how-can-i-trigger-an-onchange-event-manually
                if ("createEvent" in document) {
                    let evt = document.createEvent("HTMLEvents");
                    evt.initEvent("change", false, true);
                    ggtr.dispatchEvent(evt);
                } else {
                    ggtr.fireEvent("onchange");
                }
            }
        }
    }, [location.search]);

    return (
        <div className="d-flex justify-content-center pb-1 flex-wrap">
            {
                languages.map((l, index) => (
                    <Link
                        to={`/?hl=${l.lan}`}
                        key={index + l.lan}
                        title={l.title}
                        className={`flag flag-${l.flag} mr-2 mb-2`}
                    >
                    </Link>
                ))
            }
        </div>
    )
})

export default Flags