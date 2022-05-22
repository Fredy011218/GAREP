var Fila = null
function onSubmit2() {
    let DataForm = Leer()
    if (Fila == null) {
        InsertarDatos(DataForm)
    } else {
        Actualizar(DataForm)
        Vaciar()
    }
}

function Leer() {
    let DataForm = {}
    DataForm["Pnin"] = document.getElementById("Pnin").value
    DataForm["pnubi"] = document.getElementById("pnubi").value
    DataForm["pnqty"] = document.getElementById("pnqty").value
    DataForm["pnombre"] = document.getElementById("pnombre").value
    return DataForm
}
function InsertarDatos(data) {
    let table =
    document.getElementById("tabla2").getElementsByTagName('tbody')[0]
let Fila = table.insertRow(table.length)
columna1 = Fila.insertCell(0).innerHTML = data.Pnin
columna1 = Fila.insertCell(1).innerHTML = data.pnubi
columna2 = Fila.insertCell(2).innerHTML = data.pnqty
columna3 = Fila.insertCell(3).innerHTML = data.pnombre
columna5 = Fila.insertCell(4).innerHTML = `<input class="submit" 
type="button" onClick="Editarr(this)" value="Editar" >
<input class="submit" type="button" onClick="Borrarr(this)" value="Borrar" >`
document.getElementById("sn").focus()
Vaciar()
}
function Vaciar() {
    document.getElementById("Pnin").value = ""
    document.getElementById("pnubi").value = ""
    document.getElementById("pnqty").value = ""
    document.getElementById("pnombre").value = ""
    Fila = null
}
function Editarr(td) {
    Fila = td.parentElement.parentElement
    document.getElementById("Pnin").value = Fila.cells[0].innerHTML
    document.getElementById("pnubi").value = Fila.cells[1].innerHTML
    document.getElementById("pnqty").value = Fila.cells[2].innerHTML
    document.getElementById("pnombre").value = Fila.cells[3].innerHTML
    }

function Actualizar(DataForm) {
    Fila.cells[0].innerHTML = DataForm.Pnin
    Fila.cells[1].innerHTML = DataForm.pnubi
    Fila.cells[2].innerHTML = DataForm.pnqty
    Fila.cells[3].innerHTML = DataForm.pnombre
    document.getElementById("Pnin").focus()
}
function Borrarr(td) {
    if (confirm('¿Seguro de borrar este registro?')) {
        row = td.parentElement.parentElement
        document.getElementById("tabla2").deleteRow(row.rowIndex)
        Vaciar()
    }
}