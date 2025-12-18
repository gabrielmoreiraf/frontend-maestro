import styles from "./check-styles.module.css";

export function Checkbox() {
  return (
    <label className={styles.check}>
      <input type="checkbox" />
      Lembrar de mim?
    </label>
  );
}
