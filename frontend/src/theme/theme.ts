import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
  components: {
    MuiModal: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(8px)', // 背景ぼかし効果
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // モーダル背景の半透明
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          maxWidth: '500px', // 最大幅を統一
          width: '100%', // 子要素に合わせる
          boxSizing: 'border-box',
        },
      },
    },
  },
})

export default theme
