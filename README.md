# discord-status
Scrape Yahoo News XML

### Usage
### Example
```ts
import { yahooNews } from "./dist/index";

(async() => {
    const result = await yahooNews.get("it");
    if (result.status === "error") {
        return console.error(result.message);
    } else {
        console.log(result)
    }
})();
```

### Result
```
{
  "status": "success",
  "resData": [
    {
      "title": "タイトル1",
      "link": "https://example.com/link1",
      "pubDate": "Fri, 14 Mar 2025 09:35:13 GMT",
      "image": "https://example.com/image1.jpg",
      "comments": "https://example.com/comments1",
      "description": "内容1の詳細が書かれた部分。"
    },
    {
      "title": "タイトル2",
      "link": "https://example.com/link2",
      "pubDate": "Fri, 14 Mar 2025 09:30:11 GMT",
      "image": "https://example.com/image2.jpg",
      "comments": "https://example.com/comments2",
      "description": "内容2の詳細が書かれた部分。"
    }
  ]
}
```
