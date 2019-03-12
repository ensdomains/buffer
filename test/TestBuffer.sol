pragma solidity >0.4.18;

import "truffle/Assert.sol";
import "./../contracts/Buffer.sol";

contract TestBuffer {
    using Buffer for Buffer.buffer;

    function testBufferAppend() public {
        Buffer.buffer memory buf;
        buf.init(256);
        buf.append("Hello");
        buf.append(", ");
        buf.append("world!");
        Assert.equal(string(buf.buf), "Hello, world!", "Unexpected buffer contents.");
    }

    function testBufferAppendUint8() public {
        Buffer.buffer memory buf;
        Buffer.init(buf, 256);
        buf.append("Hello,");
        buf.appendUint8(0x20);
        buf.append("world!");
        Assert.equal(string(buf.buf), "Hello, world!", "Unexpected buffer contents.");
    }
}
