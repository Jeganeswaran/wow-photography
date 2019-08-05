import React, { useEffect } from 'react'
import useScript from '../../hooks/useScript';

window.fbAsyncInit = function () {
    window.FB.init({
        appId: '685670868535724',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.3'
    });
};


const FbPage = ({
    href = "https://www.facebook.com/wowphotoawards/",
    width = "",
    height = "",
    smallHeader = "true",
    adaptHeader = "true",
    children
}) => {

    const [fbloaded] = useScript(
        'https://connect.facebook.net/en_IN/sdk.js'
    );

    useEffect(() => {
        if (fbloaded) {
            window.fbAsyncInit();
        }
    }, [fbloaded])

    if (fbloaded) {
        return (
            <div
                className="fb-page"
                data-href={href}
                data-tabs="timeline"
                data-width={width}
                data-height={height}
                data-small-header={smallHeader}
                data-adapt-container-width="true"
                data-hide-cover="true"
                data-show-facepile="false"
            >
                <blockquote cite="https://www.facebook.com/wowphotoawards/" className="fb-xfbml-parse-ignore">
                    {children}
                </blockquote>
            </div>
        )
    }
    return null
}

export default FbPage