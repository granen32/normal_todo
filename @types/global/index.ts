// 투두 프롭스
export interface TextProps {
  completed?: boolean;
  children: React.ReactNode;
}
// 체크박스
export interface CheckBoxProps {
  checked?: boolean;
  onClick?(): void;
}
// todolist props
export interface TodoListProps {
  onClickCheck(id :number):void;
  onDelteBtn(id :number):void;
  id: number;
  completed?: boolean;
  text: string;
}
// delete btn
export interface DelteBtn {
  onClick?(): void;
}

// input type
export interface InputBoxProps {
  onChange(e:React.ChangeEvent<HTMLInputElement>) :void;
  onKeyDown(e:React.KeyboardEvent<HTMLInputElement>) :void;
  inputText:string;
}

export interface NewTodo {
  id:number;
  text:string;
  completed:boolean;
}