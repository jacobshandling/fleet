import React, { useState, useContext } from "react";

import { AppContext } from "context/app";
import configAPI from "services/entities/config";
import { useQuery } from "react-query";

import Modal from "components/Modal";
import Button from "components/buttons/Button";

// @ts-ignore
import Dropdown from "components/forms/fields/Dropdown";

import { ITeamSummary } from "interfaces/team";
import { isPremiumTier } from "utilities/permissions/permissions";

interface IEditTeamModal {
  onCancel: () => void;
  currentDefaultTeamName: string | undefined;
}

const baseClass = "edit-team-modal";

const EditTeamModal = ({
  onCancel,
  currentDefaultTeamName, // assuming this is a team NAME - need to confirm with Rachel and whoever's doing the API about IMdmAppleBm.default_team
}: IEditTeamModal): JSX.Element => {
  // availableTeams: Array<ITeamSummary>
  const { availableTeams } = useContext(AppContext);
  console.log(availableTeams);

  const teamNameOptions = availableTeams?.map((teamSummary) => {
    return { value: teamSummary.name, label: teamSummary.name };
  });
  console.log(teamNameOptions);

  const [defaultTeamName, setDefaultTeamName] = useState<string | undefined>(
    currentDefaultTeamName
  );

  const onFormSubmit = (): void => {
    // TODO: clarify which API to hit, how to hit it
    // PATCH /api/v1/fleet/config with { apple_bm_default_team: string }	in request body

    // API call sketch:
    // const {
    //   isLoading: updatingDefaultTeam,
    //   data: defaultTeamUpdateResponse,
    //   error: defaultTeamUpdateError
    // } = useQuery<IUpdateMDMAppleDefaultTeam, Error, IUpdateMDMAppleDefaultTeam>(
    //   ["mdmDefaultTeam"],
    //   () => mdmAppleBmAPI.update(default_team: defaultTeamName),
    //   {
    //     enabled: isPremiumTier,
    //     staleTime: 5000,
    //   }
    // )

    // placeholder:
    alert(`Default team (not actually) changed to ${defaultTeamName}`);
    onCancel();
  };

  return (
    <Modal title="Edit team" onExit={onCancel} className={baseClass}>
      <form className={`${baseClass}__form`} onSubmit={onFormSubmit}>
        <div className="bottom-label">
          <Dropdown
            placeholder={defaultTeamName ?? "No team"}
            options={teamNameOptions}
            onChange={setDefaultTeamName}
            value={defaultTeamName ?? ""}
            label="Team"
          />
          <p>
            macOS hosts will be added to this team when they&apos;re first
            unboxed.
          </p>
        </div>
        <div className="modal-cta-wrap">
          <Button type="submit" variant="brand">
            Save
          </Button>
          <Button onClick={onCancel} variant="inverse">
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EditTeamModal;
