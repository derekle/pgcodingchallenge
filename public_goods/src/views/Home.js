import React from 'react';
import ImageCard from '../components/imgCard';
import TextCardA from '../components/txtCardA';
import TextCardB from '../components/txtCardB';
import ProductCard from '../components/productCard';
const Home = (props) => {
    return (
        <div>
            <TextCardA />
            <ImageCard imgsrc="assets/cat_image1_desktop.png" altlabel="Feeding Cat"/>
            <ProductCard imgsrc="assets/cat_treats_fd_minnows_01 3.png" altlabel="Cat Treats Minnows" />
            <ImageCard imgsrc="assets/cat_image2_desktop.png" altlabel="Feeding Cat" />
            <TextCardB />
        </div>
        

    )
};

export default Home
