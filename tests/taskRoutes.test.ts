import request from "supertest";
import app from "../src/app";

describe("Task Routes", () => {
  it("should return 201 when creating a task", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ title: "Nova Task" });
    expect(res.status).toBe(201);
    expect(res.body.title).toBe("Nova Task");
  });
});
