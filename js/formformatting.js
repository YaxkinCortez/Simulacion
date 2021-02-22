function onlyNumbers(elementId)
{
    var textfield = document.getElementById(elementId);
    var regex = /[^0-9]/gm;
    textfield.value = textfield.value.replace(regex, "");
}

function onlyMoney(elementId)
{
    var textfield = document.getElementById(elementId);
    var regex = /[^0-9 (.?) 0-9]/g;
    textfield.value = textfield.value.replace(regex, "");
}


function onlyLetters(elementId)
{
    var textfield = document.getElementById(elementId);
    var regex = /[0-9]/gm;
    textfield.value = textfield.value.replace(regex, "");
}