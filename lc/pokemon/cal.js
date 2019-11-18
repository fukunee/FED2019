var fs = require('fs');

// read Sword&Sheild Pokemon Dex
let pkdex = require('./dex');

// read Pokemon Type-Counter Data
let typeCounter = require('./typeCounter');

//Set up model
//Single Pokemon model


//All Pokemons model
function AllPokemons(dex) {
    function Pokemon(id, name, type, type1, type2, hp, comA, comD, speA, speD, spd, isFinal) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.type1 = type1;
        this.type2 = type2;
        this.hp = hp;
        this.comA = comA;
        this.comD = comD;
        this.speA = speA;
        this.speD = speD;
        this.spd = spd;
        this.isFinal = isFinal === 'F';
        this.hpValue = parseInt(this.hp) + 31 + 31 + 10 + 50;
        this.injuryCom = undefined;
        this.injurySpe = undefined;
        this.injuryMax = undefined;
        this.liveTurnCom = undefined;
        this.liveTurnSpe = undefined;
        this.liveTurnMin = undefined;
        this.dmgCom = undefined;
        this.dmgSpe = undefined;
        this.dmgMax = undefined;
        this.killTurnCom = undefined;
        this.killTurnSpe = undefined;
        this.killTurnMin = undefined;
        this.winRate = undefined;
    }

    Pokemon.prototype.calculate = function (dex) {
        const calComDmg = function (attacker, defender) {
            let modifier = 1;
            for (let i = 0; i < attacker.type.length; i++) {
                for (let j = 0; j < defender.type.length; j++) {
                    modifier *= typeCounter[attacker.type[i]][defender.type[j]];
                }
            }
            return ((44 * (parseInt(attacker.comA) + 16 + 31 + 5) * 1.1 / (parseInt(defender.comD) + 16 + 16 + 5) + 2) * 1.5 * modifier);
        };
        const calSpeDmg = function (attacker, defender) {
            let modifier = [];
            for (let i = 0; i < attacker.type.length; i++) {
                let modi = 1;
                for (let j = 0; j < defender.type.length; j++) {
                    modi *= typeCounter[attacker.type[i]][defender.type[j]];
                }
                modifier.push(modi);
            }
            modifier = Math.max(...modifier);
            return ((44 * (parseInt(attacker.speA) + 31 + 63 + 5) / (parseInt(defender.speD) + 31 + 31 + 5) + 2) * modifier);
        };
        this.injuryCom = dex.reduce((op, v) => {
            return op + calComDmg(v, this);
        }, 0) / dex.length;
        this.injurySpe = dex.reduce((op, v) => {
            return op + calSpeDmg(v, this);
        }, 0) / dex.length;
        this.injuryMax = dex.reduce((op, v) => {
            return op + Math.max(calComDmg(v, this), calSpeDmg(v, this));
        }, 0) / dex.length;
        this.liveTurnCom = dex.reduce((op, v) => {
            let turn = Math.ceil(this.hpValue / (1 + calComDmg(v, this)));
            return op + (turn > 8 ? 8 : turn);
        }, 0) / dex.length;
        this.liveTurnSpe = dex.reduce((op, v) => {
            let turn = Math.ceil(this.hpValue / (1 + calSpeDmg(v, this)));
            return op + (turn > 8 ? 8 : turn);
        }, 0) / dex.length;
        this.liveTurnMin = dex.reduce((op, v) => {
            let turnCom = Math.ceil(this.hpValue / (1 + calComDmg(v, this)));
            let turnSpe = Math.ceil(this.hpValue / (1 + calSpeDmg(v, this)));
            let turn = Math.min(turnCom, turnSpe);
            return op + (turn > 8 ? 8 : turn);
        }, 0) / dex.length;
        this.dmgCom = dex.reduce((op, v) => {
            return op + calComDmg(this, v);
        }, 0) / dex.length;
        this.dmgSpe = dex.reduce((op, v) => {
            return op + calSpeDmg(this, v);
        }, 0) / dex.length;
        this.dmgMax = dex.reduce((op, v) => {
            return op + Math.max(calComDmg(this, v), calSpeDmg(this, v));
        }, 0) / dex.length;
        this.killTurnCom = dex.reduce((op, v) => {
            let turn = Math.ceil(v.hpValue / (1 + calComDmg(this, v)));
            return op + (turn > 8 ? 8 : turn);
        }, 0) / dex.length;
        this.killTurnSpe = dex.reduce((op, v) => {
            let turn = Math.ceil(v.hpValue / (1 + calSpeDmg(this, v)));
            return op + (turn > 8 ? 8 : turn);
        }, 0) / dex.length;
        this.killTurnMin = dex.reduce((op, v) => {
            let turnCom = Math.ceil(v.hpValue / (1 + calComDmg(this, v)));
            let turnSpe = Math.ceil(v.hpValue / (1 + calSpeDmg(this, v)));
            let turn = Math.min(turnCom, turnSpe);
            return op + (turn > 8 ? 8 : turn);
        }, 0) / dex.length;
        this.winRate = dex.reduce((op, v) => {
            let result = Math.ceil((parseInt(v.spd) > parseInt(this.spd) ? -0.99 : 0) + this.hpValue / (1 + Math.max(calSpeDmg(v, this), calComDmg(v, this)))) > Math.ceil((parseInt(this.spd) > parseInt(v.spd) ? -0.99 : 0) + v.hpValue / (1 + Math.max(calComDmg(this, v), calSpeDmg(this, v))));
            return op + (result ? 1 : 0);
        }, 0) / dex.length;
    };

    this.dex = dex;
    this.dex.forEach(v => {
        let type = [v["属性1"]];
        v["属性2"].length > 0 ? type.push(v["属性2"]) : null;
        v.type = type;
    });
    this.dex = this.dex.map(v => {
        return new Pokemon(v["全国编号"], v["名称"], v["type"], v["属性1"], v["属性2"], v["HP"], v["攻击"], v["防御"], v["特攻"], v["特防"], v["速度"], v["形态"]);
    });
    this.finalDex = this.dex.filter(v => {
        return !!v.isFinal;
    });
    this.typeDistribute = {};
    this.finalDex.forEach(v => {
        for (let i = 0; i < v.type.length; i++) {
            if (this.typeDistribute[v.type[i]]) {
                this.typeDistribute[v.type[i]]++;
            } else {
                this.typeDistribute[v.type[i]] = 1;
            }
        }
    });

    this.dex.forEach(v => {
        v.calculate(this.dex);
    })
}

let allPokemons = new AllPokemons(pkdex);

fs.readFile('./dex_op.json', function (err, data) {
    if (err) {
        console.log("读取失败", err);
    } else {
        fs.writeFile('./dex_op.json', JSON.stringify(allPokemons.dex.map(v => {
            v.type = null;
            return v;
        })), function (err) {
            if (err) console.log("写入错误", err);
        });
    }
});