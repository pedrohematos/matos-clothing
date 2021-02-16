import React, { useState } from "react";
import HOME_DATA from "./directory.data";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = (props) => {
  const [sections, setSections] = useState(HOME_DATA);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
