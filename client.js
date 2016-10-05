require('./jquery.maple-navbar');

var Navbar = require('./components/navbar.ejs');
var NavLink = require('./components/navbar-link.ejs');
var NavMenu = require('./components/navbar-menu.ejs');
var NavModal = require('./components/navbar-modal.ejs');

function createNavbar(rootElem, items) {
	rootElem.outerHTML = Navbar({items: items});
}

module.exports = {
	createNavbar: createNavbar,
	Navbar: Navbar,
	NavLink: NavLink,
	NavMenu: NavMenu,
	NavModal: NavModal
};