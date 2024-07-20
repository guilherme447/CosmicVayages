

function rotateSwirls() {
  const svgGroup = document.getElementById("rotate2");
  // const viewPortH = window.innerHeight;
  // const viewPortW = window.innerWidth;
  let angle = 0;

  // size.setAttribute("viewBox", `0 0 ${viewPortW} ${viewPortH}`);

  function rotate() {
    angle += -1;
    angle <= -360 ? (angle = 0) : null;
    svgGroup.setAttribute("transform", `rotate(${angle} 0 0)`);
    requestAnimationFrame(rotate);
  }
rotate ();
}




//Parte do MODAL
document.addEventListener('DOMContentLoaded', () => {
  const fade = document.querySelector("#fade");
  const openModalButtons = document.querySelectorAll(".open");
  const closeModalBtn = document.querySelector(".btn--fechar");
  const modal = document.querySelector("#modal");
  const modalTitle = document.querySelector(".modal--section h1");
  const modalImage = document.querySelector(".modal--body img");
  const sobreViajem = document.querySelector(".sobre--viajem");
  const localCompra = document.querySelector(".local-compra");
  const valor = document.querySelector(".volor--viajem")

  // Função para abrir o modal e definir o conteúdo com base no planeta clicado
  function openModal(event) {
      const clickedElement = event.currentTarget;
      const planetName = clickedElement.dataset.name;
      const planetImageSrc = clickedElement.src;
      const sobreTexto = clickedElement.dataset.sobre;
      const localTexto = clickedElement.dataset.local;
      const textoValor =clickedElement.dataset.valor;
      

      modalTitle.textContent = planetName;
      modalImage.src = planetImageSrc;
      modalImage.style.display = 'block';
      sobreViajem.textContent = sobreTexto;
      localCompra.textContent = localTexto;
      valor.textContent = textoValor;
        


      // Atualiza o conteúdo do modal
      modalTitle.textContent = planetName;
      modalImage.src = planetImageSrc;

      // Exibe o modal
      fade.classList.remove('hide');
      modal.classList.remove('hide');


      modal.style.height = 'auto';


  }

  // Função para fechar o modal
  function closeModal() {
      fade.classList.add('hide');
      modal.classList.add('hide');
  }

  // Adiciona eventos de clique para abrir o modal
  openModalButtons.forEach(button => {
      button.addEventListener('click', openModal);
  });

  // Adiciona evento de clique para fechar o modal
  closeModalBtn.addEventListener('click', closeModal);

  // Fecha o modal se o fade (background escurecido) for clicado
  fade.addEventListener('click', closeModal);

//ajustar para tela de celular



});





