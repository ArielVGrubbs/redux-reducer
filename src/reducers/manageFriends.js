export function manageFriends(state={friends: []}, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            state.friends.push(action.friend)
            return {friends: state.friends}
        case 'REMOVE_FRIEND':
            let newFriends = state.friends.filter(friend => friend.id !== action.id)
            return {friends: newFriends}
        default:
            return state;
    }
}
