"use client"

import { useState } from 'react'
import {Link} from "react-router-dom"
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { courseSubCategories } from "@/types/index"

const MAX_VISIBLE_SUBCATEGORIES = 5

export default function Footer() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])
  const [items, setItems] = useState<{key: string, item: string, path: string}[]>([
    {key: '1', item: 'Privacy Policy', path: 'privacy-policy'},
    {key: '2', item: 'Terms of Service', path: 'terms-of-service'},
    {key: '3', item: 'Contact Us', path: 'contact'},
    {key: '4', item: 'About Us', path: 'about'},
    {key: '5', item: 'Help Center', path: 'help-center'},
  ])

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  return (
    <footer className="bg-background py-4 px-4 md:px-6 border-t">
      <div className="container mx-auto">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(courseSubCategories).map(([category, subcategories]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold capitalize mb-4">
                {category.replace(/-/g, " ")}
              </h3>
              <Collapsible
                open={expandedCategories.includes(category)}
                onOpenChange={() => toggleCategory(category)}
              >
                <ul className="space-y-2">
                  {subcategories.slice(0, MAX_VISIBLE_SUBCATEGORIES).map((sub) => (
                    <li key={sub.key}>
                      <Link
                        className="text-sm text-muted-foreground hover:underline"
                        to={`/courses/${category}`}
                      >
                        {sub.displayName}
                      </Link>
                    </li>
                  ))}
                </ul>
                {subcategories.length > MAX_VISIBLE_SUBCATEGORIES && (
                  <>
                    <CollapsibleContent>
                      <ul className="space-y-2 mt-2">
                        {subcategories.slice(MAX_VISIBLE_SUBCATEGORIES).map((sub) => (
                          <li key={sub.key}>
                            <Link
                              className="text-sm text-muted-foreground hover:underline"
                              to={`/courses/${category}`}
                            >
                              {sub.displayName}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                    <CollapsibleTrigger asChild>
                      <Button variant="link" className="p-0 h-auto mt-2">
                        {expandedCategories.includes(category) ? (
                          <ChevronUp className="h-4 w-4 mr-1" />
                        ) : (
                          <ChevronDown className="h-4 w-4 mr-1" />
                        )}
                        {expandedCategories.includes(category) ? 'Show Less' : 'Show More'}
                      </Button>
                    </CollapsibleTrigger>
                  </>
                )}
              </Collapsible>
            </div>
          ))}
        </div> */}
        <div className="mt-2 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 CODEIT. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">

            {items.map((item) => (
              <Link key={item.key} className="text-sm hover:underline underline-offset-4" to={`${item.path}`}>
                {item.item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

