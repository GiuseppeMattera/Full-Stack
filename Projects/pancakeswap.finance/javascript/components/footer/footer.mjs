export const footer = () => {

    const $html = document.querySelector("#html");
    const $containerBelowBg = document.querySelector("#container__below-bg");
    const $darkModeLabel = document.querySelectorAll(".darkmode-label");
    const $darkModeInputFooter = document.querySelector("#darkmode-toggle-footer");
    const $darkModeInputNav = document.querySelector("#darkmode-toggle-nav");
    const $containerBelow = document.querySelector("#container__below");
    const $connectWalletBtn = document.querySelectorAll(".connect_wallet_btn");
    const $containerBelowBtnOne = document.querySelector("#container__below-btn-one");
    const $containerBelowBtnTwo = document.querySelector("#container__below-btn-two");
    const $containerBelowBoxFirst = document.querySelector("#container__below-box-first");
    const $containerBelowBoxSecond = document.querySelector("#container__below-box-second");
    const $containerBelowBoxSecondOne = document.querySelector("#container__below-box-second-one");
    const $containerBelowBoxSecondTwo = document.querySelector("#container__below-box-second-two");
    const $containerBelowBoxSecondBtnOne = document.querySelector("#container__below-box-second-btn-one");
    const $containerBelowBoxSecondBtnTwo = document.querySelector("#container__below-box-second-btn-two");
    const $containerBelowBoxFirstBtns = document.querySelectorAll(".container__below-box-first-btn-hide");
    const $containerBelowBoxFirstBtnMore = document.querySelector("#container__below-box-first-btn-more");

    // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //     document.documentElement.classList.add('dark')
    //     $darkModeInputFooter.setAttribute("checked", "true");
    //     $darkModeInputNav.setAttribute("checked", "true");
    //   } else {
    //     document.documentElement.classList.remove('dark')
    //     $darkModeInputFooter.setAttribute("checked", "false");
    //     $darkModeInputNav.setAttribute("checked", "false");
    //   }

    //   // Whenever the user explicitly chooses light mode
    //   localStorage.theme = 'light'

    //   // Whenever the user explicitly chooses dark modes
    //   localStorage.theme = 'dark'

    //   // Whenever the user explicitly chooses to respect the OS preference
    //    localStorage.removeItem('theme')

    const utilities = {
        activeDarkMode: () => {
            // $html.classList.toggle("dark");
            $html.classList.toggle('dark')
        },

        appearItem: (item) => {
            item.classList.remove("hidden");
        },

        disappearItem: (item) => {
            item.classList.add("hidden");
        },

        disappearItemFade: (item) => {
            item.animate({ opacity: "0" }, 400, () => {
                item.classList.remove("connect_wallet_appear");
            });
        },

        transformFadeLeft: (item) => {
            item.animate({ transform: "translateX(-150%)", transition: "transform 0.5s ease-in-out" }, 300, () => {
                item.classList.add("hidden");
            });
        },

        transformFadeRight: (item) => {
            item.animate({ transform: "translateX(+150%)", transition: "transform 0.5s ease-in-out" }, 300, () => {
                item.classList.add("hidden");
            });
        },

        buttonMoreToggle: () => {
            $containerBelowBoxFirstBtns.forEach((btn) => {
                btn.classList.toggle("hidden");
            })

            $containerBelowBoxFirstBtnMore.classList.toggle("hidden");
        },

        checkWalletUI: () => {
            if ($html.classList.contains("dark")) {
                if (!$containerBelowBoxFirst.classList.contains("hidden")) {
                    $containerBelowBtnOne.classList.add("dark:bg-color_dark_grey_tab_on");
                    $containerBelowBtnOne.classList.remove("dark:bg-color_darkM_text_nav");
                    $containerBelowBtnOne.classList.remove("dark:text-color_dark_grey_tab_on");
                    $containerBelowBtnOne.classList.add("dark:text-color_darkM_text_nav");
                    $containerBelowBtnTwo.classList.remove("dark:bg-color_dark_grey_tab_on");
                    $containerBelowBtnTwo.classList.add("dark:bg-color_darkM_text_nav");
                    $containerBelowBtnTwo.classList.remove("dark:text-color_darkM_text_nav");
                    $containerBelowBtnTwo.classList.add("dark:text-color_dark_grey_tab_on");

                } else if (!$containerBelowBoxSecond.classList.contains("hidden")) {
                    $containerBelowBtnTwo.classList.remove("dark:bg-color_darkM_text_nav");
                    $containerBelowBtnTwo.classList.add("dark:bg-color_dark_grey_tab_on");
                    $containerBelowBtnTwo.classList.remove("dark:text-color_dark_grey_tab_on");
                    $containerBelowBtnTwo.classList.add("dark:text-color_darkM_text_nav");
                    $containerBelowBtnOne.classList.remove("dark:bg-color_dark_grey_tab_on");
                    $containerBelowBtnOne.classList.add("dark:bg-color_darkM_text_nav");
                    $containerBelowBtnOne.classList.remove("dark:text-color_darkM_text_nav");
                    $containerBelowBtnOne.classList.add("dark:text-color_dark_grey_tab_on");

                    if (!$containerBelowBoxSecondOne.classList.contains("hidden")) {
                        $containerBelowBoxSecondBtnTwo.classList.remove("dark:bg-color_title_settings");
                        $containerBelowBoxSecondBtnTwo.classList.add("dark:bg-[#262130]");
                        $containerBelowBoxSecondBtnOne.classList.remove("dark:bg-[#262130]");
                        $containerBelowBoxSecondBtnOne.classList.add("dark:bg-color_title_settings");


                    } else if (!$containerBelowBoxSecondTwo.classList.contains("hidden")) {
                        $containerBelowBoxSecondBtnOne.classList.remove("dark:bg-color_title_settings");
                        $containerBelowBoxSecondBtnOne.classList.add("dark:bg-[#262130]");
                        $containerBelowBoxSecondBtnTwo.classList.remove("dark:bg-[#262130]");
                        $containerBelowBoxSecondBtnTwo.classList.add("dark:bg-color_title_settings");

                    }
                }

            } else {
                if (!$containerBelowBoxFirst.classList.contains("hidden")) {
                    $containerBelowBtnOne.classList.add("bg-color_new_gray");
                    $containerBelowBtnOne.classList.remove("bg-color_text_sub");
                    $containerBelowBtnOne.classList.remove("text-color_tertiary");
                    $containerBelowBtnOne.classList.add("text-color_text_sub");
                    $containerBelowBtnTwo.classList.remove("bg-color_new_gray");
                    $containerBelowBtnTwo.classList.add("bg-color_text_sub");
                    $containerBelowBtnTwo.classList.remove("text-color_text_sub");
                    $containerBelowBtnTwo.classList.add("text-color_tertiary");

                } else if (!$containerBelowBoxSecond.classList.contains("hidden")) {
                    $containerBelowBtnOne.classList.add("text-color_tertiary");
                    $containerBelowBtnOne.classList.remove("text-color_text_sub");
                    $containerBelowBtnOne.classList.remove("bg-color_new_gray");
                    $containerBelowBtnOne.classList.add("bg-color_text_sub");
                    $containerBelowBtnTwo.classList.remove("text-color_tertiary");
                    $containerBelowBtnTwo.classList.add("text-color_text_sub");
                    $containerBelowBtnTwo.classList.add("bg-color_new_gray");
                    $containerBelowBtnTwo.classList.remove("bg-color_text_sub");

                    if (!$containerBelowBoxSecondOne.classList.contains("hidden")) {
                        $containerBelowBoxSecondBtnOne.classList.add("bg-color_title_settings");
                        $containerBelowBoxSecondBtnTwo.classList.remove("bg-color_title_settings");

                    } else if (!$containerBelowBoxSecondTwo.classList.contains("hidden")) {
                        $containerBelowBoxSecondBtnTwo.classList.add("bg-color_title_settings");
                        $containerBelowBoxSecondBtnOne.classList.remove("bg-color_title_settings");

                    }
                }
            }
        },
    }

    $darkModeInputFooter.addEventListener("change", () => {
        $darkModeInputNav.checked = $darkModeInputFooter.checked;
    })

    $darkModeInputNav.addEventListener("change", () => {
        $darkModeInputFooter.checked = $darkModeInputNav.checked;
    })

    $connectWalletBtn.forEach((button) => {
        button.addEventListener("click", () => {
            $containerBelow.classList.remove("hidden");
            $containerBelow.classList.add("connect_wallet_appear");
            document.body.classList.add("overflow-y-hidden");
        })
    });

    $darkModeLabel.forEach((button) => {
        button.addEventListener("click", () => {
            utilities.activeDarkMode();
            utilities.checkWalletUI();
        })
    });

    $containerBelowBtnTwo.addEventListener("click", () => {
        utilities.disappearItem($containerBelowBoxFirst);
        utilities.appearItem($containerBelowBoxSecond);
        utilities.checkWalletUI();
    });

    $containerBelowBtnOne.addEventListener("click", () => {
        utilities.disappearItem($containerBelowBoxSecond);
        utilities.appearItem($containerBelowBoxFirst);
        utilities.checkWalletUI();
    });

    $containerBelowBoxSecondBtnTwo.addEventListener("click", () => {
        utilities.transformFadeLeft($containerBelowBoxSecondOne);

        setTimeout(() => {
            utilities.disappearItem($containerBelowBoxSecondOne);
            utilities.appearItem($containerBelowBoxSecondTwo);
            utilities.checkWalletUI();
        }, 100);
    });

    $containerBelowBoxSecondBtnOne.addEventListener("click", () => {
        utilities.transformFadeRight($containerBelowBoxSecondTwo);

        setTimeout(() => {
            utilities.disappearItem($containerBelowBoxSecondTwo);
            utilities.appearItem($containerBelowBoxSecondOne);
            utilities.checkWalletUI();
        }, 100);
    });

    $containerBelowBoxFirstBtnMore.addEventListener("click", () => {
        utilities.buttonMoreToggle();
    });

    $containerBelowBg.addEventListener("click", () => {
        utilities.disappearItemFade($containerBelow);

        setTimeout(() => {
            document.body.classList.remove("overflow-y-hidden")
            $containerBelow.classList.remove("connect_wallet_appear")
            utilities.disappearItem($containerBelow);

            if ($containerBelowBoxFirstBtnMore.classList.contains("hidden")) {
                utilities.buttonMoreToggle();
            }
        }, 390)
    });
}
