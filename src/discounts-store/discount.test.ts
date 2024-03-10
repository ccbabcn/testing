import { describe, expect, test } from "vitest";
import { mock } from "vitest-mock-extended";
import { FakeMoney } from "./fakeMoney";
import { MarketingCampaign } from "./MarketingCampaign";
import { Discount } from "./discount";

describe("Given a marketing campaign", () => {
  describe("When is active", () => {
    describe("and is a crazy sales day", () => {
      const marketingActiveCrazyDaysCampaignMock = mock<MarketingCampaign>();
      marketingActiveCrazyDaysCampaignMock.isActive.mockReturnValue(true);
      marketingActiveCrazyDaysCampaignMock.isCrazySalesDay.mockReturnValue(
        true
      );
      test("Then it should apply a discount of 15% to any price", () => {
        const expectedDiscount = 15;
        const priceUnder100 = new FakeMoney(99);

        const discount = new Discount(marketingActiveCrazyDaysCampaignMock);

        const discountUnder100 = discount.discountFor(priceUnder100).value;

        expect(discountUnder100).toBe(expectedDiscount);
      });
    });
    describe("and is NOT a crazy sales day", () => {
      const marketingActiveCampaignMock = mock<MarketingCampaign>();
      marketingActiveCampaignMock.isActive.mockReturnValue(true);
      marketingActiveCampaignMock.isCrazySalesDay.mockReturnValue(false);
      test("Then it should apply a discount of 10% to a price over 1000", () => {
        const expectedDiscount = 10;
        const priceOver1000 = new FakeMoney(1001);
        const discount = new Discount(marketingActiveCampaignMock);

        const discountOver1000 = discount.discountFor(priceOver1000).value;

        expect(discountOver1000).toBe(expectedDiscount);
      });
      test("Then it should apply a discount of 5% to a price over 100", () => {
        const expectedDiscount = 5;
        const priceOver100 = new FakeMoney(101);
        const discount = new Discount(marketingActiveCampaignMock);

        const discountOver100 = discount.discountFor(priceOver100).value;

        expect(discountOver100).toBe(expectedDiscount);
      });
      test("Then it should NOT apply any discount to a price under 100", () => {
        const priceUnder100 = new FakeMoney(99);
        const discount = new Discount(marketingActiveCampaignMock);

        const priceAfterDiscount = discount.discountFor(priceUnder100);

        expect(priceAfterDiscount).toBe(priceUnder100);
      });
    });
  });
  describe("When is NOT active", () => {
    describe("and is NOT a crazy sales day", () => {
      const marketingActiveCampaignMock = mock<MarketingCampaign>();
      marketingActiveCampaignMock.isActive.mockReturnValue(false);
      marketingActiveCampaignMock.isCrazySalesDay.mockReturnValue(false);
      test("Then it should apply a discount of 10% to a price over 1000", () => {
        const expectedDiscount = 10;
        const priceOver1000 = new FakeMoney(1001);
        const discount = new Discount(marketingActiveCampaignMock);

        const discountOver1000 = discount.discountFor(priceOver1000).value;

        expect(discountOver1000).toBe(expectedDiscount);
      });
      test("Then it should NOT apply any discount to a price over 100", () => {
        const priceOver100 = new FakeMoney(101);
        const discount = new Discount(marketingActiveCampaignMock);

        const priceAfterDiscount = discount.discountFor(priceOver100);

        expect(priceAfterDiscount).toBe(priceOver100);
      });
    });
  });
});
