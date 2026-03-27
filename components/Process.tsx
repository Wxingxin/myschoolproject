import RevealWrapper from "./RevealWrapper";
import styles from "./Process.module.css";

const steps = [
  {
    num: "01",
    title: "需求沟通",
    desc: "深入了解您的采购需求、质量标准与预算范围",
  },
  {
    num: "02",
    title: "资源筛选",
    desc: "从数据库中精准筛选符合条件的候选工厂资源",
  },
  {
    num: "03",
    title: "实地考察",
    desc: "组织工厂参观与能力评估，提供详尽考察报告",
  },
  { num: "04", title: "谈判协助", desc: "协助双方进行价格谈判与合同条款协商" },
  {
    num: "05",
    title: "落地跟进",
    desc: "合作落地后持续跟进，确保合作顺利推进",
  },
];

export default function Process() {
  return (
    <section className={`${styles.section} section`} id="process">
      <RevealWrapper>
        <div className="section-label">合作流程</div>
        <h2 className="section-title">
          五步达成
          <br />
          高质量合作
        </h2>
        <p className="section-sub">
          清晰透明的服务流程，让每一次合作都高效顺畅，从初次接洽到最终达成，全程专人跟进。
        </p>
      </RevealWrapper>

      <div className={styles.steps}>
        {steps.map((s) => (
          <RevealWrapper key={s.num} className={styles.step}>
            <div className={styles.circle}>{s.num}</div>
            <div className={styles.title}>{s.title}</div>
            <div className={styles.desc}>{s.desc}</div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
