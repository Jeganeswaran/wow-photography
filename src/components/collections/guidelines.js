import React from 'react'

const GuideLines = () => {
    return (
        <div className="pb-2">
            <p className="theme-red mb-2 f-14">Guide lines to upload photographs</p>
            <ol className="guidelines pl-4">
                <li>The submissions must be in the original size or not smaller than 1000 pixels in either height or width.</li>
                <li>Image Size must not exceed more than 20MB.</li>
                <li>File Format , recommended file format is JPEG.</li>
                <li>Submissions will be moderated if disapproved notification will be sent to your registered email.</li>
                <li>Credits / Watermarks are not allowed on the photograph.</li>
            </ol>
        </div>
    )
}

export default GuideLines
