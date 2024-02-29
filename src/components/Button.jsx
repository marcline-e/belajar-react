import clsx from "clsx";

function Button(props) {
  const { className = "bg-blue-500", children, text, type = "button" } = props;
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        className,
        "flex items-center gap-x-2 bg-blue-600 text-white px-4 py-2 rounded",
      )}
    >
      {text || children}
    </button>
  );
}

export default Button;
