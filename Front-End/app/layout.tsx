import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Medium 2.0' as const,
  description: 'Medium 2.0' as const,
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content={metadata.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{metadata.title}</title>
          <link rel="icon" href="../public/favicon.ico" />
        </Head>
        {children}
        </body>
    </html>
  )
}
