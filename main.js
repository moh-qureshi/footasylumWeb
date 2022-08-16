const searchBox = document.getElementById("search-box")
const searchButton = document.getElementById("search-btn")

//navbar
const justLandedTab = document.getElementById("just-landed")
const saleTab = document.getElementById("sale")
const outletTab = document.getElementById("outlet")
const theLowdownTab = document.getElementById("the-lowdown")
const menTab = document.getElementById("men")
const womenTab = document.getElementById("women")
const kidsTab = document.getElementById("kids")
const brandsTab = document.getElementById("brands")
const launchesTab = document.getElementById("launches")
const subNav = document.getElementById("sub-nav")
//dropdowns

//just landed dropdown section
const justLandedDropdown = document.getElementById("just-landed-dropdown")
const justLandedDropdownText = document.getElementById("just-landed-sections")
const justLandedDropdownImage = document.getElementById("just-landed-img")

//sale dropdown section
const saleDropdown = document.getElementById("sale-dropdown")
const saleDropdownText = document.getElementById("sale-sections")
const saleDropdownImage = document.getElementById("sale-img")
const saleButton = document.getElementById("sale-btn")

//outlet dropdown section
const outletDropdown = document.getElementById("outlet-dropdown")
const outletDropdownText = document.getElementById("outlet-sections")
const outletDropdownImage = document.getElementById("outlet-img")
const outletButton = document.getElementById("outlet-btn")


//men dropdown section
const menDropdown = document.getElementById("men-dropdown")
const menDropdownText = document.getElementById("men-sections")
const menDropdownImage = document.getElementById("men-img")
const menButton = document.getElementById("men-btn")

//women dropdown section
const womenDropdown = document.getElementById("women-dropdown")
const womenDropdownText = document.getElementById("women-sections")
const womenDropdownImage = document.getElementById("women-img")
const womenButton = document.getElementById("women-btn")

//kids dropdown section
const kidsDropdown = document.getElementById("kids-dropdown")
const kidsDropdownText = document.getElementById("kids-sections")
const kidsDropdownImage = document.getElementById("kids-img")
const kidsButton = document.getElementById("kids-btn")

//brands dropdown section
const brandsDropdown = document.getElementById("brands-dropdown")
const brandsSections = document.getElementById("brands-sections")
const brandsSectionOne = document.getElementById("brands-section-one")
const brandsSectionTwo = document.getElementById("brands-section-two")
const brandsSectionOneContent = document.getElementById("brands-section-one-content")
const brandsSectionTwoContent = document.getElementById("brands-section-two-content")

//brands a-z selector
const aButton = document.getElementById("a-btn")
const bButton = document.getElementById("b-btn")
const cButton = document.getElementById("c-btn")
const dButton = document.getElementById("d-btn")
const eButton = document.getElementById("e-btn")
const fButton = document.getElementById("f-btn")
const gButton = document.getElementById("g-btn")
const hButton = document.getElementById("h-btn")
const iButton = document.getElementById("i-btn")
const jButton = document.getElementById("j-btn")
const kButton = document.getElementById("k-btn")
const lButton = document.getElementById("l-btn")
const mButton = document.getElementById("m-btn")
const nButton = document.getElementById("n-btn")
const oButton = document.getElementById("o-btn")
const pButton = document.getElementById("p-btn")
const qButton = document.getElementById("q-btn")
const rButton = document.getElementById("r-btn")
const sButton = document.getElementById("s-btn")
const tButton = document.getElementById("t-btn")
const uButton = document.getElementById("u-btn")
const vButton = document.getElementById("v-btn")
const wButton = document.getElementById("w-btn")
const xButton = document.getElementById("x-btn")
const yButton = document.getElementById("y-btn")
const zButton = document.getElementById("z-btn")
const allBrandsAlphabet = [aButton, bButton, cButton, dButton, eButton, fButton, gButton, hButton, iButton, jButton, kButton, lButton, mButton, nButton, oButton, pButton, qButton, rButton, sButton, tButton, uButton, vButton, wButton, xButton, yButton, zButton]
let selectedAlphabet = ""

