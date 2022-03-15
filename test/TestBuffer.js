const TestBuffer = artifacts.require("TestBuffer");
const truffleAssert = require('truffle-assertions');

contract('Buffer', function(accounts) {
  let instance;

  before(async () => {
    instance = await TestBuffer.new();
  });

  for(const a of TestBuffer.abi) {
    if(a.name.startsWith('test')) {
      it(a.name, async () => {
        await instance[a.name]();
      });
    }
  }

  it("should revert when calling checkBufferInitOverflow", async () => {
    await truffleAssert.reverts(
        instance["checkBufferInitOverflow"](),
        "Returned error: VM Exception while processing transaction: revert"
    );
  });
});
