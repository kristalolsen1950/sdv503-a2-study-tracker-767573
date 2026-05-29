// Store sessions
const sessions = [];

// Validate topic
function isValidTopic(topic) {
  const trimmed = topic.trim();
  return trimmed.length > 0;
}

// Validate minutes
function isValidMinutes(minutesInput) {
  const minutes = Number(minutesInput);
  if (Number.isNaN(minutes)) return false;
  if (!Number.isInteger(minutes)) return false;
  if (minutes <= 0) return false;
  return true;
}

// Validate priority
function isValidPriority(priority) {
  if (!priority) return false;
  const p = priority.trim().toLowerCase();
  return p === "high" || p === "medium" || p === "low";
}

// Add a study session
function addSession(topic, minutesInput, priorityInput) {
  if (!isValidTopic(topic)) {
    console.log("Error: Topic cannot be empty or just spaces.");
    return;
  }

  if (!isValidMinutes(minutesInput)) {
    console.log("Error: Minutes must be a whole number greater than zero.");
    return;
  }

  if (!isValidPriority(priorityInput)) {
    console.log("Error: Priority must be High, Medium, or Low.");
    return;
  }

  const session = {
    topic: topic.trim(),
    minutes: Number(minutesInput),
    priority: priorityInput.toLowerCase(),
  };

  sessions.push(session);
  console.log("Study session saved.");
}

// Calculate total minutes
function getTotalMinutes() {
  const total = sessions.reduce((sum, session) => sum + session.minutes, 0);
  console.log(`Total minutes studied: ${total}`);
  return total;
}

// Readline setup
import readline from "node:readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Menu display
function showMenu() {
  console.clear();
  console.log("Study Tracker");
  console.log("1. Add a study session");
  console.log("2. List all sessions");
  console.log("3. View total minutes");
  console.log("4. Exit\n");
}

// Main menu loop
function mainMenu() {
  showMenu();
  rl.question("Choose an option: ", answer => {
    if (answer === "1") {
      rl.question("Topic: ", topic => {
        rl.question("Minutes: ", minutes => {
          rl.question("Priority (High/Medium/Low): ", priority => {
            addSession(topic, minutes, priority);
            mainMenu();
          });
        });
      });
    } else if (answer === "2") {
      console.log(sessions);
      rl.question("\nPress Enter to return to menu", () => mainMenu());
    } else if (answer === "3") {
      getTotalMinutes();
      rl.question("\nPress Enter to return to menu", () => mainMenu());
    } else if (answer === "4") {
      console.log("Goodbye");
      rl.close();
    } else {
      console.log("Invalid option");
      mainMenu();
    }
  });
}

// Start program
mainMenu();
