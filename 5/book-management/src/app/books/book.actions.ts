import { createAction,props } from "@ngrx/store";
import { Book } from "../models/book";

export const AddBook= createAction('[Book] Add book',props<Book>());

export const AddBookSuccess =createAction('[Book] Add Boook Successfully',props<Book>());

export const AddBookFailure =createAction('[Book] Add Boook Failure',props<{error:any}>());

export const RemoveBook=createAction('[Book] Remove book',props<{bookId:string}>());


