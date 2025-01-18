import React from 'react';
import './Home.scss';
import CCarosel from './Components/CCarosel';
import Awards from './Components/Awards';
import Activities from './Components/Activities';
import Footer from './Components/Footer';
import Work from './Components/Work';
function Index() {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className="w-full pt-20 flex flex-col items-center justify-center">
                <img src="/images/me/tringaLogo.png" className='w-[5%] lg:w-[3%]' alt="" />

                <h3 className="codec second-heading mt-5">Tech Developer</h3>
                <h1 className="title text-[20vw] lg:text-[8vw] composebold w-full text-center">TRINGA IBRAHIMI</h1>
            </div>
            <CCarosel />

            <div className='w-[90%] md:w-[60%]'>
                <h1 className="headings codec">products</h1>
                <hr />
                <div className="fotoel-container mt-10 flex flex-col justify-center items-end startup-containers">
                    <img className='w-[20%] lg:w-[15%] h-auto ' src="/images/startups/fotoel/image2.png" alt="" />
                    <div className="grid grid-cols-12 md:gap-5 mt-20 ">
                        <div className="col-span-12 lg:col-span-6">
                            <img src="/images/startups/fotoel/image.png" className='w-full' alt="" />

                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <img src="/images/startups/fotoel/prototype.png" className='w-full' alt="" />
                        </div>
                    </div>
                    <p className='startup-p codec text-[15px] lg:text-[18px] mt-5'>
                        Fotoel, short for "food to electricity," is a product that automates waste separation by
                        material and transforms food waste into energy using microbial fuel cells. Our first prototype was built with simpler materials and sensors, and now we're nearing the launch of the first fully developed
                        product. We’ve secured funding through multiple hackathons and partnered with various companies and organizations for ongoing support.
                    </p>
                </div>



                <br /><br />
                {/* miket */}
                <div className="fotoel-container mt-10 flex flex-col justify-center startup-s-container ">
                    <img className='w-[20%] lg:w-[15%] h-auto' src="/images/startups/miket/brand.png" alt="" />
                    <div className="grid grid-cols-12 md:gap-5 mt-20 ">
                        <div className="col-span-12 lg:col-span-6">
                            <img src="/images/startups/miket/5.png" className='w-full' alt="" />

                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <img src="/images/startups/miket/4.png" className='w-full' alt="" />
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-12">
                        <p className='startup-p codec text-[15px] lg:text-[18px] mt-5'>
                            Miket, meaning “girlfriends,” is a software platform fostering collaboration among
                            women in ICT. While our primary mission is to empower women, we’re dedicated to supporting
                            the entire ICT community. We’ve organized hackathons, internships, and conferences to create
                            opportunities for everyone interested in ICT. So far, we’ve successfully launched a branch at
                            the University of Pristina in collobartion with USAID, and are excited about future expansions. We’re grateful for the support
                            of major sponsors, including Kodelabs, Red Bull, Gjirafa, and KosovaJob.
                            <br />
                            <a href="https://miket.vercel.app/"><b>Visit Website</b></a>

                        </p>
                    </div>
                </div>

                {/* miket */}
                <div className="fotoel-container mt-10 flex flex-col justify-center items-end startup-s-container ">
                    
                    <img className='w-[10%] lg:w-[8%] h-auto' src="/images/startups/tieducation/tieducation_logo.png" alt="" />
                    <div className="grid grid-cols-12 md:gap-5 mt-10 ">
                        <div className="col-span-12 lg:col-span-6">
                            <img src="/images/startups/tieducation/tieducation.png" className='w-full' alt="" />

                        </div>
                        <div className="col-span-12 lg:col-span-6">
                        <p className='startup-p codec text-[15px] lg:text-[18px] mt-5'>
                            Tieducation is a digital platform designed to enhance and simplify learning experiences
                            through different tools such as collaborative <b className='composebold s-t-b'>2D</b> and <b className='composebold s-t-b'>3D</b> educational games, quizes,
                            competitions, illustrative videos etc..

                        </p>
                        </div>
                    </div>

                    
                </div>

            </div>
            <div className='w-[80%] mt-20'>
                <h1 className="headings codec">speaking experiences</h1>
                <hr />
                <div className="w-full grid grid-cols-12 gap-3">
                    <div className="col-span-12 lg:col-span-6 flex flex-col">
                        <img src="/images/carosel-images/img1.jpg" className='speaker-images' alt="" />
                        <h1 className="speaker-title codec">KosICT <b className='composebold s-t-b'>2024</b></h1>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <img src="/images/speaker/womenpreneur.jpg" className='speaker-images' alt="" />
                        <h1 className="speaker-title codec">WomenPreneur <b className='composebold s-t-b'>2023</b></h1>

                    </div>
                </div>
            </div>

            <Awards />
            <Work />
            <Activities />
            <Footer />
        </div>

    );
}

export default Index;
