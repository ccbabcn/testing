# Testing

This repository serves as a deliverable exercise for a testing codelab. It focuses on unit testing the "discount" feature.

## Purpose

The primary goal of this repository is to facilitate learning and practice of unit testing techniques, particularly in the context of testing the discount feature. The exercises aim to reinforce understanding of unit testing principles and methodologies.

## Discount Testing

The discount testing exercise involves the following steps:

1. **FakedMoney**: A `FakeMoney` class has been created to facilitate easy access to the applied discount during testing.

2. **Mocking MarketingCampaign Interface**: The `MarketingCampaign` interface has been mocked to simulate different scenarios. This allows for testing the behavior of the discount feature under various marketing campaign conditions.

3. **Deletion in discountFor Method**: A conditional in the `discountFor` method has been removed. This conditional handled the scenario where an infinite price would result in a discount of 100%, as it was deemed outside the business logic.
