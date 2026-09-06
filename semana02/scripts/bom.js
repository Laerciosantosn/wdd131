const input = document.querySelector("input");
const list = document.querySelector("ul");
const button = document.querySelector("button");



button.addEventListener('click', function () {
    // event.preventDefault();
    // console.log("aqui")

    if (input.value.trim() !== '') {
        const myItem = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const botaoRemove = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(botaoRemove);
        botaoRemove.textContent = '❌';
        list.appendChild(listItem);


        botaoRemove.addEventListener('click', () => {
            list.removeChild(listItem);
        });
    }
    input.focus()
});
