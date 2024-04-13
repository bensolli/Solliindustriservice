

import React from "react";
import '../Styles/Frontpage.scss';

export default function BackgroundOverlay() {
    return (  

        <svg className="[ frontpageOverlay ]" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 1313">
        <defs>
          <linearGradient id="linear-gradient" x1="815.99" y1="1068.88" x2="1616.48" y2="522.37" gradientTransform="translate(0 1311.89) scale(1 -1)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#a9d8b3"/>
            <stop offset=".58" stopColor="#fff"/>
          </linearGradient>
        </defs>
        <path className="cls-2" d="m1440,0H0v1313h1440v-131.57l-745.37-430.52c-94.18-54.4-94.18-190.42,0-244.82L1440,75.57V0Z"/>
        <path className="cls-1" d="m1440,75.41l-747.37,431.68c-94.18,54.4-94.18,190.42,0,244.82l747.37,431.68v-23.1l-737.36-425.9c-80.85-46.7-80.85-163.48,0-210.18L1440,98.51v-23.1Z"/>
      </svg>

    )
}