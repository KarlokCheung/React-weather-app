import { render } from "@testing-library/react";
import React from "react";
import "./Current.css";
import Temperature from "../Temperature/Temperature";
import Meta from "./components/Meta/Meta";
import VerticalDivider from "../VerticalDivider/VerticalDivider";

function Current() {
  return (
    <div className="current">
      <div className="current__left">
        <div>
          <Temperature degree={24} className="temperature__top" />
        </div>
        <span className="weather--description">Clouds</span>
        <div className="metas">
          <Meta title={"HUMIDITY"} value={"57%"} />
          <VerticalDivider className="verticalDivider__top" />
          <Meta title={"HUMIDITY"} value={"57%"} />
        </div>
      </div>
      <div className="current__right"></div>
    </div>
  );
}

export default Current;
