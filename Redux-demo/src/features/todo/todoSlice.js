import {createSlice , nanoid} from '@reduxjs/toolkit';

const initialState = {  
    todo:[{
        id:"abc",
        title:"Learn Redux",
        task:"Learn Redux",
        isDone:false,
    }]
};


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const newTodo = {
                id:123,
                task: action.payload,
                isDone: false,
            }
            state.todo.push(newTodo);
        },
        deleteTodo: (state, action) => {
            // action.payload
            state.todo = state.todo.filter((todo) => todo.id !== action.payload);
        },
        markAsDone:(state,action) =>{
            state.todo = state.todo.map((todo) => 
                todo.id === action.payload ? { ...todo, isDone: true } : todo
        }
    }
});    

export const {addTodo, deleteTodo, markAsDone} = todoSlice.actions;
export default todoSlice.reducer; 