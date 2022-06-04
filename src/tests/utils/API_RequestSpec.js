const API_request = require('../../utils/API_Request');

describe('API_Request Function', () => {
    it('should return an object', async () => {
        const data = await API_request();
        expect(data).toBeInstanceOf(Object);
    });

    it('should return an object with the correct keys', async () => {
        const data = await API_request();
        expect(Object.keys(data)).toContain('base');
        expect(Object.keys(data)).toContain('date');
        expect(Object.keys(data)).toContain('rates');
    });
});
