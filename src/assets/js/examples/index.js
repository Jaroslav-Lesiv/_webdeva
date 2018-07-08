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
import {_notification} from '../notification'
const imageHandler = image => {
    image.addEventListener('mouseover', function (e) {
        const parentHeight = this.parentNode.offsetHeight
        this.style.transition = `${(this.offsetHeight / parentHeight) * 1.5 }s`
        this.style.transform = `translateY(-${this.offsetHeight - parentHeight}px)`
    })

    image.addEventListener('mouseleave', function (e) {
        this.style.transform = `translateY(0)`
    })
}
const snakeLink = a.cloneNode(true);
snakeLink.className = "snake";
snakeLink.target = '_blank'

const copyBtn = img.cloneNode()
setStyle(copyBtn, {
    width: '20px',
    height: '20px',
    margin: '0 auto',
    cursor: 'pointer',
})

copyBtn.setAttribute('title', 'Copy to clipboard')
copyBtn.alt = 'Copy to clipboard'
copyBtn.src = './img/icon/copy.png'
copyBtn.className = 'transition hover-animate-scale'
const dot = span.cloneNode();
dot.className = "dot";

const pageShapeUrl = span.cloneNode();
pageShapeUrl.className = "page-shape-url";

const pageShape = div.cloneNode();
pageShape.className = "page-shape";

pageShape.append(dot.cloneNode());
pageShape.append(dot.cloneNode());
pageShape.append(dot.cloneNode());

const json = JSON.stringify({
    sortKeys: ["all", "extension", "desktop", "mobile", "web"],
    examples: [{
            label: `NormalGame`,
            url: `https://normalgame.net`,
            sortKey: `web,react`,
            img: `normalgame.png`,
            use: [{
                    label: "React",
                    url: "https://reactjs.org/"
                },
                {
                    label: "redux",
                    url: "https://redux.js.org/"
                },
                {
                    label: "redux-saga",
                    url: "https://github.com/redux-saga/redux-saga"
                },
                {
                    label: "webpack",
                    url: "https://webpack.js.org/"
                },
                {
                    label: "styled-components",
                    url: "https://www.styled-components.com/"
                },
                {
                    label: "Laravel",
                    url: "http://laravel.su/"
                }
            ],
            description: `Using: React, Redux, Webpack, recompose, styled-components, redux-saga`
        },
        {
            label: `JustLabelMe`,
            url: `https://just-label.me`,
            sortKey: `web`,
            img: `justlabelme.png`,
            use: [{
                    label: "JavaScript",
                    url: "https://www.javascript.com/"
                },
                {
                    label: "stylus",
                    url: "http://stylus-lang.com/"
                },
                {
                    label: "gulp",
                    url: "https://gulpjs.com/"
                }
            ],
            description: `With JustLabelMe service, you’ll save a lot of time because you can print perfectly onto 4”x6” sticker labels, peel them and place them right on the package!`
        },
        {
            label: `JustLabelMe Extension`,
            url: `https://chrome.google.com/webstore/detail/justlabelme/bpfpmjjojjekdeliaeepcnccikcjpiph`,
            sortKey: `web,extension`,
            img: `justlabelme_ext.jpg`,
            use: [{
                    label: "React",
                    url: "https://reactjs.org/"
                },
                {
                    label: "redux",
                    url: "https://redux.js.org/"
                },
                {
                    label: "webpack",
                    url: "https://webpack.js.org/"
                },
                {
                    label: "styled-components",
                    url: "https://www.styled-components.com/"
                }
            ],
            description: `Provides the ability to transform & print FBA shipping and product labels while you are on Amazon Seller Central with a single click`
        },
        {
            label: `Widin`,
            url: `https://codingchipmunks.com/widin/`,
            sortKey: `web`,
            img: `widin.png`,
            use: [{
                    label: "JavaScript",
                    url: "https://www.javascript.com/"
                },
                {
                    label: "stylus",
                    url: "http://stylus-lang.com/"
                },
                {
                    label: "pug (jade)",
                    url: "https://pugjs.org/api/getting-started.html"
                },
                {
                    label: "gulp",
                    url: "https://gulpjs.com/"
                }
            ],
            description: `WidinOnline is a decentralized multifaceted market place set to unify the entire commerce landscape of Africa into a sigle inegrated e-commerce platform`
        },
        {
            label: `nomis`,
            url: `https://nomis.com.ua/`,
            sortKey: `web`,
            img: `nomis.png`,
            use: [{
                    label: "JavaScript",
                    url: "https://www.javascript.com/"
                },
                {
                    label: "jQuery",
                    url: "https://jquery.com/"
                },
                {
                    label: "sass",
                    url: "https://sass-lang.com/"
                },
                {
                    label: "blade",
                    url: "http://laravel.su/docs/5.3/blade"
                },
                {
                    label: "gulp",
                    url: "https://gulpjs.com/"
                },
                {
                    label: "Laravel",
                    url: "http://laravel.su/"
                }
            ],
            description: `Check the reliability and solvency of the counterparty`
        },
        {
            label: `Time tracker`,
            url: `https://chrome.google.com/webstore/detail/time-tracker/hanofejodfbhellaldjonedfpejjcpnl`,
            sortKey: `web,extension`,
            img: `time_tracker.png`,
            use: [{
                    label: "JavaScript",
                    url: "https://www.javascript.com/"
                },
            ],
            description: `Time Tracker which tracks where you spend time on the web and presents the stats in a useful and intuitive way.`
        }
    ]
});

const data = JSON.parse(json);
const _example = document.querySelector("#examples");

// const _sortBtn = _example.querySelectorAll('nav ul li btn.btn')

