import { get, writable, derived } from 'svelte/store'

const initialState = {
  authenticate: false,
  userName: '',
  token: '',
  time: '0',
}

export const AuthService = () => {
  const Auth = writable(initialState)

  const Login = ({ token, userName, auth }) => {
    Auth.update(prev => ({
      ...prev,
      authenticate: auth,
      userName,
      token,
      time: '6d',
    }))
  }

  const SetNewState = ({ token, userName, auth }) =>
    Auth.set({ authenticate: auth, userName, token, time: '6d' })

  const LogState = () => Auth.subscribe(val => console.log(val))

  const GetState = () => get(Auth)

  return {
    Login,
    SetNewState,
    LogState,
    GetState,
  }
}
