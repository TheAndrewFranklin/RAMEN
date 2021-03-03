import request from 'supertest';
import ramen from '../../src';

describe('testing the error handler', () => {
  afterAll(async () => {
    await ramen.db.disconnect();
    ramen.server.close();
  });

  it("GET '/' should return welcome", async () => {
    const response = await request(ramen.server).get('/');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual('Welcome');
  });

  it("GET '/crazy_route' should return 404", async () => {
    const response = await request(ramen.server).get('/crazy_route');
    expect(response.status).toEqual(404);
  });
});
