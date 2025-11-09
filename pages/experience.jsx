import React, { useContext } from "react";
import styled from "styled-components";

//Custom components
import TimelineExperienciaFormacao from "@/components/TimelineExperienciaFormacao";
import TitleSection from "@/components/TitleSection";

//Context
import { SettingsContext } from "@/context/SettingsContext";

const SectionExperiencia = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding-top: 60px;
    width: 100%;
    min-height: 100vh;

    @media (max-width: 601px) {
        min-height: auto;
        padding-top: 40px;
        padding-bottom: 20px;
    }
`;

export default function Experiencia() {
	const { language } = useContext(SettingsContext);

    return (
        <SectionExperiencia id="section-experience">
            <TitleSection title={language.experiencePage.title} subtitle={language.experiencePage.subtitle} hasMarginBottom />
            <TimelineExperienciaFormacao />
        </SectionExperiencia>
    );
}
