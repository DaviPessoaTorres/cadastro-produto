// function add(){
//     if(!p.value || !q.value || !v.value) return;
//     t.innerHTML += `<tr><td>${p.value}</td><td>${q.value}</td><td>R$ ${(v.value*1).toFixed(2)}</td>   <td><button onclick="remover(this)">Remover</button></td></tr>`;
//     p.value = q.value = v.value = "";
//   }
//   function remover(botao) {
//     let linha = botao.parentNode.parentNode; 
//     linha.remove();
//   }
const Estoque = {
  tabela: document.getElementById("tabela"),
  inputs: {
    produto: document.getElementById("produto"),
    quantidade: document.getElementById("quantidade"),
    valor: document.getElementById("valor"),
  },

  add() {
    const { produto, quantidade, valor } = this.inputs;

    if (!produto.value || !quantidade.value || !valor.value) {
      alert("Preencha todos os campos!");
      return;
    }

    let linha = this.tabela.insertRow();
    linha.insertCell(0).textContent = produto.value;
    linha.insertCell(1).textContent = quantidade.value;
    linha.insertCell(2).textContent = "R$ " + parseFloat(valor.value).toFixed(2);

   
    let botao = document.createElement("button");
    botao.textContent = "Remover";
    botao.onclick = () => this.remover(linha);
    linha.insertCell(3).appendChild(botao);

    produto.value = quantidade.value = valor.value = "";
  },

  remover(linha) {
    this.tabela.deleteRow(linha.rowIndex);
  }
};

document.getElementById("btnAdd").onclick = () => Estoque.add();
