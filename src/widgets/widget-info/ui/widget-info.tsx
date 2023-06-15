import { Resizer } from "@/shared/ui";

import { WidgetInfoBody } from "./widget-info-body";
import { WidgetInfoFiles } from "./widget-info-files";
import { WidgetInfoHeader } from "./widget-info-header";

export const WidgetInfo = () => {
  return (
    <Resizer enable={{ left: true }} minWidth={300} defaultSize={{ width: 430, height: "100%" }}>
      <div className="overflow-hidden overflow-y-auto rounded-xl scrollbar-none height-widget text-white">
        <WidgetInfoHeader />
        <WidgetInfoBody />
        <WidgetInfoFiles />
      </div>
    </Resizer>
  );
};
