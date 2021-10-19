var events = [];
var tasks = [];

function main() {
   enterDayInfo();
   enterEvents();
   enterTasks();
   tasksToEvents();
   printEvents();
}

function enterDayInfo() {
   //user inputs starting time of day
   var hour = parseInt(document.getElementById("startHour").value);
   var minute = parseInt(document.getElementById("startMinute").value);
   var pm = document.getElementById("startPm").value;
   var startInterval = numIntervals(hour, minute, pm);
   var start = new Event("Day Begins", 0, startInterval);
   events.push(start);

   //user inputs ending time of day
   hour = parseInt(document.getElementById("endHour").value);
   minute = parseInt(document.getElementById("endMinute").value);
   pm = document.getElementById("endPm").value;
   startInterval = numIntervals(hour, minute, pm);
   var end = new Event("Day Ends", 0, startInterval);
   events.push(end);
}

function enterEvents() {
   var startHour;
   var startMinute;
   var startInterval;
   var duration;
   var intervalDuration;
   var pm;
   
   //breakfast
   startHour = parseInt(document.getElementById("breakfastHour").value);
   startMinute = parseInt(document.getElementById("breakfastMinute").value);
   startInterval = numIntervals(startHour, startMinute, "AM");
   duration = parseInt(document.getElementById("breakfastDuration").value);
   intervalDuration = numIntervals(0, duration, "AM");
   var breakfast = new Event("breakfast", intervalDuration, startInterval);
   events.push(breakfast);

   //lunch
   startHour = parseInt(document.getElementById("lunchHour").value);
   startMinute = parseInt(document.getElementById("lunchMinute").value);
   pm = document.getElementById("lunchPm").value;
   startInterval = numIntervals(startHour, startMinute, pm);
   duration = parseInt(document.getElementById("lunchDuration").value);
   intervalDuration = numIntervals(0, duration, "AM");
   var lunch = new Event("lunch", intervalDuration, startInterval);
   events.push(lunch);

   //dinner
   startHour = parseInt(document.getElementById("dinnerHour").value);
   startMinute = parseInt(document.getElementById("dinnerMinute").value);
   startInterval = numIntervals(startHour, startMinute, "PM");
   duration = parseInt(document.getElementById("dinnerDuration").value);
   intervalDuration = numIntervals(0, duration, "AM");
   var dinner = new Event("dinner", intervalDuration, startInterval);
   events.push(dinner);

   //workouts
   var numWorkouts = parseInt(document.getElementById("numWorkouts").value);
   for (var i = 1; i <= numWorkouts; i++){
      if (i == 1){
         startHour = parseInt(document.getElementById("workout1Hour").value);
         startMinute = parseInt(document.getElementById("workout1Minute").value);
         pm = document.getElementById("workout1Pm").value;
         startInterval = numIntervals(startHour, startMinute, pm);
         duration = parseInt(document.getElementById("workout1Duration").value);
         intervalDuration = numIntervals(0, duration, "AM");
         var workout1 = new Event("workout 1", intervalDuration, startInterval);
         events.push(workout1);
      }else if (i == 2) {
         startHour = parseInt(document.getElementById("workout2Hour").value);
         startMinute = parseInt(document.getElementById("workout2Minute").value);
         pm = document.getElementById("workout2Pm").value;
         startInterval = numIntervals(startHour, startMinute, pm);
         duration = parseInt(document.getElementById("workout2Duration").value);
         intervalDuration = numIntervals(0, duration, "AM");
         var workout2 = new Event("workout 2", intervalDuration, startInterval);
         events.push(workout2);
      }
   }   

   //nap
   var napDesired = document.getElementById("napDesired").value;
   if (napDesired == "yes" || napDesired == "Yes" || napDesired == "YES"){
      startHour = parseInt(document.getElementById("napHour").value);
      startMinute = parseInt(document.getElementById("napMinute").value);
      pm = document.getElementById("napPm").value;
      startInterval = numIntervals(startHour, startMinute, pm);
      duration = parseInt(document.getElementById("napDuration").value);
      intervalDuration = numIntervals(0, duration, "AM");
      var nap = new Event("nap", intervalDuration, startInterval);
      events.push(nap);
   }

   var numEvents = parseInt(document.getElementById("numOtherEvents").value);
   var name;
   for (var i = 1; i <= numEvents; i++){
      if (i == 1){
         name = document.getElementById("otherEvent1Name").value;
         startHour = parseInt(document.getElementById("otherEvent1Hour").value);
         startMinute = parseInt(document.getElementById("otherEvent1Minute").value);
         pm = document.getElementById("otherEvent1Pm").value;
         startInterval = numIntervals(startHour, startMinute, pm);
         duration = parseInt(document.getElementById("otherEvent1Duration").value);
         intervalDuration = numIntervals(0, duration, "AM");
         var event1 = new Event(name, intervalDuration, startInterval);
         events.push(event1);
      }else if (i == 2) {
         name = document.getElementById("otherEvent2Name").value;
         startHour = parseInt(document.getElementById("otherEvent2Hour").value);
         startMinute = parseInt(document.getElementById("otherEvent2Minute").value);
         pm = document.getElementById("otherEvent2Pm").value;
         startInterval = numIntervals(startHour, startMinute, pm);
         duration = parseInt(document.getElementById("otherEvent2Duration").value);
         intervalDuration = numIntervals(0, duration, "AM");
         var event2 = new Event(name, intervalDuration, startInterval);
         events.push(event2);
      }else if (i == 3) {
         name = document.getElementById("otherEvent3Name").value;
         startHour = parseInt(document.getElementById("otherEvent3Hour").value);
         startMinute = parseInt(document.getElementById("otherEvent3Minute").value);
         pm = document.getElementById("otherEvent3Pm").value;
         startInterval = numIntervals(startHour, startMinute, pm);
         duration = parseInt(document.getElementById("otherEvent3Duration").value);
         intervalDuration = numIntervals(0, duration, "AM");
         var event3 = new Event(name, intervalDuration, startInterval);
         events.push(event3);
      }else if (i == 4) {
         name = document.getElementById("otherEvent4Name").value;
         startHour = parseInt(document.getElementById("otherEvent4Hour").value);
         startMinute = parseInt(document.getElementById("otherEvent4Minute").value);
         pm = document.getElementById("otherEvent4Pm").value;
         startInterval = numIntervals(startHour, startMinute, pm);
         duration = parseInt(document.getElementById("otherEvent4Duration").value);
         intervalDuration = numIntervals(0, duration, "AM");
         var event4 = new Event(name, intervalDuration, startInterval);
         events.push(event4);
      }else if (i == 5) {
         name = document.getElementById("otherEvent5Name").value;
         startHour = parseInt(document.getElementById("otherEvent5Hour").value);
         startMinute = parseInt(document.getElementById("otherEvent5Minute").value);
         pm = document.getElementById("otherEvent5Pm").value;
         startInterval = numIntervals(startHour, startMinute, pm);
         duration = parseInt(document.getElementById("otherEvent5Duration").value);
         intervalDuration = numIntervals(0, duration, "AM");
         var event5 = new Event(name, intervalDuration, startInterval);
         events.push(event5);
      }
   }  
   timeSort();
}

