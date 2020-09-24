
function sortAge(a, b){
    return a.age - b.age
}

async function loadAddressBook() {
    const response = await fetch('adressbok-1.json')
    const persons = await response.json()
    const parent = document.getElementById('listOfContacts')
    persons.sort(sortAge).forEach(person => {
        const li = document.createElement('li')
        li.innerText = `${person.lastname}, ${person.firstname} Email: ${person.email}`
        parent.appendChild(li)
    })
}

loadAddressBook()

