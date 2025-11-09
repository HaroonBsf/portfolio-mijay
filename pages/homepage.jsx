import React, { useContext } from "react";
// Link import removed because the Learn More button was deleted

//Third's librarys
import styled from "styled-components";
import { useTheme } from "styled-components";
import dynamic from "next/dynamic";
// Avoid SSR import-time window access from react-progressbar-on-scroll
const ProgressBar = dynamic(() => import("react-progressbar-on-scroll"), { ssr: false });

//Custom components
import Head from "@/components/Head";
import FloatNavigationBar from "@/components/FloatNavigationBar";
// import ScrollDownAnimation from "@/components/ScrollDownAnimation";
//import SocialNetworkRowStack from "@/components/SocialNetworkRowStack";

//UI Components
import { FluidContainer } from "@/styles/ui";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

// CV file public URL (avoid importing from public in SSR)
const cvFile = "/pdf/muzammil_javed_cv.pdf";

const LandingPageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;

	@media (max-width: 930px) {
		flex-direction: column;
	}

	@media (max-width: 850px) {
		margin-bottom: 60px;
	}
`;

const TitleLandingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    text-align: center;
    /* Tight, consistent vertical rhythm */
    gap: 16px;
`;

const SubTitleLanding = styled.div`
    font-weight: 400;
    color: ${(props) => props.theme.colors.subtitle};
    text-align: center;
    margin-top: 12px;
    margin-bottom: 24px;
    width: auto;
    /* Make subtitle slightly larger on big screens */
    font-size: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    border-radius: 9999px;
    border: 1px solid rgba(0,0,0,0.08);
    box-shadow: 0 1px 2px rgba(0,0,0,0.04);

    @media (max-width: 1980px) {
        font-size: ${(props) => props.theme.fontSizes.lg};
    }

    @media (max-width: 1200px) {
        font-size: ${(props) => props.theme.fontSizes.md};
    }
`;

// Removed landing animation container since animation is no longer used

// Removed "Learn more" button styles

const ButtonDownloadCV = styled.button`
	z-index: 1;
	position: relative;
	width: 200px;
	height: 44px;
	transition: all 0.3s ease;
	font-size: ${(props) => props.theme.fontSizes.lg};
	/* border: 2px solid ${(props) => props.theme.colors.branding}; */
	border: none;
	color: ${(props) => props.theme.colors.branding};
	border-radius: 4px;
	background-color: ${(props) => props.theme.colors.backgroundSecondary};
	font-weight: 700;

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	@media (max-width: 601px) {
		width: 70%;
	}

	@media (max-width: 425px) {
		width: 100%;
	}
`;

const SectionHomePage = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    min-height: 100vh;
    position: relative;

    /* Scale container width across devices */
    @media (max-width: 900px) {
        width: 90%;
    }
    @media (max-width: 601px) {
        width: 95%;
        min-height: 90vh;
    }
`;

const IntroText = styled.span`
    display: inline-block;
    font-weight: 500;
    color: ${(props) => props.theme.colors.body};
    font-size: 16px;
    margin-bottom: 16px;
    
    /* Slightly increase on larger displays */
    @media (min-width: 1600px) {
        font-size: 18px;
    }
    @media (min-width: 1980px) {
        font-size: 20px;
    }
    @media (max-width: 900px) {
        font-size: 15px;
    }
    @media (max-width: 601px) {
        font-size: 14px;
    }
`;

const DeveloperName = styled.span`
    font-weight: 800;
    color: ${(props) => props.theme.colors.title};
`;

const HelloImage = styled.img`
    width: 40px;
    height: 35px;
    display: inline-block;
    margin-right: 5px;
    vertical-align: middle;
    transform: translateY(-3px);

    /* Scale hello image with viewport */
    @media (min-width: 1600px) {
        width: 46px;
        height: 40px;
    }
    @media (max-width: 900px) {
        width: 36px;
        height: 32px;
    }
    @media (max-width: 601px) {
        width: 32px;
        height: 28px;
    }
`;

// Removed chip techs to simplify the hero per the new design

const WrapperButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
    margin-top: 28px;
`;

const HeroTitle = styled.h1`
    font-weight: 900;
    color: ${(props) => props.theme.colors.title};
    font-size: 72px;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin: 0;
    margin-bottom: 16px;

    /* Make hero title larger on very wide screens */
    @media (min-width: 1600px) {
        font-size: 88px;
    }
    @media (min-width: 1980px) {
        font-size: 96px;
    }

    .brand {
        color: ${(props) => props.theme.colors.branding};
    }

    @media (max-width: 1400px) {
        font-size: 56px;
    }
    @media (max-width: 900px) {
        font-size: 42px;
    }
    @media (max-width: 601px) {
        font-size: 36px;
    }
`;

const VisitWorkButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 20px;
    background: #0f0f0f;
    color: #ffffff;
    border-radius: 9999px;
    font-weight: 700;
    font-size: ${(props) => props.theme.fontSizes.md};
    text-decoration: none;
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
    transition: all 0.2s ease;
    &:hover { opacity: 0.9; cursor: pointer; }

    /* Scale the button a bit on large screens */
    @media (min-width: 1600px) {
        font-size: ${(props) => props.theme.fontSizes.lg};
        padding: 14px 24px;
    }
    @media (min-width: 1980px) {
        padding: 16px 26px;
    }
    @media (max-width: 601px) {
        font-size: ${(props) => props.theme.fontSizes.sm};
        padding: 10px 16px;
    }
`;

/* TrustedText removed per request */

export default function HomePage() {
    const theme = useTheme();
    const { language } = useContext(SettingsContext);

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = cvFile;
		link.download = "muzammil_javed_cv.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<FluidContainer id="section-home" hasMinHeight>
			<SectionHomePage>
                <FloatNavigationBar />
                <ProgressBar color={theme.colors.branding} height={5} />
                <Head
                    title="Portfólio de projetos de programação"
                    metaDescription="Web portifólio de projetos de programação do Dev Muzammil Javed."
                    keywords="Muzammil Javed, Muzammil, Javed, Programação, Portifólio, Dev, Programador, Developer, Desenvolvedor de software, analista de sistemas, programador fullstack, desenvolvedor frontend"
                />
                <LandingPageContainer>
                    <TitleLandingContainer>
                        {/* Bold the developer name for pixel-perfect match */}
                        {/* Using a separate styled span ensures only the name is bold */}
                        <IntroText>
                            <HelloImage src="/img/hello.png" alt="Hello" /> Hey, I'm <DeveloperName>{language.landingPage.firstTypeText}</DeveloperName>
                        </IntroText>
                        <HeroTitle>
                            FULL STACK <span className="brand">DEVELOPER</span>
                        </HeroTitle>
                        <SubTitleLanding>Crafting And Breaking The Internet Daily</SubTitleLanding>
                        <WrapperButtons>
                            <VisitWorkButton href={cvFile} download="muzammil_javed_cv.pdf">DOWNLOAD CV</VisitWorkButton>
                </WrapperButtons>
                        {/* Trusted message removed */}
                    </TitleLandingContainer>
                    {/* Removed landing animation component */}
                </LandingPageContainer>
                {/* <ScrollDownAnimation /> */}
            </SectionHomePage>
        </FluidContainer>
    );
}
