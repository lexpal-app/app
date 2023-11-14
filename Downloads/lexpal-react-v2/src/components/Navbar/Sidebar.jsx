import React from "react";
import { SidebarData } from "./SidebarData";
import { useState } from "react";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { ReactComponent as Lexpallogo } from "./lexpallogo.svg";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

function Sidebar({}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="Sidebar" style={{ left: visible ? 0 : -195 }}>
      <Lexpallogo style={{ height: 60, width: 150 }} />
      <button className="toggle" onClick={() => setVisible((prev) => !prev)}>
        {visible ? <MdChevronLeft /> : <MdChevronRight />}
      </button>
      <ul className={`menu-nav${setVisible ? " show-menu" : ""}`}></ul>
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          let inviteSection = null;
          if (key === 4) {
            inviteSection = (
              <div className="section">
                Invite friends by email and you both will get 1 credit
                <Popup
                  trigger={
                    <button type="button" className="inviteBtn">
                      {" "}
                      Invite a friend{" "}
                    </button>
                  }
                  modal
                  nested
                >
                  {(close) => (
                    <div className="modal">
                      <div className="inviteContent">
                        <h2>Want even more?</h2>
                        <p>
                          <strong>
                            Premium LexPal members received unlimited meeting
                            credits
                          </strong>
                          <br></br>
                          <br></br>
                          <button type="button" className="inviteBtn">
                            Join LexPal Premium!
                          </button>
                          <br></br>
                          <br></br>
                          or
                        </p>
                        <p>
                          <strong>
                            Invite friends by email and you both will get 1
                            credit
                          </strong>
                        </p>
                      </div>
                      <div>
                        <button onClick={() => close()}>Yes!</button>
                      </div>
                    </div>
                  )}
                </Popup>
              </div>
            );
          }
          return (
            <>
              <li
                key={key}
                className="row"
                id={window.location.pathname === val.link ? "active" : ""}
                onClick={() => {
                  setVisible(false);
                  window.location.pathname = val.link;
                }}
              >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </li>
              {inviteSection}
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
