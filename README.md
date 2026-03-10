# 🎉 Party Kits – Kits de Festa

Componente **PartyKits** desenvolvido em **Next.js (App Router)** utilizando **React**, **Tailwind CSS** e **shadcn/ui**. Ele apresenta kits de festa organizados por quantidade de pessoas, com visual moderno, cores suaves e layout totalmente responsivo.


---

## ✨ Visão Geral

O componente exibe uma grade de **cards ilustrativos**, cada um representando um kit de festa com:

* 🧁 Imagem ilustrativa
* 📦 Nome do kit
* 📝 Descrição detalhada
* 💰 Preço
* 🛒 Botão de ação

Ideal para sites de **docerias, buffets, festas infantis e eventos**.

---

## 🧩 Tecnologias Utilizadas

* **Next.js 13+ (App Router)**
* **React**
* **Tailwind CSS**
* **shadcn/ui**

---

## 📁 Estrutura do Arquivo

```txt
PartyKits.tsx
```

> O componente usa `"use client"` pois trabalha com renderização no cliente e iteração dinâmica de dados.

---

## 🧠 Lógica do Componente

Os kits são definidos em um array de objetos:

* `title` → Nome do kit
* `description` → Descrição dos itens incluídos
* `price` → Valor do kit
* `image` → URL da imagem ilustrativa
* `color` → Cor pastel aplicada ao card (Tailwind)

Esses dados são renderizados dinamicamente usando `.map()`.

---

## 🎨 Design & UX

* 🎨 **Cores pastéis** para transmitir leveza e alegria
* 📱 **Layout responsivo**

  * 1 coluna (mobile)
  * 2 colunas (tablet)
  * 4 colunas (desktop)
* 🧱 Cards com sombra suave e bordas arredondadas
* 🌸 Fundo rosa claro para harmonia visual

---

## ▶️ Como Usar

1. Certifique-se de ter o **shadcn/ui** instalado:

```bash
npx shadcn@latest init
```

2. Adicione os componentes necessários:

```bash
npx shadcn@latest add card button
```

3. Importe e use o componente:

```tsx
import PartyKits from "@/components/PartyKits"

export default function Page() {
  return <PartyKits />
}
```

---

## 🚀 Possíveis Melhorias

* Integração com **WhatsApp** no botão "Comprar Agora"
* Modal com detalhes do kit
* Integração com **carrinho de compras**
* Conteúdo dinâmico via API ou CMS
* Animações com **Framer Motion**

---

## 📌 Observações

* As imagens são ilustrativas e carregadas via URL externa
* O componente pode ser facilmente reutilizado e escalado

---

## 🧑‍💻 Autor

Desenvolvido por **Emerson Sabino**
Full Stack Developer

---

🎈 *Perfeito para transformar ofertas de festa em uma experiência visual irresistível!*
