export const registerUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_REGISTER_REQUEST':
            return {
                loading: true,
            }
        case 'USER_REGISTER_SUCCESS':
            return {
                loading: false,
                success: true,
            }
        case 'USER_REGISTER_FAIL':
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export const loginUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            return {
                loading: true,
            }
        case 'USER_LOGIN_SUCCESS':
            return {
                loading: false,
                success: true,
                currentUser: action.payload
            }
        case 'USER_LOGIN_FAIL':
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export const userProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_PROFILE_UPDATE_REQUEST':
            return {
                loading: true,
            }
        case 'USER_PROFILE_UPDATE_SUCCESS':
            return {
                loading: false,
                success: true,
            }
        case 'USER_PROFILE_UPDATE_SUCCESS':
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}


export const userDetailsReducer = (state = {userInfo : []}, action) => {
    switch (action.type) {
        case 'USER_DETAILS_REQUEST':
            return {
                loading: true,
            }
        case 'USER_DETAILS_SUCCESS':
            return {
                loading: false,
                success: true,
                userInfo: action.payload
            }
        case 'USER_DETAILS_FAILED':
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export const getAllUsersReducer = (state = {users : []}, action) => {
    switch (action.type) {
        case 'GET_ALL_USERS_REQUEST':
            return {
                loading: true,
            }
        case 'GET_ALL_USERS_SUCCESS':
            return {
                loading: false,
                users: action.payload
            }
        case 'GET_ALL_USERS_FAILED':
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }
}