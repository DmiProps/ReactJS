# ReactJS
Example sign up/sign in forms

## Install
```
npm install next@latest react@latest react-dom@latest
```

```
npm install @mui/material @emotion/react @emotion/styled @mui/material-nextjs @mui/icons-material
```

```
npm install @fontsource/roboto
```

Add `icon.ico` file to `/src/app` folder

<details>
Add scripts into `package.json`
<summary>Expand</summary>

```json
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
}
```

```json
"devDependencies": {
    "@types/node": "22.7.4",
    "typescript": "5.6.2"
}
```
</details>

<details>
Create `tscode.json`
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

## Run
```
npm run dev
```
or
```
npm run build
npm start
```