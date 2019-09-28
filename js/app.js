const homePage = document.querySelector('body#home');
const spokad = document.querySelector('body section#spokad');
const spokadInge = document.querySelector('body section#spokadinge');
if (homePage) {
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
            document.querySelector('.go_top').style.bottom = '5px';
        } else {
            document.querySelector('.header_fixed').style.top = '-105px';
            document.querySelector('.go_top').style.bottom = '-60px';
        }
    }
    window.addEventListener('scroll', () => {
        barIndicator();
        scrollAnimation();
        scrollNav();
    });
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
                    document.body.style.overflow = 'hidden';
                    teamInfoBox.style.display = 'block';
                    teamInfoBox.classList.add('popup_active');
                    let t = teamInfoBox.querySelector('.row');
                    setTimeout(() => {
                        t.classList.add('popup_child_active');
                    }, 200);
                }
            });
        });
    });
    document.querySelectorAll('.cancel').forEach(cancellBtn => {
        cancellBtn.addEventListener('click', () => {
            teamInfoBoxs.forEach(item => {
                item.classList.remove('popup_active');
                let t = item.querySelector('.row');
                t.classList.remove('popup_child_active');
                document.body.style.overflow = 'auto';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 200);
            });
        });
    });
    document.querySelectorAll('.read_more-btn').forEach(readBtn => {
        readBtn.addEventListener('click', () => {
            let targetId = readBtn.getAttribute('data-targetid');
            let readMoreBoxs = document.querySelectorAll('.read_more_fixed');
            readMoreBoxs.forEach(readMoreBox => {
                let popupId = readMoreBox.getAttribute('data-id');
                if (targetId == popupId) {
                    document.body.style.overflow = 'hidden';
                    readMoreBox.style.display = 'block';
                    readMoreBox.classList.add('popup_active');
                    let t = readMoreBox.querySelector('.read_more_popup');
                    setTimeout(() => {
                        t.classList.add('popup_child_active');
                    }, 200);
                }
            });
        });
    });
    document.querySelectorAll('.close').forEach(close => {
        close.addEventListener('click', () => {
            let d = document.querySelectorAll('.read_more_fixed');
            d.forEach(item => {
                document.body.style.overflow = 'auto';
                item.classList.remove('popup_active');
                let t = item.querySelector('.read_more_popup');
                t.classList.remove('popup_child_active');
                setTimeout(() => {
                    item.style.display = 'none';
                }, 200);
            });
        });
    });
    document.querySelector('.nav_ .lang_box_parent').addEventListener('click', () => {
        document.querySelector('.nav_ .lang_box_parent .dropdown_lang').classList.toggle('show_');
    })
    document.querySelector('.nav_fixed .lang_box_parent2').addEventListener('click', () => {
        document.querySelector('.lang_box_parent2 .dropdown_lang').classList.toggle('show_');
    })
    document.querySelector('.mobile_nav .mob_lang').addEventListener('click', () => {
        document.querySelector('.mob_lang .dropdown_lang').classList.toggle('show_');
    });
    if (window.matchMedia('screen and (max-width:992px)').matches) {
        document.querySelector('.header_fixed').style.display = 'none';
    }
    document.querySelector('.burger').addEventListener('click', () => {
        document.querySelector('.mobile_header_block').classList.toggle('mob_active');
        document.querySelector('.burger').classList.toggle('open_burger');
    });
    document.querySelectorAll('.mob_li').forEach(liElem => {
        liElem.addEventListener('click', () => {
            document.querySelector('.mobile_header_block').classList.remove('mob_active');
            document.querySelector('.burger').classList.remove('open_burger');
        });
    });
    document.querySelectorAll('.request_btn').forEach(reqBtn => {
        reqBtn.addEventListener('click', () => {
            let d = document.querySelectorAll('.read_more_fixed');
            d.forEach(item => {
                document.body.style.overflow = 'auto';
                item.classList.remove('popup_active');
                let t = item.querySelector('.read_more_popup');
                t.classList.remove('popup_child_active');
                setTimeout(() => {
                    item.style.display = 'none';
                }, 200);
            });
        });
    });

    function removScrollActive() {
        let navLi = document.querySelectorAll('.fixed_li');
        navLi.forEach(item => {
            item.classList.remove('fix_li_active')
        });
    }

    function scrollNav() {
        let navLi = document.querySelectorAll('.fixed_li');
        let aboutSection = document.querySelector('.about_sec');
        let partnersSection = document.querySelector('.partners_sec');
        let teamSection = document.querySelector('.team_sec');
        let contactSection = document.querySelector('.contact_sec');
        let scrollYtop = window.pageYOffset;
        if (scrollYtop >= aboutSection.offsetTop - 100 && scrollYtop <= partnersSection.offsetTop - 100) {
            removScrollActive();
            navLi[0].classList.add('fix_li_active');
        }
        if (scrollYtop >= partnersSection.offsetTop - 100 && scrollYtop <= teamSection.offsetTop - 100) {
            removScrollActive();
            navLi[2].classList.add('fix_li_active');
        }
        if (scrollYtop >= teamSection.offsetTop - 100 && scrollYtop <= contactSection.offsetTop - 100) {
            removScrollActive();
            navLi[3].classList.add('fix_li_active');
        }
        if (scrollYtop >= contactSection.offsetTop - 100) {
            removScrollActive();
            navLi[4].classList.add('fix_li_active');
        }
    }
}
if (spokad) {
    const smallImgs = document.querySelectorAll('#spokad .small_img');
    const mainImgs = document.querySelector('#spokad .spokad_main_img img');

    function gallery(item) {
        item.addEventListener('click', (e) => {
            let imgLocation = e.target.getAttribute('src');
            mainImgs.src = imgLocation;
        });
    }
    smallImgs.forEach(item => {
        gallery(item);
    });
    document.querySelector('.spokad_main_img').addEventListener('click', e => {
        let openedImg = document.querySelector('.img_gallery_parent img');
        let imgLocation = e.target.getAttribute('src');
        document.querySelector('.light_box').style.display = 'block';
        openedImg.src = imgLocation;
        openedImg.classList.add('img_fluid');
        document.body.style.overflow = 'hidden';
    })
    document.querySelector('.light_box .close').addEventListener('click', () => {
        document.querySelector('.light_box').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}
if (spokadInge) {
    const smallImgs = document.querySelectorAll('#spokadinge .small_img');
    const mainImgs = document.querySelector('#spokadinge .spokad_main_img img');

    function gallery(item) {
        item.addEventListener('click', (e) => {
            let imgLocation = e.target.getAttribute('src');
            mainImgs.src = imgLocation;
        });
    }
    smallImgs.forEach(item => {
        gallery(item);
    });
    document.querySelector('.spokad_main_img').addEventListener('click', e => {
        let openedImg = document.querySelector('.img_gallery_parent img');
        let imgLocation = e.target.getAttribute('src');
        document.querySelector('.light_box').style.display = 'block';
        openedImg.src = imgLocation;
        openedImg.classList.add('img_fluid');
        document.body.style.overflow = 'hidden';
    })
    document.querySelector('.light_box .close').addEventListener('click', () => {
        document.querySelector('.light_box').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}