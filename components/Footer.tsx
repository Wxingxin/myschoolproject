import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>宁波新智企业管理服务有限公司</div>
      <div>© 2024 宁波新智企业管理服务有限公司 · 版权所有</div>
      <div>浙ICP备XXXXXXXX号</div>
    </footer>
  );
}
