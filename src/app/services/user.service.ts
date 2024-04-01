// user.service.ts
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apollo: Apollo) { }

  signup(userData: { username: string, email: string, password: string }): Observable<User> {
    return this.apollo.mutate<any>({
      mutation: gql`
        mutation Signup($input: SignupInput!) {
          signup(input: $input) {
            id
            username
            email
            // Add other fields you need
          }
        }
      `,
      variables: {
        input: userData
      }
    }).pipe(
      map(result => result.data.signup)
    );
  }

  login(credentials: { usernameOrEmail: string, password: string }): Observable<User> {
    return this.apollo.query<any>({
      query: gql`
        query Login($usernameOrEmail: String!, $password: String!) {
          login(usernameOrEmail: $usernameOrEmail, password: $password) {
            id
            username
            email
            // Add other fields you need
          }
        }
      `,
      variables: {
        usernameOrEmail: credentials.usernameOrEmail,
        password: credentials.password
      }
    }).pipe(
      map(result => result.data.login)
    );
  }
}
