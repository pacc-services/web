import { test, expect } from '@playwright/test'

test.describe('News Page', () => {
  test('should display list of news articles', async ({ page }) => {
    await page.goto('/news')

    await expect(page.locator('h1')).toContainText('News & Updates')
    await expect(page.locator('h2')).toContainText('K2 Pure Solutions Breaks Ground')
  })

  test('should navigate to article detail page', async ({ page }) => {
    await page.goto('/news')

    await page.click('text=Read full article')
    await expect(page).toHaveURL(/\/news\/k2-hydrogen-facility-pittsburg/)
    await expect(page.locator('h1')).toContainText('K2 Pure Solutions')
  })

  test('should display article content', async ({ page }) => {
    await page.goto('/news/k2-hydrogen-facility-pittsburg')

    // Check main heading and article metadata
    await expect(page.locator('h1')).toContainText('K2 Pure Solutions Breaks Ground')
    await expect(page.getByText('Pittsburg, CA', { exact: true }).first()).toBeVisible()
    await expect(page.getByText('December 17, 2025')).toBeVisible()
    // Check that article content is present
    await expect(page.locator('article')).toBeVisible()
  })

  test('should navigate back to news list from article', async ({ page }) => {
    await page.goto('/news/k2-hydrogen-facility-pittsburg')

    await page.click('text=Back to News')
    await expect(page).toHaveURL('/news')
    await expect(page.locator('h1')).toContainText('News & Updates')
  })

  test('should navigate from article to home sections', async ({ page }) => {
    await page.goto('/news/k2-hydrogen-facility-pittsburg')

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
