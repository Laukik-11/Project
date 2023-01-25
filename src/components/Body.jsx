import React from "react";
import bgimg from "../assets/background.png"


export default function Body(){
    return(
        <section>
            <img className="background-img"src={bgimg} alt="background" />
            <section className="content">
                <p>On February 27th, we're hosting the first edition of the annual Integration Bee 🐝 under the annual mega techno-managerial fest of NIT Jalandhar “TechNITi”. Stay Tuned!</p>
                <h2>MEET THE TEAM</h2>
            <section className="team-images"></section>
        </section>
    </section>
    )
}