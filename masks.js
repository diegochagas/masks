

function mask(o,f){
	v_obj=o;
	v_fun=f;
	setTimeout("execMask()",1);
};

function execMask(){
	v_obj.value=v_fun(v_obj.value);
}

function onlyNumbers(v){
	return v=v.replace(/\D/g,"");
}

function cep(v){
	v=v.replace(/\D/g,"");
	v=v.substring(0,8);
	v=v.replace(/(\d{5})(\d{3})/,"$1-$2");
	return v;
}

function data(v){
	v=v.replace(/\D/g,"");
	v=v.substring(0,10);
	v=v.replace(/(\d{2})(\d)/,"$1/$2");
	v=v.replace(/(\d{2})(\d)/,"$1/$2");
	return v.substring(0,10);
}


function cpf(v){
	return cpfMask(v);
}

function cpfMask(v){
	v=v.replace(/\D/g,"");
	v=v.substring(0,11);
	v=v.replace(/(\d{3})(\d)/,"$1.$2");
	v=v.replace(/(\d{3})(\d)/,"$1.$2");
	v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
	return v.substring(0,14);
}

function cnpj(v){
	v=v.replace(/\D/g,"");
	v=v.substring(0,14);
	v=v.replace(/^(\d{2})(\d)/,"$1.$2");
	v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3");
	v=v.replace(/\.(\d{3})(\d)/,".$1/$2");
	v=v.replace(/(\d{4})(\d)/,"$1-$2");
	return v;
}

function rgMask(s){
	  s=s.replace(/\D/g,"");
	  s=s.replace(/^(\d{2})(\d{1})/g,"$1.$2");
	  s=s.replace(/^(\d{2}\.\d{3})(\d{1})/g,"$1.$2");
	  s=s.replace(/^(\d{2}\.\d{3}\.\d{3})(\d{1})/g,"$1-$2");
	  return s;
	}

//Aplica a mascara de CPF ou CNPJ de acordo com a qtde de numeros
function cpfCnpj(v){
	v=v.replace(/\D/g,"");
	if (v.length < 12){
		v=v.substring(0,11);
		v=v.replace(/(\d{3})(\d)/,"$1.$2");
		v=v.replace(/(\d{3})(\d)/,"$1.$2");
		v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
	}else {
		v=v.substring(0,14);
		v=v.replace(/^(\d{2})(\d)/,"$1.$2");
		v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3");
		v=v.replace(/\.(\d{3})(\d)/,".$1/$2");
		v=v.replace(/(\d{4})(\d)/,"$1-$2");
	}
	return v;
}

//Fun��o para validar email
function checkEmail(strEmail) {
	var reEmail = /^[\w!#$%&'*+\/=?^`{|}~-]+(\.[\w!#$%&'*+\/=?^`{|}~-]+)*@(([\w-]+\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;
	var returnCheckEmail = (!reEmail.test(strEmail) ? 0 : 1);
	return returnCheckEmail;
}


//Valida CPF
function valida_cpf(cpf){ 
	
	//Remove os pontos e hifens do numero
	cpf = cpf.replace(/\./g, "");
	cpf = cpf.replace(/-/,"");
	
	var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.length < 11)
          return false;
    for (i = 0; i < cpf.length - 1; i++)
          if (cpf.charAt(i) != cpf.charAt(i + 1))
                {
                digitos_iguais = 0;
                break;
                }
    if (!digitos_iguais)
          {
          numeros = cpf.substring(0,9);
          digitos = cpf.substring(9);
          soma = 0;
          for (i = 10; i > 1; i--)
                soma += numeros.charAt(10 - i) * i;
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(0))
                return false;
          numeros = cpf.substring(0,10);
          soma = 0;
          for (i = 11; i > 1; i--)
                soma += numeros.charAt(11 - i) * i;
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(1))
                return false;
          return true;
          }
    else
          return false;
}

//Valida CNPJ
function valida_cnpj(cnpj){  
	
	//Remove os pontos e hifens do numero
	cnpj = cnpj.replace(/\./g, "");
	cnpj = cnpj.replace(/-/,"");
	cnpj = cnpj.replace(/\//g, '');
	
	var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;
    digitos_iguais = 1;
    if (cnpj.length < 14 && cnpj.length < 15)
          return false;
    for (i = 0; i < cnpj.length - 1; i++)
          if (cnpj.charAt(i) != cnpj.charAt(i + 1))
                {
                digitos_iguais = 0;
                break;
                }
    if (!digitos_iguais)
          {
          tamanho = cnpj.length - 2;
          numeros = cnpj.substring(0,tamanho);
          digitos = cnpj.substring(tamanho);
          soma = 0;
          pos = tamanho - 7;
          for (i = tamanho; i >= 1; i--)
                {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                      pos = 9;
                }
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(0))
                return false;
          tamanho = tamanho + 1;
          numeros = cnpj.substring(0,tamanho);
          soma = 0;
          pos = tamanho - 7;
          for (i = tamanho; i >= 1; i--)
                {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                      pos = 9;
                }
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(1))
                return false;
          return true;
          }
    else
          return false;
} 

function phone(v){
  v=v.replace(/\D/g,"");
  v=v.substring(0,11);
  v=v.replace(/(\d{2})(\d)/,"($1) $2");
  v=v.replace(/(\d{4})(\d)/,"$1-$2");
  return v.substring(0,15);
}

function phoneAlt(v){
  v=v.replace(/\D/g,"");
  v=v.substring(0,11);
  v=v.replace(/(\d{2})(\d)/,"($1) $2");
  v=v.replace(/(\d{4})(\d)/,"$1-$2");
  return v.substring(0,14);
}

//Funcao para ir para o proximo campo de texto 
function saltaCampo(prox, tammax, event) {
   
	if (event.value.length >= tammax) {
        // Muda o foco para o proximo componente
        prox.focus();
    }
    
};


//Aplica a mascara de acordo com o tipo do numero
function tipoTelefone(v){
	v=v.replace(/\D/g,"");
	v=v.substring(0,11);
	v=v.replace(/(\d{2})(\d)/,"($1) $2");
	if (v.length > 13){
		v=v.replace(/(\d{5})(\d)/,"$1-$2");
	}else {
		v=v.replace(/(\d{4})(\d)/,"$1-$2");
	}
	return v;
}
