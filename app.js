var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('queries').add({
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
        date: date,
        time: time
    });
    form.name.value="";
    form.email.value="";
    form.subject.value="";
    form.message.value="";
    
})