import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/theme/theme'
import { CharacterProvider } from '@/contexts/CharacterContext'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const res = await fetch('/api/characters')
  const characters = await res.json()

  return (
    <html lang='ja'>
      <body>
        <ThemeProvider theme={theme}>
          <CharacterProvider initialCharacters={characters}>
            <CssBaseline />
            {children}
          </CharacterProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
