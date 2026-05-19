import mongoose from "mongoose";
import { DATABASE_URL } from "./env";
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"])
const connect = async () => {
    try {
        await mongoose.connect(DATABASE_URL, {
            dbName: "db-acara",
        });
        return Promise.resolve("Database connected!");
    } catch (error) {
        return Promise.reject(error);
    }
};

export default connect;