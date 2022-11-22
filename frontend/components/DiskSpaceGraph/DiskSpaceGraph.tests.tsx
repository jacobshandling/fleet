import React from "react";
import { render, screen } from "@testing-library/react";

import DiskSpaceGraph from ".";

describe("Diskspace Graph", () => {
  it("renders 'No data available' when gigsDiskSpaceAvailable === 0", () => {
    render(
      <DiskSpaceGraph
        baseClass="test-class"
        gigsDiskSpaceAvailable={0}
        percentDiskSpaceAvailable={0}
        id="test-diskspacegraph-id"
        platform="mac"
      />
    );

    expect(screen.getByText("No data available")).toBeInTheDocument();
  });

  it("renders 'No data available' when gigsDiskSpaceAvailable === '---'", () => {
    render(
      <DiskSpaceGraph
        baseClass="test-class"
        gigsDiskSpaceAvailable={"---"}
        percentDiskSpaceAvailable={0}
        id="test-diskspacegraph-id"
        platform="mac"
      />
    );

    expect(screen.getByText("No data available")).toBeInTheDocument();
  });

  it("renders a diskspace indicator who's width === % disk space available", () => {
    const TEST_PCT_SPACE_AVAILABLE = 100;
    render(
      <DiskSpaceGraph
        baseClass="test-class"
        gigsDiskSpaceAvailable={100}
        percentDiskSpaceAvailable={TEST_PCT_SPACE_AVAILABLE}
        id="test-id"
        platform="mac"
      />
    );

    const indicator = screen.getByTitle("disk space indicator");
    expect(indicator).toBeInTheDocument();
    expect(indicator).toHaveStyle(`width: ${TEST_PCT_SPACE_AVAILABLE}`);
  });

  it("doesn't display a tooltip if the host platform is Linux", () => {});

  it("displays the small OS updates tooltip if there are less than 16 GB available on Mac or Windows", () => {});

  it("displays large OS updates tooltip if 16 GB <= disk space available < 32 GB on Mac or Windows", () => {});

  it("always displays a green indicator on Linux", () => {});

  it("displays a red indicator for low disk space on Mac or Windows", () => {});

  it("displays a yellow indicator for medium disk space on Mac or Windows", () => {});

  it("displays a green indicator for plenty of disk space on Mac or Windows", () => {});
});
