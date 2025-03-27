import { useEffect, useRef } from "react";

const HTMLLoad = ({
    htmlData = ''
}) => {
    const htmlRef = useRef(null);

    useEffect(() => {
        if (htmlRef.current) {
            htmlRef.current.innerHTML = htmlData;
        }
    }, [htmlData]);

    return <>
        <div ref={htmlRef}></div>
    </>
}

export default HTMLLoad;