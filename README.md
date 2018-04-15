## API

### List all forums
```
listForums()
```

#### Response

```
[
    { title: 'ก้นครัว', href: '/forum/food' },
    { title: 'กรุงโซล', href: '/forum/korea' },
    ...
    { title: 'หว้ากอ', href: '/forum/wahkor' },
    { title: 'หอศิลป์', href: '/forum/art' }
]
```
### List Topic in forum or tag
```
listTopics({
  forum,
  forumType = FORUM_TYPE.Forum,
  topicType = TOPIC_TYPE.All_Except_Sell,
  currentPage = 0,
  lastTopicId = 0,
  thumbnailView = false
} = {})
```
also export type constant
```
export const FORUM_TYPE = {
  Forum: 'room',
  Tag: 'tag',
}
export const TOPIC_TYPE = {
  All_Except_Sell: 0,
  Chat: 1,
  Poll: 2,
  Question: 3,
  Review: 4,
  News: 5,
  Sell: 6,
}
```
#### Example
```
// List first page topics in 'wahkor'
listTopics({forum: 'wahkor'}
// List second page of 'wahkor'
listTopics({forum: 'wahkor', currentPage: 1, lastTopicId: 37563262})
```
#### Response
```
{
    last_id_current_page: 37563262 // Use this value to get next page
    logged_in: false
    more: "Y" // Has more page
    related : [{name: "อาวุธยุทโธปกรณ์", url: "อาวุธยุทโธปกรณ์"}, {name: "หน้าต่างโลก", url: "หน้าต่างโลก"},…]
    tagIn:[]
    tagOut:[]
    topic: […] // Array of topic as example below
}

/// Example Topic Object
{
  "cover_img": "",
  "_id": 37564898,
  "disp_topic":
    "สงสัยครับ ทำไมจอดมอเตอร์ไซค์1-2วัน สตาร์ทง่าย แต่พอจอดเกิน 2 วันขึ้นไปสตาร์ทยาก",
  "comments": 0,
  "votes": 0,
  "utime": "04/15/2018 14:11:19",
  "topic_type": 3,
  "topic_class_icon": "icon-mini-posttype icon-mini-posttype-que grayscale",
  "abbr_title": "15 เมษายน 2561 เวลา  14:11:19 น.",
  "author": "voice from hell",
  "tags": [
    { "tag": "มอเตอร์ไซค์", "url": "มอเตอร์ไซค์", "allow": false },
    { "tag": "วิทยาศาสตร์", "url": "วิทยาศาสตร์", "allow": false },
    { "tag": "วิศวกรรมศาสตร์", "url": "วิศวกรรมศาสตร์", "allow": false }
  ]
}

```