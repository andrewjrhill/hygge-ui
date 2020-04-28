import React from "react";
import { MoreHorizontal } from "react-feather";

const BreadcrumbCollapser = props => (
  <li className="breadcrumb-collapser" {...props}>
    <MoreHorizontal />
  </li>
);

export default BreadcrumbCollapser;
