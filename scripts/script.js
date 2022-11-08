const formEl = document.querySelector('.form');

document.querySelector("#Show-Login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});



formEl.addEventListener('submit', event =>{
    event.preventDefault();

    const formData = new FormData(formEl);
    const data = new URLSearchParams(formData);
    fetch('https://reqres.in/api/login',{
        method: 'Post',
        body: data
    }).then(function(Response){
        console.log(Response.status);
        if(Response.ok){
            localStorage.setItem("acesso", true);

            document.querySelector(".popup .logado").addEventListener("click",async function(){
                document.querySelector(".popup").classList.remove("active");
            });
            
          }else{
            alert("tenta de novo amigão");
          }
          return Response.json();
      })
      .catch(error => console.log(error));
     
      
});

