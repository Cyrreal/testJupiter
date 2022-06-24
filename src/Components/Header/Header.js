import s from "./Header.module.css";

export function Header() {
  return (
    <header>
      <div className={s.container}>
        <div className={s.flex}>
          <h1 className={s.logo}>Agency</h1>
          <div className={s.menu}>
            <ul className={s.nav}>
              <li>About</li>
              <li>Services</li>
              <li>Priding</li>
              <li>Blog</li>
            </ul>
          </div>
          <button className={s.btn}>contact</button>
        </div>
        <div className={s.portfolio}>
          <h2 className={s.title}>Portfolio</h2>
          <p className={s.description}>
            Agency provides a full service range including technical skills,
            business,
            <br /> understanding.
          </p>
        </div>
      </div>
    </header>
  );
}
