import type { SectionType } from "#/src/lib/types/component";
import { cnCategory } from "#/src/ui/cuicui/utils/cn/cn.category";
import { sleepCategory } from "#/src/ui/cuicui/utils/sleep/sleep.category";

export const utilsSection: SectionType = {
  type: "single-component",
  name: "Utils",
  slug: "utils",
  categoriesList: [cnCategory, sleepCategory],
};
