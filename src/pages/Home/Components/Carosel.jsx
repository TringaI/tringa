import React, { useState, useEffect } from 'react';
import './Home-Components.scss';

function Carosel() {
    const [rotation, setRotation] = useState(0); // Cumulative rotation value
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [initialRotation, setInitialRotation] = useState(0); // Store rotation at the start of drag

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setInitialRotation(rotation); // Save the current rotation when dragging starts
        e.preventDefault(); // Prevent default behavior
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return; // Only rotate if dragging

        const deltaX = e.clientX - startX; // Calculate mouse movement
        setRotation(initialRotation + deltaX / 2); // Update the rotation based on the initial rotation
    };

    const handleMouseUp = () => {
        if (!isDragging) return; // Only proceed if dragging
        setIsDragging(false); // End dragging
        // No need to update anything here; rotation is already updated during the drag
    };

    useEffect(() => {
        // Attach mousemove and mouseup listeners only when dragging
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div className="w-full">
            <div className="absolute w-full h-[80vh] panorama mt-[-23%] left-[24%]">
                <div
                    className="carousel-container"
                    style={{
                        transform: `rotateY(${rotation}deg)`, // Use cumulative rotation
                    }}
                    onMouseDown={handleMouseDown} // Start dragging
                >
                    <div className="carousel-item" style={{ transform: `rotateY(0deg) translateZ(600px)` }}>
                        <img src="/images/carosel-images/img1.jpg" alt="Carousel 1" />
                    </div>
                    <div className="carousel-item" style={{ transform: `rotateY(90deg) translateZ(600px)` }}>
                        <img src="/images/carosel-images/img2.jpg" alt="Carousel 2" />
                    </div>
                    <div className="carousel-item" style={{ transform: `rotateY(180deg) translateZ(600px)` }}>
                        <img src="/images/carosel-images/img3.jpg" alt="Carousel 3" />
                    </div>
                    <div className="carousel-item" style={{ transform: `rotateY(270deg) translateZ(600px)` }}>
                        <img src="/images/carosel-images/img4.jpg" alt="Carousel 4" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carosel;
