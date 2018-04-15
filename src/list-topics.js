import http from "./http";

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

export default async function listTopics({
  forum,
  forumType = FORUM_TYPE.Forum,
  topicType = TOPIC_TYPE.All_Except_Sell,
  currentPage = 0,
  lastTopicId = 0,
  thumbnailView = false
} = {}) {
  const defaultType = topicType === TOPIC_TYPE.All_Except_Sell ? 1 : 0
  let url = 0
  if (forumType === FORUM_TYPE.Tag) {
    url = "/forum/topic/ajax_json_all_topic_tag";
  } else if (forumType == FORUM_TYPE.Forum) {
    url = "/forum/topic/ajax_json_all_topic_info_loadmore";
  }
const body = {
  [`dataSend[${forumType}]`]: forum,
  "dataSend[topic_type][type]": topicType,
  "dataSend[topic_type][default_type]": defaultType,
  "thumbnailview": thumbnailView,
  "current_page": currentPage+1,
  "last_id_current_page": lastTopicId,
}
  const resp = await http.post(url, body)
  return resp
}
