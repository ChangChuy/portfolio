'use client'

import {useSwiper} from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface SliderBtnsProps {
    containerStyles: string;
  }

const SliderBtns: React.FC<SliderBtnsProps> = ({ containerStyles }) => {
  
    const swiper = useSwiper();

    return (
    <div className={containerStyles}>
        <button onClick={() => swiper.slidePrev()}>
            <PiCaretLeftBold/>
        </button>
        <button onClick={() => swiper.slideNext()}>
            <PiCaretRightBold />
        </button>
    </div>
  )
}

export default SliderBtns