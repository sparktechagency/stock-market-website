"use client"
import DynamicBreadcrumb from '@/app/DynamicBreadcrumb'
import { useGetPrivacyQuery } from '@/redux/privacyApis'

const PrivacyAndPolicy = () => {
  const { data, isLoading, isError } = useGetPrivacyQuery()
  const content = data?.data?.description

  if (isLoading) return <div className="responsive-width !mt-5">Loading...</div>
  if (isError)
    return (
      <p className="responsive-width !mt-5">Error loading privacy policy</p>
    )
  return (
    <div className=" flex flex-col justify-center responsive-width">
      <div className="text-3xl font-bold mb-6">Privacy and Policy</div>
      <DynamicBreadcrumb />

      <section className="mt-10 text-justify text-gray-400">
        <div
          dangerouslySetInnerHTML={{
            __html: content || 'No terms and conditions available.',
          }}
          className="text-justify mt-5"
        ></div>
      </section>
    </div>
  )
}

export default PrivacyAndPolicy
