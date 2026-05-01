import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = index === openIndex

        return (
          <article key={item.question} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="faq-trigger"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <ChevronDown size={18} />
            </button>
            <div className="faq-panel">
              <p>{item.answer}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Accordion