function enterTasks() {
   var name;
   var duration;
   var intervalDuration; 
   var difficulty; 
   var interest; 
   var physEx; 
   var urgency;
   var numTasks = parseInt(document.getElementById("numTasks").value);
   for (var i = 1; i <= numTasks; i++){
      if (i==1){
         name = document.getElementById("task1Name").value;
         duration = parseInt(document.getElementById("task1Duration").value);
         intervalDuration = numIntervals(0, duration, "AM");
         difficulty = document.getElementById("task1Difficulty").value;
         interest = document.getElementById("task1Interest").value;
         physEx = document.getElementById("task1PhysEx").value;
         urgency = document.getElementById("task1Urgency").value;
         var task1 = new Task(name, intervalDuration, difficulty, interest, physEx, urgency);
         tasks.push(task1);
      }else if (i==2){
         name = document.getElementById("task2Name").value;
         duration = parseInt(document.getElementById("task2Duration").value);
         intervalDuration = numIntervals(0, duration, "AM");
         difficulty = document.getElementById("task2Difficulty").value;
         interest = document.getElementById("task2Interest").value;
         physEx = document.getElementById("task2PhysEx").value;
         urgency = document.getElementById("task2Urgency").value;
         var task2 = new Task(name, intervalDuration, difficulty, interest, physEx, urgency);
         tasks.push(task2);
      }else if (i==3){
         name = document.getElementById("task3Name").value;
         duration = parseInt(document.getElementById("task3Duration").value);
         intervalDuration = numIntervals(0, duration, "AM");
         difficulty = document.getElementById("task3Difficulty").value;
         interest = document.getElementById("task3Interest").value;
         physEx = document.getElementById("task3PhysEx").value;
         urgency = document.getElementById("task3Urgency").value;
         var task3 = new Task(name, intervalDuration, difficulty, interest, physEx, urgency);
         tasks.push(task3);
      }else if (i==4){
         name = document.getElementById("task4Name").value;
         duration = parseInt(document.getElementById("task4Duration").value);
         intervalDuration = numIntervals(0, duration, "AM");
         difficulty = document.getElementById("task4Difficulty").value;
         interest = document.getElementById("task4Interest").value;
         physEx = document.getElementById("task4PhysEx").value;
         urgency = document.getElementById("task4Urgency").value;
         var task4 = new Task(name, intervalDuration, difficulty, interest, physEx, urgency);
         tasks.push(task4);
      }else if (i==5){
         name = document.getElementById("task5Name").value;
         duration = parseInt(document.getElementById("task5Duration").value);
         intervalDuration = numIntervals(0, duration, "AM");
         difficulty = document.getElementById("task5Difficulty").value;
         interest = document.getElementById("task5Interest").value;
         physEx = document.getElementById("task5PhysEx").value;
         urgency = document.getElementById("task5Urgency").value;
         var task5 = new Task(name, intervalDuration, difficulty, interest, physEx, urgency);
         tasks.push(task5);
      }else if (i==6){
         name = document.getElementById("task6Name").value;
         duration = parseInt(document.getElementById("task6Duration").value);
         intervalDuration = numIntervals(0, duration, "AM");
         difficulty = document.getElementById("task6Difficulty").value;
         interest = document.getElementById("task6Interest").value;
         physEx = document.getElementById("task6PhysEx").value;
         urgency = document.getElementById("task6Urgency").value;
         var task6 = new Task(name, intervalDuration, difficulty, interest, physEx, urgency);
         tasks.push(task6);
      }else if (i==7){
         name = document.getElementById("task7Name").value;
         duration = parseInt(document.getElementById("task7Duration").value);
         intervalDuration = numIntervals(0, duration, "AM");
         difficulty = document.getElementById("task7Difficulty").value;
         interest = document.getElementById("task7Interest").value;
         physEx = document.getElementById("task7PhysEx").value;
         urgency = document.getElementById("task7Urgency").value;
         var task7 = new Task(name, intervalDuration, difficulty, interest, physEx, urgency);
         tasks.push(task7);
      }else if (i==8){
         name = document.getElementById("task8Name").value;
         duration = parseInt(document.getElementById("task8Duration").value);
         intervalDuration = numIntervals(0, duration, "AM");
         difficulty = document.getElementById("task8Difficulty").value;
         interest = document.getElementById("task8Interest").value;
         physEx = document.getElementById("task8PhysEx").value;
         urgency = document.getElementById("task8Urgency").value;
         var task8 = new Task(name, intervalDuration, difficulty, interest, physEx, urgency);
         tasks.push(task8);
      }else if (i==9){
         name = document.getElementById("task9Name").value;
         duration = parseInt(document.getElementById("task9Duration").value);
         intervalDuration = numIntervals(0, duration, "AM");
         difficulty = document.getElementById("task9Difficulty").value;
         interest = document.getElementById("task9Interest").value;
         physEx = document.getElementById("task9PhysEx").value;
         urgency = document.getElementById("task9Urgency").value;
         var task9 = new Task(name, intervalDuration, difficulty, interest, physEx, urgency);
         tasks.push(task9);
      }else if (i==10){
         name = document.getElementById("task10Name").value;
         duration = parseInt(document.getElementById("task10Duration").value);
         intervalDuration = numIntervals(0, duration, "AM");
         difficulty = document.getElementById("task10Difficulty").value;
         interest = document.getElementById("task10Interest").value;
         physEx = document.getElementById("task10PhysEx").value;
         urgency = document.getElementById("task10Urgency").value;
         var task10 = new Task(name, intervalDuration, difficulty, interest, physEx, urgency);
         tasks.push(task10);
      }
   }
}

