const fs = require("fs");

module.exports = {
    skipFiles:["IOSWAP_HybridRouter2.sol"],
    onCompileComplete: 
        function(){
            let sources = [
                "AuditInfo",
                "AuditorInfo",
                "Authorization",
                "DomainInfo",
                "ModuleInfo",
                "ProjectInfo",
                "RouterVaultWrapper",
                "Scom",
                "Vault",
                "NodeNFT",
                "NFTManager"
            ];
            for (let i = 0 ; i < sources.length ; i++) {
                console.log("overwriting " + sources[i]);
                let newByteCode = JSON.parse(fs.readFileSync(`artifacts/contracts/${sources[i]}.sol/${sources[i]}.json`, "utf-8")).bytecode;

                let bin = fs.readFileSync(`../src/contracts/${sources[i]}.json.ts`, "utf-8")
                bin = bin.replace(/"bytecode":"[0-9a-f]*"/,`"bytecode":"${newByteCode.substring(2)}"`);
                fs.writeFileSync(`../src/contracts/${sources[i]}.json.ts`, bin, "utf-8");

                bin = fs.readFileSync(`../lib/contracts/${sources[i]}.json.js`, "utf-8")
                bin = bin.replace(/"bytecode":[ ]?"[0-9a-f]*"/,`"bytecode":"${newByteCode.substring(2)}"`);
                fs.writeFileSync(`../lib/contracts/${sources[i]}.json.js`, bin, "utf-8");
            }
        }
};