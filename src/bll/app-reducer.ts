export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"
type InitialStateType = typeof initialState;

export type SetAppStatusAT = ReturnType<typeof setAppStatusAC>
type AppActionsType = SetAppStatusAT

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
    isInitialized: false
}

export const appReducer = (state: InitialStateType, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case "app/SET_STATUS":
            return {...state, status: action.status}
        default:
            return {...state}
    }
}

export const setAppStatusAC = (status: RequestStatusType) => ({type: "app/SET_STATUS", status} as const);
