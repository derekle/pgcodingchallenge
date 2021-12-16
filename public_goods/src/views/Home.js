import React from 'react';
import ImageCard from '../components/imgCard';
import TextCardA from '../components/txtCardA';
const Home = (props) => {
    return (
        <div>
            <TextCardA />
            <ImageCard imgsrc="assets/cat_image1_desktop.png" altlabel="Feeding Cat"/>
            <ImageCard imgsrc="assets/cat_image2_desktop.png" altlabel="Feeding Cat"/>
        </div>
        

    )
};

export default Home
