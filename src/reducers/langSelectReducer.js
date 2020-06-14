

const english = {
    navButtons: {
        home: 'home',
        projects: 'projects',
        skills: 'skills',
        contacts: 'contacts'
    }
}

const russian = {
    navButtons: {
        home: 'Главная',
        projects: 'проекты',
        skills: 'навыки',
        contacts: 'контакты'
    }
}




const reducer = (state = english, action) => {
    switch(action.type) {
        case 'ENG':
            state = action.data
            return state
        case 'RUS':
            state = action.data
            return state
        default:
            return state
    }
}


export const eng = () => {
    return async dispatch => {
        dispatch({
            type: 'ENG',
            data: english
        })
    }
}

export const rus = () => {
    return async dispatch => {
        dispatch({
            type: 'RUS',
            data: russian
        })
    }
}

export default reducer
