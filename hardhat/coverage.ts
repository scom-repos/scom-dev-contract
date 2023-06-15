const {JsonRpcServer} = require("hardhat/internal/hardhat-network/jsonrpc/server");
import * as hardhat from "hardhat";

describe('',()=>{
    before(async ()=>{
        console.log('creating http')
        const server = new JsonRpcServer({
            hostname: "0.0.0.0",
            port: 8545,
            provider: hardhat.network.provider
        });
        await server.listen();
    });
    it('',()=>{console.log('running');});
});

import "../test/audit.spec";
import "../test/auditor.spec";
import "../test/projectInfo.spec";
import "../test/test.spec";
import "../test/vault.spec";
import "../test/vault2.spec";
import "../test/vault3.spec";
