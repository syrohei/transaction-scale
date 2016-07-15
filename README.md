
# Getting started

please use nodeJS v6.0.0~ 

```
npm install -g 
```
```
testrpc -b 1
```
or

```
geth --unlock 0 --password "path/to/password/file" --mine --datadir ../data --networkid 123456 --nodiscover --maxpeers 0 --rpc --rpcapi eth,net,web3,personal,admin,miner --minerthreads 1 --rpccorsdomain "*" console  
```
```
truffle test
```
