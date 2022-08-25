import Austronaut from "../assets/astronaut.svg";
import Clown from "../assets/clown.svg";
import Fe from "../assets/fe.svg";
import Fotograf from "../assets/fotograf.svg";
import Guitar from "../assets/gitarrknappare.svg";
import Facebook from "../assets/icons/logo-facebook.svg";
import Instagram from "../assets/icons/logo-instagram.svg";
import Linkedin from "../assets/icons/logo-linkedin.svg";
import Twitter from "../assets/icons/logo-twitter.svg";
import Lakare from "../assets/lakare.svg";
import NavIcon from "../assets/navicon.svg";
import Nerd from "../assets/nerd.svg";
import NinjaHead from "../assets/ninja-head.svg";
import Ninja from "../assets/ninja.svg";
import Polis from "../assets/polis.svg";
import PT from "../assets/pt.svg";
import Snorklare from "../assets/snorklare.svg";

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
      <main>
        <div className="main-min-wrapper">
          <article className="small-card">
            <figure>
              <img src={Austronaut} alt="" />
              <h2>Austronaut</h2>
            </figure>
            <p>
              Marfa artisan pok pok, coloring book shaman intelligentsia meh
              kinfolk affogato raw denim direct trade subway tile kombucha.
            </p>
            <button>Oh, take my money!</button>
          </article>
          <article className="small-card">
            <figure>
              <img src={Ninja} alt="" />
              <h2>Ninja</h2>
            </figure>
            <p>
              Disrupt blue bottle kombucha quinoa live-edge ennui literally
              flexitarian cloud bread gochujang sustainable. Ramps thundercat
              squid skateboard readymade.
            </p>
            <button>Oh, take my money!</button>
          </article>
          <article className="small-card">
            <figure>
              <img src={Nerd} alt="" />
              <h2>Nerd</h2>
            </figure>
            <p>
              Tacos squid retro, activated charcoal next level kitsch
              vexillologist ennui. Vice offal iceland humblebrag, single-origin
              coffee cliche vegan adaptogen jean shorts yr.
            </p>
            <button>Oh, take my money!</button>
          </article>
          <article className="small-card">
            <figure>
              <img src={Lakare} alt="" />
              <h2>Läkare</h2>
            </figure>
            <p>
              Disrupt blue bottle kombucha quinoa live-edge ennui literally
              flexitarian cloud bread gochujang sustainable. Ramps thundercats
              squid skateboard readymade.
            </p>
            <button>Oh, take my money!</button>
          </article>
          <article className="small-card">
            <figure>
              <img src={Guitar} alt="" />
              <h2>Gitarrrknäppare</h2>
            </figure>
            <p>
              Tacos squid retro, activated charcoal next level kitsch
              vexillologist ennui. Vice offal iceland humblebrag, single-origin
              coffee cliche vegan adaptogen jean shorts yr.
            </p>
            <button>Oh, take my money!</button>
          </article>
          <article className="small-card">
            <figure>
              <img src={Snorklare} alt="" />
              <h2>Snorklare</h2>
            </figure>
            <p>
              Man braid hammock listicle retro crucifix, tumeric poutine kale
              chips letterpress woke. Activated charcoal jianbing coloring book
              direct trade tote.
            </p>
            <button>Oh, take my money!</button>
          </article>
          <article className="small-card">
            <figure>
              <img src={Clown} alt="" />
              <h2>Clown</h2>
            </figure>
            <p>
              Marfa artisan pok pok, coloring book shaman intelligentsia meh
              kinfolk affogato raw denim direct trade subway tile kombucha.
            </p>
            <button>Oh, take my money!</button>
          </article>
          <article className="small-card">
            <figure>
              <img src={Polis} alt="" />
              <h2>Polis</h2>
            </figure>
            <p>
              Disrupt blue bottle kombucha quinoa live-edge ennui literally
              flexitarian cloud bread gochujang sustainable. Ramps thundercats
              squid skateboard readymade.
            </p>
            <button>Oh, take my money!</button>
          </article>
          <article className="small-card">
            <figure>
              <img src={Fe} alt="" />
              <h2>Fe</h2>
            </figure>
            <p>
              Tacos squid retro, activated charcoal next level kitsch
              vexillologist ennui. Vice offal iceland humblebrag, single-origin
              coffee cliche vegan adaptogen jean shorts yr.
            </p>
            <button>Oh, take my money!</button>
          </article>
        </div>
        <div className="main-big-wrapper">
          <article className="big-card">
            <figure>
              <img src={Fotograf} alt="" />
              <h2>Fotograf</h2>
            </figure>
            <p>
              Tacos squid retro, activated charcoal next level kitsch
              vexillologist ennui. Vice offal iceland humblebrag, single-origin
              coffee cliche vegan adaptogen jean shorts yr.
            </p>
            <button>Oh, take my money!</button>
          </article>
          <article className="big-card">
            <figure>
              <img src={PT} alt="" />
              <h2>Personlig Tränare</h2>
            </figure>
            <p>
              Tacos squid retro, activated charcoal next level kitsch
              vexillologist ennui. Vice offal iceland humblebrag, single-origin
              coffee cliche vegan adaptogen jean shorts yr.
            </p>
            <button>Oh, take my money!</button>
          </article>
        </div>
      </main>
      <footer>
        <div className="footer-wrapper">
          <div>
            <h2>Nav</h2>
            <ul>
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="address">
            <h2>Address</h2>
            <a href="">Pinkeplonkvägen 32</a>
            <a href="">888 81 Klonkberga</a>
          </div>
          <div>
            <h2>Social media</h2>
            <ul className="social-media">
              <li>
                <figure>
                  <img src={Twitter} alt="" />
                </figure>
              </li>
              <li>
                <figure>
                  <img src={Facebook} alt="" />
                </figure>
              </li>
              <li>
                <figure>
                  <img src={Linkedin} alt="" />
                </figure>
              </li>
              <li>
                <figure>
                  <img src={Instagram} alt="" />
                </figure>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;
