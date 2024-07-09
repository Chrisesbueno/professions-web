/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Logs } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function LogsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userID: "",
    type: "",
    text: "",
    businessID: "",
    posI: "",
    posE: "",
    name: "",
  };
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [type, setType] = React.useState(initialValues.type);
  const [text, setText] = React.useState(initialValues.text);
  const [businessID, setBusinessID] = React.useState(initialValues.businessID);
  const [posI, setPosI] = React.useState(initialValues.posI);
  const [posE, setPosE] = React.useState(initialValues.posE);
  const [name, setName] = React.useState(initialValues.name);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUserID(initialValues.userID);
    setType(initialValues.type);
    setText(initialValues.text);
    setBusinessID(initialValues.businessID);
    setPosI(initialValues.posI);
    setPosE(initialValues.posE);
    setName(initialValues.name);
    setErrors({});
  };
  const validations = {
    userID: [{ type: "Required" }],
    type: [],
    text: [],
    businessID: [],
    posI: [],
    posE: [],
    name: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          userID,
          type,
          text,
          businessID,
          posI,
          posE,
          name,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Logs(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "LogsCreateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID: value,
              type,
              text,
              businessID,
              posI,
              posE,
              name,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
      ></TextField>
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              type: value,
              text,
              businessID,
              posI,
              posE,
              name,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="Search"
          value="SEARCH"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Business view"
          value="BUSINESS_VIEW"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Text"
        isRequired={false}
        isReadOnly={false}
        value={text}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              type,
              text: value,
              businessID,
              posI,
              posE,
              name,
            };
            const result = onChange(modelFields);
            value = result?.text ?? value;
          }
          if (errors.text?.hasError) {
            runValidationTasks("text", value);
          }
          setText(value);
        }}
        onBlur={() => runValidationTasks("text", text)}
        errorMessage={errors.text?.errorMessage}
        hasError={errors.text?.hasError}
        {...getOverrideProps(overrides, "text")}
      ></TextField>
      <TextField
        label="Business id"
        isRequired={false}
        isReadOnly={false}
        value={businessID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              type,
              text,
              businessID: value,
              posI,
              posE,
              name,
            };
            const result = onChange(modelFields);
            value = result?.businessID ?? value;
          }
          if (errors.businessID?.hasError) {
            runValidationTasks("businessID", value);
          }
          setBusinessID(value);
        }}
        onBlur={() => runValidationTasks("businessID", businessID)}
        errorMessage={errors.businessID?.errorMessage}
        hasError={errors.businessID?.hasError}
        {...getOverrideProps(overrides, "businessID")}
      ></TextField>
      <TextField
        label="Pos i"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={posI}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userID,
              type,
              text,
              businessID,
              posI: value,
              posE,
              name,
            };
            const result = onChange(modelFields);
            value = result?.posI ?? value;
          }
          if (errors.posI?.hasError) {
            runValidationTasks("posI", value);
          }
          setPosI(value);
        }}
        onBlur={() => runValidationTasks("posI", posI)}
        errorMessage={errors.posI?.errorMessage}
        hasError={errors.posI?.hasError}
        {...getOverrideProps(overrides, "posI")}
      ></TextField>
      <TextField
        label="Pos e"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={posE}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              userID,
              type,
              text,
              businessID,
              posI,
              posE: value,
              name,
            };
            const result = onChange(modelFields);
            value = result?.posE ?? value;
          }
          if (errors.posE?.hasError) {
            runValidationTasks("posE", value);
          }
          setPosE(value);
        }}
        onBlur={() => runValidationTasks("posE", posE)}
        errorMessage={errors.posE?.errorMessage}
        hasError={errors.posE?.hasError}
        {...getOverrideProps(overrides, "posE")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              type,
              text,
              businessID,
              posI,
              posE,
              name: value,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
