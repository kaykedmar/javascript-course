function validarUsuario() { 
  const senhaInput = document.getElementById("senha");
  
  if (senhaInput.value === "123") { 
    alert("Parabéns! Você entrou.");
  } else  { 
    alert("Senha incorreta. Tente novamente.");
  }
}
