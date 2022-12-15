const aggiungiElementoALista = (event) => {
  const valoreImputField = document.getElementById("nuovoElementoLista").value;
  if (valoreImputField === "") {
    alert("non stai inserendo nulla");
  } else {
    const newDiv = document.createElement("div");
    newDiv.classList.add("listItems");
    newDiv.innerText = valoreImputField;
    document.getElementById("result").appendChild(newDiv);
    document.getElementById("result").value = "";
  }
};
