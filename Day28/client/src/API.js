const API_URL = 'http://192.168.99.100:1337';

const listLogEntries = async () => {
    const response = await fetch(`${API_URL}/api/logs`);
    return response.json();
}

const createLogEntry = async (logEntry) => {
    const response = await fetch(`${API_URL}/api/logs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(logEntry)
    });
    return response.json();
}

export { listLogEntries, createLogEntry };