'use client'

import { Breadcrumb } from 'antd'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function DynamicBreadcrumb() {
  const pathname = usePathname()
  const pathParts = pathname.split('/').filter(Boolean)

  const breadcrumbItems = [
    {
      title: (
        <Link href="/" className="!text-white">
          Home
        </Link>
      ),
    },
    ...pathParts.map((part, index) => {
      const href = '/' + pathParts.slice(0, index + 1).join('/')
      const title = part
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
      return {
        title:
          index === pathParts.length - 1 ? (
            <span>{title}</span>
          ) : (
            <Link href={href}>{title}</Link>
          ),
      }
    }),
  ]

  return (
    <div >
      <Breadcrumb
        items={breadcrumbItems}
        separator="→"
        className="breadcrumb-white text-[16px] "
      />
    </div>
  )
}
