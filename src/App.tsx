import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { ContactListPage, ContactPage, LoginPage, RegisterPage } from './pages'
import { auth, onAuthStateChanged } from './firebase'
import { useAppDispatch } from './redux/store'
import { setUser } from './redux/user/userSlice'
import { useAuthState } from 'react-firebase-hooks/auth'
import { RequireAuth } from './components/auth/RequireAuth/RequireAuth'
import Loader from './components/common/Loader'

// TODO: register and login forms should be refactored later. Create 1 form that accepts action(login/register) and data.
// TODO: create opportunity to edit contact in modal window
// TODO: create separate object with routes
// TODO: перенести функции авторизации/регистрации в api. Также сделать там отдельные файлы для создания, редактирования и удаления контактов.

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [user, loading, error] = useAuthState(auth)

  //Проверяем, авторизован ли пользователь, если да, то информируем Redux и разрешаем переход по private roots
  // React.useEffect(() => {
  //   if (user) {
  //     dispatch(
  //       setUser({
  //         email: user.email,
  //         uid: user.uid,
  //         username: user.displayName
  //       })
  //     )
  //   } else {
  //     console.log('You are not authorized!')
  //   }
  // }, [dispatch, user])

  React.useEffect(() => {
    if (user && !loading) {
      console.log(`fkdlsfjsdajsdf ${user.displayName}`)
      dispatch(
        setUser({
          email: user.email,
          uid: user.uid,
          username: user.displayName
        })
      )
      navigate('/')
    } else {
      // console.log('You are not authorized!')
    }
  }, [dispatch, navigate, user])

  if (loading) {
    return <Loader />
  }
  if (error) {
    return <h1>Error...</h1>
  }
  return (
    <Routes>
      <Route
        path={'/'}
        element={
          <RequireAuth>
            <ContactListPage />
          </RequireAuth>
        }
      />
      <Route
        path={'/contacts/:contactId'}
        element={
          <RequireAuth>
            <ContactPage />
          </RequireAuth>
        }
      />
      <Route path={'/register'} element={<RegisterPage />} />
      <Route path={'/login'} element={<LoginPage />} />
      <Route path={'*'} element={<h1>Ничего не найдено</h1>} />
    </Routes>
  )
  // return username ? (
  //   <Routes>
  //     <Route path={'/'} element={<ContactListPage />} />
  //     <Route path={'/contacts/:contactId'} element={<ContactPage />} />
  //     <Route path={'/register'} element={<RegisterPage />} />
  //     <Route path={'/login'} element={<LoginPage />} />
  //     <Route path={'*'} element={<h1>Ничего не найдено</h1>} />
  //   </Routes>
  // ) : (
  //   <Routes>
  //     <Route path={'/register'} element={<RegisterPage />} />
  //     <Route path={'/login'} element={<LoginPage />} />
  //     <Route path={'*'} element={<h1>Ничего не найдено</h1>} />
  //   </Routes>
  // )
}

export default App
