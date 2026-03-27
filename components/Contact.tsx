"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

const contactInfo = [
  {
    icon: "📍",
    label: "公司地址",
    value: "中国浙江省宁波市\n宁波新智企业管理服务有限公司",
  },
  {
    icon: "📞",
    label: "联系电话",
    value: "+86 (0574) XXXX-XXXX\n工作时间：周一至周六 9:00–18:00",
  },
  {
    icon: "📧",
    label: "电子邮箱",
    value: "info@nbxinzhi.com",
  },
  {
    icon: "💬",
    label: "微信公众号",
    value: "宁波新智企业管理服务\n扫码关注获取最新资讯",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = () => {
    if (!form.name || !form.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", company: "", message: "" });
    }, 3000);
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.left}>
        <div className="section-label">联系我们</div>
        <h2 className="section-title">
          开启您的
          <br />
          优质合作
        </h2>
        <div className={styles.info}>
          {contactInfo.map((item) => (
            <div key={item.label} className={styles.row}>
              <div className={styles.icon}>{item.icon}</div>
              <div>
                <div className={styles.textLabel}>{item.label}</div>
                <div className={styles.textValue}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.right}>
        <div className="section-label">在线留言</div>
        <h2 className="section-title">发送询盘</h2>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>您的姓名</label>
            <input
              type="text"
              className={styles.formInput}
              placeholder="请输入姓名"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>联系电话</label>
            <input
              type="text"
              className={styles.formInput}
              placeholder="手机号码"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>公司名称</label>
          <input
            type="text"
            className={styles.formInput}
            placeholder="您的公司名称（选填）"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>需求描述</label>
          <textarea
            className={`${styles.formInput} ${styles.textarea}`}
            placeholder="请描述您的合作需求，例如：所需工厂类型、产品品类、合作规模等…"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>

        <button
          className={`${styles.submit} ${submitted ? styles.submitted : ""}`}
          onClick={handleSubmit}
        >
          {submitted ? "✓ 已收到，我们将尽快联系您" : "提 交 询 盘"}
        </button>
      </div>
    </section>
  );
}
