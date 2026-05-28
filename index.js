// Check the topic is not empty or just spaces
const sessions = []; //stores  { topic, minutes, priority? }
// Trim removes spaces from the start and end
function isValidTopic(topic) {
    const trimmed = topic.trim();
    return trimmed.length > 0;

}
// Check that minutes is a whole number greater than zero
function isValidMinutes(minutesInput) {
    const minutes = Number(minutesInput);
  // Check it is a number, an integer, and greater than zero  
    if (Number.isNaN(minutes)) return false;
    if (!Number.isInterger(minutes)) return false;
    if (minutes <= 0) return false;
    return true;
}
// This function creates a session object and saves it in the sessions array
function addSession(topic, minutesInput, priorityInput) {
  if (!isValidTopic(topic)) {
    console.log('Error: Topic cannot be empty or just spaces.');
    return;
  }

  if (!isValidMinutes(minutesInput)) {
    console.log('Error: Minutes must be a whole number greater than zero.');
    return;
  }

  if (!isValidPriority(priorityInput)) {
    console.log('Error: Priority must be High, Medium, or Low.');
    return;
  }

  const session = {
    topic: topic.trim(),
    minutes: Number(minutesInput),
    priority: priorityInput.toLowerCase(),
  };

  sessions.push(session);
  console.log('Study session saved.');
}
import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// This function adds up the minutes from all saved sessions
function getTotalMinutes() {
  // Use reduce to sum all minutes in the sessions array
  const total = sessions.reduce((sum, session) => {
    return sum + session.minutes;
  }, 0);

  console.log(`Total minutes studied: ${total}`);
  return total;
}
