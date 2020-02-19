import React from "react";

const Image = ({ url }) => {
    return (
        <div className="apodImage">
            <img src={url} alt="Astronomy Picture of The Day" />
        </div>
    )
}

export default Image;