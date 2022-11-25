(() => {
    const refs = {
        openManuBtn: document.querySelector("[data-manu-carafe-open]"),
        closeManuBtn: document.querySelector("[data-manu-carafe-close]"),
        manu: document.querySelector("[data-manu-carafe]"),
    };

    refs.openManuBtn.addEventListener("click", toggleManu);
    refs.closeManuBtn.addEventListener("click", toggleManu);

    function toggleManu() {
        refs.manu.classList.toggle("is-hidden");
    }
    })();

(() => {
    const refs = {
        openManuBtn: document.querySelector("[data-manu-ice-cream-open]"),
        closeManuBtn: document.querySelector("[data-manu-ice-cream-close]"),
        manu: document.querySelector("[data-manu-ice-cream]"),
    };

    refs.openManuBtn.addEventListener("click", toggleManu);
    refs.closeManuBtn.addEventListener("click", toggleManu);

    function toggleManu() {
        refs.manu.classList.toggle("is-hidden");
    }
    })();


    (() => {
        const refs = {
            openManuBtn: document.querySelector("[data-manu-ice-coffee-open]"),
            closeManuBtn: document.querySelector("[data-manu-ice-coffee-close]"),
            manu: document.querySelector("[data-manu-ice-coffee]"),
        };
    
        refs.openManuBtn.addEventListener("click", toggleManu);
        refs.closeManuBtn.addEventListener("click", toggleManu);
    
        function toggleManu() {
            refs.manu.classList.toggle("is-hidden");
        }
        })();

        (() => {
            const refs = {
                openManuBtn: document.querySelector("[data-manu-milkshakes-open]"),
                closeManuBtn: document.querySelector("[data-manu-milkshakes-close]"),
                manu: document.querySelector("[data-manu-milkshakes]"),
            };
        
            refs.openManuBtn.addEventListener("click", toggleManu);
            refs.closeManuBtn.addEventListener("click", toggleManu);
        
            function toggleManu() {
                refs.manu.classList.toggle("is-hidden");
            }
            })();

    (() => {
        const refs = {
            openManuBtn: document.querySelector("[data-manu-description-open]"),
            closeManuBtn: document.querySelector("[data-manu-description-close]"),
            manu: document.querySelector("[data-manu-description]"),
        };

        refs.openManuBtn.addEventListener("click", toggleManu);
        refs.closeManuBtn.addEventListener("click", toggleManu);
    
        function toggleManu() {
            refs.manu.classList.toggle("is-hidden");
        }
        })();