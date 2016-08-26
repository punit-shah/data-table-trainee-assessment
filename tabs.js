function initTabs() {
    $('.tab').click(function () {
        $('.tab').removeClass('selected');
        $(this).addClass('selected');
        showHideTabContent($(this).attr('data-shows'));
    });

    showHideTabContent();
    $('.tab')
        .first()
        .click();
}

// hides all tab content before showing the element passed in
function showHideTabContent(selector) {
    $('.tab-content').hide();
    if (selector) {
        $(selector).show();
    }
}
