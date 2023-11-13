import { EIpType } from './ip-type.enum';

export interface ISession {
	processed: boolean;

	visitor: {
		id: string,
		confidence: number
	};
	tags: { [key: string]: any } | null;
	time: Date;

	duration: number;
	risk: number;

	detections: {
		ip: {
			risk: number,
			proxy: boolean,
			type: EIpType,
			country: string,
			city: string,
			region: string,
			address: string,
			ISP: string,
			location: {
				lat: number,
				lon: number
			}
		},
		automationTools: {
			detected: boolean;
			details: string;
		},
		spoofing: {
			detected: boolean;
		},
		behavior: {
			risk: number;
		}
	};

	browserSettings: {
		incognito: boolean;
		cookies: boolean;
	};
	sessions: number;
	page: string;
	screen: any;
	sdkVersion: string;
	device: {
		browser: {
			name: string;
			version: string;
		};
		os: {
			name: string;
			version: string;
		};
		userAgent: string;
	}
}
