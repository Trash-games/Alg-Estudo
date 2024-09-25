// Classificação de Nível de Estudo

let série = prompt("Insira o ano que esta estudando")

if (série < 1){
    alert("Inválido")
}else if (série <= 5){
    alert("Ensino Fundamental I")
}else if (série >= 6 && série <= 9){
    alert("Ensino Fundamental II")
}else if (série >= 10 && série <=12){
    alert("Ensino Médio")
}else {
    alert("Educação Superior")
}