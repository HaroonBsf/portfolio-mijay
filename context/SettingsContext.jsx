import React, { useState, createContext } from "react";
import { ThemeProvider } from "styled-components";

//Lista de temas
import { darkTheme, lightTheme } from "@/styles/Theme";

//Pacote de textos (English only)
import enusJson from "@/config/localization/enus.json";

export const SettingsContext = createContext({});

const listaTemas = {
	dark: darkTheme,
	light: lightTheme,
};

export default function SettingsProvider({ children }) {
    // Default to the new light theme to match the attached design
    const [theme, setTheme] = useState(lightTheme);

	function changeTheme(newTheme) {
		setTheme(listaTemas[newTheme]);
	}

	// English only
	const language = enusJson;

	return (
		<SettingsContext.Provider value={{ changeTheme, language }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</SettingsContext.Provider>
	);
}
