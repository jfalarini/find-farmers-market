import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold">Hello World</CardTitle>
          <CardDescription>
            Bem-vindo ao Find Farmers Market
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center text-muted-foreground">
          <p>Encontre feiras livres perto de você.</p>
        </CardContent>
        <CardFooter className="justify-center gap-2">
          <Button>Começar</Button>
          <Button variant="outline">Saiba mais</Button>
        </CardFooter>
      </Card>
    </main>
  )
}
