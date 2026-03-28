import React, { useState } from 'react';
import { images } from '../../constants';
import './tabs.scss';

const Tabs = () => {
    const [btnActive, setBtnActive] = useState(1);
    const btns = tabBtns;
    const contents = tabContents;

    const tabsBtns = btns.map((btn) =>
        <li key={btn.id} className={btnActive === btn.id ? 'tabs__btns-item current-tab' : 'tabs__btns-item'} onClick={() => (setBtnActive(btn.id))}>
            <img className='tabs__btns-img' src={btn.img} alt={btn.title}/>
            <span className='tabs__btns-text'>{btn.title}</span>
        </li>
    );

    const tabscontens = contents.map((content) =>
        <li key={content.id} className={btnActive === content.id ? 'tabs__content-item tab-active' : 'tabs__content-item'}>
            <ul className="tabs__info-list">
                {
                    content.contentData.map((item,i) => {
                        return (
                            <li key={i} className="tabs__info-item">
                                <span className='tabs__info-price'>{item.price}</span>
                                <span className='tabs__info-title'>{item.title}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </li>
    );

    return (
        <>
            <div className="tabs container">
                <ul className="tabs__btns-list">
                    {tabsBtns}
                </ul>

                <ul className="tabs__content-list">
                    {tabscontens}
                </ul>
            </div>
        </>
    )
}

export default Tabs;


const tabBtns = [
    {
        id: 1,
        title: "Барбер",
        img: images.tab1,
        active: true
    },
    {
        id: 2,
        title: "Старший",
        img: images.tab2,
        active: false
    },
    {
        id: 3,
        title: "Топ",
        img: images.tab3,
        active: false
    }
];

const tabContents = [
    {
        id: 3,
        active: true,
        contentData: [
            {
                title: "Стрижка",
                price: "750"
            },
            {
                title: "Стрижка машинкою",
                price: "650"
            },
            {
                title: "Подовжена стрижка",
                price: "750"
            },
            {
                title: "Стрижка+моделювання бороди",
                price: "950"
            },
            {
                title: "Моделювання бороди",
                price: "400"
            },
            {
                title: "Батько та син",
                price: "1000"
            },
            {
                title: "Батько та два сини",
                price: "1400"
            },
            {
                title: "Дитяча стрижка (до 12 років)",
                price: "650"
            },
            {
                title: "Стрижка наголо + моделювання бороди",
                price: "750"
            }
        ]
    },
    {
        id: 2,
        active: false,
        contentData: [
            {
                title: "Стрижка",
                price: "700"
            },
            {
                title: "Стрижка машинкою",
                price: "600"
            },
            {
                title: "Подовжена стрижка",
                price: "700"
            },
            {
                title: "Стрижка+моделювання бороди",
                price: "850"
            },
            {
                title: "Моделювання бороди",
                price: "400"
            },
            {
                title: "Батько та син",
                price: "950"
            },
            {
                title: "Батько та два сини",
                price: "1150"
            },
            {
                title: "Дитяча стрижка (до 12 років)",
                price: "650"
            },
            {
                title: "Стрижка наголо + моделювання бороди",
                price: "750"
            }
        ]
    },
    {
        id: 1,
        active: false,
        contentData: [
            {
                title: "Стрижка",
                price: "400"
            },
            {
                title: "Стрижка машинкою",
                price: "350"
            },
            {
                title: "Подовжена стрижка",
                price: "-\\-"
            },
            {
                title: "Стрижка+моделювання бороди",
                price: "500"
            },
            {
                title: "Моделювання бороди",
                price: "250"
            },
            {
                title: "Батько та син",
                price: "-\\-"
            },
            {
                title: "Батько та два сини",
                price: "-\\-"
            },
            {
                title: "Дитяча стрижка (до 12 років)",
                price: "350"
            },
            {
                title: "Стрижка наголо + моделювання бороди",
                price: "450"
            }
        ]
    }
];
