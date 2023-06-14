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

showAllIdentifys();

radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
      showAllIdentifys();  
      const elements = document.querySelectorAll('.div-show-hide-form');
      elements.forEach(function(element) {
        element.style.display = 'none';
      });
      const atual = document.querySelector("#" + radioButton.value);
      atual.style.display = 'contents';
      if(radioButton.value === 'elogio'){
        document.querySelector("input[value='anonima']").closest('.radio-group-identify').style.display = 'none';
      }
    });
  });

  function showAllIdentifys(){
    const identifys = document.querySelectorAll("input[name='identify']");

    identifys.forEach(function(element) {
        element.closest('.radio-group-identify').style.display = 'table'
    });
  }

  var elementsWithAlt = document.querySelectorAll('[alt]');

  elementsWithAlt.forEach(function(element) {
    var tooltip = document.createElement('span');
    tooltip.classList.add('tooltiptext');
    tooltip.innerHTML  = element.getAttribute('alt');

    var tooltipWrapper = document.createElement('span');
    tooltipWrapper.classList.add('tooltip');
    tooltipWrapper.appendChild(element.cloneNode(true));
    tooltipWrapper.appendChild(tooltip);

    element.parentNode.replaceChild(tooltipWrapper, element);
  });


}