
export const convertColorByScoreType = score => {

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