//(response 2C: events[] and tasks[] arrays are declared before tasksToEvents() function)
function tasksToEvents() {
   var tasks1 = [];
   var tasks2 = [];
   var tasks3 = [];
   var freeTime;
   
   //sepparate tasks into separate arrays depending on the urgency  
   tasks.forEach(function(task){
      if (task.urgency == 3) {
         tasks3.push(task);
      } else if (task.urgency == 2) {
         tasks2.push(task); 
      } else {
         tasks1.push(task);
      }
   });
   //sort each array of tasks into decreasing difficulty (sort statement found online and modified to work with task arrays)
   tasks1.sort(function(a, b){return a.difficulty - b.difficulty});
   tasks2.sort(function(a, b){return a.difficulty - b.difficulty});
   tasks3.sort(function(a, b){return a.difficulty - b.difficulty});
   
   //combine task arrays backinto single sorted array
   tasks = tasks3.concat(tasks2, tasks1);

   //loop through all events
   for (var i = 0; i < events.length - 1; i++){
      var k = i + 1;
      //loops through all tasks (in sorted order of decreasing urgency and difficulty) 
      tasks.forEach(function(task, index){
         freeTime = (events[k].startInterval - events[i].endInterval - 2); //2 extra intervals give 5 minutes buffer on each side of tasks
         //sets time for any tasks that fit within the free time between scheduled events 
         if (task.duration < freeTime) {
            tasks[index].startInterval = (events[i].endInterval + 1);
            tasks[index].endInterval = tasks[index].startInterval + tasks[index].duration;
            events.splice(k, 0, task); //adds tasks with scheduled time to the events array
            delete tasks[index]; //deletes added tasks from the tasks array so they won't be recounted
         }
      });
   }
}