// _sortBtn.forEach( btn => {
//     btn.addEventListener('click', function() {
//         const sortKey = this.dataset.sort
//     })
// } )

const _sortExamples = (sortKey = "") =>
    JSON.parse(json).filter(item =>
        item.sortKey.split(",").some(key => key === sortKey)
    );

const _renderExamples = json => {
    const examplesNode = document.querySelector("#examples .examples");
    const exampleNavigation = nav.cloneNode(true);
    exampleNavigation.className = "flex flex-align-center flex-justify-sa";
    const exampleNavigationControl = ul.cloneNode(true);
    exampleNavigationControl.className =
        "flex flex-align-center flex-justify-sa mb-20";
    const exampleNavigationControlItem = li.cloneNode(true);
    const exampleNavigationControlButton = button.cloneNode(true);
    exampleNavigationControlButton.className = "btn text-uppercase";

    const exampleList = ul.cloneNode(true);
    exampleList.className =
        "examples-content flex flex-align-start flex-justify-sa";

    const exampleListItem = li.cloneNode(true);
    exampleListItem.className = `card`;

    const exampleListItemMedia = div.cloneNode(true);
    exampleListItemMedia.className = "card-media";

    const exampleListItemContent = div.cloneNode(true);
    exampleListItemContent.className = `card-content`;

    const cardLink = snakeLink.cloneNode(true);
    cardLink.className = "card-label snake";

    const cardDescription = p.cloneNode(true);
    cardDescription.className = "card-description";

    data.examples.forEach(example => {
        const _cardDescription = cardDescription.cloneNode(true);
        _cardDescription.innerHTML = example.description;

        const _cardLink = cardLink.cloneNode(true);
        _cardLink.href = example.url;
        _cardLink.innerHTML = example.label;

        // const _cardDescription = cardDescription.cloneNode(true)

        const _strong = strong.cloneNode(true);
        _strong.append(_cardLink);

        const _use = strong.cloneNode(true);

        const _useWrapper = p.cloneNode();
        _use.innerHTML = "Use: ";
        _useWrapper.append(_use);

        example.use.forEach((use, idx) => {
            const _link = a.cloneNode();
            _link.href = use.url;
            _link.className = "snake card-link";
            _link.target = "_blank";
            _link.innerHTML = `${use.label}${
          idx === example.use.length - 1 ? "" : ","
        }`;
            _link.style.display = "inline-flex";
            _link.style.flexWrap = "wrap";
            _useWrapper.append(_link);
        });

        // _cardDescription.innerHTML = example.description

        const _cardMedia = exampleListItemMedia.cloneNode(true);
        const _img = img.cloneNode(true);
        _img.src = `./img/examples/${example.img}`;
        imageHandler(_img)

        

        const _pageShapeUrl = pageShapeUrl.cloneNode();
        _pageShapeUrl.innerHTML = example.url;

        const _copy = copyBtn.cloneNode()
        _copy.addEventListener('click', () => {
            const range = document.createRange();
            range.selectNode(_pageShapeUrl);
            window.getSelection().addRange(range);
            try {
            // Теперь, когда мы выбрали текст , выполним команду копирования
                const successful = document.execCommand("copy");
                
                const mess = successful ? "Successful" : "Failed";
                _notification.add({ label: `Copied!`, mess })
            } catch (err) {
                console.log("Oops, unable to copy");
            }

            // Снятие выделения - ВНИМАНИЕ: вы должны использовать
            // removeRange(range) когда это возможно
            window.getSelection().removeRange(range);
        })

        const _pageShape = pageShape.cloneNode(true);
        _pageShape.append(_pageShapeUrl, _copy);

        
        _cardMedia.append(_img);

        const _cardContent = exampleListItemContent.cloneNode(true);

        _cardContent.append(_strong);
        _cardContent.append(_useWrapper);
        _cardContent.append(_cardDescription);

        const _exampleListItem = exampleListItem.cloneNode(true);
        _exampleListItem.dataset.sort = example.sortKey;

        _exampleListItem.append(_pageShape);
        _exampleListItem.append(_cardMedia);
        _exampleListItem.append(_cardContent);

        exampleList.append(_exampleListItem);
    });

    const checkSort = sortKey => {
        exampleList.querySelectorAll(".card").forEach(card => {
            // console.log(card, card.dataset.sort)
            if (
                card.dataset.sort.split(",").some(key => key === sortKey) ||
                sortKey === "all"
            ) {
                card.classList.add("show_scale");
                card.classList.remove("hide_scale");
            } else {
                card.classList.remove("show_scale");
                card.classList.add("hide_scale");
            }
            examplesNode
                .querySelectorAll("ul li button[data-sort]")
                .forEach(btn => btn.classList.remove("btn-primary"));
            examplesNode
                .querySelector(`ul li button[data-sort="${sortKey}"]`)
                .classList.add("btn-primary");
        });
    };
    data.sortKeys.forEach((sortKey, key) => {
        const _exampleNavigationControlButton = exampleNavigationControlButton.cloneNode(
            true
        );
        _exampleNavigationControlButton.innerHTML = sortKey;
        _exampleNavigationControlButton.dataset.sort = sortKey;
        if (!key) _exampleNavigationControlButton.classList.add("btn-primary");

        _exampleNavigationControlButton.addEventListener("click", function () {
            checkSort(sortKey);
        });
        const _exampleNavigationControlItem = exampleNavigationControlItem.cloneNode(
            true
        );
        _exampleNavigationControlItem.append(_exampleNavigationControlButton);
        exampleNavigationControl.append(_exampleNavigationControlItem);
    });

    examplesNode.append(exampleNavigationControl);
    examplesNode.append(exampleList);
};

_renderExamples(data);

