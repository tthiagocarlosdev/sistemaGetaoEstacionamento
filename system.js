var readlineSync = require('readline-sync')
function header(){
    console.log("SISTEMA DE GESTÃO DE ESTACIONAMENTOS")
    console.log("[1] Registrar entrada de veículos")
    console.log("[2] Registrar saída de veículos")
    console.log("[3] Listar vagas")
    console.log("[4] Fechar sistema")
    menu = Number(readlineSync.question(''))
    return menu
}
var vagas = []
var menu = 0
do{
    menu = header()
    switch(menu){
        case 1:
            let vaga = Number(readlineSync.question('Qual vaga: '))
            vagas[vaga] = readlineSync.question('Qual veículo: ')
            console.log(`A vaga ${vaga} foi preenchida!`)
            console.log('Veículo cadastrado com sucesso!\n')
            break
        case 2:
            let veiculoSaida = readlineSync.question("Veículo de saída: ")
            var index = vagas.indexOf(veiculoSaida)
            if(index > -1){
                vagas.splice(index, 1)
            }
            console.log(`Veículo ${veiculoSaida} na vaga ${index} retirado com sucesso!`)
            break
        case 3:
            if(vagas.length == 0){
                console.log("Todas as vagas livres!")
            } else{
                for(contador in vagas){
                    console.log(`Vaga: ${contador} | Veículo:  ${vagas[contador]}`)
                }
            }
            break
    }
}while(menu != 4)