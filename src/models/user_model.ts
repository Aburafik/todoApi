import mongoose from "mongoose";
interface TodoI{
  title: string;
  description: string;

}


interface TodoDocument extends mongoose.Document{
  title: string;
  description: string;

}


const todoScheme = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  }
});


interface todoModelInterface extends mongoose.Model<TodoDocument>{

  set(x: TodoI): TodoDocument;
}


todoScheme.statics.set=(x:TodoI) => {
  return new Todo();
} 

const Todo = mongoose.model<TodoDocument, todoModelInterface>(
  "todos",
  todoScheme
);

Todo.set({
  "title": "some title",
  "description": "some description"
});

export {Todo}