import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import NavigationMenu from "#/src/components/navigation/navigation-menu";
import InfoMenuList from "#/src/components/navigation/info-menu-list";

const gettingStartedRegex = /getting-started$/;

vi.mock("next/navigation", () => ({
	usePathname: () => {
		return "/common-ui";
	},
	useSelectedLayoutSegments: () => [],
}));

describe("Sidemenu component", () => {
	render(
		<div>
			<InfoMenuList />
			<NavigationMenu />
		</div>,
	);

	it("should have href attribute of the 'Contribute' element set to https://github.com/damien-schneider/cuicui", () => {
		const contributeElement = screen.getByTestId("navigation-link-Contribute");

		const hrefValue = contributeElement.getAttribute("href");
		expect(hrefValue).toBe("https://github.com/damien-schneider/cuicui");
	});
	it("should have href attribute of the 'Getting started' element to finish by getting-started", () => {
		const contributeElement = screen.getByTestId(
			"navigation-link-Getting Started",
		);

		// Check if the href attribute of the 'Getting started' element finishes by getting-started
		const hrefValue = contributeElement.getAttribute("href");
		expect(hrefValue).toMatch(gettingStartedRegex);
	});
});
