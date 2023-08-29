function rekisteroi() {
    let nimi = document.getElementById("kayttajanimi").value;
    let salasana = document.getElementById("salasana").value;

    localStorage.setItem("kayttajanimi", nimi)
    localStorage.setItem("salasana", salasana)

}