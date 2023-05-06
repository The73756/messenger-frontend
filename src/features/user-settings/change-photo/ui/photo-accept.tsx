import { Icon } from "@/shared/ui";

interface PhotoAcceptProps {
  onAccept: () => void;
  onDiscard: () => void;
}

export const PhotoAccept = ({ onAccept, onDiscard }: PhotoAcceptProps) => {
  return (
    <div className="my-2 flex gap-2">
      <button className="btn-outline btn-success btn" onClick={onAccept}>
        <Icon name="figures/check" className="h-5 w-5"></Icon>
      </button>
      <button className="btn-outline btn-error btn" onClick={onDiscard}>
        <Icon name="figures/cross" className="h-5 w-5"></Icon>
      </button>
    </div>
  );
};
