import { createFileRoute } from '@tanstack/react-router'
import { Separator, Button } from '@base-ui/react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className='flex p-8 gap-32'>
      <div className='flex-2'>
        <h1 className='text-3xl'>PRODUTOS PERSONALIZADOS FEITOS COM CAPRICHO</h1>
        <Separator orientation='horizontal' className='h-3/100 bg-gray-700'/>
        <section className='text-2xl'>Para seus momentos especiais, porque toda ocasião merece algo único</section>
        <small className='text-base'>Entre em contato e conheça mais nosso trabalho</small>
        <div className='flex gap-12'>
          <Button>Encomendar</Button>
          <Button>Ver Galeria</Button>
        </div>
      </div>
      <div className='flex-1 bg-red-300'>
        Direita
      </div>
    </div>
  )
}
