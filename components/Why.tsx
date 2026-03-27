import RevealWrapper from './RevealWrapper'
import styles from './Why.module.css'

const reasons = [
  {
    icon: '📍',
    title: '深度本地根植',
    desc: '总部位于宁波，深度融入本地商业生态，对区域内工厂资源有最直接的了解与把控。',
  },
  {
    icon: '🎯',
    title: '精准高效匹配',
    desc: '建立完善的工厂数据库与评级系统，根据客户需求智能筛选，大幅缩短寻源周期。',
  },
  {
    icon: '🛡️',
    title: '全程风险把控',
    desc: '从资质核查到合同签署，全流程提供专业指导，有效规避合作过程中的潜在风险。',
  },
  {
    icon: '💬',
    title: '持续售后服务',
    desc: '合作不止于牵线搭桥，我们提供后续跟踪服务，确保合作关系的稳定与长久发展。',
  },
]

export default function Why() {
  return (
    <section className={`${styles.section} section`} id="why">
      <RevealWrapper>
        <div className="section-label">关于我们</div>
        <h2 className="section-title">
          为何选择<br />宁波新智
        </h2>
        <p className="section-sub">
          我们以诚信为本，以专业为基，致力于成为客户最信赖的企业管理服务合作伙伴。
        </p>
      </RevealWrapper>

      <div className={styles.grid}>
        {reasons.map((r) => (
          <RevealWrapper key={r.title} className={styles.card}>
            <div className={styles.icon}>{r.icon}</div>
            <div className={styles.title}>{r.title}</div>
            <div className={styles.desc}>{r.desc}</div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}
