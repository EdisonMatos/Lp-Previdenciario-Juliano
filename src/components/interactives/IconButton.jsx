export default function IconButton(props) {
  const { icon, label, ariaLabel, className } = props;

  return (
    <button
      className={`${className} flex flex-row items-center justify-center transition rounded-[10px] px-[12px] py-[10px] bg-primary hover:scale-110 text-primary border-primary`}
      aria-label={ariaLabel}
    >
      <div className="flex items-center text-center gap-[10px]">
        <div className="flex flex-col justify-end">{icon}</div>
      </div>
    </button>
  );
}
