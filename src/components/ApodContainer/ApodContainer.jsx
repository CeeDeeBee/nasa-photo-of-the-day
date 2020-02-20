import React, { useState, useEffect } from "react";
import axios from "axios";
// import Title from "./Title";
// import Image from "./Image";
// import Explanation from "./Explanation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import {
//     Card, Button, CardImg, CardTitle, CardText,
//     CardSubtitle, CardBody, Container, Collapse
// } from 'reactstrap';
// import styled from "styled-components";

// const StyledButton = styled(Button)`
//     width: 50%;
//     margin: 2% auto;
//     background: #0b3d91;

//     &:focus {
//         background: #0b3d91;
//         color: white;
//     }
// `;

const ApodContainer = () => {
    const [apodData, setApodData] = useState({});
    const [selectedDate, setSelectedDate] = useState(new Date());
    // const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const day = selectedDate.getDate();
        const month = selectedDate.getMonth() + 1;
        const year = selectedDate.getFullYear();
        axios
            .get(`https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=kS5WZiKNXcbuoFjmFbmgL6KkwjVl3xxSpxUUc31H`)
            .then(res => setApodData(res.data))
            .catch(err => console.log(err));
    }, [selectedDate]);

    // const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="card-div max-w-6xl rounded overflow-hidden shadow-lg">
            <img className="w-full" src={apodData.url} alt="Astronomy Picture of The Day" />
            <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">{apodData.title}</div>
                <p className="text-gray-700 text-base">{apodData.explanation}</p>
            </div>
            <div className="px-6 pb-4">
                <div>Currently Viewing Photo From</div>
                <DatePicker className="m-2 date-picker" selected={selectedDate} onChange={date => setSelectedDate(date)} />
            </div>
        </div>
        // <Container>
        //     <Card>
        //         <CardBody>
        //             <CardTitle>
        //                 <h2>{apodData.title}</h2>
        //             </CardTitle>
        //             <CardSubtitle>
        //                 <span>Select Date: </span>
        //                 <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />
        //             </CardSubtitle>
        //         </CardBody>
        //         <CardImg width="100%" src={apodData.url} alt="Astronomy Picture of The Day" />
        //         <Collapse isOpen={isOpen}>
        //             <CardBody>
        //                 <CardText>{apodData.explanation}</CardText>
        //             </CardBody>
        //         </Collapse>
        //         <StyledButton onClick={toggle}>{isOpen ? "Collapse" : `More About ${apodData.title}`}</StyledButton>
        //     </Card>
        // </Container>
    )
}

export default ApodContainer;