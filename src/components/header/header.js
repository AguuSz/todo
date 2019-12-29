import React from 'react';

function Header(props) {
	return (
		<nav className="navbar navbar-dark bg-dark sticky-top">
			<a className="text-white" href="/">Home</a>
			<a className="text-white" href="/signIn">Log in</a>
		</nav>
	)
}
export default Header;