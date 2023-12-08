import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Sponsors } from "../Sponsors";
import { Bill } from "@/types/Bills";

const bill: Bill = {
  billNo: "10",
  billType: "Public",
  sponsors: [
    {
      sponsor: {
        as: {
          showAs: "Finance",
          uri: "/finance",
        },
        isPrimary: true,
      },
    },
    {
      sponsor: {
        by: {
          showAs: "Finance",
          uri: "/finance",
        },
        isPrimary: true,
      },
    },
  ],
  shortTitleEn: "",
  status: "",
  shortTitleGa: "",
};

describe("sponsors", () => {
  it("displays both as/by objects", async () => {
    const { findAllByText } = render(
      // @ts-expect-error don't need the other props for this test
      <Sponsors row={bill} />
    );

    const sponsors = await findAllByText("Finance");

    expect(sponsors).toHaveLength(2);
  });
});
