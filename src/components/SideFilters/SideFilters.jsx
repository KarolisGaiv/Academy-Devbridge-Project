import React from "react";
import "./side-filters.scss";
import db from "../../db.json";
import { SideFilterCard } from "./SideFilterCard/SideFilterCard";

export const SideFilters = () => {
  const filterCategories = db.devices.filterCategories;

  return (
    <div className="side-filters">
      <SideFilterCard
        categoryTitle={"device type"}
        category={filterCategories.deviceType}
      />

      <SideFilterCard categoryTitle={"os"} category={filterCategories.os} />

      <SideFilterCard
        categoryTitle={"brand"}
        category={filterCategories.brand}
      />
    </div>
  );
};
