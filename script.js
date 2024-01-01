// script.js

// Carregar contatos armazenados localmente
var storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
displayContacts(storedContacts);

function addContact() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;

    if (name && phone) {
        var contactTable = document.getElementById("contactItems");
        var row = contactTable.insertRow(-1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = name;
        cell2.innerHTML = phone;
        cell3.innerHTML = '<button onclick="deleteContact(this)">Excluir</button>';

        // Salvar o contato localmente
        var storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
        storedContacts.push({ name: name, phone: phone });
        localStorage.setItem('contacts', JSON.stringify(storedContacts));

        // Limpar os campos do formulário após adicionar o contato
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
    } else {
        alert("Por favor, preencha todos os campos do formulário.");
    }
}

function displayContacts(contacts) {
    var contactTable = document.getElementById("contactItems");
    contactTable.innerHTML = "";

    contacts.forEach(function (contact) {
        var row = contactTable.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = contact.name;
        cell2.innerHTML = contact.phone;
        cell3.innerHTML = '<button onclick="deleteContact(this)">Excluir</button>';
    });
}

function deleteContact(button) {
    var row = button.parentNode.parentNode;
    var name = row.cells[0].innerHTML;
    var phone = row.cells[1].innerHTML;

    // Remover o contato localmente
    var storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    var updatedContacts = storedContacts.filter(function (contact) {
        return !(contact.name === name && contact.phone === phone);
    });
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));

    row.parentNode.removeChild(row);
}
