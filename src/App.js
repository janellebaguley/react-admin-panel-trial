import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from "./Components/User.js";
import { PostList } from "./Components/Post.js";
import { PostEdit } from "./Components/EditPost.js";
import { PostCreate } from "./Components/CreatePost.js";
import { Dashboard } from "./Components/Dashboard.js";
import authProvider from './Components/authProvider'

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dashboard={Dashboard} authProvider = {authProvider} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
  </Admin>
);

export default App;
