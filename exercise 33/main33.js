// Manipulating DOM Elements

const header = document.querySelector('#head');
console.log(head);

const paragraph = document.querySelector('#paragraph');
    console.log(paragraph);

// changing textContent
function changeContent(){
        header.textContent = "Kuso dhawaw page-kayga";
}

// changing HTMLContent
function changeElement(){
    paragraph.innerHTML = 'By using <strong>textContent and innerHTML</strong';
}

