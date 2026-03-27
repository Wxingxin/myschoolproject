"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoMark}>新智</div>
        宁波新智企业管理服务有限公司
      </Link>
      <div className={styles.links}>
        <Link href="#services">服务项目</Link>
        <Link href="#industries">合作行业</Link>
        <Link href="#why">关于我们</Link>
        <Link href="#process">合作流程</Link>
        <Link href="#contact" className={styles.cta}>
          联系我们
        </Link>
        <Link href="/showcase" className={styles.cta}>
          案例
        </Link>
      </div>
    </nav>
  );
}
