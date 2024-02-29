function login(){
  const login = document.getElementById('Login').value;
  const senha = document.getElementById('Senha').value;

  if (login == 'admin' && senha == 'admin') {
    
      location.href = "./pages/projeto.html";
  } 
  else {
      alert('Usúario ou senha incorreto')        
  }

}