import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  marginTopLength: string;
}

function Menu({ marginTopLength }: Props) {
  const navigate = useNavigate();
  let items = ["Home", "About Us", "Research", "People", "Publication"];

  const [selectIndex, setSelectIndex] = useState(-1);
  const myStyle = { marginTop: marginTopLength, height: 50 };
  return (
    <>
      {items.length === 0 && <p>no items found</p>}
      <div id="round_square_blue" style={myStyle}>
        <div id="menu">
          {items.map((item, index) => (
            <ul key={item}>
              <li>
                <b>
                  <a
                    onClick={() => {
                      setSelectIndex(index);
                      item === "Home" ? navigate("/") : navigate("/" + item);
                    }}
                  >
                    {item}
                  </a>
                </b>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;
