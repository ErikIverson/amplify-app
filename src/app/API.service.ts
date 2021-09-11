/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateHousePoints: OnCreateHousePointsSubscription;
  onUpdateHousePoints: OnUpdateHousePointsSubscription;
  onDeleteHousePoints: OnDeleteHousePointsSubscription;
};

export type CreateHousePointsInput = {
  id?: string | null;
  name: string;
  year?: string | null;
  active?: boolean | null;
  points?: number | null;
  attendance?: Array<ValueDescriptionInput | null> | null;
  gpa?: Array<ValueDescriptionInput | null> | null;
  semesters_president?: Array<ValueDescriptionInput | null> | null;
  semesters_ec?: Array<ValueDescriptionInput | null> | null;
  semesters_leadership?: Array<ValueDescriptionInput | null> | null;
  semesters_inHouse?: Array<ValueDescriptionInput | null> | null;
  semesters_active?: Array<ValueDescriptionInput | null> | null;
  certifications?: Array<ValueDescriptionInput | null> | null;
  bmp_phases_completed?: Array<ValueDescriptionInput | null> | null;
  ibl_awards?: Array<ValueDescriptionInput | null> | null;
  semesters_ec_cabinet?: Array<ValueDescriptionInput | null> | null;
  semesters_onCampus_orgs?: Array<ValueDescriptionInput | null> | null;
  sigep_elections?: Array<ValueDescriptionInput | null> | null;
};

export type ValueDescriptionInput = {
  Value?: string | null;
  description?: string | null;
};

