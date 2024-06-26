/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReasonComplaintsCreateFormInputValues = {
    name?: string;
};
export declare type ReasonComplaintsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReasonComplaintsCreateFormOverridesProps = {
    ReasonComplaintsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReasonComplaintsCreateFormProps = React.PropsWithChildren<{
    overrides?: ReasonComplaintsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReasonComplaintsCreateFormInputValues) => ReasonComplaintsCreateFormInputValues;
    onSuccess?: (fields: ReasonComplaintsCreateFormInputValues) => void;
    onError?: (fields: ReasonComplaintsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReasonComplaintsCreateFormInputValues) => ReasonComplaintsCreateFormInputValues;
    onValidate?: ReasonComplaintsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReasonComplaintsCreateForm(props: ReasonComplaintsCreateFormProps): React.ReactElement;
