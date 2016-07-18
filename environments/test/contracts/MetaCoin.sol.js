// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"target","type":"bytes32"},{"name":"amount","type":"uint256"}],"name":"register","outputs":[{"name":"","type":"bool"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "606060405260008054600160a060020a0319163317905560878060226000396000f3606060405260e060020a60003504638909aa3f8114602e5780638da5cb5b146045578063ff3617f8146063575b005b607d60043560016020526000908152604090205481565b607d60005473ffffffffffffffffffffffffffffffffffffffff1681565b600435600090815260016020819052604090912060243590555b6060908152602090f3",
    unlinked_binary: "606060405260008054600160a060020a0319163317905560878060226000396000f3606060405260e060020a60003504638909aa3f8114602e5780638da5cb5b146045578063ff3617f8146063575b005b607d60043560016020526000908152604090205481565b607d60005473ffffffffffffffffffffffffffffffffffffffff1681565b600435600090815260016020819052604090912060243590555b6060908152602090f3",
    address: "0x0563df84495bbbd1ab01cac860f96956e4ad51c0",
    generated_with: "2.0.9",
    contract_name: "MetaCoin"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("MetaCoin error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("MetaCoin error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("MetaCoin error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("MetaCoin error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.MetaCoin = Contract;
  }

})();
