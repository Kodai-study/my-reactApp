// ボタンを縦に並べたサイドバーを表示するコンポーネント
// デフォルトのHTML要素のみで構成する。
// ボタンを押すと、そのボタンに対応するコンポーネントを表示する。

import React, { useState, useEffect, useRef } from "react";
import "./SlideBar.css";

// ボタンをリストで表示するコンポーネントを作成する
const menuList = [
    { id: 1, name: "ホーム" },
    { id: 2, name: "登録" },
    { id: 3, name: "ログイン" },
];



// slideOut スライドバーと、子の要素全てに slideOut のアニメーションを適用する関数
// アニメーションにかかる時間は 0.5 秒
const SlideBar = () => {

    const sideBar = document.querySelector(".sideBar");
    const menuButton = document.querySelector(".menuButton");
    const ss = document.querySelector(".ss");
    const menuButtonList = document.querySelectorAll(".menuButton");
    sideBar.classList.add("slideOut");
    menuButton.classList.add("slideOut");
    ss.classList.add("slideOut");
    menuButtonList.forEach((menuButton) => {
        menuButton.classList.add("slideOut");
    });
};

// サイドバーを表示するコンポーネントを作成する
// ボタンを押すと、サイドバーが表示される
// ボタンを押すと、サイドバーが閉じる


const SamplePage_SideBar = () => {
    const [isToggled, setIsToggled] = useState(true);

    const handleClick = () => {
        setIsToggled(!isToggled);
    };

    // sidebarRef に、.sidebar クラスの要素を格納する
    const sideBarRef = useRef(null);

    const updateSidebarWidth = () => {
        const contentWidth = sideBarRef.current.querySelector(".menuList").scrollWidth;

        if (isToggled) {
            sideBarRef.current.style.width = `${contentWidth + 20}px`;
        } else {
            sideBarRef.current.style.width = "40px";
        }
    };

    useEffect(() => {
        window.addEventListener("resize", updateSidebarWidth);
        return () => {
            window.removeEventListener("resize", updateSidebarWidth);
        };
    }, []);


    // 画面が表示されてすぐ、updateSidebarWidth を実行する
    useEffect(() => {
        updateSidebarWidth();
    }, []);

    return (
        <div className="sideBar" ref={sideBarRef}
            style={{ width: isToggled ? '20%' : '30px' }}>
            <button className="menuButton" onClick={handleClick}>メニュー</button>
            <ul className="menuList">
                {menuList.map((menu) => {
                    return (
                        <li key={menu.id} className="menu">
                            <a href={`/${menu.name}/`}
                                // 文字サイズを変更する
                                style={{ fontSize: isToggled ? '40px' : '0', width: isToggled ? '100%' : '0' }}>
                                {isToggled ? menu.name : ''}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SamplePage_SideBar;