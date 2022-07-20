
//config tinymce
tinymce.init({
    selector: '#tinyEditor',
    height: 600,
    plugins: [
        'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
        'searchreplace', 'wordcount', 'visualblocks', 'visualchars', 'code', 'fullscreen', 'insertdatetime',
        'media', 'table', 'emoticons', 'template', 'help', 'autosave'
    ],
    toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | ' +
    'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
    'forecolor backcolor emoticons | help',
    menu: {
      favs: { title: 'Meu favoritos', items: ' fullscreen | emoticons | code visualaid | searchreplace ' }
    },
    menubar: 'favs file edit view insert format tools table help',
    language: 'pt_BR',
    mobile: {
        menubar: true
    }
});

//confirm delete request
function confirmSendDelete(event, form){
    event.preventDefault();
    
    Swal.fire({
        title: 'Deseja excluir?',
        text: "está ação não podera ser desfeita!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#8257E6',
        confirmButtonText: 'Sim, deletar!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                'Deletado!',
                'item deletado com sucesso',
                'success'
                );
                form.submit();
            }
        }); 
}

function onChangeInputs(input){
    checkInputs(input);
    checkButton(input);
}

function checkInputs(input){
    if(input.value == '' || input.value == undefined){
        input.classList.add('is-danger');
    } else {
        input.classList.remove('is-danger');
    }
}

function checkButton(input){
    var btn = info.allSendButtons;
    btn.disabled = input.value == '' || undefined ? true : false;
}


const info = {
    allSendButtons: document.getElementById('checkButton')
}





