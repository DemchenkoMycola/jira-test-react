import * as actionTypes from '../actions/actionTypes';

const initUsers = [
    {
        "id": "1",
        "mame": "Mycola",
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
      }
]

export default (state = initUsers, action) => {
    switch (action.type){
        case actionTypes.ADD_USER:
            return [
                ...state,
                {
                    id: new Date().getTime(),
                }
            ]
        default: 
        return state;
    }
}