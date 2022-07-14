function reply_click(clicked) {
    var certificado = document.getElementsByName("certificado");
    var dispositivo = document.getElementsByName("dispositivo");
    var validade = document.getElementsByName("validade");
    const confirm = clicked;
    var nomeDisp;

    for (var i = 0; i < certificado.length; i++) {
        if (certificado[i].checked) {
            var checked_cert = certificado[i].value
            console.log("Certificado: " + checked_cert);
        }
    }
    
    for (var i = 0; i < dispositivo.length; i++) {
        if (dispositivo[i].checked) {
            var checked_disp = dispositivo[i].value
            console.log("Dispositivo: " + checked_disp);
        }
    }
    
    for (var i = 0; i < validade.length; i++) {
        if (validade[i].checked) {
            var checked_val = validade[i].value
            console.log("Validade: " + checked_val);
        }
    }

    if(checked_disp == "Arquivo"){
        nomeDisp = "A1 - Arquivo"
    }else if(checked_disp == "Cartao"){
        nomeDisp = "A3 - Cartão"
    }else if(checked_disp == "Kit"){
        nomeDisp = "A3 - Kit Leitora"
    }else{
        nomeDisp = "A3 - Token"
    }

    if(checked_cert + checked_disp == "e-CNPJArquivo" || checked_cert + checked_disp == "NF-eArquivo" || checked_cert + checked_disp == "e-CPFArquivo"){
        document.getElementById("validade_item2").style.visibility = "hidden"
        document.getElementById("validade_item3").style.visibility = "hidden"
        document.getElementById("validade1").checked = true;

        document.getElementById("img-comprar-item").src="/assets/images/pags-secundarias/certificado-digital/e-cnpj.png";
        document.getElementById("nome-preco").innerHTML = `${checked_cert} | ${nomeDisp} `;
        document.getElementById("meses").innerHTML = `${checked_val} MESES`;
        document.getElementById("preco-antes").innerHTML = `de R$240`;
        document.getElementById("preco-agora").innerHTML = `R$194,65`;
        document.getElementById("parcela").innerHTML = `12x de R$16,22`;
        
        if (confirm == "confirm") {
            document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/e-CNPJ/0761/E-CNPJ-A1-12-MESES-SEM-MIDIAL?coupon=LPGRU26532`)
        }
    }else{
        document.getElementById("validade_item1").style.visibility = "visible"
        document.getElementById("validade_item2").style.visibility = "visible"
        document.getElementById("validade_item3").style.visibility = "visible"
    }

    if(checked_cert + checked_disp == "NF-eCartao" || checked_cert + checked_disp == "NF-eKit" || checked_cert + checked_disp == "NF-eToken"){
        document.getElementById("validade_item1").style.visibility = "hidden"
        document.getElementById("validade_item2").style.visibility = "hidden"
        document.getElementById("validade3").checked = true;
    }else{
        document.getElementById("validade_item1").style.visibility = "visible"
    }

    if(checked_cert + checked_disp == "e-CNPJCartao"){
        document.getElementById("img-comprar-item").src="/assets/images/pags-secundarias/certificado-digital/img-saiba1.png";
        document.getElementById("nome-preco").innerHTML = `${checked_cert} | ${nomeDisp}`;
        document.getElementById("meses").innerHTML = `${checked_val} MESES`;
        if(checked_val == "12"){
            document.getElementById("preco-antes").innerHTML = `de R$329`;
            document.getElementById("preco-agora").innerHTML = `R$242,25`;
            document.getElementById("parcela").innerHTML = `12x de R$20,19`;
            if (confirm == "confirm") {
                document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/e-CNPJ/3366/e-CNPJ-A3-12-MESES-CARTAO?coupon=LPGRU26532`)
            }
        }else if(checked_val == "24"){
            document.getElementById("preco-antes").innerHTML = `de R$375`;
            document.getElementById("preco-agora").innerHTML = `R$276,25`;
            document.getElementById("parcela").innerHTML = `12x de R$23,02`;
            if (confirm == "confirm") {
                document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/e-CNPJ/0780/e-CNPJ-A3-24-MESES-CARTAO?coupon=LPGRU26532`)
            }
        }else if(checked_val == "36"){
            document.getElementById("preco-antes").innerHTML = `de R$419`;
            document.getElementById("preco-agora").innerHTML = `R$322,15`;
            document.getElementById("parcela").innerHTML = `12x de R$26,85`;
            if (confirm == "confirm") {
                document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/e-CNPJ/0648/e-CNPJ-A3-36-MESES-CARTAO?coupon=LPGRU26532`)
            }
        }
    }else if(checked_cert + checked_disp == "e-CNPJKit"){
        document.getElementById("img-comprar-item").src="/assets/images/pags-secundarias/certificado-digital/e-cnpj-kit.png";
        document.getElementById("nome-preco").innerHTML = `${checked_cert} | ${nomeDisp}`;
        document.getElementById("meses").innerHTML = `${checked_val} MESES`;
        if(checked_val == "12"){
            document.getElementById("preco-antes").innerHTML = `de R$465`;
            document.getElementById("preco-agora").innerHTML = `R$344,25`;
            document.getElementById("parcela").innerHTML = `12x de R$28,69`;
            if (confirm == "confirm") {
                document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/e-CNPJ/3140/e-CNPJ-A3-12-MESES-CARTAO-E-LEITORA?coupon=LPGRU26532`)
            }
        }else if(checked_val == "24"){
            document.getElementById("preco-antes").innerHTML = `de R$529`;
            document.getElementById("preco-agora").innerHTML = `R$390,15`;
            document.getElementById("parcela").innerHTML = `12x de R$32,51`;
            if (confirm == "confirm") {
                document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/e-CNPJ/0762/e-CNPJ-A3-24-MESES-CARTAO-E-LEITORA?coupon=LPGRU26532`)
            }
        }else if(checked_val == "36"){
            document.getElementById("preco-antes").innerHTML = `de R$589`;
            document.getElementById("preco-agora").innerHTML = `R$437,75`;
            document.getElementById("parcela").innerHTML = `12x de R$36,48`;
            if (confirm == "confirm") {
                document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/e-CNPJ/0649/e-CNPJ-A3-36-MESES-CARTAO-E-LEITORA?coupon=LPGRU26532`)
            }
        }
    }else if(checked_cert + checked_disp == "e-CNPJToken"){
        document.getElementById("img-comprar-item").src="/assets/images/pags-secundarias/certificado-digital/token.png";
        document.getElementById("nome-preco").innerHTML = `${checked_cert} | ${nomeDisp}`;
        document.getElementById("meses").innerHTML = `${checked_val} MESES`;
        if(checked_val == "12"){
            document.getElementById("preco-antes").innerHTML = `de R$465`;
            document.getElementById("preco-agora").innerHTML = `R$344,25`;
            document.getElementById("parcela").innerHTML = `12x de R$28,69`;
            if (confirm == "confirm") {
                document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/e-CNPJ/3141/e-CNPJ-A3-12-MESES-TOKEN?coupon=LPGRU26532`)
            }
        }else if(checked_val == "24"){
            document.getElementById("preco-antes").innerHTML = `de R$529`;
            document.getElementById("preco-agora").innerHTML = `R$390,15`;
            document.getElementById("parcela").innerHTML = `12x de R$32,51`;
            if (confirm == "confirm") {
                document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/e-CNPJ/0785/e-CNPJ-A3-24-MESES-TOKEN?coupon=LPGRU26532`)
            }
        }else if(checked_val == "36"){
            document.getElementById("preco-antes").innerHTML = `de R$619`;
            document.getElementById("preco-agora").innerHTML = `R$458,15`;
            document.getElementById("parcela").innerHTML = `12x de R$38,18`;
            if (confirm == "confirm") {
                document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/e-CNPJ/0650/e-CNPJ-A3-36-MESES-TOKEN?coupon=LPGRU26532`)
            }
        }
    }else if(checked_cert + checked_disp == "e-CPFArquivo"){
        document.getElementById("img-comprar-item").src="/assets/images/pags-secundarias/certificado-digital/e-cpf.png";
        document.getElementById("nome-preco").innerHTML = `${checked_cert} | ${nomeDisp}`;
        document.getElementById("meses").innerHTML = `${checked_val} MESES`;
        document.getElementById("preco-antes").innerHTML = `de R$175`;
        document.getElementById("preco-agora").innerHTML = `R$131,25`;
        document.getElementById("parcela").innerHTML = `12x de R$10,98`;
        if (confirm == "confirm") {
            document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/e-CPF/0769/e-CPF-A1-12-MESES-SEM-MIDIA?coupon=LPGRU26532`)
        }
    }else if(checked_cert + checked_disp == "e-CPFCartao"){
        document.getElementById("img-comprar-item").src="/assets/images/pags-secundarias/certificado-digital/img-saiba2.png";
        document.getElementById("nome-preco").innerHTML = `${checked_cert} | ${nomeDisp}`;
        document.getElementById("meses").innerHTML = `${checked_val} MESES`;
        if(checked_val == "12"){
            document.getElementById("preco-antes").innerHTML = `de R$235`;
            document.getElementById("preco-agora").innerHTML = `R$174,25`;
            document.getElementById("parcela").innerHTML = `12x de R$14,52`;
            if (confirm == "confirm") {
                document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/e-CPF/1471/e-CPF-A3-12-MESES-CARTAO?coupon=LPGRU26532`)
            }
        }else if(checked_val == "24"){
            document.getElementById("preco-antes").innerHTML = `de R$275`;
            document.getElementById("preco-agora").innerHTML = `R$203,15`;
            document.getElementById("parcela").innerHTML = `12x de R$16,93`;
            if (confirm == "confirm") {
                document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/e-CPF/0752/e-CPF-A3-24-MESES-CARTAO?coupon=LPGRU26532`)
            }
        }else if(checked_val == "36"){
            document.getElementById("preco-antes").innerHTML = `de R$305`;
            document.getElementById("preco-agora").innerHTML = `R$242,25`;
            document.getElementById("parcela").innerHTML = `12x de R$20,19`;
            if (confirm == "confirm") {
                document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/e-CPF/0644/e-CPF-A3-36-MESES-CARTAO?coupon=LPGRU26532`)
            }
        }
    }else if(checked_cert + checked_disp == "e-CPFKit"){
        document.getElementById("img-comprar-item").src="/assets/images/pags-secundarias/certificado-digital/e-cpf-kit.png";
        document.getElementById("nome-preco").innerHTML = `${checked_cert} | ${nomeDisp}`;
        document.getElementById("meses").innerHTML = `${checked_val} MESES`;
        if(checked_val == "12"){
            document.getElementById("preco-antes").innerHTML = `de R$409`;
            document.getElementById("preco-agora").innerHTML = `R$301,75`;
            document.getElementById("parcela").innerHTML = `12x de R$25,15`;
            if (confirm == "confirm") {
                document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/e-CPF/1652/e-CPF-A3-12-MESES-CARTAO-E-LEITORA?coupon=LPGRU26532`)
            }
        }else if(checked_val == "24"){
            document.getElementById("preco-antes").innerHTML = `de R$455`;
            document.getElementById("preco-agora").innerHTML = `R$335,75`;
            document.getElementById("parcela").innerHTML = `12x de R$27,98`;
            if (confirm == "confirm") {
                document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/e-CPF/0768/e-CPF-A3-24-MESES-CARTAO-E-LEITORA?coupon=LPGRU26532`)
            }
        }else if(checked_val == "36"){
            document.getElementById("preco-antes").innerHTML = `de R$479`;
            document.getElementById("preco-agora").innerHTML = `R$352,75`;
            document.getElementById("parcela").innerHTML = `12x de R$29,40`;
            if (confirm == "confirm") {
                document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/e-CPF/0645/e-CPF-A3-36-MESES-CARTAO-E-LEITORA?coupon=LPGRU26532`)
            }
        }
    }else if(checked_cert + checked_disp == "e-CPFToken"){
        document.getElementById("img-comprar-item").src="/assets/images/pags-secundarias/certificado-digital/token.png";
        document.getElementById("nome-preco").innerHTML = `${checked_cert} | ${nomeDisp}`;
        document.getElementById("meses").innerHTML = `${checked_val} MESES`;
        if(checked_val == "12"){
            document.getElementById("preco-antes").innerHTML = `de R$409`;
            document.getElementById("preco-agora").innerHTML = `R$301,75`;
            document.getElementById("parcela").innerHTML = `12x de R$25,15`;
            if (confirm == "confirm") {
                document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/e-CPF/3139/e-CPF-A3-12-MESES-TOKEN?coupon=LPGRU26532`)
            }
        }else if(checked_val == "24"){
            document.getElementById("preco-antes").innerHTML = `de R$455`;
            document.getElementById("preco-agora").innerHTML = `R$335,75`;
            document.getElementById("parcela").innerHTML = `12x de R$27,98`;
            if (confirm == "confirm") {
                document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/e-CPF/0784/e-CPF-A3-24-MESES-TOKEN?coupon=LPGRU26532`)
            }
        }else if(checked_val == "36"){
            document.getElementById("preco-antes").innerHTML = `de R$505`;
            document.getElementById("preco-agora").innerHTML = `R$373,15`;
            document.getElementById("parcela").innerHTML = `12x de R$31,10`;
            if (confirm == "confirm") {
                document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/e-CPF/0646/e-CPF-A3-36-MESES-TOKEN?coupon=LPGRU26532`)
            }
        }
    }else if(checked_cert + checked_disp == "NF-eArquivo"){
        document.getElementById("img-comprar-item").src="/assets/images/pags-secundarias/certificado-digital/nf-e.png";
        document.getElementById("nome-preco").innerHTML = `${checked_cert} | ${nomeDisp}`;
        document.getElementById("meses").innerHTML = `${checked_val} MESES`;
        document.getElementById("preco-antes").innerHTML = `de R$270`;
        document.getElementById("preco-agora").innerHTML = `R$194,65`;
        document.getElementById("parcela").innerHTML = `12x de R$16,22`;
        if (confirm == "confirm") {
            document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/NF-e/1296/NF-e-A1-12-MESES-SEM-MIDIA?coupon=LPGRU26532`)
        }
    }else if(checked_cert + checked_disp == "NF-eCartao"){
        document.getElementById("img-comprar-item").src="/assets/images/pags-secundarias/certificado-digital/img-saiba3.png";
        document.getElementById("nome-preco").innerHTML = `${checked_cert} | ${nomeDisp}`;
        document.getElementById("meses").innerHTML = `${checked_val} MESES`;
        document.getElementById("preco-antes").innerHTML = `de R$454`;
        document.getElementById("preco-agora").innerHTML = `R$335,75`;
        document.getElementById("parcela").innerHTML = `12x de R$27,98`;
        if (confirm == "confirm") {
            document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/NF-e/1460/NF-e-A3-36-MESES-CARTAO?coupon=LPGRU26532`)
        }
    }else if(checked_cert + checked_disp == "NF-eKit"){
        document.getElementById("img-comprar-item").src="/assets/images/pags-secundarias/certificado-digital/nf-e-kit.png";
        document.getElementById("nome-preco").innerHTML = `${checked_cert} | ${nomeDisp}`;
        document.getElementById("meses").innerHTML = `${checked_val} MESES`;
        document.getElementById("preco-antes").innerHTML = `de R$655`;
        document.getElementById("preco-agora").innerHTML = `R$483,65`;
        document.getElementById("parcela").innerHTML = `12x de R$40,30`;
        if (confirm == "confirm") {
            document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/NF-e/1461/NF-e-A3-36-MESES-CARTAO-E-LEITORA?coupon=LPGRU26532`)
        }
    }else if(checked_cert + checked_disp == "NF-eToken"){
        document.getElementById("img-comprar-item").src="/assets/images/pags-secundarias/certificado-digital/token.png";
        document.getElementById("nome-preco").innerHTML = `${checked_cert} | ${nomeDisp}`;
        document.getElementById("meses").innerHTML = `${checked_val} MESES`;
        document.getElementById("preco-antes").innerHTML = `de R$655`;
        document.getElementById("preco-agora").innerHTML = `R$483,65`;
        document.getElementById("parcela").innerHTML = `12x de R$40,30`;
        if (confirm == "confirm") {
            document.getElementById("confirm").setAttribute("href", `https://compra.certificadodigital.com.br/loja/identificacao/NF-e/1676/NF-e-A3-36-MESES-TOKEN?coupon=LPGRU26532`)
        }
    }   

};