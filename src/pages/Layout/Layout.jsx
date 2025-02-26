import React from "react";
import Header from "../../components/Header/Header";
export default function Layout() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <p>Private Page</p>
      </div>
    </>
  );
}