//brands lists
const aBrandsList = document.getElementById("a-brands")
const bBrandsList = document.getElementById("b-brands")
const cBrandsList = document.getElementById("c-brands")
const dBrandsList = document.getElementById("d-brands")
const eBrandsList = document.getElementById("e-brands")
const fBrandsList = document.getElementById("f-brands")
const gBrandsList = document.getElementById("g-brands")
const hBrandsList = document.getElementById("h-brands")
const iBrandsList = document.getElementById("i-brands")
const jBrandsList = document.getElementById("j-brands")
const kBrandsList = document.getElementById("k-brands")
const lBrandsList = document.getElementById("l-brands")
const mBrandsList = document.getElementById("m-brands")
const nBrandsList = document.getElementById("n-brands")
const oBrandsList = document.getElementById("o-brands")
const pBrandsList = document.getElementById("p-brands")
const qBrandsList = document.getElementById("q-brands")
const rBrandsList = document.getElementById("r-brands")
const sBrandsList = document.getElementById("s-brands")
const tBrandsList = document.getElementById("t-brands")
const uBrandsList = document.getElementById("u-brands")
const vBrandsList = document.getElementById("v-brands")
const wBrandsList = document.getElementById("w-brands")
const xBrandsList = document.getElementById("x-brands")
const yBrandsList = document.getElementById("y-brands")
const zBrandsList = document.getElementById("z-brands")
const allBrandLists = [aBrandsList, bBrandsList, cBrandsList, dBrandsList, eBrandsList, fBrandsList, gBrandsList, hBrandsList, iBrandsList, jBrandsList, kBrandsList, lBrandsList, mBrandsList, nBrandsList, oBrandsList, pBrandsList, qBrandsList, rBrandsList, sBrandsList, tBrandsList, uBrandsList, vBrandsList, wBrandsList, xBrandsList, yBrandsList, zBrandsList]
const brandsLogoSlider = document.getElementById("brands-logo-slider")

// banner section
const bannerSlider = document.getElementById("banner-slider")

// categories section
const leftArrowCategoriesSlider = document.getElementById("categories-left-arrow")
const rightArrowCategoriesSlider = document.getElementById("categories-right-arrow")
const categoriesSlider = document.querySelectorAll(".categories-cards")
const categoriesSliderCards = document.querySelectorAll(".categories-slider-cards")
const categoriesSelector = document.getElementById("categories-chooser")
const allCategoryButtons = categoriesSelector.querySelectorAll(".categories-btn")
const mensCategories = document.getElementById("mens-categories-btn")
const womensCategories = document.getElementById("womens-categories-btn")
const kidsCategories = document.getElementById("kids-categories-btn")
const mensCategoriesCards = document.getElementById("mens-categories-cards")
const womensCategoriesCards = document.getElementById("womens-categories-cards")
const kidsCategoriesCards = document.getElementById("kids-categories-cards")
womensCategoriesCards.style.display = "none"
kidsCategoriesCards.style.display = "none"
let allCategorySliders = []
let chosenCategory = "Men's"

// just landed shop section
const leftArrowJustLandedSlider = document.getElementById("just-landed-left-arrow")
const rightArrowJustLandedSlider = document.getElementById("just-landed-right-arrow")
const justLandedSlider = document.querySelectorAll(".just-landed-cards")
const justLandedCategoriesSelector = document.getElementById("just-landed-categories-chooser")
const allJustLandedButtons = justLandedCategoriesSelector.querySelectorAll(".just-landed-categories-btn")
const mensJustLandedBtn = document.getElementById("mens-just-landed-categories-btn")
const womensJustLandedBtn = document.getElementById("womens-just-landed-categories-btn")
const kidsJustLandedBtn = document.getElementById("kids-just-landed-categories-btn")
const mensJustLandedCards = document.getElementById("mens-just-landed-cards")
const womensJustLandedCards = document.getElementById("womens-just-landed-cards")
const kidsJustLandedCards = document.getElementById("kids-just-landed-cards")
womensJustLandedCards.style.display = "none"
kidsJustLandedCards.style.display = "none"
let allJustLandedSliders = []
let chosenJustLanded = "Men's"

// lowdown section
const leftArrowLowdownSlider = document.getElementById("lowdown-left-arrow")
const rightArrowLowdownSlider = document.getElementById("lowdown-right-arrow")
const lowdownSlider = document.getElementById("lowdown-articles")
const allLowdownBlogs = document.querySelectorAll(".lowdown-blog")


for(let i = 0; i < justLandedSlider.length; i++){
    allJustLandedSliders.push(justLandedSlider[i])
}

for(let i = 0; i < categoriesSlider.length; i++){
    allCategorySliders.push(categoriesSlider[i])
}


for(let i = 0; i < allBrandLists.length; i++){
    allBrandLists[i].style.display = "none"
}



