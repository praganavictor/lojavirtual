import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleToggle() {
    setIsExpanded(!isExpanded);
  }

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
              <input type="text" className="searchtd" placeholder="Search" required />
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
      <div className={`topnav ${isExpanded ? " responsive" : ""}`} id="myTopnav">
        <Link to="#" className="active">
          Menu
        </Link>
        <Link to="#" className="opcao">
          Opção 1
        </Link>
        <Link to="#" className="opcao">
          Opção 2
        </Link>
        <Link to="#" className="opcao">
          Opção 3
        </Link>
        <div className="dropdown">
          <button className="dropbtn">
            Dropdown
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="#">Link 1</Link>
            <Link to="#">Link 2</Link>
            <Link to="#">Link 3</Link>
          </div>
        </div>
        <Link to="#" className="opcao">
          Opção 5
        </Link>
        <Link to="#" className="opcao">
          Opção 5
        </Link>
        <Link to="#" className="opcao">
          Opção 6
        </Link>
        <Link to="#" className="opcao">
          Opção 7
        </Link>
        <Link to="#" className="opcao">
          Opção 8
        </Link>
        <Link to="#" className="icon" onClick={handleToggle}>
          &#9776;
        </Link>
      </div>
      <div className="bottom padding">
        <div className="bottomItem">
          <i className="fas fa-truck bottomIcone"></i>
          <big className="">
            Frete
            <br />
            Grátis
          </big>
          <span>
            nas compras
            <br />
            acima de
            <br />
            <b>R$299,00</b>
          </span>
        </div>
        <div className="bottomItem">
          <i className="fas fa-barcode bottomIcone"></i>
          <big>10%</big>
          <span>
            <b>de desconto</b>
            <br />
            <b>no BOLETO</b>
            <br />
            acima de R$ 100
          </span>
        </div>
        <div className="bottomItem">
          <i className="far fa-credit-card bottomIcone"></i>
          <big>10%</big>
          <span>
            <b>de desconto</b>
            <br />
            <b>no CARTÃO</b>
            <br />
            acima de R$ 199
          </span>
        </div>
        <div className="bottomItem">
          <i className="fab fa-whatsapp bottomIcone"></i>
          <div>
            <span>Atendimento Via Whatsapp</span>
            <br />
            <b>
              <a href="https://api.whatsapp.com/send?1=pt_BR&amp;phone=5522992689505">
                (22) 99268 9505
              </a>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}
