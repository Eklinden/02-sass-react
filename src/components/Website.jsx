import NavIcon from "../assets/navicon.svg";
import NinjaHead from "../assets/ninja-head.svg";
import "./Website.scss";

const Website = () => {
  return (
    <div>
      <header className="hero-content">
        <figure className="nav-icon">
          <img src={NavIcon} alt="" />
        </figure>
        <h1>Poster Shop</h1>
        <figure className="ninja-head">
          <img src={NinjaHead} alt="" />
        </figure>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
};

export default Website;