for(let i = 0; i < allBrandsAlphabet.length; i++){
    allBrandsAlphabet[i].addEventListener("click", () =>{
        selectedAlphabet = allBrandsAlphabet[i].textContent
        alphabetSelector()
    })
}

function clearAlphabetStyles(){
    for(let i = 0; i < allBrandsAlphabet.length; i++){
        allBrandsAlphabet[i].style.backgroundColor = "white"
        allBrandsAlphabet[i].style.color = "black"
    }
}

function clearBrandsList(){
    for(let i = 0; i < allBrandLists.length; i++){
        allBrandLists[i].style.display = "none"
    }
}

let scrolled = 0


function scrolledRight(){
    scrolled += 200
    brandsLogoSlider.scrollTo(scrolled,0)
}
function scrolledLeft(){
    scrolled -= 200
    brandsLogoSlider.scrollTo(scrolled,0)
}

function alphabetSelector(){
    switch(selectedAlphabet){
        case "A":
            clearAlphabetStyles()
            clearBrandsList()
            aButton.style.backgroundColor = "black"
            aButton.style.color = "white"
            aBrandsList.style.display = "flex"
            break;
            case "B":
            clearAlphabetStyles()
            clearBrandsList()
            bButton.style.backgroundColor = "black"
            bButton.style.color = "white"
            bBrandsList.style.display = "flex"
            break;
            case "C":
            clearAlphabetStyles()
            clearBrandsList()
            cButton.style.backgroundColor = "black"
            cButton.style.color = "white"
            cBrandsList.style.display = "flex"
            break;
        case "D":
            clearAlphabetStyles()
            clearBrandsList()
            dButton.style.backgroundColor = "black"
            dButton.style.color = "white"
            dBrandsList.style.display = "flex"
            break;
        case "E":
            clearAlphabetStyles()
            clearBrandsList()
            eButton.style.backgroundColor = "black"
            eButton.style.color = "white"
            eBrandsList.style.display = "flex"
            break;
        case "F":
            clearAlphabetStyles()
            clearBrandsList()
            fButton.style.backgroundColor = "black"
            fButton.style.color = "white"
            fBrandsList.style.display = "flex"
            break;
        case "G":
            clearAlphabetStyles()
            clearBrandsList()
            gButton.style.backgroundColor = "black"
            gButton.style.color = "white"
            gBrandsList.style.display = "flex"
            break;
        case "H":
            clearAlphabetStyles()
            clearBrandsList()
            hButton.style.backgroundColor = "black"
            hButton.style.color = "white"
            hBrandsList.style.display = "flex"
            break;
        case "I":
            clearAlphabetStyles()
            clearBrandsList()
            iButton.style.backgroundColor = "black"
            iButton.style.color = "white"
            iBrandsList.style.display = "flex"
            break;
        case "J":
            clearAlphabetStyles()
            clearBrandsList()
            jButton.style.backgroundColor = "black"
            jButton.style.color = "white"
            jBrandsList.style.display = "flex"
            break;
        case "K":
            clearAlphabetStyles()
            clearBrandsList()
            kButton.style.backgroundColor = "black"
            kButton.style.color = "white"
            kBrandsList.style.display = "flex"
            break;
        case "L":
            clearAlphabetStyles()
            clearBrandsList()
            lButton.style.backgroundColor = "black"
            lButton.style.color = "white"
            lBrandsList.style.display = "flex"
            break;
        case "M":
            clearAlphabetStyles()
            clearBrandsList()
            mButton.style.backgroundColor = "black"
            mButton.style.color = "white"
            mBrandsList.style.display = "flex"
            break;
        case "N":
            clearAlphabetStyles()
            clearBrandsList()
            nButton.style.backgroundColor = "black"
            nButton.style.color = "white"
            nBrandsList.style.display = "flex"
            break;
        case "O":
            clearAlphabetStyles()
            clearBrandsList()
            oButton.style.backgroundColor = "black"
            oButton.style.color = "white"
            oBrandsList.style.display = "flex"
            break;
        case "P":
            clearAlphabetStyles()
            clearBrandsList()
            pButton.style.backgroundColor = "black"
            pButton.style.color = "white"
            pBrandsList.style.display = "flex"
            break;
        case "Q":
            clearAlphabetStyles()
            clearBrandsList()
            qButton.style.backgroundColor = "black"
            qButton.style.color = "white"
            qBrandsList.style.display = "flex"
            break;
        case "R":
            clearAlphabetStyles()
            clearBrandsList()
            rButton.style.backgroundColor = "black"
            rButton.style.color = "white"
            rBrandsList.style.display = "flex"
            break;
        case "S":
            clearAlphabetStyles()
            clearBrandsList()
            sButton.style.backgroundColor = "black"
            sButton.style.color = "white"
            sBrandsList.style.display = "flex"
            break;
        case "T":
            clearAlphabetStyles()
            clearBrandsList()
            tButton.style.backgroundColor = "black"
            tButton.style.color = "white"
            tBrandsList.style.display = "flex"
            break;
        case "U":
            clearAlphabetStyles()
            clearBrandsList()
            uButton.style.backgroundColor = "black"
            uButton.style.color = "white"
            uBrandsList.style.display = "flex"
            break;
        case "V":
            clearAlphabetStyles()
            clearBrandsList()
            vButton.style.backgroundColor = "black"
            vButton.style.color = "white"
            vBrandsList.style.display = "flex"
            break;
        case "W":
            clearAlphabetStyles()
            clearBrandsList()
            wButton.style.backgroundColor = "black"
            wButton.style.color = "white"
            wBrandsList.style.display = "flex"
            break;
        case "X":
            clearAlphabetStyles()
            clearBrandsList()
            xButton.style.backgroundColor = "black"
            xButton.style.color = "white"
            xBrandsList.style.display = "flex"
            break;
        case "Y":
            clearAlphabetStyles()
            clearBrandsList()
            yButton.style.backgroundColor = "black"
            yButton.style.color = "white"
            yBrandsList.style.display = "flex"
            break;
        case "Z":
            clearAlphabetStyles()
            clearBrandsList()
            zButton.style.backgroundColor = "black"
            zButton.style.color = "white"
            zBrandsList.style.display = "flex"
            break;
    }
}

