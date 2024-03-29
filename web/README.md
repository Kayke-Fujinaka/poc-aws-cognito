# Frontend: Integração com Amazon Cognito

Este projeto é a parte frontend de uma aplicação que utiliza o Amazon Cognito para autenticação e autorização de usuários. Ele detalha como configurar e executar o frontend, conectando-se ao backend e ao Amazon Cognito para gerenciar o fluxo de autenticação.

## Configuração

Antes de iniciar, certifique-se de configurar o Amazon Cognito na AWS e obter as credenciais necessárias, como descrito no README principal.

### Variáveis de Ambiente

Configure as variáveis de ambiente necessárias para a integração com o Cognito no arquivo `.env` no diretório raiz do projeto frontend:
```
REACT_APP_API_BASE_URL=<Sua URL Base do Backend>
REACT_APP_SSO_IDENTITY_PROVIDER=<Seu Identity Provider>
REACT_APP_SSO_USER_POOL_ID=<Seu User Pool ID>
REACT_APP_SSO_USER_POOL_CLIENT_ID=<Seu User Pool Client ID>
REACT_APP_SSO_COGNITO_DOMAIN=<Seu Domínio do Cognito>
REACT_APP_SSO_COGNITO_SIGNIN_REDIRECT_URL=<Sua URL de Redirect após Login>
REACT_APP_SSO_COGNITO_SIGNOUT_REDIRECT_URL=<Sua URL de Redirect após Logout>
```

### Instalação das Dependências

No diretório do projeto, execute o seguinte comando para instalar as dependências necessárias:

```bash
npm install
# ou
yarn
```

## Executando o Projeto

Após a configuração, você pode iniciar a aplicação:

```bash
npm run start
# ou
yarn start
```

Isso iniciará a aplicação. Abra http://localhost:3050 para visualizá-la no navegador.

## Autenticação com Amazon Cognito

O projeto utiliza o Amazon Cognito para autenticação de usuários. As funções de login, logout e acesso a recursos protegidos são implementadas utilizando o AWS Amplify e a configuração especificada em `awsExports`.

## Estrutura do Projeto

O projeto inclui várias páginas e componentes para demonstrar o fluxo de autenticação e o acesso a recursos protegidos e públicos.
- SignIn: Componente para realizar o login usando um provedor federado ou Cognito diretamente.
- Home: Página inicial que mostra informações do usuário autenticado e permite acessar recursos protegidos e realizar logout.
- UserContext: Contexto React para gerenciar o estado de autenticação do usuário em todo o aplicativo.

## Conclusão

Este README descreve os passos para configurar e executar o frontend de uma aplicação integrada com o Amazon Cognito. Siga as instruções detalhadas para garantir que o ambiente esteja corretamente configurado para autenticação e autorização de usuários.

