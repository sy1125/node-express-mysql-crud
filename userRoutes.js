const express = require("express");
const router = express.Router();
const userController = require("./userController");

// CREATE - 새 사용자 생성
router.post("/", userController.createUser);

// READ - 모든 사용자 조회
router.get("/", userController.getAllUsers);

// READ - 특정 사용자 조회
router.get("/:id", userController.getUserById);

// UPDATE - 사용자 정보 수정
router.patch("/:id", userController.updateUser);

// DELETE - 사용자 삭제
router.delete("/:id", userController.deleteUser);

module.exports = router;
