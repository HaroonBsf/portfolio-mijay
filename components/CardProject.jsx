import React, { useContext, useCallback } from "react";
import styled from "styled-components";
// Use native <img> for rock-solid static delivery on Netlify

//Context
import { SettingsContext } from "@/context/SettingsContext";

//Icons
import { NoPhotography } from "@styled-icons/material-outlined";

const Card = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    border-radius: 18px;
    box-shadow: 0 16px 40px rgba(17, 24, 39, 0.08);
    border: 1px solid #e5e7eb;
    overflow: hidden;
    transition: box-shadow 0.2s ease, transform 0.2s ease;
    cursor: ${(props) => (props.clickable ? "pointer" : "default")};

    &:hover {
        box-shadow: 0 24px 48px rgba(17, 24, 39, 0.12);
        transform: translateY(-2px);
    }

    .image {
        position: relative;
        width: 50%;
        min-height: 320px;
        height: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        svg {
            width: 72px;
            height: 72px;
            color: ${(props) => props.theme.colors.inactiveTitle};
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 32px 36px;
        width: 50%;
        gap: 16px;
        height: 100%;
    }

    .title {
        font-weight: 800;
        font-size: 22px;
        color: ${(props) => props.theme.colors.title};
        margin: 0;
    }

    .category {
        font-size: 13px;
        font-weight: 600;
        color: ${(props) => props.theme.colors.subtitle};
        background: ${(props) => props.theme.colors.backgroundPage};
        border: 1px solid ${(props) => props.theme.colors.inactiveTitle};
        padding: 4px 8px;
        border-radius: 10px;
        display: inline-block;
    }

    .description {
        font-size: 16px;
        line-height: 1.6;
        color: ${(props) => props.theme.colors.body};
        letter-spacing: 0.2px;
        /* Show full text without ellipsis; allow wrapping naturally */
        display: block;
        overflow: visible;
        word-break: break-word;
    }

    .tech-row {
        display: flex;
        align-items: center;
        gap: 14px;

        .dot {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: ${(props) => props.theme.colors.inactiveTitle};
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${(props) => props.theme.colors.subtitle};
        }
    }

    @media (max-width: 1100px) {
        flex-direction: column;

        .image,
        .content {
            width: 100%;
            height: auto;
        }

        .image {
            min-height: 240px;
        }
    }
`;

export default function CardProject({ title, description, techs, imageSourcePath, category, linkUrl }) {
    useContext(SettingsContext);
    const clickable = Boolean(linkUrl);

    const onAnchorClick = useCallback(
        (e) => {
            if (!linkUrl) return;
            // Let the default anchor behavior proceed; add a safe fallback.
            try {
                const newWindow = window.open(linkUrl, "_blank", "noopener,noreferrer");
                if (!newWindow) {
                    // Popup blocked or failed; navigate in the same tab.
                    window.location.href = linkUrl;
                }
            } catch (err) {
                // As a last resort, attempt same-tab navigation.
                window.location.href = linkUrl;
            }
            // Prevent duplicate opens when anchor also has href+target.
            e.preventDefault();
        },
        [linkUrl]
    );

    const cardInner = (
        <Card clickable={clickable}>
            <div className="image">
                {imageSourcePath ? (
                    // Native image tag avoids Netlify's next/image optimizer and uses direct public paths
                    // Container provides sizing; CSS applies object-fit: cover
                    <img src={imageSourcePath} alt={`Project image: ${title}`} loading="lazy" />
                ) : (
                    <NoPhotography />
                )}
            </div>

            <div className="content">
                <h4 className="title" title={title}>{title}</h4>
                {category && <span className="category">{category}</span>}
                <p className="description">{description}</p>
                <div className="tech-row">
                    {techs?.map((icon, i) => (
                        <span key={i}>{icon}</span>
                    ))}
                </div>
            </div>
        </Card>
    );

    if (clickable) {
        return (
            <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onAnchorClick}
                style={{ textDecoration: "none", color: "inherit", display: "block" }}
                aria-label={`Open project link for ${title}`}
                title={`Open ${title}`}
            >
                {cardInner}
            </a>
        );
    }

    return cardInner;
}
