# Filmes Api - Flix

![Sem título 2](https://github.com/VictorBravim/Flix/assets/122113588/94073de9-ce1b-4f92-b8dc-24639191ac63)

## <code>Introdução</code>

MoviesApp é um projeto de aplicativo web destinado a fornecer aos usuários uma plataforma para descobrir e explorar filmes usando a API do The Movie Database (TMDb). Esta documentação fornece diretrizes sobre como configurar o ambiente do projeto e utilizar as principais funcionalidades.

## <code>Pré-requisitos</code>

Antes de executar o projeto, certifique-se de ter os seguintes pré-requisitos instalados:

- Node.js
- npm (Node Package Manager)
- Variáveis de ambiente configuradas em um arquivo `.env`

## <code>Configuração</code>

1. Clone o repositório do GitHub:
```
git clone https://github.com/VictorBravim/Flix.git
```

3. Navegue até o diretório do projeto:
```
cd moviesapp
```

5. Instale as dependências:
```
npm install
```

6. Crie um arquivo `.env` no diretório raiz do projeto e preencha-o com as seguintes variáveis de ambiente:
``` 
VITE_API_KEY=9d613a549275367434c92bddbd15e9ae

VITE_FIREBASE_API_KEY=<SUA_FIREBASE_API_KEY>
VITE_FIREBASE_AUTH_DOMAIN=<SEU_FIREBASE_AUTH_DOMAIN>
VITE_FIREBASE_PROJECTID=<SEU_FIREBASE_PROJECTID>
VITE_FIREBASE_STORAGE_BUCKET=<SEU_FIREBASE_STORAGE_BUCKET>
VITE_FIREBASE_MESAGING_SENDER_ID=<SEU_FIREBASE_MESAGING_SENDER_ID>
APP_ID=1:968145490268:web:1b6383d2823aaa42e97199
```

Substitua `<SUA_FIREBASE_API_KEY>`, `<SEU_FIREBASE_AUTH_DOMAIN>`, `<SEU_FIREBASE_PROJECTID>`, `<SEU_FIREBASE_STORAGE_BUCKET>` e `<SEU_FIREBASE_MESAGING_SENDER_ID>` pelos detalhes reais do seu projeto Firebase.

## <code>Scripts</code>

- dev: Inicia o servidor de desenvolvimento.
``` npm run dev ```

- build: Compila o projeto para produção.
``` npm run build ```

- preview: Visualiza o projeto compilado localmente.
``` npm run preview ```

## <code>Dependências</code>

- dotenv: Carrega variáveis de ambiente de um arquivo .env.
- firebase: SDK do Firebase para autenticação, firestore em nuvem e mais.
- framer-motion: Biblioteca de animação para componentes React.
- react: Biblioteca JavaScript para construir interfaces de usuário.
- react-dom: Pacote React para renderização DOM.
- react-firebase-hooks: Hooks do React para Firebase.
- react-helmet: Componente React para gerenciar metadados do cabeçalho do documento.
- react-icons: Biblioteca de ícones para aplicativos React.
- react-infinite-scroll-component: Componente de rolagem infinita para React.
- react-lazy-load-image-component: Carregamento preguiçoso de imagens no React.
- react-router-dom: Ligações DOM para React Router.
- react-slugify: Utilitário para gerar slugs a partir de strings.
- react-toastify: Biblioteca de notificações para React.
- tailwind-scrollbar: Estilos de barra de rolagem personalizados para Tailwind CSS.

## <code>DevDependencies</code>

- @types/react: Tipos TypeScript para React.
- @types/react-dom: Tipos TypeScript para React DOM.
- @vitejs/plugin-react: Suporte React para Vite.
- autoprefixer: Plugin PostCSS para analisar CSS e adicionar prefixos de fornecedor.
- postcss: Ferramenta para transformar estilos com plugins JS.
- tailwindcss: Framework CSS utilitário para desenvolvimento rápido de UI.
- vite: Ferramenta de compilação rápida para desenvolvimento web moderno.

## <code>Conclusão</code>

Com a configuração e as dependências configuradas, você agora pode executar o projeto Flix localmente e começar a explorar suas funcionalidades para descoberta e exploração de filmes.
