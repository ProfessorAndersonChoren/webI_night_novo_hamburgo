// Pegar os elementos
let buttons = document.getElementsByTagName("button");
let paragraphs = document.getElementsByTagName("p");
let size = 16;

buttons[0].addEventListener("click", () => {
  size += 2;
  for (const p of paragraphs) {
    p.style = `font-size: ${size}px`;
    p.textContent = `Tamanho ${size}`;
  }
});

buttons[1].addEventListener("click", () => {
  size -= 2;
  for (const p of paragraphs) {
    p.style = `font-size: ${size}px`;
    p.textContent = `Tamanho ${size}`;
  }
});
