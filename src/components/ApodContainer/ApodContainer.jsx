import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./Title";
import Image from "./Image";
import Explanation from "./Explanation";

const ApodContainer = () => {
    const [apodData, setApodData] = useState({});

    useEffect(() => {
        console.log('test');
        axios.get("https://api.nasa.gov/planetary/apod?api_key=kS5WZiKNXcbuoFjmFbmgL6KkwjVl3xxSpxUUc31H")
            .then(res => setApodData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <section className="apod-container">
            <Title title={apodData.title} />
            <Image url={apodData.url} />
            <Explanation explanation={apodData.explanation} />
        </section>
    )
}

export default ApodContainer;