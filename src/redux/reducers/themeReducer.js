export default function themeReducer(state = {}, action) {
    switch (action.type) {
        case 'SET_DARK_MODE_THEME':
            return { ...state, isDark: action.theme.isDark }
        case 'SET_LIGHT_MODE_THEME':
            return { ...state, isDark: action.theme.isDark }
        default:
            return state
    }
}
