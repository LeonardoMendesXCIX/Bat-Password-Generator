# 🦇 Bat-Password Generator

Um gerador de senhas seguras com tema do Batman, desenvolvido em React Native com Expo. Crie senhas fortes e únicas com estilo do Cavaleiro das Trevas!

## 📱 Demonstração

<div align="center">
  <img src="https://via.placeholder.com/300x600/000000/FFD700?text=Bat-Password+Generator" alt="Bat-Password Generator Screenshot" width="300"/>
</div>

## ✨ Funcionalidades

- 🔐 **Geração de Senhas Seguras** - Cria senhas complexas e únicas
- 🎨 **Interface Temática do Batman** - Design inspirado no universo do Cavaleiro das Trevas
- ⚙️ **Opções Personalizáveis** - Controle total sobre os caracteres da senha
- 📊 **Análise de Força** - Avaliação visual da segurança da senha
- 📋 **Cópia Rápida** - Copia senhas para a área de transferência com um toque
- 📱 **Multiplataforma** - Funciona em iOS, Android e Web

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework principal
- **Expo** - Plataforma de desenvolvimento
- **TypeScript** - Tipagem estática
- **React Native Vector Icons** - Ícones personalizados
- **Expo Clipboard** - Gerenciamento de área de transferência
- **React Native Slider** - Controle deslizante para comprimento da senha

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- Expo CLI instalado globalmente
- Emulador ou dispositivo físico para testes

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/LeonardoMendesXCIX/Bat-Password-Generator.git
   cd Bat-Password-Generator
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm start
   # ou
   expo start
   ```

4. **Execute no seu dispositivo**
   - Escaneie o QR code com o app Expo Go (iOS/Android)
   - Ou pressione `a` para Android ou `i` para iOS

## 🎯 Como Usar

1. **Abra o aplicativo**
2. **Configure as opções**:
   - Comprimento da senha (4-32 caracteres)
   - Incluir letras maiúsculas
   - Incluir letras minúsculas
   - Incluir números
   - Incluir símbolos especiais
   - Excluir caracteres ambíguos (Il1O0)
3. **Toque em "GERAR SENHA"**
4. **Copie a senha** gerada tocando em "COPIAR SENHA"

## 🏗️ Estrutura do Projeto

```
Bat-Password-Generator/
├── src/
│   ├── components/
│   │   ├── CustomButton.tsx      # Botão personalizado
│   │   ├── OptionsPanel.tsx      # Painel de opções
│   │   └── PasswordDisplay.tsx   # Display da senha
│   ├── types/
│   │   └── index.ts             # Definições de tipos TypeScript
│   └── utils/
│       └── passwordGenerator.ts  # Lógica de geração de senhas
├── assets/
│   ├── icon.png                 # Ícone do app
│   ├── adaptive-icon.png        # Ícone adaptativo Android
│   ├── splash-icon.png          # Tela de splash
│   └── favicon.png              # Favicon web
├── App.tsx                      # Componente principal
├── app.json                     # Configuração do Expo
├── package.json                 # Dependências e scripts
└── tsconfig.json               # Configuração TypeScript
```

## 🔧 Configurações de Senha

| Opção | Descrição | Padrão |
|-------|-----------|---------|
| **Comprimento** | Número de caracteres da senha | 12 |
| **Maiúsculas** | Inclui A-Z | ✅ |
| **Minúsculas** | Inclui a-z | ✅ |
| **Números** | Inclui 0-9 | ✅ |
| **Símbolos** | Inclui !@#$%^&*()_+-=[]{}|;:,.<>? | ✅ |
| **Excluir Ambíguos** | Remove Il1O0 | ✅ |

## 📊 Níveis de Força

| Nível | Comprimento | Descrição |
|-------|-------------|-----------|
| **Fraca** | < 8 caracteres | Evite usar |
| **Média** | 8-11 caracteres | Uso básico |
| **Forte** | 12-15 caracteres | Recomendado |
| **Muito Forte** | ≥ 16 caracteres | Máxima segurança |

## 🚀 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run android` - Executa no Android
- `npm run ios` - Executa no iOS
- `npm run web` - Executa na web

## 🎨 Personalização

### Cores do Tema
- **Preto**: `#000000` (fundo principal)
- **Dourado**: `#FFD700` (destaques e título)
- **Cinza Escuro**: `#1a1a1a` (containers secundários)
- **Cinza Claro**: `#666666` (textos secundários)
- **Branco**: `#ffffff` (textos principais)

### Ícones
O app utiliza ícones do pacote `react-native-vector-icons` com estilo consistente com o tema do Batman.

## 🔒 Segurança

- **Geração Local**: Todas as senhas são geradas localmente no dispositivo
- **Sem Armazenamento**: Senhas não são salvas ou enviadas a servidores
- **Aleatoriedade Criptográfica**: Utiliza `Math.random()` com alta entropia
- **Validação de Entrada**: Verificações de segurança para prevenir erros

## 📱 Compatibilidade

- **iOS**: 11.0 ou superior
- **Android**: API level 21 ou superior (Android 5.0+)
- **Web**: Navegadores modernos com suporte a ES6+

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Leonardo Mendes**
- GitHub: [@LeonardoMendesXCIX](https://github.com/LeonardoMendesXCIX)
- LinkedIn: [Leonardo Mendes](https://linkedin.com/in/leonardo-mendes)

## 🙏 Agradecimentos

- DC Comics pela inspiração do Batman
- Expo pela excelente plataforma de desenvolvimento
- Comunidade React Native pelos recursos e suporte

---

<div align="center">
  <p><strong>🦇 Bat-Password Generator</strong> - Proteja suas contas com o poder do Cavaleiro das Trevas!</p>
  <p>Feito com ❤️ por Leonardo Mendes</p>
</div>
