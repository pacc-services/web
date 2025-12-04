import { test, expect } from '@playwright/test'

test.describe('News Page', () => {
  test('should display list of news articles', async ({ page }) => {
    await page.goto('/news')

    await expect(page.locator('h1')).toContainText('News & Updates')
    await expect(page.locator('h2')).toContainText('PACC Launches Revolutionary Hydrogen')
  })

  test('should navigate to article detail page', async ({ page }) => {
    await page.goto('/news')

    await page.click('text=Read full article')
    await expect(page).toHaveURL(/\/news\/hydrogen-platform-launch/)
    await expect(page.locator('h1')).toContainText('PACC Launches')
  })

  test('should display article content', async ({ page }) => {
    await page.goto('/news/hydrogen-platform-launch')

    await expect(page.locator('h1')).toContainText('PACC Launches')
    await expect(page.locator('text=San Francisco, CA')).toBeVisible()
    await expect(page.locator('text=December 4, 2025')).toBeVisible()
    await expect(page.locator('text=pioneering hydrogen')).toBeVisible()
  })

  test('should navigate back to news list from article', async ({ page }) => {
    await page.goto('/news/hydrogen-platform-launch')

    await page.click('text=Back to News')
    await expect(page).toHaveURL('/news')
    await expect(page.locator('h1')).toContainText('News & Updates')
  })

  test('should navigate from article to home sections', async ({ page }) => {
    await page.goto('/news/hydrogen-platform-launch')

    await page.click('text=Leadership')
    await expect(page).toHaveURL('/')
    await page.waitForTimeout(300)
  })

  test('should handle non-existent article', async ({ page }) => {
    await page.goto('/news/non-existent-article')

    await expect(page.locator('text=Article Not Found')).toBeVisible()
    
    await page.click('text=Back to News')
    await expect(page).toHaveURL('/news')
  })
})
