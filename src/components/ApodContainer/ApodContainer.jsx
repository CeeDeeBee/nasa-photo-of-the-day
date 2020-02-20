import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./Title";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "./Image";
import Explanation from "./Explanation";

const ApodContainer = () => {
    const [apodData, setApodData] = useState({});
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        const day = selectedDate.getDate();
        const month = selectedDate.getMonth() + 1;
        const year = selectedDate.getFullYear();
        axios
            .get(`https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=kS5WZiKNXcbuoFjmFbmgL6KkwjVl3xxSpxUUc31H`)
            .then(res => setApodData(res.data))
            .catch(err => console.log(err));
    }, [selectedDate]);

    return (
        <section className="apod-container">
            <Title title={apodData.title} />
            <div>
                <h3>Select Date</h3>
                <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
            </div>
            <Image url={apodData.url} />
            <Explanation explanation={apodData.explanation} />
        </section>
    )
}

export default ApodContainer;