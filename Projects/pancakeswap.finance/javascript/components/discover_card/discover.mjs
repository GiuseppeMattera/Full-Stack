export const discover = () => {

    const $left_panel = document.querySelector("#left_panel");
    const $right_panel = document.querySelector("#right_panel");

    let h = 0; //apertura verticale pannello sinistra
    let hh = 0;//apertura verticale pannello destra
    let x = 0;//apertura orizzontale pannello sopra
    let xx = 0; //apertura orizzontale pannello sotto

//apertura verticale pannello sinistra-------------------------------
    setTimeout(( )=> {
        const leftPanel = setInterval(() => {
            $left_panel.classList.remove(`h-[${h}px]`);
            h += 50;
            $left_panel.classList.add(`h-[${h}px]`);
            if (h === 250) {
                 clearInterval(leftPanel);
            }
        }, 1)    
    }, 1000)
    
    //apertura verticale pannello sinistra-------------------------------

    //apertura verticale pannello destra----------------------------------
    setTimeout(( )=> {
        const rightPanel = setInterval(() => {
            $right_panel.classList.remove(`h-[${hh}px]`);
            hh += 50;
            $right_panel.classList.add(`h-[${hh}px]`);
            if (hh === 250) {
                clearInterval(rightPanel);
            }
        }, 1)    
    }, 1700)
    //apertura verticale pannello destra----------------------------------

    //apertura orizzontale pannello sopra---------------------------------
    setTimeout(( )=> {
        const leftPanel = setInterval(() => {
            $left_panel.classList.remove(`max-[968px]:w-[${x}px]`);
            x += 50;
            $left_panel.classList.add(`max-[968px]:w-[${x}px]`);
            if (x === 800) {
                clearInterval(leftPanel);
            }
        }, 1)    
    }, 1500)
    //apertura orizzontale pannello sopra---------------------------------

    //apertura orizzontale pannello sotto---------------------------------
    setTimeout(( )=> {
        const rightPanel = setInterval(() => {
            $right_panel.classList.remove(`max-[968px]:w-[${xx}px]`);
            xx += 50;
            $right_panel.classList.add(`max-[968px]:w-[${xx}px]`);
            if (xx === 800) {
                clearInterval(rightPanel);
            }
        }, 1)    
    }, 2500)
    //apertura orizzontale pannello sotto---------------------------------
}
