import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async session({ response }: HttpContextContract) {
    return response.json({
      accessToken:
        'eyJhbGciOiJFUzI1NiIsImtpZCI6ImExRDBMdkFzQjdaNEJmLTE0VWMwNkEiLCJ0eXAiOiJKV1QifQ.eyJzdWIiOiIyMWU2MTZiZi1mZWY3LTRjNDYtYWU3NC03MjIxNTk5NjVlZmMiLCJqdGkiOiI5OGJmZDgxYy0zMjc0LTQ4ZTYtOTc1OS03YmE4ZjM0YzNmYTEiLCJuYmYiOjE2NDcyMDEyOTEsImlhdCI6MTY0NzIwMTI5MSwicm9sZXMiOlsiVVNFUiIsIkFET0ciXSwiUG9saXRpY2FQcml2YWNpZGFkZSI6IkZhbHNlIiwiZXhwIjoxNjQ3MjMwMDkxLCJpc3MiOiJodHRwOi8vZ29iYXBpYXV0ZW50aWNhY2FvLmF6dXJld2Vic2l0ZXMubmV0In0.j1AGpvwp6FBHHMmZQ2eRrafs_bXMOkfEG0WLceDEX2ZFNejhB7Kz9MWhJX7kQoW0cp89UJg38xvP86-OosriOQ',
      refreshToken:
        'eyJhbGciOiJFUzI1NiIsImtpZCI6ImExRDBMdkFzQjdaNEJmLTE0VWMwNkEiLCJ0eXAiOiJydCtqd3QifQ.eyJzdWIiOiIyMWU2MTZiZi1mZWY3LTRjNDYtYWU3NC03MjIxNTk5NjVlZmMiLCJuYmYiOjE2NDcyMDEyOTEsImV4cCI6MTY0ODA2NTI5MSwiaWF0IjoxNjQ3MjAxMjkxLCJpc3MiOiJodHRwOi8vZ29iYXBpYXV0ZW50aWNhY2FvLmF6dXJld2Vic2l0ZXMubmV0In0.2m7OWOz45QUI1-Qv23pIAuz5ZwYwsZnDVyNCfNYMhKW4xwpYkUckQPrL84Lk9cMMTmIXH3fQEK7YBwwf9Pg-gg',
      userName: 'Admin',
      expiresIn: 28800,
      role: ['USER', 'ADOG'],
      politicaPrivacidade: false,
      data: '2022-03-13T16:54:51.9668405-03:00',
    })
  }
}
