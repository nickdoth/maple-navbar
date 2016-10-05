var mn = require('..');

mn.createNavbar(document.getElementById('sample-navbar'), [
	mn.NavLink({ caption: 'Index', href: './' }),
	mn.NavLink({ caption: 'Some', href: './others' }),
])