import RevealWrapper from "./RevealWrapper";

const industries = [
  "电子电器制造",
  "机械设备加工",
  "汽车配件制造",
  "纺织服装行业",
  "塑料橡胶制品",
  "金属五金制品",
  "食品加工行业",
  "化工材料行业",
];

const regions = ["余姚", "慈溪", "奉化", "鄞州", "北仑", "象山", "宁海"];

export default function Industries() {
  return (
    <section className="industries section" id="industries">
      <RevealWrapper>
        <div className="section-label">合作行业</div>
        <h2 className="section-title">
          深度覆盖
          <br />
          宁波主要制造业
        </h2>
        <p className="section-sub">
          宁波是中国重要的制造业基地，我们深耕多个核心行业，拥有广泛而稳固的工厂合作网络。
        </p>
      </RevealWrapper>

      <RevealWrapper className="industries-layout">
        <div className="industry-list">
          {industries.map((name, i) => (
            <div key={name} className="industry-item">
              <span className="industry-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="industry-name">{name}</span>
              <span className="industry-arrow">→</span>
            </div>
          ))}
        </div>

        <div className="industry-feature">
          <div className="industry-feature-title">🌊 宁波制造业优势</div>
          <p>
            宁波地处长三角核心区域，拥有宁波舟山港这一全球最大货物吞吐量港口，制造业发展成熟，产业链完整。我们深耕本地多年，与宁波、余姚、慈溪、奉化等地区数百家工厂建立了长期合作关系。
          </p>
          <p>
            无论您需要寻找批量生产合作伙伴、小批量定制工厂，还是寻求特定资质认证的供应商，我们均能在最短时间内为您精准匹配。
          </p>
          <div className="industry-tags">
            {regions.map((r) => (
              <span key={r} className="tag">
                {r}
              </span>
            ))}
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
