import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import DayCare from "../components/DayCare";
import Costs from "../components/Costs";
import ContactUs from "../components/ContactUs";
import SharedPayments from "../components/SharedPayments";
import Framework from "../components/Framework";
import Daily from "../components/Daily";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <DayCare />
      <Costs />
      <ContactUs />
      <SharedPayments />
      <Framework />
      <Daily />
      <Footer />
    </>
  );
}
