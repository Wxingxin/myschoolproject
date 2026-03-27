import Image from 'next/image'
import Link from 'next/link'
import styles from './about.module.css'

const milestones = [
  { year: '2014', title: '公司创立', desc: '宁波新智企业管理服务有限公司在鄞州区正式注册成立，开始深耕本地制造业资源对接服务。' },
  { year: '2016', title: '首批工厂入库', desc: '完成首批50家宁波周边优质工厂的实地考察与评级，建立标准化工厂档案体系。' },
  { year: '2018', title: '业务扩张', desc: '服务范围延伸至慈溪、余姚、奉化、宁海等地区，入库工厂突破100家，服务客户超过200家。' },
  { year: '2020', title: '跨境业务起步', desc: '开始承接外资企业工厂对接需求，协助10余家欧美客户完成宁波供应链本地化布局。' },
  { year: '2022', title: '数字化升级', desc: '建立线上工厂资源管理系统，实现客户需求到工厂资源的智能匹配，响应时效提升60%。' },
  { year: '2024', title: '深耕十年', desc: '入库工厂超过200家，覆盖15个细分行业，累计促成合作项目逾千个，客户满意度持续保持98%以上。' },
]

const team = [
  {
    name: '王建国',
    role: '创始人 / 总经理',
    desc: '深耕宁波制造业18年，曾任职于多家大型制造企业，拥有丰富的供应链管理与工厂资源整合经验。',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: '李晓敏',
    role: '业务总监',
    desc: '10年企业管理咨询经验，专注于中小制造企业的运营优化与合作模式设计，服务客户遍布长三角地区。',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: '张伟',
    role: '工厂评估经理',
    desc: '机械工程专业背景，主导工厂实地考察与资质评审工作，累计考察工厂逾500家，建立行业评估标准体系。',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: '陈雅婷',
    role: '客户关系经理',
    desc: '专注于外资客户服务，精通英语与日语，协助多家跨国企业完成宁波供应商开发与本地化采购布局。',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
]

const values = [
  { icon: '🤝', title: '诚信为本', desc: '所有工厂资源均经实地核验，拒绝虚假信息，以真实透明赢得客户信赖。' },
  { icon: '🎯', title: '精准匹配', desc: '深度理解客户需求，不追求快速成交，只推荐真正适合的合作资源。' },
  { icon: '🔒', title: '保密原则', desc: '严格保护客户商业信息，签署保密协议，确保洽谈过程中的信息安全。' },
  { icon: '🌱', title: '长期共赢', desc: '我们的目标不是一次性中介，而是与客户建立长期稳定的合作伙伴关系。' },
]

export default function AboutPage() {
  return (
    <div className={styles.page}>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
            alt="关于宁波新智"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>关于我们</div>
          <h1 className={styles.heroTitle}>十年深耕<br />只做一件事</h1>
          <p className={styles.heroDesc}>
            自2014年成立以来，我们专注于宁波制造业资源整合，用十年时间构建了覆盖200余家工厂的本地优质资源网络。
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className={styles.mission}>
        <div className={styles.missionInner}>
          <div className={styles.missionLeft}>
            <div className={styles.sectionLabel}>我们的使命</div>
            <h2 className={styles.sectionTitle}>让每一次合作<br />都值得信赖</h2>
            <p className={styles.missionText}>
              在中国制造业转型升级的关键时期，企业寻找优质工厂合作伙伴的需求日益迫切。然而市场上信息不对称、资质难核验、风险难把控等问题长期困扰着采购方与工厂双方。
            </p>
            <p className={styles.missionText}>
              宁波新智的使命，正是成为这中间最可靠的桥梁——我们用专业的眼光筛选工厂，用诚信的态度对接需求，让每一次商业合作都建立在真实、可靠的基础之上。
            </p>
            <Link href="/#contact" className={styles.missionBtn}>与我们合作</Link>
          </div>
          <div className={styles.missionRight}>
            <div className={styles.missionImgWrap}>
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80"
                alt="团队会议"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.missionAccent} />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>核心价值观</div>
          <h2 className={styles.sectionTitle}>我们坚守的原则</h2>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <div className={styles.valueTitle}>{v.title}</div>
                <div className={styles.valueDesc}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className={styles.timelineSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>发展历程</div>
          <h2 className={styles.sectionTitle}>十年成长轨迹</h2>
          <div className={styles.timeline}>
            {milestones.map((m, i) => (
              <div key={m.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.timelineCard}>
                  <div className={styles.timelineYear}>{m.year}</div>
                  <div className={styles.timelineTitle}>{m.title}</div>
                  <div className={styles.timelineDesc}>{m.desc}</div>
                </div>
                <div className={styles.timelineDot} />
              </div>
            ))}
            <div className={styles.timelineLine} />
          </div>
        </div>
      </div>

      {/* Team */}
      <div className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.sectionLabel}>核心团队</div>
          <h2 className={styles.sectionTitle}>专业的人做专业的事</h2>
          <div className={styles.teamGrid}>
            {team.map((t) => (
              <div key={t.name} className={styles.teamCard}>
                <div className={styles.teamImgWrap}>
                  <Image src={t.img} alt={t.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.teamInfo}>
                  <div className={styles.teamName}>{t.name}</div>
                  <div className={styles.teamRole}>{t.role}</div>
                  <div className={styles.teamDesc}>{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>准备好开始合作了吗？</h2>
          <p className={styles.ctaDesc}>无论您处于哪个阶段，我们都愿意为您提供专业的建议与支持。</p>
          <Link href="/#contact" className={styles.ctaBtn}>立即联系我们</Link>
        </div>
      </div>

    </div>
  )
}
