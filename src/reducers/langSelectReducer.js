

const english = {
    type: 'english',
    home: {
      data: '[ "Hi, Im Aleksey Vasiliev.", "I am Full Stack Web Developer.", "I Love to Learn.", "I Love to Code." ]'
    },
    navButtons: {
        home: 'home',
        projects: 'projects',
        skills: 'skills',
        contacts: 'contacts'
    },
    contacts: {
        social: {
            name: 'Get in touch'
        },
        contact: {
            name: 'Send me a message',
            nameForm: 'Name',
            email: 'Email',
            phone: 'Phone',
            message: 'Message',
            required: 'required',
            button: 'send'
        }
    },
    projects: {
        portfolio: {
            name: "Portfolio website",
            tech: {
                name: "Tech used",
                React: "React",
                JS: "JavaScript",
                Redux: "Redux",
                Html: "Html",
                css: "Css"
            },
            description: "Portfolio website, with language switch. Implemented in React with lang selection logic is in Redux.",
            link: "live preview"
        }
    }
}

const russian = {
    type: 'russian',
    home: {
        data: '[ "Привет я Алексей Васильев.", "Я Фулл-Стек Веб разработчик.", "Я люблю, код, учится и спорт."]'
    },
    navButtons: {
        home: 'Главная',
        projects: 'проекты',
        skills: 'навыки',
        contacts: 'контакты'
    },
    contacts: {
        social: {
            name: 'Связатся со мной'
        },
        contact: {
            name: 'Отправить сообщение',
            nameForm: 'Имя',
            email: 'Емайл',
            phone: 'Телефон',
            message: 'Сообщение',
            required: 'требуется',
            button: 'отправить'
        }
    },
    projects: {
        portfolio: {
            name: "Сайт портфолио",
            tech: {
                name: "Технологии",
                React: "React",
                JS: "JavaScript",
                Redux: "Redux",
                Html: "Html",
                css: "Css"
            },
            description: "Сайт портфолио, с преключением языков написан на React, логика переключения языков выведенна в Redux.",
            link: "Посмотреть"
        }
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
