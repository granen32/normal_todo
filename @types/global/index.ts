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
  completed?: boolean;
  text: string;
}