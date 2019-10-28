import React from "react";

import "./styles.css";

export default function Header() {
  return (
    <div className="header">
      <div className="top padding">
        <span>Duvidas? Entre em contato | (11) 1111-1111 | (11) 1111-1111</span>
        <span>Ajuda | Fale Conosco | Institucional</span>
      </div>
      <div className="mid padding">
        <span>Logo</span>

        <div className="cover">
          <div className="tb">
            <div className="td">
              <input
                type="text"
                className="searchtd"
                placeholder="Search"
                required
              />
            </div>
            <div className="td" id="cover">
              <button className="buttontd" type="submit">
                | BUSCAR
              </button>
            </div>
          </div>
        </div>

        <div>
          <button className="btnuser btn">MINHA CONTA</button>
          <button className="btncart btn">Cart</button>
        </div>
      </div>
      <nav>
        <ul className="padding">
          <li>
            <a href="default.asp">Home</a>
          </li>
          <li>
            <a href="news.asp">News</a>
          </li>
          <li>
            <a href="contact.asp">Contact</a>
          </li>
          <li>
            <a href="about.asp">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
