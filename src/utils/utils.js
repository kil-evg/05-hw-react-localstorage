export function isOlderThan30Days(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInDays = (now - date) / (24 * 60 * 60 * 1000);
    return diffInDays > 30;
  }