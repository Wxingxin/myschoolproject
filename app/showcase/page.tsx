import Image from "next/image";
import Link from "next/link";
import styles from "./showcase.module.css";

const showcaseItems = [
  {
    id: 1,
    category: "工厂资源对接",
    title: "宁波精密机械加工厂",
    desc: "专注精密零部件制造，拥有德国进口数控设备30余台，月产能超50万件，通过ISO 9001认证。",
    tags: ["精密加工", "ISO认证", "出口资质"],
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    location: "宁波市鄞州区",
  },
  {
    id: 2,
    category: "电子电器制造",
    title: "慈溪电子元器件工厂",
    desc: "主营SMT贴片、PCB组装，年产值逾亿元，服务三星、松下等知名品牌供应链。",
    tags: ["SMT贴片", "PCB组装", "规模生产"],
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    location: "慈溪市观海卫镇",
  },
  {
    id: 3,
    category: "纺织服装行业",
    title: "余姚针织服装制造商",
    desc: "专业针织品OEM/ODM生产，具备从纱线到成衣的全产业链能力，年出口额超3000万美元。",
    tags: ["OEM/ODM", "全产业链", "出口贸易"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    location: "余姚市低塘街道",
  },
  {
    id: 4,
    category: "汽车配件制造",
    title: "北仑汽车零部件供应商",
    desc: "为一汽、上汽等整车厂配套，生产发动机周边件及车身结构件，IATF 16949认证。",
    tags: ["汽车配套", "IATF认证", "结构件"],
    img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
    location: "宁波市北仑区",
  },
  {
    id: 5,
    category: "金属五金制品",
    title: "奉化不锈钢制品工厂",
    desc: "专业生产不锈钢厨具、卫浴五金及工业配件，产品远销欧美，具备电解抛光等表面处理能力。",
    tags: ["不锈钢", "表面处理", "出口欧美"],
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    location: "奉化区溪口镇",
  },
  {
    id: 6,
    category: "塑料橡胶制品",
    title: "宁海塑料模具制造企业",
    desc: "从模具设计到注塑成型一站式服务，精度达±0.01mm，服务家电、汽车、医疗等多个行业。",
    tags: ["模具设计", "注塑成型", "精密制造"],
    img: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=800&q=80",
    location: "宁海县桃源街道",
  },
];

export default function ShowcasePage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=1600&q=80"
            alt="宁波工厂全景"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>工厂资源展示</div>
          <h1 className={styles.heroTitle}>
            宁波优质工厂
            <br />
            精选合集
          </h1>
          <p className={styles.heroDesc}>
            深耕宁波制造业多年，严格甄选各行业头部工厂，为您呈现真实可靠的合作资源。
          </p>
          <Link href="/#contact" className={styles.heroBtn}>
            联系进场
          </Link>
        </div>
      </div>

      {/* Stats bar */}
      <div className={styles.statsBar}>
        {[
          { num: "200+", label: "入库工厂" },
          { num: "15+", label: "行业覆盖" },
          { num: "98%", label: "客户好评" },
          { num: "10年", label: "深耕经验" },
        ].map((s) => (
          <div key={s.label} className={styles.statItem}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLabel}>精选工厂</div>
          <h2 className={styles.sectionTitle}>合作工厂展示</h2>
          <p className={styles.sectionSub}>
            以下工厂均经过我们团队实地考察与资质核验，可直接对接洽谈。
          </p>
        </div>

        <div className={styles.grid}>
          {showcaseItems.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardImg}>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.cardCategory}>{item.category}</div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardLocation}>📍 {item.location}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                <div className={styles.cardTags}>
                  {item.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
                <Link href="/#contact" className={styles.cardBtn}>
                  了解详情 →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>没有找到合适的工厂？</h2>
            <p className={styles.ctaDesc}>
              告诉我们您的需求，我们将在48小时内为您定向推荐匹配资源。
            </p>
            <Link href="/#contact" className={styles.ctaBtn}>
              提交定制需求
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
