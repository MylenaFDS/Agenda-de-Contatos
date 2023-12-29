function addContact() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;

    if (name && phone) {
        var contactList = document.getElementById("contactItems");
        var listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${name}</strong>: ${phone}`;
        contactList.appendChild(listItem);

        // Limpar os campos do formulário após adicionar o contato
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
    } else {
        alert("Por favor, preencha todos os campos do formulário.");
    }
}


