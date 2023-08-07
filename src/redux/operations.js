import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64cd1abcbb31a268409a6040.mockapi.io/"

export const getContacts = createAsyncThunk(

    'contacts/fetchAll',
    async(_, thunkAPI)=>{        
        try {
            const response = await axios.get("usuario");            
            return response.data;
        } catch (error) {
            console.log(error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }

);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async(text, thunkAPI)=>{
        try {
            const response = await axios.post("usuario", text);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async(contactId, thunkAPI)=>{
        try {
            const response = await axios.delete(`usuario/${contactId}`);
            console.log(response.data);
            return response.data;                       
        } catch (error) {
            thunkAPI.rejectWithValue(error.message);
        }
    }    
);