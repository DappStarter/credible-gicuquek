require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom nasty flip spot chat crater remain unfold gloom process front skate'; 
let testAccounts = [
"0x39cd3412f939f7cbc2e3c9d75dca97b0229fb33fbc812f56f0e8ba5643e6400f",
"0x9b25c330a52a36b5741ff8fa883fc78372475d7f68bff07416c3d87cbe06fae4",
"0x3690197054bb2cc8238c612bcb8c6b6c004e8917c55a810e3a23292ca48b31dd",
"0xa3a99e573a0d86c1a1206ca48e37fc4a89d163769a5258902572d1d3a7d701e9",
"0xb76ec8b27a3b5c45849a8a36561237ef14e5e30925e336d915fb7c4586ee18f8",
"0xade12e9283fceacff43161b6636490b92068b3b7587bd15620f55f5ea0e129ac",
"0x860361696e5f8ce47f12dd0ef1fdde6451edd5cfe7269cee825a2c34c2ab9639",
"0x51fe5b68816222e83618dfc32a991acec2fe28a8b20429cb5a1cda2ca7f6df5c",
"0x25235fb68e1d5603868484b7f84772e3dcfd8b684fecd7ca559bf632537856d6",
"0x72dafffd0de21085e4d59c179e372334ffdaf34fb0d3eb2a0518ab7790eec16e"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

