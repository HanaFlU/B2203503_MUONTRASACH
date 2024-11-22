const app = require("./app");
const config = require("./app/config");
const mongoose = require("mongoose");

//start server
async function startServer() {
    try {
        await mongoose.connect(config.db.uri);
        console.log("connected to the database!");

        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log("Cannot connect to the database!", error);
        process.exit();
    }
}

startServer();