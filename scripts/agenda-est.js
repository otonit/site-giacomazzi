const itemChange = ["item-change1", "item-change2", "item-change3", "item-change4", "item-change5", "item-change6", "item-change7", "item-change8", "item-change9", "item-change10", "item-change11", "item-change12"];
const txtChange = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

function reply_click(clicked_id){
    const idItem = clicked_id
    
    var btn = document.getElementById(idItem);
    
        for (var i = 0; i < itemChange.length; i++) {
            if(idItem == itemChange[i]){
                document.getElementById("title-change").innerHTML = `Agenda Estadual de ${txtChange[i]} de 2022`;
                document.getElementById("txt-change").innerHTML = `CLIQUE AQUI e faça download da Agenda Tributária Estadual de ${txtChange[i]} de 2022.`;
                if(txtChange[i] == "Março"){
                    txtChange[i] = "Marco"
                }
                document.getElementById("txt-change").setAttribute("href", `/assets/downloads/agenda-estadual/agenda-estadual-${txtChange[i]}.pdf`)
                if(txtChange[i] == "Marco"){
                    txtChange[i] = "Março"
                }
            }
        }
    
}