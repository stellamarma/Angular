import { createReducer,on } from "@ngrx/store";
import { AddBook,RemoveBook } from "./book.actions";
import { Book } from "../models/book";

export const intialState: ReadonlyArray<Book>=[];

export const BookReducer=createReducer(

    intialState,
    on(AddBook,(state,{id,title,author})=>[...state,{id,title,author}]),
    on(RemoveBook,(state,{bookId})=>state.filter(book=>book.id!==bookId))
);