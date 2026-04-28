import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { Cart } from "./components/Cart";
import { OlderForm } from "./components/OlderForm";
import { ProductForm } from "./components/OlderForm";
import { ProductCard } from "./components/ProductCard";
import { LoginForm } from "./components/LofinForm";
import { RegisterForm } from "./components/RegisterForm";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<header>
								<h1>
									Podval
								</h1>
								<div
									className="initial-buttons"
									id="initial-buttons"
								>
									<NavLink to="/login">
										<button id="btn-login">Вход</button>
									</NavLink>
									<NavLink to="/register">
										<button id="btn-register">
											Регистрация
										</button>
									</NavLink>
								</div>
							</header>
						</>
					}
				/>
				<Route path="/login" element={<LoginForm />} />
				<Route path="/register" element={<RegisterForm />} />
			</Routes>
			<footer></footer>
		</>
	);
}

export default App;
