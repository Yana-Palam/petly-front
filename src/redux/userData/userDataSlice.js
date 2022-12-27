import { createSlice } from '@reduxjs/toolkit';
import { addPet, deletePet, getUserInfo, updateUserInfo } from './userDataOperation';

const userDataSlice = createSlice({
  name: 'userInfo',
  initialState: {
    data: {
      'password': 'somepassword',
      'email': 'unknown@gmail.com',
      'name': 'John Doe',
      'city': 'Kyiv',
      'phone': '+380983455545',
      'birthday': '2022-07-19',
      'avatarURL': 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjI0MDQ4MzA2MDQ0/cover-wonder-woman-ftr.jpg',
      'favorites': '6867d7469076bdce33bc75fee20918eb',
      'userId': '6398c46afa9147cea8f4f255',
      'myPets': [
        {
          'petId': '6398c46afa9147cea8f4f255',
          'name': 'Tom',
          'birthday': '2022-07-19',
          'date': '2022-07-19',
          'breed': 'British',
          'comments': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          'avatarURL': 'https://images.news18.com/ibnlive/uploads/2022/07/cats-2.png',
          'owner': 'Unknown Type: String',
          'createdAt': '2022-12-14T18:34:54.619Z',
          'updatedAt': '2022-12-14T18:34:54.619Z',
        },
        {
          'petId': '6398c46afa9147cea8f4f55',
          'name': 'Mimi',
          'birthday': '2021-03-15',
          'date': '2022-07-19',
          'breed': 'Abyssinian',
          'comments': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          'avatarURL': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
          'owner': 'Unknown Type: String',
          'createdAt': '2022-12-14T18:34:54.619Z',
          'updatedAt': '2022-12-14T18:34:54.619Z',
        },
      ],
      'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTMyMjgzZDkwMzE3Mjk5ODAwYzk0YyIsImlhdCI6MTY3MDU4NzAyOCwiZXhwIjoxNjcwNjY5ODI4fQ.ykZK0GV8f72F9AJ7bIqPFtX_3A1ibFgWBei32GH07xw',
      'createdAt': '2022-12-18T15:49:50.351+00:00',
      'updatedAt': '2022-12-18T15:49:50.351+00:00',
    },

    error: null,
  },
  extraReducers: {
    //get user info
    [getUserInfo.pending]: (state) => {
      state.error = null;
    },
    [getUserInfo.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [getUserInfo.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //update user info
    [updateUserInfo.pending]: (state) => {
      state.error = null;
    },
    [updateUserInfo.fulfilled]: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    [updateUserInfo.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //add pet
    [addPet.pending]: (state) => {
      state.error = null;
    },
    [addPet.fulfilled]: (state, action) => {
      state.data.myPets.push(action.payload);
    },
    [addPet.rejected]: (state, action) => {
      state.error = action.payload;
    },

    //delete pet
    [deletePet.pending]: (state) => {
      state.error = null;
    },
    [deletePet.fulfilled]: (state, action) => {
      state.data.myPets = state.data.myPets.filter(pet => pet.petId !== action.payload.petId);
    },
    [deletePet.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default userDataSlice.reducer;
