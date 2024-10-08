# ReactJS
Example sign up/sign in forms

## Create new app

1. Install packages
```
npm install next@latest react@latest react-dom@latest
```

```
npm install @mui/material @emotion/react @emotion/styled @mui/material-nextjs @mui/icons-material
```

```
npm install @fontsource/roboto
```

```
npm install --save-dev @types/node typescript
```

2. Add `.gitignore` file to `./` folder
<details>
<summary>Expand</summary>

```
# Logs
logs
*.log
npm-debug.log*

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional stylelint cache
.stylelintcache

# Output of 'npm pack'
*.tgz

# dotenv environment variable files
.env
.env.development.local
.env.test.local
.env.production.local
.env.local

# Next.js build output
.next
out

# Stores VSCode versions used for testing VSCode extensions
.vscode-test
```
</details>

3. Add `theme.tsx` file to `/src` folder
<details>
<summary>Expand</summary>

```tsx
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
```
</details>

4. Add `icon.ico`, `layout.tsx` and `page.tsx` files to `/src/app` folder
<details>
<summary>Expand</summary>

`layout.tsx`:
```tsx
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../theme'

import CssBaseline from '@mui/material/CssBaseline';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    )
}
```

`page.tsx`
```tsx
import Container from '@mui/material/Container'

export default function Page() {
  return (
    <Container maxWidth='lg'>
      <h1>Main page</h1>
    </Container>
  )
}
```
</details>

5. Add scripts into `package.json`
<details>
<summary>Expand</summary>

```json
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
}
```
</details>

6. Create `tscode.json`
<details>
<summary>Expand</summary>

```json
{
    "compilerOptions": {
        "lib": [
            "dom",
            "dom.iterable",
            "esnext"
        ],
        "allowJs": true,
        "skipLibCheck": true,
        "strict": false,
        "noEmit": true,
        "incremental": true,
        "module": "esnext",
        "esModuleInterop": true,
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "jsx": "preserve",
        "plugins": [
            {
                "name": "next"
            }
        ]
    },
    "include": [
        "next-env.d.ts",
        ".next/types/**/*.ts",
        "**/*.ts",
        "**/*.tsx"
    ],
    "exclude": [
        "node_modules"
    ]
}
```
</details>

7. (Optional) Place pages into `/src/app/{page-name}/page.tsx`
<details>
<summary>Example</summary>

`/src/app/sign-up/page.tsx`
```tsx
import Container from '@mui/material/Container'

export default function Page() {
    return (
        <Container>
            <h1>Sign up</h1>
        </Container>
    )
}
```
</details>

8. (Optional) Place components into `/src/components/{ComponentName.tsx}`

## Run
```
npm run dev
```
or
```
npm run build
npm start
```