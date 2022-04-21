import { useState } from "react";
import "./bodycontent.css";
import Frag1 from "./Frags/Frag1";
import Frag2 from "./Frags/Frag2";
import Frag3 from "./Frags/Frag3";
import Frag4 from "./Frags/Frag4";
import Frag5 from "./Frags/Frag5";

const BodyContent = () => {
  const [Index, setIndex] = useState(0);
  const menuData = [
    {
      index: 0,
      fragment: <Frag1 />,
      name: "Products",
    },
    {
      index: 1,
      fragment: <Frag2 />,
      name: "Create Product",
    },
    {
      index: 2,
      fragment: <Frag3 />,
      name: "Categories",
    },
    {
      index: 3,
      fragment: <Frag4 />,
      name: "Attributes",
    },
    {
      index: 4,
      fragment: <Frag5 />,
      name: "Tags",
    },
  ];

  const handleMenuSelect = (index) => {
    setIndex(index);
  };

  return (
    <div className="bodycontent">
      <div className="body_inside">
        <div className="menu_buttons">
          {menuData.map((each) => {
            return (
              <div
                className={each.index === Index?"active button":"button"}
                onClick={() => {
                  handleMenuSelect(each.index);
                }}
                key={each.index}
              >
                {each.name}
              </div>
            );
          })}
        </div>
        <div className="menu_content">
          {menuData.map((each) => {
            return each.index === Index ? each.fragment : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
