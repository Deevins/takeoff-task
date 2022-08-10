import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '../../../firebase'

export function RequireAuth({ children }: { children: JSX.Element }) {
  let location = useLocation()
  const [user] = useAuthState(auth)
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}
