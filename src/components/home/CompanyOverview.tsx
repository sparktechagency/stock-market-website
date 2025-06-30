const CompanyOverview = () => {
  return (
    <div className="mx-auto flex items-center justify-center">
      <section className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 text-black bg-yellow-400 px-14 py-8 rounded-md">
        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold">12K</div>
          <div className="mt-2 ">Client Word wide</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold">95%</div>
          <div className="mt-2 ">Satisfy Clients</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold">1.5K</div>
          <div className="mt-2 ">Money Invested</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold">750+</div>
          <div className="mt-2 ">Expert Traders</div>
        </div>
      </section>
    </div>
  )
}

export default CompanyOverview
