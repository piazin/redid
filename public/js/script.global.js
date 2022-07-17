function confirmSendDelete(event, form){
    event.preventDefault();
    
    var confirm = window.confirm('deseja excluir esta category?');

    if(confirm){
        form.submit();
    }
}