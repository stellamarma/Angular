import { createAction,props } from "@ngrx/store";
import { Book } from "../models/book";

export const AddBook= createAction('[Book] Add book',props<Book>());
export const RemoveBook=createAction('[Book] Remove book',props<{bookId:string}>());