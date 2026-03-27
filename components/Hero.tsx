import Link from "next/link";

const stats = [
  { num: "200", unit: "+", label: "合作工厂资源" },
  { num: "10", unit: "年", label: "行业深耕经验" },
  { num: "98", unit: "%", label: "客户满意度" },
  { num: "15", unit: "+", label: "覆盖行业领域" },
];

export default function Hero() {
  return (
    <section className="hero">
      {/* Left */}
      <div className="hero-left">
        <div className="hero-badge">宁波 · 企业管理服务</div>
        <h1 className="hero-title">
          链接宁波
          <br />
          优质工厂资源
        </h1>
        <p className="hero-title-en">
          NINGBO XINZHI ENTERPRISE MANAGEMENT SERVICES
        </p>
        <div className="hero-divider" />
        <p className="hero-desc">
          深耕宁波制造业生态，精准对接优质工厂与合作伙伴。我们凭借丰富的本地资源网络，为企业提供高效、专业的工厂推荐与企业管理咨询服务，助力每一个商业决策。
        </p>
        <div className="hero-actions">
          <Link href="#contact" className="btn-primary">
            立即咨询
          </Link>
          <Link href="#services" className="btn-secondary">
            了解服务 →
          </Link>
        </div>
      </div>

      {/* Right */}
      <div className="hero-right">
        <div className="hero-right-bg" />
        <div className="hero-right-pattern" />
        <div className="hero-right-content">
          <div className="hero-stat-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat-box">
                <div className="stat-num">
                  {s.num}
                  <span className="stat-unit">{s.unit}</span>
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="hero-city">宁波 · 中国制造业重要基地</div>
        </div>
      </div>
    </section>
  );
}
