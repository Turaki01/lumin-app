import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Products from './pages/products/products.component';


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    // eslint-disable-next-line
    graphqlErrors.map(({ message }) => {
      alert(`Graphql error ${message}`)
    })
  }
})


const link = from([
  errorLink,
  new HttpLink({
    uri: "https://pangaea-interviews.now.sh/api/graphql"
  })
])


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Products} />
          </Switch>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
