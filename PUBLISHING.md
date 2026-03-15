# 📦 Guia de Publicação - Glassmorphism UI

## Opções de Distribuição

### 1️⃣ NPM (Recomendado)
A forma mais profissional e popular para bibliotecas React.

### 2️⃣ GitHub Packages
Alternativa integrada com GitHub.

### 3️⃣ Git Direto
Usuários instalam diretamente do repositório.

---

## 🚀 Publicar no NPM

### Pré-requisitos

1. **Conta no NPM**
   - Crie em: https://www.npmjs.com/signup
   - Verifique seu email

2. **Login no NPM via terminal**
   ```bash
   npm login
   ```

### Passos para Publicação

#### 1. Preparar o Pacote

Você precisa criar uma estrutura separada para a biblioteca (sem Next.js):

```bash
# Criar pasta para o pacote
mkdir glassmorphism-ui-package
cd glassmorphism-ui-package

# Inicializar npm
npm init
```

#### 2. Copiar Componentes

Copie apenas os componentes necessários:
```
glassmorphism-ui-package/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Input/
│   │   ├── Modal/
│   │   ├── Accordion/
│   │   └── AeroBubble/
│   ├── theme/
│   │   └── glass.ts
│   └── utils/
│       └── index.ts
├── package.json
├── tsconfig.json
├── README.md
└── LICENSE
```

#### 3. Configurar package.json

```json
{
  "name": "@seu-usuario/glassmorphism-ui",
  "version": "1.0.0",
  "description": "Beautiful glassmorphism UI components for React",
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist",
    "README.md"
  ],
  "scripts": {
    "build": "tsup src/index.ts --format cjs,esm --dts",
    "prepublishOnly": "npm run build"
  },
  "keywords": [
    "react",
    "glassmorphism",
    "ui",
    "components",
    "tailwind",
    "typescript"
  ],
  "author": "Seu Nome",
  "license": "MIT",
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "framer-motion": "^11.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "tsup": "^8.0.0",
    "typescript": "^5.0.0"
  }
}
```

#### 4. Criar index.ts Principal

```typescript
// src/index.ts
export * from './components';
export * from './theme/glass';
export * from './utils';
```

#### 5. Build e Publicação

```bash
# Instalar dependências de build
npm install -D tsup typescript @types/react

# Build
npm run build

# Publicar
npm publish --access public
```

---

## 🎯 Opção Mais Simples: GitHub

Se você quer algo mais rápido, pode disponibilizar via GitHub:

### 1. Criar Repositório no GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/glassmorphism-ui.git
git push -u origin main
```

### 2. Usuários Instalam Assim:

```bash
npm install github:seu-usuario/glassmorphism-ui
```

---

## 📝 Documentação Necessária

### README.md deve conter:

- ✅ Instalação
- ✅ Exemplos de uso
- ✅ Props de cada componente
- ✅ Customização
- ✅ Dependências necessárias (Tailwind CSS)

### Avisos Importantes:

⚠️ **Usuários precisarão configurar Tailwind CSS no projeto deles**

Adicione no README:

```markdown
## Configuração Necessária

### 1. Instalar Tailwind CSS

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
\`\`\`

### 2. Configurar tailwind.config.js

\`\`\`js
module.exports = {
  content: [
    "./node_modules/@seu-usuario/glassmorphism-ui/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'aero': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'aero-lg': '0 12px 48px 0 rgba(31, 38, 135, 0.5)',
      }
    }
  }
}
\`\`\`
```

---

## 🔄 Atualizações

Para publicar novas versões:

```bash
# Atualizar versão
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0

# Publicar
npm publish
```

---

## ✅ Checklist Antes de Publicar

- [ ] README.md completo
- [ ] LICENSE adicionado (MIT recomendado)
- [ ] package.json configurado corretamente
- [ ] Build funcionando
- [ ] Exemplos testados
- [ ] TypeScript types exportados
- [ ] Dependências corretas (peer dependencies)
