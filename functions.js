window.onload = function () {

    /* Inicializando forms:
    INDENTIFICADA / SIGILOSA / ANONIMA */
    var radioButtons = document.querySelectorAll('input[name="identify"]');
    let elements = document.querySelectorAll('.div-show-hide-identificar');
    elements.forEach(function (element) {
        element.style.display = 'none';
    });

    /* Inicializando boxes:
    INDENTIFICADA / SIGILOSA / ANONIMA */
    radioButtons.forEach(function (radioButton) {

        if (radioButton.checked) {
            radioGroup = radioButton.closest('.radio-group-identify');
            radioGroup.classList.add('checked');
            const atual = document.querySelector("#" + radioButton.value);
            atual.style.display = 'contents';
        }
    })

    /* Acão show hide dox boxes
    INDENTIFICADA / SIGILOSA / ANONIMA */
    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener('change', function () {
            const radioGroup = radioButton.closest('.radio-group-identify');
            const elements = document.querySelectorAll('.div-show-hide-identificar');
            elements.forEach(function (element) {
                element.style.display = 'none';
            });
            const atual = document.querySelector("#" + radioButton.value);
            atual.style.display = 'contents';
            var all = document.querySelectorAll("input[name='identify']");
            all.forEach(function (element) {
                element.closest('.radio-group-identify').classList.remove('checked');
            });
            radioButton.closest('.radio-group-identify').classList.add('checked');

        });
    });


    hideAllForm();

    /*Tornando visível o formulario selecionado*/
    radioButtons = document.querySelectorAll('input[name="tipo-manifestacao"]');
    radioButtons.forEach(function (radioButton) {
        if (radioButton.checked) {
            const atual = document.querySelector("#" + radioButton.value);
            atual.style.display = 'contents';
            document.querySelector("#vai-identificar").style.display = 'contents';

            if (radioButton.value === "solicitacao-certidao") {
                document.querySelector("#vai-identificar").style.display = 'none';
                document.querySelector("#vai-identificar-form").style.display = 'none';
            }
            if (radioButton.value === 'elogio') {
                document.querySelector("input[value='anonima']").closest('.radio-group-identify').style.display = 'none';
            }
            if (radioButton.value === 'solicitacao-certidao') {
                document.querySelector("#vai-identificar").style.display = 'none';
            } else {
                const atual = document.querySelector("#" + radioButton.value);
                atual.style.display = 'contents';
            }
        }


    })

    showAllIdentifys();

    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener('change', function () {
            showAllIdentifys();
            const elements = document.querySelectorAll('.div-show-hide-form');
            elements.forEach(function (element) {
                element.style.display = 'none';
            });
            document.querySelector("#vai-identificar").style.display = 'contents';
            document.querySelector("#vai-identificar-form").style.display = 'contents';

            if (radioButton.value === 'elogio') {
                document.querySelector("input[value='anonima']").closest('.radio-group-identify').style.display = 'none';
            }
            if (radioButton.value === 'solicitacao-certidao') {
                document.querySelector("#vai-identificar").style.display = 'none';
                document.querySelector("#vai-identificar-form").style.display = 'none';
            }
            const atual = document.querySelector("#" + radioButton.value);
            atual.style.display = 'contents';

        });
    });

    /* Quando mudar o tipo de pessoa:
    PESSOA FISICA / PESSOA JURIDICA */
    ChangeTipoPessoa('pessoa-fisica');
    function ChangeTipoPessoa(value){
        var all = document.querySelectorAll(".pessoa-fisica,.pessoa-juridica");
        var selectedClass  = value;

        all.forEach(function (element) {
            if(element.classList.contains(selectedClass)){
                element.style.display = 'grid';
            }else{
                element.style.display = 'none';
            }   
        });
    }
    
    document.querySelector("select[name='tipo-pessoa']").addEventListener('change', function () {        
        ChangeTipoPessoa(this.value);
    });

    /*Tornando visível todos os Boxes de identificação*/
    function showAllIdentifys() {
        const elements = document.querySelectorAll('.radio-group-identify');
        elements.forEach(function (element) {
            element.style.display = 'table';
        });
    }

    /*Ocultando todos os formularios*/
    function hideAllForm() {
        elements = document.querySelectorAll('.div-show-hide-form');
        elements.forEach(function (element) {
            element.style.display = 'none';
        });
    }

    /*Ocultando todos os formularios de identificação*/
    function hideAllFormIdentify() {
        elements = document.querySelectorAll('.div-show-hide');
        elements.forEach(function (element) {
            element.style.display = 'none';
        });
    }

    var elementsWithAlt = document.querySelectorAll('[alt]');

    elementsWithAlt.forEach(function (element) {
        var tooltip = document.createElement('span');
        tooltip.classList.add('tooltiptext');
        tooltip.innerHTML = element.getAttribute('alt');

        var tooltipWrapper = document.createElement('span');
        tooltipWrapper.classList.add('tooltip');
        tooltipWrapper.appendChild(element.cloneNode(true));
        tooltipWrapper.appendChild(tooltip);

        element.parentNode.replaceChild(tooltipWrapper, element);
    });


}