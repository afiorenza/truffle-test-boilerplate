const contract = artifacts.require('contract')

contract('contract', addresses => {
  const owner = addresses[0]
  const buyer = "0x44751576B07eeE07de3D8D5BFb9C8Dd77ADD1745"
  const seller = "0x44751576B07eeE07de3D8D5BFb9C8Dd77ADD1746"
  const operator = "0x44751576B07eeE07de3D8D5BFb9C8Dd77ADD1747"
  const fakeOperator = "0x44751576B07eeE07de3D8D5BFb9C8Dd77ADD1748"
  before(async () => {
    instance = await contract.new({ from: owner })
  })


  describe('', () => {
    it('', async () => {
      try {
        
      }
      catch(error) {
      }
    })
  })
})
