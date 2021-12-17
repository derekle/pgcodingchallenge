import React from 'react';
import MediaQuery from 'react-responsive'


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
            <MediaQuery orientation='landscape'>
                <div className='desktop'>
                    <section>
                        <div className="Card">
                            <TextCardA />
                            <ClaimButton />
                        </div>
                        <ImageCard imgsrc="assets/cat_image1_desktop.png" altlabel="Feeding Cat"/>
                    </section>
                    <section>
                        <ProductCard imgsrc="assets/cat_treats_fd_minnows_01 3.png" altlabel="Cat Treats Minnows" />
                        <ProductCard imgsrc="assets/cat_treats_fd_minnows_01 3.png" altlabel="Cat Treats Minnows" />
                    </section>
                    <section>
                        <ImageCard imgsrc="assets/cat_image2_desktop.png" altlabel="Feeding Cat" />
                        <div className="Card">
                            <TextCardB />
                        </div>
                    </section>
                </div>
            </MediaQuery>
            <MediaQuery orientation='portrait'>
                <div className='mobile'>
                    
                    <ClaimButton />
                    <section>
                        <ImageCard imgsrc="assets/cat_image1_mobile.png" altlabel="Feeding Cat" />
                        <TextCardA />
                    </section>
                    <section>
                        <ProductCard imgsrc="assets/cat_treats_fd_minnows_01 3.png" altlabel="Cat Treats Minnows" />
                        <TextCardB />
                    </section>
                    <section>
                        <ImageCard imgsrc="assets/cat_image2_mobile.png" altlabel="Feeding Cat" />
                    </section>
                </div>
            </MediaQuery>
        </div>
    )
};

export default Home