saleDropdownImage.addEventListener("mouseenter", () =>{
    saleButton.style.backgroundColor = "rgb(255, 255, 255)"
})
saleDropdownImage.addEventListener("mouseleave", () =>{
    saleButton.style.backgroundColor = "rgb(255, 255, 255, 0.7)"
})

function displaySearchButton(){
    let val = searchBox.value.length
    if (val === 0){
        searchButton.classList.remove("search-button-show")
        searchButton.classList.add("search-button-hide")
    } else if (val > 0){
        searchButton.classList.remove("search-button-hide")
        searchButton.classList.add("search-button-show")
    }
}



function showJustLandedDropdown(){
    justLandedDropdown.style.display = "flex"
    justLandedDropdown.classList.remove("dropdown-hide")
    justLandedDropdown.classList.add("dropdown-show")
    justLandedDropdownText.classList.remove("hide")
    justLandedDropdownText.classList.add("show")
    justLandedDropdownImage.classList.remove("hide")
    justLandedDropdownImage.classList.add("show")
}

function hideJustLandedDropdown(){
    justLandedDropdown.classList.remove("dropdown-show")
    justLandedDropdown.classList.add("dropdown-hide")
    justLandedDropdownText.classList.remove("show")
    justLandedDropdownText.classList.add("hide")
    justLandedDropdownImage.classList.remove("show")
    justLandedDropdownImage.classList.add("hide")
}

function showSaleDropdown(){
    saleDropdown.style.display = "flex"
    saleDropdown.classList.remove("dropdown-hide")
    saleDropdown.classList.add("dropdown-show")
    saleDropdownText.classList.remove("hide")
    saleDropdownText.classList.add("show")
    saleDropdownImage.classList.remove("hide")
    saleDropdownImage.classList.add("show")    
}

function hideSaleDropdown(){
    saleDropdown.classList.remove("dropdown-show")
    saleDropdown.classList.add("dropdown-hide")
    saleDropdownText.classList.remove("show")
    saleDropdownText.classList.add("hide")
    saleDropdownImage.classList.remove("show")
    saleDropdownImage.classList.add("hide")
}

function showOutletDropdown(){
    outletDropdown.style.display = "flex"
    outletDropdown.classList.remove("dropdown-hide")
    outletDropdown.classList.add("dropdown-show")
    outletDropdownText.classList.remove("hide")
    outletDropdownText.classList.add("show")
    outletDropdownImage.classList.remove("hide")
    outletDropdownImage.classList.add("show")
}

function hideOutletDropdown(){
    outletDropdown.classList.remove("dropdown-show")
    outletDropdown.classList.add("dropdown-hide")
    outletDropdownText.classList.remove("show")
    outletDropdownText.classList.add("hide")
    outletDropdownImage.classList.remove("show")
    outletDropdownImage.classList.add("hide")
}

