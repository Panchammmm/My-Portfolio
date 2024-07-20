import React, { useEffect } from "react";
import './preload.css';

export default function Preload() {
    return (
        <div id="preloader">
            <div id="div1" className="lg:scale-[0.8] scale-[0.7]">
                <div id="l" className="preload-element rotate-[6deg]">
                    <div className="lg:scale-[0.75] scale-[0.7]">
                        <div className="sharingon">
                            <div className="ring">
                                <div className="to"></div>
                                <div className="to"></div>
                                <div className="to"></div>
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="m" className="preload-element rotate-[-6deg]">
                    <div className="lg:scale-[0.75] scale-[0.7]">
                        <div className="sharingon">
                            <div className="ring">
                                <div className="to"></div>
                                <div className="to"></div>
                                <div className="to"></div>
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
