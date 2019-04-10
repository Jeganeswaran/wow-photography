import React from 'react'
// import useDataSubmit from '../../hooks/http/useDataSubmit';
import { urlParams } from '../../utils/urlParams';

const ActivatePage = ({ location }) => {
    const data =  urlParams(location.search)
    console.log(data);
    return (
        <div>

        </div>
    )
}

export default ActivatePage
