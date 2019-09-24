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
// $('.dropdown_li a').each(function () {
//     $(this).on('click', () => {
//         $('html, body').animate({
//             scrollTop: $('html, body').offset().top
//         }, 500);
//     });
// })
$('.current_menu').on('click', function () {
    $('.current_menu .dropdown_menu').toggleClass('show_');
});
$('.fixed_current_menu').on('click', function () {
    $('.fixed_current_menu .dropdown_menu').toggleClass('show_');
});
const smallImgs = document.querySelectorAll('.small_img');
const mainImgs = document.querySelectorAll('.main_img img');

function gallery(item) {
    item.addEventListener('click', (e) => {
        let imgLocation = e.target.getAttribute('src');
        mainImgs.forEach(mainImg => {
            mainImg.src = imgLocation;
        });
    });
}
smallImgs.forEach(item => {
    gallery(item);
});
let teamBoxs = document.querySelectorAll('.team_box');
let teamInfoBoxs = document.querySelectorAll('.team_info-box');
teamBoxs.forEach(teamBox => {
    teamBox.addEventListener('click', () => {
        let teamBoxId = teamBox.getAttribute('data-team-id');
        teamInfoBoxs.forEach(teamInfoBox => {
            let teamInfoBoxId = teamInfoBox.getAttribute('data-info-id');
            if (teamBoxId == teamInfoBoxId) {
                teamInfoBox.style.display = 'block';
            }
        });
    });
});
document.querySelectorAll('.cancel').forEach(cancellBtn => {
    cancellBtn.addEventListener('click', () => {
        teamInfoBoxs.forEach(item => {
            item.style.display = 'none';
        });
    });
});