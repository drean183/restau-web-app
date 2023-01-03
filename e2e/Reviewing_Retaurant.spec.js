Feature('Reviewing Restaurant');
const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('review one restaurant without fill field', ({ I }) => {

    I.waitForElement('.restaurant__title a',5);
    I.click(locate('.restaurant__title a').first());
    I.click('.review-btn');
    I.seeInPopup('Please input your name and review');
    I.acceptPopup();
  });


Scenario('review one restaurant', async ({ I }) => {

    I.waitForElement('.restaurant__title a',5);
    I.click(locate('.restaurant__title a').first());


    const userName = 'andre';
    const userReview = 'review testing';

    I.seeElement('.inputNama');
    I.fillField('.inputNama',userName);

    I.seeElement('.inputReview');
    I.fillField('.inputReview',userReview);

    I.click('.review-btn');
    I.seeInPopup('Thank you, Your review is recorded');
    I.acceptPopup();

    I.seeElement('.review-box .review-item:last-child');

    const postedName = await I.grabTextFrom(locate('.review-box .review-item:last-child .name'));
    const postedReview = await I.grabTextFrom(locate('.review-box .review-item:last-child .review-text'));

    assert.strictEqual(userName, postedName);
    assert.strictEqual(userReview, postedReview);
  });
