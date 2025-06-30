import CompanyOverview from '@/components/home/CompanyOverview'
import HowItWorks from '@/components/home/HowItWorks'
import TopPage from '@/components/home/TopPage'
import TopPerformingAthletes from '@/components/home/TopPerformingAthletes'
import KeyFeatureAndBenefits from '@/components/home/KeyFeatureAndBenefits'
import FAQ from '@/components/home/FAQ'
import Testimonial from '@/components/home/Testimonial'

const Home = () => {
  return (
    <div>
      <TopPage />
      <CompanyOverview />
      <HowItWorks />
      <TopPerformingAthletes />
      <KeyFeatureAndBenefits />
      <Testimonial />
      <FAQ />
    </div>
  )
}

export default Home
