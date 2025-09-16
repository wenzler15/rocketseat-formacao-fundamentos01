// Netflix & Spotify

// Importação de clientes via CSV (Excel)
// 1gb - 1.000.000
// POST /upload import.csv

// 10mb/s - 100s

// 100s -> Inserções no banco de dados

// 10mb/s -> 10.000

// Readable Stream - Leitura de dados
// Writable Stream - Escrita de dados

// Netflix & Spotify - é um exemplo de Writable Stream

//process.stdin.pipe(process.stdout); // Fluxo de entrada padrão (teclado) => Fluxo de saída padrão (tela)

import { Readable } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));
        this.push(buf);
      }
    }, 1000);
  }
}

new OneToHundredStream().pipe(process.stdout);
