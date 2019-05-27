import { useEffect } from 'react';
import useScript from "./useScript"

export default function useFbPage() {
    const [fbloaded] = useScript(
        'https://connect.facebook.net/en_IN/sdk.js#xfbml=1&version=v3.3&appId=685670868535724&autoLogAppEvents=1'
    );

    useEffect(() => {
        if (fbloaded) {
            window.FB.api(
                "/wowphotoawards/feed",
                function (response) {
                    if (response && !response.error) {
                        /* handle the result */
                        console.log(response);
                    }
                }
            );
        }
    }, [fbloaded])

}