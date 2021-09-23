/*
 *
 *  * Copyright (c) 2021 AccelByte Inc. All Rights Reserved.
 *  * This is licensed software from AccelByte Inc, for limitations
 *  * and restrictions contact your company contract manager.
 *
 */

import * as React from "react";
import { SelectOption } from "../../types";
import { FieldErrorMessage, FieldLabel } from "../Form/utility";
import { Select } from "..";

interface Props {
  label?: string;
  placeholder: string;
  options: SelectOption[];
  errMessage?: string;
  onChange: (option: SelectOption) => void;
  optionalLabel?: string;
  isInvalid?: boolean;
  isDisabled?: boolean;
  value?: SelectOption[] | null;
  tooltip?: string;
}

const ValidMultiSelect = ({
  label,
  placeholder,
  options = [],
  onChange,
  errMessage,
  optionalLabel,
  isInvalid,
  value,
  isDisabled,
  tooltip,
}: Props) => (
  <>
    {!!label && (
      <FieldLabel label={label} optionalLabel={optionalLabel}>
        {tooltip && <i className="icon-info" data-tip={tooltip} />}
      </FieldLabel>
    )}
    <Select
      className="react-select"
      isDisabled={isDisabled}
      classNamePrefix="select"
      options={options}
      isMulti
      isSearchable={true}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      menuPlacement="auto"
    />
    {!optionalLabel && isInvalid && <FieldErrorMessage message={errMessage} />}
  </>
);

export default ValidMultiSelect;