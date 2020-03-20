import styles from "./SideProjects.module.sass";

import React, { memo, FC } from "react";

import Card from "./Card";

interface ISideProject {
  name: string;
  description: string;
  url: string;
  stack: string;
}

interface SideProjectsProps {
  sideProjects: ISideProject[];
}

const SideProjects: FC<SideProjectsProps> = ({ sideProjects }) => {
  return (
    <Card>
      <div className={styles.SideProjectsWrapper}>
        {sideProjects.map(({ name, description, url, stack }) => {
          return (
            <div>
              <h6 className={styles.projectName}>
                <a href={url} target="_blank">
                  {name}
                </a>
              </h6>
              <p>{description}</p>
              <p>
                <b>Stack: </b>
                {stack}
              </p>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default memo(SideProjects);
