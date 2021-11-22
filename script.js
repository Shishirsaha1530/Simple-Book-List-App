let addBookBtn = document.getElementById('addBookBtn');


addBookBtn.addEventListener('click', ()=>{
let titleInput = document.getElementById('titleInput')
let authorInput = document.getElementById('authorInput')
let yearInput = document.getElementById('yearInput')
    let titleBookValue = titleInput.value;
    let authorInputValue = authorInput.value;
    let yearInputValue = yearInput.value;

    titleInput.value='';
    authorInput.value='';
    yearInput.value='';

    if(titleBookValue==='' && authorInputValue==='' && yearInputValue===''){
        alert('Write Something in the input box')
    }
    else{
        let newRow = document.createElement('tr');
        console.log(newRow);

        let newtitle = document.createElement('th');
        newtitle.innerText= titleBookValue;
        newRow.appendChild(newtitle)

        let newAuthor = document.createElement('th');
        newAuthor.innerText= authorInputValue;
        newRow.appendChild(newAuthor)

        let newYear = document.createElement('th');
        newYear.innerText= yearInputValue;
        newRow.appendChild(newYear);

        document.getElementById('tableBody').appendChild(newRow);
    }

    
    
})