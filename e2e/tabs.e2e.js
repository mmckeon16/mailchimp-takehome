describe("Tab application", () => {
  it("should view Oakland Tab and navigate to Atlanta", async () => {
    await browser.url("/");

    await expect($("#oakland")).toBeExisting();
    await expect($("#oakland")).toHaveTextContaining("Oakland");

    await $("#atlanta").click();

    await expect($("#tabpanel-atlanta")).toBeExisting();
    await expect($("#tabpanel-atlanta")).toHaveTextContaining(
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a"
    );
  });
});
