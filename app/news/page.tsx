import Image from 'next/image'
import Link from 'next/link'
import styles from './news.module.css'

const featured = {
  id: 1,
  category: '行业资讯',
  date: '2024年12月15日',
  title: '2024宁波制造业年度报告：智能化转型提速，优质工厂供不应求',
  desc: '宁波市经信局最新数据显示，2024年全市规模以上制造业企业数字化改造覆盖率超过65%，智能工厂认定数量同比增长40%。与此同时，具备高端制造能力的优质工厂资源愈发稀缺，供需缺口持续扩大。',
  img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200&q=80',
  readTime: '5分钟阅读',
}

const articles = [
  {
    id: 2,
    category: '公司动态',
    date: '2024年11月28日',
    title: '新智团队完成第三季度工厂年度复评，20家工厂资质升级',
    desc: '经过为期6周的实地复评工作，我们对库内工厂进行了全面资质审查，20家工厂因生产能力提升获得评级升级。',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
    readTime: '3分钟阅读',
  },
  {
    id: 3,
    category: '行业资讯',
    date: '2024年11月10日',
    title: '宁波港货物吞吐量再创新高，制造业出口持续向好',
    desc: '宁波舟山港2024年前三季度货物吞吐量同比增长8.2%，制造业出口订单回暖，工厂产能利用率明显提升。',
    img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80',
    readTime: '4分钟阅读',
  },
  {
    id: 4,
    category: '合作案例',
    date: '2024年10月22日',
    title: '德国客户通过新智成功落地宁波汽配供应链，采购成本降低23%',
    desc: '一家德国汽车零部件分销商委托我们寻找宁波本地供应商，经过3个月的筛选与谈判，最终成功与2家工厂建立长期合作。',
    img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80',
    readTime: '6分钟阅读',
  },
  {
    id: 5,
    category: '行业资讯',
    date: '2024年9月18日',
    title: '慈溪小家电产业集群入选国家级先进制造业集群',
    desc: '慈溪小家电产业集群正式入选国家级先进制造业集群，进一步巩固宁波制造业在全国的领先地位，吸引更多采购商关注。',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    readTime: '3分钟阅读',
  },
  {
    id: 6,
    category: '公司动态',
    date: '2024年8月30日',
    title: '新智参加第130届广交会，对接境外采购商逾50家',
    desc: '我们携10家核心合作工厂亮相广交会，现场吸引大量境外采购商洽谈，初步达成意向合作项目14个。',
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80',
    readTime: '4分钟阅读',
  },
  {
    id: 7,
    category: '政策解读',
    date: '2024年8月5日',
    title: '宁波出台制造业高质量发展三年行动计划，工厂升级迎来政策红利',
    desc: '宁波市政府发布最新制造业扶持政策，对通过智能化改造认定的工厂给予最高500万元补贴，头部工厂将加速升级。',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    readTime: '5分钟阅读',
  },
]

const categories = ['全部', '行业资讯', '公司动态', '合作案例', '政策解读']

export default function NewsPage() {
  return (
    <div className={styles.page}>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>新闻动态</div>
          <h1 className={styles.heroTitle}>行业资讯 · 公司动态</h1>
          <p className={styles.heroDesc}>关注宁波制造业最新动向，了解新智团队的每一步成长。</p>
        </div>
      </div>

      <div className={styles.container}>

        {/* Featured */}
        <div className={styles.featuredWrap}>
          <div className={styles.sectionLabel}>置顶报道</div>
          <div className={styles.featured}>
            <div className={styles.featuredImg}>
              <Image src={featured.img} alt={featured.title} fill style={{ objectFit: 'cover' }} priority />
              <div className={styles.featuredOverlay} />
              <div className={styles.featuredMeta}>
                <span className={styles.categoryTag}>{featured.category}</span>
                <span className={styles.readTime}>{featured.readTime}</span>
              </div>
            </div>
            <div className={styles.featuredBody}>
              <div className={styles.featuredDate}>{featured.date}</div>
              <h2 className={styles.featuredTitle}>{featured.title}</h2>
              <p className={styles.featuredDesc}>{featured.desc}</p>
              <Link href="#" className={styles.readMoreBtn}>阅读全文 →</Link>
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className={styles.filterBar}>
          {categories.map((c, i) => (
            <button key={c} className={`${styles.filterBtn} ${i === 0 ? styles.filterActive : ''}`}>
              {c}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        <div className={styles.grid}>
          {articles.map((a) => (
            <div key={a.id} className={styles.card}>
              <div className={styles.cardImg}>
                <Image src={a.img} alt={a.title} fill style={{ objectFit: 'cover' }} />
                <span className={styles.cardCategory}>{a.category}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span>{a.date}</span>
                  <span>{a.readTime}</span>
                </div>
                <h3 className={styles.cardTitle}>{a.title}</h3>
                <p className={styles.cardDesc}>{a.desc}</p>
                <Link href="#" className={styles.cardLink}>阅读全文 →</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        <div className={styles.loadMore}>
          <button className={styles.loadMoreBtn}>加载更多</button>
        </div>

      </div>
    </div>
  )
}
