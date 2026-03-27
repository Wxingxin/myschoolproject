import Link from "next/link";
import styles from "./Hero.module.css";

const stats = [
  { num: "200", unit: "+", label: "合作工厂资源" },
  { num: "10", unit: "年", label: "行业深耕经验" },
  { num: "98", unit: "%", label: "客户满意度" },
  { num: "15", unit: "+", label: "覆盖行业领域" },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.badge}>宁波 · 企业管理服务</div>
        <h1 className={styles.title}>
          链接宁波
          <br />
          优质工厂资源
        </h1>
        <p className={styles.titleEn}>
          NINGBO XINZHI ENTERPRISE MANAGEMENT SERVICES
        </p>
        <div className={styles.divider} />
        <p className={styles.desc}>
          深耕宁波制造业生态，精准对接优质工厂与合作伙伴。我们凭借丰富的本地资源网络，为企业提供高效、专业的工厂推荐与企业管理咨询服务，助力每一个商业决策。
        </p>
        <div className={styles.actions}>
          <Link href="#contact" className={styles.primaryButton}>
            立即咨询
          </Link>
          <Link href="#services" className={styles.secondaryButton}>
            了解服务 →
          </Link>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.rightBg} />
        <div className={styles.rightPattern} />
        <div className={styles.rightContent}>
          <div className={styles.statGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statBox}>
                <div className={styles.statNum}>
                  {s.num}
                  <span className={styles.statUnit}>{s.unit}</span>
                </div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
          <div className={styles.city}>宁波 · 中国制造业重要基地</div>
        </div>
      </div>
    </section>
  );
}
