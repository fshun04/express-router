const request = require("supertest");
const app = require("./src/app");

describe("/users", () => {
    test("get /users", async () => {
        const response = await request(app).get("/users");
        expect(response.body.id).toEqual(1);
        expect(response.body.id).toEqual(1)
        expect(response.body.id).toEqual(1)

    });
    test("get /users/id", async () => {
        const response = await request(app).get("/users/1");
        expect(response.body).toEqual({
            "id": 1,
            "name": "User 1",
            "age": 30,
            "createdAt": "2023-08-10T14:54:49.078Z",
            "updatedAt": "2023-08-10T14:54:49.078Z"
          })
    });
    test("post /users", async () => {
        const response = await request(app).post("/users");
        expect(response.body.id).toEqual(5);
    });
    test("put /users/id", async () => {
        const response = await request(app).put("/users/1");
        expect(response.body).toEqual(
           
        );
    });
    test("delete /users/id", async () => {
        const response = await request(app).delete("/users/5");
        expect(response.body).toEqual({
            "id": 5,
            "updatedAt": "2023-08-10T14:57:41.726Z",
            "createdAt": "2023-08-10T14:57:41.726Z"
        });
    });
});