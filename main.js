// Função para cadastrar um usuário
function cadastrarUsuario(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  const usuario = { nome, email, senha };

  axios
    .post('http://localhost:1425/api/usuarios', usuario)
    .then(function (response) {
      console.log(response.data);
      alert('Usuário cadastrado com sucesso!');
    })
    .catch(function (error) {
      console.error(error);
      alert('Erro ao cadastrar usuário!');
    });
}

// Função para fazer login
function entrar(event) {
  event.preventDefault();

  const email = document.getElementById('emailLogin').value;
  const senha = document.getElementById('senhaLogin').value;

  const loginData = { email, senha };

  axios
    .post('http://localhost:1425/api/login', loginData)
    .then(function (response) {
      console.log(response.data);
      alert('Usuário logado com sucesso!');
      window.location.href = 'recado.html'; // Redirecionar para a página de recados
    })
    .catch(function (error) {
      console.error(error);
      alert('Erro ao fazer login!');
    });
}

// Função para criar um novo recado
function criarRecado(event) {
  event.preventDefault();
  const titulo = document.getElementById('tituloInput').value;
  const descricao = document.getElementById('descricao').value;
  axios
    .post('http://localhost:1425/api/recados', { titulo, descricao })
    .then(response => {
      console.log('Recado criado:', response.data);
      mostrarRecados();
    })
    .catch(error => {
      console.error('Erro ao criar recado:', error);
    });
}


// Função para mostrar os recados
function mostrarRecados() {
  axios
    .get('http://localhost:1425/api/recados')
    .then(response => {
      const corpoRecados = document.getElementById('corpoRecados');
      corpoRecados.innerHTML = '';
      response.data.forEach(recado => {
        const tr = document.createElement('tr');
        const tdTitulo = document.createElement('td');
        tdTitulo.textContent = recado.titulo;
        const tdDescricao = document.createElement('td');
        tdDescricao.textContent = recado.descricao;
        tr.appendChild(tdTitulo);
        tr.appendChild(tdDescricao);

        const tdOpcoes = document.createElement('td');
        const buttonEditar = document.createElement('button');
        buttonEditar.textContent = 'Editar';
        buttonEditar.addEventListener('click', () => editarRecado(recado.id));
        tdOpcoes.appendChild(buttonEditar);
        const buttonExcluir = document.createElement('button');
        buttonExcluir.textContent = 'Excluir';
        buttonExcluir.addEventListener('click', () => excluirRecado(recado.id));
        tdOpcoes.appendChild(buttonExcluir);
        tr.appendChild(tdOpcoes);

        corpoRecados.appendChild(tr);
      });
    })
    .catch(error => {
      console.error('Erro ao mostrar recados:', error);
    });
}


// Função para atualizar um recado
function atualizarRecado(event) {
  event.preventDefault(); // Evita o envio do formulário

  const idRecado = document.getElementById('idRecado').value;
  const titulo = document.getElementById('tituloEdicaoForm').value;
  const descricao = document.getElementById('descricaoEdicaoForm').value;

  // Faz a requisição PUT para atualizar o recado
  axios.put(`http://localhost:1425/api/recados/${idRecado}`, { titulo, descricao })
    .then(response => {
      console.log(response.data);
      // Limpa os campos do formulário após atualizar o recado
      document.getElementById('tituloEdicaoForm').value = '';
      document.getElementById('descricaoEdicaoForm').value = '';

      // Exibe novamente o formulário para criar recados
      const formEdicao = document.getElementById('formEdicao');
      formEdicao.classList.add('hidden');

      // Chama a função para mostrar os recados atualizados
      mostrarRecados();
    })
    .catch(error => {
      console.error(error);
    });
}

// Função para editar um recado
function atualizarRecado(event) {
  event.preventDefault();
  const idRecado = document.getElementById('idRecado').value;
  const titulo = document.getElementById('tituloEdicaoForm').value;
  const descricao = document.getElementById('descricaoEdicaoForm').value;
  axios
    .put(`http://localhost:1425/api/recados/${idRecado}`, { titulo, descricao })
    .then(response => {
      console.log('Recado atualizado:', response.data);
      formEdicao.classList.add('hidden');
      mostrarRecados();
    })
    .catch(error => {
      console.error('Erro ao atualizar recado:', error);
    });
}


function excluirRecado(idRecado) {
  axios
    .delete(`http://localhost:1425/api/recados/${idRecado}`)
    .then(response => {
      console.log(response.data);
      mostrarRecados();
    })
    .catch(error => {
      console.error('Erro ao excluir recado:', error);
    });
}


// Função para ir para a próxima página
function proximaPagina() {
  
}

// Função para ir para a página anterior
function paginaAnterior() {
  
}

// Função para exibir o número de páginas e a página atual
function exibirPaginas(numeroPagina, totalPaginas) {
  const pages = document.getElementById('pages');
  pages.innerText = `Página ${numeroPagina} de ${totalPaginas}`;
}

// Função para inicializar a aplicação
function iniciarAplicacao() {
  mostrarRecados();
}

// Chama a função iniciarAplicacao() para iniciar a aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', iniciarAplicacao);
