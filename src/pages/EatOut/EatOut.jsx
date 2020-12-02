import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import data from "../../db.json";
import "./eat-out.scss";

const EatOut = () => {
  return (
    <main className="dashboard">
      <Breadcrumbs />
      <div className="dashboard__top">Placeholder for top widget</div>
      <div className="dashboard__categories-wrapper">
        {data.restaurants.categories.map((item) => (
          <span key={item.id}>
            <CategoryCard category={item} keyword="places" icon={item} />
          </span>
        ))}
      </div>
    </main>
  );
};

export default EatOut;
