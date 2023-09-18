import fetch from 'node-fetch';
import { ISession } from './session.interface';

const API_ENDPOINT = 'https://api.segmentik.com';

export class SegmentikNodeSDK {

	token: string | null = null;
	secretKey: string;

	constructor(secretKey: string) {
		this.secretKey = secretKey;
	}

	async getSession(sessionId: string): Promise<ISession> {
		if (!this.token) {
			this.token = await authenticate(this.secretKey);
		}
		const response = await fetch(API_ENDPOINT + '/session/' + sessionId, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: this.token
			}
		});
		if (response.status === 401) {
			this.token = await authenticate(this.secretKey);
			return this.getSession(sessionId);
		}
		return response.json();
	}
}

async function authenticate(secretKey: string): Promise<string> {
	const response = await fetch(API_ENDPOINT + '/auth/token', {
		method: 'post',
		body: JSON.stringify({
			secretKey: secretKey
		})
	});
	const body = await response.text();
	if (response.status !== 200) {
		throw new Error(body);
	}
	return body;
}

// const client = new SegmentikNodeSDK('Secret');
// await client.getSession('session');
