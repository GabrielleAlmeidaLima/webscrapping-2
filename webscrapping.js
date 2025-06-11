function pegarbaleia() {
  //é um site estático usado para testes, com um pedaço da história de moby-dick 
  fetch("https://httpbin.org/html")
    .then(resp => {
      if (!resp.ok) {
        throw new Error("Problemas no servidor");
      }
      return resp.text();
    })
    .then(text => {
      const doc = new DOMParser().parseFromString(text, "text/html");
      extrairhistoria(doc)
    })
    .catch(err => {
      document.querySelector("#res").innerText = "Erro: " + err.message;
    });
}

function extrairhistoria (doc){
    const h1 = doc.querySelector("h1");
    const p = doc.querySelector("p");
    const res = document.querySelector("#res");
    res.innerHTML = "";
    document.querySelector("#res").appendChild(h1)
    document.querySelector("#res").appendChild(p)
}

function main() {
  document.querySelector("#btn").addEventListener("click", pegarbaleia);
}

window.onload = main;
