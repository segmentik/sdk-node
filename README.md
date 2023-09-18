# Segmentik SDK for Node.js

---

### Authentication 

`POST https://api.segmentik.com/auth/token`

Body:

```json
{
  "secretKey": "YOU_SECRET_KEY"
}
```
Response will include a token valid for 4 hours.


### Get Session

`GET https://api.segmentik.com/session/:id`

Headers: `Authorizaton=[TOKEN]`

The response should look like:
```json
{
    "processed": true,
    "time": "2023-09-18T17:52:26.452Z",
    "tags": {},
    "visitor": {
        "id": "6RhEqH5k9o5j",
        "confidence": 100
    },
    "duration": 318572,
    "risk": 0
}
```


You can also pass `?extended=true` query string parameter to get the full object:
```json
{
  "processed": true,
  "time": "2023-09-18T17:52:26.452Z",
  "tags": {},
  "visitor": {
    "id": "6RhEqH5k9o5j",
    "confidence": 100
  },
  "duration": 318572,
  "risk": 0,
  "detections": {
    "ip": {
      "risk": 0,
      "proxy": false,
      "type": "Residential",
      "country": "IL",
      "region": "Central District",
      "address": "255.255.255.255"
    },
    "automationTool": {
      "detected": false
    },
    "spoofing": {
      "detected": false
    },
    "behavior": {
      "risk": 0
    }
  },
  "browserSettings": {
    "incognito": false,
    "cookies": true
  },
  "page": "http://segmentik.com",
  "screen": {
    "size": [
      1512,
      982
    ],
    "viewport": [
      1512,
      492
    ]
  },
  "sdkVersion": "0.0.45",
  "device": {
    "browser": {
      "name": "Chrome",
      "version": "116.0.0.0"
    },
    "os": {
      "name": "Mac OS",
      "version": "10.15.7"
    },
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
  }
}
```

