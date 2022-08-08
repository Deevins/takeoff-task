import React from 'react'

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
  clickHandle?: () => void
  myFormId?: string
}
