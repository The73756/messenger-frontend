import { WidgetInfoNavFiles } from "./widget-info-nav-files"
import { WidgetInfoUsers } from "./widget-info-users"

export const WidgetInfoFiles = () => {
  return (
    <div className="bg-neutral rounded-xl">
      <WidgetInfoNavFiles />
      <WidgetInfoUsers />
    </div>
  )
}