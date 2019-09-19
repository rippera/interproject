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