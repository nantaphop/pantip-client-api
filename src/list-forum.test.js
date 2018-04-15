const {expect} = require('chai')
const listForum = require('./list-forum')

describe('list forum', () => {
    it('should able to list all forum ', async () => {
        const forums = await listForum()
        expect(forums).to.have.length.gt(10)
    })
})