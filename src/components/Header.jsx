import "./components-style/Header.css";
import Logo from "../assets/img/Logo.svg";
import Search from "../assets/img/Search.svg";
import Cart from "../assets/img/cart.svg";
export default function Header() {
	return <div className="header-bg">
		<div className="wrapper header">
			<a href="#"><img src={Logo} alt="Logo" /></a>
			<nav className="header-links" >
				<a href=""> Home </a>
				<a href=""> Products </a>
				<a href=""> About Us</a>
				<a href=""> Contact Us </a>
			</nav>
			<div className="header-right">
				<div className="header-search">
					Search
					<img src={Search} alt="Search" />
				</div>

				<div className="shopcart">
					<a href=""> <img src={Cart} alt="Cart" />
						<span className="number"> 3</span> </a>
				</div>

			</div>
		</div>
	</div>;
}