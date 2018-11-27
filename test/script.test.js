const googleSearch = require('./script')

dbMock = [
    'dog.com',
    'cheespuff.com',
    'disney.com',
    'dogpictures.com'
]

it('this is a silly test', ()=> {
    expect('hello').toBe('hello')
    // googleSearch('testtest', dbMock)
})

it('is searching google', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([])
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com','dogpictures.com'])
})