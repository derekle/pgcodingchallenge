import React from 'react';
import ImageCard from '../components/imgCard';
import TextCardA from '../components/txtCardA';
import TextCardB from '../components/txtCardB';
import ProductCard from '../components/productCard';
import ClaimButton from '../components/claimButton';
import '../css/home.css'

const Home = (props) => {
    /*
    post-submission comments: I probably would've added a function to conditionally render the homepage + topnav based on device screen width, or through some 3rd party hook.
    I would then encapsulate those into their own files, like <HomeMobile className="home-Mobile"/> or <HomeDesktop className="home-Desktop"/>. Then I can probably style their css accordingly.
    I was comparing my submission and noticed some minute details were off, such as whitespace after the first section, just before the product images. 
    */
    return (
        <div>
            <section className="Section">
                <div>
                    <TextCardA />
                    <ClaimButton />
                </div>
                <ImageCard imgsrc="assets/cat_image1_desktop.png" altlabel="Feeding Cat"/>
            </section>
            <section className="Section">
                <ProductCard imgsrc="assets/cat_treats_fd_minnows_01 3.png" altlabel="Cat Treats Minnows" />
                <ProductCard imgsrc="assets/cat_treats_fd_minnows_01 3.png" altlabel="Cat Treats Minnows" />
            </section>
            <section className="Section">
                <ImageCard imgsrc="assets/cat_image2_desktop.png" altlabel="Feeding Cat" />
                <TextCardB />
            </section>
        </div>
        

    )
};

export default Home
