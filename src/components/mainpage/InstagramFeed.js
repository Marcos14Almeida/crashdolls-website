import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InstagramFeed = () => {
    const [feedData, setFeedData] = useState([]);

    useEffect(() => {
        const fetchInstagramFeed = async () => {
        try {
            // Replace 'YOUR_ACCESS_TOKEN' with your Instagram API Access Token
            const response = await axios.get(
            `https://graph.instagram.com/v12.0/me/media?fields=media_type,media_url,caption,permalink&access_token=YOUR_ACCESS_TOKEN`
            );
            setFeedData(response.data.data);
        } catch (error) {
            console.error('Error fetching Instagram feed:', error);
        }
        };

        fetchInstagramFeed();
    }, []);

    return (
        <div>
        {feedData.map((post) => (
            <div key={post.id}>
            <img src={post.media_url} alt={post.caption} />
            <p>{post.caption}</p>
            </div>
        ))}
        </div>
    );
};

export default InstagramFeed;
