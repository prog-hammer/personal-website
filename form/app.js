form.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('queries').add({
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
    });
    form.name.value="";
    form.email.value="";
    form.subject.value="";
    form.message.value="";
    
})