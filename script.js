// Simplificando
const get = (element) => document.querySelector(element)

// TextArea
const textArea = get('#teamList')

// Trigger
const btnConclude = get("#btnConclude")

// Armazenando os times e suas respectivas cidades
const teamList = []

btnConclude.addEventListener('click', () => {
    const infoTeams = textArea.value.split('\n')

    infoTeams.map(team => teamList.push(team.trim()))

    console.log("   🚀 ~ file: script.js ~ line 9 ~ teamList", teamList)

    teamList.map(info => {
        const separator = info.split(";")
        console.log("🚀 ~ file: script.js ~ line 20 ~ btnConclude.addEventListener ~ info", `${separator[0]} vs ${separator[0]}` )
    })
})
