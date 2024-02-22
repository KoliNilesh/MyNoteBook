  const addButton = document.querySelector('#add');

  const  updateLSData = () => {
    const textAreaData = document.querySelectorAll('textarea');
    const notes =[];
    console.log(textAreaData);
    textAreaData.forEach((note) => {
        return notes.push(note.value);
    })
    console.log(notes);

    localStorage.setItem('notes',JSON.stringify(notes));
  }

 const addNewNote = (text = '' ) =>{
    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `   <div class="operation">
                            <button class="edit"> <i class="fa-solid fa-pen-to-square"></i></button>
                            <button class="delete"><i class="fa-solid fa-trash-arrow-up"></i> </button>
                        </div>
                        <div class="main ${text ? "" : "hidden"} "></div> 
                         <textarea class="${text ? "hidden" : ""} "></textarea>
                        
                    ` ;
     note.insertAdjacentHTML('afterbegin',htmlData); 
     // console.log(note); 
                               
    // const htmlData = `
    //                     <div class="operation">
    //                     <button class="edit"> <i class="fa-solid fa-pen-to-square"></i></button>
    //                     <button class="delete"><i class="fa-solid fa-trash-arrow-up"></i> </button>
    //                 </div>
    //                 <div class="main ${text ? "" : "hidden"}"></div> 
    //                  <textarea class="${text ? "hidden" : ""} "></textarea>`;
   
    
    // Getting The References

    const editbutton = note.querySelector('.edit');
    const delbutton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    // deleting the notes
    delbutton.addEventListener('click',() => {
        note.remove();
        updateLSData();
    })
    // toggle using button
    textArea.value=text;
    mainDiv.innerHTML=text;

    editbutton.addEventListener('click' , () => {
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })
    textArea.addEventListener('change',(event) =>{
        const value = event.target.value;
        
        mainDiv.innerHTML = value ;

        updateLSData();
    })
    document.body.appendChild(note); //it append a note as the last child node

 }

    // getting data back from localStorage

    const notes = JSON.parse(localStorage.getItem('notes'));

    if(notes){ notes.forEach((note) => addNewNote(note)) } ;
    

 addButton.addEventListener('click' ,() => addNewNote() );