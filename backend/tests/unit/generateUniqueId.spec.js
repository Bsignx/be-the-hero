const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique Id', () => {
    it('should generatean unique ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});