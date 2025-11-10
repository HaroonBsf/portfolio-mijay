/* eslint-disable react/jsx-key */
import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Ícones
import { Robot } from "@styled-icons/fa-solid/Robot";
import { Java } from "@styled-icons/fa-brands/Java";
// import { Amazonaws } from "@styled-icons/simple-icons/Amazonaws";
import { GoogleCloud } from "@styled-icons/boxicons-logos/GoogleCloud";
import { Firebase } from "@styled-icons/boxicons-logos/Firebase";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Sqlite } from "@styled-icons/simple-icons/Sqlite";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
// import { Python } from "@styled-icons/boxicons-logos/Python";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { LogoVercel } from "@styled-icons/ionicons-solid/LogoVercel";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { Sass } from "@styled-icons/fa-brands/Sass";
import { Expo } from "@styled-icons/simple-icons/Expo";
import { Jest } from "@styled-icons/simple-icons/Jest";
// import { Leaflet } from "@styled-icons/simple-icons/Leaflet";
// import { Express } from "@styled-icons/simple-icons/Express";
// import { Flutter } from "@styled-icons/boxicons-logos/Flutter";
import { Svelte } from "@styled-icons/simple-icons/Svelte";

//Custom components
import Tooltip from "@/components/Tooltip";
// import TitleSection from "@/components/TitleSection";
import CardProject from "@/components/CardProject";

const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: stretch;
    width: min(1400px, 92%);
    gap: 24px;
    transition: all 0.3s ease;

    @media (max-width: 1100px) {
        width: 92%;
        gap: 22px;
    }
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        width: 92%;
        gap: 20px;
    }
    @media (max-width: 601px) {
        width: 95%;
        gap: 16px;
    }
`;

// Filters removed

export const TitleSpan = styled.h3`
	z-index: 2;
	position: absolute;
	top: 0;
	left: 0;
	padding: 5px 15px 5px 10px;
	color: ${(props) => props.theme.colors.backgroundPage};
	background-color: ${(props) => props.theme.colors.branding};
	font-size: ${(props) => props.theme.fontSizes.md};
	border-radius: 2px 0 18px 0;

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}

	@media (max-width: 600px) {
		font-size: ${(props) => props.theme.fontSizes.xs};
	}
`;

const SectionPortifolio = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    padding-top: 60px;

    @media (max-width: 601px) {
        min-height: auto;
        padding-top: 40px;
        padding-bottom: 20px;
    }
`;

const HeaderWrapper = styled.div`
    width: min(1200px, 90%);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 24px;
`;

const HeaderLink = styled.a`
    font-size: 14px;
    font-weight: 600;
    color: #7c5cff;
    text-decoration: none;
    margin-bottom: 8px;
    &:hover { text-decoration: underline; }
`;

const HeaderTitle = styled.h1`
    margin: 0;
    font-size: 42px;
    line-height: 1.1;
    font-weight: 900;
    color: ${(props) => props.theme.colors.title};
    letter-spacing: 0.6px;

    @media (min-width: 1600px) {
        font-size: 48px;
    }
    @media (max-width: 900px) {
        font-size: 36px;
    }
    @media (max-width: 601px) {
        font-size: 32px;
    }
`;

// Footer CTA link for more projects on GitHub
const ProjectsFooterCTA = styled.a`
    margin-top: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 16px;
    border: 2px solid ${(props) => props.theme.colors.branding};
    border-radius: 10px;
    color: ${(props) => props.theme.colors.branding};
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 0.2px;
    transition: all 0.2s ease;

    &:hover {
        background: ${(props) => props.theme.colors.branding};
        color: ${(props) => props.theme.colors.backgroundPage};
        transform: translateY(-1px);
    }

    @media (max-width: 900px) {
        margin-top: 16px;
        padding: 10px 14px;
        border-radius: 8px;
        font-weight: 600;
    }
`;

// Modal removed as part of the redesign

