// var data = {
//   "list": [
//       { "id": 1, "text": "New Task 1", "start_date": "10-03-2024 00:00", "duration": 5 },
//       { "id": 2, "text": "New Task 2", "start_date": "02-03-2024 00:00", "duration": 2 },
//       { "id": 3, "text": "New Task 3", "start_date": "05-03-2024 00:00", "duration": 4 }
//   ]
// };
var data = {
  "list": [
    { "id": 1, "text": "Project #1", "start_date": null, "duration": null, "parent": 0, "progress": 0, "open": true },
    { "id": 2, "text": "Task #1", "start_date": "2019-08-01 00:00", "duration": 5, "parent": 1, "progress": 1 },
    { "id": 3, "text": "Task #2", "start_date": "2019-08-06 00:00", "duration": 2, "parent": 1, "progress": 0.5 },
    { "id": 4, "text": "Task #3", "start_date": null, "duration": null, "parent": 1, "progress": 0.8, "open": true },
    { "id": 5, "text": "Task #3.1", "start_date": "2019-08-09 00:00", "duration": 2, "parent": 4, "progress": 0.2 },
    { "id": 6, "text": "Task #3.2", "start_date": "2019-08-11 00:00", "duration": 1, "parent": 4, "progress": 0 }
  ],
  "links": [
    { "id": 1, "source": 2, "target": 3, "type": "0" },
    { "id": 2, "source": 3, "target": 4, "type": "0" },
    { "id": 3, "source": 5, "target": 6, "type": "0" }
  ]
}

