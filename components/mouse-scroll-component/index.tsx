'use client';

import React, { useEffect, useRef } from 'react';
import mouseLottie from '../../public/assets/lottie/mouse.json'


const MouseScrollIndicator: React.FC = () => {
 
    let animationRef = useRef(null);

    async function getLottie() {
        const lot = await import("lottie-web");

        lot.default.loadAnimation({
            autoplay: true,
            loop: true,
            animationData: mouseLottie,
            container: animationRef.current as unknown as Element
        })

    }
    useEffect(() => {
        getLottie();
    }, []);


    return (
        <div ref={animationRef} className='w-[32px]'></div>
    );
}

export default MouseScrollIndicator;