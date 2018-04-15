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
  currentPage = 1,
  lastTopicId = 0,
  thumbnailView = false
} = {})
```
#### Example
```
// List first page topics in 'wahkor'
listTopics({forum: 'wahkor'}
// List second page of 'wahkor'
listTopics({forum: 'wahkor', currentPage: 1, lastTopicId: 37563262})
```