const btnMenu = document.getElementById('menu-toggle');
const menuAside = document.getElementById('menuAside');

btnMenu.onclick = () => {
    menuAside.classList.toggle('open')
}

// function filtro(event) {

// }

function actualizarData(){
    window.location.reload();
}

const editarBtn = document.querySelectorAll('.editar');
editarBtn.onclick =  ()=>{
    console.log('ok');
}


// Fechar o menu quando clicar fora.
// document.addEventListener('click', (e) => {
//     const target = e.target;
//     if (!modalEditar.classList.contains('show')) return;
//     if (modalEditar.contains(target) || modalEditar.contains(target)) return;
//     modalEditar.classList.remove('show')
// })


// Fechar o menu quando clicar no Esc (Escape)

// document.addEventListener('keydown', (letra) => {
//     if (letra.key === 'Escape') {
//         if (modalEditar.classList.contains('show')) {
//             modalEditar.classList.remove('show');
//         }

//     }
// })

// ------ MODAL-------
function fecharModal() {
  modalEditar.classList.remove("show");
  modalEditar.setAttribute("aria-hidden", "true");
}

function abrirModal() {
  modalEditar.classList.add("show");
  modalEditar.setAttribute("aria-hidden", "false");
}
