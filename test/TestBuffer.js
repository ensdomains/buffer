
const TestBuffer = artifacts.require("TestBuffer");

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
});
