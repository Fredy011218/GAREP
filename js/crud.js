var Fila = null
function onSubmit() {
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
    DataForm["rma"] = document.getElementById("rma").value
    DataForm["sn"] = document.getElementById("sn").value
    DataForm["ctn"] = document.getElementById("ctn").value
    DataForm["date"] = document.getElementById("date").value
    DataForm["cln"] = document.getElementById("cln").value
    return DataForm
}
function InsertarDatos(data) {
    let table =
        document.getElementById("tabla").getElementsByTagName('tbody')[0]
    let Fila = table.insertRow(table.length)
    columna1 = Fila.insertCell(0).innerHTML = data.rma
    columna1 = Fila.insertCell(1).innerHTML = data.sn
    columna2 = Fila.insertCell(2).innerHTML = data.ctn
    columna3 = Fila.insertCell(3).innerHTML = data.date
    columna4 = Fila.insertCell(4).innerHTML = data.cln
    columna5 = Fila.insertCell(5).innerHTML = `<input class="submit" 
type="button" onClick="Editarr(this)" value="Editar" >
<input class="submit" 
type="button" onClick="Borrarr(this)" value="Borrar" >`
    document.getElementById("sn").focus()
    Vaciar()
}
function Vaciar() {
    document.getElementById("rma").value = ""
    document.getElementById("sn").value = ""
    document.getElementById("ctn").value = ""
    document.getElementById("date").value = ""
    document.getElementById("cln").value = ""
    Fila = null
}
function Editarr(td) {
    Fila = td.parentElement.parentElement
    document.getElementById("rma").value = Fila.cells[0].innerHTML
    document.getElementById("sn").value = Fila.cells[1].innerHTML
    document.getElementById("ctn").value = Fila.cells[2].innerHTML
    document.getElementById("date").value = Fila.cells[3].innerHTML
    document.getElementById("cln").value = Fila.cells[4].innerHTML
    }

function Actualizar(DataForm) {
    Fila.cells[0].innerHTML = DataForm.rma
    Fila.cells[1].innerHTML = DataForm.sn
    Fila.cells[2].innerHTML = DataForm.ctn
    Fila.cells[3].innerHTML = DataForm.date
    Fila.cells[4].innerHTML = DataForm.cln
    document.getElementById("sn").focus()
}
function Borrarr(td) {
    if (confirm('¿Seguro de borrar este registro?')) {
        row = td.parentElement.parentElement
        document.getElementById("tabla").deleteRow(row.rowIndex)
        Vaciar()
    }
}