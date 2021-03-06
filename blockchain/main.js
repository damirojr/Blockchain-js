const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(timestamp, lastHash, hash, data){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }                
    toString(){
        return `Block - 
                Timestamp: ${this.timestamp}
                Last Hash: ${this.hash}
                Hash     : ${this.hash}
                Data     : ${this.data}`                
    }
    static genesis(){
        return new this('Genesis time', '-----', 'first-hash', []);
    }

    // criando o primeiro bloco a partir do anterior 

    static mineBlock(lastBlock, data){
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = Block.hash(timestamp, lastHash, data);
        return new this(timestamp, lastHash, hash, data);
    }

    // recebendo os dados do bloco

    static hash(timestamp, lastHash, data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

    // Recebe o bloco, coleta os dados e aplica a função hash neles

    static blockHash(block){
        const {timestamp, lastHash, data} = block;
        return Block.hash(timestamp, lastHash, data);

    }
}

module.exports = Block;