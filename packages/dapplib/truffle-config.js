require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remain mistake hidden arena fog stove'; 
let testAccounts = [
"0x7a287afc3dd4a59487a82d5ebbed2251b3aaa03bd3a321450b261eec6681693a",
"0x748844b79cc9a1fc416e00e87348a95b6985aa9f95acb6dee1688a7a2973247a",
"0xc17fd7dce629948f625faa5b6c90ce5152555f4f29553014de439ca5a7e175d5",
"0x2be9dbb468705a5ec2cd36c3db937c863058ebb3182d8a8b9847c0a84f69dbe2",
"0x1afbdb7b5f1e65a5050f0331375a067be33d40bec0e88b05255312ada248caef",
"0x00515a7e52fa698dde9c9300783df9b7da246221bae7eb974253c8f164248189",
"0x407b055dc1ac4797a9e1fa23a151862799f0513c0856568683b5c663205a28fc",
"0xaf8b7ae14b9eaab6ffa69cc935fd23a8a0c2f66851c6efde4399f188a5b05e1f",
"0xbe0489a577099f0cb43e4323db38a21686d75a7e64669450fea0a4bbd5ac3edf",
"0xe18a7336fe5102677d5755dd3acd3cd435864310ffd7eab476b821a1c814c6a3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

