

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

// Apply the mask of CPF or CNPJ according to the quantity of numbers
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

// Function to validate email
function checkEmail(strEmail) {
	var reEmail = /^[\w!#$%&'*+\/=?^`{|}~-]+(\.[\w!#$%&'*+\/=?^`{|}~-]+)*@(([\w-]+\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;
	var returnCheckEmail = (!reEmail.test(strEmail) ? 0 : 1);
	return returnCheckEmail;
}


function cpfValidate(cpf){ 
	
	// Remove dots and hyphens from number
	cpf = cpf.replace(/\./g, "");
	cpf = cpf.replace(/-/,"");
	
	var numbers, digits, sum, i, result, same_digits;
    same_digits = 1;
    if (cpf.length < 11)
          return false;
    for (i = 0; i < cpf.length - 1; i++)
          if (cpf.charAt(i) != cpf.charAt(i + 1))
                {
                same_digits = 0;
                break;
                }
    if (!same_digits)
          {
          numbers = cpf.substring(0,9);
          digits = cpf.substring(9);
          sum = 0;
          for (i = 10; i > 1; i--)
                sum += numbers.charAt(10 - i) * i;
          result = sum % 11 < 2 ? 0 : 11 - sum % 11;
          if (result != digits.charAt(0))
                return false;
          numbers = cpf.substring(0,10);
          sum = 0;
          for (i = 11; i > 1; i--)
                sum += numbers.charAt(11 - i) * i;
          result = sum % 11 < 2 ? 0 : 11 - sum % 11;
          if (result != digits.charAt(1))
                return false;
          return true;
          }
    else
          return false;
}

function cnpjValidate(cnpj){  
	
	// Remove dots and hyphens from number
	cnpj = cnpj.replace(/\./g, "");
	cnpj = cnpj.replace(/-/,"");
	cnpj = cnpj.replace(/\//g, '');
	
	var numbers, digits, sum, i, result, pos, size, same_digits;
    same_digits = 1;
    if (cnpj.length < 14 && cnpj.length < 15)
          return false;
    for (i = 0; i < cnpj.length - 1; i++)
          if (cnpj.charAt(i) != cnpj.charAt(i + 1))
                {
                same_digits = 0;
                break;
                }
    if (!same_digits)
          {
          size = cnpj.length - 2;
          numbers = cnpj.substring(0,size);
          digits = cnpj.substring(size);
          sum = 0;
          pos = size - 7;
          for (i = size; i >= 1; i--)
                {
                sum += numbers.charAt(size - i) * pos--;
                if (pos < 2)
                      pos = 9;
                }
          result = sum % 11 < 2 ? 0 : 11 - sum % 11;
          if (result != digits.charAt(0))
                return false;
          size = size + 1;
          numbers = cnpj.substring(0,size);
          sum = 0;
          pos = size - 7;
          for (i = size; i >= 1; i--)
                {
                sum += numbers.charAt(size - i) * pos--;
                if (pos < 2)
                      pos = 9;
                }
          result = sum % 11 < 2 ? 0 : 11 - sum % 11;
          if (result != digits.charAt(1))
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

// Functon to jump from next field
function jumpField(next, maxSize, event) {
	if (event.value.length >= maxSize) {
        // Change focus from next component 
        next.focus();
    }
};


// Apply the mask according to number type
function phoneType(v){
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
