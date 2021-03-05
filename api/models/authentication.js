//Parte da BD

const {
    default: fetch
} = require("node-fetch");


module.exports = {
    getIcon: async (req) => {
        let name = req.userName;
        return fetch(`https://avatars.dicebear.com/4.5/api/initials/${name}.svg`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.text())
            .then(icon => icon);
    },
};