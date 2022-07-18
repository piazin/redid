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

