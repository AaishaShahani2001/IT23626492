import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Convert a simple daily statement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('mama podi gamanak giyaa.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Pos_Fun_0002 - Convert a polite request sentence.', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('oyaaata puLuvannam mata podi sahayogayak karanna.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Pos_Fun_0003 - Convert compound sentence with two actions', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});


test('Pos_Fun_0004 - Convert interrogative question', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('oyaa kohomadha inne?');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Pos_Fun_0005 - Convert negative sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('mata eeka karanna baee.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Pos_Fun_0006 - Convert future tense sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('mama heta enavaa.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Pos_Fun_0007 - Convert imperative command', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('meeka hariyata balanna.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Pos_Fun_0008 - Convert sentence with English technical word', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('mama adha Teams call ekakata join unaa.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Pos_Fun_0009 - Convert plural pronoun usage', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('api adha cinema balanna yanavaa.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Pos_Fun_0010 - Convert sentence with place name', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('mama adha Galle nagarayata yanna hadhanavaa.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Pos_Fun_0011 - Convert present tense daily activity', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('mama adha vaeda karagena innavaa.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Pos_Fun_0012 - Convert past tense sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('mama iiyee gedhara giyaa.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Pos_Fun_0013 - Convert conditional complex sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('oyaa kathaa karaanam mama eekata uththara dhennam.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});


test('Pos_Fun_0014 - Convert informal spoken sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('ehema karapan.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});


test('Pos_Fun_0015 - Convert repeated word expression', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('ee vaedee tika tika hoDHA velaa yanavaa.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Pos_Fun_0016 - Convert joined words without spaces', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('mamagedharayanavaa');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Pos_Fun_0017 - Convert common greeting', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('suBha dhavasak!');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Pos_Fun_0018 - Convert sentence with currency value', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('magee bill eka Rs. 5343 vitarayi.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Pos_Fun_0019 - Convert sentence with time format', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('meeting eka 7.30 AM patan gannavaa.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Pos_Fun_0020 - Convert sentence with extra spaces', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('mama   gedhara   innee.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Pos_Fun_0021 - Convert multi-line input text', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('mama gedhara yanavaa. oya enavadha?');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Pos_Fun_0022 - Convert highly polite request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('oyaaata puLuvannam karuNaakara eyaava yavanna.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Pos_Fun_0023 - Convert plural subject sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('eyaalaa enavaa.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Pos_Fun_0024 - Convert realistic conversational input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('api passe kathaa karamu kiyalaa mama hithan inne.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});


test('Neg_Fun_0001 - Convert slang-heavy informal sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('ela machan api adha night party ekakata set vuna.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});


test('Neg_Fun_0002 - Convert long joined-word sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('mamagedharayannathinapihetaenavaakiyalahithaninne');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});


test('Neg_Fun_0003 - Convert mixed Singlish with Sinhala characters', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('mama අද gedhara yanavaa.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Neg_Fun_0004 - Convert mixed Singlish with Sinhala characters', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('mama අද gedhara yanavaa.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Neg_Fun_0005 - Convert long paragraph input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas vinaashayata pathva aethi athara ehi samastha dhiga pramaaNaya kiloomiitar gananak vana bava sandahan vuna.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Neg_Fun_0006 - Convert excessive repeated words', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('hari hari hari hari lassanayi.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Neg_Fun_0007 - Convert sentence with English grammar order', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('today mama office yanna cannot.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Neg_Fun_0008 - Convert sentence with merged numbers and words', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('meeting eka7.30AMpatangannavaa.');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Neg_Fun_0009 - Convert input with many line breaks', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('mama gedhara yanavaa.\n\n\noyaa enavadha?');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});


test('Neg_Fun_0010 - Convert incomplete sentence input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('mama gedhara');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});

test('Pos_UI_0001 - Sinhala output updates automatically in real time', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator(
    'div.whitespace-pre-wrap.overflow-y-auto.flex-grow'
  );

  await inputBox.fill('mama gedhara yanavaa');

  
  await expect(outputBox).toBeVisible();
  await expect(outputBox).not.toHaveText('');
});













