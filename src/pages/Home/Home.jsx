import React from "react";
import { useSelector } from "react-redux";
import Auth from "../Auth/Auth";
import Layout from "../Layout/Layout";

export default function Home() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return <div className="body">{isLoggedIn ? <Layout /> : <Auth />}</div>;
}
