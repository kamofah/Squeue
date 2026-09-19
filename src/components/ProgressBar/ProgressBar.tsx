import styles from "./ProgressBar.module.css";

const ProgressBar = ({
  label,
  percentage,
}: {
  label: string;
  percentage: number;
}) => {
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBarHeader}>
        <p className="text-label">{label}</p>
        <p className="text-label">{percentage}%</p>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressBarFill}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
