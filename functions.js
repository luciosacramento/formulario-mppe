window.onload = function(){

var radioButtons = document.querySelectorAll('input[name="identify"]');
let elements = document.querySelectorAll('.div-show-hide-identificar');
elements.forEach(function(element) {
    element.style.display = 'none';
});

radioButtons.forEach(function(radioButton) {

    if (radioButton.checked) { 
        radioGroup = radioButton.closest('.radio-group-identify');
        radioGroup.classList.add('checked');
        const atual = document.querySelector("#" + radioButton.value);
        atual.style.display = 'contents';
    }
})

radioButtons.forEach(function(radioButton) {
  radioButton.addEventListener('change', function() {
    const radioGroup = radioButton.closest('.radio-group-identify');
    const elements = document.querySelectorAll('.div-show-hide-identificar');
    elements.forEach(function(element) {
      element.style.display = 'none';
    });
    const atual = document.querySelector("#" + radioButton.value);
    atual.style.display = 'contents';
    radioGroup.classList.add('checked');

    radioGroup.classList.add('checked');
    radioButtons.forEach(function(radio) {
      if (radio !== radioButton) {
        radio.closest('.radio-group-identify').classList.remove('checked');
      }else{
        radio.closest('.radio-group-identify').classList.add('checked');
      }
    });
  });
});


radioButtons = document.querySelectorAll('input[name="tipo-manifestacao"]');
elements = document.querySelectorAll('.div-show-hide-form');
elements.forEach(function(element) {
    element.style.display = 'none';
});

radioButtons.forEach(function(radioButton) {

    if (radioButton.checked) { 
        const atual = document.querySelector("#" + radioButton.value);
        atual.style.display = 'contents';
    }
})

radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
      const elements = document.querySelectorAll('.div-show-hide-form');
      elements.forEach(function(element) {
        element.style.display = 'none';
      });
      const atual = document.querySelector("#" + radioButton.value);
      atual.style.display = 'contents';
    });
  });


}