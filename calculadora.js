function calcular() {

    var numeros = document.getElementById("numeros").value;
    var usar = numeros.split(",");
    
    if(numeros != "") {
        var todos = usar.length;
        var calculo = 0;
       
        for(var i = 0; i < todos; i++) {
            calculo=parseFloat(calculo)+parseFloat(usar[i]);
         }
    
        var resultado = parseFloat(calculo)/parseFloat(todos);
    
        document.getElementById("resultado").value=resultado;
    }
}