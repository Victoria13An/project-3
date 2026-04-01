import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { Hero } from "./components/Hero";
import { LoginForm } from "./components/LofinForm";
import { RegisterForm } from "./components/RegisterForm";
import { NavLink, Route, Routes } from "react-router";

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
									Крупнейшая коллекция природных артефактов
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
							<Hero />
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
