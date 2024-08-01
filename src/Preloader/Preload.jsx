import React, { useEffect } from "react";
import './preload.css';

export default function Preload() {
    return (
        <div id="preloader">
            <div className="lg:scale-[1.3]">
                <span className="l">L</span>
                <span className="o">o</span>
                <span className="a">a</span>
                <span className="d">d</span>
                <span className="i">i</span>
                <span className="n">n</span>
                <span className="g">g</span>
                <span className="d1">.</span>
                <span className="d2">.</span>
            </div>
        </div>
    );
}
