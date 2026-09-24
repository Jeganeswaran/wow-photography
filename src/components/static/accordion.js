import React, { useEffect, useRef } from 'react'
import useToggle from '../../hooks/useToggle';

const Accordion = ({ question, answer, open = false }) => {

    const panel = useRef(null);

    const { toggle, tog } = useToggle(open);

    useEffect(() => {
        const cur = panel.current;
        const { scrollHeight } = cur;
        if (!toggle) {
            cur.style.maxHeight = null;
        } else {
            cur.style.maxHeight = scrollHeight + "px";
        }
    }, [panel, toggle])

    return (
        <>
            <button
                onClick={() => {
                    tog();
                }}
                className={`accordion${toggle ? " acc-active" : ""}`}
            >
                {question}
            </button>
            <div ref={panel} className="acc-panel border-left border-right border-bottom">
                <div className="mt-2 mb-3">{answer}</div>
            </div>
        </>
    )
}

export default Accordion
