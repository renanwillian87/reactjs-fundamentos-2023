import { Post } from "./Post";
import { Header } from "./components/Header";

import './styles.css';

export function App() {
  return (
    <div>
      <Header/>
      <Post
        author="name 1"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minima eaque eveniet repellat voluptates laudantium adipisci fugit cumque similique perspiciatis praesentium, enim voluptas voluptatem recusandae libero accusantium rem sunt distinctio!"
      />
      <Post
        author="name 2"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minima eaque eveniet repellat voluptates laudantium adipisci fugit cumque similique perspiciatis praesentium, enim voluptas voluptatem recusandae libero accusantium rem sunt distinctio!"
      />
    </div>
  )
}
