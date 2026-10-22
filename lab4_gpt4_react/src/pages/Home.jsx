import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import Woman from "../components/Woman"; 
import CtaBanner from "../components/CtaBanner";
import Statia from "../components/Statia";
import StepSection from "../components/StepSection";
import Links from "../components/Links";
import Copyright from "../components/Copyright";


const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section woman">
        <Woman />
      </section>
      <section className="section cta_banner">
        <CtaBanner />
      </section>
      <section className="section statia_5">
        <Statia />
      </section>
      <section className="section step_section">
        <StepSection />
      </section>
      <section className="section links">
        <Links />
      </section>
      <section className="copyright">
        <Copyright />
      </section>
    </>
  );
};

export default Home;
