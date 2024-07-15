
let text_content = document.getElementById('text-content')

let btn = document.getElementById('add-btn')

let currentTitle = 'untitle'

let set_btn = document.getElementById('set-title-btn')

let title_to_be_renamed = document.getElementById('title-to-rename')

let save_notes_container = document.getElementsByClassName('save-notes-container')[0]


let add_notes = () => {
    save_notes_container.insertAdjacentHTML('afterbegin', `<div class="saved-notes">
    <div class='notes-content'>
    <h3 class='notes-title'>${currentTitle}</h3>
    <p class='notes-para'>${text_content.value}</p>
    </div>
    </div>`)

    let note_content = save_notes_container
    console.log(note_content.children[0].innerText)
}


// note_content.addEventListener('click', () => {
//     console.log('it working')
// })


set_btn.addEventListener('click', () => {
    let new_title = prompt('enter your new title')
    currentTitle = new_title
    title_to_be_renamed.innerHTML = currentTitle

})

btn.addEventListener('click', add_notes)
