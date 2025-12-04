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

  test('should navigate to News page', async ({ page }) => {
    await page.goto('/')
    
    await page.click('text=News')
    await expect(page).toHaveURL('/news')
    await expect(page.locator('h1')).toContainText('News & Updates')
  })

  test('should have working sections', async ({ page }) => {
    await page.goto('/')
    
    // Check key sections exist
    await expect(page.locator('text=Our Approach')).toBeVisible()
    await expect(page.locator('text=Market Problem')).toBeVisible()
    await expect(page.locator('text=Leadership Team')).toBeVisible()
  })
})
