
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
