'use client'

import FilterForm from './FilterForm'
import CategorySidebar from './CategorySidebar'

export default function FiltersAside() {
  return (
    <aside
      id="mobile-filters"
      className="hidden lg:block w-full lg:w-[19rem] mb-3 lg:px-0 pr-0 lg:pr-3 space-y-6 font-inter"
    >
      <div className="mb-3">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">🎯 فیلتر و دسته‌بندی</h2>
        <div className="h-[2px] bg-yellow-400 w-12 rounded-full"></div>
      </div>

      <FilterForm />
      <CategorySidebar />
    </aside>
  )
}
