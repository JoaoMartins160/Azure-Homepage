const formEl = document.querySelector('.form');
var count = 0;

document.querySelector("#Show-Login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector("#Show-Login2").addEventListener("click",function(){
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
        if(Response.ok){
            localStorage.setItem("acesso", true);     
          }else{
            const p = document.createElement("p");
            p.innerText = "Email ou Senha incorreta";
            document.getElementById("alerta").appendChild(p);
            count +=1;

          }
          return Response.json();
      }).then(function(){
        if(localStorage.getItem("acesso") == true){
        document.querySelector(".popup .logado").addEventListener("click",function(){
            document.querySelector(".popup").classList.remove("active");
        });
         }
     })
      .catch(error => console.log(error));
     
      
});

function revp(){
   if(count >= 1){
    const Element = document.getElementById("alerta");
     Element.removeChild(Element.firstChild);
     count = 0;
}
}

function logout(){
    

}


const unit = document.querySelector("#btn-university")

unit.addEventListener('submit',(e)=>{
    const options ={
        method: 'GET',
    }
    fetch(`http://universities.hipolabs.com/search?name=${search}`, options).then(response =>{
        response.json()
        .then(data => console.log(data))
    }).catch(e => console.log('Deu Erro:' + e,message))
})