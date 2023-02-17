import Container   from 'react-bootstrap/Container'
import Nav         from 'react-bootstrap/Nav'
import Navbar      from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Dropdowns = ({ dropdowns }) => dropdowns.map((dropdown) => 
    <NavDropdown key={dropdown.title} title={dropdown.title} id="basic-nav-dropdown">
        {
            dropdown.links.map((link) => (
                <NavDropdown.Item key={link.title} href={link.url}>{link.title}</NavDropdown.Item>
            ))
        }
    </NavDropdown>       
)

const Links = ({ links }) => links.map((link) => 
    <Nav.Link key={link.title} href={link.url}>{ link.title }</Nav.Link>
)

export default function Header() {
    const dropdowns = [
        {
            title: "Music",
            links: [
                {
                    title: "Releases",
                    url:   "/releases"
                },
                {
                    title: "Remixes",
                    url:   "/remixes"
                },
                {
                    title: "Covers",
                    url:   "/covers"
                },
                {
                    title: "Compilations",
                    url:   "/compilations"
                }
            ]
        },
        {
            title: "Machines",
            links: [
                {
                    title: "Slow Learner",
                    url:   "/slow-learner"
                },
                {
                    title: "Generative 1",
                    url:   "/generative-1"
                },
                {
                    title: "Joystick",
                    url:   "/joystick"
                }
    
            ]
        }
    ]
    
    const links = [
        {
            title: "Bio",
            url:   "/bio"
        }
    ]

    return (
        <Navbar bg="light" expand="lg" className="mb-30">
            <Container>
                <Navbar.Brand href="/">XOR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Dropdowns dropdowns={ dropdowns }/>
                    <Links links={ links } />
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

