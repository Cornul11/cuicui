import type { ComponentType } from "@/lib/types/component";
import { CodeCardPreview } from "@/cuicui/application-ui/code/code-card/code-card-preview";

export const codeCardComponent: ComponentType = {
	sizePreview: "md",
	slug: "code-card",

	variantList: [
		{
			name: "Default",
			component: <CodeCardPreview />,
			slugPreviewFile: "code-card-preview",
			slugComponentFile: "code-card",
		},
	],
	name: "Code Card",
	description: "A code card component with a copy to clipboard button.",
};
