import { createTheme } from "@nextui-org/react";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";


export const darkTheme = createTheme({
	"type": "dark",
	theme: {
		colors: {

			primaryLight: "$green200",
			primaryLightHover: "$green300", // commonly used on hover state
			primaryLightActive: "$green400", // commonly used on pressed state
			primaryLightContrast: "$green600", // commonly used for text inside the component
			primary: "$green500",
			primaryBorder: "$green500",
			primaryBorderHover: "$green600",
			primarySolidHover: "$green700",
			primarySolidContrast: "$white", // commonly used for text inside the component
			primaryShadow: "$green500",

			secondaryLight: "$purple200",
			secondaryLightHover: "$purple300", // commonly used on hover state
			secondaryLightActive: "$purple400", // commonly used on pressed state
			secondaryLightContrast: "$purple600", // commonly used for text inside the component
			secondary: "$purple500",
			secondaryBorder: "$purple500",
			secondaryBorderHover: "$purple600",
			secondarySolidHover: "$purple700",
			secondaryShadow: "$purple500",

			link: "$green500"

		}
	}
});

export const lightTime = createTheme({
	"type": "light",
	theme: {
		colors: {

			primaryLight: "$green200",
			primaryLightHover: "$green300", // commonly used on hover state
			primaryLightActive: "$green400", // commonly used on pressed state
			primaryLightContrast: "$green600", // commonly used for text inside the component
			primary: "$green500",
			primaryBorder: "$green500",
			primaryBorderHover: "$green600",
			primarySolidHover: "$green700",
			primarySolidContrast: "$white", // commonly used for text inside the component
			primaryShadow: "$green500",

			secondaryLight: "$purple200",
			secondaryLightHover: "$purple300", // commonly used on hover state
			secondaryLightActive: "$purple400", // commonly used on pressed state
			secondaryLightContrast: "$purple600", // commonly used for text inside the component
			secondary: "$purple500",
			secondaryBorder: "$purple500",
			secondaryBorderHover: "$purple600",
			secondarySolidHover: "$purple700",
			secondaryShadow: "$purple500",

			link: "$green500"
		}
	}
});


export const useThemeStore = create<{
	darkTheme: boolean,
	switchTheme: (themeState: boolean) => void
}>()(
	devtools(
		persist(
			(set) => ({
				"darkTheme": false,
				"switchTheme": (themeState: boolean) => {
					set((state) => ({ "darkTheme": themeState }));
				}
			}),
			{
				"name": "ib2-theme"
			}
		)
	)
);