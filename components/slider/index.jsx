import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
const bannerImages = [
    "https://scontent.fdel35-1.fna.fbcdn.net/v/t39.30808-6/314622844_3350684151918909_4508914441379875463_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=dju8nLDP1BwAX_yAg2V&_nc_ht=scontent.fdel35-1.fna&oh=00_AfDrCEMVRpC_d1AT5tjveVFAWflDfOfFIFUiUQpsogZNTA&oe=640C596C",
    'https://pps.whatsapp.net/v/t61.24694-24/322307554_731195405064010_8450704064907224885_n.jpg?ccb=11-4&oh=01_AdSS9DASft9TkjDTp_RamfASvySPhXd-c1xG4xMm0PYCaA&oe=6414240A',
    "https://external.fdel35-1.fna.fbcdn.net/emg1/v/t13/16632063254155002732?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FeBmVH0721MU%2Fmaxresdefault.jpg&fb_obo=1&utld=ytimg.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p500x261_q75&ccb=13-1&oh=06_AbENzaMujhQ64Y44uAgRer64KKIuoHv_oXUXCbo6YLDbWA&oe=6408DA4E&_nc_sid=a089b9",
];

export default function SimpleSlider() {
    return (
        <>
            <Swiper
                navigation={true}
                slidesPerView={1}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 5000 }}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper "
            >
                {bannerImages.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={item} alt="image 2" className="w-100 h-100" />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}


