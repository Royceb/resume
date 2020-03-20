import styles from "./Education.module.sass";

import React, { FC, memo } from "react";
import Card from "./Card";

interface EducationProps {
  schoolName: string;
  yearStarted: string;
  yearGraduated: string;
  major: string;
  degree: string;
}

const Education: FC<EducationProps> = ({
  schoolName,
  yearGraduated,
  yearStarted,
  major,
  degree
}) => {
  return (
    <Card>
      <div className={styles.educationWrapper}>
        <div>
          <h6>
            {schoolName}{" "}
            <span className={styles.Years}>
              {yearStarted} -> {yearGraduated}
            </span>
          </h6>
        </div>
        <p>
          {degree}, {major}
        </p>
      </div>
    </Card>
  );
};

export default memo(Education);
