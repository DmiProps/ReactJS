'use client'

import { Roboto, Roboto_Condensed } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const roboto = Roboto_Condensed({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'cyrillic-ext'],
  display: 'swap',
})

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})

export default theme;
