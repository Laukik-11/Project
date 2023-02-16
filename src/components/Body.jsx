import React from "react";
import bgimg from "../assets/background.png";

export default function Body() {
  return (
    <section>
      <img className="background-img" src={bgimg} alt="background" />
      <section className="content">
        <p>
          Level up your brand with the latest digital marketing trends. I'm a
          paragraph. Click here to add your own text and edit me. It’s easy.
          Just click “Edit Text” or double click me to add your own content and
          make changes to the font. I’m a great place for you to tell a story
          and let your users know a little more about you.
        </p>

        <section className="team-images"></section>
      </section>
    </section>
  );
}
