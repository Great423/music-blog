const filterForm = document.forms['filter_form'];
const searchBar = filterForm.querySelector('input[type = "search"]');
const categoriesContainer = document.querySelector('.categories-container');
const categories = categoriesContainer.querySelectorAll('.categories-container>div');
const keen_slider = document.querySelectorAll('.keen-slider__btn');
const all_keen_slider = document.querySelectorAll('.keen-slider__slide');
const all_cat_btn = document.querySelector('.all-categories-btn');

searchBar.addEventListener('keyup', function(e) {
    e.preventDefault();
    const term = e.target.value.toLowerCase();
    
    Array.from(categories).forEach(function(item) {
        const title = item.getAttribute("data-resource-type");
        if (title.toLowerCase().indexOf(term) !== -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = "none";
        }
    })
});

all_cat_btn.addEventListener('click', () => {
    Array.from(categories).forEach(function(item) {
        item.style.display = 'block';
    });
});
Array.from(keen_slider).forEach(function(item) {
    item.addEventListener('click', () => {
        const btnText = item.textContent;
        Array.from(categories).forEach(function(item) {
            const title = item.getAttribute("data-resource-type");
            item.style.display = 'block';
            if (title !== btnText) {
                item.style.display = 'none';
            }
        });
    });
});

// resources filter tab buttons active
Array.from(all_keen_slider).forEach((button) => {
    button.addEventListener('click', function() {
        all_keen_slider.forEach((button) => {
            button.classList.remove('active');
        })
        button.classList.add('active');
    })
});



