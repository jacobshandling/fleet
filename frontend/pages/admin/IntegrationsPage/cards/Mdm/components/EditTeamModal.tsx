import React, { useState, useContext } from "react";

import { AppContext } from "context/app";
import configAPI from "services/entities/config";
import { useQuery } from "react-query";

import Modal from "components/Modal";
import Button from "components/buttons/Button";

// @ts-ignore
import Dropdown from "components/forms/fields/Dropdown";

interface IEditTeamModal {
  onCancel: () => void;
}

const baseClass = "edit-team-modal";

const EditTeamModal = ({ onCancel }: IEditTeamModal): JSX.Element => {
  // TODO - get default team:
  // "The default team is saved in the global app config property mdm.apple_bm_default_team."
  // GET /api/v1/fleet/config

  // const {
  //   data: apple_bm_default_team,
  //   isLoading: isLoadingAppleBmDefaultTeam,
  //   error: errorAppleBmDefaultTeam,
  // } = useQuery<
  //   IAppleBMDefaultTeamResponse, // interface of the team response should go here - may already exist somewhere? if not, make it
  //   Error,
  //   { id: number; name: string; description: string }
  // >(["apple_bm_default_team"], () => configAPI.loadAll(), {
  //   select: (data) => data.apple_bm_default_team,
  // });

  // trying directly, without useQuery:
  // let apple_bm_default_team: {id: number, name: string, description: string};
  // const getCurrentTeam = async () => {
  //   try {
  //     ({ apple_bm_default_team }) = await configAPI.loadAll();
  //   } catch (error) {
  //     // do something?
  //   }();

  const { availableTeams } = useContext(AppContext);
  console.log(availableTeams);

  const createTeamDropdownOptions = () => {
    return availableTeams?.map((teamObject) => {
      return { value: teamObject.id, label: teamObject.name };
    });
  };

  const onChangeSelectTeam = () => {
    // TODO
  };
  const onFormSubmit = (): void => {
    // TODO: API call
    // PATCH /api/v1/fleet/config with { apple_bm_default_team: string }	in request body
    alert("Team change submitted! Not really.");
    onCancel();
  };

  return (
    <Modal title="Edit team" onExit={onCancel} className={baseClass}>
      <form className={`${baseClass}__form`} onSubmit={onFormSubmit}>
        <div className="bottom-label">
          <Dropdown
            searchable
            placeholder="No team"
            options={createTeamDropdownOptions()}
            onChange={onChangeSelectTeam}
            // value={currentTeam}
            label="Team"
          />
          <p>
            macOS hosts will be added to this team when they&apos;re first
            unboxed.
          </p>
        </div>
        <div className="modal-cta-wrap">
          <Button
            type="submit"
            variant="brand"
            // isLoading={requestState === "loading"}
          >
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
