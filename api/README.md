# Backend: Integração com Amazon Cognito

Este projeto é a parte backend de uma aplicação que utiliza o Amazon Cognito para autenticação e autorização de usuários. Este README detalha como configurar e executar o backend, incluindo a integração com o Amazon Cognito para gerenciar o fluxo de autenticação e autorização.

## Configuração

Antes de iniciar, certifique-se de configurar o Amazon Cognito na AWS e obter as credenciais necessárias, como descrito no README principal.

### Variáveis de Ambiente

Configure as variáveis de ambiente necessárias para a integração com o Cognito no arquivo `.env` no diretório raiz do projeto frontend:
```
APP_PORT=<Porta do Servidor Backend>
SSO_USER_POOL_ID=<Seu User Pool ID>
SSO_USER_POOL_CLIENT_ID=<Seu User Pool Client ID>
SSO_COGNITO_DOMAIN=<Seu Domínio do Cognito>
SSO_COGNITO_SIGNIN_REDIRECT_URL=<Sua URL de Redirect após Login>
SSO_COGNITO_SIGNOUT_REDIRECT_URL=<Sua URL de Redirect após Logout>
SSO_IDENTITY_PROVIDER=<Seu Identity Provider>
```

### Instalação das Dependências

No diretório do projeto, execute o seguinte comando para instalar as dependências necessárias:

```bash
npm install
# ou
yarn
```

## Executando o Projeto

Após a configuração, você pode iniciar o servidor:

```bash
npm run start:dev
# ou
yarn start:dev
```

Isso iniciará o sistema.

## Integração com Amazon Cognito

O backend utiliza o Amazon Cognito para autenticar e autorizar usuários, fazendo uso da biblioteca AWS Amplify e das configurações especificadas em awsExports. A autenticação JWT e o controle de acesso baseado em roles são implementados para proteger as rotas da API.

## Estrutura do Projeto
O projeto backend inclui vários módulos, serviços e controladores para demonstrar a autenticação e autorização com o Amazon Cognito. A seguinte estrutura de projeto é utilizada:
- AuthModule: Módulo que lida com a autenticação e autorização dos usuários.
- AuthService: Serviço que implementa a lógica de negócios para autenticação e autorização.
- AuthController: Controlador que expõe endpoints da API para recursos públicos, protegidos e de administração.
- JwtStrategy: Estratégia Passport JWT para validar tokens de acesso JWT.

## Conclusão

Este README descreve os passos para configurar e executar o backend de uma aplicação integrada com o Amazon Cognito. Siga as instruções detalhadas para garantir que o ambiente esteja corretamente configurado para autenticação e autorização de usuários.