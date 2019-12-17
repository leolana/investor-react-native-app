export const formatCode = code => {

    if (typeof code !== "string" && typeof code !== "number") return

    code = String(code)

    if(5 - code.length === 0) return code

    const zeros = ['0', '00', '000', '0000', '00000']

    const zeroIndex = 5 - code.length

    return `${zeros[zeroIndex]}${code}`

}

export const formatMoney = value => {

    if(value === null || value === undefined) return 

    if(typeof value  == "string") value = parseFloat(value)

    const config = {
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2, 
        style: 'currency', 
        currency: 'BRL'
    }
    
    return value.toLocaleString('pt-BR', config)
      
}

export const formatLoanType = type => {

    const types = {
        'emprestimo-coletivo': 'Coletivo',
        'emprestimo-de-impacto2': 'Impacto',
        'emprestimo': 'Social'
    }

    return types[type]

}

export const formatDate = date => {

    const config = { 
        timeZone: 'UTC' 
    }

    date = new Date(date)
        .toLocaleString('pt-BR', config)
            .split(" ")[0]


    return date
}


export const formatPercent = value => `${String(value).replace('.', ',')}%`
 

