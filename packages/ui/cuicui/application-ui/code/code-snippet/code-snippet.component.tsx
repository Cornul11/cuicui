import type { ComponentType } from "@/lib/types/component";
import PreviewCommandVariant1 from "@/cuicui/application-ui/code/code-snippet/preview-variant1";

export const codeSnippetComponent: ComponentType = {
	sizePreview: "xs",
	slug: "code-snippet",

	variantList: [
		{
			name: "Default",
			component: <PreviewCommandVariant1 />,
			slugPreviewFile: "preview-variant1",
			slugComponentFile: "variant1",
		},
	],
	name: "Code Snippet",
	description: "A code snippet component with a copy to clipboard button.",
};
