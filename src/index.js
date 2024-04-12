import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import SELLPRODUCT from './views/sell-product'
import Chatroom from './views/chatroom'
import CreateRequest from './views/create-request'
import Login from './views/login'
import BudgetBuddy from './views/budget-buddy'
import Home from './views/home'
import ProductDetailsMouse from './views/product-details-mouse'
import RequestsSent from './views/requests-sent'
import StudyPartner from './views/study-partner'
import Marketplace from './views/marketplace'
import ResourceFinder from './views/resource-finder'
import NavigationMap from './views/navigation-map'
import ListTry from './views/list-try'
import ProductDetailsBooks from './views/product-details-books'
import PendingRequests from './views/pending-requests'
import Register from './views/register'
import CustomPackagePage from './views/custom-package-page'
import SubscriptionPackage from './views/subscription-package'
import Rewards from './views/rewards'
import NotFound from './views/not-found'
import Paypal from './views/paypal'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={SELLPRODUCT} exact path="/sell-product" />
        <Route component={Chatroom} exact path="/chatroom" />
        <Route component={CreateRequest} exact path="/create-request" />
        <Route component={Login} exact path="/login" />
        <Route component={BudgetBuddy} exact path="/budget-buddy" />
        <Route component={Home} exact path="/" />
        <Route
          component={ProductDetailsMouse}
          exact
          path="/product-details-mouse"
        />
        <Route component={RequestsSent} exact path="/requests-sent" />
        <Route component={StudyPartner} exact path="/study-partner" />
        <Route component={Marketplace} exact path="/marketplace" />
        <Route component={ResourceFinder} exact path="/resource-finder" />
        <Route component={NavigationMap} exact path="/navigation-map" />
        <Route component={ListTry} exact path="/list-try" />
        <Route
          component={ProductDetailsBooks}
          exact
          path="/product-details-books"
        />
        <Route component={PendingRequests} exact path="/pending-requests" />
        <Route component={Register} exact path="/register" />
        <Route
          component={CustomPackagePage}
          exact
          path="/custom-package-page"
        />
        <Route
          component={SubscriptionPackage}
          exact
          path="/subscription-package"
        />
        <Route component={Paypal} exact path="/paypal" />
        <Route component={Rewards} exact path="/rewards" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
