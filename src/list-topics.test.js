import {expect} from 'chai'
import listTopics, {FORUM_TYPE, TOPIC_TYPE} from './list-topics'

describe('list topics', () => {
    it('should able to list first page topics ', async () => {
        const topics = await listTopics({forum: 'wahkor'})
        expect(topics).to.have.property('item')
    })
    it('should able to list next pages ', async () => {
        const topics = await listTopics({forum: 'wahkor', currentPage: 1, lastTopicId: 37563262})
        expect(topics).to.have.property('item')
    })
})