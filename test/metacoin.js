var uuid = require('node-uuid');

contract('MetaCoin', function(accounts) {
  it("should put 10000 MetaCoin in the first account", function(done) {
    var meta = MetaCoin.deployed();

    put(meta)

  })
});


var count = 0


function put(meta){
  const dats = String(Math.random().toString(36).slice(-12));
  const data = dats.concat(String(Math.random().toString(36).slice(-20)))
  const amount = Math.round(Math.random()*100)
  meta.register(String(data), Number(amount)).then(function(tx) {
    meta.balances(String(data)).then(function(balance) {
      count++ 
      console.log(tx,String(data), amount, balance.toNumber(), count)
      put(meta)
    })
  })
}