function showMenDropdown(){
    menDropdown.style.display = "flex"
    menDropdown.classList.remove("dropdown-hide")
    menDropdown.classList.add("dropdown-show")
    menDropdownText.classList.remove("hide")
    menDropdownText.classList.add("show")
    menDropdownImage.classList.remove("hide")
    menDropdownImage.classList.add("show")
}

function hideMenDropdown(){
    menDropdown.classList.remove("dropdown-show")
    menDropdown.classList.add("dropdown-hide")
    menDropdownText.classList.remove("show")
    menDropdownText.classList.add("hide")
    menDropdownImage.classList.remove("show")
    menDropdownImage.classList.add("hide")
}

function showWomenDropdown(){
    womenDropdown.style.display = "flex"
    womenDropdown.classList.remove("dropdown-hide")
    womenDropdown.classList.add("dropdown-show")
    womenDropdownText.classList.remove("hide")
    womenDropdownText.classList.add("show")
    womenDropdownImage.classList.remove("hide")
    womenDropdownImage.classList.add("show")
}

function hideWomenDropdown(){
    womenDropdown.classList.remove("dropdown-show")
    womenDropdown.classList.add("dropdown-hide")
    womenDropdownText.classList.remove("show")
    womenDropdownText.classList.add("hide")
    womenDropdownImage.classList.remove("show")
    womenDropdownImage.classList.add("hide")
}

function showKidsDropdown(){
    kidsDropdown.style.display = "flex"
    kidsDropdown.classList.remove("dropdown-hide")
    kidsDropdown.classList.add("dropdown-show")
    kidsDropdownText.classList.remove("hide")
    kidsDropdownText.classList.add("show")
    kidsDropdownImage.classList.remove("hide")
    kidsDropdownImage.classList.add("show")
}

function hideKidsDropdown(){
    kidsDropdown.classList.remove("dropdown-show")
    kidsDropdown.classList.add("dropdown-hide")
    kidsDropdownText.classList.remove("show")
    kidsDropdownText.classList.add("hide")
    kidsDropdownImage.classList.remove("show")
    kidsDropdownImage.classList.add("hide")
}

function showBrandsDropdown(){
    brandsDropdown.style.display = "flex"
    brandsSections.style.display = "flex"
    brandsDropdown.classList.remove("dropdown-hide")
    brandsDropdown.classList.add("dropdown-show")
    brandsSections.classList.remove("dropdown-hide")
    brandsSections.classList.add("dropdown-show")
    brandsSectionOne.classList.remove("dropdown-hide")
    brandsSectionOne.classList.add("dropdown-show")
    brandsSectionOneContent.style.visibility = "initial"
    brandsSectionTwoContent.style.visibility = "initial"
}

function hideBrandsDropdown(){
    brandsDropdown.classList.remove("dropdown-show")
    brandsDropdown.classList.add("dropdown-hide")
    brandsSections.classList.remove("dropdown-show")
    brandsSections.classList.add("dropdown-hide")
    brandsSectionOne.classList.remove("dropdown-show")
    brandsSectionOne.classList.add("dropdown-hide")
    brandsSectionOneContent.style.visibility = "collapse"
    brandsSectionTwoContent.style.visibility = "collapse"
    
}

function navbarHover(){
    justLandedTab.addEventListener("mouseenter", showJustLandedDropdown)
    justLandedTab.addEventListener("mouseleave", hideJustLandedDropdown)
    justLandedDropdown.addEventListener("mouseenter", showJustLandedDropdown)
    justLandedDropdown.addEventListener("mouseleave", hideJustLandedDropdown)
    saleTab.addEventListener("mouseenter", showSaleDropdown)
    saleTab.addEventListener("mouseleave", hideSaleDropdown)
    saleDropdown.addEventListener("mouseenter", showSaleDropdown)
    saleDropdown.addEventListener("mouseleave", hideSaleDropdown)
    outletTab.addEventListener("mouseenter", showOutletDropdown)
    outletTab.addEventListener("mouseleave", hideOutletDropdown)
    outletDropdown.addEventListener("mouseenter", showOutletDropdown)
    outletDropdown.addEventListener("mouseleave", hideOutletDropdown)
    menTab.addEventListener("mouseenter", showMenDropdown)
    menTab.addEventListener("mouseleave", hideMenDropdown)
    menDropdown.addEventListener("mouseenter", showMenDropdown)
    menDropdown.addEventListener("mouseleave", hideMenDropdown)
    womenTab.addEventListener("mouseenter", showWomenDropdown)
    womenTab.addEventListener("mouseleave", hideWomenDropdown)
    womenDropdown.addEventListener("mouseenter", showWomenDropdown)
    womenDropdown.addEventListener("mouseleave", hideWomenDropdown)
    kidsTab.addEventListener("mouseenter", showKidsDropdown)
    kidsTab.addEventListener("mouseleave", hideKidsDropdown)
    kidsDropdown.addEventListener("mouseenter", showKidsDropdown)
    kidsDropdown.addEventListener("mouseleave", hideKidsDropdown)
    brandsTab.addEventListener("mouseenter", showBrandsDropdown)
    brandsTab.addEventListener("mouseleave", hideBrandsDropdown)
    brandsDropdown.addEventListener("mouseenter", showBrandsDropdown)
    brandsDropdown.addEventListener("mouseleave", hideBrandsDropdown)
}

