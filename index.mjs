const sessions = []; //stores  { topic, minutes, priority? }
function isValidTopic(topic) {
    const trimmed = topic.trim();
    return trimmed.length > 0;

}
function isValidMinutes(minutesInput) {
    const minutes = Number(minutesInput);
    if (Number.isNaN(minutes)) return false;
    if (!Number.isInterger(minutes)) return false;
    if (minutes <= 0) return false;
    return true;
}
function addSession(topic, minutesInput) {
    if (!isValidTopic(topic)) {
        console.log('Error: Topic cannot be empty or just spaces.');
        return;
}
if (!isValidMinutes(minutesInput)) {
    console.log('Error: Minutes must be a whole number greater than zero.');
    return;
}
const minutes = Number(minutesInput);
const session = {
    topic: topic.trim(),
    minutes: minutes,
};
sessions.push(session);
console.log('study sesseion saved.');
}
