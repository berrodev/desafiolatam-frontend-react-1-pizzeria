import './App.css';
import CardPizza from './components/CardPizza';

function App() {
  return (
    <>
      <nav className="bg-slate-800 text-white flex justify-between w-full px-4">
        <div className="flex gap-2">
          <a href="/">🍕Home</a>
          <a href="/profile">🔒Profile</a>
          <a href="/logout">🔒Logout</a>
          <a href="/login">🔐Login</a>
          <a href="/register">🔐Register</a>
        </div>
        <a href="/total">🛒Total: $20.000</a>
      </nav>
      <header>
        <h1>Pizza & Chill</h1>
        <h2>Where every slice becomes your best plan.</h2>
      </header>
      <main>
        <section>
          <CardPizza
            name="Napolitana"
            price={5950}
            ingredients={['mozzarella', 'tomates', 'jamón', 'orégano']}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9
080-784dcc87ec2c"
          />
          <CardPizza
            name="Española"
            price={6950}
            ingredients={['mozzarella', 'gorgonzola', 'parmesano', 'provolone']}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-
a1c6-8c57bc388fab"
          />
          <CardPizza
            name="Pepperoni"
            price={6950}
            ingredients={['mozzarella', 'pepperoni', 'orégano']}
            img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.co
m/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-
ac54-90f6c31eb3e3"
          />
        </section>
      </main>

      <footer>© 2025 - Pizza & Chill - All rights reserved.</footer>
    </>
  );
}

export default App;
