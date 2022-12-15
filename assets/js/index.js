const aggiungiClasse = (event) => {
  const elementoSelezionato = element.target;
  elementoSelezionato.classList.toggle("oggettoSelezionato");
};

const aggiungiElementoALista = (event) => {
  const valoreImputField = document.getElementById("nuovoElementoLista").value;
  if (valoreImputField === "") {
    alert("non stai inserendo nulla");
  } else {
    const newDiv = document.createElement("div");
    newDiv.classList.add("listItems");
    newDiv.innerText = valoreImputField;
    newDiv.onclick = aggiungiClasse;
    document.getElementById("result").appendChild(newDiv);
    document.getElementById("nuovoElementoLista").value = "";
  }
};
