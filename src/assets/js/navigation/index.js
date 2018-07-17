import {
    div,
    span,
    nav,
    ul,
    li,
    strong,
    a,
    h3,
    p,
    img,
    button,
    setStyle
} from '../helper'


const navLinks = document.querySelectorAll("#nav ul.list li a");

const ScrollControl = class {
    constructor({
        links = []
    }) {
        this.hash = null;

        this.links = [...links].map(link => ({
            selector: link,
            hash: link.getAttribute("href")
        }));
        this.nodeList = [
            ...this.links.map(link => ({
                selector: document.querySelector(link.hash),
                hash: link.hash
            }))
        ];

        window.addEventListener("scroll", _ => this.sectionHandler());
        this.linksHandler();
    }

    sectionHandler() {
        const windowHeight = document.documentElement.clientHeight;
        for (let node of this.nodeList) {
            const coords = node.selector.getBoundingClientRect();
            const isCurrent = coords.top >= 0 || coords.bottom - 40 > 0;
            if (isCurrent) {
                this.hash = node.hash;
                this.updateNavigation();
                break;
            }
        }
    }

    linksHandler() {
        this.links.forEach(link => {
            link.selector.addEventListener("click", event => {
                event.preventDefault();
                this.hash = link.hash;
                this.updateSections();
            });
        });
    }
    updateNavigation() {
        this.links.forEach(
            link =>
            link.hash === this.hash ?
            link.selector.classList.add("btn-primary") :
            link.selector.classList.remove("btn-primary")
        );
    }

    updateSections() {
        window.scrollTo({
            top: this.nodeList.find(node => node.hash === this.hash).selector
                .offsetTop,
            behavior: "smooth"
        });
    }
};
new ScrollControl({
    links: navLinks
});

const MobileControl = class {
    constructor() {
        this.isActive = false
        this.button = document.querySelector('#nav-toggle_menu')
        this.nav = document.querySelector('#nav')
        this.button.addEventListener('click', () => this.toggle())
    }

    toggle() {
        this.isActive = !this.isActive
        this.render()
    }

    render() {
        if (this.isActive) {
            this.button.classList.add('active')
            this.nav.classList.add('active')
            console.log(this.button, this.nav, 'true 222')
        } else {
            this.button.classList.remove('active')
            this.nav.classList.remove('active')
            console.log(this.button, this.nav,'false 333')
        }

    }
}

new MobileControl()