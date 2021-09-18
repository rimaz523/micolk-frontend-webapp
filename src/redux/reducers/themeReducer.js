import initialState from './initialState'

export default function themeReducer(state = initialState.theme, action) {
    switch (action.type) {
        case 'SET_THEME':
            return { ...state, isDark: action.theme.isDark }
        default:
            return state
    }
}
