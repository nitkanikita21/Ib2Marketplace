import { createTheme } from "@nextui-org/react";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";


export const darkTheme = createTheme({
	"type": "dark"
});


export const useThemeStore = create<{
    darkTheme: boolean,
    switchTheme:(themeState: boolean)=>void
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