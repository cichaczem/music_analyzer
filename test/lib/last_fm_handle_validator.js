import expect from 'expect'

import validator from '../../src/lib/last_fm_handle_validator'

describe('LastFm handle validator', () => {
  it("handle can't be empty",() => {
    expect(validator.isValid(null)).toEqual(false)
  })

  it('handle should be at least 2 characters long',() => {
    const handle = "r"
    expect(validator.isValid(handle)).toEqual(false)
  })

  it('valid handle',() => {
    const handle = "rj"
    expect(validator.isValid(handle)).toEqual(true)
  })
})
