const ul = document.querySelector("ul");
const addBtn = document.getElementById("btn-add");
const input = document.getElementById("text-box");

	addBtn.addEventListener("click", function() {
		const textValue = input.value.trim();
		if (!textValue) {
			alert("Por favor, insira uma nota.");
			input.value = "";
			input.focus();
			return;
		}

		const li = document.createElement("li");
		li.textContent = textValue;

		const btnDelete = document.createElement("button");
		btnDelete.className = "btn btn-danger";
		btnDelete.textContent = "Delete";
		btnDelete.addEventListener("click", function() {
			ul.removeChild(li);
		});
		li.appendChild(btnDelete);

		const btnEdit = document.createElement("button");
		btnEdit.className = "btn btn-secondary";
		btnEdit.textContent = "Edit";
		btnEdit.addEventListener("click", function() {
			const currentText = li.firstChild ? li.firstChild.textContent : "";
			const newText = prompt("Edit your note:", currentText);
			if (newText !== null) {
				const trimmed = newText.trim();
				if (!trimmed) {
					alert("Nota não pode ficar vazia.");
					return;
				}
				if (li.firstChild) li.firstChild.textContent = trimmed;
			}
		});
		li.appendChild(btnEdit);
		ul.appendChild(li);
		input.value = "";
		input.focus();
	});

