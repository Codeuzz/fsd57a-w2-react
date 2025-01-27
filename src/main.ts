import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1 id="lala"></h1>
  </div>
`;

const lalaElement = document.querySelector<HTMLHeadingElement>("#lala");
if (lalaElement) {
  lalaElement.textContent = "< Hello Planet />";
}
