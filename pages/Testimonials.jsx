import React, { useContext } from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import { useTheme } from "styled-components";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Custom components
import TitleSection from "@/components/TitleSection";
import { BodyText } from "@/styles/ui";

//Icons
import { QuotesLeft } from "@styled-icons/icomoon";
import { StarFill } from "@styled-icons/bootstrap";

const Container = styled.div`
	width: 60%;

	@media (max-width: 1600px) {
		width: 75%;
	}

	@media (max-width: 1400px) {
		width: 80%;
	}

	@media (max-width: 1100px) {
		width: 85%;
	}

	@media (max-width: 900px) {
		width: 90%;
	}
`;

const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    padding: 60px 0;

    @media (max-width: 601px) {
        padding: 40px 0;
    }
`;

const Testimonial = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 520px;
    height: 100%;
    min-height: 300px;
    margin-right: 24px;
    padding: 22px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.backgroundSecondary};
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
    transition: transform 240ms ease, box-shadow 240ms ease;

	&:hover {
		transform: translateY(-4px);
		box-shadow: 0 14px 30px rgba(0,0,0,0.08);
	}
	/* height: 100px; */
	/* border: 1px solid ${(props) => props.theme.colors.inactiveTitle}; */

	.quote-icon {
		color: ${(props) => props.theme.colors.branding};
		width: 44px;
		height: 44px;
		margin-bottom: 20px;
	}

    /* Quote text uses theme BodyText via component; keep spacing only */
    .quote {
        margin-bottom: 24px;
    }

    .user-star-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        flex-direction: row;

		.stars-container {
			display: flex;
			align-items: center;
			justify-content: center;

			.star {
				width: 20px;
				height: 20px;
				color: ${(props) => props.theme.colors.inactiveTitle};
			}

			.star-filled {
				color: ${(props) => props.theme.colors.branding};
			}

			.star-filled:nth-of-type(-n + 4) {
				margin-right: 5px;
			}
		}

            .user-container {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                flex-direction: row;

                .user-data {
                    margin-left: 0;
                    h4 {
                        color: ${(props) => props.theme.colors.title};
                        font-weight: 700;
                    }
                    span {
                        color: ${(props) => props.theme.colors.body};
                        font-weight: 400;
                    }
                }

			@media (max-width: 601px) {
				.user-data {
					h4 {
						font-size: 14px;
					}

					span {
						font-size: 14px;
					}
                }
            }
        }
    }

    @media (max-width: 601px) {
        width: 92%;
        margin-right: 16px;
        padding: 16px;

        .quote-icon {
            width: 32px;
            height: 32px;
            margin-bottom: 16px;
        }

        .user-star-container {
            .stars-container {
                .star {
                    width: 16px;
                    height: 16px;
                }
            }
        }
    }
`;

const testimonials = [
    {
        quote:
            "An impressive portfolio build—clean architecture, subtle motion, and a cohesive visual language that feels premium.",
        name: "Waleed Arif",
        role: "Business Developer",
        stars: 5,
    },
    {
        quote:
            "We shipped faster than planned. Clear communication, attention to detail, and performance-first engineering.",
        name: "Mia Thompson",
        role: "Founder, SaaS Startup",
        stars: 5,
    },
    {
        quote:
            "Animations are tasteful and purposeful. The UI feels stable across devices and the codebase is maintainable.",
        name: "Lucas Ferreira",
        role: "Tech Lead",
        stars: 4,
    },
    {
        quote:
            "Design system integration was seamless. Colors, typography, and spacing matched the brand perfectly.",
        name: "Sofia Ruiz",
        role: "Design Director",
        stars: 5,
    },
    {
        quote:
            "Pixel-accurate delivery with thoughtful refactors. It’s a modern, reliable showcase of work.",
        name: "Haroon Majeed",
        role: "Engineer",
        stars: 4,
    },
];

export default function Testimonials() {
    const { language } = useContext(SettingsContext);
    const theme = useTheme();

    return (
        <Section id="testimonials">
            <TitleSection title={language.testimonialPage.title} subtitle={language.testimonialPage.subtitle} hasMarginBottom />

            <Marquee autoFill gradient loop={0} direction="left" speed={50} gradientColor={theme.colors.backgroundPageRgb}>
                {testimonials.map((t, index) => (
                    <Testimonial key={index}>
                        <QuotesLeft className="quote-icon" />

                        <div className="quote">
                            <BodyText>{t.quote}</BodyText>
                        </div>

                        <div className="user-star-container">
                            <div className="user-container">
                                <div className="user-data">
                                    <h4>{t.name}</h4>
                                    <span>{t.role}</span>
                                </div>
                            </div>

                            <div className="stars-container">
                                {[...Array(5)].map((_, i) => (
                                    <StarFill key={i} className={`star ${i < t.stars ? "star-filled" : ""}`} />
                                ))}
                            </div>
                        </div>
                    </Testimonial>
                ))}
            </Marquee>
        </Section>
    );
}
