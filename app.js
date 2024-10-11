const express = require("express");
const cors = require("cors");
const path = require("path");
const static = require("serve-static");
const multer = require("multer");
const { connectToDatabase } = require("./database");
const userRoutes = require("./userRoutes");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", static(path.join(__dirname, "public")));

// multer 설정 (FormData 처리를 위해)
const upload = multer();
app.use(upload.none());

// 데이터베이스 연결
connectToDatabase();

// 메인 페이지 라우트
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 사용자 라우트
app.use("/users", userRoutes);

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// 프로세스 종료 시 처리
process.on("SIGINT", () => {
  console.log("Shutting down server...");
  process.exit(0);
});
