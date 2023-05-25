# Interação FRONT - BACK

Este é um front-end de exemplo que utiliza JavaScript para interagir com uma API RESTful para cadastro de usuários, autenticação, criação, atualização e exclusão de recados.

## Funcionalidades

O front-end possui as seguintes funcionalidades:

### 1. Cadastro de Usuário

A função `cadastrarUsuario` é responsável por capturar os valores dos campos de nome, email e senha do formulário de cadastro, criar um objeto `usuario` com esses valores e enviar uma requisição POST para a API de cadastro de usuários. Se o cadastro for bem-sucedido, uma mensagem de sucesso será exibida. Caso contrário, uma mensagem de erro será exibida.

### 2. Login

A função `entrar` é responsável por capturar os valores dos campos de email e senha do formulário de login, criar um objeto `loginData` com esses valores e enviar uma requisição POST para a API de login. Se o login for bem-sucedido, uma mensagem de sucesso será exibida e o usuário será redirecionado para a página de recados. Caso contrário, uma mensagem de erro será exibida.

### 3. Criação de Recado

A função `criarRecado` é responsável por capturar os valores dos campos de título e descrição do formulário de criação de recado e enviar uma requisição POST para a API de criação de recados. Se a criação do recado for bem-sucedida, a função `mostrarRecados` será chamada para exibir os recados atualizados. Caso ocorra algum erro, uma mensagem de erro será exibida.

### 4. Exibição de Recados

A função `mostrarRecados` é responsável por enviar uma requisição GET para a API de recados e exibir os recados retornados na tabela de recados. Cada recado é representado por uma linha na tabela contendo o título, a descrição e opções de edição e exclusão.

### 5. Atualização de Recado

A função `atualizarRecado` é responsável por capturar os valores dos campos de id, título e descrição do formulário de edição de recado e enviar uma requisição PUT para a API de atualização de recados. Se a atualização do recado for bem-sucedida, os campos do formulário serão limpos, o formulário será ocultado, e a função `mostrarRecados` será chamada para exibir os recados atualizados. Caso ocorra algum erro, uma mensagem de erro será exibida.

### 6. Exclusão de Recado

A função `excluirRecado` é responsável por enviar uma requisição DELETE para a API de exclusão de recados com o ID do recado a ser excluído. Se a exclusão for bem-sucedida, a função `mostrarRecados` será chamada para exibir os recados atualizados. Caso ocorra algum erro, uma mensagem de erro será exibida.

### 7. Paginação

As funções `proximaPagina` e `paginaAnterior` são responsáveis por navegar entre as páginas de recados. A função `exibirPaginas` é responsável por exibir o número da página atual e o total de páginas.

### 8. Inicialização da Aplicação

A função `iniciarAplicacao` é chamada quando o DOM é carregado e é responsável por chamar a função `mostrarRecados` para exibir os recados iniciais.

## Requisições HTTP

As requisições HTTP são feitas utilizando a biblioteca Axios para realizar chamadas assíncronas para a API RESTful. Os métodos `post`, `get`, `put` e `delete` são utilizados para enviar requisições POST, GET, PUT e DELETE, respectivamente. Os endpoints da API são especificados nas chamadas de requisição.

## Como Executar

Para executar o front-end, você precisará de um servidor web local para hospedar os arquivos HTML, CSS e JavaScript. Certifique-se de que o servidor esteja configurado para servir os arquivos corretamente.

Além disso, certifique-se de que a API RESTful esteja em execução e acessível a partir do front-end. Os endpoints utilizados no código estão configurados para `http://localhost:1425`, portanto, verifique se a API está sendo executada nesse endereço.

Ao acessar a página do front-end em seu navegador, você poderá interagir com as funcionalidades fornecidas.

## Considerações Finais

Este front-end de exemplo demonstra um fluxo básico de cadastro, login, criação, atualização e exclusão de recados. 
Divirta-se explorando e expandindo este front-end!
