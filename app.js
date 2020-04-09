<<<<<<< HEAD
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
                var a=document.form.name.value;
                var b=document.form.email.value;
                var c=document.form.subject.value;
                var d=document.form.message.value;
                if((a==null||a=="")&&(b==null||b=="")&&(c==null||c=="")&&(d==null||d=="")){
                    alert("All fields are required");
                    return false;
                }
                else if(a==null||a==""){
                    alert("Name can not be empty");
                    return false;
                }
                else if(b==null||b==""){
                    alert("Email can not be empty");
                    return false;
                }
                else if(c==null||c==""){
                    alert("Subject can not be empty");
                    return false;
                }
                else if(d==null||d==""){
                    alert("Please mention a detailed message");
                    return false;
                }
                else{
                    db.collection('queries').add({
                        name: form.name.value,
                        email: form.email.value,
                        subject: form.subject.value,
                        message: form.message.value,
                        date: date,
                        time: time
                    });
                    alert("Thank You for you response "+a+"!");
                    form.name.value="";
                    form.email.value="";
                    form.subject.value="";
                    form.message.value="";
                    return true;
                }
    
    
    
    
=======
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
                var a=document.form.name.value;
                var b=document.form.email.value;
                var c=document.form.subject.value;
                var d=document.form.message.value;
                if((a==null||a=="")&&(b==null||b=="")&&(c==null||c=="")&&(d==null||d=="")){
                    alert("All fields are required");
                    return false;
                }
                else if(a==null||a==""){
                    alert("Name can not be empty");
                    return false;
                }
                else if(b==null||b==""){
                    alert("Email can not be empty");
                    return false;
                }
                else if(c==null||c==""){
                    alert("Subject can not be empty");
                    return false;
                }
                else if(d==null||d==""){
                    alert("Please mention a detailed message");
                    return false;
                }
                else{
                    db.collection('queries').add({
                        name: form.name.value,
                        email: form.email.value,
                        subject: form.subject.value,
                        message: form.message.value,
                        date: date,
                        time: time
                    });
                    alert("Thank You for you response "+a+"!");
                    form.name.value="";
                    form.email.value="";
                    form.subject.value="";
                    form.message.value="";
                    return true;
                }
    
    
    
    
>>>>>>> f52892c6a6f8e88250a19a46bfb6bf41ed5bba94
})