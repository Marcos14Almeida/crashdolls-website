import React from 'react';
import './UserProfile.css'; // Import your CSS file for styling
import { Link } from "react-router-dom";

const UserProfile = () => {

    const userData = {
        name: "John Doe",
        imageUrl: "john-doe.jpg",
        likedBands: ["Liked Band 1", "Liked Band 2", "Liked Band 3"],
        musicalSimilarity: "85%",
        location: "New York, USA",
        age: 30,
        sex: "Male",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo odio vel nunc pharetra, id auctor turpis fringilla. Vestibulum id euismod erat."
    };

    return (
        <div className="profile-container">

        <div className="title">My Profile</div>


        <img
            className="profile-image"
            src={userData.imageUrl}
            alt="User Image"
        />
        <div className="profile-name">{userData.name}</div>
        <ul className="band-list">
            {userData.likedBands.map((band, index) => (
            <li key={index}>{band}</li>
            ))}
        </ul>
        <div className="user-info">
            <div>Musical Similarity Score: {userData.musicalSimilarity}</div>
            <div>Location: {userData.location}</div>
            <div>Age: {userData.age}</div>
            <div>Sex: {userData.sex}</div>
        </div>
        <p className="description">
            {userData.description}
        </p>

        <div className="center-block">
        <Link to="/MainMenu">
            <div className="button-big">
                <div className="text">NEXT</div>
            </div>
        </Link>
        </div>

        </div>
    );
    };

export default UserProfile;