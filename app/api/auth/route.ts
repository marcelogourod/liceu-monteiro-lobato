import { NextResponse } from 'next/server'
import { validateLogin } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    const user = validateLogin(email, password)

    if (user) {
      return NextResponse.json({ 
        success: true, 
        user 
      })
    } else {
      return NextResponse.json(
        { success: false, message: 'Credenciais inválidas' },
        { status: 401 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Erro no servidor' },
      { status: 500 }
    )
  }
}
