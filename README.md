# Integração com Amazon Cognito

Este projeto descreve a integração entre um aplicativo frontend e um backend utilizando o Amazon Cognito para autenticação de usuários. O Amazon Cognito oferece uma solução segura para controle de acesso, permitindo a autenticação, autorização e gerenciamento de usuários de maneira simplificada e escalável.

## Como Funciona

O fluxo de integração com o Amazon Cognito envolve a criação de um User Pool, onde os usuários do seu aplicativo serão gerenciados. O frontend realiza chamadas autenticadas ao backend, que por sua vez, valida essas solicitações usando o Amazon Cognito para verificar a identidade do usuário.

### Configurando o Amazon Cognito na AWS

1. Acesse o console da AWS e crie um User Pool no Amazon Cognito.
2. Configure os atributos do usuário, métodos de autenticação e demais configurações conforme a necessidade do seu projeto.
3. Registre seu aplicativo como um cliente no User Pool e obtenha o ID do cliente e o segredo do cliente, se aplicável.
4. Configure as URLs de callback e sign-out para o seu aplicativo.

## Integração no Frontend

O frontend deve ser configurado para autenticar usuários usando o Amazon Cognito, manipulando o fluxo de login, registro e gerenciamento de sessões. 

## Integração no Backend

O backend valida os tokens de autenticação enviados pelo frontend, garantindo que as solicitações sejam autenticadas antes de acessar recursos protegidos.

## Próximos Passos

- Configure o Amazon Cognito conforme descrito na documentação oficial: https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html
- Instale as dependências necessárias no frontend e backend (detalhes nos READMEs específicos).
- Configure as variáveis de ambiente necessárias para a integração com o Cognito. Siga os exemplos de variáveis de ambiente.
