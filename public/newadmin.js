// new code :)

async function mainbook(){
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()
    books.forEach(renderBook)
}

function renderBook(book) {
    // grabbing the body
    let root = document.querySelector('#root')
    // creating a list
    let li = document.createElement('li')
    li.textContent = book.title
    //creating input text box
    let quantityInput = document.createElement('input')
    quantityInput.value = book.quantity
    //creating save btn
    let saveBtn = document.createElement('button')
    saveBtn.textContent = 'Save'
    // adding an eventlistener to retrieve text imput to send to server
    saveBtn.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })

    li.append(quantityInput, saveBtn)
    root.append(li)
}
mainbook()
