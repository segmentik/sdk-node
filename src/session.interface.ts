import { ITag } from './tag.interface';
import { EIpType } from './ip-type.enum';

export interface ISession {
	processed: boolean;

	visitor: {
		id: string,
		confidence: number
	};
	tags: ITag[];
	time: Date;

	duration: number;
	risk: number;

	detections: {
		ip: {
			risk: number,
			proxy: boolean,
			type: EIpType,
			country: string,
			region: string,
			address: string
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
