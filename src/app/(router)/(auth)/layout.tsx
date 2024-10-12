import { vazirmatnFont } from "@/app/fonts/font"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${vazirmatnFont.className} antialiased dark`}>{children}</body>
    </html>
  )
}
