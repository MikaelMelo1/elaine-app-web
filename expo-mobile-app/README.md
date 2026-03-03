# MedSpa App - Versão React Native (Expo)

Como o ambiente de visualização atual é focado em Web, criei esta pasta para armazenar a versão **React Native** do seu aplicativo. Você pode copiar esses arquivos para a sua máquina local para rodar no **Expo Go**.

## Passo a Passo para rodar na sua máquina:

### 1. Crie o projeto Expo
Abra o terminal na sua máquina e rode:
```bash
npx create-expo-app medspa-app
cd medspa-app
```

### 2. Instale as dependências necessárias
```bash
npx expo install @react-native-async-storage/async-storage lucide-react-native react-native-safe-area-context
npm install nativewind tailwindcss
```

### 3. Configure o TailwindCSS (NativeWind)
Rode o comando para criar o arquivo de configuração:
```bash
npx tailwindcss init
```
No arquivo `tailwind.config.js` que foi criado, adicione os caminhos:
```javascript
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

No arquivo `babel.config.js`, adicione o plugin do NativeWind:
```javascript
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel"],
  };
};
```

### 4. Copie os arquivos
Agora é só copiar os arquivos desta pasta `expo-mobile-app` para dentro do seu projeto `medspa-app` recém-criado.

### 5. Rode o aplicativo
```bash
npx expo start
```
Baixe o aplicativo **Expo Go** no seu celular, escaneie o QR Code e pronto!
