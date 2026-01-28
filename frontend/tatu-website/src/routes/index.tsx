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
          <h1 className='font-title text-3xl italic font-semibold text-dusk-blue'>PRODUTOS PERSONALIZADOS FEITOS COM CAPRICHO</h1>
          <Separator orientation='horizontal' className='h-[3px] bg-gray-700'/>
          <a className='font-body text-xl font-extralight'>Para seus momentos especiais, porque toda ocasião merece algo único</a>
        </section>
        <section className='flex flex-col gap-6'>
          <small className='font-body text-sm font-thin'>Entre em contato e conheça mais nosso trabalho</small>
          <div className='flex gap-6'>
            <Button className='font-body font-bold text-sm bg-cherry-blossom text-gray-700 px-8 py-4 rounded-full'>Encomendar</Button>
            <Button className='font-body font-bold text-sm bg-dusty-mauve text-white px-8 py-4 rounded-full'>Ver Galeria</Button>
          </div>
        </section>
      </div>
      <div className='flex-2 flex items-top justify-center relative'>
        <div className='mt-10 w-90 h-100 bg-peach-fuzz rounded-full aboslute'/>
        <svg viewBox='0 0 360 400' className='absolute mt-0 h-full w-full'>
          <path id='textCurve' d='M10, 205 A 160, 160 0 0, 1 350, 205' stroke='red' fill='transparent'/>
          <text className="text-3xl font-bold tracking-widest fill-gray-800">
            <textPath href='#textCurve' startOffset="50%" textAnchor="middle">
              FAÇA VOCÊ MESMO
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  )
}
