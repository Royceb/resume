import React, { FC, memo } from "react";
import Card from "./Card";

interface AboutMeProps {
  name: string;
  story: string;
}

const AboutMe: FC<AboutMeProps> = ({ name, story }) => {
  return (
    <Card>
      <div>
        Hello! My name is Royce Brooks, and I am a software engineer from
        Vallejo, California. I am most passionate about frontend technology, but
        I also enjoy and have vast experience working with server side and
        backend systems and APIs.
        <br></br>
        <br></br>
        Outside of tech and coding, I'm a huge sports fan - Warriors, Giants,
        and 49ers are my big 3. I also love music, mostly rap/hip hop but I also
        have alternative, rock, and classical music in my playlists.
      </div>
    </Card>
  );
};

export default memo(AboutMe);
