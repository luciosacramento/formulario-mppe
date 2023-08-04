window.onload = function () {

    /* Inicializando forms:
    INDENTIFICADA / SIGILOSA / ANONIMA */
    var radioButtons = document.querySelectorAll('input[name="identify"]');
    var voce_pessoa = document.querySelector('#voce-pessoa');
    let elements = document.querySelectorAll('.div-show-hide-identificar');
    let vaiIdentificar = document.querySelector('#vai-identificar');
    let vaiIdentificarform = document.querySelector('#vai-identificar-form');
    let quemSofreShowHide = document.querySelectorAll(".quemSofreShowHide");
    let quemSofre = document.querySelectorAll('input[name="quem-sofre"]');
    const atencaoMulher = document.querySelector('#atencao-mulher');
    

    elements.forEach(function (element) {
        element.style.display = 'none';
    });

    voce_pessoa.style.display = 'none';
    //sofroViolencia.style.display = 'none';
    
    function getIdentifySelect(){
        let radioButtons = document.querySelectorAll('input[name="tipo-manifestacao"]');
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                return radioButton.value;

            }
        }
    }

    function getQuemSofre(){
        let radioButtons = document.querySelectorAll('input[name="quem-sofre"]');
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                return radioButton.value;
            }
        }
    }

    function ShowHideQuemSofre(val){
        for (const element_ of quemSofreShowHide) {
            element_.style.display = val;
        }
    }

    function selectRadioIdentify(value){

        // Obtém todos os botões de rádio em um formulário
        var botoesRadio = document.querySelectorAll('input[name="identify"]');

        // Itera pelos botões de rádio
        for (var i = 0; i < botoesRadio.length; i++) {
            // Verifica se o valor do botão de rádio é igual ao valor desejado
            if (botoesRadio[i].value === value) {
                // Define o botão de rádio como selecionado
                botoesRadio[i].checked = true;
                break; // Sai do loop, já que o botão desejado foi encontrado
            }
        }
        var all = document.querySelectorAll("input[name='identify']");
        all.forEach(function (element) {
            element.closest('.radio-group-identify').classList.remove('checked');
        });
        
        document.querySelector("input[value='identificada']").closest('.radio-group-identify').classList.add('checked');
    }



    quemSofre.forEach(function (radioButton) {
        radioButton.addEventListener('change', function () {
            if(this.value === "N"){
                vaiIdentificar.style.display = "contents";
                vaiIdentificarform.style.display = "contents";
                ShowHideQuemSofre("contents");
                
            }else{
                vaiIdentificar.style.display = "none";
                vaiIdentificarform.style.display = "none";
                ShowHideQuemSofre("none");
            }

        });
    });

    
    initializeBoxIdentify();
    /* Inicializando boxes:
    INDENTIFICADA / SIGILOSA / ANONIMA */
    function initializeBoxIdentify(){
        radioButtons.forEach(function (radioButton) {
    
            if (radioButton.checked) {
                radioGroup = radioButton.closest('.radio-group-identify');
                radioGroup.classList.add('checked');
                var mulher = "";
                if(getIdentifySelect() === "violence-contra-mulher"){
                    mulher = "-mulher";
                    voce_pessoa.style.display = 'grid';
                    atencaoMulher.style.display = 'block';
                }else{
                    atencaoMulher.style.display = 'none';
                }
                const atual = document.querySelector("#" + radioButton.value + mulher);
                atual.style.display = 'contents';
            }
        })
    }

    /* Acão show hide dox boxes
    INDENTIFICADA / SIGILOSA / ANONIMA */
    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener('change', function () {
            const radioGroup = radioButton.closest('.radio-group-identify');
            const elements = document.querySelectorAll('.div-show-hide-identificar');

            elements.forEach(function (element) {
                element.style.display = 'none';
            });
            var mulher = "";
            if(getIdentifySelect() === "violence-contra-mulher"){
                mulher = "-mulher";
                atencaoMulher.style.display = 'block';                
            }else{
                atencaoMulher.style.display = 'none';
            }
            const atual = document.querySelector("#" + radioButton.value + mulher);
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

            if (radioButton.value === "solicitacao-certidao" || radioButton.value === "solicitacao-informacao" || radioButton.value === "solicitacao-lgpd" ) {
                document.querySelector("#vai-identificar").style.display = 'none';
                document.querySelector("#vai-identificar-form").style.display = 'none';
            }else {
                const atual = document.querySelector("#" + radioButton.value);
                atual.style.display = 'contents';
                document.querySelector("#subtitle-descricao").style.display = 'block';
            }

            if( radioButton.value === "solicitacao-lgpd"){
                document.querySelector("#subtitle-descricao").style.display = 'none';
            }

            if (radioButton.value === 'elogio') {
                document.querySelector("input[value='anonima']").closest('.radio-group-identify').style.display = 'none';
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
            document.querySelector("#subtitle-descricao").style.display = 'block';
            voce_pessoa.style.display = 'none';
            document.querySelector("#identificada-mulher").style.display = 'none';
            document.querySelector("#identificada").style.display = 'contents';
            selectRadioIdentify('identificada');       
            
            if( radioButton.value === "violence-contra-mulher"){
                voce_pessoa.style.display = 'grid';
                document.querySelector("#identificada-mulher").style.display = 'contents';
                document.querySelector("#identificada").style.display = 'none';
                atencaoMulher.style.display = 'block';
            }else{
                atencaoMulher.style.display = 'none';
            }

            if (radioButton.value === 'elogio') {
                document.querySelector("input[value='anonima']").closest('.radio-group-identify').style.display = 'none';
            }
            if (radioButton.value === 'solicitacao-certidao' || radioButton.value === "solicitacao-informacao" || radioButton.value === "solicitacao-lgpd"  ) {
                document.querySelector("#vai-identificar").style.display = 'none';
                document.querySelector("#vai-identificar-form").style.display = 'none';
            }

            if( radioButton.value === "solicitacao-lgpd"){
                document.querySelector("#subtitle-descricao").style.display = 'none';
            }
            const atual = document.querySelector("#" + radioButton.value);
            atual.style.display = 'contents';

        });
    });

    if(getQuemSofre() === "N"){
        vaiIdentificar.style.display = "contents";
        vaiIdentificarform.style.display = "contents";
        ShowHideQuemSofre("contents");
        
    }else{
        vaiIdentificar.style.display = "none";
        vaiIdentificarform.style.display = "none";
        ShowHideQuemSofre("none");
    }
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
    
    
    var all = document.querySelectorAll("select[name='tipo-pessoa']");
    all.forEach(function (element) {
        element.addEventListener('change', function () {       
            ChangeTipoPessoa(this.value);
        }); 
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

    /*Ocultando todos os formularios de identificação
    function hideAllFormIdentify() {
        elements = document.querySelectorAll('.div-show-hide');
        elements.forEach(function (element) {
            element.style.display = 'none';
        });
    }*/

    var elementsWithAlt = document.querySelectorAll('[alt]');

    elementsWithAlt.forEach(function (element) {
        var tooltip = document.createElement('span');
        tooltip.classList.add('tooltiptext');
        tooltip.innerHTML = element.getAttribute('alt');
        var tooltipWrapper = document.createElement('span');
        tooltipWrapper.classList.add('tooltip');
        if(element.nodeName != 'LABEL'){
            tooltipWrapper.classList.add('removeInterrogacao');
        }
        tooltipWrapper.appendChild(element.cloneNode(true));
        tooltipWrapper.appendChild(tooltip);

        element.parentNode.replaceChild(tooltipWrapper, element);
    });


    let numeroMedidaGroup = document.getElementById("numero-medida-group");

    // Adicione um loop para percorrer a lista de elementos
    let  medidaProtetiva = document.querySelectorAll('input[type="radio"][name="medida-protetiva"]');
    for (let radioButton of medidaProtetiva) {
        radioButton.addEventListener("change", function () {
            // Verifica se a opção "Sim" está selecionada
            if (radioButton.value === "S") {
                // Exibe o campo de "número da medida"
                numeroMedidaGroup.style.display = "block";
            } else {
                // Oculta o campo de "número da medida" caso a opção "Sim" não esteja selecionada
                numeroMedidaGroup.style.display = "none";
            }
        });
    }

    numeroMedidaGroup = document.getElementById("numero-processo");

    // Adicione um loop para percorrer a lista de elementos
    medidaProtetiva = document.querySelectorAll('input[type="radio"][name="tem-processo"]');
    for (let radioButton of medidaProtetiva) {
        radioButton.addEventListener("change", function () {
            // Verifica se a opção "Sim" está selecionada
            if (radioButton.value === "S") {
                // Exibe o campo de "número da medida"
                numeroMedidaGroup.style.display = "block";
            } else {
                // Oculta o campo de "número da medida" caso a opção "Sim" não esteja selecionada
                numeroMedidaGroup.style.display = "none";
            }
        });
    }




}