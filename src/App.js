import Sidebar from "./components/sidebar/Sidebar.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import "./app.css";
import Home from "./pages/home/Home.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./pages/userList/UserList.jsx";
import User from "./pages/user/User.jsx";
import NewUser from "./pages/newUser/NewUser.jsx";
import ProductList from "./pages/productList/ProductList.jsx";
import Product from "./pages/product/Product.jsx";
import NewProduct from "./pages/newProduct/NewProduct.jsx";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  const isAdmin  = useSelector(state => state.user.currentUser.isAdmin)
  return (
    <Router className="App">
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      {isAdmin !== null && isAdmin && (
      <>
      <Topbar />
      <div className="container">
        <Sidebar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
      </div>
      </>
      )}
      </Switch>
    </Router>
  );
}

export default App;
