#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const COMPONENTS_DIR = path.join(__dirname, 'src', 'components');
const TARGET_DIR = path.join(process.cwd(), 'src', 'components', 'ui');

const args = process.argv.slice(2);
const command = args[0];
const componentName = args[1];

const availableComponents = [
  'button',
  'card',
  'input',
  'modal',
  'accordion',
  'aero-bubble',
  'aero-button',
  'aero-card',
  'aero-input'
];

function copyComponent(name) {
  const sourcePath = path.join(COMPONENTS_DIR, name);
  const targetPath = path.join(TARGET_DIR, name);

  if (!fs.existsSync(sourcePath)) {
    console.error(`❌ Componente "${name}" não encontrado!`);
    return;
  }

  // Criar diretório de destino
  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath, { recursive: true });
  }

  // Copiar arquivos
  const files = fs.readdirSync(sourcePath);
  files.forEach(file => {
    const sourceFile = path.join(sourcePath, file);
    const targetFile = path.join(targetPath, file);
    fs.copyFileSync(sourceFile, targetFile);
  });

  console.log(`✅ Componente "${name}" copiado para ${targetPath}`);
}

function copyTheme() {
  const themePath = path.join(__dirname, 'src', 'theme');
  const targetThemePath = path.join(process.cwd(), 'src', 'theme');

  if (!fs.existsSync(targetThemePath)) {
    fs.mkdirSync(targetThemePath, { recursive: true });
  }

  const files = fs.readdirSync(themePath);
  files.forEach(file => {
    const sourceFile = path.join(themePath, file);
    const targetFile = path.join(targetThemePath, file);
    fs.copyFileSync(sourceFile, targetFile);
  });

  console.log(`✅ Tema copiado para ${targetThemePath}`);
}

function showHelp() {
  console.log(`
🎨 AleUI - Glassmorphism Components

Uso:
  npx @alexandretav/aleui                    # Adiciona todos os componentes
  npx @alexandretav/aleui add <componente>   # Adiciona um componente específico
  npx @alexandretav/aleui list               # Lista componentes disponíveis

Comandos:
  (sem comando)     Adiciona todos os componentes
  add <componente>  Adiciona um componente específico
  add-all           Adiciona todos os componentes
  list              Lista componentes disponíveis
  help              Mostra esta ajuda

Componentes disponíveis:
${availableComponents.map(c => `  - ${c}`).join('\n')}

Exemplos:
  npx @alexandretav/aleui              # Adiciona tudo
  npx @alexandretav/aleui add button   # Adiciona só o Button
  npx @alexandretav/aleui add card     # Adiciona só o Card
  npx @alexandretav/aleui list         # Lista componentes
  `);
}

function listComponents() {
  console.log('\n📦 Componentes disponíveis:\n');
  availableComponents.forEach(c => {
    console.log(`  ✨ ${c}`);
  });
  console.log('');
}

// Main
if (!command) {
  // Se não houver comando, adiciona todos os componentes
  copyTheme();
  availableComponents.forEach(comp => copyComponent(comp));
  console.log('\n✅ Todos os componentes foram copiados!');
} else {
  switch (command) {
    case 'add':
      if (!componentName) {
        console.error('❌ Especifique o nome do componente!');
        console.log('Uso: npx @alexandretav/aleui add <componente>');
        process.exit(1);
      }
      copyTheme();
      copyComponent(componentName);
      break;

    case 'add-all':
      copyTheme();
      availableComponents.forEach(comp => copyComponent(comp));
      console.log('\n✅ Todos os componentes foram copiados!');
      break;

    case 'list':
      listComponents();
      break;

    case 'help':
    case '--help':
    case '-h':
      showHelp();
      break;

    default:
      console.error(`❌ Comando desconhecido: "${command}"`);
      showHelp();
  }
}
