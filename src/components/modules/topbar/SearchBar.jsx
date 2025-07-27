'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { allProducts } from '@/data/products'

/**
 * SearchBar component allows users to search products in real-time.
 * It filters results based on the query and shows a dropdown list of suggestions.
 */
function SearchBar() {
    const [query, setQuery] = useState('')                  // User input query
    const [filteredResults, setFilteredResults] = useState([]) // Filtered product list
    const [showResults, setShowResults] = useState(false)     // Dropdown visibility
    const router = useRouter()
    const containerRef = useRef(null)

    // Filter products on query change, debounced or immediate for simplicity
    useEffect(() => {
        if (!query.trim()) {
            setFilteredResults([])
            return
        }

        // Filter products whose title includes the query (case-insensitive)
        const results = allProducts.filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase())
        )

        // Remove duplicates by slug
        const uniqueResults = results.filter(
            (item, index, self) => index === self.findIndex(t => t.slug === item.slug)
        )

        setFilteredResults(uniqueResults)
    }, [query])

    // Close dropdown if clicked outside search bar
    useEffect(() => {
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setShowResults(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Handle form submission: redirect to the first matched product page
    const handleSubmit = e => {
        e.preventDefault()
        if (filteredResults.length > 0) {
            setQuery('')
            router.push(`/${filteredResults[0].game}/${filteredResults[0].slug}`)
            setShowResults(false)
        }
    }

    return (
        <div
            ref={containerRef}
            className="relative hidden lg:flex items-center bg-white dark:bg-[#151B2D] w-[30rem] xl:w-[45rem] h-12 rounded-[1.3rem] mr-12 focus-within:ring-2 focus-within:ring-blue-500 transition-all overflow-visible"
        >
            <form onSubmit={handleSubmit} className="relative flex items-center w-full h-full px-4">
                <input
                    type="text"
                    placeholder="جست‌وجوی محصولات"
                    className="flex-1 h-full bg-transparent border-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none font-Shabnam-Bold-FD text-sm"
                    value={query}
                    onChange={e => {
                        setQuery(e.target.value)
                        setShowResults(true)
                    }}
                    aria-label="Search products"
                    autoComplete="off"
                />

                <button
                    type="submit"
                    className="ml-4 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 flex items-center justify-center"
                    aria-label="Submit search"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 xl:w-7 xl:h-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </form>

            {/* Dropdown for live search suggestions */}
            {showResults && query.length > 0 && (
                <div className="absolute top-full left-0 w-full rounded-t-[1.3rem] bg-white dark:bg-[#1f2937] shadow-lg z-50 rounded-b-[1.3rem] max-h-72 overflow-auto">
                    {filteredResults.length > 0 ? (
                        filteredResults.map(product => (
                            <Link
                                key={product.slug}
                                href={`/${product.game}/${product.slug}`}
                                className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                                onClick={() => {
                                    setShowResults(false)
                                    setQuery('')       // پاک کردن ورودی هنگام کلیک روی لینک
                                }}
                                tabIndex={0}

                            >
                                <span className="text-sm text-black dark:text-white">{product.title}</span>
                            </Link>
                        ))
                    ) : (
                        <div className="px-4 py-3 text-sm text-gray-500 dark:text-gray-300">
                            محصول یا اکانت مورد نظر یافت نشد.
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default SearchBar
