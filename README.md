# ✨ AleUI - Glassmorphism Components

Beautiful, modern React components with glassmorphism and Frutiger Aero design. Copy components directly to your project - no bloat, full control.

![Version](https://img.shields.io/badge/version-1.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![React](https://img.shields.io/badge/React-18-blue)

## 🎨 Features

- ✨ **Copy, Don't Install**: Components are copied to your project, not bundled
- 🌊 **Glassmorphism & Frutiger Aero**: Modern glass effects + nostalgic 2000s aesthetic
- 📘 **TypeScript**: Full type safety and IntelliSense
- 🎨 **Tailwind CSS**: Utility-first styling
- 🎭 **4 Variants**: Light, Medium, Dark, and Colored for each component
- 📱 **Responsive**: Mobile-first design
- 🔧 **Full Control**: Edit components directly in your codebase
- ⚡ **Framer Motion**: Smooth animations

## 📦 Components

### Glassmorphism Components
- **Button** - Interactive buttons with glass effects
- **Card** - Container components with blur
- **Input** - Form fields with labels
- **Modal** - Dialog with backdrop blur
- **Accordion** - Collapsible panels

### Frutiger Aero Components
- **AeroButton** - Aquatic gradient buttons
- **AeroCard** - Cards with aero styling
- **AeroInput** - Inputs with aero theme
- **AeroBubble** - Decorative bubble elements

## 🚀 Quick Start

### 1. Setup Tailwind CSS

Add to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'aero': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'aero-lg': '0 12px 48px 0 rgba(31, 38, 135, 0.5)',
      },
    },
  },
}
```

### 2. Add Components

Add all components (recommended):

```bash
npx @alexandretav/aleui
```

Or add a specific component:

```bash
npx @alexandretav/aleui add button
```

List available components:

```bash
npx @alexandretav/aleui list
```

### 3. Use Components

Components are copied to `src/components/ui/` in your project:

```tsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

function App() {
  return (
    <Card variant="medium" padding="lg">
      <h2>Hello World</h2>
      <Button variant="light" size="md">
        Click Me
      </Button>
    </Card>
  );
}
```

## 💻 Usage Examples

### Button

```tsx
import { Button } from '@/components/ui/button';

<Button variant="light" size="md" onClick={() => alert('Clicked!')}>
  Click Me
</Button>

<Button variant="colored" size="lg" fullWidth>
  Full Width Button
</Button>
```

### Card

```tsx
import { Card } from '@/components/ui/card';

<Card variant="medium" padding="lg" enableInteractions>
  <h2>Card Title</h2>
  <p>Card content with hover effects</p>
</Card>
```

### Input

```tsx
import { Input } from '@/components/ui/input';

<Input
  variant="light"
  label="Email"
  type="email"
  placeholder="your@email.com"
  fullWidth
/>
```

### Modal

```tsx
import { Modal } from '@/components/ui/modal';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  variant="medium"
>
  <p>Modal content</p>
</Modal>
```

### Accordion

```tsx
import { Accordion } from '@/components/ui/accordion';

<Accordion
  variant="light"
  items={[
    {
      id: '1',
      title: 'Question 1',
      content: 'Answer 1',
    },
    {
      id: '2',
      title: 'Question 2',
      content: 'Answer 2',
    },
  ]}
/>
```

## 🎨 Customization

Since components are copied to your project, you have **full control** to customize them:

### Edit Components Directly

```tsx
// src/components/ui/button/button.tsx
export const Button = ({ variant = 'light', ... }) => {
  // Modify styles, add features, change behavior
  return <button className={...}>...</button>
}
```

### Theme Configuration

The theme is in `src/theme/glass.ts`:

```typescript
export const glassVariants = {
  light: {
    background: 'bg-white/5',
    backdropBlur: 'backdrop-blur-[2px]',
    border: 'border border-white/15',
    shadow: 'shadow-lg',
    hover: 'hover:bg-white/10',
    focus: 'focus:ring-2 focus:ring-white/10',
  },
  // ... customize as needed
}
```

### Using Theme Utilities

```tsx
import { getGlassClasses, getAeroClasses } from '@/theme/glass';

const MyComponent = () => {
  const glassStyle = getGlassClasses('medium');
  const aeroStyle = getAeroClasses('colored');
  
  return <div className={glassStyle}>Custom component</div>;
};
```

## 📁 Project Structure (After Installation)

```
your-project/
├── src/
│   ├── components/
│   │   └── ui/              # Components copied here
│   │       ├── button/
│   │       │   ├── button.tsx
│   │       │   └── index.ts
│   │       ├── card/
│   │       ├── input/
│   │       ├── modal/
│   │       ├── accordion/
│   │       └── aero-bubble/
│   └── theme/
│       └── glass.ts         # Theme config copied here
```

## 🎯 CLI Commands

```bash
# Add all components (default)
npx @alexandretav/aleui

# Add a specific component
npx @alexandretav/aleui add button
npx @alexandretav/aleui add card
npx @alexandretav/aleui add modal

# List available components
npx @alexandretav/aleui list

# Show help
npx @alexandretav/aleui help
```

## 🌐 Demo

View live demo: [https://github.com/alexandrertav/alex-ui](https://github.com/alexandrertav/alex-ui)

Run demo locally:

```bash
git clone https://github.com/alexandrertav/alex-ui.git
cd alex-ui
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## ❓ FAQ

**Q: Why copy components instead of installing from npm?**  
A: Full control. Edit, customize, and own the code. No black boxes.

**Q: Do I need to install the package?**  
A: No! Just use `npx @alexandretav/aleui add <component>` to copy components.

**Q: Can I modify the components?**  
A: Yes! They're in your codebase. Modify freely.

**Q: What about updates?**  
A: Re-run the CLI command to get the latest version of a component.

**Q: Does it work with Next.js/Remix/Vite?**  
A: Yes! Works with any React framework that supports Tailwind CSS.

## 📝 License

MIT License - feel free to use in personal and commercial projects.

## 🤝 Contributing

Contributions are welcome! 

- Report bugs: [GitHub Issues](https://github.com/alexandrertav/alex-ui/issues)
- Submit PRs: [GitHub Pull Requests](https://github.com/alexandrertav/alex-ui/pulls)

## 🔗 Links

- **NPM Package**: [@alexandretav/aleui](https://www.npmjs.com/package/@alexandretav/aleui)
- **GitHub**: [alexandrertav/alex-ui](https://github.com/alexandrertav/alex-ui)
- **Author**: Alexandre R. Tavares

---

