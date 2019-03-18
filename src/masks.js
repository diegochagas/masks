
/**
 * It was created a default function called mask to execute the selected mask function.
 * In addition, it was inserted in this function a setTimeOut, to create a delay of one
 * milisecond for update the value of the input, to avoid conflicts
 */
function executeMask(target, selectedFunction) {
  setTimeout(() => {
    target.value = selectedFunction(target.value);
  }, 1);
}

function acceptsNumbersOnly(fieldValue){
  fieldValue = fieldValue.replace(/\D/g, "");
  return fieldValue;
} 

function CEP(fieldValue) {
  fieldValue = fieldValue.replace(/\D/g, "");
  fieldValue = fieldValue.substring(0, 8);
  fieldValue = fieldValue.replace(/(\d{5})(\d{3})/, "$1-$2");
  return fieldValue;
}

function data(fieldValue) {
  fieldValue = fieldValue.replace(/\D/g, "");
  fieldValue = fieldValue.substring(0, 10);
  fieldValue = fieldValue.replace(/(\d{2})(\d)/, "$1/$2");
  fieldValue = fieldValue.replace(/(\d{2})(\d)/, "$1/$2");
  return fieldValue.substring(0, 10);
}

function CPF(fieldValue) {
  fieldValue = fieldValue.replace(/\D/g, "");
  fieldValue = fieldValue.substring(0, 11);
  fieldValue = fieldValue.replace(/(\d{3})(\d)/, "$1.$2");
  fieldValue = fieldValue.replace(/(\d{3})(\d)/, "$1.$2");
  fieldValue = fieldValue.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return fieldValue.substring(0, 14);
}

function CNPJ(fieldValue) {
  fieldValue = fieldValue.replace(/\D/g, "");
  fieldValue = fieldValue.substring(0, 14);
  fieldValue = fieldValue.replace(/^(\d{2})(\d)/, "$1.$2");
  fieldValue = fieldValue.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
  fieldValue = fieldValue.replace(/\.(\d{3})(\d)/, ".$1/$2");
  fieldValue = fieldValue.replace(/(\d{4})(\d)/, "$1-$2");
  return fieldValue;
}

function CPFAndCNPJ(fieldValue) {
  fieldValue = fieldValue.replace(/\D/g, "");
  if (fieldValue.length < 12) {
    fieldValue = fieldValue.substring(0, 11);
    fieldValue = fieldValue.replace(/(\d{3})(\d)/, "$1.$2");
    fieldValue = fieldValue.replace(/(\d{3})(\d)/, "$1.$2");
    fieldValue = fieldValue.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  } else {
    fieldValue = fieldValue.substring(0, 14);
    fieldValue = fieldValue.replace(/^(\d{2})(\d)/, "$1.$2");
    fieldValue = fieldValue.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    fieldValue = fieldValue.replace(/\.(\d{3})(\d)/, ".$1/$2");
    fieldValue = fieldValue.replace(/(\d{4})(\d)/, "$1-$2");
  }
  return fieldValue;
}

function RG(fieldValue) {
  fieldValue = fieldValue.replace(/\D/g, "");
  fieldValue = fieldValue.substring(0, 10);
  fieldValue = fieldValue.replace(/^(\d{2})(\d{1})/g, "$1.$2");
  fieldValue = fieldValue.replace(/^(\d{2}\.\d{3})(\d{1})/g, "$1.$2");
  fieldValue = fieldValue.replace(/^(\d{2}\.\d{3}\.\d{3})(\d{1})/g, "$1-$2");
  return fieldValue;
}

function telephone(fieldValue) {
  fieldValue = fieldValue.replace(/\D/g, "");
  fieldValue = fieldValue.substring(0, 11);
  fieldValue = fieldValue.replace(/(\d{2})(\d)/, "($1) $2");
  fieldValue = fieldValue.replace(/(\d{4})(\d)/, "$1-$2");
  return fieldValue.substring(0, 14);
}

function cellphone(fieldValue) {
  fieldValue = fieldValue.replace(/\D/g, "");
  fieldValue = fieldValue.substring(0, 11);
  fieldValue = fieldValue.replace(/(\d{2})(\d)/, "($1) $2");
  fieldValue = fieldValue.replace(/(\d{5})(\d)/, "$1-$2");
  return fieldValue.substring(0, 15);
}

function telephoneAndCellphone(fieldValue) {
  fieldValue = fieldValue.replace(/\D/g, "");
  fieldValue = fieldValue.substring(0, 11);
  fieldValue = fieldValue.replace(/(\d{2})(\d)/, "($1) $2");
  if (fieldValue.length > 13) {
    fieldValue = fieldValue.replace(/(\d{5})(\d)/, "$1-$2");
  } else {
    fieldValue = fieldValue.replace(/(\d{4})(\d)/, "$1-$2");
  }
  return fieldValue;
}

function emailValidate(fieldValue) {
  const regexEmail = /^[\w!#$%&'*+\/=?^`{|}~-]+(\.[\w!#$%&'*+\/=?^`{|}~-]+)*@(([\w-]+\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;
  const emailIsValid = !regexEmail.test(fieldValue) ? false : true;
  return emailIsValid;
}

function cpfValidate(cpf) {
// Remove dots and hyphens from number
cpf = cpf.replace(/\./g, "");
cpf = cpf.replace(/-/, "");

var numbers, digits, sum, i, result, same_digits;
same_digits = 1;
if (cpf.length < 11) return false;
for (i = 0; i < cpf.length - 1; i++)
if (cpf.charAt(i) != cpf.charAt(i + 1)) {
  same_digits = 0;
  break;
}
if (!same_digits) {
numbers = cpf.substring(0, 9);
digits = cpf.substring(9);
sum = 0;
for (i = 10; i > 1; i--) sum += numbers.charAt(10 - i) * i;
result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
if (result != digits.charAt(0)) return false;
numbers = cpf.substring(0, 10);
sum = 0;
for (i = 11; i > 1; i--) sum += numbers.charAt(11 - i) * i;
result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
if (result != digits.charAt(1)) return false;
return true;
} else return false;
}

function cnpjValidate(cnpj) {
// Remove dots and hyphens from number
cnpj = cnpj.replace(/\./g, "");
cnpj = cnpj.replace(/-/, "");
cnpj = cnpj.replace(/\//g, "");

var numbers, digits, sum, i, result, pos, size, same_digits;
same_digits = 1;
if (cnpj.length < 14 && cnpj.length < 15) return false;
for (i = 0; i < cnpj.length - 1; i++)
if (cnpj.charAt(i) != cnpj.charAt(i + 1)) {
  same_digits = 0;
  break;
}
if (!same_digits) {
size = cnpj.length - 2;
numbers = cnpj.substring(0, size);
digits = cnpj.substring(size);
sum = 0;
pos = size - 7;
for (i = size; i >= 1; i--) {
  sum += numbers.charAt(size - i) * pos--;
  if (pos < 2) pos = 9;
}
result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
if (result != digits.charAt(0)) return false;
size = size + 1;
numbers = cnpj.substring(0, size);
sum = 0;
pos = size - 7;
for (i = size; i >= 1; i--) {
  sum += numbers.charAt(size - i) * pos--;
  if (pos < 2) pos = 9;
}
result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
if (result != digits.charAt(1)) return false;
return true;
} else return false;
}

// Functon to jump from next field
function jumpField(next, maxSize, event) {
if (event.value.length >= maxSize) {
// Change focus from next component
next.focus();
}
}