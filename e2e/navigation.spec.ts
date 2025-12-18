import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('should navigate between pages', async ({ page }) => {
    // Start at home
    await page.goto('/')
    await expect(page).toHaveURL('/')
    await expect(page.locator('h1')).toContainText('bridge')

    // Click News to scroll to news section
    await page.click('text=News')
    await expect(page).toHaveURL('/')
    await page.waitForTimeout(500)
    // Check that News section is visible - use heading role to be more specific
    await expect(
      page.getByRole('heading', { name: 'News & Announcements', exact: true }),
    ).toBeVisible()

    // Click "View All News" to go to news page
    await page.getByRole('link', { name: 'View All News & Announcements', exact: true }).click()
    await expect(page).toHaveURL('/news')
    await expect(page.locator('h1')).toContainText('News & Updates')

    // Navigate back to home
    await page.click('text=Back to Home')
    await expect(page).toHaveURL('/')
  })

  test('should navigate from news to home sections', async ({ page }) => {
    await page.goto('/news')

    // Click on a section link like Leadership
    await page.click('text=Leadership')

    // Should navigate back to home
    await expect(page).toHaveURL('/')

    // Wait a bit for scroll animation
    await page.waitForTimeout(300)
  })

  test('should navigate to article and back', async ({ page }) => {
    await page.goto('/news')

    // Click on the K2 article
    await page.click('text=Read full article')
    await expect(page).toHaveURL(/\/news\/k2-hydrogen-facility-pittsburg/)

    // Navigate back
    await page.click('text=Back to News')
    await expect(page).toHaveURL('/news')
  })
})
