import { Icon } from "@/shared/ui"

export const WidgetInfoHeader = () => {
  return (
    <div className="flex items-center bg-primary px-5 py-3">
    <button className="mr-5">
      <Icon name="settings/close" className="w-4 h-4" />
    </button>
    <span className="text-base font-medium">
      Профиль
    </span>
    <button className="ml-auto">
      <Icon name="settings/bell" className="w-6 h-6" />
    </button>
  </div>
  )
}
