import { createStore } from 'redux';

const initialState = [
    {
      name: 'Trần Đồng Nguyên',
      age: '21',
      address: 'Nhật Tân - Kim Bảng - Hà Nam'
    },
    {
      name: 'Nguyễn Thị Thanh Bình',
      age: '21',
      address: 'Hà Nam'
    },
    {
      name: 'Vũ Thị Loan',
      age: '19',
      address: 'Nhật Tân - Kim Bảng - Hà Nam'
    },
    {
      name: 'Vũ Thị Ngoan',
      age: '23',
      address: 'Nam Định'
    },
  ]

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_USER':
            return [
                ...state,
                action.payload,
            ]
        case 'DELETE_USER':
            state.splice(action.indexDelete,1)
            return [...state];
        case 'UPDATE_USER':
            state[action.slug] = action.payload
            return state;
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store