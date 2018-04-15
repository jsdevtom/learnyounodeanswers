const filterFilesByExtension = require('./filter-files-by-extension')

test('returns a list of strings', () => {
  filterFilesByExtension('.', 'js', (err, data) => {
    expect(data).toEqual()
  })
})
