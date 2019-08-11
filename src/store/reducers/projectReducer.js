const initState = {
    projects: [
        {id: 1 ,title: 'First Gamer Tag' , gamerTag: 'gra55xhopperx', content: 'Games played with this gamer tag'},
        {id: 2 ,title: 'Second Gamer Tag' ,  gamerTag: 'Ukilika', content: 'Games played with this gamer tag'},
        {id: 3 ,title: 'Third Gamer Tag' ,  gamerTag: 'Buddha The Chef', content: 'Games played with this gamer tag'},
    ]
}

const projectReducer = (state = initState,action) => {
    return state
}

export default projectReducer