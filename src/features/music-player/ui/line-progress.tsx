interface LineProgressProps {
  volume: number;
  className: string;
}

export const LineProgress = ({ volume, className }: LineProgressProps) => {
  return (
    <div className={"relative h-[2px] cursor-pointer rounded bg-primary/40 " + className}>
      <div style={{ width: volume + "%" }} className={"absolute left-0 top-0 bottom-0 bg-white"}></div>
    </div>
  )
}
