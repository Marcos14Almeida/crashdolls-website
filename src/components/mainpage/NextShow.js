import React from 'react';
import './NextShow.css'; // Import your CSS file
import maozinha from '../../assets/vector-maozinha.svg';
import { Link } from 'react-router-dom';

const data = [
    {
        title: 'Show 1',
        location: "Rua Teodoro Sampaio, 124 - São Paulo, SP",
        date: "25/08 - 19hrs",
        link: 'https://ge.globo.com/',
        image: './me.jpg',
    },
    {
        title: 'Show 2',
        location: "Rua Teodoro Sampaio, 124 - São Paulo, SP",
        date: "25/08 - 19hrs",
        link: 'https://ge.globo.com/',
        image: './me.jpg',
    },
    {
        title: 'Show 3',
        location: "Rua Teodoro Sampaio, 124 - São Paulo, SP",
        date: "25/08 - 19hrs",
        link: 'https://ge.globo.com/',
        image: './background.png',
    },
    {
        title: 'Show 4',
        location: "Rua Teodoro Sampaio, 124 - São Paulo, SP",
        date: "25/08 - 19hrs",
        link: 'https://ge.globo.com/',
        image: './background.png',
    },
  // Add more data items as needed
];

const NextShow = () => {
    return (          
        <div className="next-show-section" id="shows">

            <div className="title-section">
                <h1 className="pink-title">Next Shows</h1>
                <img src={maozinha} className="titleSVG" />
            </div>

            <div className="horizontal-list-container">
                    {data.map((item, index) => (
                    <div className="show-container" key={index}>
                        <div className="text-wrapper">{item.title}</div>
                        <img className="image" alt={item.title} src={item.image} />
                        <a href={item.link}> 
                            <div className="tickets-button">
                                    <div className="tickets-text">Buy Tickets</div>
                            </div>
                        </a>
                        <p className="p">{item.location}</p>
                        <div className="text-wrapper-2">{item.date}</div>
                    </div>
                    ))}
            </div>

            <Link to="/listshows">
                <button className="custom-button">More</button>
            </Link>

        </div>
    );
};

export default NextShow;
