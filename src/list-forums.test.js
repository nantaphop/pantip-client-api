import {expect} from 'chai'
import listForums from './list-forums'

describe('list forum', () => {
    it('should able to list all forum ', async () => {
        const forums = await listForums()
        expect(forums).to.have.length.gt(10)
    })
})