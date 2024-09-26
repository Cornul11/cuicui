import type { CategoryType } from "#/src/lib/types/component";
import { StretchHorizontalIcon } from "lucide-react";

export const actionMenuCategory: CategoryType = {
  name: "Action Menu",
  slug: "action-menu",
  description: "Create action menus to display actions in a dropdown",
  releaseDateCategory: new Date("2024-07-29"),
  icon: StretchHorizontalIcon,
  comingSoonCategory: true,
  previewCategory: {
    component: null,
    previewScale: 0.75,
  },
  componentList: null,
  // componentList: [advancedBottomActionMenuComponent],
};
