/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const createAdline = /* GraphQL */ `
  mutation CreateAdline(
    $input: CreateAdlineInput!
    $condition: ModelAdlineConditionInput
  ) {
    createAdline(input: $input, condition: $condition) {
      dim_ad_id
      ad_name
      ad_cfid
      ad_url
      ad_status
      ms_ss
      line_item_type
      sales_vertical
      advertiser_vertical
      advertiser_cfid
      advertiser_name
      service_type
      advertiser_industry
      advertiser_sub_industry
      campaign_cfid
      campaign_name
      campaign_goal
      campaign_goal_category
      is_supply_3px
      is_supply_ono
      is_supply_aps
      is_endemic
      is_onsite
      is_offsite
      base_bid
      dim_date
      impressions
      spend
      clicks
      m2_considerations_click
      purchases
      purchase_amounts
      avg_max_bid
      number_bid_request_eligible
      number_bid_request_won_in_cs
      number_impressions
      total_impression_at_max_bid
      internal_win_rate
      external_win_rate
      average_bidamount_among_bids
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateAdline = /* GraphQL */ `
  mutation UpdateAdline(
    $input: UpdateAdlineInput!
    $condition: ModelAdlineConditionInput
  ) {
    updateAdline(input: $input, condition: $condition) {
      dim_ad_id
      ad_name
      ad_cfid
      ad_url
      ad_status
      ms_ss
      line_item_type
      sales_vertical
      advertiser_vertical
      advertiser_cfid
      advertiser_name
      service_type
      advertiser_industry
      advertiser_sub_industry
      campaign_cfid
      campaign_name
      campaign_goal
      campaign_goal_category
      is_supply_3px
      is_supply_ono
      is_supply_aps
      is_endemic
      is_onsite
      is_offsite
      base_bid
      dim_date
      impressions
      spend
      clicks
      m2_considerations_click
      purchases
      purchase_amounts
      avg_max_bid
      number_bid_request_eligible
      number_bid_request_won_in_cs
      number_impressions
      total_impression_at_max_bid
      internal_win_rate
      external_win_rate
      average_bidamount_among_bids
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteAdline = /* GraphQL */ `
  mutation DeleteAdline(
    $input: DeleteAdlineInput!
    $condition: ModelAdlineConditionInput
  ) {
    deleteAdline(input: $input, condition: $condition) {
      dim_ad_id
      ad_name
      ad_cfid
      ad_url
      ad_status
      ms_ss
      line_item_type
      sales_vertical
      advertiser_vertical
      advertiser_cfid
      advertiser_name
      service_type
      advertiser_industry
      advertiser_sub_industry
      campaign_cfid
      campaign_name
      campaign_goal
      campaign_goal_category
      is_supply_3px
      is_supply_ono
      is_supply_aps
      is_endemic
      is_onsite
      is_offsite
      base_bid
      dim_date
      impressions
      spend
      clicks
      m2_considerations_click
      purchases
      purchase_amounts
      avg_max_bid
      number_bid_request_eligible
      number_bid_request_won_in_cs
      number_impressions
      total_impression_at_max_bid
      internal_win_rate
      external_win_rate
      average_bidamount_among_bids
      id
      createdAt
      updatedAt
    }
  }
`;