export default function Portifolio() {
    const { language } = useContext(SettingsContext);

	const projects = useMemo(
		() => [
			{
				id: 24,
				title: language.portifolioPage.projects.id_24.title,
				description: language.portifolioPage.projects.id_24.description,
				liveDemoUrl: null,
				imageSourcePath: null,
				techs: [
					<Tooltip toolTipText="React.JS">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
				],
				sourceCodeLink: null,
				typeProject: ["MOBILE"],
				created_at: "29/08/2024",
			},
			{
				id: 23,
				title: language.portifolioPage.projects.id_23.title,
				description: language.portifolioPage.projects.id_23.description,
				liveDemoUrl: "https://www.prodosdigital.com.br/",
            imageSourcePath: "/images/portfolio-projects/prodos-digital.png",
				techs: [
					<Tooltip toolTipText="React.JS">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Next.JS">
						<Nextdotjs />
					</Tooltip>,
					<Tooltip toolTipText="Sass">
						<Sass />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
				],
				sourceCodeLink: null,
				typeProject: ["WEB"],
				created_at: "12/12/2024",
			},
			{
				id: 1,
				title: language.portifolioPage.projects.id_1.title,
				description: language.portifolioPage.projects.id_1.description,
				liveDemoUrl: null,
				imageSourcePath: null,
				techs: [
					<Tooltip toolTipText="Java">
						<Java />
					</Tooltip>,
					<Tooltip toolTipText="SEO">
						<Robot />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/Glaysonvisgueira/jfuzzylogic_irrigador",
				typeProject: ["BACKEND"],
				created_at: "09/06/2019",
			},
			{
				id: 2,
				title: language.portifolioPage.projects.id_2.title,
				description: language.portifolioPage.projects.id_2.description,
				liveDemoUrl: null,
            imageSourcePath: "/images/portfolio-projects/devradar.png",
				techs: [
					<Tooltip toolTipText="ReactJS">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Expo">
						<Expo />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
					<Tooltip toolTipText="NodeJS">
						<Nodejs />
					</Tooltip>,
					<Tooltip toolTipText="CSS">
						<Css3 />
					</Tooltip>,
					<Tooltip toolTipText="MongoDB">
						<Mongodb />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/Glaysonvisgueira/DevRadar",
				typeProject: ["BACKEND", "WEB", "MOBILE"],
				created_at: "02/02/2020",
			},
			{
				id: 3,
				title: language.portifolioPage.projects.id_3.title,
				description: language.portifolioPage.projects.id_3.description,
				liveDemoUrl: null,
            imageSourcePath: "/images/portfolio-projects/be-the-hero.png",
				techs: [
					<Tooltip toolTipText="ReactJS">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Expo">
						<Expo />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
					<Tooltip toolTipText="NodeJS">
						<Nodejs />
					</Tooltip>,
					<Tooltip toolTipText="CSS">
						<Css3 />
					</Tooltip>,
					<Tooltip toolTipText="MongoDB">
						<Mongodb />
					</Tooltip>,
					<Tooltip toolTipText="Jest">
						<Jest />
					</Tooltip>,
					<Tooltip toolTipText="SqLite">
						<Sqlite />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/Glaysonvisgueira/be-the-hero",
				typeProject: ["BACKEND", "WEB", "MOBILE"],
				created_at: "26/04/2020",
			},
			// {
			// 	id: 4,
			// 	title: language.portifolioPage.projects.id_4.title,
			// 	description: language.portifolioPage.projects.id_4.description,
			// 	liveDemoUrl: null,
			// 	imageSourcePath: null,
			// 	techs: [
			// 		<Tooltip toolTipText="NodeJS">
			// 			<Nodejs />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="Javascript">
			// 			<Javascript />
			// 		</Tooltip>,
			// 	],
			// 	sourceCodeLink: "https://github.com/Glaysonvisgueira/inthegra-nodejs",
			// 	typeProject: ["BACKEND"],
			// 	created_at: "04/04/2020",
			// },
			{
				id: 5,
				title: language.portifolioPage.projects.id_5.title,
				description: language.portifolioPage.projects.id_5.description,
				liveDemoUrl: null,
            imageSourcePath: "/images/portfolio-projects/letmeask.png",
				techs: [
					<Tooltip toolTipText="ReactJs">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
					<Tooltip toolTipText="Google Cloud">
						<GoogleCloud />
					</Tooltip>,
					<Tooltip toolTipText="Sass">
						<Sass />
					</Tooltip>,
					<Tooltip toolTipText="Firebase">
						<Firebase />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/Glaysonvisgueira/letmeask-NLW06",
				typeProject: ["WEB", "MOBILE"],
				created_at: "24/06/2021",
			},
			{
				id: 6,
				title: language.portifolioPage.projects.id_6.title,
				description: language.portifolioPage.projects.id_6.description,
				liveDemoUrl: null,
            imageSourcePath: "/images/portfolio-projects/plantmanager.png",
				techs: [
					<Tooltip toolTipText="ReactJS">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Typescript">
						<Typescript />
					</Tooltip>,
					<Tooltip toolTipText="SqLite">
						<Sqlite />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/Glaysonvisgueira/plantmanager",
				typeProject: ["MOBILE"],
				created_at: "19/04/2021",
			},
			// {
			// 	id: 7,
			// 	title: language.portifolioPage.projects.id_7.title,
			// 	description: language.portifolioPage.projects.id_7.description,
			// 	liveDemoUrl: null,
			// 	imageSourcePath: null,
			// 	techs: [
			// 		<Tooltip toolTipText="NodeJS">
			// 			<Nodejs />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="Typescript">
			// 			<Typescript />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="SqLite">
			// 			<Sqlite />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="Jest">
			// 			<Jest />
			// 		</Tooltip>,
			// 	],
			// 	sourceCodeLink: "https://github.com/Glaysonvisgueira/next-level-week-04-nodejs",
			// 	typeProject: ["BACKEND"],
			// 	created_at: "23/02/2021",
			// },
			// {
			// 	id: 8,
			// 	title: language.portifolioPage.projects.id_8.title,
			// 	description: language.portifolioPage.projects.id_8.description,
			// 	liveDemoUrl: null,
			// 	imageSourcePath: null,
			// 	techs: [
			// 		<Tooltip toolTipText="NodeJS">
			// 			<Nodejs />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="Javascript">
			// 			<Javascript />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="MongoDB">
			// 			<Mongodb />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="AWS">
			// 			<Amazonaws />
			// 		</Tooltip>,
			// 	],
			// 	sourceCodeLink: "https://github.com/Glaysonvisgueira/api-fasttrack",
			// 	typeProject: ["BACKEND"],
			// 	created_at: "27/11/2020",
			// },
			{
				id: 9,
				title: language.portifolioPage.projects.id_9.title,
				description: language.portifolioPage.projects.id_9.description,
				liveDemoUrl: null,
				imageSourcePath: null,
				techs: [
					<Tooltip toolTipText="ReactJS">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Expo">
						<Expo />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/Glaysonvisgueira/inthegre-se",
				typeProject: ["MOBILE", "BACKEND"],
				created_at: "05/05/2020",
			},
			// {
			// 	id: 10,
			// 	title: language.portifolioPage.projects.id_10.title,
			// 	description: language.portifolioPage.projects.id_10.description,
			// 	liveDemoUrl: null,
			// 	imageSourcePath: null,
			// 	techs: [
			// 		<Tooltip toolTipText="Python">
			// 			<Python />
			// 		</Tooltip>,
			// 	],
			// 	sourceCodeLink: "https://github.com/Glaysonvisgueira/crawlerRadaresVelocidade",
			// 	typeProject: ["BACKEND"],
			// 	created_at: "16/06/2019",
			// },
			{
				id: 11,
				title: language.portifolioPage.projects.id_11.title,
				description: language.portifolioPage.projects.id_11.description,
				liveDemoUrl: "https://glaysonvisgueira.vercel.app/",
            imageSourcePath: "/images/portfolio-projects/portfolio-page.png",
				techs: [
					<Tooltip toolTipText="ReactJS">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="NextJS">
						<Nextdotjs />
					</Tooltip>,
					<Tooltip toolTipText="Styled Components">
						<Styledcomponents />
					</Tooltip>,
					<Tooltip toolTipText="Vercel">
						<LogoVercel />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/Glaysonvisgueira/glaysonvisgueira_next-js",
				typeProject: ["WEB"],
				created_at: "10/06/2022",
			},
			// {
			// 	id: 12,
			// 	title: language.portifolioPage.projects.id_12.title,
			// 	description: language.portifolioPage.projects.id_12.description,
			// 	liveDemoUrl: null,
			// 	imageSourcePath: null,
			// 	techs: [
			// 		<Tooltip toolTipText="ReactJS">
			// 			<ReactLogo />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="Leaflet">
			// 			<Leaflet />
			// 		</Tooltip>,
			// 	],
			// 	sourceCodeLink: "https://github.com/Glaysonvisgueira/dashboard-control-mobile-implantacao",
			// 	typeProject: ["WEB", "BACKEND"],
			// 	created_at: "29/06/2021",
			// },
			// {
			// 	id: 13,
			// 	title: language.portifolioPage.projects.id_13.title,
			// 	description: language.portifolioPage.projects.id_13.description,
			// 	liveDemoUrl: null,
			// 	imageSourcePath: null,
			// 	techs: [
			// 		<Tooltip toolTipText="NodeJS">
			// 			<Nodejs />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="AWS">
			// 			<Amazonaws />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="Express">
			// 			<Express />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="MongoDB">
			// 			<Mongodb />
			// 		</Tooltip>,
			// 	],
			// 	sourceCodeLink: "https://github.com/Glaysonvisgueira/controlmobile-dashboard-api",
			// 	typeProject: ["BACKEND"],
			// 	created_at: "02/07/2021",
			// },
			// {
			// 	id: 14,
			// 	title: language.portifolioPage.projects.id_14.title,
			// 	description: language.portifolioPage.projects.id_14.description,
			// 	liveDemoUrl: null,
			// 	imageSourcePath: null,
			// 	techs: [
			// 		<Tooltip toolTipText="Flutter">
			// 			<Flutter />
			// 		</Tooltip>,
			// 	],
			// 	sourceCodeLink: "https://github.com/Glaysonvisgueira/controlmobile-dashboard-api",
			// 	typeProject: ["MOBILE"],
			// 	created_at: "13/08/2022",
			// },
			{
				id: 15,
				title: language.portifolioPage.projects.id_15.title,
				description: language.portifolioPage.projects.id_15.description,
				liveDemoUrl: "https://calculadora-svelte-liart.vercel.app/",
            imageSourcePath: "/images/portfolio-projects/svelt-calculadora.png",
				techs: [
					<Tooltip toolTipText="Svelte">
						<Svelte />
					</Tooltip>,
					<Tooltip toolTipText="Typescript">
						<Typescript />
					</Tooltip>,
					<Tooltip toolTipText="Html">
						<Html5 />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/Glaysonvisgueira/svelte-calculadora",
				typeProject: ["WEB"],
				created_at: "28/01/2023",
			},
			{
				id: 16,
				title: language.portifolioPage.projects.id_16.title,
				description: language.portifolioPage.projects.id_16.description,
				liveDemoUrl: "https://layout-mui-boilerplate.vercel.app/dashboards",
            imageSourcePath: "/images/portfolio-projects/mui-v5-layout-dashboard.png",
				techs: [
					<Tooltip toolTipText="React.JS">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Next.JS">
						<Nextdotjs />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/Glaysonvisgueira/layout-mui-boilerplate",
				typeProject: ["WEB"],
				created_at: "28/01/2023",
			},
			{
				id: 17,
				title: language.portifolioPage.projects.id_17.title,
				description: language.portifolioPage.projects.id_17.description,
				liveDemoUrl: null,
				imageSourcePath: null,
				techs: [
					<Tooltip toolTipText="React Native">
						<ReactLogo />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/Glaysonvisgueira/rnmaps",
				typeProject: ["MOBILE"],
				created_at: "27/03/2023",
			},
			{
				id: 18,
				title: language.portifolioPage.projects.id_18.title,
				description: language.portifolioPage.projects.id_18.description,
				liveDemoUrl: null,
				imageSourcePath: null,
				techs: [
					<Tooltip toolTipText="React Native">
						<ReactLogo />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/Glaysonvisgueira/rn-ecommerce-ui",
				typeProject: ["MOBILE"],
				created_at: "10/04/2023",
			},
			// {
			// 	id: 19,
			// 	title: language.portifolioPage.projects.id_19.title,
			// 	description: language.portifolioPage.projects.id_19.description,
			// 	liveDemoUrl: null,
			// 	imageSourcePath: null,
			// 	techs: [
			// 		<Tooltip toolTipText="Firebase">
			// 			<Firebase />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="Javascript">
			// 			<Javascript />
			// 		</Tooltip>,
			// 		<Tooltip toolTipText="NodeJS">
			// 			<Nodejs />
			// 		</Tooltip>,
			// 	],
			// 	sourceCodeLink: "https://github.com/Glaysonvisgueira/firebase-nodejs-api",
			// 	typeProject: ["BACKEND"],
			// 	created_at: "27/03/2023",
			// },
			{
				id: 20,
				title: language.portifolioPage.projects.id_20.title,
				description: language.portifolioPage.projects.id_20.description,
				liveDemoUrl: "https://material-ui-v6-dashboards-test.vercel.app/",
            imageSourcePath: "/images/portfolio-projects/mui-v6-layout-dashboard.png",
				techs: [
					<Tooltip toolTipText="React">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/Glaysonvisgueira/material-ui-v6-dashboards-test",
				typeProject: ["FRONTEND"],
				created_at: "03/10/2024",
			},
			{
				id: 21,
				title: language.portifolioPage.projects.id_21.title,
				description: language.portifolioPage.projects.id_21.description,
				liveDemoUrl: "https://state-management-jotai-vs-zustand.vercel.app",
            imageSourcePath: "/images/portfolio-projects/state-management.png",
				techs: [
					<Tooltip toolTipText="React">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/Glaysonvisgueira/state-management-jotai-vs-zustand",
				typeProject: ["FRONTEND"],
				created_at: "25/07/2023",
			},

			{
				id: 22,
				title: language.portifolioPage.projects.id_22.title,
				description: language.portifolioPage.projects.id_22.description,
				liveDemoUrl: "https://www.cedulapromotora.com.br",
                imageSourcePath: "/images/portfolio-projects/landing-cedula-promotora.png",
				techs: [
					<Tooltip toolTipText="React">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
				],
				sourceCodeLink: null,
				typeProject: ["FRONTEND"],
				created_at: "01/09/2024",
			},
		],
		[]
	);

    // Ordered list to match attached portfolio images and titles
    const orderedProjects = [
        { id: 1, title: "Finance", category: "Web development", linkUrl: null, description: "A modern dashboard for tracking expenses, revenue and budgets with clean charts and card summaries.", imageSourcePath: "/images/portfolio-projects/project-1.jpg", techs: [] },
        { id: 2, title: "Orizon", category: "Web development", linkUrl: null, description: "Analytics overview that highlights portfolio KPIs, conversions and growth trends in a crisp, bright UI.", imageSourcePath: "/images/portfolio-projects/project-2.png", techs: [] },
        { id: 3, title: "Weather App", category: "Mobile application", linkUrl: null, description: "Multi-panel weather interface with hourly and weekly forecasts, designed for fast, glanceable insights.", imageSourcePath: "/images/portfolio-projects/project-3.png", techs: [] },
        { id: 4, title: "MOVIES APP", category: "Mobile application", linkUrl: null, description: "Movie discovery experience featuring rich posters, grid browsing and clean detail pages for titles you love.", imageSourcePath: "/images/portfolio-projects/project-4.png", techs: [] },
        { id: 5, title: "AR E-Commerce", category: "Mobile application", linkUrl: null, description: "Concept screens for an AR-powered shopping flow—preview products, compare and move smoothly to checkout.", imageSourcePath: "/images/portfolio-projects/project-5.jpg", techs: [] },
        { id: 6, title: "Open Reads", category: "Mobile application", linkUrl: null, description: "Book browsing layouts with large visuals and long-form descriptions, crafted for a calm reading feel.", imageSourcePath: "/images/portfolio-projects/project-6.jpg", techs: [] },
        { id: 7, title: "Open Reads", category: "Mobile application", linkUrl: null, description: "An alternate Open Reads set showcasing product pages and mobile listing views in a lightweight design.", imageSourcePath: "/images/portfolio-projects/project-7.jpg", techs: [] },
        { id: 8, title: "Meditation", category: "Mobile application", linkUrl: null, description: "Mindfulness app screens including sessions, streak tracking and guided prompts to help you focus.", imageSourcePath: "/images/portfolio-projects/project-8.jpg", techs: [] },
        { id: 9, title: "Music App", category: "Mobile application", linkUrl: null, description: "Streamlined music UI with playlists, album views and player controls optimized for mobile.", imageSourcePath: "/images/portfolio-projects/project-9.jpg", techs: [] },
        { id: 10, title: "StoryPad", category: "Mobile application", linkUrl: null, description: "Note-taking layouts with tags, archives and a distraction-free reading mode for longer notes.", imageSourcePath: "/images/portfolio-projects/project-10.jpg", techs: [] },
        { id: 11, title: "Shopping App", category: "Mobile application", linkUrl: null, description: "E‑commerce app kit including home feed, product detail, cart and checkout screens.", imageSourcePath: "/images/portfolio-projects/project-11.jpg", techs: [] },
        { id: 12, title: "Book Search", category: "Mobile application", linkUrl: null, description: "Search-first browsing for books, categories and author pages with concise summaries.", imageSourcePath: "/images/portfolio-projects/project-12.jpg", techs: [] },
        { id: 13, title: "Translator", category: "Mobile application", linkUrl: "https://github.com/MUZAMMIL-JAVED/R-Translator", description: "Lightweight translator UI with conversational preview and quick language switching.", imageSourcePath: "/images/portfolio-projects/project-13.jpg", techs: [] },
        { id: 14, title: "Event Mangement", category: "Mobile application", linkUrl: null, description: "Event admin views to create, approve and manage registrations with clear status panels.", imageSourcePath: "/images/portfolio-projects/project-14.jpg", techs: [] },
        { id: 15, title: "Attendance Mangement System", category: "Mobile application", linkUrl: "https://github.com/MUZAMMIL-JAVED/Attendance_System", description: "Attendance tracking forms and logs with dashboards for daily status and summaries.", imageSourcePath: "/images/portfolio-projects/project-15.jpg", techs: [] },
        { id: 16, title: "News App", category: "Mobile application", linkUrl: null, description: "Compact news reader with headlines, article previews and a simple, fast navigation.", imageSourcePath: "/images/portfolio-projects/project-16.jpg", techs: [] },
        { id: 17, title: "Blood Bank App", category: "Mobile application", linkUrl: null, description: "Donation tracking, nearby centers and appointment scheduling flows in a friendly UI.", imageSourcePath: "/images/portfolio-projects/project-17.jpg", techs: [] },
        { id: 18, title: "Summary", category: "Web development", linkUrl: null, description: "Executive dashboard with KPIs, cards and table snapshots presented in a clean layout.", imageSourcePath: "/images/portfolio-projects/project-18.png", techs: [] },
        { id: 19, title: "Arrival", category: "Web development", linkUrl: null, description: "Automotive analytics overview—dark theme charts and multi‑screen telemetry views.", imageSourcePath: "/images/portfolio-projects/project-19.png", techs: [] },
    ];

    const array_projects = useMemo(() => orderedProjects, []);

    return (
        <SectionPortifolio id="section-portifolio">
            <HeaderWrapper>
                <HeaderLink href="#">Things I Built and Didn't Break</HeaderLink>
                <HeaderTitle>MY PROJECTS</HeaderTitle>
            </HeaderWrapper>

            <ContainerGrid>
                {array_projects?.map((project, index) => (
                    <Fade triggerOnce key={index} style={{ height: "100%" }}>
                        <CardProject
                            title={project.title}
                            description={project.description}
                            techs={project.techs}
                            imageSourcePath={project.imageSourcePath}
                            category={project.category}
                            linkUrl={project.linkUrl}
                        />
                    </Fade>
                ))}
            </ContainerGrid>

            <ProjectsFooterCTA
                href="https://github.com/MUZAMMIL-JAVED"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub to check more projects"
                title="Visit GitHub for more projects"
            >
                Visit GitHub to check more projects
            </ProjectsFooterCTA>
        </SectionPortifolio>
    );
}
