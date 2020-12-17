import { SideFilters } from "components/SideFilters/SideFilters";
import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./reservations.scss";

const Reservations = () => {
  return (
    <div className="reservations">
      <Breadcrumbs />
      <section className="reservations__section">
        <aside className="reservations__side-filters">
          <SideFilters />
        </aside>

        <section></section>
      </section>
    </div>
  );
};

export default Reservations;
