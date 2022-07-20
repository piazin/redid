window.addEventListener('load', ()=>{
    formatDate(fields.formDate);
});

const {format, formatRelative, parseISO} = require('date-fns');
const { ptBR } = require('date-fns/locale');

function formatDate(form){
    var span = fields.relativeTime;
    
    form.forEach((input, index)=>{

        var now = format(new Date, 'yyyy-MM-dd HH:mm:ss');
        var dateNow = parseISO(now);
        var dateOld = parseISO(input.value);

        const relative = formatRelative(
            dateOld,
            dateNow, 
            { locale: ptBR }
        );
        
        span[index].innerText = relative;

    })
}

const fields = {
    formDate: document.querySelectorAll('input.input-date-value-card'),
    relativeTime: document.querySelectorAll('span.date')
}