let bannerScrolled = 0
function moveBanner(){
    if(bannerScrolled !== 4080){
        bannerScrolled += window.outerWidth
        bannerSlider.scrollTo(bannerScrolled, 0)
    } else if(bannerScrolled === 4080){
        bannerScrolled = 0
        bannerSlider.scrollTo(bannerScrolled, 0)
    }
}


function bannerSliderLeft(){
    if(bannerScrolled === 0){
        bannerScrolled += 4080
        bannerSlider.scrollTo(bannerScrolled, 0)
    } else if(bannerScrolled !== 0){
        bannerScrolled -= window.outerWidth
        bannerSlider.scrollTo(bannerScrolled, 0)
    }
}
setInterval(moveBanner, 5000)

let categoriesScrolled = 0

function categoriesSliderLeft(){
    if(categoriesScrolled !== 0){
        categoriesScrolled -= 359
        if(chosenCategory === "Men's"){
            allCategorySliders[0].scrollTo(categoriesScrolled, 0)
        } else if(chosenCategory === "Women's"){
            allCategorySliders[1].scrollTo(categoriesScrolled, 0)
        } else if(chosenCategory === "Kid's"){
            allCategorySliders[2].scrollTo(categoriesScrolled, 0)
        }
        rightArrowCategoriesSlider.style.display = "flex"
    } else if(categoriesScrolled === 0){
        categoriesScrolled = 0
        if(chosenCategory === "Men's"){
            allCategorySliders[0].scrollTo(categoriesScrolled, 0)
        } else if(chosenCategory === "Women's"){
            allCategorySliders[1].scrollTo(categoriesScrolled, 0)
        } else if(chosenCategory === "Kid's"){
            allCategorySliders[2].scrollTo(categoriesScrolled, 0)
        }
        leftArrowCategoriesSlider.style.visibility = "collapse"
    }
}

function categoriesSliderRight(){
    if(categoriesScrolled !== 1795){
        categoriesScrolled += 359
        if(chosenCategory === "Men's"){
            allCategorySliders[0].scrollTo(categoriesScrolled, 0)
        } else if(chosenCategory === "Women's"){
            allCategorySliders[1].scrollTo(categoriesScrolled, 0)
        } else if(chosenCategory === "Kid's"){
            allCategorySliders[2].scrollTo(categoriesScrolled, 0)
        }
        leftArrowCategoriesSlider.style.visibility = "visible"
    } else if(categoriesScrolled === 1795){
        categoriesScrolled += 359
        if(chosenCategory === "Men's"){
            allCategorySliders[0].scrollTo(categoriesScrolled, 0)
        } else if(chosenCategory === "Women's"){
            allCategorySliders[1].scrollTo(categoriesScrolled, 0)
        } else if(chosenCategory === "Kid's"){
            allCategorySliders[2].scrollTo(categoriesScrolled, 0)
        }
        rightArrowCategoriesSlider.style.display = "none"
    }
}

for(let i = 0; i < categoriesSliderCards.length; i++){
    categoriesSliderCards[i].addEventListener("mouseenter", () =>{
        categoriesSliderCards[i].querySelector("p").style.backgroundColor = "rgb(255, 255, 255, 0.7)"
    })
    categoriesSliderCards[i].addEventListener("mouseleave", () =>{
        categoriesSliderCards[i].querySelector("p").style.backgroundColor = "rgb(255, 255, 255, 0.3)"
    })
}


