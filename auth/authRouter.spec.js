const request = require('supertest');
const server = require('../api/server');
const db = require('../database/dbconfig');
const Owners = require('../owners/owners-model');

describe('ownersModel & authRouter', function() {
	beforeEach(async () => {
		await db('owners').truncate();
	});
	describe('/api/auth/register', function() {
		it('should register two new owners', async function() {
			await Owners.add({ username: 'test', password: '123' });
			await Owners.add({ username: 'test2', password: '456' });
			const owners = await db('owners');

			expect(owners).toHaveLength(2);
		});

		it('should retrun a 201 Created', function() {
			return request(server)
				.post('/api/auth/register')
				.send({
					username: 'test',
					password: 'test'
				})
				.then((res) => {
					expect(res.status).toBe(201);
				});
		});
	});

	describe('/api/auth/login', function() {
		it('should return status code 200 when registering', function() {
			return request(server)
				.post('/api/auth/register')
				.send({ username: 'new owner', password: 'password' })
				.then(() => {
					return request(server)
						.post('/api/auth/login')
						.send({ username: 'new owner', password: 'password' })
						.then((response) => {
							expect(response.status).toBe(200);
						});
				});
		});
		it('should return a token', function() {
			return request(server)
				.post('/api/auth/login')
				.send({ username: 'new owner', password: 'password' })
				.then((response) => {
					expect(response.body.token);
				});
		});
	});
});