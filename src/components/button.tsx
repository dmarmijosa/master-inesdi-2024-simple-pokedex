import c from "classnames";

type Props = React.ComponentProps<"button"> & {
  label: "prev" | "next" | "Añadir";
};

import "./button.css";

export function Button({ label, ...rest }: Props) {
  return (
      <button className={c("button", {prev: label === "prev", next: label === "next"})} {...rest}>
        {label !== "prev" && label !== "next" && label}
      </button>
  );
}
