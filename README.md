# Curso FullCycle 3.0
Repositório com tarefas, exercícos, desafios e arquivos diversos do [Curso FullCycle 3.0](https://fullcycle.com.br/)

## Desafios
### 1. Desafio Go
Esse desafio é muito empolgante principalmente se você nunca trabalhou com a linguagem Go!
Você terá que publicar uma imagem no docker hub. Quando executarmos:

```bash
docker run aureliusoc/hello_go
```

Temos que ter o seguinte resultado: <seu_nome> & FullCycle rock!

Se você perceber, essa imagem apenas realiza um print da mensagem como resultado final, logo, vale a pena dar uma conferida no próprio site da Go Lang para aprender como fazer um "olá mundo".

Lembrando que a Go Lang possui imagens oficiais prontas, vale a pena consultar o Docker Hub.

3) A imagem de nosso projeto Go precisa ter menos de 2MB =)

Dica: No vídeo de introdução sobre o Docker quando falamos sobre o sistema de arquivos em camadas, apresento uma imagem "raiz", talvez seja uma boa utilizá-la.

Divirta-se

#### Solução
Foi criada a imagem [hello_go](https://hub.docker.com/r/aureliusoc/hello_go) a partir do Dockerfile em ./docker/golang/.

##### Links e Materiais de Apoio:
* [Go in 100 Seconds](https://www.youtube.com/watch?v=446E-r0rXHI)
* [Drastically reduce the size of your DOCKER images with MULTISTAGE builds](https://www.youtube.com/watch?v=KLOdisHW8rQ)
