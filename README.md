# Segmentik SDK for Node.js
This library is for backend use only. Make sure you have a `secretKey`:
1. [Register](https://dashboard.segmentik.com) and login to the dashboard
2. Navigate on the sidebar to "Secret Keys"

## Getting started
```shell
npm i @segmentik/sdk-node
```

### Usage:
```javascript
import { SegmentikNodeSDK } from '@segmentik/sdk-node';

const client = new SegmentikNodeSDK({
  secretKey: 'YOUR_SECRET_KEY'
});
```

---

## API:

### getDetectionResult()
Responds with a full detection result by `detectionId`.
```javascript
const result = await client.getDetectionResult(detectionId);
```
#### Arguments
`detectionId`: string

#### Returns
A full detection result:
```json
{
  "time": "2023-11-13T13:55:18.149Z",
  "visitor": {
    "id":  "KUBE8O1qUhWSaOjkW3",
    "confidence":  100
  },
  "bot": {
    "result": "notDetected"
  },
  "incognito": false,
  "ip": {
    "proxy": false,
    "type": "Business",
    "country": "US",
    "region": "California",
    "city": "Mountain View",
    "location": {
      "lat": 37.422,
      "lon": -122.084
    },
    "ISP": "Partner Communications Ltd.",
    "address": "66.249.73.12"
  },
  "automationTool": {
    "detected": false
  },
  "spoofing": {
    "detected": false
  },
  "behavior": {
    "score": 0
  },
  "duration": 0,
  "page": "https://domain.com/page1.html",
  "sdkVersion": "0.1.6",
  "device": {
    "browser": {
      "name": "Chrome",
      "version": "119.0.0.0"
    },
    "os": {
      "name": "Mac OS",
      "version": "10.15.7"
    },
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
  }
}
```
