import s from "./Categories.module.css";
import { useEffect, useState } from "react";

export function Categories({ setValueForSelect }) {
  const [width, setWidth] = useState(1920);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const updatetWidth = window.innerWidth;
      setWidth(updatetWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div className={s.container}>
      <div className={s.menu}>
        {width > 1040 ? (
          <ul className={s.flex}>
            <li
              onClick={() => {
                return setValueForSelect("");
              }}
            >
              Show all
            </li>
            <li
              onClick={(event) => {
                setValueForSelect(event.target.textContent);
              }}
            >
              Design
            </li>
            <li
              onClick={(event) => {
                setValueForSelect(event.target.textContent);
              }}
            >
              Branding
            </li>
            <li
              onClick={(event) => {
                setValueForSelect(event.target.textContent);
              }}
            >
              Illustration
            </li>
            <li
              onClick={(event) => {
                setValueForSelect(event.target.textContent);
              }}
            >
              Motion
            </li>
          </ul>
        ) : (
          <select
            onChange={(event) => {
              setValueForSelect(event.target.value);
            }}
            className={s.select}
          >
            <option value="" selected>
              Show all
            </option>
            <option value="Design">Design</option>
            <option value="Branding">Branding</option>
            <option value="Illustration">Illustration</option>
            <option value="Motion">Motion</option>
          </select>
        )}
      </div>
    </div>
  );
}
