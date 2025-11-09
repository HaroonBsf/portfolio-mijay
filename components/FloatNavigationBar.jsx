import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

//Ícones
import { Home } from "@styled-icons/heroicons-solid/Home";
import { Timeline } from "@styled-icons/fluentui-system-regular/Timeline";
import { FolderBriefcase } from "@styled-icons/fluentui-system-filled/FolderBriefcase";
import { Badge } from "@styled-icons/material-outlined/Badge";
import { ChatDots } from "@styled-icons/bootstrap/ChatDots";

const NavigationBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: row;
	width: 400px;
	height: 60px;
	border-radius: 100px;
	position: fixed;
	z-index: 10;
	bottom: 30px;
	//border: 1px solid ${(props) => props.theme.colors.branding};
	backdrop-filter: blur(16px) saturate(180%);
	-webkit-backdrop-filter: blur(16px) saturate(180%);
	background-color: #00000040;

	@media (min-width: 601px) {
		display: none;
		width: 100%;
	}

	@media (max-width: 601px) {
		width: 80%;
	}

	@media (max-width: 425px) {
		width: 95%;
	}
`;

const NavOption = styled.div`
	transition: all 0.5s ease;
	padding: 5px;
	border-radius: 50%;
	border: 1px solid ${(props) => (props.isActive ? props.theme.colors.branding : "transparent")};

	&:hover {
		cursor: pointer;
	}
	svg {
		width: 26px;
		height: 26px;
		color: ${(props) => (props.isActive ? props.theme.colors.branding : "#ccc")};
	}
`;

export default function FloatNavigationBar(props) {
	const [active, setActive] = useState("#section-home");

	return (
		<NavigationBar>
			<Link href="#section-home" passHref>
				<NavOption
					className="button"
					isActive={active == "#section-home" ? true : false}
					onClick={() => {
						setActive("#section-home");
					}}>
					<Home />
				</NavOption>
			</Link>



            <Link href="#section-about" passHref>
                <NavOption
                    className="button"
                    isActive={active == "#section-about" ? true : false}
                    onClick={() => {
                        setActive("#section-about");
                    }}>
                    <Badge />
                </NavOption>
            </Link>
			<Link href="#section-portifolio" passHref>
				<NavOption
					className="button"
					isActive={active == "#section-portifolio" ? true : false}
					onClick={() => {
						setActive("#section-portifolio");
					}}>
					<FolderBriefcase />
				</NavOption>
			</Link>



            <Link href="#section-experience" passHref>
                <NavOption
                    className="button"
                    isActive={active == "#section-experience" ? true : false}
                    onClick={() => {
                        setActive("#section-experience");
                    }}>
                    <Timeline />
                </NavOption>
            </Link>

			{/* Testimonials section link (last icon) */}
			<Link href="#testimonials" passHref>
				<NavOption
					className="button"
					isActive={active == "#testimonials" ? true : false}
					onClick={() => {
						setActive("#testimonials");
					}}>
					<ChatDots />
				</NavOption>
			</Link>
		</NavigationBar>
	);
}
