//JSON
var produtos = [];

function cadastrar(){

    var nome = document.getElementById("nome").value;
    var marca = document.getElementById("marca").value;
    var valor = document.getElementById("valor").value;

    produtos.push({
        "nome":nome,
        "marca":marca,
        "valor":valor
    });

        limpar();

        listar();

        }

        function limpar(){
            document.getElementById("nome").value="";
            document.getElementById("marca").value="";
            document.getElementById("valor").value="";

            document.getElementById("nome").focus();
        }

        function listar(){
            var tabela = document.getElementById("tabela");

            tabela.innerHTML = "";

            for(var indice=0; indice<produtos.length; indice++){
                var linha = tabela.insertRow(-1);


            var coluna1 = linha.insertCell(0);
            var coluna2 = linha.insertCell(1);
            var coluna3 = linha.insertCell(2);
            var coluna4 = linha.insertCell(3);
            var coluna5 = linha.insertCell(4);

            coluna1.innerHTML = indice+1;
            coluna2.innerHTML = produtos[indice].nome;
            coluna3.innerHTML = produtos[indice].marca;
            coluna4.innerHTML = produtos[indice].valor;
            coluna5.innerHTML = "<button class='btn btn-success' onclick='seleionar("+indice+")'>Selecionar</button>";
            }
        }

        function seleionar(linha){
            document.getElementById("id").value = linha;
            document.getElementById("nome").value = produtos[linha].nome;
            document.getElementById("marca").value = produtos[linha].marca;
            document.getElementById("valor").value = produtos[linha].valor;


            document.getElementById("btnCadastrar").style.display = "none";
            document.getElementById("btnEditar").style.display = "inline-block";
            document.getElementById("btnRemover").style.display = "inline-block";
            document.getElementById("btnCancelar").style.display = "inline-block";
        }








