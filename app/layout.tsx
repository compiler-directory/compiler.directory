import './globals.css'

export const metadata = {
  title: 'Compiler.Directory',
  description: 'A hub for compiler enthusiasts and students alike, emporing collaboration and open-source contributions to propel compiler, language, and API design.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
