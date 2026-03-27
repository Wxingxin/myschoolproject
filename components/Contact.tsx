'use client'
import styles from './Contact.module.css'

const contactInfo = [
  { icon: '📍', label: '公司地址', value: '中国浙江省宁波市\n宁波新智企业管理服务有限公司' },
  { icon: '📞', label: '联系电话', value: '+86 (0574) XXXX-XXXX\n工作时间：周一至周六 9:00–18:00' },
  { icon: '📧', label: '电子邮箱', value: 'info@nbxinzhi.com' },
  { icon: '💬', label: '微信公众号', value: '宁波新智企业管理服务\n扫码关注获取最新资讯' },
]

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.left}>
        <div className={styles.sectionLabel}>联系我们</div>
        <h2 className={styles.sectionTitle}>开启您的<br />优质合作</h2>
        <div className={styles.info}>
          {contactInfo.map((item) => (
            <div key={item.label} className={styles.row}>
              <div className={styles.rowIcon}>{item.icon}</div>
              <div>
                <div className={styles.rowLabel}>{item.label}</div>
                <div className={styles.rowVal} style={{ whiteSpace: 'pre-line' }}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.sectionLabel}>合作方式</div>
        <h2 className={styles.sectionTitle}>如何与我们<br />取得联系</h2>
        <p className={styles.rightDesc}>
          您可以通过电话、邮件或微信公众号与我们取得联系。我们的团队将在一个工作日内回复您的咨询，并为您提供专业的工厂资源匹配建议。
        </p>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNum}>01</div>
            <div>
              <div className={styles.stepTitle}>拨打电话或发送邮件</div>
              <div className={styles.stepDesc}>告知我们您的行业类型、采购需求与大致规模</div>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNum}>02</div>
            <div>
              <div className={styles.stepTitle}>顾问一对一沟通</div>
              <div className={styles.stepDesc}>专属顾问深入了解需求，48小时内提供初步方案</div>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNum}>03</div>
            <div>
              <div className={styles.stepTitle}>精准推荐合作工厂</div>
              <div className={styles.stepDesc}>匹配最适合的工厂资源，安排实地考察与洽谈</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
