import React from "react";
import { render, screen } from "@testing-library/react";
import { uniqueId } from "lodash";

import { COLORS } from "styles/var/colors";

import StatusIndicator from "./StatusIndicator";

describe("StatusIndicator - component", () => {
  it("renders green without tooltip when 'online' passed as prop", () => {
    // const { container } = render(<StatusIndicator value="online" />);
    render(<StatusIndicator value="online" />);
    // const indicator = screen.getByRole("treeitem", { name: /online/ });
    const indicator = screen.getByText("online");

    expect(indicator).toBeInTheDocument();

    // TODO: figure out how to target :before and check its color
    // expect(indicator.before).toHaveStyle(
    //   `background-color: ${COLORS["status-success"]}`
    // );

    // TODO: expect there to be no tooltip
    // TODO: expect there to still be no tooltip on hover
  });

  it("renders green with tooltip, which appears on hover with the right text, when 'online' and tooltip are passed as props", () => {
    const [testID, testTooltipText] = [
      uniqueId("testid_"),
      "test tooltip text",
    ];
    render(
      <StatusIndicator
        value="online"
        tooltip={{ id: testID, tooltipText: testTooltipText }}
      />
    );

    const indicator = screen.getByText("online");
    expect(indicator).toBeInTheDocument();
    // TODO: expect the tooltip to exist and be hidden
    // TODO: expect the tooltip to become visible on hover, containing the tooltiptext
  });

  it("renders grey without a tooltip when 'offline' is passed as a prop", () => {
    // TODO
  });

  it("renders grey with a tooltip, which appears on hover with the right text, when 'offline' and tooltip are passed as props", () => {
    // TODO
  });
});
