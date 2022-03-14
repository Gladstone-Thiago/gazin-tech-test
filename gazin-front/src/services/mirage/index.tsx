import { createServer, Model, Factory } from 'miragejs'
import faker from 'faker'

type User = {
    name: string,
    email: string,
    created_at: Date
}

type Scheduled = {
  tas_id: number,
  task_name: string,
  schedule_details: string,
  next_scheduled_run: Date,
  last_scheduled_run_state: Date,
  state: boolean
}

export function makeServer() {
    const server = createServer({
        models: {
           user: Model.extend<Partial<User>>({}),
           scheduled: Model.extend<Partial<Scheduled>>({})
        },

        factories: {
         user: Factory.extend({
           name(i: number) {
             return `User ${i + 1}`
           },
            email() {
             return faker.internet.email().toLowerCase()
            },
            created_at() {
              return faker.date.recent(10)
            },
          }),

         scheduled: Factory.extend({
            tas_id(i: number){
              return i + 1
            },
            task_name(i: number){
              return `task name ${i + 1}`
            },
            schedule_details(i: number){
              return `schedule details ${i + 1}`
            },
            next_scheduled_run() {
              return faker.date.recent(10)
            },
            last_scheduled_run_state() {
              return faker.date.recent(10)
            },
            state() {
              return true
            }
          })
        },

        seeds(server) {
          server.createList('user', 200),
          server.createList('scheduled', 200)
        },


        routes() {
          this.namespace = 'api';
          this.timing = 1000;

          this.get("/users")
          this.get('/scheduleds')

          this.namespace = "" // or this.namespace = "/"
          this.passthrough() // now this will pass through everything not handled to the current domain (e.g. localhost:3000)
        },
      })

    return server;
}

