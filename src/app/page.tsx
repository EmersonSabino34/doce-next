"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PartyKits() {
  const kits = [
    {
      title: "Kit Festa para 5 Pessoas",
      description: "Inclui salgadinhos variados (coxinha, risoles), bolo simples e doces (brigadeiro, beijinho). Perfeito para pequenas comemorações!",
      price: "50,00 €",
      image: "https://www.tasteofhome.com/wp-content/uploads/2020/02/Birthday-board-TOHcom21_PU6005_G11_19_2b.jpg",
      color: "bg-blue-100 border-blue-300", // Azul pastel
    },
    {
      title: "Kit Festa para 10 Pessoas",
      description: "Salgadinhos variados (esfirra, quibe), bolo médio e doces sortidos (brigadeiro, cajuzinho, olho de sogra). Ideal para aniversários em família!",
      price: "R$ 90,00",
      image: "https://www.tasteofhome.com/wp-content/uploads/2019/10/candy-buffet-shutterstock_417012499.jpg",
      color: "bg-green-100 border-green-300", // Verde pastel
    },
    {
      title: "Kit Festa para 20 Pessoas",
      description: "Salgadinhos premium (pastel, empada), bolo grande e doces variados (brigadeiro gourmet, moranguinho). Ótimo para festas com amigos!",
      price: "R$ 160,00",
      image: "https://www.playpartyplan.com/wp-content/uploads/2023/04/birthday-charcuterie-board-17-2-e1680881373724-480x270.jpg",
      color: "bg-yellow-100 border-yellow-300", // Amarelo pastel
    },
    {
      title: "Kit Festa para 40 Pessoas",
      description: "Salgadinhos completos (mini hot dog, bolinha de queijo), bolo extra grande e doces abundantes (brigadeiro, casadinho, doces finos). Para eventos maiores!",
      price: "R$ 300,00",
      image: "https://i.ytimg.com/vi/AzX0StFxcuo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAbJA0A5EGqir1E2dJRv4qhUEcbkg",
      color: "bg-orange-100 border-orange-300", // Laranja pastel
    },
  ]

  return (
    <section className="py-20 bg-pink-50"> {/* Fundo rosa claro para harmonia */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Nossos Kits de Festa</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o kit perfeito com salgadinhos, bolos e doces variados. Todos os combos incluem itens frescos e deliciosos!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {kits.map((kit, index) => (
            <Card key={index} className={`shadow-lg ${kit.color}`}>
              <CardHeader>
                <img
                  src={kit.image}
                  alt={kit.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle className="mt-4 text-2xl font-bold text-gray-800">{kit.title}</CardTitle>
                <CardDescription className="text-gray-600">{kit.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold text-gray-900">{kit.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                  Comprar Agora
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
