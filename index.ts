// ----- Criacao do XBank ----- //

interface IConta {
    nomeTitular: string;
    saldo?: number;
}

class Conta {
    private nomeTitular: string;
    private saldo: number;
    private ativa: boolean = true;

    constructor({
        nomeTitular,
        saldo = 0
    }: IConta) {
        this.nomeTitular = nomeTitular;
        this.saldo = saldo;

        console.log(`${this.nomeTitular}, bem-vindo(a) ao XBank!`);
    }

    meuSaldo = (): number => this.saldo;

    depositar = (valor: number): void => {
        if (this.ativa) {
            this.saldo += valor;
            console.log(`Você depositou R$ ${valor}. Seu novo saldo é R$ ${this.saldo}.`);
        } else
            console.log('Não é possível depositar, conta desativada.');
        
    }

    sacar = (valor: number): void => {
        if (!this.ativa) {
            console.log('Não é possível sacar, conta desativada.');
            return;
        }

        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Você sacou R$ ${valor}. Seu novo saldo é R$ ${this.saldo}.`);
        } else
            console.log(`Não é possível sacar R$ ${valor}, saldo insuficiente. Seu saldo atual é R$ ${this.saldo}.`);
    }

    encerrarConta = (): void => {
        if (!this.ativa)
            console.log("Conta já está desativada.");        
        else if (this.saldo === 0) {
            this.ativa = false;
            console.log("Conta cancelada com sucesso.");       
        } else
            console.log('Não é possível desativar, a conta possui pendências.');
    }

    transferir = (contaRecebedora: Conta, valorATransferir: number): void => {
        if (!valorATransferir || valorATransferir <= 0) 
            console.log(`Não é possível transferir um valor nulo, vazio ou negativo.`);
        else {
            if (this.meuSaldo() < valorATransferir) 
                console.log("A conta transferidora não possui saldo suficiente.");
            else {
                console.log("\n### Realizando transferência...");
                this.sacar(valorATransferir);
                contaRecebedora.depositar(valorATransferir);                

                console.log("--- Transferência realizada ---");
                console.log(`Saldo atual da conta do(a) titular ${this.nomeTitular}: R$ ${this.meuSaldo()}`);
                console.log(`Saldo atual da conta do(a) titular ${contaRecebedora.nomeTitular}: R$ ${contaRecebedora.meuSaldo()}`);
            }
        }
    }
}

const contaA: Conta = new Conta({nomeTitular: 'Maria'});
const contaB: Conta = new Conta({nomeTitular: 'Pedro'});
contaA.depositar(100);
console.log(`Saldo da conta transferidora: R$ ${contaA.meuSaldo()}`);
console.log(`Saldo da conta recebedora: R$ ${contaB.meuSaldo()}`);
contaA.transferir(contaB, 20);