for(let i = 0; i < allCategoryButtons.length; i++){
    allCategoryButtons[i].addEventListener("click", () =>{
        categoriesScrolled = 0
        chosenCategory = allCategoryButtons[i].textContent
        chooseCategory()
    })
}

function chooseCategory(){
    switch(chosenCategory){
        case "Men's":
            allCategorySliders[0].scrollTo(categoriesScrolled, 0)
            mensCategories.style.backgroundColor = "black"
            mensCategories.style.color = "white"
            womensCategories.style.backgroundColor = " #ebebeb"
            womensCategories.style.color = "black"
            kidsCategories.style.backgroundColor = " #ebebeb"
            kidsCategories.style.color = "black"
            mensCategoriesCards.style.display = "flex"
            womensCategoriesCards.style.display = "none"
            kidsCategoriesCards.style.display = "none"
            break;
        case "Women's":
            allCategorySliders[1].scrollTo(categoriesScrolled, 0)
            womensCategories.style.backgroundColor = "black"
            womensCategories.style.color = "white"
            mensCategories.style.backgroundColor = "#ebebeb"
            mensCategories.style.color = "black"
            kidsCategories.style.backgroundColor = "#ebebeb"
            kidsCategories.style.color = "black"
            womensCategoriesCards.style.display = "flex"
            mensCategoriesCards.style.display = "none"
            kidsCategoriesCards.style.display = "none"
            break;
        case "Kid's":
            allCategorySliders[2].scrollTo(categoriesScrolled, 0)
            kidsCategories.style.backgroundColor = "black"
            kidsCategories.style.color = "white"
            mensCategories.style.backgroundColor = "#ebebeb"
            mensCategories.style.color = "black"
            womensCategories.style.backgroundColor = "#ebebeb"
            womensCategories.style.color = "black"
            kidsCategoriesCards.style.display = "flex"
            mensCategoriesCards.style.display = "none"
            womensCategoriesCards.style.display = "none"
            break;
        default:
            mensCategories.style.backgroundColor = "black"
            mensCategories.style.color = "white"
            womensCategories.style.backgroundColor = "#ebebeb"
            womensCategories.style.color = "black"
            kidsCategories.style.backgroundColor = "#ebebeb"
            kidsCategories.style.color = "black"
            mensCategoriesCards.style.display = "flex"
            womensCategoriesCards.style.display = "none"
            kidsCategoriesCards.style.display = "none"
            break;
    }
}

let justLandedScrolled = 0


function justLandedSliderLeft(){
    if(justLandedScrolled !== 0){
        justLandedScrolled -= 1350
        if(chosenJustLanded === "Men's"){
            allJustLandedSliders[0].scrollTo(justLandedScrolled, 0)
        } else if(chosenJustLanded === "Women's"){
            allJustLandedSliders[1].scrollTo(justLandedScrolled, 0)
        } else if(chosenJustLanded === "Kid's"){
            allJustLandedSliders[2].scrollTo(justLandedScrolled, 0)
        }
        rightArrowJustLandedSlider.style.display = "flex"
    } else if(justLandedScrolled === 0){
        justLandedScrolled = 0
        if(chosenJustLanded === "Men's"){
            allJustLandedSliders[0].scrollTo(justLandedScrolled, 0)
        } else if(chosenJustLanded === "Women's"){
            allJustLandedSliders[1].scrollTo(justLandedScrolled, 0)
        } else if(chosenJustLanded === "Kid's"){
            allJustLandedSliders[2].scrollTo(justLandedScrolled, 0)
        }
        leftArrowJustLandedSlider.style.visibility = "collapse"
    }
}

function justLandedSliderRight(){
    if(justLandedScrolled !== 4050){
        justLandedScrolled += 1350
        
        if(chosenJustLanded === "Men's"){
            allJustLandedSliders[0].scrollTo(justLandedScrolled, 0)
        } else if(chosenJustLanded === "Women's"){
            allJustLandedSliders[1].scrollTo(justLandedScrolled, 0)
        } else if(chosenJustLanded === "Kid's"){
            allJustLandedSliders[2].scrollTo(justLandedScrolled, 0)
        }
        leftArrowJustLandedSlider.style.visibility = "visible"
    } else if(justLandedScrolled === 4050){
        justLandedScrolled += 359
        if(chosenJustLanded === "Men's"){
            allJustLandedSliders[0].scrollTo(justLandedScrolled, 0)
        } else if(chosenJustLanded === "Women's"){
            allJustLandedSliders[1].scrollTo(justLandedScrolled, 0)
        } else if(chosenJustLanded === "Kid's"){
            allJustLandedSliders[2].scrollTo(justLandedScrolled, 0)
        }
        rightArrowJustLandedSlider.style.display = "none"
    }
}




