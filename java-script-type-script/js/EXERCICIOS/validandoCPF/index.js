// 705.484.450-52 // 070.987.720-03
/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237
11 - (237 % 11) = 5 (Primeiro digito)
Se o digito       ^ for maior que 9 é igual a 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 = 284
11 - (284 % 11) = 2 (Primeiro digito)
Se o digito       ^ for maior que 9 é igual a 0
*/

function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpflimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    })
}

ValidaCPF.prototype.valida = function () {
    if(typeof this. cpflimpo === 'undefined') return false;
    if(this.cpflimpo.length !== 11) return false;
    if(this.isSequency()) return false;
    const cpfParcial = this.cpflimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpflimpo;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length +1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo --;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? 0 : String(digito);
}

ValidaCPF.prototype.isSequency = function() {
    const sequencia = this.cpflimpo[0].repeat(this.cpflimpo.length);
    return sequencia === this.cpflimpo;
}
const cpf = new ValidaCPF('038.082.570-83');
console.log(cpf.valida());
