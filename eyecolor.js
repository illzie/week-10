let id = 1
// sets default ID number
let table = document.getElementById('eyeColorTable')
// Gets table from the dom

const nameInput = document.getElementById('participantName')
const eyeColorInput = document.getElementById('eyeColor')

const validationMessage = document.getElementById('validationMessage')


document.getElementById('addToTable').addEventListener('click', () => {

    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`)
    row.insertCell(0).innerHTML = participantName.value
    row.insertCell(1).innerHTML = eyeColorInput.value
    let actions = row.insertCell(2)
    actions.appendChild(deleteBtn(id++))

    participantName.value = ' ';
    eyeColorInput.value = ' '

});

function deleteBtn(id) {
    let btn = document.createElement('button')
    btn.className = 'button-as-link text-danger'
    btn.id = id
    btn.innerHTML = '<i class="fa fa-trash-o" aria-hidden="true"></i> Delete'
    btn.onclick = () => {
        console.log(`Deleting row item-${id}`);
        let deletedRow = document.getElementById(`item-${id}`)
        deletedRow.parentNode.removeChild(deletedRow)
    };
    return btn;
}