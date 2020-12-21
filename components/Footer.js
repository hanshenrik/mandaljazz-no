import React from "react";
import classNames from "classnames";
import Link from "next/link";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <img
        src="/images/profile/sea-bed-transparent.jpg"
        alt="Sea bed"
        style={{ width: "90%", maxWidth: "800px" }}
      />
      <h2 style={{ color: "gray" }}>Hovedsponsor</h2>
      <div className={classNames(styles.Sponsors, "large")}>
        <a href="https://www.sor.no/" title="Sparebanken Sør">
          <img
            src="/images/sponsors/sparebanken-sor.png"
            alt="Sparebanken Sør"
          />
        </a>
      </div>
      <hr style={{ transform: "rotate(1.5deg)" }} />
      <h2 style={{ color: "gray" }}>Sponsorer</h2>
      <div className={styles.Sponsors}>
        <a href="https://red.no/" title="Hr. Redaktør!">
          <img src="/images/sponsors/hr-redaktor.jpg" alt="Hr. Redaktør!" />
        </a>
        <a href="https://www.sjograf.no/" title="Sjøsanden Grafiske">
          <img
            src="/images/sponsors/sjosanden-grafiske.png"
            alt="Sjøsanden Grafiske"
            style={{ maxWidth: "9rem" }}
          />
        </a>
        <Link href="/jazzlaugs-venner" title="Jazzlaugs venner">
          <img
            src="/images/sponsors/jazzlaugs-venner.png"
            alt="Jazzlaugs venner"
          />
        </Link>
      </div>
      <hr style={{ transform: "rotate(-1.5deg)" }} />
      <h2 style={{ color: "gray" }}>Støttespillere</h2>
      <div className={classNames(styles.Sponsors, "small")}>
        <a href="https://www.hansaborg.no/" title="Hansa Borg Bryggerier">
          <img
            src="/images/sponsors/hansa-borg.png"
            alt="Hansa Borg Bryggerier"
          />
        </a>
        <a href="https://www.nosted.com/" title="Nøsted">
          <img src="/images/sponsors/nosted.png" alt="Nøsted" />
        </a>
        <a href="https://www.kjobmandsgaarden.no/" title="Kjøbmandsgaarden">
          <img
            src="/images/sponsors/kjobmandsgaarden.png"
            alt="Kjøbmandsgaarden"
          />
        </a>
        <a href="https://mandalhotel.no/" title="Mandal Hotel">
          <img
            src="/images/sponsors/mandal-hotel.png"
            alt="Mandal Hotel"
            style={{ maxWidth: "8rem" }}
          />
        </a>
        <a href="https://www.norengros.no/" title="NorEngros">
          <img
            src="/images/sponsors/norengros.svg"
            alt="NorEngros"
            style={{ maxWidth: "8rem" }}
          />
        </a>
        <a href="http://www.pjl.no/" title="Paul J. Loland">
          <img
            src="/images/sponsors/paul-j-loland.jpg"
            alt="Paul J. Loland"
            style={{ maxWidth: "8rem" }}
          />
        </a>
      </div>
      <hr style={{ transform: "rotate(1.5deg)" }} />
      <h2 style={{ color: "gray" }}>Offentlig støtte</h2>
      <div className={classNames(styles.Sponsors, "small")}>
        <a href="https://agderfk.no/" title="Agder Fylkeskommune">
          <img
            src="/images/sponsors/agder-fylkeskommune.png"
            alt="Agder Fylkeskommune"
          />
        </a>
        <a href="https://www.lindesnes.kommune.no/" title="Lindesnes kommune">
          <img
            src="/images/sponsors/lindesnes-kommune.png"
            alt="Lindesnes kommune"
          />
        </a>
        <a href="https://sornorsk.jazzinorge.no/" title="Sør-Norsk Jazzsenter">
          <img
            src="/images/sponsors/sor-norsk-jazzsenter.png"
            alt="Sør-Norsk Jazzsenter"
          />
        </a>
        <a href="https://jazzforum.jazzinorge.no/" title="Norsk Jazzforum">
          <img
            src="/images/sponsors/norsk-jazzforum.svg"
            alt="Norsk Jazzforum"
          />
        </a>
        <a
          href="https://www.nordiskkulturfond.org/en"
          title="Nordisk kulturfond"
        >
          <img
            src="/images/sponsors/nordisk-kulturfond.jpg"
            alt="Nordisk kulturfond"
          />
        </a>
        <a href="https://www.kulturradet.no/" title="Kulturrådet">
          <img src="/images/sponsors/kulturraadet.png" alt="Kulturrådet" />
        </a>
        <a href="https://keychange.eu/" title="Keychange">
          <img src="/images/sponsors/keychange.png" alt="Keychange" />
        </a>
        <a href="https://puls.nordiskkulturfond.org/en/" title="Puls">
          <img
            src="/images/sponsors/nordisk-kulturfond-puls-logo-black.png"
            alt="Puls"
          />
        </a>
        <a href="https://www.kulturrom.no/" title="Kulturrom">
          <img src="/images/sponsors/kulturrom.png" alt="Kulturrom" />
        </a>
      </div>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/mandaljazz"
            title="Mandaljazz på Facebook"
          >
            <IoLogoFacebook color="#ff7a4d" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mandaljazz/"
            title="Mandaljazz på Instagram"
          >
            <IoLogoInstagram color="#f89876" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/mandaljazz"
            title="Mandaljazz på Twitter"
          >
            <IoLogoTwitter color="#f7ac92" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCk0E0CaIIwc15zF8QypCd4A"
            title="Mandaljazz på Youtube"
          >
            <IoLogoYoutube color="#ffcab8" />
          </a>
        </li>
      </ul>
      <div>
        <a href="mailto:post@mandaljazz.no" title="post@mandaljazz.no">
          post@mandaljazz.no
        </a>
      </div>
    </footer>
  );
};

export default Footer;
