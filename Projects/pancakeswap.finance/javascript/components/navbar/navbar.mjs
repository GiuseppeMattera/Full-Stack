export const navbar = () => {

  const $body = document.querySelector("body")
  const $scrollButton = document.querySelector("#btn-scroll");
  const $closeWarningButton = document.querySelectorAll(".close-warning");
  const $warningDiv = document.querySelectorAll(".warning");
  const $tranButton = document.querySelectorAll(".btn-tran");
  const $settingButton = document.querySelector("#setting_btn");
  const $closeSettingButton = document.querySelector("#close_setting_btn");
  const $containerBelowS = document.querySelector("#container__below_S");
  const $containerBelowSbg = document.querySelector("#container__below_S-bg");
  const $header = document.querySelector("#header")


  $settingButton.addEventListener("click", () => {
    $containerBelowS.classList.add("connect_wallet_appear");
    $body.classList.add("overflow-y-hidden")
  });
      
  const utility = {
    _disappearItemFade: (item) => {
      item.animate({ opacity: "0" }, 400, () => {
        item.classList.remove("connect_wallet_appear");
      });
    }
  } 
      
  $containerBelowSbg.addEventListener("click", () => {
    utility._disappearItemFade($containerBelowS);
    setTimeout(() => {
      $containerBelowS.classList.remove("connect_wallet_appear")
      $body.classList.remove("overflow-y-hidden")
    }, 300)
  });

  $closeSettingButton.addEventListener("click", () => {
    utility._disappearItemFade($containerBelowS);
    setTimeout(() => {
      $body.classList.remove("overflow-y-hidden")
      $containerBelowS.classList.remove("connect_wallet_appear")
    }, 300)
  });

  const setListeners = () => {
    const scrollTop = () => {
      window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        let scrollThreshold = 300;
  
        if (scrollY > scrollThreshold) {
          $scrollButton.classList.remove("hidden");
        } else {
          $scrollButton.classList.add("hidden");
        }
      });

      $scrollButton.addEventListener("click", () => {
        window.scrollTo(0, 0);
      });
    };

    const closingWarning = () => {
      $closeWarningButton.forEach((btn) => {
        btn.addEventListener("click", () => {
          $header.classList.remove("pt-37,644");
          $header.classList.add("pt-[78.576px]");
          $warningDiv.forEach((div) => {
            div.classList.add("hidden");
            div.classList.remove("max-mq3:flex");
          });
        });
      });
    };

    const buttonSelection = () => {
      const changeColor = (clickedIndex) => {
        $tranButton.forEach((button, index) => {
          if (index + 1 === clickedIndex) {
            button.classList.remove('btn_settingNOT');
            button.classList.add('btn_blue_setting');
          } else {
            button.classList.remove('btn_blue_setting');
            button.classList.add('btn_settingNOT');
          }
        });
      };

      $tranButton.forEach((button, index) => {
        button.addEventListener('click', () => changeColor(index + 1));
      });
    };

    const dropdownNet = () => {
      const selectMap = {
        "BNB Chain": {
          name: "BNB Chain",
          nameM:"BNB",
          imgSrc: "https://assets.pancakeswap.finance/web/chains/56.png",
        },
        Ethereum: {
          name: "Ethereum",
          nameM:"ETH",
          imgSrc: "https://assets.pancakeswap.finance/web/chains/1.png",
        },
        "Polygon zkEVM": {
          name: "Polygon zkEVM",
          nameM:"POL",
          imgSrc: "https://assets.pancakeswap.finance/web/chains/1101.png",
        },
        "zkSync Era": {
          name: "zkSync Era",
          nameM:"zkSync",
          imgSrc: "https://assets.pancakeswap.finance/web/chains/324.png",
        },
        "Arbitrum One": {
          name: "Arbitrum One",
          nameM:"ARB",
          imgSrc: "https://assets.pancakeswap.finance/web/chains/42161.png",
        },
        Linea: {
          name: "Linea",
          nameM: "Linea",
          imgSrc: "https://assets.pancakeswap.finance/web/chains/59144.png",
        },
        Base: {
          name: "Base",
          nameM: "Base",
          imgSrc: "https://assets.pancakeswap.finance/web/chains/8453.png",
        },
        opBNB: {
          name: "opBNB",
          nameM: "opBNB",
          imgSrc: "https://assets.pancakeswap.finance/web/chains/204.png",
        },
        Aptos: {
          name: "Aptos",
          nameM: "Aptos",
          imgSrc: "https://aptos.pancakeswap.finance/images/apt.png",
        },
      };
    
      const $menuItemList = document.querySelector("#menu-item-list");
      const $selectedValue = document.querySelector("#selected-value");
    
      const renderMenuList = () => {
        const last = Object.keys(selectMap).pop()
        console.log(last);
        console.log(selectMap);
        Object.entries(selectMap).forEach(([key, item], index) => {
          $menuItemList.innerHTML += `
            <li data-id="${key}" class="${last === key ? "rounded-b-lg" : ""} flex bg-white dark:bg-color_fourth items-center h-12 w-full px-4 hover:bg-color_nav_hover dark:hover:bg-color_darkM_hover text-color_text dark:text-white group/element flex gap-[10px] cursor-pointer mb-[5px] menu-item${index == 0 ? " active" : ""}">
              <img data-id="${key}" class="w-6 h-6 menu-item" src="${item.imgSrc}" />
              <span data-id="${key}" class="menu-item">${item.name}</span>
            </li>`;
        });
      };
    
      const setListeners = () => {
        document.addEventListener("click", (event) => {
          if (event.target.classList.contains("menu-item")) {
            const id = event.target.dataset.id;
            const media = window.matchMedia("(max-width: 1075px)")
            
            $selectedValue.innerHTML = `
              <img class="w-8 h-8 mr-3" src="${selectMap[id].imgSrc}" />
              <span class="text-color_text dark:text-white">${media.matches ? selectMap[id].nameM : selectMap[id].name}</span>
              <svg viewBox="0 0 24 24" color="text" width="24px" xmlns="http://www.w3.org/2000/svg"
              class="sc-bcPKhP cvmRst h-6 w-6 ml-1,5 mr-2 dark:fill-white">
              <path
              d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z">
              </path>
              </svg>
            `;
          
            $menuItemList.querySelectorAll("li").forEach(item => {
              if(item.dataset.id != id) {
                item.classList.remove("active");
              } else {
                item.classList.add("active");
              }
            })
          }
        });
      };
    
      const start = () => {
        renderMenuList();
        setListeners();
      };
    
      start();
    
    }
    scrollTop();
    closingWarning();
    buttonSelection();
    dropdownNet()
  };
  setListeners();
}
