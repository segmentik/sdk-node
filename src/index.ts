import fetch from 'node-fetch';
import { ISession } from './session.interface';
import { Errors } from './errors';
import { API_ENDPOINT } from './endpoint';

export class SegmentikNodeSDK {

	private secretKey: string;

	constructor(config: { secretKey: string }) {
		this.secretKey = config.secretKey;
	}

	async getDetectionResult(detectionId: string): Promise<ISession> {
		const response = await fetch(
			API_ENDPOINT + `/detection/${detectionId}?secretKey=${this.secretKey}`,
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		if (response.status === 401) {
			throw Errors.Unauthorized();
		}
		return response.json();
	}
}
