import type { Metadata } from 'next'
import { Noto_Serif_SC, Noto_Sans_SC } from 'next/font/google'
import './globals.css'

const notoSerifSC = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-serif',
  display: 'swap',
})

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '宁波新智企业管理服务有限公司',
  description: '深耕宁波制造业生态，精准对接优质工厂与合作伙伴。提供工厂资源对接、供应商评估、企业管理咨询等一站式服务。',
  keywords: '宁波工厂, 企业管理, 中介服务, 供应商, 制造业, 宁波新智',
  openGraph: {
    title: '宁波新智企业管理服务有限公司',
    description: '链接宁波优质工厂资源，助力企业高效合作',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={`${notoSerifSC.variable} ${notoSansSC.variable}`}>
      <body>{children}</body>
    </html>
  )
}
