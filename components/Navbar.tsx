"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/#services", label: "服务项目" },
  { href: "/#industries", label: "合作行业" },
  { href: "/showcase", label: "工厂展示" },
  { href: "/about", label: "关于我们" },
  { href: "/news", label: "新闻动态" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoMark}>新智</div>
        宁波新智企业管理服务有限公司
      </Link>
      <div className={styles.links}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? styles.active : ""}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/#contact" className={styles.cta}>
          联系我们
        </Link>
      </div>
    </nav>
  );
}
