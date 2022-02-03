const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(index, timestamp, data, previusHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previusHash = previusHash;
        this.hash = '';
    }

    calculateHash(){
        return SHA256(this.index + this.previusHash + this.timestamp + JSON.stringify(this.data)).toString(); 
    }
}


class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];        
    }

    createGenesisBlock(){
        return new Block(0, "03/02/2022", "Genesis Block", "0");
    }

    getLatestBlock(){
        return this.chain(this.chain.length - 1);
    }

    addBlock(){
        newBlock.previusHash = this.getLatesBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

}


let chronosCoin = new Blockchain();
chronosCoin.addBlock(new Block(1, '11/02/2022', {amount: 4}));
chronosCoin.addBlock(new Block(2, '15/02/2022', {amount: 10}));

console.log(JSON.stringify(chronosCoin, null, 4));
