import * as actionTypes from '../actions/actionTypes';

const initUsers = [
    {
        "id": "1",
        "name": "Mycola",
        "email": "demchenkomucola@gmail.com",
        "password": "1234",
        "role": "admin"
      },
      {
        "id": "2",
        "name": "Leonid",
        "email": "blablabla@gmail.com",
        "password": "4321",
        "role": "user"
      },
      {
        "id": "3",
        "name": "Max",
        "email": "max@gmail.com",
        "password": "4321",
        "role": "user"
      }
]

export default (state = initUsers, action) => {
    switch (action.type){
        case actionTypes.ADD_USER:
            let {username, email, password} = action.user;
            return [
                ...state,
                {
                    id: new Date().getTime(),
                    username: username,
                    email: email,
                    password: password
                }
            ]
        default: 
        return state;
    }
}