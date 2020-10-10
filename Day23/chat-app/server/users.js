const users = [];

const addUser = ({ id, name, room }) => {
    const cleanName = name.trim().toLowerCase();
    const cleanRoom = room.trim().toLowerCase();

    const existingUser = users.find(user => user.name === cleanName && user.room === cleanRoom);
    if (existingUser) {
        return { error: "Username is already taken" };
    }

    const user = { id, name: cleanName, room: cleanRoom };
    users.push(user);

    return { user };
};

const removeUser = (id) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
};

const getUser = (id) => {
    return users.find(user => user.id === id);
};

const getUsersInRoom = (room) => {
    return users.find(user => user.room === room);
};

module.exports = {
    addUser, removeUser, getUser, getUsersInRoom
};

