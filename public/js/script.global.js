
//config tinymce
tinymce.init({
    selector: '#tinyEditor',
    height: 600,
    plugins: [
        'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
        'searchreplace', 'wordcount', 'visualblocks', 'visualchars', 'code', 'fullscreen', 'insertdatetime',
        'media', 'table', 'emoticons', 'template', 'help', 'autosave', 'codesample'
    ],
    codesample_languages: [
        {text: 'HTML/XML', value: 'markup'},
        {text: 'JavaScript', value: 'javascript'},
        {text: 'CSS', value: 'css'},
        {text: 'PHP', value: 'php'},
        {text: 'Ruby', value: 'ruby'},
        {text: 'Python', value: 'python'},
        {text: 'Java', value: 'java'},
        {text: 'C', value: 'c'},
        {text: 'C#', value: 'csharp'},
        {text: 'C++', value: 'cpp'}
    ],
    toolbar: 'undo redo | styles | bold italic |  codesample | alignleft aligncenter alignright alignjustify | ' +
    'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
    'forecolor backcolor emoticons | help  ' ,
    menu: {
      favs: { title: 'Meu favoritos', items: ' fullscreen | emoticons | codesample | code visualaid | searchreplace ' }
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

//check inputs and buttons
function onChangeInputs(input){
    checkInputs(input);
    checkButton(input);
}

function checkInputs(input){
    if(input.value == '' || input.value == undefined || input.value.length < 2){
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
//end check inputs and buttons

//on scroll events
window.addEventListener('scroll', ()=> {
    back_to_top_isvisible();
    load_progress();
});

function back_to_top_isvisible(){
    var height = document.documentElement.scrollTop;
    var arrow = document.querySelector('.back-to-top');
    height > 450 ? arrow.classList.add('is-active') : arrow.classList.remove('is-active');
}

function load_progress(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;

    document.getElementById('progress').style.width = `${scrolled}%`;
}

function backToTop(){
    document.documentElement.scrollTop = 0;
}
//end sroll events





