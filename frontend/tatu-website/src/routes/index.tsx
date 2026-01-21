import { createFileRoute } from '@tanstack/react-router'
import { Separator, Button } from '@base-ui/react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className='flex p-8 gap-32'>
      <div className='flex-3 flex flex-col gap-10'>
        <section className='flex flex-col gap-6'>
          <h1 className='font-title text-3xl italic font-bold text-dusk-blue'>PRODUTOS PERSONALIZADOS FEITOS COM CAPRICHO</h1>
          <Separator orientation='horizontal' className='h-[3px] bg-gray-700'/>
          <a className='font-body text-2xl font-extralight'>Para seus momentos especiais, porque toda ocasião merece algo único</a>
        </section>
        <section className='flex flex-col gap-4'>
          <small className='font-body text-base font-light'>Entre em contato e conheça mais nosso trabalho</small>
          <div className='flex gap-12'>
            <Button className='font-body font-bold text-sm bg-cherry-blossom text-gray-700 px-6 py-3 rounded-full'>Encomendar</Button>
            <Button className='font-body font-bold text-sm bg-dusty-mauve text-white px-6 py-3 rounded-full'>Ver Galeria</Button>
          </div>
        </section>
      </div>
      <div className='flex-2 bg-red-300'>
        Direita
      </div>
    </div>
  )
}
