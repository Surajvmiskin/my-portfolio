import { Navigation } from '../components/Navigation'
import { Hero } from '../components/Hero'
import { Skills } from '../components/Skills'
import { Footer } from '../components/Footer'
import { HireMe } from '../components/HireMe'

export const Home = () => `
  <div class="min-h-screen">
    ${Navigation()}
    ${Hero()}
    ${Skills()}
    ${Footer()}
    ${HireMe()}
  </div>
`