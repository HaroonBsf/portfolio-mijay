import React, { useContext } from "react";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Third's librarys
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

//Custom components
import SocialNetworkRowStack from "@/components/SocialNetworkRowStack";
import TitleSection from "@/components/TitleSection";


const WrapperAboutMe = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 60%;

    @media (max-width: 1600px) {
        width: 85%;
    }

    @media (max-width: 900px) {
        width: 92%;
    }

    @media (max-width: 601px) {
        width: 96%;
    }

	.container {
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: column;
		width: 100%;

		@media (max-width: 900px) {
			align-items: center;
			justify-content: center;
			flex-direction: column;
			width: 100%;
			height: auto;
		}

		.right-view {
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
			flex-direction: column;
			width: 100%;
			height: 100%;

			.tech-and-cv {
				display: flex;
				align-items: center;
				justify-content: space-between;

				@media (max-width: 601px) {
					flex-direction: column;
				}
			}

			@media (max-width: 1200px) {
				width: 55%;
			}

			@media (max-width: 900px) {
				width: 100%;
				align-items: flex-start;
				justify-content: flex-start;
				margin-top: 20px;
			}

			h3 {
				color: ${(props) => props.theme.colors.branding};
				font-size: 26px;

				@media (max-width: 900px) {
					font-size: 18px;
				}
			}

			p {
				color: ${(props) => props.theme.colors.body};
				font-size: ${(props) => props.theme.fontSizes.md};
				text-align: justify;
				margin-top: 15px;
				margin-bottom: 15px;

				strong {
					font-weight: 700;
					color: ${(props) => props.theme.colors.branding};
				}

				@media (max-width: 600px) {
					font-size: ${(props) => props.theme.fontSizes.sm};
				}
			}
		}
	}
`;


const SectionSobreMim = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    scroll-margin-top: 80px;
    padding: 60px 0;

    @media (max-width: 601px) {
        padding: 40px 0;
    }
`;

// About header and content styling to match the reference UI
const AboutHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 40px;
`;

const AboutLabel = styled.span`
    color: ${(props) => props.theme.colors.branding};
    font-weight: 800;
    letter-spacing: 0.02em;
    font-size: 18px;
    margin-bottom: 16px;

    @media (min-width: 1600px) {
        font-size: 20px;
    }
    @media (max-width: 900px) {
        font-size: 16px;
    }
`;

const AboutTitle = styled.h2`
    color: ${(props) => props.theme.colors.title};
    font-weight: 900;
    font-size: 72px;
    letter-spacing: -0.02em;
    margin: 0 0 24px 0;

    @media (max-width: 1400px) {
        font-size: 58px;
    }
    @media (max-width: 900px) {
        font-size: 46px;
    }
    @media (max-width: 601px) {
        font-size: 36px;
    }
`;

const AboutParagraph = styled.p`
    color: #000;
    font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif;
    font-size: 48px;
    font-weight: 900;
    line-height: 1.42;
    letter-spacing: -0.006em;
    margin: 24px 40px;
    max-width: 1200px;
    text-align: left;

    strong {
        font-weight: 900;
        color: ${(props) => props.theme.colors.branding};
    }

    @media (max-width: 1200px) {
        font-size: 40px;
        margin: 20px 28px;
    }
    @media (max-width: 900px) {
        font-size: 30px;
        margin: 16px 18px;
    }
    @media (max-width: 601px) {
        font-size: 22px;
        margin: 12px 16px;
    }
`;

const AboutParagraphFaded = styled(AboutParagraph)`
    opacity: 0.45;
`;

const BottomActions = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 40px;
    margin-top: 24px;

    @media (max-width: 601px) {
        padding: 0 16px;
    }
`;

export default function SobreMim(props) {
    const { language } = useContext(SettingsContext);

    return (
        <SectionSobreMim id="section-about">
            <WrapperAboutMe>
                <div className="container">
                    <div className="right-view">
                        <Fade triggerOnce delay={200}>
                        <AboutHeader>
                            <AboutLabel>The Developer Behind the Keyboard</AboutLabel>
                            <AboutTitle>ABOUT ME</AboutTitle>
                        </AboutHeader>
                        <AboutParagraph>
                            {language.aboutMePage.paragraph_one}
                        </AboutParagraph>
                        <AboutParagraph>
                            {language.aboutMePage.paragraph_two}
                        </AboutParagraph>
                        <AboutParagraph>
                            {language.aboutMePage.paragraph_three}
                        </AboutParagraph>
                        
                        <BottomActions>
                            <SocialNetworkRowStack />
                        </BottomActions>
                        </Fade>
                    </div>
                </div>
            </WrapperAboutMe>
        </SectionSobreMim>
	);
}
