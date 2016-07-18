# Transaction Storm Test for the EVM Contract  

we can sending many transactions for ethereum blockchain and evm contract anytimes. so we have to protect the Confirmation Availabilitys.
This test is a Storm Pushing Transactions with async method wth delay 0s~ available! 

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
