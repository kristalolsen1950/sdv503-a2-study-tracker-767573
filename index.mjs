const sessions = []; //stores  { topic, minutes, priority? }
function isValidTopic(topic) {
    const trimmed = topic.trim();
    return trimmed.length > 0;

}
function isValidMinutes(minutesInput) {
    const minutes = Number(minutesInput);
    if (Number.isNaN(minutes)) return false;
    if (!Number.isInterger(minutes)) return false:
    if (minutes <= 0) return false;
    return true;
}
