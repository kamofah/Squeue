import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import styles from "./Button.module.css";

const Button = ({
  label,
  icon,
  variant,
}: {
  label: string;
  icon: IconSvgElement;
  variant: "primary" | "secondary" | "minimal";
}) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {label} {icon && <HugeiconsIcon icon={icon} />}
    </button>
  );
};

export default Button;
