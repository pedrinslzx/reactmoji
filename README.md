# 🎉 REACTMOJI 😍

Use emojis do iOS em seu app React

## Funcionalidades

- Emojis padronizados em todas as plataformas
- Suporte a mais de 3900 emojis

## Licença

[MIT](https://choosealicense.com/licenses/mit/)

## Uso/Exemplos

### React

Você pode utilizar o componente de `Emoji` do reactmoji que disponibiliza um componente `img`.

```javascript
import { Emoji } from 'reactmoji'

function App() {
  return (
    <p>
      Como eu falei: super fácil <Emoji emoji='Smiling Face With Heart Eyes' />
    </p>
  )
}
```

### NextJS

Você não precisa habilitar a renderização via cliente para utilizar o reactmoji. Você pode utilizar o componente de `Image` do próprio Next.

```javascript
import Image from 'next/image'
import { getEmoji } from 'reactmoji'

function App() {
  return (
    <p>
      Como eu falei: super fácil <Image {...getEmoji('Smiling Face With Heart Eyes')} />
    </p>
  )
}
```

Não esqueça de adicionar o domínio do reactmoji para que o Next possa acessar as imagens utilizando o componente `Image`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['reactmoji.pedrinholemes.com.br'],
  },
}

module.exports = nextConfig
```

## Options

Se você quiser pode alterar o host e o https utilizando a função `setOptions`

```javascript
import { setOptions } from 'reactmoji'

setOptions({
  host: 'emojis.pedrinholemes.com.br',
  https: true,
})
```

## Roadmap

Ainda estou melhorando essa lib. Se tiver algo pra ajudar, manda uma ISSUE ou envie sua PR

- [] suporte a sintaxe gitmoji (`:happy:`)
- [] textos alternativos como os próprios emojis para melhorar a acessibilidade
- [] reconhecer emojis na prop `emoji`
