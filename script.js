function add(){
    if(!p.value || !q.value || !v.value) return;
    t.innerHTML += `<tr><td>${p.value}</td><td>${q.value}</td><td>R$ ${(v.value*1).toFixed(2)}</td>   <td><button onclick="remover(this)">Remover</button></td></tr>`;
    p.value = q.value = v.value = "";
  }
  function remover(botao) {
    let linha = botao.parentNode.parentNode; 
    linha.remove();
  }
