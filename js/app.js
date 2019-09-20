const tabButtons = document.querySelectorAll('.tab_buttons');
const tabContents = document.querySelectorAll('.tab_contents');

function removeTabs() {
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('show_');
    });
    tabButtons.forEach(tabButton => {
        tabButton.classList.remove('active');
    })
}

function selectTabs() {
    removeTabs();
    const tabContent = document.querySelector(`#${this.id}-content`);
    tabContent.classList.add('show_');
    this.classList.add('active');
}
tabButtons.forEach(tabButton => {
    tabButton.addEventListener('click', selectTabs);
});


function barIndicator() {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (scrollTop / height) * 100;
    document.getElementById("barIndicator").style.width = scrolled + "%";
}

function scrollAnimation() {
    let scrollY = window.pageYOffset;
    if (scrollY > 500) {
        document.querySelector('.header_fixed').style.top = '0px';
    } else {
        document.querySelector('.header_fixed').style.top = '-105px';
    }
}
window.addEventListener('scroll', () => {
    barIndicator();
    scrollAnimation();
});