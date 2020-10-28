import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as interfaces from "../../interfaces/interfaces";

const navLinks: interfaces.INavLinks[] = [
  {
    id: 1,
    title: "Автомобили",
    nodes: [
      { text: 'Прат"Автокапитал"', path: "/" },
      { text: "Журнал", items: [{ postText: "", path: "" }] },
    ],
  },
];

const initialState = {
  isOpen: false,
  id: 0,
};

const NavBar: React.FC = () => {
  const [state, setState] = useState(initialState);

  function chooseId(id: number) {
    console.log(id);
    setState((prev) => ({
      ...prev,
      id,
    }));
  }

  return (
    (
      <div>
        <div>
          {navLinks.map((el) => {
            return (
              <button key={el.id} onClick={() => chooseId(el.id)}>
                {el.title}
              </button>
            );
          })}
        </div>
      </div>
    ) || console.log(state)
  );
};

export default NavBar;
