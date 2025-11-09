import React from "react";

//Pages
import AboutPage from "./about";
import PortfolioPage from "./portfolio";
import ExperiencePage from "./experience";
import HomePage from "./homepage";
// import Faq from "./faq";
import Testimonials from "./Testimonials";

//Components
import FooterPage from "@/components/FooterPage";
import CarrouselTechsDivContainer from "@/components/CarrouselTechsDivContainer";
import SatisfactionIndicators from "@/components/SatisfactionIndicators";
import WorkTogetherCTA from "@/components/WorkTogetherCTA";

let flagMessage = false;
export default function Index() {
    function ConsoleMessage() {
        console.log(
            "%c██   ██ ███████ ██      ██       ██████      ██████  ███████ ██    ██ ███████ ██       ██████  ██████  ███████ ██████  ██\n" +
                "%c██   ██ ██      ██      ██      ██    ██     ██   ██ ██      ██    ██ ██      ██      ██    ██ ██   ██ ██      ██   ██ ██\n" +
                "%c███████ █████   ██      ██      ██    ██     ██   ██ █████   ██    ██ █████   ██      ██    ██ ██████  █████   ██████  ██\n" +
                "%c██   ██ ██      ██      ██      ██    ██     ██   ██ ██       ██  ██  ██      ██      ██    ██ ██      ██      ██   ██   \n" +
                "%c██   ██ ███████ ███████ ███████  ██████      ██████  ███████   ████   ███████ ███████  ██████  ██      ███████ ██   ██ ██",
            "color: #FCD434;",
            "color: #FCD434;",
            "color: #FCD434;",
            "color: #FCD434;",
            "color: #FCD434;"
        );

        console.log(
            "%cProcurando o código fonte? Aqui está ele: " + "%chttps://github.com/MUZAMMIL-JAVED\n\n" + "%cNão esqueça de deixar uma estrela! 🌟",
            "font-family: Inter, sans-serif; font-size: 1.2rem; font-weight: 500;",
            "font-family: Inter, sans-serif; font-size: 1.2rem; font-weight: 500; color: #FCD434;",
            "font-family: Inter, sans-serif; font-size: 1.2rem; font-weight: 500;"
        );
    }

    if (flagMessage == false) {
        ConsoleMessage();
        flagMessage = true;
    }

    return (
        <>
            <HomePage />
            <CarrouselTechsDivContainer />
            <AboutPage />
            <SatisfactionIndicators />
            <CarrouselTechsDivContainer direction="left" />
            <PortfolioPage />
            <ExperiencePage />
            <Testimonials />
            <WorkTogetherCTA />
            {/* <Faq /> */}
            <FooterPage />
        </>
    );
}