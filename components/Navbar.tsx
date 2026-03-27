"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        <div className="nav-logo-mark">新智</div>
        宁波新智企业管理服务有限公司
      </Link>
      <div className="nav-links">
        <Link href="#services">服务项目</Link>
        <Link href="#industries">合作行业</Link>
        <Link href="#why">关于我们</Link>
        <Link href="#process">合作流程</Link>
        <Link href="#contact" className="nav-cta">
          联系我们
        </Link>
      </div>
    </nav>
  );
}
