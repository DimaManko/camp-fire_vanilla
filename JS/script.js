// Где спрятался последний?
// Вам дается список задач (tasks), каждая задача имеет определённый приоритет: low, medium или high. Приоритеты расположены в порядке возрастания важности: low < medium < high.

// Вам нужно вывести в консоль индекс последней задачи, приоритет которой равен или выше необходимого приоритета (targetPriority). Если такой задачи нет, значит выводим -1.

const data = `{
  "tasks": [
    { "title": "Полить кактус", "priority": "low" },
    { "title": "Покормить золотую рыбку", "priority": "low" },
    { "title": "Помахать коту", "priority": "low" }
  ],
  "targetPriority": "medium"
}`;

function tasksPriority(data) {
  const tasksObj = JSON.parse(data);
  const { tasks, targetPriority } = tasksObj;
  const priorityArr = ["low", "medium", "high"];
  const prior = tasks.findLastIndex((task) => {
    return (
      priorityArr.indexOf(task.priority) >= priorityArr.indexOf(targetPriority)
    );
  });
  console.log(prior);
}

tasksPriority(data);