for(let i = 0; i < allJustLandedButtons.length; i++){
    allJustLandedButtons[i].addEventListener("click", () =>{
        justLandedScrolled = 0
        chosenJustLanded = allJustLandedButtons[i].textContent
        chooseJustLandedCategory()
    })
}

function chooseJustLandedCategory(){
    switch(chosenJustLanded){
        case "Men's":
            allJustLandedSliders[0].scrollTo(justLandedScrolled, 0)
            mensJustLandedBtn.style.backgroundColor = "black"
            mensJustLandedBtn.style.color = "white"
            womensJustLandedBtn.style.backgroundColor = " #ebebeb"
            womensJustLandedBtn.style.color = "black"
            kidsJustLandedBtn.style.backgroundColor = " #ebebeb"
            kidsJustLandedBtn.style.color = "black"
            mensJustLandedCards.style.display = "flex"
            womensJustLandedCards.style.display = "none"
            kidsJustLandedCards.style.display = "none"
            break;
        case "Women's":
            allJustLandedSliders[1].scrollTo(justLandedScrolled, 0)
            womensJustLandedBtn.style.backgroundColor = "black"
            womensJustLandedBtn.style.color = "white"
            mensJustLandedBtn.style.backgroundColor = "#ebebeb"
            mensJustLandedBtn.style.color = "black"
            kidsJustLandedBtn.style.backgroundColor = "#ebebeb"
            kidsJustLandedBtn.style.color = "black"
            womensJustLandedCards.style.display = "flex"
            mensJustLandedCards.style.display = "none"
            kidsJustLandedCards.style.display = "none"
            break;
        case "Kid's":
            allJustLandedSliders[2].scrollTo(justLandedScrolled, 0)
            kidsJustLandedBtn.style.backgroundColor = "black"
            kidsJustLandedBtn.style.color = "white"
            mensJustLandedBtn.style.backgroundColor = "#ebebeb"
            mensJustLandedBtn.style.color = "black"
            womensJustLandedBtn.style.backgroundColor = "#ebebeb"
            womensJustLandedBtn.style.color = "black"
            kidsJustLandedCards.style.display = "flex"
            mensJustLandedCards.style.display = "none"
            womensJustLandedCards.style.display = "none"
            break;
        default:
            mensJustLandedBtn.style.backgroundColor = "black"
            mensJustLandedBtn.style.color = "white"
            womensJustLandedBtn.style.backgroundColor = " #ebebeb"
            womensJustLandedBtn.style.color = "black"
            kidsJustLandedBtn.style.backgroundColor = " #ebebeb"
            kidsJustLandedBtn.style.color = "black"
            mensJustLandedCards.style.display = "flex"
            womensJustLandedCards.style.display = "none"
            kidsJustLandedCards.style.display = "none"
            break;
    }
}

let lowdownScrolled = 0

function lowdownSliderLeft(){
    if(lowdownScrolled > 448){
        lowdownScrolled -= 447
        lowdownSlider.scrollTo(lowdownScrolled, 0)
        rightArrowLowdownSlider.style.display = "flex"
    } else if(lowdownScrolled === 447){
        lowdownScrolled -= 447
        lowdownSlider.scrollTo(lowdownScrolled, 0)
        leftArrowLowdownSlider.style.visibility = "hidden"
    }
}

function lowdownSliderRight(){
    if(lowdownScrolled < 894){
        lowdownScrolled += 447
        lowdownSlider.scrollTo(lowdownScrolled, 0)
        leftArrowLowdownSlider.style.visibility = "initial"
    } else if(lowdownScrolled === 894){
        lowdownScrolled += 447
        lowdownSlider.scrollTo(lowdownScrolled, 0)
        rightArrowLowdownSlider.style.display = "none"
   }
}

for(let i = 0; i < allLowdownBlogs.length; i++){
    allLowdownBlogs[i].addEventListener("mouseenter", () =>{
        allLowdownBlogs[i].querySelector(".lowdown-readmore").style.textDecoration = "underline"
    })
    allLowdownBlogs[i].addEventListener("mouseleave", () =>{
        allLowdownBlogs[i].querySelector(".lowdown-readmore").style.textDecoration = "none"
    })
}

