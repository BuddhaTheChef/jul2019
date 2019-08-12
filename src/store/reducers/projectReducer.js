const initState = {
    projects: [
        {id: 1 ,title: 'First Gamer Tag' , gamerTag: 'gra55xhopperx', content: 'Games played with this gamer tag'},
        {id: 2 ,title: 'Second Gamer Tag' ,  gamerTag: 'Ukilika', content: 'Games played with this gamer tag'},
        {id: 3 ,title: 'Third Gamer Tag' ,  gamerTag: 'Buddha The Chef', content: 'Games played with this gamer tag'},
    ]
}

const projectReducer = (state = initState,action) => {
    switch(action.type) {
        case 'CREATE_PROJECT': 
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default: 
            return state;
    }
}

export default projectReducer