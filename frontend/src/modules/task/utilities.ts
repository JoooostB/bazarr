import taskManager from ".";
import { GroupName } from "./group";

export function createTask<T extends Task.AnyCallable>(
  name: string,
  callable: T,
  ...parameters: Parameters<T>
): Task.Task {
  const callableId = taskManager.create(callable, parameters);

  return {
    name,
    callableId,
  };
}

export function dispatchTask(task: Task.Task[], group: GroupName) {
  // TODO
}

export function createAndDispatchTask<T extends Task.AnyCallable>(
  name: string,
  group: GroupName,
  callable: T,
  ...parameters: Parameters<T>
) {
  const task = createTask(name, callable, ...parameters);
  dispatchTask([task], group);
}
