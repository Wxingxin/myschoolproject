import RevealWrapper from './RevealWrapper'
import styles from './Services.module.css'

const services = [
  {
    num: '01',
    icon: '🏭',
    name: '工厂资源对接',
    desc: '精准匹配宁波周边优质工厂，涵盖电子制造、机械加工、纺织服装等多个领域，确保资源质量与合作可靠性。',
  },
  {
    num: '02',
    icon: '🤝',
    name: '供应商评估筛选',
    desc: '专业团队对候选供应商进行实地考察与多维度评估，提供详尽的工厂报告，降低合作风险。',
  },
  {
    num: '03',
    icon: '📋',
    name: '企业管理咨询',
    desc: '提供企业运营优化、流程改善及管理效率提升方案，助力中小企业实现可持续发展。',
  },
  {
    num: '04',
    icon: '🔍',
    name: '市场调研分析',
    desc: '深度调研宁波及周边地区的制造业市场行情，提供专业的价格参考与行业趋势报告。',
  },
  {
    num: '05',
    icon: '📝',
    name: '合同谈判协助',
    desc: '经验丰富的谈判顾问协助双方达成互利条款，保障合作协议的合法性与公平性。',
  },
  {
    num: '06',
    icon: '🌐',
    name: '跨境贸易支持',
    desc: '协助外资企业对接宁波本地工厂，提供翻译、文件处理及跨文化商务沟通支持。',
  },
]

export default function Services() {
  return (
    <section className={`${styles.section} section`} id="services">
      <RevealWrapper className={styles.intro}>
        <div>
          <div className="section-label">服务项目</div>
          <h2 className="section-title">
            全方位企业<br />中介服务
          </h2>
        </div>
        <p className="section-sub">
          我们整合宁波本地制造业资源，提供从工厂资源对接、供应商筛选到企业管理顾问的一站式服务，帮助企业高效达成合作目标。
        </p>
      </RevealWrapper>

      <div className={styles.grid}>
        {services.map((s) => (
          <RevealWrapper key={s.num} className={styles.card}>
            <span className={styles.cardNum}>{s.num}</span>
            <div className={styles.icon}>{s.icon}</div>
            <div className={styles.name}>{s.name}</div>
            <div className={styles.desc}>{s.desc}</div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}
