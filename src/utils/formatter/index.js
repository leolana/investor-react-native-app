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

    const nf = new Intl.NumberFormat('pt-BR', config);
    
    return nf.format(value)
      
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


export const trunc = value => {

    if(value === undefined) return 0

    value = value.toString().match(/^-?\d+(?:\.\d{0,2})?/)
    
    if(value === null) return 0
    
    
    return parseFloat(value[0])
}


export const formatPercent = value => `${String(value).replace('.', ',')}%`
 

