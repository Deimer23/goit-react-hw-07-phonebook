import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact } from "./operations";
import Notiflix from "notiflix";

const initialState = {
    constacts:[],
    isLoading:false,
    error:null
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    extraReducers:{
        [getContacts.pending](state, action){
            state.isLoading = true;
        },

        [getContacts.fulfilled](state, action){
            state.isLoading = false;
            state.contacts = action.payload;  
        },

        [getContacts.rejected](state, action){
            state.isLoading=false;
            state.error = action.payload;
        },

        [addContact.pending](state, action){
            state.isLoading = true;
        },

        [addContact.fulfilled](state, action){
            state.isLoading = false;
            state.contacts.push(action.payload)
            Notiflix.Notify.success(action.payload.name + ' HA SIDO AGREGADO...');
        },

        [addContact.rejected](state, action){
            state.isLoading = false;
            state.error = action.payload;
        },

        [deleteContact.pending](state, action){
            state.isLoading = true;
        },

        [deleteContact.fulfilled](state, action){
            state.isLoading = false;
            state.contacts = state.contacts.filter(contact=>contact.id !== action.payload.id);
            Notiflix.Notify.failure(action.payload.name + ' HA SIDO ELIMINADO')
            // const index = state.constacts.findIndex(
            //     contact => contact.id === action.payload.id
            //   );
            //   state.contacts.splice(index, 1);
        },

        [deleteContact.rejected](state, action){
            state.isLoading = false;
            state.error = action.payload;
        },
    } 

});

export const contactsReducer = contactsSlice.reducer;