//finds number of 5 min intervals in time period 
function numIntervals(hour, minute, pm){
   var newHour = twentyFour(hour, pm);
   var intervals = (newHour * 12) + (minute / 5);
   return intervals;
}

//converts 12-hour time into 24-hour time
function twentyFour(hour, pm){
   if(pm == "PM" || pm == "pm"){
      hour+=12;
   }
      return hour;
}

//checks if 24-hour time is AM or PM
function amPm(hour){
   if (hour > 12){
      return "PM";
   }else{
      return "AM";
   }
}

//converts 24-hour time into 12-hour time
function twelve(hour){
   if (hour > 12){
      hour-=12;
   }
   return hour;
}

//prints events
function printEvents(){
   var printString = "";
   //timeSort();
   events.forEach(function(event, index) {
      printString = printString.concat(events[index].print());
   });
   document.getElementById("output").innerHTML = printString;
}

//sort function found online
function timeSort(){
   events.sort(function(a, b){return a.startInterval - b.startInterval});
}

class Event{
   constructor(name, duration, startInterval){
      this.name = name;
      this.duration = duration;
      this.startInterval = startInterval
      this.endInterval = startInterval + duration;
   }

   intervalToTime(interval){
      var hour = twelve(parseInt(interval / 12));
      var minute = (interval % 12) * 5;
      if (minute < 10){
         minute =  minute.toString() + "0";
      }
      return hour + ":" + minute + " ";
   }

   print() {
      var startTime = this.intervalToTime(this.startInterval)
      return "(" + startTime + " - " + this.name + "), ";
   }
}

class Task extends Event{
   constructor(name, duration, difficulty, interest, physEx, urgency){
      super(name, duration, -1);
      this.difficulty = (interest - difficulty - physEx);
      this.urgency = urgency;
      this.endInterval = -1;
   }
}
