function relogio() {
    const criaHoraDosSegundos = (segundos) => {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
            //Essa configuração, faz com que ele considere agora a data 01/01/1970 00:00:10, pois eu mandei 10 segundos
        });
    }

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');

    let segundos = 0;//Variável que está armazenando um estado, pois eu não estou redeclarando ela, só estou mudando o estado
    let timer;//Declarei essa variável fora, para que seja possível acessá-la nas outras funções, tornando assim possível parar

    const iniciaRelogio = () => {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);//Preciso chamar a função para inserir no relógio uma atualização
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const elemento = e.target;

        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);//Faz com que ele volte ao estado inicial
            iniciaRelogio();
        }

        if (elemento.classList.contains('pausar')) {
            relogio.classList.add('pausado');

            clearInterval(timer);
        }

        if (elemento.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = `00:00:00`
            segundos = 0;//Preciso reatribuir o valor para que ele não continue de onde o estado que ele armazenou parou
        }
    });
}

relogio();