export type ModelHousePointsConditionInput = {
  name?: ModelStringInput | null;
  year?: ModelStringInput | null;
  active?: ModelBooleanInput | null;
  points?: ModelFloatInput | null;
  and?: Array<ModelHousePointsConditionInput | null> | null;
  or?: Array<ModelHousePointsConditionInput | null> | null;
  not?: ModelHousePointsConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type HousePoints = {
  __typename: "HousePoints";
  id: string;
  name: string;
  year?: string | null;
  active?: boolean | null;
  points?: number | null;
  attendance?: Array<ValueDescription | null> | null;
  gpa?: Array<ValueDescription | null> | null;
  semesters_president?: Array<ValueDescription | null> | null;
  semesters_ec?: Array<ValueDescription | null> | null;
  semesters_leadership?: Array<ValueDescription | null> | null;
  semesters_inHouse?: Array<ValueDescription | null> | null;
  semesters_active?: Array<ValueDescription | null> | null;
  certifications?: Array<ValueDescription | null> | null;
  bmp_phases_completed?: Array<ValueDescription | null> | null;
  ibl_awards?: Array<ValueDescription | null> | null;
  semesters_ec_cabinet?: Array<ValueDescription | null> | null;
  semesters_onCampus_orgs?: Array<ValueDescription | null> | null;
  sigep_elections?: Array<ValueDescription | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type ValueDescription = {
  __typename: "ValueDescription";
  Value?: string | null;
  description?: string | null;
};

export type UpdateHousePointsInput = {
  id: string;
  name?: string | null;
  year?: string | null;
  active?: boolean | null;
  points?: number | null;
  attendance?: Array<ValueDescriptionInput | null> | null;
  gpa?: Array<ValueDescriptionInput | null> | null;
  semesters_president?: Array<ValueDescriptionInput | null> | null;
  semesters_ec?: Array<ValueDescriptionInput | null> | null;
  semesters_leadership?: Array<ValueDescriptionInput | null> | null;
  semesters_inHouse?: Array<ValueDescriptionInput | null> | null;
  semesters_active?: Array<ValueDescriptionInput | null> | null;
  certifications?: Array<ValueDescriptionInput | null> | null;
  bmp_phases_completed?: Array<ValueDescriptionInput | null> | null;
  ibl_awards?: Array<ValueDescriptionInput | null> | null;
  semesters_ec_cabinet?: Array<ValueDescriptionInput | null> | null;
  semesters_onCampus_orgs?: Array<ValueDescriptionInput | null> | null;
  sigep_elections?: Array<ValueDescriptionInput | null> | null;
};

export type DeleteHousePointsInput = {
  id: string;
};

export type ModelHousePointsFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  year?: ModelStringInput | null;
  active?: ModelBooleanInput | null;
  points?: ModelFloatInput | null;
  and?: Array<ModelHousePointsFilterInput | null> | null;
  or?: Array<ModelHousePointsFilterInput | null> | null;
  not?: ModelHousePointsFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelHousePointsConnection = {
  __typename: "ModelHousePointsConnection";
  items?: Array<HousePoints | null> | null;
  nextToken?: string | null;
};

export type CreateHousePointsMutation = {
  __typename: "HousePoints";
  id: string;
  name: string;
  year?: string | null;
  active?: boolean | null;
  points?: number | null;
  attendance?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  gpa?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_president?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_ec?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_leadership?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_inHouse?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_active?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  certifications?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  bmp_phases_completed?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  ibl_awards?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_ec_cabinet?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_onCampus_orgs?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  sigep_elections?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateHousePointsMutation = {
  __typename: "HousePoints";
  id: string;
  name: string;
  year?: string | null;
  active?: boolean | null;
  points?: number | null;
  attendance?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  gpa?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_president?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_ec?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_leadership?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_inHouse?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_active?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  certifications?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  bmp_phases_completed?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  ibl_awards?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_ec_cabinet?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_onCampus_orgs?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  sigep_elections?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteHousePointsMutation = {
  __typename: "HousePoints";
  id: string;
  name: string;
  year?: string | null;
  active?: boolean | null;
  points?: number | null;
  attendance?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  gpa?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_president?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_ec?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_leadership?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_inHouse?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_active?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  certifications?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  bmp_phases_completed?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  ibl_awards?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_ec_cabinet?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_onCampus_orgs?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  sigep_elections?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type GetHousePointsQuery = {
  __typename: "HousePoints";
  id: string;
  name: string;
  year?: string | null;
  active?: boolean | null;
  points?: number | null;
  attendance?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  gpa?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_president?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_ec?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_leadership?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_inHouse?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_active?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  certifications?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  bmp_phases_completed?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  ibl_awards?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_ec_cabinet?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_onCampus_orgs?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  sigep_elections?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type ListHousePointsQuery = {
  __typename: "ModelHousePointsConnection";
  items?: Array<{
    __typename: "HousePoints";
    id: string;
    name: string;
    year?: string | null;
    active?: boolean | null;
    points?: number | null;
    attendance?: Array<{
      __typename: "ValueDescription";
      Value?: string | null;
      description?: string | null;
    } | null> | null;
    gpa?: Array<{
      __typename: "ValueDescription";
      Value?: string | null;
      description?: string | null;
    } | null> | null;
    semesters_president?: Array<{
      __typename: "ValueDescription";
      Value?: string | null;
      description?: string | null;
    } | null> | null;
    semesters_ec?: Array<{
      __typename: "ValueDescription";
      Value?: string | null;
      description?: string | null;
    } | null> | null;
    semesters_leadership?: Array<{
      __typename: "ValueDescription";
      Value?: string | null;
      description?: string | null;
    } | null> | null;
    semesters_inHouse?: Array<{
      __typename: "ValueDescription";
      Value?: string | null;
      description?: string | null;
    } | null> | null;
    semesters_active?: Array<{
      __typename: "ValueDescription";
      Value?: string | null;
      description?: string | null;
    } | null> | null;
    certifications?: Array<{
      __typename: "ValueDescription";
      Value?: string | null;
      description?: string | null;
    } | null> | null;
    bmp_phases_completed?: Array<{
      __typename: "ValueDescription";
      Value?: string | null;
      description?: string | null;
    } | null> | null;
    ibl_awards?: Array<{
      __typename: "ValueDescription";
      Value?: string | null;
      description?: string | null;
    } | null> | null;
    semesters_ec_cabinet?: Array<{
      __typename: "ValueDescription";
      Value?: string | null;
      description?: string | null;
    } | null> | null;
    semesters_onCampus_orgs?: Array<{
      __typename: "ValueDescription";
      Value?: string | null;
      description?: string | null;
    } | null> | null;
    sigep_elections?: Array<{
      __typename: "ValueDescription";
      Value?: string | null;
      description?: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateHousePointsSubscription = {
  __typename: "HousePoints";
  id: string;
  name: string;
  year?: string | null;
  active?: boolean | null;
  points?: number | null;
  attendance?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  gpa?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_president?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_ec?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_leadership?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_inHouse?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_active?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  certifications?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  bmp_phases_completed?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  ibl_awards?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_ec_cabinet?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_onCampus_orgs?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  sigep_elections?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateHousePointsSubscription = {
  __typename: "HousePoints";
  id: string;
  name: string;
  year?: string | null;
  active?: boolean | null;
  points?: number | null;
  attendance?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  gpa?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_president?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_ec?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_leadership?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_inHouse?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_active?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  certifications?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  bmp_phases_completed?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  ibl_awards?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_ec_cabinet?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_onCampus_orgs?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  sigep_elections?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteHousePointsSubscription = {
  __typename: "HousePoints";
  id: string;
  name: string;
  year?: string | null;
  active?: boolean | null;
  points?: number | null;
  attendance?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  gpa?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_president?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_ec?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_leadership?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_inHouse?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_active?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  certifications?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  bmp_phases_completed?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  ibl_awards?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_ec_cabinet?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  semesters_onCampus_orgs?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  sigep_elections?: Array<{
    __typename: "ValueDescription";
    Value?: string | null;
    description?: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateHousePoints(
    input: CreateHousePointsInput,
    condition?: ModelHousePointsConditionInput
  ): Promise<CreateHousePointsMutation> {
    const statement = `mutation CreateHousePoints($input: CreateHousePointsInput!, $condition: ModelHousePointsConditionInput) {
        createHousePoints(input: $input, condition: $condition) {
          __typename
          id
          name
          year
          active
          points
          attendance {
            __typename
            Value
            description
          }
          gpa {
            __typename
            Value
            description
          }
          semesters_president {
            __typename
            Value
            description
          }
          semesters_ec {
            __typename
            Value
            description
          }
          semesters_leadership {
            __typename
            Value
            description
          }
          semesters_inHouse {
            __typename
            Value
            description
          }
          semesters_active {
            __typename
            Value
            description
          }
          certifications {
            __typename
            Value
            description
          }
          bmp_phases_completed {
            __typename
            Value
            description
          }
          ibl_awards {
            __typename
            Value
            description
          }
          semesters_ec_cabinet {
            __typename
            Value
            description
          }
          semesters_onCampus_orgs {
            __typename
            Value
            description
          }
          sigep_elections {
            __typename
            Value
            description
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateHousePointsMutation>response.data.createHousePoints;
  }
  async UpdateHousePoints(
    input: UpdateHousePointsInput,
    condition?: ModelHousePointsConditionInput
  ): Promise<UpdateHousePointsMutation> {
    const statement = `mutation UpdateHousePoints($input: UpdateHousePointsInput!, $condition: ModelHousePointsConditionInput) {
        updateHousePoints(input: $input, condition: $condition) {
          __typename
          id
          name
          year
          active
          points
          attendance {
            __typename
            Value
            description
          }
          gpa {
            __typename
            Value
            description
          }
          semesters_president {
            __typename
            Value
            description
          }
          semesters_ec {
            __typename
            Value
            description
          }
          semesters_leadership {
            __typename
            Value
            description
          }
          semesters_inHouse {
            __typename
            Value
            description
          }
          semesters_active {
            __typename
            Value
            description
          }
          certifications {
            __typename
            Value
            description
          }
          bmp_phases_completed {
            __typename
            Value
            description
          }
          ibl_awards {
            __typename
            Value
            description
          }
          semesters_ec_cabinet {
            __typename
            Value
            description
          }
          semesters_onCampus_orgs {
            __typename
            Value
            description
          }
          sigep_elections {
            __typename
            Value
            description
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateHousePointsMutation>response.data.updateHousePoints;
  }
  async DeleteHousePoints(
    input: DeleteHousePointsInput,
    condition?: ModelHousePointsConditionInput
  ): Promise<DeleteHousePointsMutation> {
    const statement = `mutation DeleteHousePoints($input: DeleteHousePointsInput!, $condition: ModelHousePointsConditionInput) {
        deleteHousePoints(input: $input, condition: $condition) {
          __typename
          id
          name
          year
          active
          points
          attendance {
            __typename
            Value
            description
          }
          gpa {
            __typename
            Value
            description
          }
          semesters_president {
            __typename
            Value
            description
          }
          semesters_ec {
            __typename
            Value
            description
          }
          semesters_leadership {
            __typename
            Value
            description
          }
          semesters_inHouse {
            __typename
            Value
            description
          }
          semesters_active {
            __typename
            Value
            description
          }
          certifications {
            __typename
            Value
            description
          }
          bmp_phases_completed {
            __typename
            Value
            description
          }
          ibl_awards {
            __typename
            Value
            description
          }
          semesters_ec_cabinet {
            __typename
            Value
            description
          }
          semesters_onCampus_orgs {
            __typename
            Value
            description
          }
          sigep_elections {
            __typename
            Value
            description
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteHousePointsMutation>response.data.deleteHousePoints;
  }
  async GetHousePoints(id: string): Promise<GetHousePointsQuery> {
    const statement = `query GetHousePoints($id: ID!) {
        getHousePoints(id: $id) {
          __typename
          id
          name
          year
          active
          points
          attendance {
            __typename
            Value
            description
          }
          gpa {
            __typename
            Value
            description
          }
          semesters_president {
            __typename
            Value
            description
          }
          semesters_ec {
            __typename
            Value
            description
          }
          semesters_leadership {
            __typename
            Value
            description
          }
          semesters_inHouse {
            __typename
            Value
            description
          }
          semesters_active {
            __typename
            Value
            description
          }
          certifications {
            __typename
            Value
            description
          }
          bmp_phases_completed {
            __typename
            Value
            description
          }
          ibl_awards {
            __typename
            Value
            description
          }
          semesters_ec_cabinet {
            __typename
            Value
            description
          }
          semesters_onCampus_orgs {
            __typename
            Value
            description
          }
          sigep_elections {
            __typename
            Value
            description
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetHousePointsQuery>response.data.getHousePoints;
  }
  async ListHousePoints(
    filter?: ModelHousePointsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListHousePointsQuery> {
    const statement = `query ListHousePoints($filter: ModelHousePointsFilterInput, $limit: Int, $nextToken: String) {
        listHousePoints(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            year
            active
            points
            attendance {
              __typename
              Value
              description
            }
            gpa {
              __typename
              Value
              description
            }
            semesters_president {
              __typename
              Value
              description
            }
            semesters_ec {
              __typename
              Value
              description
            }
            semesters_leadership {
              __typename
              Value
              description
            }
            semesters_inHouse {
              __typename
              Value
              description
            }
            semesters_active {
              __typename
              Value
              description
            }
            certifications {
              __typename
              Value
              description
            }
            bmp_phases_completed {
              __typename
              Value
              description
            }
            ibl_awards {
              __typename
              Value
              description
            }
            semesters_ec_cabinet {
              __typename
              Value
              description
            }
            semesters_onCampus_orgs {
              __typename
              Value
              description
            }
            sigep_elections {
              __typename
              Value
              description
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListHousePointsQuery>response.data.listHousePoints;
  }
  OnCreateHousePointsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateHousePoints">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateHousePoints {
        onCreateHousePoints {
          __typename
          id
          name
          year
          active
          points
          attendance {
            __typename
            Value
            description
          }
          gpa {
            __typename
            Value
            description
          }
          semesters_president {
            __typename
            Value
            description
          }
          semesters_ec {
            __typename
            Value
            description
          }
          semesters_leadership {
            __typename
            Value
            description
          }
          semesters_inHouse {
            __typename
            Value
            description
          }
          semesters_active {
            __typename
            Value
            description
          }
          certifications {
            __typename
            Value
            description
          }
          bmp_phases_completed {
            __typename
            Value
            description
          }
          ibl_awards {
            __typename
            Value
            description
          }
          semesters_ec_cabinet {
            __typename
            Value
            description
          }
          semesters_onCampus_orgs {
            __typename
            Value
            description
          }
          sigep_elections {
            __typename
            Value
            description
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateHousePoints">>
  >;

  OnUpdateHousePointsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateHousePoints">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateHousePoints {
        onUpdateHousePoints {
          __typename
          id
          name
          year
          active
          points
          attendance {
            __typename
            Value
            description
          }
          gpa {
            __typename
            Value
            description
          }
          semesters_president {
            __typename
            Value
            description
          }
          semesters_ec {
            __typename
            Value
            description
          }
          semesters_leadership {
            __typename
            Value
            description
          }
          semesters_inHouse {
            __typename
            Value
            description
          }
          semesters_active {
            __typename
            Value
            description
          }
          certifications {
            __typename
            Value
            description
          }
          bmp_phases_completed {
            __typename
            Value
            description
          }
          ibl_awards {
            __typename
            Value
            description
          }
          semesters_ec_cabinet {
            __typename
            Value
            description
          }
          semesters_onCampus_orgs {
            __typename
            Value
            description
          }
          sigep_elections {
            __typename
            Value
            description
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateHousePoints">>
  >;

  OnDeleteHousePointsListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteHousePoints">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteHousePoints {
        onDeleteHousePoints {
          __typename
          id
          name
          year
          active
          points
          attendance {
            __typename
            Value
            description
          }
          gpa {
            __typename
            Value
            description
          }
          semesters_president {
            __typename
            Value
            description
          }
          semesters_ec {
            __typename
            Value
            description
          }
          semesters_leadership {
            __typename
            Value
            description
          }
          semesters_inHouse {
            __typename
            Value
            description
          }
          semesters_active {
            __typename
            Value
            description
          }
          certifications {
            __typename
            Value
            description
          }
          bmp_phases_completed {
            __typename
            Value
            description
          }
          ibl_awards {
            __typename
            Value
            description
          }
          semesters_ec_cabinet {
            __typename
            Value
            description
          }
          semesters_onCampus_orgs {
            __typename
            Value
            description
          }
          sigep_elections {
            __typename
            Value
            description
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteHousePoints">>
  >;
}
