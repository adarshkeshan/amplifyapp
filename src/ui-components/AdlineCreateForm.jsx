/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Adline } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AdlineCreateForm(props) {
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
    dim_ad_id: "",
    ad_name: "",
    ad_cfid: "",
    ad_url: "",
    ad_status: "",
    ms_ss: "",
    line_item_type: "",
    sales_vertical: "",
    advertiser_vertical: "",
    advertiser_cfid: "",
    advertiser_name: "",
    service_type: "",
    advertiser_industry: "",
    advertiser_sub_industry: "",
    campaign_cfid: "",
    campaign_name: "",
    campaign_goal: "",
    campaign_goal_category: "",
    is_supply_3px: "",
    is_supply_ono: "",
    is_supply_aps: "",
    is_endemic: "",
    is_onsite: "",
    is_offsite: "",
    base_bid: "",
    dim_date: "",
    impressions: "",
    spend: "",
    clicks: "",
    m2_considerations_click: "",
    purchases: "",
    purchase_amounts: "",
    avg_max_bid: "",
    number_bid_request_eligible: "",
    number_bid_request_won_in_cs: "",
    number_impressions: "",
    total_impression_at_max_bid: "",
    internal_win_rate: "",
    external_win_rate: "",
    average_bidamount_among_bids: "",
  };
  const [dim_ad_id, setDim_ad_id] = React.useState(initialValues.dim_ad_id);
  const [ad_name, setAd_name] = React.useState(initialValues.ad_name);
  const [ad_cfid, setAd_cfid] = React.useState(initialValues.ad_cfid);
  const [ad_url, setAd_url] = React.useState(initialValues.ad_url);
  const [ad_status, setAd_status] = React.useState(initialValues.ad_status);
  const [ms_ss, setMs_ss] = React.useState(initialValues.ms_ss);
  const [line_item_type, setLine_item_type] = React.useState(
    initialValues.line_item_type
  );
  const [sales_vertical, setSales_vertical] = React.useState(
    initialValues.sales_vertical
  );
  const [advertiser_vertical, setAdvertiser_vertical] = React.useState(
    initialValues.advertiser_vertical
  );
  const [advertiser_cfid, setAdvertiser_cfid] = React.useState(
    initialValues.advertiser_cfid
  );
  const [advertiser_name, setAdvertiser_name] = React.useState(
    initialValues.advertiser_name
  );
  const [service_type, setService_type] = React.useState(
    initialValues.service_type
  );
  const [advertiser_industry, setAdvertiser_industry] = React.useState(
    initialValues.advertiser_industry
  );
  const [advertiser_sub_industry, setAdvertiser_sub_industry] = React.useState(
    initialValues.advertiser_sub_industry
  );
  const [campaign_cfid, setCampaign_cfid] = React.useState(
    initialValues.campaign_cfid
  );
  const [campaign_name, setCampaign_name] = React.useState(
    initialValues.campaign_name
  );
  const [campaign_goal, setCampaign_goal] = React.useState(
    initialValues.campaign_goal
  );
  const [campaign_goal_category, setCampaign_goal_category] = React.useState(
    initialValues.campaign_goal_category
  );
  const [is_supply_3px, setIs_supply_3px] = React.useState(
    initialValues.is_supply_3px
  );
  const [is_supply_ono, setIs_supply_ono] = React.useState(
    initialValues.is_supply_ono
  );
  const [is_supply_aps, setIs_supply_aps] = React.useState(
    initialValues.is_supply_aps
  );
  const [is_endemic, setIs_endemic] = React.useState(initialValues.is_endemic);
  const [is_onsite, setIs_onsite] = React.useState(initialValues.is_onsite);
  const [is_offsite, setIs_offsite] = React.useState(initialValues.is_offsite);
  const [base_bid, setBase_bid] = React.useState(initialValues.base_bid);
  const [dim_date, setDim_date] = React.useState(initialValues.dim_date);
  const [impressions, setImpressions] = React.useState(
    initialValues.impressions
  );
  const [spend, setSpend] = React.useState(initialValues.spend);
  const [clicks, setClicks] = React.useState(initialValues.clicks);
  const [m2_considerations_click, setM2_considerations_click] = React.useState(
    initialValues.m2_considerations_click
  );
  const [purchases, setPurchases] = React.useState(initialValues.purchases);
  const [purchase_amounts, setPurchase_amounts] = React.useState(
    initialValues.purchase_amounts
  );
  const [avg_max_bid, setAvg_max_bid] = React.useState(
    initialValues.avg_max_bid
  );
  const [number_bid_request_eligible, setNumber_bid_request_eligible] =
    React.useState(initialValues.number_bid_request_eligible);
  const [number_bid_request_won_in_cs, setNumber_bid_request_won_in_cs] =
    React.useState(initialValues.number_bid_request_won_in_cs);
  const [number_impressions, setNumber_impressions] = React.useState(
    initialValues.number_impressions
  );
  const [total_impression_at_max_bid, setTotal_impression_at_max_bid] =
    React.useState(initialValues.total_impression_at_max_bid);
  const [internal_win_rate, setInternal_win_rate] = React.useState(
    initialValues.internal_win_rate
  );
  const [external_win_rate, setExternal_win_rate] = React.useState(
    initialValues.external_win_rate
  );
  const [average_bidamount_among_bids, setAverage_bidamount_among_bids] =
    React.useState(initialValues.average_bidamount_among_bids);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDim_ad_id(initialValues.dim_ad_id);
    setAd_name(initialValues.ad_name);
    setAd_cfid(initialValues.ad_cfid);
    setAd_url(initialValues.ad_url);
    setAd_status(initialValues.ad_status);
    setMs_ss(initialValues.ms_ss);
    setLine_item_type(initialValues.line_item_type);
    setSales_vertical(initialValues.sales_vertical);
    setAdvertiser_vertical(initialValues.advertiser_vertical);
    setAdvertiser_cfid(initialValues.advertiser_cfid);
    setAdvertiser_name(initialValues.advertiser_name);
    setService_type(initialValues.service_type);
    setAdvertiser_industry(initialValues.advertiser_industry);
    setAdvertiser_sub_industry(initialValues.advertiser_sub_industry);
    setCampaign_cfid(initialValues.campaign_cfid);
    setCampaign_name(initialValues.campaign_name);
    setCampaign_goal(initialValues.campaign_goal);
    setCampaign_goal_category(initialValues.campaign_goal_category);
    setIs_supply_3px(initialValues.is_supply_3px);
    setIs_supply_ono(initialValues.is_supply_ono);
    setIs_supply_aps(initialValues.is_supply_aps);
    setIs_endemic(initialValues.is_endemic);
    setIs_onsite(initialValues.is_onsite);
    setIs_offsite(initialValues.is_offsite);
    setBase_bid(initialValues.base_bid);
    setDim_date(initialValues.dim_date);
    setImpressions(initialValues.impressions);
    setSpend(initialValues.spend);
    setClicks(initialValues.clicks);
    setM2_considerations_click(initialValues.m2_considerations_click);
    setPurchases(initialValues.purchases);
    setPurchase_amounts(initialValues.purchase_amounts);
    setAvg_max_bid(initialValues.avg_max_bid);
    setNumber_bid_request_eligible(initialValues.number_bid_request_eligible);
    setNumber_bid_request_won_in_cs(initialValues.number_bid_request_won_in_cs);
    setNumber_impressions(initialValues.number_impressions);
    setTotal_impression_at_max_bid(initialValues.total_impression_at_max_bid);
    setInternal_win_rate(initialValues.internal_win_rate);
    setExternal_win_rate(initialValues.external_win_rate);
    setAverage_bidamount_among_bids(initialValues.average_bidamount_among_bids);
    setErrors({});
  };
  const validations = {
    dim_ad_id: [{ type: "Required" }],
    ad_name: [],
    ad_cfid: [],
    ad_url: [],
    ad_status: [],
    ms_ss: [],
    line_item_type: [],
    sales_vertical: [],
    advertiser_vertical: [],
    advertiser_cfid: [],
    advertiser_name: [],
    service_type: [],
    advertiser_industry: [],
    advertiser_sub_industry: [],
    campaign_cfid: [],
    campaign_name: [],
    campaign_goal: [],
    campaign_goal_category: [],
    is_supply_3px: [],
    is_supply_ono: [],
    is_supply_aps: [],
    is_endemic: [],
    is_onsite: [],
    is_offsite: [],
    base_bid: [],
    dim_date: [{ type: "Required" }],
    impressions: [],
    spend: [],
    clicks: [],
    m2_considerations_click: [],
    purchases: [],
    purchase_amounts: [],
    avg_max_bid: [],
    number_bid_request_eligible: [],
    number_bid_request_won_in_cs: [],
    number_impressions: [],
    total_impression_at_max_bid: [],
    internal_win_rate: [],
    external_win_rate: [],
    average_bidamount_among_bids: [],
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
          dim_ad_id,
          ad_name,
          ad_cfid,
          ad_url,
          ad_status,
          ms_ss,
          line_item_type,
          sales_vertical,
          advertiser_vertical,
          advertiser_cfid,
          advertiser_name,
          service_type,
          advertiser_industry,
          advertiser_sub_industry,
          campaign_cfid,
          campaign_name,
          campaign_goal,
          campaign_goal_category,
          is_supply_3px,
          is_supply_ono,
          is_supply_aps,
          is_endemic,
          is_onsite,
          is_offsite,
          base_bid,
          dim_date,
          impressions,
          spend,
          clicks,
          m2_considerations_click,
          purchases,
          purchase_amounts,
          avg_max_bid,
          number_bid_request_eligible,
          number_bid_request_won_in_cs,
          number_impressions,
          total_impression_at_max_bid,
          internal_win_rate,
          external_win_rate,
          average_bidamount_among_bids,
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
          await DataStore.save(new Adline(modelFields));
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
      {...getOverrideProps(overrides, "AdlineCreateForm")}
      {...rest}
    >
      <TextField
        label="Dim ad id"
        isRequired={true}
        isReadOnly={false}
        value={dim_ad_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dim_ad_id: value,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.dim_ad_id ?? value;
          }
          if (errors.dim_ad_id?.hasError) {
            runValidationTasks("dim_ad_id", value);
          }
          setDim_ad_id(value);
        }}
        onBlur={() => runValidationTasks("dim_ad_id", dim_ad_id)}
        errorMessage={errors.dim_ad_id?.errorMessage}
        hasError={errors.dim_ad_id?.hasError}
        {...getOverrideProps(overrides, "dim_ad_id")}
      ></TextField>
      <TextField
        label="Ad name"
        isRequired={false}
        isReadOnly={false}
        value={ad_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name: value,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.ad_name ?? value;
          }
          if (errors.ad_name?.hasError) {
            runValidationTasks("ad_name", value);
          }
          setAd_name(value);
        }}
        onBlur={() => runValidationTasks("ad_name", ad_name)}
        errorMessage={errors.ad_name?.errorMessage}
        hasError={errors.ad_name?.hasError}
        {...getOverrideProps(overrides, "ad_name")}
      ></TextField>
      <TextField
        label="Ad cfid"
        isRequired={false}
        isReadOnly={false}
        value={ad_cfid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid: value,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.ad_cfid ?? value;
          }
          if (errors.ad_cfid?.hasError) {
            runValidationTasks("ad_cfid", value);
          }
          setAd_cfid(value);
        }}
        onBlur={() => runValidationTasks("ad_cfid", ad_cfid)}
        errorMessage={errors.ad_cfid?.errorMessage}
        hasError={errors.ad_cfid?.hasError}
        {...getOverrideProps(overrides, "ad_cfid")}
      ></TextField>
      <TextField
        label="Ad url"
        isRequired={false}
        isReadOnly={false}
        value={ad_url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url: value,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.ad_url ?? value;
          }
          if (errors.ad_url?.hasError) {
            runValidationTasks("ad_url", value);
          }
          setAd_url(value);
        }}
        onBlur={() => runValidationTasks("ad_url", ad_url)}
        errorMessage={errors.ad_url?.errorMessage}
        hasError={errors.ad_url?.hasError}
        {...getOverrideProps(overrides, "ad_url")}
      ></TextField>
      <TextField
        label="Ad status"
        isRequired={false}
        isReadOnly={false}
        value={ad_status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status: value,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.ad_status ?? value;
          }
          if (errors.ad_status?.hasError) {
            runValidationTasks("ad_status", value);
          }
          setAd_status(value);
        }}
        onBlur={() => runValidationTasks("ad_status", ad_status)}
        errorMessage={errors.ad_status?.errorMessage}
        hasError={errors.ad_status?.hasError}
        {...getOverrideProps(overrides, "ad_status")}
      ></TextField>
      <TextField
        label="Ms ss"
        isRequired={false}
        isReadOnly={false}
        value={ms_ss}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss: value,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.ms_ss ?? value;
          }
          if (errors.ms_ss?.hasError) {
            runValidationTasks("ms_ss", value);
          }
          setMs_ss(value);
        }}
        onBlur={() => runValidationTasks("ms_ss", ms_ss)}
        errorMessage={errors.ms_ss?.errorMessage}
        hasError={errors.ms_ss?.hasError}
        {...getOverrideProps(overrides, "ms_ss")}
      ></TextField>
      <TextField
        label="Line item type"
        isRequired={false}
        isReadOnly={false}
        value={line_item_type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type: value,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.line_item_type ?? value;
          }
          if (errors.line_item_type?.hasError) {
            runValidationTasks("line_item_type", value);
          }
          setLine_item_type(value);
        }}
        onBlur={() => runValidationTasks("line_item_type", line_item_type)}
        errorMessage={errors.line_item_type?.errorMessage}
        hasError={errors.line_item_type?.hasError}
        {...getOverrideProps(overrides, "line_item_type")}
      ></TextField>
      <TextField
        label="Sales vertical"
        isRequired={false}
        isReadOnly={false}
        value={sales_vertical}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical: value,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.sales_vertical ?? value;
          }
          if (errors.sales_vertical?.hasError) {
            runValidationTasks("sales_vertical", value);
          }
          setSales_vertical(value);
        }}
        onBlur={() => runValidationTasks("sales_vertical", sales_vertical)}
        errorMessage={errors.sales_vertical?.errorMessage}
        hasError={errors.sales_vertical?.hasError}
        {...getOverrideProps(overrides, "sales_vertical")}
      ></TextField>
      <TextField
        label="Advertiser vertical"
        isRequired={false}
        isReadOnly={false}
        value={advertiser_vertical}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical: value,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.advertiser_vertical ?? value;
          }
          if (errors.advertiser_vertical?.hasError) {
            runValidationTasks("advertiser_vertical", value);
          }
          setAdvertiser_vertical(value);
        }}
        onBlur={() =>
          runValidationTasks("advertiser_vertical", advertiser_vertical)
        }
        errorMessage={errors.advertiser_vertical?.errorMessage}
        hasError={errors.advertiser_vertical?.hasError}
        {...getOverrideProps(overrides, "advertiser_vertical")}
      ></TextField>
      <TextField
        label="Advertiser cfid"
        isRequired={false}
        isReadOnly={false}
        value={advertiser_cfid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid: value,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.advertiser_cfid ?? value;
          }
          if (errors.advertiser_cfid?.hasError) {
            runValidationTasks("advertiser_cfid", value);
          }
          setAdvertiser_cfid(value);
        }}
        onBlur={() => runValidationTasks("advertiser_cfid", advertiser_cfid)}
        errorMessage={errors.advertiser_cfid?.errorMessage}
        hasError={errors.advertiser_cfid?.hasError}
        {...getOverrideProps(overrides, "advertiser_cfid")}
      ></TextField>
      <TextField
        label="Advertiser name"
        isRequired={false}
        isReadOnly={false}
        value={advertiser_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name: value,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.advertiser_name ?? value;
          }
          if (errors.advertiser_name?.hasError) {
            runValidationTasks("advertiser_name", value);
          }
          setAdvertiser_name(value);
        }}
        onBlur={() => runValidationTasks("advertiser_name", advertiser_name)}
        errorMessage={errors.advertiser_name?.errorMessage}
        hasError={errors.advertiser_name?.hasError}
        {...getOverrideProps(overrides, "advertiser_name")}
      ></TextField>
      <TextField
        label="Service type"
        isRequired={false}
        isReadOnly={false}
        value={service_type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type: value,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.service_type ?? value;
          }
          if (errors.service_type?.hasError) {
            runValidationTasks("service_type", value);
          }
          setService_type(value);
        }}
        onBlur={() => runValidationTasks("service_type", service_type)}
        errorMessage={errors.service_type?.errorMessage}
        hasError={errors.service_type?.hasError}
        {...getOverrideProps(overrides, "service_type")}
      ></TextField>
      <TextField
        label="Advertiser industry"
        isRequired={false}
        isReadOnly={false}
        value={advertiser_industry}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry: value,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.advertiser_industry ?? value;
          }
          if (errors.advertiser_industry?.hasError) {
            runValidationTasks("advertiser_industry", value);
          }
          setAdvertiser_industry(value);
        }}
        onBlur={() =>
          runValidationTasks("advertiser_industry", advertiser_industry)
        }
        errorMessage={errors.advertiser_industry?.errorMessage}
        hasError={errors.advertiser_industry?.hasError}
        {...getOverrideProps(overrides, "advertiser_industry")}
      ></TextField>
      <TextField
        label="Advertiser sub industry"
        isRequired={false}
        isReadOnly={false}
        value={advertiser_sub_industry}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry: value,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.advertiser_sub_industry ?? value;
          }
          if (errors.advertiser_sub_industry?.hasError) {
            runValidationTasks("advertiser_sub_industry", value);
          }
          setAdvertiser_sub_industry(value);
        }}
        onBlur={() =>
          runValidationTasks("advertiser_sub_industry", advertiser_sub_industry)
        }
        errorMessage={errors.advertiser_sub_industry?.errorMessage}
        hasError={errors.advertiser_sub_industry?.hasError}
        {...getOverrideProps(overrides, "advertiser_sub_industry")}
      ></TextField>
      <TextField
        label="Campaign cfid"
        isRequired={false}
        isReadOnly={false}
        value={campaign_cfid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid: value,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.campaign_cfid ?? value;
          }
          if (errors.campaign_cfid?.hasError) {
            runValidationTasks("campaign_cfid", value);
          }
          setCampaign_cfid(value);
        }}
        onBlur={() => runValidationTasks("campaign_cfid", campaign_cfid)}
        errorMessage={errors.campaign_cfid?.errorMessage}
        hasError={errors.campaign_cfid?.hasError}
        {...getOverrideProps(overrides, "campaign_cfid")}
      ></TextField>
      <TextField
        label="Campaign name"
        isRequired={false}
        isReadOnly={false}
        value={campaign_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name: value,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.campaign_name ?? value;
          }
          if (errors.campaign_name?.hasError) {
            runValidationTasks("campaign_name", value);
          }
          setCampaign_name(value);
        }}
        onBlur={() => runValidationTasks("campaign_name", campaign_name)}
        errorMessage={errors.campaign_name?.errorMessage}
        hasError={errors.campaign_name?.hasError}
        {...getOverrideProps(overrides, "campaign_name")}
      ></TextField>
      <TextField
        label="Campaign goal"
        isRequired={false}
        isReadOnly={false}
        value={campaign_goal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal: value,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.campaign_goal ?? value;
          }
          if (errors.campaign_goal?.hasError) {
            runValidationTasks("campaign_goal", value);
          }
          setCampaign_goal(value);
        }}
        onBlur={() => runValidationTasks("campaign_goal", campaign_goal)}
        errorMessage={errors.campaign_goal?.errorMessage}
        hasError={errors.campaign_goal?.hasError}
        {...getOverrideProps(overrides, "campaign_goal")}
      ></TextField>
      <TextField
        label="Campaign goal category"
        isRequired={false}
        isReadOnly={false}
        value={campaign_goal_category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category: value,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.campaign_goal_category ?? value;
          }
          if (errors.campaign_goal_category?.hasError) {
            runValidationTasks("campaign_goal_category", value);
          }
          setCampaign_goal_category(value);
        }}
        onBlur={() =>
          runValidationTasks("campaign_goal_category", campaign_goal_category)
        }
        errorMessage={errors.campaign_goal_category?.errorMessage}
        hasError={errors.campaign_goal_category?.hasError}
        {...getOverrideProps(overrides, "campaign_goal_category")}
      ></TextField>
      <TextField
        label="Is supply 3px"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={is_supply_3px}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px: value,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.is_supply_3px ?? value;
          }
          if (errors.is_supply_3px?.hasError) {
            runValidationTasks("is_supply_3px", value);
          }
          setIs_supply_3px(value);
        }}
        onBlur={() => runValidationTasks("is_supply_3px", is_supply_3px)}
        errorMessage={errors.is_supply_3px?.errorMessage}
        hasError={errors.is_supply_3px?.hasError}
        {...getOverrideProps(overrides, "is_supply_3px")}
      ></TextField>
      <TextField
        label="Is supply ono"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={is_supply_ono}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono: value,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.is_supply_ono ?? value;
          }
          if (errors.is_supply_ono?.hasError) {
            runValidationTasks("is_supply_ono", value);
          }
          setIs_supply_ono(value);
        }}
        onBlur={() => runValidationTasks("is_supply_ono", is_supply_ono)}
        errorMessage={errors.is_supply_ono?.errorMessage}
        hasError={errors.is_supply_ono?.hasError}
        {...getOverrideProps(overrides, "is_supply_ono")}
      ></TextField>
      <TextField
        label="Is supply aps"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={is_supply_aps}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps: value,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.is_supply_aps ?? value;
          }
          if (errors.is_supply_aps?.hasError) {
            runValidationTasks("is_supply_aps", value);
          }
          setIs_supply_aps(value);
        }}
        onBlur={() => runValidationTasks("is_supply_aps", is_supply_aps)}
        errorMessage={errors.is_supply_aps?.errorMessage}
        hasError={errors.is_supply_aps?.hasError}
        {...getOverrideProps(overrides, "is_supply_aps")}
      ></TextField>
      <TextField
        label="Is endemic"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={is_endemic}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic: value,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.is_endemic ?? value;
          }
          if (errors.is_endemic?.hasError) {
            runValidationTasks("is_endemic", value);
          }
          setIs_endemic(value);
        }}
        onBlur={() => runValidationTasks("is_endemic", is_endemic)}
        errorMessage={errors.is_endemic?.errorMessage}
        hasError={errors.is_endemic?.hasError}
        {...getOverrideProps(overrides, "is_endemic")}
      ></TextField>
      <TextField
        label="Is onsite"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={is_onsite}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite: value,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.is_onsite ?? value;
          }
          if (errors.is_onsite?.hasError) {
            runValidationTasks("is_onsite", value);
          }
          setIs_onsite(value);
        }}
        onBlur={() => runValidationTasks("is_onsite", is_onsite)}
        errorMessage={errors.is_onsite?.errorMessage}
        hasError={errors.is_onsite?.hasError}
        {...getOverrideProps(overrides, "is_onsite")}
      ></TextField>
      <TextField
        label="Is offsite"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={is_offsite}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite: value,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.is_offsite ?? value;
          }
          if (errors.is_offsite?.hasError) {
            runValidationTasks("is_offsite", value);
          }
          setIs_offsite(value);
        }}
        onBlur={() => runValidationTasks("is_offsite", is_offsite)}
        errorMessage={errors.is_offsite?.errorMessage}
        hasError={errors.is_offsite?.hasError}
        {...getOverrideProps(overrides, "is_offsite")}
      ></TextField>
      <TextField
        label="Base bid"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={base_bid}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid: value,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.base_bid ?? value;
          }
          if (errors.base_bid?.hasError) {
            runValidationTasks("base_bid", value);
          }
          setBase_bid(value);
        }}
        onBlur={() => runValidationTasks("base_bid", base_bid)}
        errorMessage={errors.base_bid?.errorMessage}
        hasError={errors.base_bid?.hasError}
        {...getOverrideProps(overrides, "base_bid")}
      ></TextField>
      <TextField
        label="Dim date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={dim_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date: value,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.dim_date ?? value;
          }
          if (errors.dim_date?.hasError) {
            runValidationTasks("dim_date", value);
          }
          setDim_date(value);
        }}
        onBlur={() => runValidationTasks("dim_date", dim_date)}
        errorMessage={errors.dim_date?.errorMessage}
        hasError={errors.dim_date?.hasError}
        {...getOverrideProps(overrides, "dim_date")}
      ></TextField>
      <TextField
        label="Impressions"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={impressions}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions: value,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.impressions ?? value;
          }
          if (errors.impressions?.hasError) {
            runValidationTasks("impressions", value);
          }
          setImpressions(value);
        }}
        onBlur={() => runValidationTasks("impressions", impressions)}
        errorMessage={errors.impressions?.errorMessage}
        hasError={errors.impressions?.hasError}
        {...getOverrideProps(overrides, "impressions")}
      ></TextField>
      <TextField
        label="Spend"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={spend}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend: value,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.spend ?? value;
          }
          if (errors.spend?.hasError) {
            runValidationTasks("spend", value);
          }
          setSpend(value);
        }}
        onBlur={() => runValidationTasks("spend", spend)}
        errorMessage={errors.spend?.errorMessage}
        hasError={errors.spend?.hasError}
        {...getOverrideProps(overrides, "spend")}
      ></TextField>
      <TextField
        label="Clicks"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={clicks}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks: value,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.clicks ?? value;
          }
          if (errors.clicks?.hasError) {
            runValidationTasks("clicks", value);
          }
          setClicks(value);
        }}
        onBlur={() => runValidationTasks("clicks", clicks)}
        errorMessage={errors.clicks?.errorMessage}
        hasError={errors.clicks?.hasError}
        {...getOverrideProps(overrides, "clicks")}
      ></TextField>
      <TextField
        label="M2 considerations click"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={m2_considerations_click}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click: value,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.m2_considerations_click ?? value;
          }
          if (errors.m2_considerations_click?.hasError) {
            runValidationTasks("m2_considerations_click", value);
          }
          setM2_considerations_click(value);
        }}
        onBlur={() =>
          runValidationTasks("m2_considerations_click", m2_considerations_click)
        }
        errorMessage={errors.m2_considerations_click?.errorMessage}
        hasError={errors.m2_considerations_click?.hasError}
        {...getOverrideProps(overrides, "m2_considerations_click")}
      ></TextField>
      <TextField
        label="Purchases"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={purchases}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases: value,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.purchases ?? value;
          }
          if (errors.purchases?.hasError) {
            runValidationTasks("purchases", value);
          }
          setPurchases(value);
        }}
        onBlur={() => runValidationTasks("purchases", purchases)}
        errorMessage={errors.purchases?.errorMessage}
        hasError={errors.purchases?.hasError}
        {...getOverrideProps(overrides, "purchases")}
      ></TextField>
      <TextField
        label="Purchase amounts"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={purchase_amounts}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts: value,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.purchase_amounts ?? value;
          }
          if (errors.purchase_amounts?.hasError) {
            runValidationTasks("purchase_amounts", value);
          }
          setPurchase_amounts(value);
        }}
        onBlur={() => runValidationTasks("purchase_amounts", purchase_amounts)}
        errorMessage={errors.purchase_amounts?.errorMessage}
        hasError={errors.purchase_amounts?.hasError}
        {...getOverrideProps(overrides, "purchase_amounts")}
      ></TextField>
      <TextField
        label="Avg max bid"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={avg_max_bid}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid: value,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.avg_max_bid ?? value;
          }
          if (errors.avg_max_bid?.hasError) {
            runValidationTasks("avg_max_bid", value);
          }
          setAvg_max_bid(value);
        }}
        onBlur={() => runValidationTasks("avg_max_bid", avg_max_bid)}
        errorMessage={errors.avg_max_bid?.errorMessage}
        hasError={errors.avg_max_bid?.hasError}
        {...getOverrideProps(overrides, "avg_max_bid")}
      ></TextField>
      <TextField
        label="Number bid request eligible"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={number_bid_request_eligible}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible: value,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.number_bid_request_eligible ?? value;
          }
          if (errors.number_bid_request_eligible?.hasError) {
            runValidationTasks("number_bid_request_eligible", value);
          }
          setNumber_bid_request_eligible(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "number_bid_request_eligible",
            number_bid_request_eligible
          )
        }
        errorMessage={errors.number_bid_request_eligible?.errorMessage}
        hasError={errors.number_bid_request_eligible?.hasError}
        {...getOverrideProps(overrides, "number_bid_request_eligible")}
      ></TextField>
      <TextField
        label="Number bid request won in cs"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={number_bid_request_won_in_cs}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs: value,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.number_bid_request_won_in_cs ?? value;
          }
          if (errors.number_bid_request_won_in_cs?.hasError) {
            runValidationTasks("number_bid_request_won_in_cs", value);
          }
          setNumber_bid_request_won_in_cs(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "number_bid_request_won_in_cs",
            number_bid_request_won_in_cs
          )
        }
        errorMessage={errors.number_bid_request_won_in_cs?.errorMessage}
        hasError={errors.number_bid_request_won_in_cs?.hasError}
        {...getOverrideProps(overrides, "number_bid_request_won_in_cs")}
      ></TextField>
      <TextField
        label="Number impressions"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={number_impressions}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions: value,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.number_impressions ?? value;
          }
          if (errors.number_impressions?.hasError) {
            runValidationTasks("number_impressions", value);
          }
          setNumber_impressions(value);
        }}
        onBlur={() =>
          runValidationTasks("number_impressions", number_impressions)
        }
        errorMessage={errors.number_impressions?.errorMessage}
        hasError={errors.number_impressions?.hasError}
        {...getOverrideProps(overrides, "number_impressions")}
      ></TextField>
      <TextField
        label="Total impression at max bid"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={total_impression_at_max_bid}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid: value,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.total_impression_at_max_bid ?? value;
          }
          if (errors.total_impression_at_max_bid?.hasError) {
            runValidationTasks("total_impression_at_max_bid", value);
          }
          setTotal_impression_at_max_bid(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "total_impression_at_max_bid",
            total_impression_at_max_bid
          )
        }
        errorMessage={errors.total_impression_at_max_bid?.errorMessage}
        hasError={errors.total_impression_at_max_bid?.hasError}
        {...getOverrideProps(overrides, "total_impression_at_max_bid")}
      ></TextField>
      <TextField
        label="Internal win rate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={internal_win_rate}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate: value,
              external_win_rate,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.internal_win_rate ?? value;
          }
          if (errors.internal_win_rate?.hasError) {
            runValidationTasks("internal_win_rate", value);
          }
          setInternal_win_rate(value);
        }}
        onBlur={() =>
          runValidationTasks("internal_win_rate", internal_win_rate)
        }
        errorMessage={errors.internal_win_rate?.errorMessage}
        hasError={errors.internal_win_rate?.hasError}
        {...getOverrideProps(overrides, "internal_win_rate")}
      ></TextField>
      <TextField
        label="External win rate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={external_win_rate}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate: value,
              average_bidamount_among_bids,
            };
            const result = onChange(modelFields);
            value = result?.external_win_rate ?? value;
          }
          if (errors.external_win_rate?.hasError) {
            runValidationTasks("external_win_rate", value);
          }
          setExternal_win_rate(value);
        }}
        onBlur={() =>
          runValidationTasks("external_win_rate", external_win_rate)
        }
        errorMessage={errors.external_win_rate?.errorMessage}
        hasError={errors.external_win_rate?.hasError}
        {...getOverrideProps(overrides, "external_win_rate")}
      ></TextField>
      <TextField
        label="Average bidamount among bids"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={average_bidamount_among_bids}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              dim_ad_id,
              ad_name,
              ad_cfid,
              ad_url,
              ad_status,
              ms_ss,
              line_item_type,
              sales_vertical,
              advertiser_vertical,
              advertiser_cfid,
              advertiser_name,
              service_type,
              advertiser_industry,
              advertiser_sub_industry,
              campaign_cfid,
              campaign_name,
              campaign_goal,
              campaign_goal_category,
              is_supply_3px,
              is_supply_ono,
              is_supply_aps,
              is_endemic,
              is_onsite,
              is_offsite,
              base_bid,
              dim_date,
              impressions,
              spend,
              clicks,
              m2_considerations_click,
              purchases,
              purchase_amounts,
              avg_max_bid,
              number_bid_request_eligible,
              number_bid_request_won_in_cs,
              number_impressions,
              total_impression_at_max_bid,
              internal_win_rate,
              external_win_rate,
              average_bidamount_among_bids: value,
            };
            const result = onChange(modelFields);
            value = result?.average_bidamount_among_bids ?? value;
          }
          if (errors.average_bidamount_among_bids?.hasError) {
            runValidationTasks("average_bidamount_among_bids", value);
          }
          setAverage_bidamount_among_bids(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "average_bidamount_among_bids",
            average_bidamount_among_bids
          )
        }
        errorMessage={errors.average_bidamount_among_bids?.errorMessage}
        hasError={errors.average_bidamount_among_bids?.hasError}
        {...getOverrideProps(overrides, "average_bidamount_among_bids")}
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
