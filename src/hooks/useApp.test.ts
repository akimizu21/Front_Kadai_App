import { renderHook, act } from '@testing-library/react-hooks';
import { useApp } from './useApp';
import { INIT_TODO_LIST, INIT_TODO_ID } from '../constants/data';

// テスト実行前にwindow.confirmをモック
beforeAll(() => {
  global.window.confirm = jest.fn(() => true);
});

// console.errorをモックして警告を無視
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

describe('useApp', () => {
  it('初期状態が正しいか確認する', () => {
    const { result } = renderHook(() => useApp());

    expect(result.current.states.todoList).toEqual(INIT_TODO_LIST);
    expect(result.current.states.addInputValue).toBe('');
  });

  it('入力値が変更されたときにaddInputValueが更新されるか確認する', () => {
    const { result } = renderHook(() => useApp());

    act(() => {
      result.current.actions.onChangeAddInputValue({
        target: { value: '新しいタスク' }
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.states.addInputValue).toBe('新しいタスク');
  });

  it('新しいタスクが追加されるか確認する', () => {
    const { result } = renderHook(() => useApp());

    act(() => {
      result.current.actions.onChangeAddInputValue({
        target: { value: '新しいタスク' }
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.actions.handleAddTodo();
    });

    expect(result.current.states.todoList).toHaveLength(INIT_TODO_LIST.length + 1);
    expect(result.current.states.todoList[INIT_TODO_LIST.length]).toEqual({
      id: INIT_TODO_ID + 1,
      title: '新しいタスク'
    });
    expect(result.current.states.addInputValue).toBe('');
  });

  it('タスクが削除されるか確認する', () => {
    const { result } = renderHook(() => useApp());

    act(() => {
      result.current.actions.handleDeleteTodo(INIT_TODO_LIST[0].id, INIT_TODO_LIST[0].title);
    });

    expect(result.current.states.todoList).toHaveLength(INIT_TODO_LIST.length - 1);
    expect(result.current.states.todoList.find(todo => todo.id === INIT_TODO_LIST[0].id)).toBeUndefined();
  });

  it('エンターキーが押されたときにタスクが追加されるか確認する', () => {
    const { result } = renderHook(() => useApp());

    act(() => {
      result.current.actions.onChangeAddInputValue({
        target: { value: '新しいタスク' }
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.actions.onkeyDonw({ key: 'Enter' } as React.KeyboardEvent<HTMLInputElement>);
    });

    expect(result.current.states.todoList).toHaveLength(INIT_TODO_LIST.length + 1);
    expect(result.current.states.todoList[INIT_TODO_LIST.length]).toEqual({
      id: INIT_TODO_ID + 1,
      title: '新しいタスク'
    });
    expect(result.current.states.addInputValue).toBe('');
  });
});
