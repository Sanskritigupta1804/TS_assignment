type EmailTask = { type: "email"; address: string };
type LogTask = { type: "log"; message: string };

type Task = EmailTask | LogTask;

const tasks: Task[] = [
  { type: "email", address: "test@test.com" },
  { type: "log", message: "User logged in" }
];

function processTask(task: Task): string {
  if (task.type === "email") {
    return `Sent email to ${task.address}`;
  } else {
    return `Logging message: ${task.message}`;
  }
}

// Example usage
tasks.forEach(t => console.log(processTask(t)));
