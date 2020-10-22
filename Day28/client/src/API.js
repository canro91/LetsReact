const API_URL = 'http://192.168.99.100:1337';

const listLogEntries = async () => {
    const response = await fetch(`${API_URL}/api/logs`);
    return response.json();
}

export { listLogEntries };