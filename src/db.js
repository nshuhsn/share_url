import mongoose from "mongoose"

mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;
const handleOpen = () => console.log("๐ Connected to DB");
const handleError = (error) => console.log("โ DB Error", error)
// on์ ์ด๋ค์ผ์ด ์ผ์ด๋ ๋๋ง๋ค ์คํ once๋ ๋ฑ ํ๋ฒ
db.on("error", handleError)

db.once("open", handleOpen)