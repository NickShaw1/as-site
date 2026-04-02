import { useState } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

interface HoverStyle {
  bg: string
  hoverBg: string
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

export function HoverButton({
  bg, hoverBg, className, style, children, ...props
}: HoverStyle & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      {...props}
      className={className}
      style={{ background: hovered ? hoverBg : bg, ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  )
}

export function HoverLink({
  bg, hoverBg, className, style, children, ...props
}: HoverStyle & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      {...props}
      className={className}
      style={{ background: hovered ? hoverBg : bg, ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  )
}

export function HoverRouterLink({
  bg, hoverBg, className, style, children, ...props
}: HoverStyle & Omit<LinkProps, 'style'>) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      {...props}
      className={className}
      style={{ background: hovered ? hoverBg : bg, ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  )
}
