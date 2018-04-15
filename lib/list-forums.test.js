'use strict';

var _listForums = require('./list-forums');

var _listForums2 = _interopRequireDefault(_listForums);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('chai'),
    expect = _require.expect;

describe('list forum', function () {
    it('should able to list all forum ', async function () {
        var forums = await (0, _listForums2.default)();
        expect(forums).to.have.length.gt(10);
    });
});