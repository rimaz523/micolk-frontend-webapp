export default function themeReducer(state = {}, action) {
    switch (action.type) {
        case 'SET_THEME':
            return { ...state, isDark: action.theme.isDark }
        default:
            return state
    }
}
