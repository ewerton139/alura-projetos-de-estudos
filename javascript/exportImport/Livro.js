export class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    descrever() {
        console.log(`Este livro com titulo de: ${this.titulo}, foi escrito pelo autor(a): ${this.autor}`);
    }

}