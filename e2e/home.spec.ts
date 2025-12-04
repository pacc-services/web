import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should load home page with all sections', async ({ page }) => {
    await page.goto('/')

    // Check hero section
    await expect(page.locator('h1')).toContainText('bridge between molecule producers')

    // Check key sections are present
    await expect(page.locator('text=Our Approach')).toBeVisible()
    await expect(page.locator('text=Market Problem')).toBeVisible()
    await expect(page.locator('text=Leadership Team')).toBeVisible()
  })

  test('should scroll to News section on home page', async ({ page }) => {
    await page.goto('/')

    await page.click('text=News')
    // Should stay on home page
    await expect(page).toHaveURL('/')
    // Wait for scroll animation
    await page.waitForTimeout(500)
    // Check that News section is visible
    await expect(page.locator('text=News & Announcements')).toBeVisible()
  })

  test('should have working sections', async ({ page }) => {
    await page.goto('/')

    // Check key sections exist
    await expect(page.locator('text=Our Approach')).toBeVisible()
    await expect(page.locator('text=Market Problem')).toBeVisible()
    await expect(page.locator('text=Leadership Team')).toBeVisible()
  })
})
