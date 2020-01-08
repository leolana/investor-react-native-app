
export const convertScoreByColor = score => {

    score = score.replace(/\d/g,'')

    const scores = {
        'AA': '#C1CF2E',
        'A': '#2DC2BF',
        'B': '#6FC30D',
        'C': '#F04887',
        'D': '#FFB928',
        'E': '#FD615D',
        'HR': '#B61843',
    }

    return scores[score]

}

export const diffDaysForOpportunitie = (date) => {

    const miliSecs = (new Date(date)) - (new Date())

    const diffDays = ( Number.parseInt(miliSecs / 1000 / 60 / 60 / 24) + 1 )

    if (diffDays <= 0) return "encerrado"
    
    if (diffDays == 0) return "hoje"

    return `${diffDays} dias`
}

export const diffDays = (date) => {

    const miliSecs = (new Date(date)) - (new Date())

    const diffDays = ( Number.parseInt(miliSecs / 1000 / 60 / 60 / 24) + 1 )

    return (diffDays <= 0) ? 0 : diffDays
}
