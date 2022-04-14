// Simplificando
const get = (element) => document.querySelector(element)

// TextArea
const textArea = get('#teamList')

// Trigger
const btnConclude = get('#btnConclude')

// Armazenando os times e suas respectivas cidades
let teamList = []

btnConclude.addEventListener('click', () => {
    teamList = ''

    const infoTeams = textArea.value.split('\n')

    teamList = []
    infoTeams.map((team) => teamList.push(team.trim()))

    // console.log(teamList)

    showRivals()
})

function showRivals() {
    let team = teamList.map((team) => team.split(';')[0])
    let region = teamList.map((team) => team.split(';')[1])

    console.log(team)
    console.log(region)

    const getRandomPosition = (mult) => Math.round(Math.random() * mult)

    let limit = team.length

    console.log(limit)

    console.log(
        `${team[getRandomPosition(limit)]} vs ${
            team[getRandomPosition(limit -= 1)]
        } - ${region[getRandomPosition(limit)]} - Rodada ${getRandomPosition(1) + 1}
`
    )
}
