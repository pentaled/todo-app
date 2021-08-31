SELECT * FROM todo.tasks WHERE todo.tasks.status = "?" AND todo.tasks.task = "?";
INSERT INTO todo.tasks (todo.tasks.task)
VALUES ("Meeting at 4pm")
UPDATE todo.tasks
SET todo.tasks.task = "Buy Chocolate", todo.tasks.status = "DONE"
WHERE todo.tasks.id = '3C';
DELETE FROM todo.tasks WHERE (todo.tasks.id = '3C');