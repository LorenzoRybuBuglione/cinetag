import styles from "./Banner.module.css";

function Banner({ image }) {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url('/images/${image}_banner.png')` }}
    ></div>
  );
}

export default Banner;
