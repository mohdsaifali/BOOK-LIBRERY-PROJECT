class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {

    static addBookToList(book) {
        const list = document.querySelector("#book-list")
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href= "#"class ="btn btn-danger btn-sm delete>X</a></td>
        `
        list.appendChild(row);

    }

    static clearAllFeilds() {
        document.getElementById("title").value = ""
        document.getElementById("author").value = ""
        document.getElementById("isbn").value = ""
    }
    // Alert show code
    static showAlert(msg, className) {
        const div = document.createElement("div")
        div.className = `alert alert-${className}`
        div.appendChild(document.createTextNode(msg))
        const container = document.querySelector(".container")
        const form = document.querySelector("#book-form")
        container.insertBefore(div, form)

        setTimeout(()=> {
            document.querySelector(".alert").remove()
        }, 3000)

    }

    static deleteBook(el) {
        if (el.classList.contains("delete")) {
            if (confirm("are you sure")) {
                el.parentElement.parentElement.remove()
            }
        }
    }
    static displeyBook(){
        const storeBooks = [
            {
                title:"Book One",
                author:"Jone Deo",
                isbn:"1234"

            },
            {
                title:"Book Two",
                author:"Jone Messy",
                isbn:"123456"

            },
            {
                title:"Book Three",
                author:"Jone cena",
                isbn:"0786"

            },
        ]
        storeBooks.forEach((book)=>{
            UI.addBookToList(book)
        })

    }
}

class store {

}


//EVENT DISPLEY BOOK

document.addEventListener("DOMContentLoaded",UI.displeyBooks)

//Event add a book
document.querySelector("#book-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    if (author == "" || isbn == "" || title == "") {
        UI.showAlert("please fill all the feilds", "danger")
    } else {
        const book = new Book(title, author, isbn)

        UI.addBookToList(book)
        UI.clearAllFeilds();

        // alert("book added sucessfully")
        UI.showAlert("Book Added Successfully", "success")
    }

})


//Event remove a book
document.querySelector("#book-list").addEventListener("click", (y) => {
    UI.deleteBook = y.target
})
