import carregarPessoas from "./function/carregar-pessoas"
import sortearAzarado from "./function/sortear-azarado"
import terminal from "./ui/terminal"

const pessoas = carregarPessoas("src/data/dados.csv")
const azarado = sortearAzarado(pessoas)

terminal.clear()

terminal.yellow("\nIniciando").white(" o sorteio...")
terminal.white("\n\nO").brightRed(" AZARADO")
terminal.bold.brightGreen(" MAIS SORTUDO").white(" É: \n")
terminal.bold.brightYellow(azarado.toString())
terminal("\n\n🎉🎉🎉🎉🎉")
console.log()
