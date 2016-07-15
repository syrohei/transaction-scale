
const value = 1200

contract('MetaCoin', function(accounts) {
  it("should put 10000 MetaCoin in the first account", function(done) {

    this.timeout(120000000);
    const  meta = MetaCoin.deployed();

    const  array = createArray(value) 
    const  mined = new Array(0) 
    const  back = new Array(0) 

    const length = array.length
    /*
    sync(meta, function(count){
      console.log(count, error)
    })
    */
    async(array, 0, mined, back, meta, function(resend){
      if (!resend.length)
        done()

      console.log(`first step error count is ${Number(resend.length)}`)
      console.log(`second step is started...`)
      async(resend, 0, [],[], meta, function(resend){
        if (!resend.length)
          done()

        console.log(`second step error count is ${resend.length}`)
        console.log(`third step is started...`)
        async(resend, 0, [], [],  meta, function(resend){
          console.log(`third step error count is ${resend.length}`)
          done()
        })
      })
    })
  })
});

function createArray(count){
  const array = new Array(count) 
  const list = []
  count = 1
  for (let i of array) {
    const dats = String(Math.random().toString(36).slice(-12));
    const data = dats.concat(String(Math.random().toString(36).slice(-20)))
    const amount = Math.round(Math.random()*100)
    const seed = { data: data, amount: amount , count:count++}
    list.push(seed)
  }
  return list
}


function sync(array, meta, cb){
  const dats = String(Math.random().toString(36).slice(-12));
  const data = dats.concat(String(Math.random().toString(36).slice(-20)))
  const amount = Math.round(Math.random()*100)
  meta.register(String(data), Number(amount)).then(function(tx) {
    meta.balances(String(data)).then(function(balance) {
      count++ 
      console.log(tx,String(data), amount, balance.toNumber(), count)
      if (count > max)
        return cb(count)

      put(meta,cb)
    })
  })
}


function async(array, max, mined, back, meta, cb){

  if (!array[0])
    return 0

  if (!mined[0] && max < array.length)
    max = array.length

  const v = array.shift()
  
  
  meta.register(String(v.data), Number(v.amount)).then(function(tx) {
    //if transactions were mined, push the transaction to array
    meta.balances(String(v.data)).then(function(balance) {
      mined.push(v)
      if (v.amount !== balance.toNumber()){

        const amount = Math.round(Math.random()*100)
        back.push({ data: v.data, amount: amount, count: v.count})
      }
      console.log(`tx#${tx} target#${String(v.data)} set#${v.amount} return#${balance.toNumber()} count#${v.count} mine#${mined.length} error#${back.length} max#${max}`)

      if (mined.length == max)
        return cb(back )
    })
  })
  .catch(() => {
    array.push(v)
  })
  setTimeout(function(){
    async(array, max,mined, back, meta, cb)
  },1)
}



