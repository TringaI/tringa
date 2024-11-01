import React, { useRef, useEffect } from "react";
import "./CCarosel.scss";

const CCarosel = () => {
    const carouselRef = useRef(null);

    useEffect(() => {
        const handleScroll = (e) => {
            // Check if the carousel is defined and log the scroll event
            if (carouselRef.current) {
                console.log("Scrolling detected:", e.deltaY);

                // Prevent the page from scrolling vertically
                e.preventDefault();

                // Use scrollBy for smoother scrolling
                carouselRef.current.scrollBy({
                    left: e.deltaY, // Scroll right on scroll down, left on scroll up
                    behavior: "smooth"
                });
            }
        };

        // Add the scroll event listener
        window.addEventListener("wheel", handleScroll, { passive: false });

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    return (
        <div className="main-cont h-[130vh] lg:h-[100vh] mt-20">
            <section className="main">
                <div className="outer" ref={carouselRef}>
                    <div className="inner">
                        <div className="slide">
                            <img src="/images/carosel-images/img2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="inner">
                        <div className="slide">
                            <img src="/images/carosel-images/img1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="inner">
                        <div className="slide">
                            <img src="/images/carosel-images/img3.jpg" alt="" />
                        </div>
                    </div>
                    <div className="inner">
                        <div className="slide">
                            <img src="/images/carosel-images/image.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CCarosel;
