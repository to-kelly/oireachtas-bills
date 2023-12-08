import { test, expect } from "@playwright/test";

test("can add and remove a bill to favourites", async ({ page }) => {
  await page.goto("/bills");

  // Click on a row
  await page.getByRole("row").nth(1).click();

  // Verify dialog is opened
  expect(page.getByText("Irish Title")).toBeDefined();

  // Close the dialog
  await page.keyboard.press("Escape");

  // Add a favourite
  await page.getByTestId("favourite-btn").first().click();

  // Open favourite tab
  await page.getByText("Favourite Bills").click();

  // Verify the bill has been made a favourite
  expect(page.getByTestId("delete-btn")).toBeDefined();

  // Deletes the favourite bill
  await page.getByTestId("delete-btn").click();

  // Expect row length 1 for header row only
  await expect(page.getByRole("row")).toHaveCount(1);
});
