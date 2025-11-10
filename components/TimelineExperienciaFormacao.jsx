import React, { useContext } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//ícones
import { School } from "@styled-icons/ionicons-outline/School";
import { LearningApp } from "@styled-icons/fluentui-system-filled/LearningApp";
import { Work } from "@styled-icons/material-rounded/Work";

const LearningAppIcon = styled(LearningApp)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const SchoolIcon = styled(School)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const WorkIcon = styled(Work)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const TimelineContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
`;

export const TitleContentTimeline = styled.h3`
	.vertical-timeline-element-title {
		color: ${(props) => props.theme.colors.branding};
	}
	@media (max-width: 1600px) {
		font-size: ${(props) => props.theme.fontSizes.xl};
	}

	@media (max-width: 1400px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}
`;

const BoldText = styled.h4`
	color: ${(props) => props.theme.colors.title};
	font-weight: 800;
	margin-top: 2px;
	margin-bottom: 2px;
	span {
		font-weight: 400;
	}
`;

export default function TimelinePortifolio(props) {
	const { language } = useContext(SettingsContext);
	const theme = useTheme();

	return (
		<VerticalTimeline lineColor={theme.colors.branding}>
			{/* Present - AI & Automation (Freelance) */}
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `4px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}
				contentArrowStyle={{ borderRight: `7px solid ${theme.colors.backgroundSecondary}` }}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "2px 8px", borderRadius: "4px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>Present</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>Bit n Byte Digital Solutions</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span>AI & Automation Engineer</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>Generative AI & Workflow Automation</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>LLM-Driven Business Process Automation</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
			{/* 2025 - Personal Project (Object Detection & Recognition) */}
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `4px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}
				contentArrowStyle={{ borderRight: `7px solid ${theme.colors.backgroundSecondary}` }}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "2px 8px", borderRadius: "4px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2025</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>Personal Project</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>Personal project</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Object Detection & Recognition System (OpenCV + CNN)</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* 2025 - Personal Project (Rice Classification) */}
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `4px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}
				contentArrowStyle={{ borderRight: `7px solid ${theme.colors.backgroundSecondary}` }}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "2px 8px", borderRadius: "4px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2025</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>Personal Project | AI & Computer Vision</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>Personal project</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Image-based Rice Classification App (VGG16)</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* 2024–2025 - Web & Application Development (NETCLOUD) */}
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `4px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}
				contentArrowStyle={{ borderRight: `7px solid ${theme.colors.backgroundSecondary}` }}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "2px 8px", borderRadius: "4px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2024–2025</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>NETCLOUD</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span>Web & Application Development</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* 2024 - Client Project (Upwork) */}
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `4px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}
				contentArrowStyle={{ borderRight: `7px solid ${theme.colors.backgroundSecondary}` }}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "2px 8px", borderRadius: "4px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2024</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>Upwork</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>Client projects</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Fitness | Booking | IoT</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* 2024 - Final Year Project (University of Education) */}
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `4px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<SchoolIcon />}
				contentArrowStyle={{ borderRight: `7px solid ${theme.colors.backgroundSecondary}` }}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "2px 8px", borderRadius: "4px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2024</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>University of Education</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>Android App Development</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Car Rental Android Application</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* 2022–2023 - Mobile Application Developer (MSTECH) */}
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `4px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}
				contentArrowStyle={{ borderRight: `7px solid ${theme.colors.backgroundSecondary}` }}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "2px 8px", borderRadius: "4px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2022–2023</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>MSTECH</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span>Mobile Application Developer</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* 2022 - Android Intern (Gamica Cloud) */}
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `4px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}
				contentArrowStyle={{ borderRight: `7px solid ${theme.colors.backgroundSecondary}` }}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "2px 8px", borderRadius: "4px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2022</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>Gamica Cloud</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span>Android App Development Intern</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			{/* 2022 - Android Intern (New Tech Software House) */}
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `4px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}
				contentArrowStyle={{ borderRight: `7px solid ${theme.colors.backgroundSecondary}` }}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "2px 8px", borderRadius: "4px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2022</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>New Tech Software House</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span>Android App Development Intern</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
		</VerticalTimeline>
	);
}
