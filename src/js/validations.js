function checkInputContent (input) {
    if(input == false) alert("Por favor, preencha o campo de pesquisa antes!")
}

function checkArrayLength (item){
    if(item.length === 0) return false // item vazio
}

function checkAllValuesEquality (...items) {
    let firstItem = items[0]
    items.forEach ( item => {
        if ( firstItem === false ) return
        if ( firstItem !== item ){
            firstItem = false // Caso algum item seja diferente do comparado 
        }
    })
    if(firstItem !== false ) firstItem = true
    return firstItem
}

export { checkInputContent, checkArrayLength, checkAllValuesEquality }