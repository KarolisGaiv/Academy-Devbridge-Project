import { ListSection } from "components/ListSection/ListSection";
import { SideFilters } from "components/SideFilters/SideFilters";
import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./reservations.scss";
import SearchSection from "components/SearchSection/SearchSection";

const Reservations = () => {
  return (
    <div className="reservations">
      <Breadcrumbs />
      <SearchSection />
      <section className="reservations__section">
        <aside className="reservations__side-filters">
          <SideFilters />
        </aside>
        <section className="reservations__list ">
          <ListSection />
        </section>
      </section>
    </div>
  );
};

export default Reservations;
