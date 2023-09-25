let link = 'http://localhost:3001'
async function listBooks(){
    let response = await fetch(link + '/listBooks')
    let books = await response.json()
    console.log(books)
    books.forEach(b => {
        renderBook(b)
    });
}
// Your Code Here
listBooks()


function renderBook(book) {
    let bookContainer = document.querySelector('.book-container')
    bookContainer.innerHTML += `
        <div class="col-sm-3">
            <div class="card" style="width: 100%;">
               
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <input id="myText" type="text" value="${book.quantity}"/>
                    <input type="button" class="button" value="Save" onclick="myFunction()"/>
                </div>
            </div>
        </div>
    `
}

const text = document.querySelectorAll("text")
const buttons = document.querySelectorAll("button");

async function myFunction(){
    onclick =  async function() {
        if(true){
             console.log('all buttons are working')
        }
    }
}




