import React, { ReactElement } from "react";
import { ReactComponent as SpaceCat } from "../assets/images/space-cat.svg";

interface Props {}

export default function Login({}: Props): ReactElement {
  return (
    <div className="bg-red-900">
      Login
      <SpaceCat />
    </div>
  );
}
